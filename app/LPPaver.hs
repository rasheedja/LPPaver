module Main where

import MixedTypesNumPrelude
import AERN2.MP.Ball
import LPPaver.Algorithm.DNF
import PropaFP.Expression
import PropaFP.Eliminator
import PropaFP.VarMap
import PropaFP.Parsers.Smt (parseSMT2, parseVCToF, ParsingMode (Why3, CNF))
import PropaFP.Parsers.DRealSmt
import Options.Applicative
import System.Directory
import System.FilePath
import Data.Ratio
import LPPaver.Algorithm.Util
import LPPaver.Algorithm.Type
import Control.Monad

data ProverOptions = ProverOptions
  {
    provingProcessDone :: Bool,
    ceMode :: Bool,
    depthCutoff :: Integer,
    bestFirstSearchCutoff :: Integer,
    precision :: Integer,
    -- relativeImprovementCutoff :: Rational, make this a flag, as a double is probably easier
    fileName :: String,
    outputPavings :: Bool
  }

proverOptions :: Parser ProverOptions
proverOptions = ProverOptions
  <$> switch
    (
      long "propafp-done"
      <> short 'a'
      <> help "Add this option if the target file was generated by PropaFP"
    )
  <*> switch
    (
      long "ce-mode"
      <> short 'c'
      <> help "Tell LPPaver to focus on finding a counterexample"
    )
  <*> option auto
    (
      long "depth-cutoff"
      <> short 'd'
      <> help "How hard LPPaver 'works' until giving up. This option is ignored when ce-mode is on"
      <> showDefault
      <> value 100
      <> metavar "INT"
    )
  <*> option auto
    (
      long "best-first-search-cutoff"
      <> short 'b'
      <> help "How hard LPPaver 'works' until giving up when searching for a counterexample. This option is ignored when ce-mode is off"
      <> showDefault
      <> value 1000
      <> metavar "INT"
    )
  <*> option auto
    (
      long "precision"
      <> short 'p'
      <> help "Precision of floating-point numbers used within the prover. Higher precision slows down the prover but may be needed for more difficult problems"
      <> showDefault
      <> value 100
      <> metavar "INT"
    )
  <*> strOption
    (
      long "file-path"
      <> short 'f'
      <> help "SMT2 file to be checked"
      <> metavar "filePath"
    )
  <*> switch
    (
      long "output-pavings"
      <> short 'o'
      <> help "When this flag is passed, LPPaver will produce JSON output of paved boxes."
    )

main :: IO ()
main =
  do
    runProver =<< execParser opts
    where
      opts = info (proverOptions <**> helper)
        ( fullDesc
        <> progDesc "todo"
        <> header "LPPaver - prover" )

runProver :: ProverOptions -> IO ()
runProver proverOptions@(ProverOptions provingProcessDone ceMode depthCutoff bestFirstSearchCutoff p filePath outputPavings) =
  do
    if provingProcessDone
      then do
        parsedFile <- parseSMT2 filePath
        case parseDRealSmtToF parsedFile of
          (Just vc, typedVarMap) ->
            let
              -- If there are variable free comparisons here, we could not deal with them earlier in the proving process.
              -- LPPaver cannot perform any better with these so we safely remove them.
              ednf = fDNFToEDNF . simplifyFDNF . fToFDNF . simplifyF . minMaxAbsEliminatorF . simplifyF . removeVariableFreeComparisons $ vc
            in do
              decideEDNFWithVarMap ednf typedVarMap proverOptions
          (_, _) -> error "Error - Issue parsing given SMT file"
      else do
        -- PATH needs to include folder containing FPTaylor binary after make
        -- symlink to the binary in somewhere like ~/.local/bin will NOT work reliably
        mFptaylorPath <- findExecutable "fptaylor"
        case mFptaylorPath of
          Nothing -> putStrLn "Error - fptaylor executable not in path"
          Just fptaylorPath -> do
            mParsedVC <- parseVCToF filePath fptaylorPath
            case mParsedVC of
              Just (vc, typedVarMap) ->
                let
                  -- If there are variable free comparisons here, we could not deal with them earlier in the proving process.
                  -- LPPaver cannot perform any better with these so we safely remove them.
                  ednf = fDNFToEDNF . simplifyFDNF . fToFDNF . simplifyF . minMaxAbsEliminatorF . simplifyF . removeVariableFreeComparisons $ vc
                in do
                  decideEDNFWithVarMap ednf typedVarMap proverOptions
              Nothing -> do
                putStrLn "unknown"
                putStrLn "Issue parsing file"

decideEDNFWithVarMap :: [[ESafe]] -> TypedVarMap -> ProverOptions -> IO ()
decideEDNFWithVarMap ednf typedVarMap (ProverOptions provingProcessDone ceMode depthCutoff bestFirstSearchCutoff p filePath outputPavings) = do
  let result =
        if ceMode
          then checkEDNFBestFirstWithSimplexCE ednf typedVarMap bestFirstSearchCutoff 1.2 (prec p)
          else checkEDNFDepthFirstWithSimplex  ednf typedVarMap depthCutoff           1.2 (prec p)
  let vcFileWithoutExtension = takeFileName . dropExtensions $ filePath
  case result of
    SatDNF model pavings -> do
      putStrLn "sat"
      printSMTModel model
      prettyPrintCounterExample model
      when outputPavings $ do
        let jsonOutput = typedVarMapBoxPavingsToJSON pavings 0
        writeJSONFile vcFileWithoutExtension jsonOutput
    UnsatDNF listOfPavings -> do
      putStrLn "unsat"
      when outputPavings $ do
        let jsonOutput = listOfTypedVarMapPavingsToJSON listOfPavings 0
        writeJSONFile vcFileWithoutExtension jsonOutput
    IndeterminateDNF indeterminateExample pavings -> do
      putStrLn "unknown"
      printSMTModel indeterminateExample
      prettyPrintCounterExample indeterminateExample
      when outputPavings $ do
        let jsonOutput = typedVarMapBoxPavingsToJSON pavings 0
        writeJSONFile vcFileWithoutExtension jsonOutput
  where
    -- Useful functions for converting our pavings into a JSON object

    rationalToJSON :: Rational -> String
    rationalToJSON r = "[" ++ show n ++ "," ++ show d ++ "]"
      where
        n = numerator r
        d = denominator r

    listOfTypedVarMapPavingsToJSON :: [[BoxStep TypedVarMap]] -> Integer -> String
    listOfTypedVarMapPavingsToJSON listOfPavings tabCount =
      replicate tabCount '\t' ++ "[" ++ "\n" ++
      aux listOfPavings ++ "\n" ++
      replicate tabCount '\t' ++ "]"
      where
        aux [] = ""
        aux [ps] = typedVarMapBoxPavingsToJSON ps 1
        aux (ps : pss) = aux [ps] ++ ",\n" ++ aux pss

    typedVarMapBoxPavingsToJSON :: [BoxStep TypedVarMap] -> Integer -> String
    typedVarMapBoxPavingsToJSON pavings tabCount =
      replicate tabCount '\t' ++ "[" ++ "\n" ++
      aux pavings ++ "\n" ++
      replicate tabCount '\t' ++ "]"
      where
        tabCount' = tabCount + 1

        aux [] = ""
        aux [p] = typedVarMapBoxPavingToJSON p tabCount'
        aux (p : ps) = aux [p] ++ replicate tabCount' '\t' ++ ",\n" ++ aux ps

    typedVarMapBoxPavingToJSON :: BoxStep TypedVarMap -> Integer -> String
    typedVarMapBoxPavingToJSON boxStep tabCount =
      replicate tabCount '\t' ++ "{\n" ++
      aux boxStep ++
      replicate tabCount '\t' ++ "}\n"
      where
        tabCount' = tabCount + 1
        tabCount'' = tabCount' + 1
        tabCount''' = tabCount'' + 1
        tabCount'''' = tabCount''' + 1

        showTypedVarMap box boxName = 
          replicate tabCount' '\t' ++ "\"" ++ boxName ++ "\":\n" ++
          replicate tabCount'' '\t' ++ "[\n" ++
          aux box ++
          replicate tabCount'' '\t' ++ "]"
          where
            aux [] = ""
            aux [TypedVar (v, (l, r)) t] =
              replicate tabCount''' '\t' ++ "{\n" ++
              replicate tabCount'''' '\t' ++ "\"variableName\" : " ++ show v ++ ",\n" ++
              replicate tabCount'''' '\t' ++ "\"variableType\" : " ++ "\"" ++ show t ++ "\"" ++ ",\n" ++
              replicate tabCount'''' '\t' ++ "\"leftEndpoint\" : " ++ rationalToJSON l ++ ",\n" ++
              replicate tabCount'''' '\t' ++ "\"rightEndpoint\" : " ++ rationalToJSON r ++ "\n" ++
              replicate tabCount''' '\t' ++ "}\n"
            aux (v : vs) = aux [v] ++ replicate tabCount''' '\t' ++ "," ++ "\n" ++ aux vs

        aux (Initial box) =
          replicate tabCount' '\t' ++ "\"boxStep\": \"Initial\",\n" ++
          showTypedVarMap box "box" ++ "\n"
        aux (EvalTrue box) =
          replicate tabCount' '\t' ++ "\"boxStep\": \"EvalTrue\",\n" ++
          showTypedVarMap box "box" ++ "\n"
        aux (EvalFalse box) =
          replicate tabCount' '\t' ++ "\"boxStep\": \"EvalFalse\",\n" ++
          showTypedVarMap box "box" ++ "\n"
        aux (GaveUp box) =
          replicate tabCount' '\t' ++ "\"boxStep\": \"GaveUp\",\n" ++
          showTypedVarMap box "box" ++ "\n"
        aux (ContractEmpty box) =
          replicate tabCount' '\t' ++ "\"boxStep\": \"ContractEmpty\",\n" ++
          showTypedVarMap box "box" ++ "\n"
        aux (Contract box boxC) =
          replicate tabCount' '\t' ++ "\"boxStep\": \"Contract\",\n" ++
          showTypedVarMap box "box" ++ ",\n" ++
          showTypedVarMap boxC "boxC" ++ "\n"
        aux (FoundModel box boxM) =
          replicate tabCount' '\t' ++ "\"boxStep\": \"FoundModel\",\n" ++
          showTypedVarMap box "box" ++ ",\n" ++
          showTypedVarMap boxM "boxM" ++ "\n"
        aux (Split box boxL boxR) =
          replicate tabCount' '\t' ++ "\"boxStep\": \"Split\",\n" ++
          showTypedVarMap box "box" ++ ",\n" ++
          showTypedVarMap boxL "boxL" ++ ",\n" ++
          showTypedVarMap boxR "boxR" ++ "\n"

    writeJSONFile :: String -> String -> IO ()
    writeJSONFile fileNameWithoutExtension jsonString = do
      putStr "Saving pavings information to "
      safeFile >>= putStrLn
      safeFile >>= (`writeFile` jsonString)
      putStrLn "Pavings information saved"
      where
        safeFile = do
          let jsonFileName = fileNameWithoutExtension ++ ".json"
          doesJSONFileNameExist <- doesFileExist jsonFileName
          if doesJSONFileNameExist
            then findSafeFile fileNameWithoutExtension 0
            else return jsonFileName

        -- |Chooses an empty/non-existant file to write to
        findSafeFile f appendCounter = do
          let currentF = f ++ show appendCounter ++ ".json"
          doesCurrentFExist <- doesFileExist currentF
          if doesCurrentFExist
            then findSafeFile f (appendCounter + 1)
            else return currentF

prettyPrintCounterExample :: TypedVarMap -> IO ()
prettyPrintCounterExample [] = return ()
prettyPrintCounterExample ((TypedVar (v, (l, r)) t) : vs) =
  if l == r
    then do
      putStrLn (v ++ " = " ++ show (double l))
      prettyPrintCounterExample vs
    else do
      putStrLn (v ++ " = [" ++ show (double l) ++ ", " ++ show (double r) ++ "]")
      prettyPrintCounterExample vs

printSMTModel :: TypedVarMap -> IO ()
printSMTModel typedVarMap =
  do
    putStrLn "(model"
    printModels typedVarMap
    putStrLn ")"
  where
    printModels [] = return ()
    printModels ((TypedVar (v, (l, r)) t) : vs) = do
      putStrLn $ "(define-fun " ++ v ++ " () " ++ show t ++ " " ++ showNum (l) ++ ")"
      putStrLn $ "(define-fun " ++ v ++ "_vc_constant" ++ " () " ++ show t ++ " " ++ showNum (l) ++ ")" --FIXME: Only do this with a Why3 or similar flag?
      printModels vs

    showNum :: Rational -> String
    showNum num =
      if num < 0
        then "(/ " ++ "(" ++ show (numerator num) ++ ") " ++ show (denominator num) ++ ")"
        else "(/ " ++ show (numerator num) ++ " " ++ show (denominator num) ++ ")"
