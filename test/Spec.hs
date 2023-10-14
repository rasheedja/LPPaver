module Main where

import Prelude
import MixedTypesNumPrelude (ifThenElse)
-- import TestFiles
import System.Directory
import Control.Monad.Logger (filterLogger, runStdoutLoggingT, LogLevel(..))
import PropaFP.Expression
import PropaFP.VarMap
import PropaFP.Parsers.Smt
import PropaFP.Translators.DReal
import PropaFP.Translators.MetiTarski
import System.Exit
import LPPaver.Algorithm.DNF
import LPPaver.Algorithm.Util
import LPPaver.Algorithm.Type
import PropaFP.Eliminator (minMaxAbsEliminatorF)
import PropaFP.Parsers.DRealSmt
import AERN2.MP

main :: IO ()
main = do
  putStrLn "Testing Place VCs"
  testPlaceVCs
  putStrLn "Place VCs passed"
  putStrLn "Testing PropaFP VCs"
  testPropaFPVCs
  putStrLn "PropaFP VCs passed"

testPropaFPVCs :: IO ()
testPropaFPVCs = do
  currentDirectory <- getCurrentDirectory
  let satisfiableVCsParentDirectory = currentDirectory ++ "/test/testFiles/PropaFP/sat/"
  let unsatisfiableVCsParentDirectory = currentDirectory ++ "/test/testFiles/PropaFP/unsat/"
  satisfiableVCs <- listDirectory satisfiableVCsParentDirectory
  unsatisfiableVCs <- listDirectory unsatisfiableVCsParentDirectory
  putStrLn "Testing satisfiable VCs with 'model search' mode"
  checkVCsSat satisfiableVCs satisfiableVCsParentDirectory
  putStrLn "Testing unsatisfiable VCs with 'proving' mode"
  checkVCsUnsat unsatisfiableVCs unsatisfiableVCsParentDirectory

testPlaceVCs :: IO ()
testPlaceVCs = do
  currentDirectory <- getCurrentDirectory
  let satisfiableVCsParentDirectory = currentDirectory ++ "/test/testFiles/Place/sat/"
  let unsatisfiableVCsParentDirectory = currentDirectory ++ "/test/testFiles/Place/unsat/"
  satisfiableVCs <- listDirectory satisfiableVCsParentDirectory
  unsatisfiableVCs <- listDirectory unsatisfiableVCsParentDirectory
  putStrLn "Testing satisfiable VCs with 'model search' mode"
  checkVCsSat satisfiableVCs satisfiableVCsParentDirectory
  putStrLn "Testing unsatisfiable VCs with 'proving' mode"
  checkVCsUnsat unsatisfiableVCs unsatisfiableVCsParentDirectory


checkVCsSat :: [FilePath] -> FilePath -> IO ()
checkVCsSat [] _ = putStrLn "All satisfiable VCs are satisfiable"
checkVCsSat (file : files) fileParent = do
  mFptaylorPath <- findExecutable "fptaylor"
  case mFptaylorPath of
    Nothing -> putStrLn "Error - fptaylor executable not in path"
    Just fptaylorPath -> do
      mParsedVC <- parseVCToF (fileParent ++ file) fptaylorPath
      case mParsedVC of
        Just (vc, typedVarMap) ->
          let 
            ednf = fDNFToEDNF . simplifyFDNF . fToFDNF . simplifyF . minMaxAbsEliminatorF . simplifyF . removeVariableFreeComparisons $ vc
          in do
            dnfResult <- runStdoutLoggingT $ filterLogger (\_logSource logLevel -> logLevel > LevelError) $ checkEDNFBestFirstWithSimplexCE ednf typedVarMap 1000000 1.2 (prec 100)
            case dnfResult of
              SatDNF _ _ -> do
                putStrLn $ "Proved sat: " ++ file
                checkVCsSat files fileParent
              UnsatDNF _ -> do
                putStrLn $ "Satisfiable VC found to be unsatisfiable: " ++ file
                exitFailure
              IndeterminateDNF _ _ -> do
                putStrLn  $ "Satisfiable VC could not be decided: " ++ file
                exitFailure
        Nothing -> do
          putStrLn $ "Satisfiable VC could not be parsed: " ++ file
          exitFailure

checkVCsUnsat :: [FilePath] -> FilePath -> IO ()
checkVCsUnsat [] _ = putStrLn "All unsatisfiable VCs are unsatisfiable"
checkVCsUnsat (file : files) fileParent = do
  mFptaylorPath <- findExecutable "fptaylor"
  case mFptaylorPath of
    Nothing -> putStrLn "Error - fptaylor executable not in path"
    Just fptaylorPath -> do
      mParsedVC <- parseVCToF (fileParent ++ file) fptaylorPath
      case mParsedVC of
        Just (vc, typedVarMap) ->
          let 
            ednf = fDNFToEDNF . simplifyFDNF . fToFDNF . simplifyF . minMaxAbsEliminatorF . simplifyF . removeVariableFreeComparisons $ vc
          in do
            dnfResult <- runStdoutLoggingT $ filterLogger (\_logSource logLevel -> logLevel > LevelError) $ do checkEDNFDepthFirstWithSimplex  ednf typedVarMap 1000 1.2 (prec 100)
            case dnfResult of
              UnsatDNF _ -> do
                putStrLn $ "Proved unsat: " ++ file
                checkVCsUnsat files fileParent
              SatDNF _ _ -> do
                putStrLn $ "Unsatisfiable VC found to be satisfiable: " ++ file
                exitFailure
              IndeterminateDNF _ _ -> do
                putStrLn  $ "Unsatisfiable VC could not be decided: " ++ file
                exitFailure
        Nothing -> do
          putStrLn $ "Unsatisfiable VC could not be parsed: " ++ file
          exitFailure

-- main :: IO ()
-- main = runStdoutLoggingT $ do
--   liftIO $ putStrLn "Testing Place VCs"
--   testPlaceVCs
--   liftIO $ putStrLn "Place VCs passed"
--   liftIO $ putStrLn "Testing PropaFP VCs"
--   testPropaFPVCs
--   liftIO $ putStrLn "PropaFP VCs passed"

-- testPropaFPVCs :: (MonadIO m, MonadFail m) => LoggingT m ()
-- testPropaFPVCs = do
--   currentDirectory <- liftIO getCurrentDirectory
--   let satisfiableVCsParentDirectory = currentDirectory ++ "/test/testFiles/PropaFP/sat/"
--   let unsatisfiableVCsParentDirectory = currentDirectory ++ "/test/testFiles/PropaFP/unsat/"
--   satisfiableVCs <- liftIO $ listDirectory satisfiableVCsParentDirectory
--   unsatisfiableVCs <- liftIO $ listDirectory unsatisfiableVCsParentDirectory
--   liftIO $ putStrLn "Testing satisfiable VCs with 'model search' mode"
--   checkVCsSat satisfiableVCs satisfiableVCsParentDirectory
--   liftIO $ putStrLn "Testing unsatisfiable VCs with 'proving' mode"
--   checkVCsUnsat unsatisfiableVCs unsatisfiableVCsParentDirectory

-- testPlaceVCs :: (MonadIO m, MonadFail m) => LoggingT m ()
-- testPlaceVCs = do
--   currentDirectory <- liftIO getCurrentDirectory
--   let satisfiableVCsParentDirectory = currentDirectory ++ "/test/testFiles/Place/sat/"
--   let unsatisfiableVCsParentDirectory = currentDirectory ++ "/test/testFiles/Place/unsat/"
--   satisfiableVCs <- liftIO $ listDirectory satisfiableVCsParentDirectory
--   unsatisfiableVCs <- liftIO $ listDirectory unsatisfiableVCsParentDirectory
--   liftIO $ putStrLn "Testing satisfiable VCs with 'model search' mode"
--   checkVCsSat satisfiableVCs satisfiableVCsParentDirectory
--   liftIO $ putStrLn "Testing unsatisfiable VCs with 'proving' mode"
--   checkVCsUnsat unsatisfiableVCs unsatisfiableVCsParentDirectory


-- checkVCsSat :: (MonadIO m, MonadLogger m) => [FilePath] -> FilePath -> m ()
-- checkVCsSat [] _ = liftIO $ putStrLn "All satisfiable VCs are satisfiable"
-- checkVCsSat (file : files) fileParent = do
--   mFptaylorPath <- liftIO $ findExecutable "fptaylor"
--   case mFptaylorPath of
--     Nothing -> liftIO $ putStrLn "Error - fptaylor executable not in path"
--     Just fptaylorPath -> do
--       mParsedVC <- liftIO $ parseVCToF (fileParent ++ file) fptaylorPath
--       case mParsedVC of
--         Just (vc, typedVarMap) ->
--           let 
--             ednf = fDNFToEDNF . simplifyFDNF . fToFDNF . simplifyF . minMaxAbsEliminatorF . simplifyF . removeVariableFreeComparisons $ vc
--           in do
--             dnfResult <- checkEDNFBestFirstWithSimplexCE ednf typedVarMap 1000000 1.2 (prec 100)
--             case dnfResult of
--               SatDNF _ _ -> do
--                 liftIO $ putStrLn $ "Proved sat: " ++ file
--                 checkVCsSat files fileParent
--               UnsatDNF _ -> do
--                 liftIO $ putStrLn $ "Satisfiable VC found to be unsatisfiable: " ++ file
--                 liftIO $ exitFailure
--               IndeterminateDNF _ _ -> do
--                 liftIO $ putStrLn  $ "Satisfiable VC could not be decided: " ++ file
--                 liftIO $ exitFailure
--         Nothing -> do
--           liftIO $ putStrLn $ "Satisfiable VC could not be parsed: " ++ file
--           liftIO $ exitFailure

-- checkVCsUnsat :: (MonadIO m, MonadLogger m, MonadFail m) => [FilePath] -> FilePath -> m ()
-- checkVCsUnsat [] _ = liftIO $ putStrLn "All unsatisfiable VCs are unsatisfiable"
-- checkVCsUnsat (file : files) fileParent = do
--   mFptaylorPath <- liftIO $ findExecutable "fptaylor"
--   case mFptaylorPath of
--     Nothing -> liftIO $ putStrLn "Error - fptaylor executable not in path"
--     Just fptaylorPath -> do
--       mParsedVC <- liftIO $ parseVCToF (fileParent ++ file) fptaylorPath
--       case mParsedVC of
--         Just (vc, typedVarMap) ->
--           let 
--             ednf = fDNFToEDNF . simplifyFDNF . fToFDNF . simplifyF . minMaxAbsEliminatorF . simplifyF . removeVariableFreeComparisons $ vc
--           in do
--             dnfResult <- checkEDNFDepthFirstWithSimplex  ednf typedVarMap 1000 1.2 (prec 100)
--             case dnfResult of
--               UnsatDNF _ -> do
--                 liftIO $ putStrLn $ "Proved unsat: " ++ file
--                 checkVCsUnsat files fileParent
--               SatDNF _ _ -> do
--                 liftIO $ putStrLn $ "Unsatisfiable VC found to be satisfiable: " ++ file
--                 liftIO $ exitFailure
--               IndeterminateDNF _ _ -> do
--                 liftIO $ putStrLn  $ "Unsatisfiable VC could not be decided: " ++ file
--                 liftIO $ exitFailure
--         Nothing -> do
--           liftIO $ putStrLn $ "Unsatisfiable VC could not be parsed: " ++ file
--           liftIO $ exitFailure

-- -- |Take a list of input files, a prover for which PropaFP provides a translator, and a list of files unsupported by the translator.
-- -- Test if PropaFP generates the same file as the one stored (currently under PropaFP/examples/testParent/proverFolderName/testName.proverExt)
-- testProverTranslator :: [(String, String)] -> SupportedProver -> [(String, String)] -> IO ()
-- testProverTranslator [] _ _ = putStrLn "All tests passed"
-- testProverTranslator (test@(testParent, testName) : tests) prover unsupportedTests = do
--   mFptaylorPath <- findExecutable "fptaylor"
--   currentDirectory <- getCurrentDirectory
--   case mFptaylorPath of
--     Nothing -> putStrLn "FPTaylor executable not found in PATH"
--     Just fptaylorPath -> do
--       let vcToProcess = currentDirectory ++ "/examples/" ++ testParent ++ "/why3smt/" ++ testName ++ ".smt2"
--       let originalProcessedVCPath = currentDirectory ++  "/examples/" ++ testParent ++ "/" ++ getProverFolderName prover ++ "/" ++ testName ++ "." ++ getFileExtension prover
--       if test `elem` unsupportedTests
--         then do
--           putStrLn ("Test skipped (unsupported): " ++ vcToProcess) 
--           testProverTranslator tests prover unsupportedTests
--         else do
--           originalProcessedVC <- readFile originalProcessedVCPath
--           mNewProcessedVC <- parseVCToSolver vcToProcess fptaylorPath (getTranslator prover) (getNegationStatus prover)
--           case mNewProcessedVC of
--             Just newProcessedVC -> 
--               if newProcessedVC == originalProcessedVC
--                 then do
--                   putStrLn ("Test passed: " ++ vcToProcess)
--                   testProverTranslator tests prover unsupportedTests
--                 else do
--                   putStrLn $ "Processing the following file for dReal: " ++ vcToProcess
--                   putStrLn $ "Resulted in an output that differs from: " ++ originalProcessedVCPath
--                   putStrLn $ "The incorrect output is:\n"
--                   putStrLn newProcessedVC              
--                   putStrLn $ "The correct output is:\n"
--                   putStrLn originalProcessedVC
--                   putStrLn ("Test failed: " ++ vcToProcess)
--                   exitFailure
--             Nothing         -> do
--               putStrLn $ "Issue generating input for dReal using file: " ++ vcToProcess 
--               exitFailure
              