# Visualising LPPaver's Decision Algorithms (Experimental)

The `view_step.html` file contains JavaScript code to visualise the steps taken by LPPaver's algorithm using some `steps.js`.
Here, we describe how one can visualise 1 and 2-variable LPPaver problems.
Note that this feature is experimental.

## Recommended Usage

1. Copy and rename view_steps.html to $lppaver_vc.html where $lppaver_vc.smt2 is the VC you are trying to visualise.
2. Produce JSON output for $lppaver_vc.smt2 using the -o option (alternatively --output-pavings). This will produce a file typically named $lppaver_vc.json in your current directory (If this file already exists, a number will be appended to avoid overwriting any existing file).
    - DFS: lppaver -f $lppaver_vc.smt2 -o
    - BFS: lppaver -f $lppaver_vc.smt2 -c -o
3. Create a file named $lppaver_vc.js and fill as follows, replacing $var as appropriate.

```js
valuation = { };
varX = "$first_var_to_visualise";
varY = "$second_var_to_visualise";
conjunction_to_show = $conjunction_index_to_show;
// Note that the starting index for the conjunction here is considered 1.
steps = $json_output_file_contents
// The steps var should be a list of lists and be equal to the contents of $lppaver_vc.json.
```

4. Modify the following line in $my_file_name.

```html
<!-- Load the paving JSON data, stored in the variable "paving" -->
<script type="text/javascript" src="$lppaver_vc.js"></script>
```

5. Open $my_file_name.html in your preferred browser. Note that the html file must be in the `plot_steps` directory.

Two examples are provided, `taylor_sin_tight.html` is a visualisation of the 1-variable VC `test/testFiles/PropaFP/sat/taylor_sin_tight.smt2` and `heron_pres_3000eps_i4_n5.html` is a visualisation of the 2-variable VC `plot_steps/heron_pres_3000eps_i4_n5.html`, a 2-variable version of `test/testFiles/PropaFP/unsat/heron_pres.smt2` with a looser bound, `i` fixed to 4 and `n` to be 5.

This feature is experimental and your browser will most likely crash when attempting to visualise very large JSON files.
