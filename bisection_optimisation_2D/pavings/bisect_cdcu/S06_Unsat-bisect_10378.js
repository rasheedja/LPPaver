valuation = { };
varX = "x";
varY = "y";
conjunction_to_show = 1;
steps = [
	[
		{
			"boxStep": "Initial",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-50,1],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-50,1],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-50,1],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [50,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-50,1],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-50,1],
						"rightEndpoint" : [-25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [50,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,1],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-50,1],
						"rightEndpoint" : [-25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-50,1],
						"rightEndpoint" : [-25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [51,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-50,1],
						"rightEndpoint" : [-25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-50,1],
						"rightEndpoint" : [-25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-50,1],
						"rightEndpoint" : [-25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-50,1],
						"rightEndpoint" : [-25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [151,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-50,1],
						"rightEndpoint" : [-25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-50,1],
						"rightEndpoint" : [-25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-50,1],
						"rightEndpoint" : [-25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,1],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,1],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [51,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,1],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,1],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,1],
						"rightEndpoint" : [-25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [51,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,1],
						"rightEndpoint" : [-25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [53,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [-25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [53,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [-25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [-25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [-25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [-25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [155,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [-25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [-25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [-25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [155,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [155,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,1],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,1],
						"rightEndpoint" : [-25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [50,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,1],
						"rightEndpoint" : [-25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,1],
						"rightEndpoint" : [-25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [151,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,1],
						"rightEndpoint" : [-25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,1],
						"rightEndpoint" : [-25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,1],
						"rightEndpoint" : [-25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,1],
						"rightEndpoint" : [-25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,1],
						"rightEndpoint" : [-25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,1],
						"rightEndpoint" : [-25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,1],
						"rightEndpoint" : [-25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [151,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [151,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [-25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [-25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [-25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [-25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [555,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [555,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [-25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [-25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [653,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [653,16],
						"rightEndpoint" : [351,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [653,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [653,16],
						"rightEndpoint" : [351,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [-25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,2],
						"rightEndpoint" : [-25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [751,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [751,16],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [751,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [751,16],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [50,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [51,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [51,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [53,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [53,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [163,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [163,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [163,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [211,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [211,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [57,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [179,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [179,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [179,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [309,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [309,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [177,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [177,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [275,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [275,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [211,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [211,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [373,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [373,128],
						"rightEndpoint" : [211,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [373,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [373,128],
						"rightEndpoint" : [211,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [471,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [471,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [177,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [177,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [305,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [177,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [305,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [177,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [113,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [403,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [403,256],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [403,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [403,256],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [177,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [177,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [305,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [177,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [305,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [561,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [561,512],
						"rightEndpoint" : [305,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [561,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [561,512],
						"rightEndpoint" : [305,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [177,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [659,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [659,512],
						"rightEndpoint" : [177,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [659,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [659,512],
						"rightEndpoint" : [177,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [113,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [403,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [403,256],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [403,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [757,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [757,512],
						"rightEndpoint" : [403,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [757,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [757,512],
						"rightEndpoint" : [403,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [403,256],
						"rightEndpoint" : [113,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [403,256],
						"rightEndpoint" : [855,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [855,512],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [403,256],
						"rightEndpoint" : [855,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [855,512],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [275,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [275,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [501,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [501,256],
						"rightEndpoint" : [275,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [501,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [501,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [501,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [501,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [501,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [953,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [953,512],
						"rightEndpoint" : [501,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [953,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [953,512],
						"rightEndpoint" : [501,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [501,256],
						"rightEndpoint" : [275,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [501,256],
						"rightEndpoint" : [275,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [501,256],
						"rightEndpoint" : [275,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [501,256],
						"rightEndpoint" : [275,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [501,256],
						"rightEndpoint" : [275,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [501,256],
						"rightEndpoint" : [1051,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1051,512],
						"rightEndpoint" : [275,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [501,256],
						"rightEndpoint" : [1051,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1051,512],
						"rightEndpoint" : [275,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [81,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [599,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [599,256],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [599,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [599,256],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [177,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [177,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [305,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [177,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [305,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [305,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [305,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [305,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [561,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [561,512],
						"rightEndpoint" : [305,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [561,512]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [1525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [561,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [561,512]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [1525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [561,512]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [1525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [1073,1024]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [1525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1073,1024],
						"rightEndpoint" : [561,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [1525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [1073,1024]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [1525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1073,1024],
						"rightEndpoint" : [561,512]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [561,512]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [1073,1024]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1073,1024],
						"rightEndpoint" : [561,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [1073,1024]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1073,1024],
						"rightEndpoint" : [561,512]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [561,512],
						"rightEndpoint" : [305,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [1525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [561,512],
						"rightEndpoint" : [305,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [561,512],
						"rightEndpoint" : [305,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [1525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [561,512],
						"rightEndpoint" : [305,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [1525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [561,512],
						"rightEndpoint" : [1171,1024]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [1525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1171,1024],
						"rightEndpoint" : [305,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [1525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [561,512],
						"rightEndpoint" : [1171,1024]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [1525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1171,1024],
						"rightEndpoint" : [305,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [561,512],
						"rightEndpoint" : [305,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [561,512],
						"rightEndpoint" : [1171,1024]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1171,1024],
						"rightEndpoint" : [305,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [561,512],
						"rightEndpoint" : [1171,1024]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1171,1024],
						"rightEndpoint" : [305,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [305,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [561,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [561,512],
						"rightEndpoint" : [305,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [561,512]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [1575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [561,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1575,128],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [561,512]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [1575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [561,512]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [1575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [1073,1024]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [1575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1073,1024],
						"rightEndpoint" : [561,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [1575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [1073,1024]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [1575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1073,1024],
						"rightEndpoint" : [561,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1575,128],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [561,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [561,512],
						"rightEndpoint" : [305,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [177,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [177,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [177,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [177,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [659,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [659,512],
						"rightEndpoint" : [177,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [659,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [659,512],
						"rightEndpoint" : [177,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [177,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [659,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [659,512],
						"rightEndpoint" : [177,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [659,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [659,512],
						"rightEndpoint" : [177,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [113,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [403,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [403,256],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [403,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [403,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [403,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [403,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [757,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [757,512],
						"rightEndpoint" : [403,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [757,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [757,512],
						"rightEndpoint" : [403,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [403,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [757,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [757,512],
						"rightEndpoint" : [403,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [757,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [757,512],
						"rightEndpoint" : [403,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [403,256],
						"rightEndpoint" : [113,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [403,256],
						"rightEndpoint" : [113,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [403,256],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [403,256],
						"rightEndpoint" : [113,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [403,256],
						"rightEndpoint" : [855,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [855,512],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [403,256],
						"rightEndpoint" : [855,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [855,512],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [403,256],
						"rightEndpoint" : [113,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [403,256],
						"rightEndpoint" : [855,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [855,512],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [403,256],
						"rightEndpoint" : [855,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [855,512],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [275,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [275,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [501,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [501,256],
						"rightEndpoint" : [275,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [501,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [501,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [501,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [501,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [953,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [953,512],
						"rightEndpoint" : [501,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [953,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [953,512],
						"rightEndpoint" : [501,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [501,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [953,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [953,512],
						"rightEndpoint" : [501,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [953,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [953,512],
						"rightEndpoint" : [501,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [501,256],
						"rightEndpoint" : [275,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [501,256],
						"rightEndpoint" : [275,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [501,256],
						"rightEndpoint" : [275,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [501,256],
						"rightEndpoint" : [275,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [501,256],
						"rightEndpoint" : [1051,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1051,512],
						"rightEndpoint" : [275,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [501,256],
						"rightEndpoint" : [1051,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1051,512],
						"rightEndpoint" : [275,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [501,256],
						"rightEndpoint" : [275,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [501,256],
						"rightEndpoint" : [1051,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1051,512],
						"rightEndpoint" : [275,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [501,256],
						"rightEndpoint" : [1051,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1051,512],
						"rightEndpoint" : [275,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [81,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [599,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [599,256],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [599,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [599,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [599,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [599,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [1149,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1149,512],
						"rightEndpoint" : [599,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [1149,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1149,512],
						"rightEndpoint" : [599,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [599,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [1149,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1149,512],
						"rightEndpoint" : [599,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [1149,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1149,512],
						"rightEndpoint" : [599,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [599,256],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [211,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [211,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [373,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [373,128],
						"rightEndpoint" : [211,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [373,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [373,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [373,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [373,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [697,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [697,256],
						"rightEndpoint" : [373,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [697,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [697,256],
						"rightEndpoint" : [373,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [373,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [697,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [697,256],
						"rightEndpoint" : [373,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [697,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [697,256],
						"rightEndpoint" : [373,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [373,128],
						"rightEndpoint" : [211,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [373,128],
						"rightEndpoint" : [211,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [373,128],
						"rightEndpoint" : [211,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [373,128],
						"rightEndpoint" : [211,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [373,128],
						"rightEndpoint" : [795,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [795,256],
						"rightEndpoint" : [211,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [373,128],
						"rightEndpoint" : [795,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [795,256],
						"rightEndpoint" : [211,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [373,128],
						"rightEndpoint" : [211,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [373,128],
						"rightEndpoint" : [795,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [795,256],
						"rightEndpoint" : [211,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [373,128],
						"rightEndpoint" : [795,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [795,256],
						"rightEndpoint" : [211,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [471,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [471,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [471,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [471,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [471,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [893,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [893,256],
						"rightEndpoint" : [471,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [893,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [893,256],
						"rightEndpoint" : [471,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [471,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [893,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [893,256],
						"rightEndpoint" : [471,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [893,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [893,256],
						"rightEndpoint" : [471,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [991,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [991,256],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [991,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [991,256],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [991,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [991,256],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [991,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [991,256],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [991,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [991,256],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [991,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [991,256],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [991,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [991,256],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [991,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [991,256],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [179,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [179,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [309,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [309,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [309,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [309,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [309,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [309,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [309,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [309,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [309,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1089,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1089,256],
						"rightEndpoint" : [569,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1089,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1089,256],
						"rightEndpoint" : [569,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1089,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1089,256],
						"rightEndpoint" : [569,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1089,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1089,256],
						"rightEndpoint" : [569,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1089,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1089,256],
						"rightEndpoint" : [569,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1089,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1089,256],
						"rightEndpoint" : [569,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [309,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [309,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [309,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [309,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [309,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [309,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [309,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [309,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [1187,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1187,256],
						"rightEndpoint" : [309,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [1187,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1187,256],
						"rightEndpoint" : [309,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [309,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [309,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [309,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [309,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [1187,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1187,256],
						"rightEndpoint" : [309,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [1187,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1187,256],
						"rightEndpoint" : [309,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [309,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [1187,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1187,256],
						"rightEndpoint" : [309,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [1187,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1187,256],
						"rightEndpoint" : [309,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [667,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [667,128],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [667,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [667,128],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [667,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [667,128],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [667,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [667,128],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [765,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [765,128],
						"rightEndpoint" : [407,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [765,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [765,128],
						"rightEndpoint" : [407,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [765,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [765,128],
						"rightEndpoint" : [407,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [765,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [765,128],
						"rightEndpoint" : [407,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [765,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [765,128],
						"rightEndpoint" : [407,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [765,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [765,128],
						"rightEndpoint" : [407,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [863,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [863,128],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [863,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [863,128],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [863,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [863,128],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [863,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [863,128],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [863,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [863,128],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [863,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [863,128],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [163,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [163,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [603,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [603,64],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [603,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [603,64],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [701,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [701,64],
						"rightEndpoint" : [375,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [701,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [701,64],
						"rightEndpoint" : [375,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [799,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [799,64],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [799,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [799,64],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [163,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [163,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [961,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [961,128],
						"rightEndpoint" : [505,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [961,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [961,128],
						"rightEndpoint" : [505,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [1059,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1059,128],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [1059,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1059,128],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [961,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [961,128],
						"rightEndpoint" : [505,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [961,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [961,128],
						"rightEndpoint" : [505,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [961,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [961,128],
						"rightEndpoint" : [505,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [961,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [961,128],
						"rightEndpoint" : [505,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [1059,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1059,128],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [1059,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1059,128],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [1059,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1059,128],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [1059,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1059,128],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [603,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [603,64],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [603,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [603,64],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [603,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [603,64],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [603,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [603,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [603,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [603,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [1157,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1157,128],
						"rightEndpoint" : [603,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [1157,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1157,128],
						"rightEndpoint" : [603,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [603,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [1157,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1157,128],
						"rightEndpoint" : [603,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [1157,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1157,128],
						"rightEndpoint" : [603,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [603,64],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [701,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [701,64],
						"rightEndpoint" : [375,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [701,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [701,64],
						"rightEndpoint" : [375,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [701,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [701,64],
						"rightEndpoint" : [375,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [701,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [701,64],
						"rightEndpoint" : [375,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [799,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [799,64],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [799,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [799,64],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [799,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [799,64],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [799,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [799,64],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [155,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [155,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [571,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [571,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [669,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [669,32],
						"rightEndpoint" : [359,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [669,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [669,32],
						"rightEndpoint" : [359,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [767,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [767,32],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [767,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [767,32],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [155,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [155,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [897,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [897,64],
						"rightEndpoint" : [473,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [897,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [897,64],
						"rightEndpoint" : [473,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [995,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [995,64],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [995,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [995,64],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [897,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [897,64],
						"rightEndpoint" : [473,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [897,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [897,64],
						"rightEndpoint" : [473,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [897,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [897,64],
						"rightEndpoint" : [473,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [897,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [897,64],
						"rightEndpoint" : [473,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [995,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [995,64],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [995,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [995,64],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [995,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [995,64],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [995,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [995,64],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [571,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [571,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [571,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [571,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [571,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [571,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [571,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [1093,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1093,64],
						"rightEndpoint" : [571,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [1093,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1093,64],
						"rightEndpoint" : [571,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [571,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [1093,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1093,64],
						"rightEndpoint" : [571,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [1093,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1093,64],
						"rightEndpoint" : [571,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [155,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [155,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [155,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [1191,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1191,64],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [1191,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1191,64],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [155,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [1191,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1191,64],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [1191,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1191,64],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [669,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [669,32],
						"rightEndpoint" : [359,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [669,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [669,32],
						"rightEndpoint" : [359,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [669,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [669,32],
						"rightEndpoint" : [359,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [669,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [669,32],
						"rightEndpoint" : [359,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [767,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [767,32],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [767,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [767,32],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [767,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [767,32],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [767,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [767,32],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [53,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [53,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [177,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [177,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [305,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [177,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [305,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [177,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [113,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [403,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [403,256],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [403,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [403,256],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [177,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [177,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [275,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [275,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [501,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [501,256],
						"rightEndpoint" : [275,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [501,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [501,256],
						"rightEndpoint" : [275,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [81,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [599,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [599,256],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [599,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [599,256],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [177,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [177,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [275,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [275,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [211,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [211,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [373,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [373,128],
						"rightEndpoint" : [211,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [373,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [373,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [373,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [373,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [697,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [697,256],
						"rightEndpoint" : [373,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [697,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [697,256],
						"rightEndpoint" : [373,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [373,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [373,128],
						"rightEndpoint" : [211,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [373,128],
						"rightEndpoint" : [211,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [373,128],
						"rightEndpoint" : [211,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [373,128],
						"rightEndpoint" : [211,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [373,128],
						"rightEndpoint" : [795,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [795,256],
						"rightEndpoint" : [211,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [373,128],
						"rightEndpoint" : [795,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [795,256],
						"rightEndpoint" : [211,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [373,128],
						"rightEndpoint" : [211,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [471,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [471,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [471,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [471,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [471,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [893,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [893,256],
						"rightEndpoint" : [471,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [893,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [893,256],
						"rightEndpoint" : [471,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [471,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [991,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [991,256],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [991,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [991,256],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [471,128],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [475,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [475,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [475,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [475,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [475,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [475,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [211,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [211,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [179,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [179,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [309,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [309,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [309,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [309,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [309,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [309,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1089,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1089,256],
						"rightEndpoint" : [569,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1089,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1089,256],
						"rightEndpoint" : [569,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [569,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [569,128],
						"rightEndpoint" : [309,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [309,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [667,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [667,128],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [667,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [667,128],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [667,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [667,128],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [667,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [667,128],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [309,64],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [765,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [765,128],
						"rightEndpoint" : [407,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [765,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [765,128],
						"rightEndpoint" : [407,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [765,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [765,128],
						"rightEndpoint" : [407,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [765,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [765,128],
						"rightEndpoint" : [407,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [407,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [863,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [863,128],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [863,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [863,128],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [863,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [863,128],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [863,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [863,128],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [407,64],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [57,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [179,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [163,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [163,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [961,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [961,128],
						"rightEndpoint" : [505,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [961,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [961,128],
						"rightEndpoint" : [505,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [961,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [961,128],
						"rightEndpoint" : [505,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [961,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [961,128],
						"rightEndpoint" : [505,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [1059,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1059,128],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [1059,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1059,128],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [505,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [505,64],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [603,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [603,64],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [603,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [603,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [603,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [603,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [1157,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1157,128],
						"rightEndpoint" : [603,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [1157,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1157,128],
						"rightEndpoint" : [603,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [603,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [603,64],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [603,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [603,64],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [603,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [603,64],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [701,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [701,64],
						"rightEndpoint" : [375,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [701,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [701,64],
						"rightEndpoint" : [375,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [701,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [701,64],
						"rightEndpoint" : [375,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [701,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [701,64],
						"rightEndpoint" : [375,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [799,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [799,64],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [799,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [799,64],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [799,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [799,64],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [799,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [799,64],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [163,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [163,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [277,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [603,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [603,64],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [603,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [603,64],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [277,32],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [701,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [701,64],
						"rightEndpoint" : [375,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [701,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [701,64],
						"rightEndpoint" : [375,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [163,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [375,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [53,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [163,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163,16],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [155,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [155,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [897,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [897,64],
						"rightEndpoint" : [473,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [897,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [897,64],
						"rightEndpoint" : [473,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [897,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [897,64],
						"rightEndpoint" : [473,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [897,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [897,64],
						"rightEndpoint" : [473,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [995,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [995,64],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [995,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [995,64],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [995,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [995,64],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [995,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [995,64],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [571,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [571,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [571,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [571,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [571,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [1093,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1093,64],
						"rightEndpoint" : [571,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [1093,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1093,64],
						"rightEndpoint" : [571,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [571,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [1093,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1093,64],
						"rightEndpoint" : [571,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [1093,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1093,64],
						"rightEndpoint" : [571,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [155,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [155,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [155,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [1191,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1191,64],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [1191,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1191,64],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [571,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [571,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [669,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [669,32],
						"rightEndpoint" : [359,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [669,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [669,32],
						"rightEndpoint" : [359,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [669,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [669,32],
						"rightEndpoint" : [359,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [669,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [669,32],
						"rightEndpoint" : [359,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [767,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [767,32],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [767,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [767,32],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [767,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [767,32],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [767,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [767,32],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [155,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [155,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [473,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [473,32],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [261,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [571,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [571,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571,32],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [669,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [669,32],
						"rightEndpoint" : [359,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [669,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [669,32],
						"rightEndpoint" : [359,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [767,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [767,32],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [767,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [767,32],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [50,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [151,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [151,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [865,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [865,32],
						"rightEndpoint" : [457,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [865,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [865,32],
						"rightEndpoint" : [457,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [963,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [963,32],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [963,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [963,32],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [865,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [865,32],
						"rightEndpoint" : [457,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [865,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [865,32],
						"rightEndpoint" : [457,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [865,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [865,32],
						"rightEndpoint" : [457,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [865,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [865,32],
						"rightEndpoint" : [457,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [963,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [963,32],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [963,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [963,32],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [963,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [963,32],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [963,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [963,32],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [555,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [555,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [555,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [555,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [555,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [555,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [555,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [1061,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1061,32],
						"rightEndpoint" : [555,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [1061,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1061,32],
						"rightEndpoint" : [555,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [555,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [1061,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1061,32],
						"rightEndpoint" : [555,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [1061,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1061,32],
						"rightEndpoint" : [555,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [151,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [151,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [151,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [1159,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1159,32],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [1159,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1159,32],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [151,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [1159,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1159,32],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [1159,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1159,32],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [653,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [653,16],
						"rightEndpoint" : [351,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [653,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [653,16],
						"rightEndpoint" : [351,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [653,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [653,16],
						"rightEndpoint" : [351,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [653,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [653,16],
						"rightEndpoint" : [351,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [751,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [751,16],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [751,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [751,16],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [751,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [751,16],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [751,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [751,16],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [151,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [151,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [865,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [865,32],
						"rightEndpoint" : [457,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [865,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [865,32],
						"rightEndpoint" : [457,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [865,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [865,32],
						"rightEndpoint" : [457,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [865,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [865,32],
						"rightEndpoint" : [457,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [963,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [963,32],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [963,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [963,32],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [963,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [963,32],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [963,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [963,32],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [555,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [555,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [555,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [555,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [555,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [1061,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1061,32],
						"rightEndpoint" : [555,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [1061,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1061,32],
						"rightEndpoint" : [555,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [555,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [1061,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1061,32],
						"rightEndpoint" : [555,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [1061,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1061,32],
						"rightEndpoint" : [555,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [151,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [151,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [151,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [1159,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1159,32],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [1159,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1159,32],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [555,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [555,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [653,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [653,16],
						"rightEndpoint" : [351,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [653,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [653,16],
						"rightEndpoint" : [351,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [653,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [653,16],
						"rightEndpoint" : [351,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [653,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [653,16],
						"rightEndpoint" : [351,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [751,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [751,16],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [751,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [751,16],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [751,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [751,16],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [751,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [751,16],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [51,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [51,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [53,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,4],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [155,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [359,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [359,16],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,4],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [51,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,4],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [155,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,4],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,4],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [53,4],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,4],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [50,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [151,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [151,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,4],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [457,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [457,16],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,4],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,4],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [555,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [555,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [555,16],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,4],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,4],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [653,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [653,16],
						"rightEndpoint" : [351,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [653,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [653,16],
						"rightEndpoint" : [351,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,4],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,4],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [751,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [751,16],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [751,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [751,16],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,4],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [151,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51,2],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [50,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [351,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [351,8],
						"rightEndpoint" : [50,1]
					}
				]
		}

	]
]