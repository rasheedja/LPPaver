# Changelog for LPPaver

## Unreleased Changes

- Polish documentation
- Add useful types for our decision algorithms
- Update decision algorithms to use these types, making them easier to read and maintain as well as returning pavings for each algorithm's result
- Add option -o to executable to write pavings to a JSON file.

## [v0.0.3.1](https://github.com/rasheedja/LPPaver/compare/v0.0.3.1...v0.0.3.1)

- Write initial README.md and REFERENCE.md
- Remove haddock documentation using GitHub pages
  - Issues with dependencies so using hackage instead

## [v0.0.3.0](https://github.com/rasheedja/LPPaver/compare/v0.0.3.0...v0.0.2.0)

- Deploy haddock documentation using GitHub pages
- Clean up and document new modules
- Split up single Type.hs module into smaller and better encapsulated modules
- Add constraintRightSide to LPPaver.Constraint.Util
- Document LPPaver.Constraint.Type and LPPaver.Constraint.Util

## [v0.0.2.0](https://github.com/rasheedja/LPPaver/compare/v0.0.2.0...v0.0.1)

- Replace minView with maxView in 'model search' mode
  - Higher ranges are more likely to produce models
- Add test suite
  - Uses PropaFP and 'Place' examples
- Update package dependencies

## [v0.0.1](https://github.com/rasheedja/LPPaver/tree/v0.0.1)

- Initial release
