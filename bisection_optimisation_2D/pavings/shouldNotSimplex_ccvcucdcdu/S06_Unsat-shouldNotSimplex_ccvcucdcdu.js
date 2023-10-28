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
			"boxStep": "Contract",
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
			"boxC":
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
						"rightEndpoint" : [-75,2]
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
						"leftEndpoint" : [-75,2],
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
						"rightEndpoint" : [-75,2]
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-75,2],
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
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-75,2],
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
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-75,2],
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
						"leftEndpoint" : [-75,2],
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
						"leftEndpoint" : [-75,2],
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
						"leftEndpoint" : [-75,2],
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
						"leftEndpoint" : [-75,2],
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
			"boxStep": "Contract",
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
			"boxC":
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
			"boxStep": "Contract",
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
			"boxC":
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
						"rightEndpoint" : [-25,8]
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
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [0,1]
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
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [-25,8]
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
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [-25,8],
						"rightEndpoint" : [0,1]
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
			"boxStep": "ContractEmpty",
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
				]
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
			"boxStep": "ContractEmpty",
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
				]
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
						"rightEndpoint" : [-25,4]
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
						"leftEndpoint" : [-25,4],
						"rightEndpoint" : [0,1]
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
			"boxStep": "Contract",
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
						"rightEndpoint" : [151,4]
					}
				],
			"boxC":
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
						"leftEndpoint" : [669548111048423597796342648973,24178710953439870066599395328],
						"rightEndpoint" : [4756788041284002906923430473897,135439933912244428280489312256]
					}
				]
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
						"leftEndpoint" : [669548111048423597796342648973,24178710953439870066599395328],
						"rightEndpoint" : [4756788041284002906923430473897,135439933912244428280489312256]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [151,4]
					}
				],
			"boxC":
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
						"leftEndpoint" : [51,2],
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
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
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
						"rightEndpoint" : [-25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
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
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [50,1]
					}
				],
			"boxC":
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
						"leftEndpoint" : [3890097614012659410847152050007,95576080070147334310367068160],
						"rightEndpoint" : [938948935633861575587451549355,20458252838192057463076814848]
					}
				]
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
						"leftEndpoint" : [3890097614012659410847152050007,95576080070147334310367068160],
						"rightEndpoint" : [938948935633861575587451549355,20458252838192057463076814848]
					}
				]
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
			"boxStep": "Contract",
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
			"boxC":
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
			"boxStep": "Contract",
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
			"boxC":
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
						"rightEndpoint" : [75,16]
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
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [25,4]
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
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [75,16]
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
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [25,4]
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
			"boxStep": "ContractEmpty",
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
				]
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
			"boxStep": "Contract",
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
			"boxC":
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
						"rightEndpoint" : [275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [65,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
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
						"rightEndpoint" : [275,32]
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
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
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2780234094729443888785935651427,966886316018870042317455097856],
						"rightEndpoint" : [4363114691184262930597030438369,1184199938250442328183490478080]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2780234094729443888785935651427,966886316018870042317455097856],
						"rightEndpoint" : [4363114691184262930597030438369,1184199938250442328183490478080]
					}
				]
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
			"boxStep": "Contract",
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
			"boxC":
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
			"boxStep": "Contract",
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
			"boxC":
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
						"rightEndpoint" : [4522243487552896487424239096171,809994932796756976238053031936]
					}
				]
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
						"rightEndpoint" : [4522243487552896487424239096171,809994932796756976238053031936]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [4522243487552896487424239096171,809994932796756976238053031936]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [4522243487552896487424239096171,809994932796756976238053031936]
					}
				]
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
						"rightEndpoint" : [275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [4522243487552896487424239096171,809994932796756976238053031936]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [4522243487552896487424239096171,809994932796756976238053031936]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
				]
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
						"rightEndpoint" : [675,64]
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
						"leftEndpoint" : [675,64],
						"rightEndpoint" : [175,16]
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
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [675,64]
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
						"leftEndpoint" : [675,64],
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
						"leftEndpoint" : [675,64],
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
						"leftEndpoint" : [675,64],
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
						"leftEndpoint" : [675,64],
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
						"leftEndpoint" : [675,64],
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
			"boxStep": "Contract",
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
			"boxC":
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
						"rightEndpoint" : [675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,64],
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
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [675,64]
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,64],
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
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,64],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10136191446213239002613545722539,5317902387691073087492084203520],
						"rightEndpoint" : [6117621250539715735708340002267,2602783241884779209038189559808]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,64],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10136191446213239002613545722539,5317902387691073087492084203520],
						"rightEndpoint" : [6117621250539715735708340002267,2602783241884779209038189559808]
					}
				]
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
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [65,16]
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
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [65,16]
					}
				],
			"boxC":
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
						"rightEndpoint" : [325,32]
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
						"rightEndpoint" : [325,32]
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
						"rightEndpoint" : [325,32]
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
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
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
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
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
						"leftEndpoint" : [325,32],
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
						"leftEndpoint" : [325,32],
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
						"leftEndpoint" : [325,32],
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
			"boxStep": "Contract",
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
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [211,64]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49944853800704741960025707240532751346992709,4875870760470425872295601411526369199783936],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [1945572758476218457209602624927225803393923825,624111457340214511653836980675375257572343808]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49944853800704741960025707240532751346992709,4875870760470425872295601411526369199783936],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [1945572758476218457209602624927225803393923825,624111457340214511653836980675375257572343808]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49944853800704741960025707240532751346992709,4875870760470425872295601411526369199783936],
						"rightEndpoint" : [103274690243350024938258847679102414469629509,9751741520940851744591202823052738399567872]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [1945572758476218457209602624927225803393923825,624111457340214511653836980675375257572343808]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103274690243350024938258847679102414469629509,9751741520940851744591202823052738399567872],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [1945572758476218457209602624927225803393923825,624111457340214511653836980675375257572343808]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49944853800704741960025707240532751346992709,4875870760470425872295601411526369199783936],
						"rightEndpoint" : [103274690243350024938258847679102414469629509,9751741520940851744591202823052738399567872]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [1945572758476218457209602624927225803393923825,624111457340214511653836980675375257572343808]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103274690243350024938258847679102414469629509,9751741520940851744591202823052738399567872],
						"rightEndpoint" : [175,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [1945572758476218457209602624927225803393923825,624111457340214511653836980675375257572343808]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
			"boxStep": "Contract",
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
			"boxC":
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
						"rightEndpoint" : [17943338084299613813795015271163,13015276909180496796111429697536]
					}
				]
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
						"rightEndpoint" : [17943338084299613813795015271163,13015276909180496796111429697536]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [1425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [17943338084299613813795015271163,13015276909180496796111429697536]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,128],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [17943338084299613813795015271163,13015276909180496796111429697536]
					}
				]
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
						"rightEndpoint" : [1425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [17943338084299613813795015271163,13015276909180496796111429697536]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,128],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [17943338084299613813795015271163,13015276909180496796111429697536]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
				]
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
						"rightEndpoint" : [1475,128]
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
						"leftEndpoint" : [1475,128],
						"rightEndpoint" : [375,32]
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
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [1475,128]
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
						"rightEndpoint" : [1475,128]
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
						"rightEndpoint" : [1475,128]
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
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [1475,128]
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
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [1475,128]
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
						"leftEndpoint" : [1475,128],
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
						"leftEndpoint" : [1475,128],
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
						"leftEndpoint" : [1475,128],
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
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1475,128],
						"rightEndpoint" : [375,32]
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
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1475,128],
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
			"boxStep": "Contract",
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
			"boxC":
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
						"rightEndpoint" : [7722557942526575416657812620431,4511208488365483026844265480192]
					}
				]
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
						"rightEndpoint" : [7722557942526575416657812620431,4511208488365483026844265480192]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [1475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [7722557942526575416657812620431,4511208488365483026844265480192]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1475,128],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [7722557942526575416657812620431,4511208488365483026844265480192]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [1475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [7722557942526575416657812620431,4511208488365483026844265480192]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1475,128],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [7722557942526575416657812620431,4511208488365483026844265480192]
					}
				]
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
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
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
						"rightEndpoint" : [725,64]
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
						"rightEndpoint" : [725,64]
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
						"rightEndpoint" : [725,64]
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
			"boxStep": "ContractEmpty",
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
						"rightEndpoint" : [275,128]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [725,64],
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
						"leftEndpoint" : [725,64],
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
						"leftEndpoint" : [725,64],
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
			"boxStep": "ContractEmpty",
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
						"rightEndpoint" : [275,128]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"rightEndpoint" : [775,64]
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
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
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
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
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
						"rightEndpoint" : [775,64]
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
						"rightEndpoint" : [775,64]
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
						"rightEndpoint" : [775,64]
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
						"rightEndpoint" : [1525,128]
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
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
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
						"rightEndpoint" : [177,128]
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
						"rightEndpoint" : [305,256]
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
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [177,128]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"rightEndpoint" : [305,256]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
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
						"leftEndpoint" : [1525,128],
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
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
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
			"boxStep": "ContractEmpty",
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
						"rightEndpoint" : [305,256]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"rightEndpoint" : [1525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [113,64]
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
						"rightEndpoint" : [1525,128]
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
						"rightEndpoint" : [1525,128]
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
						"rightEndpoint" : [1525,128]
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
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [403,256]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
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
						"leftEndpoint" : [1525,128],
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
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
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
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [177,128],
						"rightEndpoint" : [403,256]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [775,64],
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
						"leftEndpoint" : [775,64],
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
						"leftEndpoint" : [775,64],
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
						"leftEndpoint" : [775,64],
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
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [1575,128]
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
						"leftEndpoint" : [1575,128],
						"rightEndpoint" : [25,2]
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
						"rightEndpoint" : [177,128]
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
						"rightEndpoint" : [305,256]
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
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [177,128]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"rightEndpoint" : [305,256]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [1575,128],
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
						"leftEndpoint" : [1575,128],
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
						"leftEndpoint" : [1575,128],
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
			"boxStep": "ContractEmpty",
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
						"rightEndpoint" : [305,256]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [177,128]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [113,64]
					}
				],
			"boxC":
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
						"leftEndpoint" : [13011452289398521611573876929747,9066292006707447597138236669952],
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
						"leftEndpoint" : [13011452289398521611573876929747,9066292006707447597138236669952],
						"rightEndpoint" : [113,64]
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
						"leftEndpoint" : [13011452289398521611573876929747,9066292006707447597138236669952],
						"rightEndpoint" : [113,64]
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
						"leftEndpoint" : [13011452289398521611573876929747,9066292006707447597138236669952],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [13011452289398521611573876929747,9066292006707447597138236669952],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [13011452289398521611573876929747,9066292006707447597138236669952],
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
						"rightEndpoint" : [775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
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
						"rightEndpoint" : [775,64]
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
						"rightEndpoint" : [775,64]
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
						"rightEndpoint" : [775,64]
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
			"boxStep": "ContractEmpty",
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
						"rightEndpoint" : [275,128]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [775,64],
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
						"leftEndpoint" : [775,64],
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
						"leftEndpoint" : [775,64],
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
			"boxStep": "Contract",
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
						"rightEndpoint" : [275,128]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [130964895924587550978206879834878950579143308755,10748920902279183168267801384607790092414615552]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [86443905430867966989057871773378056871589823211,42995683609116732673071205538431160369658462208],
						"rightEndpoint" : [4901281330024770667103402811567,2378637178527656944492102025216]
					}
				]
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
						"rightEndpoint" : [130964895924587550978206879834878950579143308755,10748920902279183168267801384607790092414615552]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [86443905430867966989057871773378056871589823211,42995683609116732673071205538431160369658462208],
						"rightEndpoint" : [4901281330024770667103402811567,2378637178527656944492102025216]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
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
						"rightEndpoint" : [375,32]
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
						"rightEndpoint" : [375,32]
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
						"rightEndpoint" : [375,32]
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
			"boxStep": "Contract",
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
						"rightEndpoint" : [211,64]
					}
				],
			"boxC":
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
						"rightEndpoint" : [8869725708325940367950522020427,2706581661206556388535195140096]
					}
				]
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
						"rightEndpoint" : [8869725708325940367950522020427,2706581661206556388535195140096]
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
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [8869725708325940367950522020427,2706581661206556388535195140096]
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
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [8869725708325940367950522020427,2706581661206556388535195140096]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [8869725708325940367950522020427,2706581661206556388535195140096]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [319955289400435188295919593793643848461747903327,29029997315553835990532294553394841743255404544],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1959444838314069842474298099415576944828107669,711604296931361650627693337474213886212177920],
						"rightEndpoint" : [6046450850945302058428882586306870376502673555495980135050887,2042804454576480546106310176582365529085994452446900928905216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [319955289400435188295919593793643848461747903327,29029997315553835990532294553394841743255404544],
						"rightEndpoint" : [725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1959444838314069842474298099415576944828107669,711604296931361650627693337474213886212177920],
						"rightEndpoint" : [6046450850945302058428882586306870376502673555495980135050887,2042804454576480546106310176582365529085994452446900928905216]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [8869725708325940367950522020427,2706581661206556388535195140096]
					}
				],
			"boxC":
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
						"leftEndpoint" : [118616568372708253979436592366044360104725655,43877924810255789796003758553318142945263616],
						"rightEndpoint" : [133001432914762100883402063446892579652881559,43462099757878402993651514783036522190864384]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [118616568372708253979436592366044360104725655,43877924810255789796003758553318142945263616],
						"rightEndpoint" : [133001432914762100883402063446892579652881559,43462099757878402993651514783036522190864384]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [65,16]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3355551543513020676244858234646141717447918449,294613239021016044392851677614927058667831296],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [864474329156341183632235454935,251000324743515963904325844992],
						"rightEndpoint" : [25892372214463459764207695009567944056547550369,7070717736504385065428440262758249408027951104]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3355551543513020676244858234646141717447918449,294613239021016044392851677614927058667831296],
						"rightEndpoint" : [375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [864474329156341183632235454935,251000324743515963904325844992],
						"rightEndpoint" : [25892372214463459764207695009567944056547550369,7070717736504385065428440262758249408027951104]
					}
				]
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
						"rightEndpoint" : [65,16]
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
						"leftEndpoint" : [211,64],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [211,64]
					}
				],
			"boxC":
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
						"leftEndpoint" : [12993965732590797671507558747541,5018685242445252240020011483136],
						"rightEndpoint" : [8367438022345472243710153352435,2547070778201159467294236082176]
					}
				]
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
						"leftEndpoint" : [12993965732590797671507558747541,5018685242445252240020011483136],
						"rightEndpoint" : [8367438022345472243710153352435,2547070778201159467294236082176]
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
						"leftEndpoint" : [12993965732590797671507558747541,5018685242445252240020011483136],
						"rightEndpoint" : [8367438022345472243710153352435,2547070778201159467294236082176]
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
						"leftEndpoint" : [12993965732590797671507558747541,5018685242445252240020011483136],
						"rightEndpoint" : [8367438022345472243710153352435,2547070778201159467294236082176]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [12993965732590797671507558747541,5018685242445252240020011483136],
						"rightEndpoint" : [8367438022345472243710153352435,2547070778201159467294236082176]
					}
				],
			"boxC":
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
						"leftEndpoint" : [1624862768574805704359357122955692131980838553,572842692137325055288187696274038563249586176],
						"rightEndpoint" : [1792796391631859790966195365440781236608075417,590580931360179735511606487810241776576364544]
					}
				]
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
						"leftEndpoint" : [1624862768574805704359357122955692131980838553,572842692137325055288187696274038563249586176],
						"rightEndpoint" : [1792796391631859790966195365440781236608075417,590580931360179735511606487810241776576364544]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [12993965732590797671507558747541,5018685242445252240020011483136],
						"rightEndpoint" : [8367438022345472243710153352435,2547070778201159467294236082176]
					}
				],
			"boxC":
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
						"leftEndpoint" : [3347556799406381274221888704299488375833216439,1175607319249305780868261648082195071075614720],
						"rightEndpoint" : [3662725694079329987150706562873838218789635511,1184950111915487067321112061303841699089350656]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [3347556799406381274221888704299488375833216439,1175607319249305780868261648082195071075614720],
						"rightEndpoint" : [3662725694079329987150706562873838218789635511,1184950111915487067321112061303841699089350656]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [65,16]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [6869850285203447355398819228164382661006213137,569403381881707527721941440438272585558392832]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [8432196696791080173365914654323599422268512283,2277613527526830110887765761753090342233571328],
						"rightEndpoint" : [647703044706095158450973547737,169517006951833187778065072128]
					}
				]
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
						"rightEndpoint" : [6869850285203447355398819228164382661006213137,569403381881707527721941440438272585558392832]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [8432196696791080173365914654323599422268512283,2277613527526830110887765761753090342233571328],
						"rightEndpoint" : [647703044706095158450973547737,169517006951833187778065072128]
					}
				]
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
						"rightEndpoint" : [175,16]
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
						"leftEndpoint" : [175,16],
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
						"rightEndpoint" : [175,16]
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
						"rightEndpoint" : [175,16]
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
						"rightEndpoint" : [175,16]
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
			"boxStep": "Contract",
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
						"rightEndpoint" : [179,32]
					}
				],
			"boxC":
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
						"rightEndpoint" : [325,32]
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
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
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
			"boxStep": "Contract",
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
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [179,32]
					}
				],
			"boxC":
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
						"leftEndpoint" : [4551062737867928905428494932511,1042693548079902386586000556032],
						"rightEndpoint" : [133538422304615599554472311959,25794845974541192135662632960]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [4551062737867928905428494932511,1042693548079902386586000556032],
						"rightEndpoint" : [133538422304615599554472311959,25794845974541192135662632960]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [179,32]
					}
				],
			"boxC":
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
						"leftEndpoint" : [783560046121833539313163290787,187639793063218369850517749760],
						"rightEndpoint" : [11335740598741100863046690757273,2097012383100403240111003664384]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [783560046121833539313163290787,187639793063218369850517749760],
						"rightEndpoint" : [11335740598741100863046690757273,2097012383100403240111003664384]
					}
				],
			"boxC":
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
						"leftEndpoint" : [1987144417011158853184222430435588390703686215,447862324609780480327008705081363381190918144],
						"rightEndpoint" : [1962123619732075340968135408676414043017536071,393852707332089127406101887389793130668621824]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [1987144417011158853184222430435588390703686215,447862324609780480327008705081363381190918144],
						"rightEndpoint" : [1962123619732075340968135408676414043017536071,393852707332089127406101887389793130668621824]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [57,8]
					}
				],
			"boxC":
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
						"rightEndpoint" : [6651636105612740213974749157,965926590372743757797785600]
					}
				]
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
						"rightEndpoint" : [6651636105612740213974749157,965926590372743757797785600]
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
						"rightEndpoint" : [6651636105612740213974749157,965926590372743757797785600]
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
						"rightEndpoint" : [6651636105612740213974749157,965926590372743757797785600]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"rightEndpoint" : [6651636105612740213974749157,965926590372743757797785600]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"rightEndpoint" : [6651636105612740213974749157,965926590372743757797785600]
					}
				]
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
						"rightEndpoint" : [57,8]
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
						"leftEndpoint" : [179,32],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [179,32]
					}
				],
			"boxC":
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
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [179,32]
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
						"rightEndpoint" : [179,32]
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
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [179,32]
					}
				],
			"boxC":
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
						"leftEndpoint" : [9257912582602822474339384785265,2223402779236161966016328368128],
						"rightEndpoint" : [6137802463792198250858026016461,1127204654328818987544596185088]
					}
				]
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
						"leftEndpoint" : [9257912582602822474339384785265,2223402779236161966016328368128],
						"rightEndpoint" : [6137802463792198250858026016461,1127204654328818987544596185088]
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
						"leftEndpoint" : [9257912582602822474339384785265,2223402779236161966016328368128],
						"rightEndpoint" : [171115525012605291515972479893492587021416776001,35615669861536977463795086286290752077641547776]
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
						"leftEndpoint" : [171115525012605291515972479893492587021416776001,35615669861536977463795086286290752077641547776],
						"rightEndpoint" : [6137802463792198250858026016461,1127204654328818987544596185088]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [9257912582602822474339384785265,2223402779236161966016328368128],
						"rightEndpoint" : [171115525012605291515972479893492587021416776001,35615669861536977463795086286290752077641547776]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [171115525012605291515972479893492587021416776001,35615669861536977463795086286290752077641547776],
						"rightEndpoint" : [6137802463792198250858026016461,1127204654328818987544596185088]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [179,32]
					}
				],
			"boxC":
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
						"leftEndpoint" : [87810319759821433032515071181,20657949684335789606264897536],
						"rightEndpoint" : [2021646278484305531697747859059,372088219764978773579584765952]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [87810319759821433032515071181,20657949684335789606264897536],
						"rightEndpoint" : [2021646278484305531697747859059,372088219764978773579584765952]
					}
				],
			"boxC":
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
						"leftEndpoint" : [168992063066065034702725690830248264086623233,36626337164974869172341874556558448397385728],
						"rightEndpoint" : [964549851446799153228792904831777982258275333,188706872124507001647093302350954332363423744]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [168992063066065034702725690830248264086623233,36626337164974869172341874556558448397385728],
						"rightEndpoint" : [964549851446799153228792904831777982258275333,188706872124507001647093302350954332363423744]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [57,8]
					}
				],
			"boxC":
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
						"leftEndpoint" : [5726045493639910821300247242087,988775896115121714076787408896],
						"rightEndpoint" : [6871309692177642849394959743005,998988901439226101344705183744]
					}
				]
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
						"leftEndpoint" : [5726045493639910821300247242087,988775896115121714076787408896],
						"rightEndpoint" : [6871309692177642849394959743005,998988901439226101344705183744]
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
						"leftEndpoint" : [5726045493639910821300247242087,988775896115121714076787408896],
						"rightEndpoint" : [6871309692177642849394959743005,998988901439226101344705183744]
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
						"leftEndpoint" : [5726045493639910821300247242087,988775896115121714076787408896],
						"rightEndpoint" : [6871309692177642849394959743005,998988901439226101344705183744]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [5726045493639910821300247242087,988775896115121714076787408896],
						"rightEndpoint" : [6871309692177642849394959743005,998988901439226101344705183744]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [5726045493639910821300247242087,988775896115121714076787408896],
						"rightEndpoint" : [6871309692177642849394959743005,998988901439226101344705183744]
					}
				]
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
						"rightEndpoint" : [125,16]
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
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
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
			"boxStep": "Contract",
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
						"rightEndpoint" : [163,16]
					}
				],
			"boxC":
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
						"leftEndpoint" : [5048488104191001726138394617219,657808145607233470983842037760],
						"rightEndpoint" : [9238114001890175494818412653569,974873295401166021301700132864]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [5048488104191001726138394617219,657808145607233470983842037760],
						"rightEndpoint" : [9238114001890175494818412653569,974873295401166021301700132864]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [163,16]
					}
				],
			"boxC":
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
						"leftEndpoint" : [172622743138076544473778727657,24015762467168268893592485888],
						"rightEndpoint" : [13808025231152885672804492249387,1376695562811312463590482509824]
					}
				]
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
						"leftEndpoint" : [172622743138076544473778727657,24015762467168268893592485888],
						"rightEndpoint" : [13808025231152885672804492249387,1376695562811312463590482509824]
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
						"leftEndpoint" : [172622743138076544473778727657,24015762467168268893592485888],
						"rightEndpoint" : [16179320101927625245493519901292792202772357857,1879379489428232199388364627282872533811986432]
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
						"leftEndpoint" : [16179320101927625245493519901292792202772357857,1879379489428232199388364627282872533811986432],
						"rightEndpoint" : [13808025231152885672804492249387,1376695562811312463590482509824]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [172622743138076544473778727657,24015762467168268893592485888],
						"rightEndpoint" : [16179320101927625245493519901292792202772357857,1879379489428232199388364627282872533811986432]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [16179320101927625245493519901292792202772357857,1879379489428232199388364627282872533811986432],
						"rightEndpoint" : [13808025231152885672804492249387,1376695562811312463590482509824]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
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
						"rightEndpoint" : [2243495909101958746134367598089,170802241010500142346419568640]
					}
				]
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
						"rightEndpoint" : [2243495909101958746134367598089,170802241010500142346419568640]
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
						"rightEndpoint" : [2243495909101958746134367598089,170802241010500142346419568640]
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
						"rightEndpoint" : [2243495909101958746134367598089,170802241010500142346419568640]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"rightEndpoint" : [2243495909101958746134367598089,170802241010500142346419568640]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [2243495909101958746134367598089,170802241010500142346419568640]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [691481168437954795598290132478669594370771056447,83256736327324655048483776196965457473596030976],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [7678297140523876042072733121966221577152329689,691819576797800803441691717009855662293778432],
						"rightEndpoint" : [1967739885104566197550859002197213277294745132621,166513472654649310096967552393930914947192061952]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [691481168437954795598290132478669594370771056447,83256736327324655048483776196965457473596030976],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [7678297140523876042072733121966221577152329689,691819576797800803441691717009855662293778432],
						"rightEndpoint" : [1967739885104566197550859002197213277294745132621,166513472654649310096967552393930914947192061952]
					}
				]
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
						"rightEndpoint" : [175,16]
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
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
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
			"boxStep": "Contract",
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
						"rightEndpoint" : [163,16]
					}
				],
			"boxC":
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
						"rightEndpoint" : [4195082497769655099550958945021,413329336884682374815871401984]
					}
				]
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
						"rightEndpoint" : [4195082497769655099550958945021,413329336884682374815871401984]
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
						"rightEndpoint" : [7140054023073017020114042684157,826658673769364749631742803968]
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
						"leftEndpoint" : [7140054023073017020114042684157,826658673769364749631742803968],
						"rightEndpoint" : [4195082497769655099550958945021,413329336884682374815871401984]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"rightEndpoint" : [7140054023073017020114042684157,826658673769364749631742803968]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [7140054023073017020114042684157,826658673769364749631742803968],
						"rightEndpoint" : [4195082497769655099550958945021,413329336884682374815871401984]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [163,16]
					}
				],
			"boxC":
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
						"leftEndpoint" : [2826720115185462585165616852441,388154807535053199362928672768],
						"rightEndpoint" : [16160511071559698512922308534085,1612233780157049391314825641984]
					}
				]
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
						"leftEndpoint" : [2826720115185462585165616852441,388154807535053199362928672768],
						"rightEndpoint" : [16160511071559698512922308534085,1612233780157049391314825641984]
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
						"leftEndpoint" : [2826720115185462585165616852441,388154807535053199362928672768],
						"rightEndpoint" : [153905172643942187501081921089665940948368501541,17786200391991848686339252724084312920572297216]
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
						"leftEndpoint" : [153905172643942187501081921089665940948368501541,17786200391991848686339252724084312920572297216],
						"rightEndpoint" : [16160511071559698512922308534085,1612233780157049391314825641984]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [2826720115185462585165616852441,388154807535053199362928672768],
						"rightEndpoint" : [153905172643942187501081921089665940948368501541,17786200391991848686339252724084312920572297216]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [153905172643942187501081921089665940948368501541,17786200391991848686339252724084312920572297216],
						"rightEndpoint" : [16160511071559698512922308534085,1612233780157049391314825641984]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
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
						"rightEndpoint" : [8250255077134200475242063448013,631003184103578319575104618496]
					}
				]
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
						"rightEndpoint" : [8250255077134200475242063448013,631003184103578319575104618496]
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
						"rightEndpoint" : [8250255077134200475242063448013,631003184103578319575104618496]
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
						"rightEndpoint" : [8250255077134200475242063448013,631003184103578319575104618496]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [8250255077134200475242063448013,631003184103578319575104618496]
					}
				],
			"boxC":
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
						"leftEndpoint" : [1807342487017411827603802408521109857853977771,165263900100208345119434463909444663384211456],
						"rightEndpoint" : [1984947394949644932376978699782955966544688299,163558404877200601540556030376996641108393984]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [1807342487017411827603802408521109857853977771,165263900100208345119434463909444663384211456],
						"rightEndpoint" : [1984947394949644932376978699782955966544688299,163558404877200601540556030376996641108393984]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [8250255077134200475242063448013,631003184103578319575104618496]
					}
				],
			"boxC":
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
						"leftEndpoint" : [1733218636414238587788107881665148804651313357,156312236041681748386914482562507439123464192],
						"rightEndpoint" : [1967671157445224486240730176463222346900596941,161582529340553243309035228482410665182494720]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [1733218636414238587788107881665148804651313357,156312236041681748386914482562507439123464192],
						"rightEndpoint" : [1967671157445224486240730176463222346900596941,161582529340553243309035228482410665182494720]
					}
				]
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
						"rightEndpoint" : [25,8]
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
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
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
			"boxStep": "Contract",
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
						"rightEndpoint" : [155,8]
					}
				],
			"boxC":
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
						"leftEndpoint" : [657970088872967598613298398393,45890333569501627406174126080],
						"rightEndpoint" : [4727924795580159246458423354765,262168564600349372818101633024]
					}
				]
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
						"leftEndpoint" : [657970088872967598613298398393,45890333569501627406174126080],
						"rightEndpoint" : [4727924795580159246458423354765,262168564600349372818101633024]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [155,8]
					}
				],
			"boxC":
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
						"rightEndpoint" : [7634769157305067261216815325415,396069869196066537512508588032]
					}
				]
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
						"rightEndpoint" : [7634769157305067261216815325415,396069869196066537512508588032]
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
						"rightEndpoint" : [12882694924152948883257554116839,792139738392133075025017176064]
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
						"leftEndpoint" : [12882694924152948883257554116839,792139738392133075025017176064],
						"rightEndpoint" : [7634769157305067261216815325415,396069869196066537512508588032]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"rightEndpoint" : [12882694924152948883257554116839,792139738392133075025017176064]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [12882694924152948883257554116839,792139738392133075025017176064],
						"rightEndpoint" : [7634769157305067261216815325415,396069869196066537512508588032]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
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
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
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
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [51,2]
					}
				],
			"boxC":
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
						"leftEndpoint" : [3771985068664530449861965765235,180288615438251986201698369536],
						"rightEndpoint" : [7305718748996000947692549093315,312723111232878491151827468288]
					}
				]
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
						"leftEndpoint" : [3771985068664530449861965765235,180288615438251986201698369536],
						"rightEndpoint" : [7305718748996000947692549093315,312723111232878491151827468288]
					}
				]
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
						"rightEndpoint" : [75,8]
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
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
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
			"boxStep": "Contract",
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
						"rightEndpoint" : [155,8]
					}
				],
			"boxC":
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
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11162405324167924705868994096686424894595885473,1282686324624103201664232514157330135252992000],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1882085139520550221506931924059,136251863244177401128186544128],
						"rightEndpoint" : [2301915622039949766437534624524556574404228951,160335790578012900208029064269666266906624000]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11162405324167924705868994096686424894595885473,1282686324624103201664232514157330135252992000],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1882085139520550221506931924059,136251863244177401128186544128],
						"rightEndpoint" : [2301915622039949766437534624524556574404228951,160335790578012900208029064269666266906624000]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [155,8]
					}
				],
			"boxC":
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
						"leftEndpoint" : [3232544557075343797298624301559,243060299456202829525023719424],
						"rightEndpoint" : [2751233052727387520730439817,142770545071763550793367552]
					}
				]
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
						"leftEndpoint" : [3232544557075343797298624301559,243060299456202829525023719424],
						"rightEndpoint" : [2751233052727387520730439817,142770545071763550793367552]
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
						"leftEndpoint" : [3232544557075343797298624301559,243060299456202829525023719424],
						"rightEndpoint" : [513968042492766105683952779613477666883444663,31561150025179951396881794512234275403726848]
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
						"leftEndpoint" : [513968042492766105683952779613477666883444663,31561150025179951396881794512234275403726848],
						"rightEndpoint" : [2751233052727387520730439817,142770545071763550793367552]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [3232544557075343797298624301559,243060299456202829525023719424],
						"rightEndpoint" : [513968042492766105683952779613477666883444663,31561150025179951396881794512234275403726848]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4621722791414722361094897273694062363401809107989789800216319,376629506467251981253630208672064321562927037410854154797056],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5235702337298974791860828387758811937178052607,367121423740198874266502557454366838183952384],
						"rightEndpoint" : [21642139075723604488564650147742847389729006025017352591506545,1506518025869007925014520834688257286251708149643416619188224]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4621722791414722361094897273694062363401809107989789800216319,376629506467251981253630208672064321562927037410854154797056],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5235702337298974791860828387758811937178052607,367121423740198874266502557454366838183952384],
						"rightEndpoint" : [21642139075723604488564650147742847389729006025017352591506545,1506518025869007925014520834688257286251708149643416619188224]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [513968042492766105683952779613477666883444663,31561150025179951396881794512234275403726848],
						"rightEndpoint" : [2751233052727387520730439817,142770545071763550793367552]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
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
						"rightEndpoint" : [9182133122222498452870708234597,360415496745552276926555488256]
					}
				]
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
						"rightEndpoint" : [9182133122222498452870708234597,360415496745552276926555488256]
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
						"rightEndpoint" : [9182133122222498452870708234597,360415496745552276926555488256]
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
						"rightEndpoint" : [9182133122222498452870708234597,360415496745552276926555488256]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [9182133122222498452870708234597,360415496745552276926555488256]
					}
				],
			"boxC":
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
						"leftEndpoint" : [64740375889129519298647620496093295804667969,3161589736476084740655552408092373281669120],
						"rightEndpoint" : [74652419403055722534081438176639032786933825,3107059487177004351885546627251432425783296]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [64740375889129519298647620496093295804667969,3161589736476084740655552408092373281669120],
						"rightEndpoint" : [74652419403055722534081438176639032786933825,3107059487177004351885546627251432425783296]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [9182133122222498452870708234597,360415496745552276926555488256]
					}
				],
			"boxC":
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
						"leftEndpoint" : [497105871591859965329599660821072443658539537,24019663428226431369856777085892286629281792],
						"rightEndpoint" : [85310510807640586897191755694938215720953639,3540465294228145325981227100709882070827008]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [497105871591859965329599660821072443658539537,24019663428226431369856777085892286629281792],
						"rightEndpoint" : [85310510807640586897191755694938215720953639,3540465294228145325981227100709882070827008]
					}
				]
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
						"rightEndpoint" : [1625,128]
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
						"leftEndpoint" : [1625,128],
						"rightEndpoint" : [825,64]
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [1625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [177,128]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [1625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9544723229734588283729891602395,8439655442990900088640511148032],
						"rightEndpoint" : [17371458513303241253250177058943,12816391677047182115062096592896]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [1625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9544723229734588283729891602395,8439655442990900088640511148032],
						"rightEndpoint" : [17371458513303241253250177058943,12816391677047182115062096592896]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1625,128],
						"rightEndpoint" : [825,64]
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
			"boxStep": "Contract",
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
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [71629641353214391024554559038211040102790696581,5609317488023306266062564770230906201397264384]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [34423022050002588213977853159320967972140493221,22437269952093225064250259080923624805589057536],
						"rightEndpoint" : [113,64]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [71629641353214391024554559038211040102790696581,5609317488023306266062564770230906201397264384]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [34423022050002588213977853159320967972140493221,22437269952093225064250259080923624805589057536],
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
			"boxStep": "Contract",
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
			"boxC":
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
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
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
						"rightEndpoint" : [825,64]
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
						"rightEndpoint" : [825,64]
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
						"rightEndpoint" : [825,64]
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
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [275,128]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
					}
				],
			"boxC":
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
						"leftEndpoint" : [21967485128991851542821851678003,11485239551076619877694299963392],
						"rightEndpoint" : [81,32]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [21967485128991851542821851678003,11485239551076619877694299963392],
						"rightEndpoint" : [81,32]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [472469911163013169010305190484226330248205245233,36154599520295698909471464091604316675356229632]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2849917575511482464058233937048875231726237305683650553914107,1272076882244790805017745841509817452896931474794955694669824],
						"rightEndpoint" : [233337824205921536905657489130206314345991081,95469399916639824878695317918675378355830784]
					}
				]
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
						"rightEndpoint" : [472469911163013169010305190484226330248205245233,36154599520295698909471464091604316675356229632]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2849917575511482464058233937048875231726237305683650553914107,1272076882244790805017745841509817452896931474794955694669824],
						"rightEndpoint" : [233337824205921536905657489130206314345991081,95469399916639824878695317918675378355830784]
					}
				]
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
						"rightEndpoint" : [875,64]
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
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [225,16]
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1,1],
						"rightEndpoint" : [113,64]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [12539145829035544363060440281729,10544239524712419130422092365824],
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
						"rightEndpoint" : [875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [12539145829035544363060440281729,10544239524712419130422092365824],
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
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [225,16]
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
			"boxStep": "Contract",
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
			"boxC":
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
						"rightEndpoint" : [875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [81,32]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [186168038108417712204627099243220562315644073451,13814772576174521775482275963099103722288971776]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [7453401235134532377889100415500741873023891051,3453693144043630443870568990774775930572242944],
						"rightEndpoint" : [3649815146761248999832237694517,1515652747485187171634974294016]
					}
				]
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
						"rightEndpoint" : [186168038108417712204627099243220562315644073451,13814772576174521775482275963099103722288971776]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [7453401235134532377889100415500741873023891051,3453693144043630443870568990774775930572242944],
						"rightEndpoint" : [3649815146761248999832237694517,1515652747485187171634974294016]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
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
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
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
						"rightEndpoint" : [425,32]
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
						"rightEndpoint" : [425,32]
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
						"rightEndpoint" : [425,32]
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
			"boxStep": "Contract",
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
						"rightEndpoint" : [211,64]
					}
				],
			"boxC":
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
						"leftEndpoint" : [5333656109817072894653851196839,2084786439541583153056716947456],
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
						"leftEndpoint" : [5333656109817072894653851196839,2084786439541583153056716947456],
						"rightEndpoint" : [211,64]
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
						"leftEndpoint" : [5333656109817072894653851196839,2084786439541583153056716947456],
						"rightEndpoint" : [211,64]
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
						"leftEndpoint" : [5333656109817072894653851196839,2084786439541583153056716947456],
						"rightEndpoint" : [211,64]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [5333656109817072894653851196839,2084786439541583153056716947456],
						"rightEndpoint" : [211,64]
					}
				],
			"boxC":
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
						"leftEndpoint" : [10096710906490960818811053058386759372483393,3564488663534994074909177398563056239247360],
						"rightEndpoint" : [10455418715546950668937732213265014578981697,3318124229884234627361694182782456054153216]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [10096710906490960818811053058386759372483393,3564488663534994074909177398563056239247360],
						"rightEndpoint" : [10455418715546950668937732213265014578981697,3318124229884234627361694182782456054153216]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [5333656109817072894653851196839,2084786439541583153056716947456],
						"rightEndpoint" : [211,64]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [26874692615929715724027740426184165991541349445,2070320109209788008865684971690789113874612224]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [24363902438709542571379021348523813782731060569388208151583449,8158406263327990128076066006021488702871300397771362681225216],
						"rightEndpoint" : [19546188703091003837624506824959250079435815,6360448901016353073242146500079780913741824]
					}
				]
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
						"rightEndpoint" : [26874692615929715724027740426184165991541349445,2070320109209788008865684971690789113874612224]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [24363902438709542571379021348523813782731060569388208151583449,8158406263327990128076066006021488702871300397771362681225216],
						"rightEndpoint" : [19546188703091003837624506824959250079435815,6360448901016353073242146500079780913741824]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [65,16]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [71412033868706160828440429778436308656211622905,5523023281499519813159816699871903129307971584]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [40578101118131445263109345357991350330410156651,11046046562999039626319633399743806258615943168],
						"rightEndpoint" : [581837073291559820791908970739,144230595645475985961028419584]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [71412033868706160828440429778436308656211622905,5523023281499519813159816699871903129307971584]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [40578101118131445263109345357991350330410156651,11046046562999039626319633399743806258615943168],
						"rightEndpoint" : [581837073291559820791908970739,144230595645475985961028419584]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [65,16]
					}
				],
			"boxC":
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
						"leftEndpoint" : [425,32],
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
						"leftEndpoint" : [425,32],
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
						"leftEndpoint" : [425,32],
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
			"boxStep": "Contract",
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
						"rightEndpoint" : [211,64]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [14328535740733575263236734290017988704791070277,1044956661988166051569999799368577215119753216]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [3029390481440870547385032076182199150615778785,1044956661988166051569999799368577215119753216],
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
						"rightEndpoint" : [14328535740733575263236734290017988704791070277,1044956661988166051569999799368577215119753216]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [3029390481440870547385032076182199150615778785,1044956661988166051569999799368577215119753216],
						"rightEndpoint" : [211,64]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
			"boxStep": "Contract",
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
			"boxC":
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
						"rightEndpoint" : [475,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [65,16]
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
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [65,16]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [81,32],
						"rightEndpoint" : [65,16]
					}
				],
			"boxC":
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
						"leftEndpoint" : [13804548333388608841986406081047,5154087668903479823589210849280],
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
						"rightEndpoint" : [475,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [13804548333388608841986406081047,5154087668903479823589210849280],
						"rightEndpoint" : [65,16]
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
						"leftEndpoint" : [13804548333388608841986406081047,5154087668903479823589210849280],
						"rightEndpoint" : [34743029488308995625317575156247,10308175337806959647178421698560]
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
						"leftEndpoint" : [34743029488308995625317575156247,10308175337806959647178421698560],
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
						"rightEndpoint" : [475,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [13804548333388608841986406081047,5154087668903479823589210849280],
						"rightEndpoint" : [34743029488308995625317575156247,10308175337806959647178421698560]
					}
				]
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
						"leftEndpoint" : [34743029488308995625317575156247,10308175337806959647178421698560],
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
						"leftEndpoint" : [475,32],
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
						"rightEndpoint" : [225,16]
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
						"leftEndpoint" : [225,16],
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
						"rightEndpoint" : [225,16]
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
						"rightEndpoint" : [225,16]
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
						"rightEndpoint" : [225,16]
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
			"boxStep": "Contract",
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
						"rightEndpoint" : [179,32]
					}
				],
			"boxC":
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
						"rightEndpoint" : [425,32]
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
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
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
			"boxStep": "Contract",
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
						"rightEndpoint" : [179,32]
					}
				],
			"boxC":
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
						"leftEndpoint" : [1194564879685413006787556172583,283293961727426510151871365120],
						"rightEndpoint" : [12655095208123995333976309376961,2267716571069756997553214193664]
					}
				]
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
						"leftEndpoint" : [1194564879685413006787556172583,283293961727426510151871365120],
						"rightEndpoint" : [12655095208123995333976309376961,2267716571069756997553214193664]
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
						"leftEndpoint" : [1194564879685413006787556172583,283293961727426510151871365120],
						"rightEndpoint" : [89443782235715891631193447516143651084199554463,18258970484717071327939915699866966669121290240]
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
						"leftEndpoint" : [89443782235715891631193447516143651084199554463,18258970484717071327939915699866966669121290240],
						"rightEndpoint" : [12655095208123995333976309376961,2267716571069756997553214193664]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [1194564879685413006787556172583,283293961727426510151871365120],
						"rightEndpoint" : [89443782235715891631193447516143651084199554463,18258970484717071327939915699866966669121290240]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [89443782235715891631193447516143651084199554463,18258970484717071327939915699866966669121290240],
						"rightEndpoint" : [12655095208123995333976309376961,2267716571069756997553214193664]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [179,32]
					}
				],
			"boxC":
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
						"leftEndpoint" : [4810800017396900375512552344385,1108319241524725094138796572672],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [4810800017396900375512552344385,1108319241524725094138796572672],
						"rightEndpoint" : [179,32]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [547572907764145499682326823891753109366815882559,39576319469506054324439369309314006634603741184]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [64732799751040992249755301320125105843593487643,13192106489835351441479789769771335544867913728],
						"rightEndpoint" : [29537771785365748606164206757833493968109389,5474380643268001123668080730723369770549248]
					}
				]
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
						"rightEndpoint" : [547572907764145499682326823891753109366815882559,39576319469506054324439369309314006634603741184]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [64732799751040992249755301320125105843593487643,13192106489835351441479789769771335544867913728],
						"rightEndpoint" : [29537771785365748606164206757833493968109389,5474380643268001123668080730723369770549248]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [57,8]
					}
				],
			"boxC":
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
						"leftEndpoint" : [3240983054818792515367311359143,556280125466715486488419631104],
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
						"leftEndpoint" : [3240983054818792515367311359143,556280125466715486488419631104],
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
						"leftEndpoint" : [3240983054818792515367311359143,556280125466715486488419631104],
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
						"leftEndpoint" : [3240983054818792515367311359143,556280125466715486488419631104],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [3240983054818792515367311359143,556280125466715486488419631104],
						"rightEndpoint" : [57,8]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [3240983054818792515367311359143,556280125466715486488419631104],
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
						"leftEndpoint" : [225,16],
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
						"leftEndpoint" : [225,16],
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
						"leftEndpoint" : [225,16],
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
			"boxStep": "Contract",
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
						"rightEndpoint" : [179,32]
					}
				],
			"boxC":
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
						"leftEndpoint" : [225,16],
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
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [475,32]
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
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [125,8]
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
			"boxStep": "Contract",
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
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [179,32]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [34312245587350660536462818224451856780567746585,2312739215068264472781437413755137971699318784]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [42878118974202395701931966418597166007022004015,9250956860273057891125749655020551886797275136],
						"rightEndpoint" : [4108595194328118869684491129755,755031132243358305596267823104]
					}
				]
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
						"rightEndpoint" : [34312245587350660536462818224451856780567746585,2312739215068264472781437413755137971699318784]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [42878118974202395701931966418597166007022004015,9250956860273057891125749655020551886797275136],
						"rightEndpoint" : [4108595194328118869684491129755,755031132243358305596267823104]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [179,32]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [57,8]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [7650323843690245022429494325576249977525300151,508962105729790602846718834282168026214170624]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2835778764335784131190873294505564001967447817,452410760648702758085972297139704912190373888],
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
						"rightEndpoint" : [7650323843690245022429494325576249977525300151,508962105729790602846718834282168026214170624]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2835778764335784131190873294505564001967447817,452410760648702758085972297139704912190373888],
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
			"boxStep": "Contract",
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
			"boxC":
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
						"rightEndpoint" : [275,16]
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
						"leftEndpoint" : [275,16],
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
			"boxStep": "Contract",
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
						"leftEndpoint" : [65,16],
						"rightEndpoint" : [57,8]
					}
				],
			"boxC":
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
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
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
						"rightEndpoint" : [275,16]
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
						"rightEndpoint" : [275,16]
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
						"rightEndpoint" : [275,16]
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
						"rightEndpoint" : [275,16]
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
						"leftEndpoint" : [275,16],
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
						"rightEndpoint" : [225,16]
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
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
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
			"boxStep": "Contract",
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
						"rightEndpoint" : [163,16]
					}
				],
			"boxC":
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
						"leftEndpoint" : [11588623043996479238424428382179,1607022519600366168197721751552],
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
						"leftEndpoint" : [11588623043996479238424428382179,1607022519600366168197721751552],
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
						"leftEndpoint" : [11588623043996479238424428382179,1607022519600366168197721751552],
						"rightEndpoint" : [27960164962425209576938718726115,3214045039200732336395443503104]
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
						"leftEndpoint" : [27960164962425209576938718726115,3214045039200732336395443503104],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [11588623043996479238424428382179,1607022519600366168197721751552],
						"rightEndpoint" : [27960164962425209576938718726115,3214045039200732336395443503104]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [27960164962425209576938718726115,3214045039200732336395443503104],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [163,16]
					}
				],
			"boxC":
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
						"leftEndpoint" : [11661286279656484664582274275693,1599488780880915600880273719296],
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
						"leftEndpoint" : [11661286279656484664582274275693,1599488780880915600880273719296],
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
						"leftEndpoint" : [11661286279656484664582274275693,1599488780880915600880273719296],
						"rightEndpoint" : [27956078234880812348550062791021,3198977561761831201760547438592]
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
						"leftEndpoint" : [27956078234880812348550062791021,3198977561761831201760547438592],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [11661286279656484664582274275693,1599488780880915600880273719296],
						"rightEndpoint" : [27956078234880812348550062791021,3198977561761831201760547438592]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [27956078234880812348550062791021,3198977561761831201760547438592],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
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
						"leftEndpoint" : [6986407759685060476172178792635,677265501050285971564507693056],
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
						"leftEndpoint" : [6986407759685060476172178792635,677265501050285971564507693056],
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
						"leftEndpoint" : [6986407759685060476172178792635,677265501050285971564507693056],
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
						"leftEndpoint" : [6986407759685060476172178792635,677265501050285971564507693056],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [6986407759685060476172178792635,677265501050285971564507693056],
						"rightEndpoint" : [53,4]
					}
				],
			"boxC":
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
						"leftEndpoint" : [1794178826212592518126517957760308549526731077,159440781938266241217222008312109764385439744],
						"rightEndpoint" : [2023428770682881633971403630953594554978122053,161031942285988549472376747976460712542208000]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [1794178826212592518126517957760308549526731077,159440781938266241217222008312109764385439744],
						"rightEndpoint" : [2023428770682881633971403630953594554978122053,161031942285988549472376747976460712542208000]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [6986407759685060476172178792635,677265501050285971564507693056],
						"rightEndpoint" : [53,4]
					}
				],
			"boxC":
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
						"leftEndpoint" : [1910466817537813228047902847975669909877841733,166621618568862037230088623034687837070950400],
						"rightEndpoint" : [102399522521765020764310489736593030180994631,8109912548970001670726611025987418437189632]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [1910466817537813228047902847975669909877841733,166621618568862037230088623034687837070950400],
						"rightEndpoint" : [102399522521765020764310489736593030180994631,8109912548970001670726611025987418437189632]
					}
				]
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
						"rightEndpoint" : [275,16]
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
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [75,4]
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
			"boxStep": "Contract",
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
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [163,16]
					}
				],
			"boxC":
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
						"leftEndpoint" : [5424363059494335612156478791935,699284498549345695126763077632],
						"rightEndpoint" : [163,16]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [5424363059494335612156478791935,699284498549345695126763077632],
						"rightEndpoint" : [163,16]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [22724613248700474370487092900080994226731699973,1413151755158031972070089275024996040251015168]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1246906852962644945712567387768638636887542027821,135662568495171069318728570402399619864097456128],
						"rightEndpoint" : [288537010519836232362152689771990550336961661,29642752605146105230507574707528699345895424]
					}
				]
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
						"rightEndpoint" : [22724613248700474370487092900080994226731699973,1413151755158031972070089275024996040251015168]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1246906852962644945712567387768638636887542027821,135662568495171069318728570402399619864097456128],
						"rightEndpoint" : [288537010519836232362152689771990550336961661,29642752605146105230507574707528699345895424]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [57,8],
						"rightEndpoint" : [163,16]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [466039417938838368608073703452183722384753545,26111616252224827820187856118860529098817536]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [228982953048357440863148996982448891249824545,26111616252224827820187856118860529098817536],
						"rightEndpoint" : [1763409835609843071151718789885,183124215290078892890949419008]
					}
				]
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
						"rightEndpoint" : [466039417938838368608073703452183722384753545,26111616252224827820187856118860529098817536]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [228982953048357440863148996982448891249824545,26111616252224827820187856118860529098817536],
						"rightEndpoint" : [1763409835609843071151718789885,183124215290078892890949419008]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
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
						"leftEndpoint" : [4204868687770864125045994814903,393014883787373343255841210368],
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
						"leftEndpoint" : [4204868687770864125045994814903,393014883787373343255841210368],
						"rightEndpoint" : [53,4]
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
						"leftEndpoint" : [4204868687770864125045994814903,393014883787373343255841210368],
						"rightEndpoint" : [53,4]
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
						"leftEndpoint" : [4204868687770864125045994814903,393014883787373343255841210368],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [4204868687770864125045994814903,393014883787373343255841210368],
						"rightEndpoint" : [53,4]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [4204868687770864125045994814903,393014883787373343255841210368],
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
			"boxStep": "Contract",
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
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [9236271019480108831893789051783380544308414115,490619700174838363286787519642041999119351808]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [12611237349299695718465060294349463932769384917,981239400349676726573575039284083998238703616],
						"rightEndpoint" : [2398695744933671133500843865003,184707993436476547546505805824]
					}
				]
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
						"rightEndpoint" : [9236271019480108831893789051783380544308414115,490619700174838363286787519642041999119351808]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [12611237349299695718465060294349463932769384917,981239400349676726573575039284083998238703616],
						"rightEndpoint" : [2398695744933671133500843865003,184707993436476547546505805824]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
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
						"leftEndpoint" : [3257185950656383052632214490949,397280108990571925717269872640],
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
						"leftEndpoint" : [3257185950656383052632214490949,397280108990571925717269872640],
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
						"rightEndpoint" : [125,8]
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
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
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
			"boxStep": "Contract",
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
						"rightEndpoint" : [155,8]
					}
				],
			"boxC":
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
						"leftEndpoint" : [13130268779064263390385302419507,990712083443729617796531748864],
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
						"leftEndpoint" : [13130268779064263390385302419507,990712083443729617796531748864],
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
						"leftEndpoint" : [13130268779064263390385302419507,990712083443729617796531748864],
						"rightEndpoint" : [32325315395786524735193105053747,1981424166887459235593063497728]
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
						"leftEndpoint" : [32325315395786524735193105053747,1981424166887459235593063497728],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [13130268779064263390385302419507,990712083443729617796531748864],
						"rightEndpoint" : [32325315395786524735193105053747,1981424166887459235593063497728]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [11805730701870412248359667688817599525717424301070565546352913,819074316848141809289467156201770967951226310927418562445312]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4006303214999047369882559691140822222903252272565703453572273,273024772282713936429822385400590322650408770309139520815104],
						"rightEndpoint" : [95371339935007040118126205334418445078155019,6019146619056809513993918268874077048406016]
					}
				]
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
						"rightEndpoint" : [11805730701870412248359667688817599525717424301070565546352913,819074316848141809289467156201770967951226310927418562445312]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4006303214999047369882559691140822222903252272565703453572273,273024772282713936429822385400590322650408770309139520815104],
						"rightEndpoint" : [95371339935007040118126205334418445078155019,6019146619056809513993918268874077048406016]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [32325315395786524735193105053747,1981424166887459235593063497728],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [155,8]
					}
				],
			"boxC":
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
						"leftEndpoint" : [53,4],
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
						"leftEndpoint" : [261,16],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [790623427399232869718736169588833929307060655,48333795156438078738388145357342028295307264]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [924710352579678586983309468568355968689867553,60417243945547598422985181696677535369134080],
						"rightEndpoint" : [5299929975939512870227345794169,328657738967336977307837399040]
					}
				]
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
						"rightEndpoint" : [790623427399232869718736169588833929307060655,48333795156438078738388145357342028295307264]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [924710352579678586983309468568355968689867553,60417243945547598422985181696677535369134080],
						"rightEndpoint" : [5299929975939512870227345794169,328657738967336977307837399040]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
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
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [155,8],
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
						"leftEndpoint" : [155,8],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [51,2]
					}
				],
			"boxC":
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
						"leftEndpoint" : [56454042327377711734695232145,2718270145751434945487699968],
						"rightEndpoint" : [2173743726407701582835040951803,88775063802895184063346245632]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [56454042327377711734695232145,2718270145751434945487699968],
						"rightEndpoint" : [2173743726407701582835040951803,88775063802895184063346245632]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [51,2]
					}
				],
			"boxC":
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
						"leftEndpoint" : [476876009218805270546903223689,22673566766883146460051800064],
						"rightEndpoint" : [4272890567856015327375927992985,172544032838764544638264016896]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [476876009218805270546903223689,22673566766883146460051800064],
						"rightEndpoint" : [4272890567856015327375927992985,172544032838764544638264016896]
					}
				]
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
						"rightEndpoint" : [175,8]
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
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
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
			"boxStep": "Contract",
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
						"rightEndpoint" : [155,8]
					}
				],
			"boxC":
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
						"leftEndpoint" : [5950169607571172980807944271713,424202453164918625904124493824],
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
						"leftEndpoint" : [5950169607571172980807944271713,424202453164918625904124493824],
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
						"leftEndpoint" : [5950169607571172980807944271713,424202453164918625904124493824],
						"rightEndpoint" : [14169092137641471357700356339553,848404906329837251808248987648]
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
						"leftEndpoint" : [14169092137641471357700356339553,848404906329837251808248987648],
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
						"leftEndpoint" : [5950169607571172980807944271713,424202453164918625904124493824],
						"rightEndpoint" : [14169092137641471357700356339553,848404906329837251808248987648]
					}
				]
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
						"leftEndpoint" : [14169092137641471357700356339553,848404906329837251808248987648],
						"rightEndpoint" : [155,8]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [155,8]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [52120856026557667186349118805069126398281384885,2130415749530715834045706203036165567860965376]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37412211265254860026446815059261772205201981,2377696149029816779068868530174291928416256],
						"rightEndpoint" : [4233961456338162846368591118809,223900998184086682222632894464]
					}
				]
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
						"rightEndpoint" : [52120856026557667186349118805069126398281384885,2130415749530715834045706203036165567860965376]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37412211265254860026446815059261772205201981,2377696149029816779068868530174291928416256],
						"rightEndpoint" : [4233961456338162846368591118809,223900998184086682222632894464]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
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
						"leftEndpoint" : [8863491397766571976277666696019,446878324135151494812053536768],
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
						"leftEndpoint" : [8863491397766571976277666696019,446878324135151494812053536768],
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
						"leftEndpoint" : [8863491397766571976277666696019,446878324135151494812053536768],
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
						"leftEndpoint" : [8863491397766571976277666696019,446878324135151494812053536768],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [8863491397766571976277666696019,446878324135151494812053536768],
						"rightEndpoint" : [51,2]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [18677938565062387525870637276315786002022454511,955309111461618356979510248996411945028419584]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [3105688311328354837388040691121399094872001798389284052835325,134447804950068251933417467462824955911890924465223265943552],
						"rightEndpoint" : [208083516664767403430659095553697268179809279,8717798082442190949790503400752491651923968]
					}
				]
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
						"rightEndpoint" : [18677938565062387525870637276315786002022454511,955309111461618356979510248996411945028419584]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [3105688311328354837388040691121399094872001798389284052835325,134447804950068251933417467462824955911890924465223265943552],
						"rightEndpoint" : [208083516664767403430659095553697268179809279,8717798082442190949790503400752491651923968]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [8863491397766571976277666696019,446878324135151494812053536768],
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
						"rightEndpoint" : [25,4]
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
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
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
			"boxStep": "Contract",
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
						"rightEndpoint" : [151,4]
					}
				],
			"boxC":
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
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [798024056936274636197087276146505862898535841,190986863340810542921237302438110988821594112],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2976411393002262163600973411399,112952324664129409511476690944],
						"rightEndpoint" : [1339825569438980409985699555738266286225328143,47746715835202635730309325609527747205398528]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [798024056936274636197087276146505862898535841,190986863340810542921237302438110988821594112],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2976411393002262163600973411399,112952324664129409511476690944],
						"rightEndpoint" : [1339825569438980409985699555738266286225328143,47746715835202635730309325609527747205398528]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [151,4]
					}
				],
			"boxC":
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
						"leftEndpoint" : [51,2],
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
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [913256357233829141265219139679878856976181921,125871941405857994351262766879297386596794368],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5035914205054174069030082660413,187555671635434952591165882368],
						"rightEndpoint" : [29591416999830135914059138301368583429860920037,1006975531246863954810102135034379092774354944]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [913256357233829141265219139679878856976181921,125871941405857994351262766879297386596794368],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5035914205054174069030082660413,187555671635434952591165882368],
						"rightEndpoint" : [29591416999830135914059138301368583429860920037,1006975531246863954810102135034379092774354944]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [913256357233829141265219139679878856976181921,125871941405857994351262766879297386596794368],
						"rightEndpoint" : [2486655624807054070656003725671096189436111521,251743882811715988702525533758594773193588736]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5035914205054174069030082660413,187555671635434952591165882368],
						"rightEndpoint" : [29591416999830135914059138301368583429860920037,1006975531246863954810102135034379092774354944]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2486655624807054070656003725671096189436111521,251743882811715988702525533758594773193588736],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5035914205054174069030082660413,187555671635434952591165882368],
						"rightEndpoint" : [29591416999830135914059138301368583429860920037,1006975531246863954810102135034379092774354944]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [913256357233829141265219139679878856976181921,125871941405857994351262766879297386596794368],
						"rightEndpoint" : [2486655624807054070656003725671096189436111521,251743882811715988702525533758594773193588736]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5035914205054174069030082660413,187555671635434952591165882368],
						"rightEndpoint" : [29591416999830135914059138301368583429860920037,1006975531246863954810102135034379092774354944]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2486655624807054070656003725671096189436111521,251743882811715988702525533758594773193588736],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5035914205054174069030082660413,187555671635434952591165882368],
						"rightEndpoint" : [29591416999830135914059138301368583429860920037,1006975531246863954810102135034379092774354944]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
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
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
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
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [50,1]
					}
				],
			"boxC":
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
						"leftEndpoint" : [3834912422375788822058371560979,96587991026724610121681338368],
						"rightEndpoint" : [2231984534291476149762068742621,47135844578171490311472152576]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [3834912422375788822058371560979,96587991026724610121681338368],
						"rightEndpoint" : [2231984534291476149762068742621,47135844578171490311472152576]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [50,1]
					}
				],
			"boxC":
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
						"leftEndpoint" : [1227258004165272055426531550243,30634697646855326899541901312],
						"rightEndpoint" : [8992563195598468498125669028149,189272530585790085266923323392]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [1227258004165272055426531550243,30634697646855326899541901312],
						"rightEndpoint" : [8992563195598468498125669028149,189272530585790085266923323392]
					}
				]
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
						"rightEndpoint" : [75,4]
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
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
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
			"boxStep": "Contract",
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
						"rightEndpoint" : [151,4]
					}
				],
			"boxC":
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
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [6798610915006016344111641424930767479957365581,371233429096150895457732337928615923061620736]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5119142222295199356792220522310229433804239443,185616714548075447728866168964307961530810368],
						"rightEndpoint" : [2882786266616543651384504645751,93278023838249988219012644864]
					}
				]
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
						"rightEndpoint" : [6798610915006016344111641424930767479957365581,371233429096150895457732337928615923061620736]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5119142222295199356792220522310229433804239443,185616714548075447728866168964307961530810368],
						"rightEndpoint" : [2882786266616543651384504645751,93278023838249988219012644864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [11439028778707902537333295649038466518227624781,742466858192301790915464675857231846123241472]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5119142222295199356792220522310229433804239443,185616714548075447728866168964307961530810368],
						"rightEndpoint" : [2882786266616543651384504645751,93278023838249988219012644864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11439028778707902537333295649038466518227624781,742466858192301790915464675857231846123241472],
						"rightEndpoint" : [6798610915006016344111641424930767479957365581,371233429096150895457732337928615923061620736]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5119142222295199356792220522310229433804239443,185616714548075447728866168964307961530810368],
						"rightEndpoint" : [2882786266616543651384504645751,93278023838249988219012644864]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [11439028778707902537333295649038466518227624781,742466858192301790915464675857231846123241472]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5119142222295199356792220522310229433804239443,185616714548075447728866168964307961530810368],
						"rightEndpoint" : [2882786266616543651384504645751,93278023838249988219012644864]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11439028778707902537333295649038466518227624781,742466858192301790915464675857231846123241472],
						"rightEndpoint" : [6798610915006016344111641424930767479957365581,371233429096150895457732337928615923061620736]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5119142222295199356792220522310229433804239443,185616714548075447728866168964307961530810368],
						"rightEndpoint" : [2882786266616543651384504645751,93278023838249988219012644864]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [151,4]
					}
				],
			"boxC":
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
						"leftEndpoint" : [51,2],
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
						"leftEndpoint" : [253,8],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [23218389464280102102113976777759485027400245101,1087620304077810854149189970792396612175921152]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [63016653432156087917421404788204864748418900405,2175240608155621708298379941584793224351842304],
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
						"rightEndpoint" : [23218389464280102102113976777759485027400245101,1087620304077810854149189970792396612175921152]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [63016653432156087917421404788204864748418900405,2175240608155621708298379941584793224351842304],
						"rightEndpoint" : [253,8]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
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
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [151,4],
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
						"leftEndpoint" : [151,4],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [50,1]
					}
				],
			"boxC":
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
						"leftEndpoint" : [826242855865675073798332751,20509595999782580485357568],
						"rightEndpoint" : [3040597282949461006747579913353,63175007822193537468145336320]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [826242855865675073798332751,20509595999782580485357568],
						"rightEndpoint" : [3040597282949461006747579913353,63175007822193537468145336320]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [50,1]
					}
				],
			"boxC":
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
						"leftEndpoint" : [7871208619416398796823291182507,193463967846394069570763620352],
						"rightEndpoint" : [9063889462372662924434053332223,185726842600860442852644093952]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [7871208619416398796823291182507,193463967846394069570763620352],
						"rightEndpoint" : [9063889462372662924434053332223,185726842600860442852644093952]
					}
				]
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
			"boxStep": "Contract",
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
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [22800259356720107551123435254404045432439381569,873518261463726617999283009534644263843790848]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10491092105911278262760205123117607191217931969,436759130731863308999641504767322131921895424],
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
						"rightEndpoint" : [22800259356720107551123435254404045432439381569,873518261463726617999283009534644263843790848]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10491092105911278262760205123117607191217931969,436759130731863308999641504767322131921895424],
						"rightEndpoint" : [51,2]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
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
						"leftEndpoint" : [55636456452753658805425241761,3751260712591802849279606784],
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
						"leftEndpoint" : [55636456452753658805425241761,3751260712591802849279606784],
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
						"leftEndpoint" : [55636456452753658805425241761,3751260712591802849279606784],
						"rightEndpoint" : [151293604623844631462055214753,7502521425183605698559213568]
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
						"leftEndpoint" : [151293604623844631462055214753,7502521425183605698559213568],
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
						"leftEndpoint" : [55636456452753658805425241761,3751260712591802849279606784],
						"rightEndpoint" : [151293604623844631462055214753,7502521425183605698559213568]
					}
				]
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
						"leftEndpoint" : [151293604623844631462055214753,7502521425183605698559213568],
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
						"rightEndpoint" : [125,4]
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
						"leftEndpoint" : [125,4],
						"rightEndpoint" : [75,2]
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
			"boxStep": "Contract",
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
						"rightEndpoint" : [151,4]
					}
				],
			"boxC":
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
						"leftEndpoint" : [1568885023749646575503781645603,59029767105787267392104038400],
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
						"leftEndpoint" : [1568885023749646575503781645603,59029767105787267392104038400],
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
						"leftEndpoint" : [1568885023749646575503781645603,59029767105787267392104038400],
						"rightEndpoint" : [3797258731993115919555709095203,118059534211574534784208076800]
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
						"leftEndpoint" : [3797258731993115919555709095203,118059534211574534784208076800],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [1568885023749646575503781645603,59029767105787267392104038400],
						"rightEndpoint" : [3797258731993115919555709095203,118059534211574534784208076800]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [3797258731993115919555709095203,118059534211574534784208076800],
						"rightEndpoint" : [151,4]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"rightEndpoint" : [151,4]
					}
				],
			"boxC":
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
						"leftEndpoint" : [2758943988490336384629500797781,93057738034459227175493042176],
						"rightEndpoint" : [1554386558972548276813665457285,41548005331051257494446800896]
					}
				]
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
						"leftEndpoint" : [2758943988490336384629500797781,93057738034459227175493042176],
						"rightEndpoint" : [1554386558972548276813665457285,41548005331051257494446800896]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
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
						"leftEndpoint" : [9122193462949681615051797954951,239329929032988707508918943744],
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
						"leftEndpoint" : [9122193462949681615051797954951,239329929032988707508918943744],
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
						"leftEndpoint" : [9122193462949681615051797954951,239329929032988707508918943744],
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
						"leftEndpoint" : [9122193462949681615051797954951,239329929032988707508918943744],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
						"leftEndpoint" : [9122193462949681615051797954951,239329929032988707508918943744],
						"rightEndpoint" : [50,1]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [50780062047022604067579248572843972820898569922276547931503,1684783225864923706469540154291214793084379294040804294656]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [437347692433602641815058974983549280435747078797483045350551,10108699355189542238817240925747288758506275764244825767936],
						"rightEndpoint" : [1178842033926426576811757697201,24650794658848741023209750528]
					}
				]
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
						"rightEndpoint" : [50780062047022604067579248572843972820898569922276547931503,1684783225864923706469540154291214793084379294040804294656]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [437347692433602641815058974983549280435747078797483045350551,10108699355189542238817240925747288758506275764244825767936],
						"rightEndpoint" : [1178842033926426576811757697201,24650794658848741023209750528]
					}
				]
		}
		,
		{
			"boxStep": "ContractEmpty",
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
						"leftEndpoint" : [9122193462949681615051797954951,239329929032988707508918943744],
						"rightEndpoint" : [50,1]
					}
				]
		}
		,
		{
			"boxStep": "Contract",
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
			"boxC":
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
			"boxStep": "Contract",
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
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [4862651478791350850016214963591756036238744729,119417152349406814541188265164984733992484864]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [691168911859292417385277690441656492023398697,14927144043675851817648533145623091749060608],
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
						"rightEndpoint" : [4862651478791350850016214963591756036238744729,119417152349406814541188265164984733992484864]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [691168911859292417385277690441656492023398697,14927144043675851817648533145623091749060608],
						"rightEndpoint" : [50,1]
					}
				]
		}

	]
]