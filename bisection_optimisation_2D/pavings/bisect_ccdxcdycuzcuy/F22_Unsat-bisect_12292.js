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
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [5,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [5,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [5,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-5,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-5,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-5,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-35,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-5,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-5,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-35,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-5,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-15,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-5,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-15,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-5,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-5,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-5,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				]
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
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
				]
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
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				]
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
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				]
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
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [5,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				]
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
						"rightEndpoint" : [5,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [5,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [5,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
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
						"rightEndpoint" : [5,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [5,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,16],
						"rightEndpoint" : [5,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				]
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
						"rightEndpoint" : [5,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,16],
						"rightEndpoint" : [5,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				]
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
						"rightEndpoint" : [5,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,8],
						"rightEndpoint" : [15,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,8],
						"rightEndpoint" : [15,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [15,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [15,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [15,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [15,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [15,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [15,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [15,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [15,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [15,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-25,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-25,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [15,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [15,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-25,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [15,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [15,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-25,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [15,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-35,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-35,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [35,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,16],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [35,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,16],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [35,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,16],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [35,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,16],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [35,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,16],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [35,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [35,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-25,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [35,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [35,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-25,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,8],
						"rightEndpoint" : [35,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,16],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,16],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-25,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,16],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,16],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-25,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,16],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,16],
						"rightEndpoint" : [75,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,16],
						"rightEndpoint" : [75,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-5,2]
					}
				]
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
						"rightEndpoint" : [5,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [45,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [45,16],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [45,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [45,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [45,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [45,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [45,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [85,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,32],
						"rightEndpoint" : [45,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [85,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,32],
						"rightEndpoint" : [45,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [45,16],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [45,16],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [45,16],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [45,16],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [45,16],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [45,16],
						"rightEndpoint" : [95,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,32],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [45,16],
						"rightEndpoint" : [95,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,32],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
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
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
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
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-35,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-15,4]
					}
				]
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
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-35,8]
					}
				]
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
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				]
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
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				]
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
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				]
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
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				]
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
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				]
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
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-25,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-5,2]
					}
				]
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
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-25,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-55,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,16],
						"rightEndpoint" : [-25,8]
					}
				]
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
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-55,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-55,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-55,16]
					}
				]
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
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-55,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-55,16]
					}
				]
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
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,16],
						"rightEndpoint" : [-25,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,16],
						"rightEndpoint" : [-25,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,16],
						"rightEndpoint" : [-25,8]
					}
				]
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
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,16],
						"rightEndpoint" : [-25,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,16],
						"rightEndpoint" : [-25,8]
					}
				]
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
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-5,2]
					}
				]
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
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-45,16]
					}
				]
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
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
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
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				]
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
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [105,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [105,32],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
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
						"rightEndpoint" : [105,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [105,32],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [115,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [115,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
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
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-5,2]
					}
				]
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
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
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
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [105,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [105,32],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				]
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
						"rightEndpoint" : [105,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [105,32],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				]
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
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [105,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [105,32],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
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
						"rightEndpoint" : [105,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [105,32],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [115,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [115,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [115,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [115,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [45,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [45,16],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [45,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [45,16],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [45,16],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [45,16],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [45,16],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [45,16],
						"rightEndpoint" : [95,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,32],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [45,16],
						"rightEndpoint" : [95,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,32],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,32],
						"rightEndpoint" : [195,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [195,64],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,32],
						"rightEndpoint" : [195,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [195,64],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [45,16],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,2],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [0,1]
					}
				]
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
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [0,1]
					}
				]
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
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				]
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
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [105,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [105,32],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				]
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
						"rightEndpoint" : [105,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [105,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [105,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
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
						"rightEndpoint" : [105,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [205,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [205,64],
						"rightEndpoint" : [105,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				]
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
						"rightEndpoint" : [205,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [205,64],
						"rightEndpoint" : [105,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				]
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
						"rightEndpoint" : [105,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [105,32],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [105,32],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [105,32],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [105,32],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [105,32],
						"rightEndpoint" : [215,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [215,64],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [105,32],
						"rightEndpoint" : [215,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [215,64],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [105,32],
						"rightEndpoint" : [55,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [115,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [115,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [115,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [115,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [115,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [225,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,64],
						"rightEndpoint" : [115,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [225,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,64],
						"rightEndpoint" : [115,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [115,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [225,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,64],
						"rightEndpoint" : [115,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,16],
						"rightEndpoint" : [225,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,64],
						"rightEndpoint" : [115,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-35,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-35,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [235,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [235,64],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [235,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [235,64],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [235,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [235,64],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,32],
						"rightEndpoint" : [235,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [235,64],
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
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
						"rightEndpoint" : [15,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-35,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-35,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-25,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-25,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-55,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,16],
						"rightEndpoint" : [-25,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-55,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-55,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-55,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-55,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-55,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,16],
						"rightEndpoint" : [-25,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,16],
						"rightEndpoint" : [-25,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,16],
						"rightEndpoint" : [-25,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,16],
						"rightEndpoint" : [-25,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,16],
						"rightEndpoint" : [-25,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-35,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-35,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [245,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,64],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [245,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,64],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [245,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,64],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [245,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,64],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-35,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-35,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-25,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-25,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-55,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-25,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-55,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-115,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,64],
						"rightEndpoint" : [-55,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-115,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-115,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-115,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-115,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-115,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,64],
						"rightEndpoint" : [-55,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,64],
						"rightEndpoint" : [-55,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,64],
						"rightEndpoint" : [-55,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,64],
						"rightEndpoint" : [-55,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,64],
						"rightEndpoint" : [-55,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-25,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-105,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,64],
						"rightEndpoint" : [-25,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-105,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-105,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-105,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-105,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-105,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,64],
						"rightEndpoint" : [-25,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,64],
						"rightEndpoint" : [-25,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,64],
						"rightEndpoint" : [-25,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,64],
						"rightEndpoint" : [-25,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,64],
						"rightEndpoint" : [-25,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-45,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-45,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-95,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,64],
						"rightEndpoint" : [-45,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-95,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-95,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-95,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-95,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-95,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,64],
						"rightEndpoint" : [-45,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,64],
						"rightEndpoint" : [-45,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,64],
						"rightEndpoint" : [-45,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,64],
						"rightEndpoint" : [-45,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,64],
						"rightEndpoint" : [-45,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-85,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,64],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-85,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-85,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-85,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-85,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-85,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,64],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,64],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,64],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,64],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,64],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [245,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,64],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [245,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [245,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [245,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [245,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [485,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [485,128],
						"rightEndpoint" : [245,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [485,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [485,128],
						"rightEndpoint" : [245,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [245,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,64],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,64],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,64],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,64],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,64],
						"rightEndpoint" : [495,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [495,128],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,64],
						"rightEndpoint" : [495,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [495,128],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,64],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,64],
						"rightEndpoint" : [495,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [495,128],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,64],
						"rightEndpoint" : [495,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [495,128],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [15,4],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-75,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-75,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [505,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [505,128],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [505,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [505,128],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [505,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [505,128],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [505,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [505,128],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [505,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [505,128],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [505,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [505,128],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [505,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [505,128],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [505,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [505,128],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [505,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [505,128],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [505,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [505,128],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [505,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [505,128],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [505,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [505,128],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [505,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [505,128],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [505,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [505,128],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-75,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-75,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [505,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [505,128],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [505,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [505,128],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [255,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [1025,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1025,256],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [1025,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1025,256],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [1025,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1025,256],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [255,64],
						"rightEndpoint" : [1025,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1025,256],
						"rightEndpoint" : [515,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [515,128],
						"rightEndpoint" : [1035,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1035,256],
						"rightEndpoint" : [65,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-35,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-35,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-75,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,32],
						"rightEndpoint" : [-35,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-75,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-75,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-75,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-75,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-75,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,32],
						"rightEndpoint" : [-35,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,32],
						"rightEndpoint" : [-35,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,32],
						"rightEndpoint" : [-35,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,32],
						"rightEndpoint" : [-35,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,32],
						"rightEndpoint" : [-35,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-25,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-25,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-55,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-25,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-55,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-55,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-55,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-55,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-115,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,64],
						"rightEndpoint" : [-55,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-115,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-115,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-115,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-115,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-115,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,64],
						"rightEndpoint" : [-55,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,64],
						"rightEndpoint" : [-55,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,64],
						"rightEndpoint" : [-55,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,64],
						"rightEndpoint" : [-55,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,64],
						"rightEndpoint" : [-55,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-55,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-115,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,64],
						"rightEndpoint" : [-55,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-115,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-115,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-115,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-115,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-115,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,64],
						"rightEndpoint" : [-55,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,64],
						"rightEndpoint" : [-55,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,64],
						"rightEndpoint" : [-55,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,64],
						"rightEndpoint" : [-55,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,64],
						"rightEndpoint" : [-55,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-25,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-25,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-25,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-25,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-105,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,64],
						"rightEndpoint" : [-25,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-105,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-105,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-105,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-105,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-105,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,64],
						"rightEndpoint" : [-25,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,64],
						"rightEndpoint" : [-25,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,64],
						"rightEndpoint" : [-25,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,64],
						"rightEndpoint" : [-25,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,64],
						"rightEndpoint" : [-25,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-25,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-105,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,64],
						"rightEndpoint" : [-25,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-105,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-105,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-105,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-105,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,32],
						"rightEndpoint" : [-105,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,64],
						"rightEndpoint" : [-25,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,64],
						"rightEndpoint" : [-25,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,64],
						"rightEndpoint" : [-25,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,64],
						"rightEndpoint" : [-25,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,64],
						"rightEndpoint" : [-25,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-45,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-45,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-45,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-45,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-45,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-95,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,64],
						"rightEndpoint" : [-45,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-95,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-95,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-95,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-95,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-95,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,64],
						"rightEndpoint" : [-45,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,64],
						"rightEndpoint" : [-45,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,64],
						"rightEndpoint" : [-45,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,64],
						"rightEndpoint" : [-45,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,64],
						"rightEndpoint" : [-45,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-45,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-95,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,64],
						"rightEndpoint" : [-45,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-95,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-95,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-95,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-95,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,16],
						"rightEndpoint" : [-95,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,64],
						"rightEndpoint" : [-45,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,64],
						"rightEndpoint" : [-45,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,64],
						"rightEndpoint" : [-45,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,64],
						"rightEndpoint" : [-45,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,64],
						"rightEndpoint" : [-45,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-85,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,64],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-85,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-85,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-85,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-85,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-85,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,64],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,64],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,64],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,64],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,64],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-85,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,64],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-85,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-85,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-85,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-85,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,32],
						"rightEndpoint" : [-85,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,64],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,64],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,64],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,64],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,64],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-75,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-75,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-75,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-75,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-75,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-75,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-75,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-75,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-75,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-75,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-75,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-75,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-155,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-155,128],
						"rightEndpoint" : [-75,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [-155,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-155,128],
						"rightEndpoint" : [-75,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-155,128],
						"rightEndpoint" : [-75,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-155,128],
						"rightEndpoint" : [-75,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-155,128],
						"rightEndpoint" : [-75,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-155,128],
						"rightEndpoint" : [-75,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,64],
						"rightEndpoint" : [-145,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-145,128],
						"rightEndpoint" : [-35,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,32],
						"rightEndpoint" : [-135,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,128],
						"rightEndpoint" : [-65,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,64],
						"rightEndpoint" : [-125,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,128],
						"rightEndpoint" : [-15,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,16],
						"rightEndpoint" : [-115,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-115,128],
						"rightEndpoint" : [-55,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,64],
						"rightEndpoint" : [-105,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-105,128],
						"rightEndpoint" : [-25,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,32],
						"rightEndpoint" : [-95,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,128],
						"rightEndpoint" : [-45,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,64],
						"rightEndpoint" : [-85,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,128],
						"rightEndpoint" : [-5,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-35,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-35,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-35,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-35,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-35,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-35,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-35,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-35,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-35,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-35,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-35,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-35,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,8],
						"rightEndpoint" : [-75,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,128],
						"rightEndpoint" : [-35,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,64],
						"rightEndpoint" : [-65,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,128],
						"rightEndpoint" : [-15,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-25,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-25,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-25,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-25,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-25,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-25,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-25,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-25,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-25,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-25,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-25,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-25,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,32],
						"rightEndpoint" : [-55,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,128],
						"rightEndpoint" : [-25,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,64],
						"rightEndpoint" : [-45,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-85,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,256],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-85,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,256],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,256],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,256],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,256],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,256],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-85,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,256],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,128],
						"rightEndpoint" : [-85,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,256],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,256],
						"rightEndpoint" : [-5,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,256],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,256],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,256],
						"rightEndpoint" : [-5,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,16],
						"rightEndpoint" : [-75,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,256],
						"rightEndpoint" : [-35,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,128],
						"rightEndpoint" : [-65,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,256],
						"rightEndpoint" : [-15,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,64],
						"rightEndpoint" : [-55,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,256],
						"rightEndpoint" : [-25,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,128],
						"rightEndpoint" : [-45,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,256],
						"rightEndpoint" : [-5,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [1045,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1045,256],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [1055,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1055,256],
						"rightEndpoint" : [265,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [265,64],
						"rightEndpoint" : [1065,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1065,256],
						"rightEndpoint" : [535,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [535,128],
						"rightEndpoint" : [1075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,256],
						"rightEndpoint" : [135,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,32],
						"rightEndpoint" : [-35,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,256],
						"rightEndpoint" : [-15,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,128],
						"rightEndpoint" : [-25,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,256],
						"rightEndpoint" : [-5,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [135,32],
						"rightEndpoint" : [1085,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1085,256],
						"rightEndpoint" : [545,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [545,128],
						"rightEndpoint" : [1095,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1095,256],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,64],
						"rightEndpoint" : [-15,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,256],
						"rightEndpoint" : [-5,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [1105,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1105,256],
						"rightEndpoint" : [555,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,128],
						"rightEndpoint" : [-5,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [555,128],
						"rightEndpoint" : [1115,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1115,256],
						"rightEndpoint" : [35,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,256],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-35,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-35,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-75,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,16],
						"rightEndpoint" : [-35,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,1],
						"rightEndpoint" : [-75,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,16],
						"rightEndpoint" : [-35,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,16],
						"rightEndpoint" : [-35,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,16],
						"rightEndpoint" : [-35,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,16],
						"rightEndpoint" : [-35,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,16],
						"rightEndpoint" : [-35,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,8],
						"rightEndpoint" : [-65,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,16],
						"rightEndpoint" : [-15,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-25,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-25,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-55,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,16],
						"rightEndpoint" : [-25,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-55,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-55,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-55,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-55,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,4],
						"rightEndpoint" : [-55,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,16],
						"rightEndpoint" : [-25,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,16],
						"rightEndpoint" : [-25,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,16],
						"rightEndpoint" : [-25,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,16],
						"rightEndpoint" : [-25,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-55,16],
						"rightEndpoint" : [-25,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [-95,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-95,32],
						"rightEndpoint" : [-45,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-45,16],
						"rightEndpoint" : [-85,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-85,32],
						"rightEndpoint" : [-5,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [0,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,4],
						"rightEndpoint" : [0,1]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-5,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-15,8],
						"rightEndpoint" : [-5,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-35,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-35,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-35,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-35,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-35,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-75,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,32],
						"rightEndpoint" : [-35,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-75,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-75,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-75,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-75,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-75,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,32],
						"rightEndpoint" : [-35,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,32],
						"rightEndpoint" : [-35,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,32],
						"rightEndpoint" : [-35,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,32],
						"rightEndpoint" : [-35,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,32],
						"rightEndpoint" : [-35,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-35,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-75,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,32],
						"rightEndpoint" : [-35,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-75,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-75,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-75,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-75,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-5,2],
						"rightEndpoint" : [-75,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,32],
						"rightEndpoint" : [-35,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,32],
						"rightEndpoint" : [-35,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,32],
						"rightEndpoint" : [-35,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,32],
						"rightEndpoint" : [-35,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-75,32],
						"rightEndpoint" : [-35,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [285,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [285,64],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [285,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [285,64],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [285,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [285,64],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,8],
						"rightEndpoint" : [285,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [285,64],
						"rightEndpoint" : [145,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [295,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [295,64],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [295,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [295,64],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [295,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [295,64],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,32],
						"rightEndpoint" : [295,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [295,64],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-135,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,64],
						"rightEndpoint" : [-65,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-135,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,64],
						"rightEndpoint" : [-65,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [305,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,64],
						"rightEndpoint" : [-65,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [305,64],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,64],
						"rightEndpoint" : [-65,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [305,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,64],
						"rightEndpoint" : [-65,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [305,64],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,64],
						"rightEndpoint" : [-65,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-65,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-135,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,64],
						"rightEndpoint" : [-65,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-35,16],
						"rightEndpoint" : [-135,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,64],
						"rightEndpoint" : [-65,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [315,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,64],
						"rightEndpoint" : [-65,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [315,64],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,64],
						"rightEndpoint" : [-65,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [315,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,64],
						"rightEndpoint" : [-65,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [315,64],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-135,64],
						"rightEndpoint" : [-65,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,32],
						"rightEndpoint" : [5,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-15,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-65,32],
						"rightEndpoint" : [-125,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [155,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [-125,64],
						"rightEndpoint" : [-15,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
					}
