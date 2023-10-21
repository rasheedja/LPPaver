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
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
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
						"leftEndpoint" : [0,1],
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
						"leftEndpoint" : [0,1],
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
						"leftEndpoint" : [0,1],
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
						"leftEndpoint" : [0,1],
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
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,1]
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
						"leftEndpoint" : [25,1],
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
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,1]
					}
				]
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
						"leftEndpoint" : [25,1],
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
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
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
						"leftEndpoint" : [75,2],
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
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [75,2]
					}
				]
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
						"leftEndpoint" : [75,2],
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
						"leftEndpoint" : [75,2],
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
						"leftEndpoint" : [75,2],
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
						"leftEndpoint" : [75,2],
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [175,4],
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [325,8]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [325,8]
					}
				]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
					}
				]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
				]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
				]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [5575,128]
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
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [5575,128]
					}
				]
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
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [175,4]
					}
				]
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
						"rightEndpoint" : [1425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [11175,256]
					}
				],
			"boxR":
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
						"leftEndpoint" : [11175,256],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [11175,256]
					}
				]
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
						"leftEndpoint" : [11175,256],
						"rightEndpoint" : [175,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
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
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [175,4]
					}
				],
			"boxL":
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
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [11175,256]
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
						"leftEndpoint" : [11175,256],
						"rightEndpoint" : [175,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
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
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [11175,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
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
						"leftEndpoint" : [11175,256],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [5575,128]
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
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [5575,128]
					}
				]
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
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
				]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
				]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
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
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
				]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
				]
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
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
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
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
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
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
				]
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
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
				]
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
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
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
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [11075,256]
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
						"leftEndpoint" : [11075,256],
						"rightEndpoint" : [2775,64]
					}
				]
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
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [11075,256]
					}
				]
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
						"leftEndpoint" : [11075,256],
						"rightEndpoint" : [2775,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1575,128],
						"rightEndpoint" : [3175,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11075,256],
						"rightEndpoint" : [2775,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3175,256],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11075,256],
						"rightEndpoint" : [2775,64]
					}
				]
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
						"rightEndpoint" : [3175,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11075,256],
						"rightEndpoint" : [2775,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3175,256],
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11075,256],
						"rightEndpoint" : [2775,64]
					}
				]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [5575,128]
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
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [5575,128]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [5575,128]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [5575,128]
					}
				]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [5575,128]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [11125,256]
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
						"leftEndpoint" : [11125,256],
						"rightEndpoint" : [5575,128]
					}
				]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [11125,256]
					}
				]
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
						"leftEndpoint" : [11125,256],
						"rightEndpoint" : [5575,128]
					}
				]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [5575,128]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [11125,256]
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
						"leftEndpoint" : [11125,256],
						"rightEndpoint" : [5575,128]
					}
				]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [11125,256]
					}
				]
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
						"leftEndpoint" : [11125,256],
						"rightEndpoint" : [5575,128]
					}
				]
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
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [175,4],
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
						"leftEndpoint" : [175,4],
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
						"leftEndpoint" : [175,4],
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
						"leftEndpoint" : [175,4],
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
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
						"leftEndpoint" : [375,8],
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
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
						"leftEndpoint" : [725,16],
						"rightEndpoint" : [375,8]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
				]
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
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [25,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [25,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				]
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
						"rightEndpoint" : [25,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [75,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [75,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [75,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [75,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [75,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,128],
						"rightEndpoint" : [75,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,128],
						"rightEndpoint" : [75,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,128],
						"rightEndpoint" : [75,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,128],
						"rightEndpoint" : [75,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,128],
						"rightEndpoint" : [75,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,128],
						"rightEndpoint" : [75,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [75,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,128],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,128],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,128],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,128],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,128],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,128],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [25,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
				]
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
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [75,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [75,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [75,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [75,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [75,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [75,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [75,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [225,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				]
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
						"rightEndpoint" : [225,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [225,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [225,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
				]
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
						"rightEndpoint" : [225,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
				]
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
						"rightEndpoint" : [225,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
				]
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
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [75,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [75,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [75,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [75,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [75,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [75,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [75,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [75,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [75,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [75,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [75,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [175,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,64],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [175,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [175,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [175,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [175,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,128],
						"rightEndpoint" : [175,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
				]
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
						"rightEndpoint" : [325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
				]
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
						"rightEndpoint" : [325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,128],
						"rightEndpoint" : [175,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,128],
						"rightEndpoint" : [175,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,128],
						"rightEndpoint" : [175,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,128],
						"rightEndpoint" : [175,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,128],
						"rightEndpoint" : [175,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
				]
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
						"rightEndpoint" : [175,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,64],
						"rightEndpoint" : [25,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				]
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
						"leftEndpoint" : [725,16],
						"rightEndpoint" : [375,8]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
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
						"leftEndpoint" : [725,16],
						"rightEndpoint" : [375,8]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxR":
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
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
				]
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
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [125,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				]
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
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [11475,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11475,256],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [11475,256]
					}
				]
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
						"rightEndpoint" : [275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11475,256],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				]
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
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,128],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [11475,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11475,256],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [11475,256]
					}
				]
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
						"rightEndpoint" : [575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11475,256],
						"rightEndpoint" : [2875,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,128],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,128],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [11475,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,128],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11475,256],
						"rightEndpoint" : [2875,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,128],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [11475,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,128],
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11475,256],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [75,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
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
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
				]
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
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [175,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [175,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [175,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [175,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [175,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,64],
						"rightEndpoint" : [175,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				]
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
						"rightEndpoint" : [325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,128],
						"rightEndpoint" : [325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [11475,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11475,256],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [11475,256]
					}
				]
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
						"rightEndpoint" : [625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11475,256],
						"rightEndpoint" : [2875,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,128],
						"rightEndpoint" : [325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,128],
						"rightEndpoint" : [325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [11475,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,128],
						"rightEndpoint" : [325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11475,256],
						"rightEndpoint" : [2875,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,128],
						"rightEndpoint" : [325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [11475,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,128],
						"rightEndpoint" : [325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11475,256],
						"rightEndpoint" : [2875,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,64],
						"rightEndpoint" : [175,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,64],
						"rightEndpoint" : [175,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,64],
						"rightEndpoint" : [175,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,64],
						"rightEndpoint" : [175,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,64],
						"rightEndpoint" : [175,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [175,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [375,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [375,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [375,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [375,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [375,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [375,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,128],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [11425,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11425,256],
						"rightEndpoint" : [5725,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [11425,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11425,256],
						"rightEndpoint" : [5725,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,128],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,128],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [11425,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,128],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11425,256],
						"rightEndpoint" : [5725,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,128],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [11425,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,128],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11425,256],
						"rightEndpoint" : [5725,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [25,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				]
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
						"leftEndpoint" : [725,16],
						"rightEndpoint" : [375,8]
					}
				]
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
						"leftEndpoint" : [375,8],
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
						"leftEndpoint" : [175,4],
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
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
						"leftEndpoint" : [375,8],
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
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
						"leftEndpoint" : [725,16],
						"rightEndpoint" : [375,8]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
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
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [225,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
				]
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
						"rightEndpoint" : [225,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [925,128],
						"rightEndpoint" : [475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [925,128],
						"rightEndpoint" : [475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [925,128],
						"rightEndpoint" : [475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [11375,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [925,128],
						"rightEndpoint" : [475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11375,256],
						"rightEndpoint" : [1425,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [925,128],
						"rightEndpoint" : [475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [11375,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [925,128],
						"rightEndpoint" : [475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11375,256],
						"rightEndpoint" : [1425,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [975,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [975,128],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [975,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [975,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [11375,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [975,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11375,256],
						"rightEndpoint" : [1425,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [975,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [11375,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [975,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11375,256],
						"rightEndpoint" : [1425,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [975,128],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [975,128],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [11375,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [975,128],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11375,256],
						"rightEndpoint" : [1425,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [975,128],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [11375,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [975,128],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11375,256],
						"rightEndpoint" : [1425,32]
					}
				]
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
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [225,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [225,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [225,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [225,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				]
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
						"rightEndpoint" : [225,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,64],
						"rightEndpoint" : [225,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [825,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [825,128],
						"rightEndpoint" : [425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				]
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
						"rightEndpoint" : [825,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [825,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [11425,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [825,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11425,256],
						"rightEndpoint" : [5725,128]
					}
				]
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
						"rightEndpoint" : [825,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [11425,256]
					}
				]
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
						"rightEndpoint" : [825,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11425,256],
						"rightEndpoint" : [5725,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [825,128],
						"rightEndpoint" : [425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [825,128],
						"rightEndpoint" : [425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [11425,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [825,128],
						"rightEndpoint" : [425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11425,256],
						"rightEndpoint" : [5725,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [825,128],
						"rightEndpoint" : [425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [11425,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [825,128],
						"rightEndpoint" : [425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11425,256],
						"rightEndpoint" : [5725,128]
					}
				]
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
						"rightEndpoint" : [425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,64],
						"rightEndpoint" : [225,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
				]
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
						"rightEndpoint" : [225,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [125,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
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
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
				]
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
						"rightEndpoint" : [275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
				],
			"boxR":
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
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
				]
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
						"rightEndpoint" : [275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,64],
						"rightEndpoint" : [275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				]
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
						"rightEndpoint" : [525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
				]
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
						"rightEndpoint" : [525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
				]
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
						"rightEndpoint" : [525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,64],
						"rightEndpoint" : [275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,64],
						"rightEndpoint" : [275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,64],
						"rightEndpoint" : [275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,64],
						"rightEndpoint" : [275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,64],
						"rightEndpoint" : [1075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,128],
						"rightEndpoint" : [275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,64],
						"rightEndpoint" : [1075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,128],
						"rightEndpoint" : [275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,128],
						"rightEndpoint" : [275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [11325,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,128],
						"rightEndpoint" : [275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11325,256],
						"rightEndpoint" : [5675,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,128],
						"rightEndpoint" : [275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [11325,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,128],
						"rightEndpoint" : [275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11325,256],
						"rightEndpoint" : [5675,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,64],
						"rightEndpoint" : [275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxL":
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
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
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,64],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
				]
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
						"rightEndpoint" : [575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,64],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,64],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,64],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,64],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,64],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,64],
						"rightEndpoint" : [1175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1175,128],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,64],
						"rightEndpoint" : [1175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1175,128],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1175,128],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [11275,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1175,128],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11275,256],
						"rightEndpoint" : [2825,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1175,128],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [11275,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1175,128],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11275,256],
						"rightEndpoint" : [2825,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1175,128],
						"rightEndpoint" : [2375,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11275,256],
						"rightEndpoint" : [2825,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2375,256],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11275,256],
						"rightEndpoint" : [2825,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1175,128],
						"rightEndpoint" : [2375,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11275,256],
						"rightEndpoint" : [2825,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2375,256],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11275,256],
						"rightEndpoint" : [2825,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
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
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,64],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [1125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,128],
						"rightEndpoint" : [575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [1125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [1125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [11325,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [1125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11325,256],
						"rightEndpoint" : [5675,128]
					}
				]
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
						"rightEndpoint" : [1125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [11325,256]
					}
				]
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
						"rightEndpoint" : [1125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11325,256],
						"rightEndpoint" : [5675,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,128],
						"rightEndpoint" : [575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
				]
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
						"rightEndpoint" : [575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,64],
						"rightEndpoint" : [75,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				]
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
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				]
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
						"leftEndpoint" : [725,16],
						"rightEndpoint" : [375,8]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
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
						"leftEndpoint" : [725,16],
						"rightEndpoint" : [375,8]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
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
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
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
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [625,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,64],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
				]
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
						"rightEndpoint" : [625,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [625,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [625,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
				]
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
						"rightEndpoint" : [625,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
				]
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
						"rightEndpoint" : [625,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [1225,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,128],
						"rightEndpoint" : [625,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
				]
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
						"rightEndpoint" : [1225,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [1225,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [11275,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [1225,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11275,256],
						"rightEndpoint" : [2825,64]
					}
				]
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
						"rightEndpoint" : [1225,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [11275,256]
					}
				]
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
						"rightEndpoint" : [1225,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11275,256],
						"rightEndpoint" : [2825,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,128],
						"rightEndpoint" : [625,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,128],
						"rightEndpoint" : [625,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [11275,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,128],
						"rightEndpoint" : [625,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11275,256],
						"rightEndpoint" : [2825,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,128],
						"rightEndpoint" : [625,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [11275,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,128],
						"rightEndpoint" : [625,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11275,256],
						"rightEndpoint" : [2825,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,64],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,64],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,64],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,64],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,64],
						"rightEndpoint" : [325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
				]
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
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
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
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
				]
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
						"rightEndpoint" : [675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
				],
			"boxR":
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
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
				]
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
						"rightEndpoint" : [675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [1325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,128],
						"rightEndpoint" : [675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
				]
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
						"rightEndpoint" : [1325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [1325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [11225,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [1325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11225,256],
						"rightEndpoint" : [5625,128]
					}
				]
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
						"rightEndpoint" : [1325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [11225,256]
					}
				]
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
						"rightEndpoint" : [1325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11225,256],
						"rightEndpoint" : [5625,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,128],
						"rightEndpoint" : [675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,128],
						"rightEndpoint" : [675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [11225,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,128],
						"rightEndpoint" : [675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11225,256],
						"rightEndpoint" : [5625,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,128],
						"rightEndpoint" : [675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [11225,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,128],
						"rightEndpoint" : [675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11225,256],
						"rightEndpoint" : [5625,128]
					}
				]
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
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
				]
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
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
				]
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
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
				]
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
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
				]
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
						"leftEndpoint" : [725,16],
						"rightEndpoint" : [375,8]
					}
				]
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
						"leftEndpoint" : [375,8],
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
						"leftEndpoint" : [75,2],
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [175,4],
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [325,8]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [325,8]
					}
				]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
					}
				]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
				]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
				]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
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
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
				]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
				]
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
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
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
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
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
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
				]
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
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
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
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
				],
			"boxL":
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
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
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
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [1375,32]
					}
				]
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
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
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
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [1375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [1775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [1375,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1775,128],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [1375,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [1775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [1375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [1775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [10975,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [1775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10975,256],
						"rightEndpoint" : [1375,32]
					}
				]
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
						"rightEndpoint" : [1775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [10975,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [1775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10975,256],
						"rightEndpoint" : [1375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [3525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10975,256],
						"rightEndpoint" : [1375,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3525,256],
						"rightEndpoint" : [1775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10975,256],
						"rightEndpoint" : [1375,32]
					}
				]
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
						"rightEndpoint" : [3525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10975,256],
						"rightEndpoint" : [1375,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3525,256],
						"rightEndpoint" : [1775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10975,256],
						"rightEndpoint" : [1375,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1775,128],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [1375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1775,128],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [10975,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1775,128],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10975,256],
						"rightEndpoint" : [1375,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1775,128],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [10975,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1775,128],
						"rightEndpoint" : [225,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10975,256],
						"rightEndpoint" : [1375,32]
					}
				]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
				]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
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
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
				]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
				]
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
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
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
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
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
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
				]
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
						"rightEndpoint" : [1625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
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
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [11075,256]
					}
				],
			"boxR":
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
						"leftEndpoint" : [11075,256],
						"rightEndpoint" : [2775,64]
					}
				]
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
						"rightEndpoint" : [1625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [11075,256]
					}
				]
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
						"rightEndpoint" : [1625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11075,256],
						"rightEndpoint" : [2775,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
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
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
				],
			"boxL":
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
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [11075,256]
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
						"leftEndpoint" : [11075,256],
						"rightEndpoint" : [2775,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
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
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [11075,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1625,128],
						"rightEndpoint" : [3275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [11075,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3275,256],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [11075,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1625,128],
						"rightEndpoint" : [3275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [11075,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3275,256],
						"rightEndpoint" : [825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [11075,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
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
						"leftEndpoint" : [11075,256],
						"rightEndpoint" : [2775,64]
					}
				]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
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
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
				]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [1675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1675,128],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
				]
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
						"rightEndpoint" : [1675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1675,128],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1675,128],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [11025,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1675,128],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11025,256],
						"rightEndpoint" : [5525,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1675,128],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [11025,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1675,128],
						"rightEndpoint" : [425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11025,256],
						"rightEndpoint" : [5525,128]
					}
				]
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
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
				]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
				]
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
						"rightEndpoint" : [875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
				],
			"boxR":
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
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
				]
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
						"rightEndpoint" : [875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [1725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1725,128],
						"rightEndpoint" : [875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
				]
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
						"rightEndpoint" : [1725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [1725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [11025,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [1725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11025,256],
						"rightEndpoint" : [5525,128]
					}
				]
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
						"rightEndpoint" : [1725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [11025,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [3425,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [11025,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3425,256],
						"rightEndpoint" : [1725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [11025,256]
					}
				]
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
						"rightEndpoint" : [3425,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [11025,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3425,256],
						"rightEndpoint" : [1725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [11025,256]
					}
				]
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
						"rightEndpoint" : [1725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [11025,256],
						"rightEndpoint" : [5525,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1725,128],
						"rightEndpoint" : [875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
				]
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
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
				]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
				]
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
				]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
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
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
				]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
				]
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
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [925,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [475,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
				]
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
						"rightEndpoint" : [925,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [925,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [925,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [1375,32]
					}
				]
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
						"rightEndpoint" : [925,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [1825,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1825,128],
						"rightEndpoint" : [925,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
				]
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
						"rightEndpoint" : [1825,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1825,128],
						"rightEndpoint" : [925,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1825,128],
						"rightEndpoint" : [925,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [10925,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1825,128],
						"rightEndpoint" : [925,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10925,256],
						"rightEndpoint" : [5475,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1825,128],
						"rightEndpoint" : [925,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [10925,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1825,128],
						"rightEndpoint" : [925,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10925,256],
						"rightEndpoint" : [5475,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1825,128],
						"rightEndpoint" : [3675,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10925,256],
						"rightEndpoint" : [5475,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3675,256],
						"rightEndpoint" : [925,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10925,256],
						"rightEndpoint" : [5475,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1825,128],
						"rightEndpoint" : [3675,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10925,256],
						"rightEndpoint" : [5475,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3675,256],
						"rightEndpoint" : [925,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10925,256],
						"rightEndpoint" : [5475,128]
					}
				]
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
						"rightEndpoint" : [925,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [1375,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [475,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [475,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [475,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [1375,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [475,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [1875,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1875,128],
						"rightEndpoint" : [475,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [1875,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [1875,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [10925,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [1875,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10925,256],
						"rightEndpoint" : [5475,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [1875,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [10925,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [1875,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10925,256],
						"rightEndpoint" : [5475,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1875,128],
						"rightEndpoint" : [475,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [475,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [1375,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
				],
			"boxL":
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
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
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [975,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [975,64],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [975,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [975,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [975,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [2725,64]
					}
				]
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
						"rightEndpoint" : [975,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [975,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [2725,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [1925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [2725,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1925,128],
						"rightEndpoint" : [975,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [2725,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [1925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [2725,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [1925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [10875,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [1925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10875,256],
						"rightEndpoint" : [2725,64]
					}
				]
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
						"rightEndpoint" : [1925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [10875,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [1925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10875,256],
						"rightEndpoint" : [2725,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [3825,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10875,256],
						"rightEndpoint" : [2725,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3825,256],
						"rightEndpoint" : [1925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10875,256],
						"rightEndpoint" : [2725,64]
					}
				]
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
						"rightEndpoint" : [3825,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10875,256],
						"rightEndpoint" : [2725,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3825,256],
						"rightEndpoint" : [1925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10875,256],
						"rightEndpoint" : [2725,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1925,128],
						"rightEndpoint" : [975,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [2725,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1925,128],
						"rightEndpoint" : [975,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [10875,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1925,128],
						"rightEndpoint" : [975,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10875,256],
						"rightEndpoint" : [2725,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1925,128],
						"rightEndpoint" : [975,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [10875,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1925,128],
						"rightEndpoint" : [3875,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [10875,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3875,256],
						"rightEndpoint" : [975,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [10875,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1925,128],
						"rightEndpoint" : [3875,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [10875,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3875,256],
						"rightEndpoint" : [975,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [10875,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1925,128],
						"rightEndpoint" : [975,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10875,256],
						"rightEndpoint" : [2725,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [975,64],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [975,64],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [975,64],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [2725,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [975,64],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [975,64],
						"rightEndpoint" : [1975,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1975,128],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [975,64],
						"rightEndpoint" : [1975,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1975,128],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1975,128],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [10825,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1975,128],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10825,256],
						"rightEndpoint" : [5425,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1975,128],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [10825,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1975,128],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10825,256],
						"rightEndpoint" : [5425,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [975,64],
						"rightEndpoint" : [125,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [2725,64]
					}
				]
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
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
				]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
					}
				]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
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
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
				]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
					}
				]
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
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
				]
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
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
				]
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
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
				]
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
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
				]
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
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [5375,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
				]
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
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [5375,128]
					}
				]
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
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [2025,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2025,128],
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
				]
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
						"rightEndpoint" : [2025,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2025,128],
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2025,128],
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [10775,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2025,128],
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10775,256],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2025,128],
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [10775,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2025,128],
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10775,256],
						"rightEndpoint" : [675,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2025,128],
						"rightEndpoint" : [4075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10775,256],
						"rightEndpoint" : [675,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4075,256],
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10775,256],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2025,128],
						"rightEndpoint" : [4075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10775,256],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4075,256],
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10775,256],
						"rightEndpoint" : [675,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4075,256],
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10775,256],
						"rightEndpoint" : [21575,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4075,256],
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [21575,512],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4075,256],
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10775,256],
						"rightEndpoint" : [21575,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4075,256],
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [21575,512],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [5375,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [5375,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [2075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2075,128],
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [2075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [2075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [10775,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [2075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10775,256],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [2075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [10775,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [2075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10775,256],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2075,128],
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [1075,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,64],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [1075,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,64],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,64],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,64],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [2675,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,64],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,64],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [2675,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,64],
						"rightEndpoint" : [2175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [2675,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2175,128],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [2675,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,64],
						"rightEndpoint" : [2175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [2675,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2175,128],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [2675,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2175,128],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [10675,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2175,128],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10675,256],
						"rightEndpoint" : [2675,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2175,128],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [10675,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2175,128],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10675,256],
						"rightEndpoint" : [2675,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [1075,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,64],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [1075,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [1075,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [5375,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [1075,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [1075,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [5375,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [2125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [5375,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2125,128],
						"rightEndpoint" : [1075,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [5375,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [2125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [5375,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [2125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [10725,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [2125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10725,256],
						"rightEndpoint" : [5375,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [2125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [10725,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [2125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10725,256],
						"rightEndpoint" : [5375,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [4225,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10725,256],
						"rightEndpoint" : [5375,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4225,256],
						"rightEndpoint" : [2125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10725,256],
						"rightEndpoint" : [5375,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [4225,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10725,256],
						"rightEndpoint" : [5375,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4225,256],
						"rightEndpoint" : [2125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10725,256],
						"rightEndpoint" : [5375,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2125,128],
						"rightEndpoint" : [1075,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [5375,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2125,128],
						"rightEndpoint" : [1075,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [10725,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2125,128],
						"rightEndpoint" : [1075,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10725,256],
						"rightEndpoint" : [5375,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2125,128],
						"rightEndpoint" : [1075,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [10725,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2125,128],
						"rightEndpoint" : [4275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [10725,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4275,256],
						"rightEndpoint" : [1075,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [10725,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2125,128],
						"rightEndpoint" : [4275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [10725,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4275,256],
						"rightEndpoint" : [1075,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [10725,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2125,128],
						"rightEndpoint" : [1075,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10725,256],
						"rightEndpoint" : [5375,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [1075,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1075,64],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
					}
				],
			"boxL":
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
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
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [2625,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
				]
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
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [2625,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [1125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
				]
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
						"rightEndpoint" : [1125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [5275,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [5275,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [2275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2275,128],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [2275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2275,128],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2275,128],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [10575,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2275,128],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10575,256],
						"rightEndpoint" : [1325,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2275,128],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [10575,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2275,128],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10575,256],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2275,128],
						"rightEndpoint" : [4575,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10575,256],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4575,256],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10575,256],
						"rightEndpoint" : [1325,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2275,128],
						"rightEndpoint" : [4575,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10575,256],
						"rightEndpoint" : [1325,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4575,256],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10575,256],
						"rightEndpoint" : [1325,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [2625,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [2625,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [1175,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [1175,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [1175,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [5275,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [1175,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [1175,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [5275,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [1175,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [2325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2325,128],
						"rightEndpoint" : [1175,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [2325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [2325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [10575,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [2325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10575,256],
						"rightEndpoint" : [1325,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [2325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [10575,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [4625,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [10575,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4625,256],
						"rightEndpoint" : [2325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [10575,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [4625,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [10575,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4625,256],
						"rightEndpoint" : [2325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [10575,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4625,256],
						"rightEndpoint" : [2325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [21125,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4625,256],
						"rightEndpoint" : [2325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [21125,512],
						"rightEndpoint" : [10575,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4625,256],
						"rightEndpoint" : [2325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [21125,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4625,256],
						"rightEndpoint" : [2325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [21125,512],
						"rightEndpoint" : [10575,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [2325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10575,256],
						"rightEndpoint" : [1325,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2325,128],
						"rightEndpoint" : [1175,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [5275,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [5275,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [2375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [5275,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2375,128],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [5275,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [2375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [5275,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [2375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [10525,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [2375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10525,256],
						"rightEndpoint" : [5275,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [2375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [10525,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [2375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10525,256],
						"rightEndpoint" : [5275,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2375,128],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [5275,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
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
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [1125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [1125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [1125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [1125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [2675,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [1125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [2225,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2225,128],
						"rightEndpoint" : [1125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
				]
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
						"rightEndpoint" : [2225,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2225,128],
						"rightEndpoint" : [1125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2225,128],
						"rightEndpoint" : [1125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [10625,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2225,128],
						"rightEndpoint" : [1125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10625,256],
						"rightEndpoint" : [5325,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2225,128],
						"rightEndpoint" : [1125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [10625,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2225,128],
						"rightEndpoint" : [1125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10625,256],
						"rightEndpoint" : [5325,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2225,128],
						"rightEndpoint" : [4475,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10625,256],
						"rightEndpoint" : [5325,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4475,256],
						"rightEndpoint" : [1125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10625,256],
						"rightEndpoint" : [5325,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2225,128],
						"rightEndpoint" : [4475,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10625,256],
						"rightEndpoint" : [5325,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4475,256],
						"rightEndpoint" : [1125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10625,256],
						"rightEndpoint" : [5325,128]
					}
				]
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
						"rightEndpoint" : [1125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [2675,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [2675,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [2275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2275,128],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [2275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [2275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [10625,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [2275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10625,256],
						"rightEndpoint" : [5325,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [2275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [10625,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [4525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [10625,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4525,256],
						"rightEndpoint" : [2275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [10625,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [4525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [10625,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4525,256],
						"rightEndpoint" : [2275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [10625,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [2275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10625,256],
						"rightEndpoint" : [5325,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2275,128],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [2675,64]
					}
				]
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
						"rightEndpoint" : [575,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [75,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
				]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
				]
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
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
				]
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
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
				]
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
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [2725,64]
					}
				]
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
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [2025,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2025,128],
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
				]
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
						"rightEndpoint" : [2025,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [2025,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [10825,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [2025,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10825,256],
						"rightEndpoint" : [5425,128]
					}
				]
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
						"rightEndpoint" : [2025,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [10825,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [4025,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [10825,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4025,256],
						"rightEndpoint" : [2025,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [10825,256]
					}
				]
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
						"rightEndpoint" : [4025,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [10825,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4025,256],
						"rightEndpoint" : [2025,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [10825,256]
					}
				]
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
						"rightEndpoint" : [2025,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10825,256],
						"rightEndpoint" : [5425,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2025,128],
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
				]
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
						"rightEndpoint" : [1025,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [2725,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
				]
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
						"rightEndpoint" : [525,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [275,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
				]
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [325,8]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [325,8]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [325,8]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [325,8]
					}
				]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [325,8]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [625,16]
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
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [325,8]
					}
				]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [625,16]
					}
				]
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
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [325,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [325,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [325,8]
					}
				]
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
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [325,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
				]
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
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
				]
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
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
				]
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
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [2575,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [325,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [2575,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [325,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [1275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [325,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [325,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [1275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [325,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [1275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [5175,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [1275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [325,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [1275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [5175,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [1275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [325,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [2525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [325,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,128],
						"rightEndpoint" : [1275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [325,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [2525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [325,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [2525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [10375,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [2525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10375,256],
						"rightEndpoint" : [325,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [2525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [10375,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [2525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10375,256],
						"rightEndpoint" : [325,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [5025,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10375,256],
						"rightEndpoint" : [325,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5025,256],
						"rightEndpoint" : [2525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10375,256],
						"rightEndpoint" : [325,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [5025,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10375,256],
						"rightEndpoint" : [325,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5025,256],
						"rightEndpoint" : [2525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10375,256],
						"rightEndpoint" : [325,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,128],
						"rightEndpoint" : [1275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [325,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,128],
						"rightEndpoint" : [1275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [10375,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,128],
						"rightEndpoint" : [1275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10375,256],
						"rightEndpoint" : [325,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,128],
						"rightEndpoint" : [1275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [10375,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,128],
						"rightEndpoint" : [5075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [10375,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5075,256],
						"rightEndpoint" : [1275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [10375,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,128],
						"rightEndpoint" : [5075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [10375,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5075,256],
						"rightEndpoint" : [1275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [10375,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,128],
						"rightEndpoint" : [1275,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10375,256],
						"rightEndpoint" : [325,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [325,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [5175,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [325,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [5175,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [2575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [5175,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,128],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [5175,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [2575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [5175,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [2575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [10325,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [2575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10325,256],
						"rightEndpoint" : [5175,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [2575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [10325,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [2575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10325,256],
						"rightEndpoint" : [5175,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [5125,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10325,256],
						"rightEndpoint" : [5175,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5125,256],
						"rightEndpoint" : [2575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10325,256],
						"rightEndpoint" : [5175,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [5125,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10325,256],
						"rightEndpoint" : [5175,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5125,256],
						"rightEndpoint" : [2575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10325,256],
						"rightEndpoint" : [5175,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,128],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [5175,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,128],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [10325,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,128],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10325,256],
						"rightEndpoint" : [5175,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,128],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [10325,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,128],
						"rightEndpoint" : [5175,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [10325,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5175,256],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [10325,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,128],
						"rightEndpoint" : [5175,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [10325,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5175,256],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [10325,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,128],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10325,256],
						"rightEndpoint" : [5175,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [325,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [325,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [2525,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [1275,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [2525,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [1275,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [1375,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [1275,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [1275,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [1375,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [1275,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [1375,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [5075,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [1375,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5075,128],
						"rightEndpoint" : [1275,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [1375,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [5075,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [1375,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5075,128],
						"rightEndpoint" : [1275,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [2725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5075,128],
						"rightEndpoint" : [1275,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,128],
						"rightEndpoint" : [1375,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5075,128],
						"rightEndpoint" : [1275,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [2725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5075,128],
						"rightEndpoint" : [1275,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [2725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5075,128],
						"rightEndpoint" : [10175,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [2725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10175,256],
						"rightEndpoint" : [1275,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [2725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5075,128],
						"rightEndpoint" : [10175,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [2725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10175,256],
						"rightEndpoint" : [1275,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [5425,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10175,256],
						"rightEndpoint" : [1275,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5425,256],
						"rightEndpoint" : [2725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10175,256],
						"rightEndpoint" : [1275,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [5425,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10175,256],
						"rightEndpoint" : [1275,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [5425,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10175,256],
						"rightEndpoint" : [20375,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [5425,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [20375,512],
						"rightEndpoint" : [1275,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [5425,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10175,256],
						"rightEndpoint" : [20375,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [5425,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [20375,512],
						"rightEndpoint" : [1275,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5425,256],
						"rightEndpoint" : [2725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10175,256],
						"rightEndpoint" : [1275,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,128],
						"rightEndpoint" : [1375,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5075,128],
						"rightEndpoint" : [1275,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [1275,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [5075,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5075,128],
						"rightEndpoint" : [1275,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [5075,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [2775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [5075,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,128],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [5075,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [2775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [5075,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [2775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [10125,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [2775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10125,256],
						"rightEndpoint" : [5075,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [2775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [10125,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [2775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10125,256],
						"rightEndpoint" : [5075,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,128],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [5075,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5075,128],
						"rightEndpoint" : [1275,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [2575,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [325,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [2575,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [1325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [2575,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [2575,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [1325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [2575,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [1325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [5125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [1325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [2575,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [1325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [5125,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [1325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [2575,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [2625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [2575,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,128],
						"rightEndpoint" : [1325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [2575,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [2625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [2575,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [2625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [10275,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [2625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10275,256],
						"rightEndpoint" : [2575,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [2625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [10275,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [2625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10275,256],
						"rightEndpoint" : [2575,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [5225,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10275,256],
						"rightEndpoint" : [2575,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5225,256],
						"rightEndpoint" : [2625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10275,256],
						"rightEndpoint" : [2575,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [5225,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10275,256],
						"rightEndpoint" : [2575,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5225,256],
						"rightEndpoint" : [2625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10275,256],
						"rightEndpoint" : [2575,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,128],
						"rightEndpoint" : [1325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [2575,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,128],
						"rightEndpoint" : [1325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [10275,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,128],
						"rightEndpoint" : [1325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10275,256],
						"rightEndpoint" : [2575,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,128],
						"rightEndpoint" : [1325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [10275,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,128],
						"rightEndpoint" : [5275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [10275,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,256],
						"rightEndpoint" : [1325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [10275,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,128],
						"rightEndpoint" : [5275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [10275,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,256],
						"rightEndpoint" : [1325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [10275,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,128],
						"rightEndpoint" : [1325,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10275,256],
						"rightEndpoint" : [2575,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [2575,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [5125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [2575,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [5125,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [2675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [5125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,128],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [5125,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [2675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [5125,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [2675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [10225,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [2675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10225,256],
						"rightEndpoint" : [5125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [2675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [10225,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [2675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10225,256],
						"rightEndpoint" : [5125,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [5325,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10225,256],
						"rightEndpoint" : [5125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5325,256],
						"rightEndpoint" : [2675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10225,256],
						"rightEndpoint" : [5125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [5325,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10225,256],
						"rightEndpoint" : [5125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5325,256],
						"rightEndpoint" : [2675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10225,256],
						"rightEndpoint" : [5125,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,128],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [5125,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,128],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [10225,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,128],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10225,256],
						"rightEndpoint" : [5125,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,128],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [10225,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,128],
						"rightEndpoint" : [5375,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [10225,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5375,256],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [10225,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,128],
						"rightEndpoint" : [5375,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [10225,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5375,256],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [10225,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,128],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10225,256],
						"rightEndpoint" : [5125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [2575,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [675,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [325,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
				]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [325,8]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [625,16]
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
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [325,8]
					}
				]
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
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [625,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [625,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [625,16]
					}
				]
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
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [625,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [1225,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [625,16]
					}
				]
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
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [1225,32]
					}
				]
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
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [625,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [625,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [625,16]
					}
				]
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
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [625,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
				]
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
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
				]
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
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
				]
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
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [4975,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [4975,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [2875,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,128],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [2875,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,128],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,128],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [9975,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,128],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9975,256],
						"rightEndpoint" : [625,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,128],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [9975,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,128],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9975,256],
						"rightEndpoint" : [625,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,128],
						"rightEndpoint" : [5775,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9975,256],
						"rightEndpoint" : [625,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5775,256],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9975,256],
						"rightEndpoint" : [625,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,128],
						"rightEndpoint" : [5775,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9975,256],
						"rightEndpoint" : [625,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5775,256],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9975,256],
						"rightEndpoint" : [625,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [625,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [1475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1475,64],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [1475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1475,64],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1475,64],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [4925,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1475,64],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [2475,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1475,64],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [4925,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1475,64],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [2475,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1475,64],
						"rightEndpoint" : [2975,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [2475,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2975,128],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [2475,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1475,64],
						"rightEndpoint" : [2975,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [2475,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2975,128],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [2475,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2975,128],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [9875,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2975,128],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9875,256],
						"rightEndpoint" : [2475,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2975,128],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [9875,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2975,128],
						"rightEndpoint" : [5975,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [9875,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5975,256],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [9875,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2975,128],
						"rightEndpoint" : [5975,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [9875,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5975,256],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [9875,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2975,128],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9875,256],
						"rightEndpoint" : [2475,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [1475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1475,64],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [1475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [1475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [4975,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [1475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [1475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [4975,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [2925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [4975,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2925,128],
						"rightEndpoint" : [1475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [4975,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [2925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [4975,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2925,128],
						"rightEndpoint" : [1475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [4975,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2925,128],
						"rightEndpoint" : [1475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [9925,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2925,128],
						"rightEndpoint" : [1475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9925,256],
						"rightEndpoint" : [4975,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2925,128],
						"rightEndpoint" : [1475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [9925,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2925,128],
						"rightEndpoint" : [1475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9925,256],
						"rightEndpoint" : [4975,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [1475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [2925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2925,128],
						"rightEndpoint" : [1475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [2925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [2925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [9975,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [2925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9975,256],
						"rightEndpoint" : [625,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [2925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [9975,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [5825,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [9975,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5825,256],
						"rightEndpoint" : [2925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [9975,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [5825,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [9975,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5825,256],
						"rightEndpoint" : [2925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [9975,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [2925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9975,256],
						"rightEndpoint" : [625,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2925,128],
						"rightEndpoint" : [1475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1475,64],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [625,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [1225,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [625,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [1225,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [1225,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [1225,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [1225,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [2425,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [1225,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [2425,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [1225,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [1525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [1225,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,64],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [1225,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [1525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [1225,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,64],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [1225,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,64],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [4875,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,64],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4875,128],
						"rightEndpoint" : [1225,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,64],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [4875,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,64],
						"rightEndpoint" : [3075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [4875,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3075,128],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [4875,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,64],
						"rightEndpoint" : [3075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [4875,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3075,128],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [4875,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3075,128],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [9725,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3075,128],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9725,256],
						"rightEndpoint" : [4875,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3075,128],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [9725,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3075,128],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9725,256],
						"rightEndpoint" : [4875,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3075,128],
						"rightEndpoint" : [6175,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9725,256],
						"rightEndpoint" : [4875,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [6175,256],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9725,256],
						"rightEndpoint" : [4875,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3075,128],
						"rightEndpoint" : [6175,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9725,256],
						"rightEndpoint" : [4875,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [6175,256],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9725,256],
						"rightEndpoint" : [4875,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [6175,256],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9725,256],
						"rightEndpoint" : [19475,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [6175,256],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [19475,512],
						"rightEndpoint" : [4875,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [6175,256],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9725,256],
						"rightEndpoint" : [19475,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [6175,256],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [19475,512],
						"rightEndpoint" : [4875,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,64],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4875,128],
						"rightEndpoint" : [1225,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,64],
						"rightEndpoint" : [3075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4875,128],
						"rightEndpoint" : [1225,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3075,128],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4875,128],
						"rightEndpoint" : [1225,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,64],
						"rightEndpoint" : [3075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4875,128],
						"rightEndpoint" : [1225,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,64],
						"rightEndpoint" : [3075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4875,128],
						"rightEndpoint" : [9775,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,64],
						"rightEndpoint" : [3075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9775,256],
						"rightEndpoint" : [1225,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,64],
						"rightEndpoint" : [3075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4875,128],
						"rightEndpoint" : [9775,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,64],
						"rightEndpoint" : [3075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9775,256],
						"rightEndpoint" : [1225,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3075,128],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4875,128],
						"rightEndpoint" : [1225,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [1225,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [2425,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [1225,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [2425,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [2425,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1575,64],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [2425,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [2425,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [4825,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4825,128],
						"rightEndpoint" : [2425,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [4825,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4825,128],
						"rightEndpoint" : [2425,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [3125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4825,128],
						"rightEndpoint" : [2425,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3125,128],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4825,128],
						"rightEndpoint" : [2425,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [3125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4825,128],
						"rightEndpoint" : [2425,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3125,128],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4825,128],
						"rightEndpoint" : [2425,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3125,128],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4825,128],
						"rightEndpoint" : [9675,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3125,128],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9675,256],
						"rightEndpoint" : [2425,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3125,128],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4825,128],
						"rightEndpoint" : [9675,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3125,128],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9675,256],
						"rightEndpoint" : [2425,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3125,128],
						"rightEndpoint" : [6275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9675,256],
						"rightEndpoint" : [2425,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [6275,256],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9675,256],
						"rightEndpoint" : [2425,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3125,128],
						"rightEndpoint" : [6275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9675,256],
						"rightEndpoint" : [2425,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3125,128],
						"rightEndpoint" : [6275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9675,256],
						"rightEndpoint" : [19375,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3125,128],
						"rightEndpoint" : [6275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [19375,512],
						"rightEndpoint" : [2425,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3125,128],
						"rightEndpoint" : [6275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9675,256],
						"rightEndpoint" : [19375,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3125,128],
						"rightEndpoint" : [6275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [19375,512],
						"rightEndpoint" : [2425,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [6275,256],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9675,256],
						"rightEndpoint" : [2425,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1575,64],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [2425,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1575,64],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [4825,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1575,64],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4825,128],
						"rightEndpoint" : [2425,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1575,64],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [4825,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1575,64],
						"rightEndpoint" : [3175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [4825,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3175,128],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [4825,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1575,64],
						"rightEndpoint" : [3175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [4825,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3175,128],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [4825,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3175,128],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [9625,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3175,128],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9625,256],
						"rightEndpoint" : [4825,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3175,128],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [9625,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3175,128],
						"rightEndpoint" : [6375,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [9625,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [6375,256],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [9625,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3175,128],
						"rightEndpoint" : [6375,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [9625,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [6375,256],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [9625,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3175,128],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9625,256],
						"rightEndpoint" : [4825,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1575,64],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4825,128],
						"rightEndpoint" : [2425,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [1225,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [1225,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1575,64],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [1225,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [1225,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [4875,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4875,128],
						"rightEndpoint" : [1225,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [4875,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [3125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [4875,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3125,128],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [4875,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [3125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [4875,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [3125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [9725,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [3125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9725,256],
						"rightEndpoint" : [4875,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [3125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [9725,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [6225,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [9725,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [6225,256],
						"rightEndpoint" : [3125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [9725,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [6225,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [9725,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [6225,256],
						"rightEndpoint" : [3125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [9725,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [3125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9725,256],
						"rightEndpoint" : [4875,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3125,128],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [4875,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [1575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4875,128],
						"rightEndpoint" : [1225,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1575,64],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2425,64],
						"rightEndpoint" : [1225,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [625,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [625,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [625,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [625,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [1525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,64],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [1525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [1525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [4925,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [1525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [2475,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [1525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [4925,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [3025,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [4925,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3025,128],
						"rightEndpoint" : [1525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [4925,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [3025,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [4925,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [3025,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [9825,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [3025,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9825,256],
						"rightEndpoint" : [4925,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [3025,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [9825,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [3025,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9825,256],
						"rightEndpoint" : [4925,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [6025,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9825,256],
						"rightEndpoint" : [4925,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [6025,256],
						"rightEndpoint" : [3025,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9825,256],
						"rightEndpoint" : [4925,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [6025,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9825,256],
						"rightEndpoint" : [4925,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [6025,256],
						"rightEndpoint" : [3025,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9825,256],
						"rightEndpoint" : [4925,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3025,128],
						"rightEndpoint" : [1525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [4925,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3025,128],
						"rightEndpoint" : [1525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [9825,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3025,128],
						"rightEndpoint" : [1525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9825,256],
						"rightEndpoint" : [4925,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3025,128],
						"rightEndpoint" : [1525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [9825,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3025,128],
						"rightEndpoint" : [6075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [9825,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [6075,256],
						"rightEndpoint" : [1525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [9825,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3025,128],
						"rightEndpoint" : [6075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [9825,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [6075,256],
						"rightEndpoint" : [1525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [9825,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3025,128],
						"rightEndpoint" : [1525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [9825,256],
						"rightEndpoint" : [4925,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [1525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [2475,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1525,64],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [775,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [775,32],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [625,16]
					}
				]
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
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [325,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [325,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [325,8]
					}
				]
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
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [325,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
				]
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
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
				]
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
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [2525,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [1275,32]
					}
				]
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
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [2525,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [2525,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [2525,64]
					}
				]
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
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [2525,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [5025,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5025,128],
						"rightEndpoint" : [2525,64]
					}
				]
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
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [5025,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [2825,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [5025,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,128],
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [5025,128]
					}
				]
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
						"rightEndpoint" : [2825,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [5025,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,128],
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [5025,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,128],
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [10025,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,128],
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10025,256],
						"rightEndpoint" : [5025,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,128],
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [10025,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,128],
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10025,256],
						"rightEndpoint" : [5025,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,128],
						"rightEndpoint" : [5675,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10025,256],
						"rightEndpoint" : [5025,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,256],
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10025,256],
						"rightEndpoint" : [5025,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,128],
						"rightEndpoint" : [5675,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10025,256],
						"rightEndpoint" : [5025,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,256],
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10025,256],
						"rightEndpoint" : [5025,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,256],
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10025,256],
						"rightEndpoint" : [20075,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,256],
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [20075,512],
						"rightEndpoint" : [5025,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,256],
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10025,256],
						"rightEndpoint" : [20075,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,256],
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [20075,512],
						"rightEndpoint" : [5025,128]
					}
				]
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
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5025,128],
						"rightEndpoint" : [2525,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [2825,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5025,128],
						"rightEndpoint" : [2525,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,128],
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5025,128],
						"rightEndpoint" : [2525,64]
					}
				]
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
						"rightEndpoint" : [2825,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5025,128],
						"rightEndpoint" : [2525,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [2825,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5025,128],
						"rightEndpoint" : [10075,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [2825,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10075,256],
						"rightEndpoint" : [2525,64]
					}
				]
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
						"rightEndpoint" : [2825,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5025,128],
						"rightEndpoint" : [10075,256]
					}
				]
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
						"rightEndpoint" : [2825,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10075,256],
						"rightEndpoint" : [2525,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,128],
						"rightEndpoint" : [1425,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5025,128],
						"rightEndpoint" : [2525,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [2525,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [5025,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5025,128],
						"rightEndpoint" : [2525,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [5025,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [2875,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [5025,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,128],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [5025,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [2875,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [5025,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [2875,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [10025,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [2875,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10025,256],
						"rightEndpoint" : [5025,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [2875,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [10025,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [5725,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [10025,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,256],
						"rightEndpoint" : [2875,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [10025,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [5725,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [10025,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,256],
						"rightEndpoint" : [2875,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [10025,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [2875,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10025,256],
						"rightEndpoint" : [5025,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,128],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [5025,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5025,128],
						"rightEndpoint" : [2525,64]
					}
				]
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
						"rightEndpoint" : [725,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [1275,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
				]
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
						"rightEndpoint" : [375,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [325,8]
					}
				]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
					}
				]
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
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
				]
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
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
					}
				]
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
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [2625,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
				]
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
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [2625,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [1225,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [2625,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,64],
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [2625,64]
					}
				]
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
						"rightEndpoint" : [1225,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [2625,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [1225,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [5225,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [1225,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5225,128],
						"rightEndpoint" : [2625,64]
					}
				]
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
						"rightEndpoint" : [1225,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [5225,128]
					}
				]
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
						"rightEndpoint" : [1225,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5225,128],
						"rightEndpoint" : [2625,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [2425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5225,128],
						"rightEndpoint" : [2625,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2425,128],
						"rightEndpoint" : [1225,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5225,128],
						"rightEndpoint" : [2625,64]
					}
				]
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
						"rightEndpoint" : [2425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5225,128],
						"rightEndpoint" : [2625,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [2425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5225,128],
						"rightEndpoint" : [10475,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [2425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10475,256],
						"rightEndpoint" : [2625,64]
					}
				]
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
						"rightEndpoint" : [2425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5225,128],
						"rightEndpoint" : [10475,256]
					}
				]
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
						"rightEndpoint" : [2425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10475,256],
						"rightEndpoint" : [2625,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2425,128],
						"rightEndpoint" : [1225,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5225,128],
						"rightEndpoint" : [2625,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,64],
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [2625,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,64],
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [5225,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,64],
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5225,128],
						"rightEndpoint" : [2625,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,64],
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [5225,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,64],
						"rightEndpoint" : [2475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [5225,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,128],
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [5225,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,64],
						"rightEndpoint" : [2475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [5225,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,64],
						"rightEndpoint" : [2475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [10425,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,64],
						"rightEndpoint" : [2475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10425,256],
						"rightEndpoint" : [5225,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,64],
						"rightEndpoint" : [2475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [10425,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,64],
						"rightEndpoint" : [2475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10425,256],
						"rightEndpoint" : [5225,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,64],
						"rightEndpoint" : [4925,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10425,256],
						"rightEndpoint" : [5225,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4925,256],
						"rightEndpoint" : [2475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10425,256],
						"rightEndpoint" : [5225,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,64],
						"rightEndpoint" : [4925,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10425,256],
						"rightEndpoint" : [5225,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,64],
						"rightEndpoint" : [4925,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10425,256],
						"rightEndpoint" : [20875,512]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,64],
						"rightEndpoint" : [4925,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [20875,512],
						"rightEndpoint" : [5225,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,64],
						"rightEndpoint" : [4925,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10425,256],
						"rightEndpoint" : [20875,512]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,64],
						"rightEndpoint" : [4925,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [20875,512],
						"rightEndpoint" : [5225,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4925,256],
						"rightEndpoint" : [2475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10425,256],
						"rightEndpoint" : [5225,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,128],
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [5225,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,128],
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [10425,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,128],
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10425,256],
						"rightEndpoint" : [5225,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,128],
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [10425,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,128],
						"rightEndpoint" : [4975,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [10425,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,256],
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [10425,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,128],
						"rightEndpoint" : [4975,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [10425,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,256],
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [10425,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,128],
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10425,256],
						"rightEndpoint" : [5225,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,64],
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5225,128],
						"rightEndpoint" : [2625,64]
					}
				]
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
						"rightEndpoint" : [625,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
					}
				]
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
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
					}
				]
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
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
				]
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
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
				]
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
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
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
						"leftEndpoint" : [0,1],
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
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,1]
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
						"leftEndpoint" : [25,1],
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
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,1]
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
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,1]
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
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,1]
					}
				]
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
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,1]
					}
				]
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
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,1]
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
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
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
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
				]
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
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
				]
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
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
				]
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
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
				]
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
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
				]
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
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [5575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [5575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [725,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [1425,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,128],
						"rightEndpoint" : [725,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [1425,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [11175,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [1425,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11175,256],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [1425,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [11175,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [1425,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11175,256],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [1425,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,128],
						"rightEndpoint" : [725,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [11175,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,128],
						"rightEndpoint" : [725,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11175,256],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,128],
						"rightEndpoint" : [725,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [11175,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,128],
						"rightEndpoint" : [725,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11175,256],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,128],
						"rightEndpoint" : [725,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [5575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
						"rightEndpoint" : [375,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
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
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [5575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
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
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,64],
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
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [1575,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1575,128],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [1575,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1575,128],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [11075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1575,128],
						"rightEndpoint" : [25,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11075,256],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1575,128],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [11075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1575,128],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11075,256],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1575,128],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11075,256],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1575,128],
						"rightEndpoint" : [3175,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11075,256],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [3175,256],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11075,256],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1575,128],
						"rightEndpoint" : [3175,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11075,256],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [3175,256],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [5575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [5575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [5575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [1525,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [5575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [5575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [1525,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [11125,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [1525,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11125,256],
						"rightEndpoint" : [5575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [1525,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [11125,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [1525,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11125,256],
						"rightEndpoint" : [5575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [1525,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [5575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [11125,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11125,256],
						"rightEndpoint" : [5575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [11125,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11125,256],
						"rightEndpoint" : [5575,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1525,128],
						"rightEndpoint" : [775,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5575,128],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,32],
						"rightEndpoint" : [775,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [775,64],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,8],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,16],
						"rightEndpoint" : [375,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [25,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [25,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,64],
						"rightEndpoint" : [25,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,64],
						"rightEndpoint" : [25,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,64],
						"rightEndpoint" : [25,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,64],
						"rightEndpoint" : [25,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,64],
						"rightEndpoint" : [25,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,64],
						"rightEndpoint" : [25,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [25,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [25,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [25,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [25,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [25,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [75,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [25,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [75,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [75,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [75,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [75,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,128],
						"rightEndpoint" : [75,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [125,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [125,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,128],
						"rightEndpoint" : [75,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,128],
						"rightEndpoint" : [75,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,128],
						"rightEndpoint" : [75,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,128],
						"rightEndpoint" : [75,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,128],
						"rightEndpoint" : [75,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [75,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [25,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [25,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [25,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [25,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [175,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,128],
						"rightEndpoint" : [25,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [175,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [175,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [175,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [175,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [175,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,128],
						"rightEndpoint" : [25,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,128],
						"rightEndpoint" : [25,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,128],
						"rightEndpoint" : [25,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,128],
						"rightEndpoint" : [25,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,128],
						"rightEndpoint" : [25,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,64],
						"rightEndpoint" : [25,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [25,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [25,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [25,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [25,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [25,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [75,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [25,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [75,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [75,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [75,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [75,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [75,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [125,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [75,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [125,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [125,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [125,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [125,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [225,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,128],
						"rightEndpoint" : [125,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [225,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [225,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [225,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [225,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [225,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,128],
						"rightEndpoint" : [125,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,128],
						"rightEndpoint" : [125,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,128],
						"rightEndpoint" : [125,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,128],
						"rightEndpoint" : [125,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,128],
						"rightEndpoint" : [125,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,16],
						"rightEndpoint" : [125,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [75,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [75,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [75,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [75,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [275,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [75,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [275,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [275,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
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
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
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
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
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
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [75,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [75,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [75,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [75,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,128],
						"rightEndpoint" : [75,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [75,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [25,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [25,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [25,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [25,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [25,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [175,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,64],
						"rightEndpoint" : [25,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [175,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [175,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [175,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [175,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [325,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,128],
						"rightEndpoint" : [175,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [325,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [325,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [325,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [325,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [325,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,128],
						"rightEndpoint" : [175,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,128],
						"rightEndpoint" : [175,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,128],
						"rightEndpoint" : [175,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [11525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,128],
						"rightEndpoint" : [175,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11525,256],
						"rightEndpoint" : [5775,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,128],
						"rightEndpoint" : [175,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5775,128],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,32],
						"rightEndpoint" : [175,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,64],
						"rightEndpoint" : [25,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,16],
						"rightEndpoint" : [375,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,16],
						"rightEndpoint" : [375,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [75,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [25,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [75,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [75,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [75,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [75,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [75,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [125,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [75,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [125,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [125,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [125,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [125,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [125,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [75,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [75,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [75,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [75,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [275,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [75,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [275,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [275,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [275,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [275,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [275,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [525,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [275,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [525,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [275,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [11475,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [275,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11475,256],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [275,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [11475,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [275,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11475,256],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,128],
						"rightEndpoint" : [275,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [75,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [75,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [75,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [75,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [75,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [575,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,128],
						"rightEndpoint" : [75,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [575,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [11475,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [575,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11475,256],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [575,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [11475,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [575,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11475,256],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,64],
						"rightEndpoint" : [575,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,128],
						"rightEndpoint" : [75,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [11475,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,128],
						"rightEndpoint" : [75,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11475,256],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,128],
						"rightEndpoint" : [75,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [11475,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,128],
						"rightEndpoint" : [75,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11475,256],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,128],
						"rightEndpoint" : [75,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,32],
						"rightEndpoint" : [75,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [25,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [25,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [25,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [25,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [25,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [175,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [25,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [175,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [175,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [175,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [175,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [325,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,64],
						"rightEndpoint" : [175,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [325,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [325,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [325,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [325,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [325,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [625,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,128],
						"rightEndpoint" : [325,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [625,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [11475,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [625,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11475,256],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [625,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [11475,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [625,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11475,256],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [625,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,128],
						"rightEndpoint" : [325,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [11475,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,128],
						"rightEndpoint" : [325,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11475,256],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,128],
						"rightEndpoint" : [325,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [11475,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,128],
						"rightEndpoint" : [325,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11475,256],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,128],
						"rightEndpoint" : [325,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,64],
						"rightEndpoint" : [175,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,64],
						"rightEndpoint" : [175,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,64],
						"rightEndpoint" : [175,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,64],
						"rightEndpoint" : [175,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,64],
						"rightEndpoint" : [175,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,16],
						"rightEndpoint" : [175,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [25,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [25,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [25,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [25,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [375,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [25,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [375,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [375,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [375,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [375,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [375,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [25,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [25,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [25,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [25,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [775,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [775,128],
						"rightEndpoint" : [25,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [775,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [11425,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [775,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11425,256],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [775,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [11425,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [775,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11425,256],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [775,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [775,128],
						"rightEndpoint" : [25,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [11425,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [775,128],
						"rightEndpoint" : [25,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11425,256],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [775,128],
						"rightEndpoint" : [25,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [11425,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [775,128],
						"rightEndpoint" : [25,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11425,256],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [775,128],
						"rightEndpoint" : [25,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,64],
						"rightEndpoint" : [25,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,32],
						"rightEndpoint" : [25,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,16],
						"rightEndpoint" : [375,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,8],
						"rightEndpoint" : [25,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,8],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,8],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,16],
						"rightEndpoint" : [375,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [225,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [125,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [225,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [125,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [125,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [125,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [125,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [125,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [475,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [125,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [475,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [475,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [475,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [475,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [475,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [925,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [925,128],
						"rightEndpoint" : [475,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [925,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [925,128],
						"rightEndpoint" : [475,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [11375,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [925,128],
						"rightEndpoint" : [475,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11375,256],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [925,128],
						"rightEndpoint" : [475,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [11375,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [925,128],
						"rightEndpoint" : [475,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11375,256],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [925,128],
						"rightEndpoint" : [475,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [125,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [125,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [125,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [125,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [125,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [975,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [975,128],
						"rightEndpoint" : [125,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [975,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [11375,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [975,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11375,256],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [975,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [11375,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [975,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11375,256],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,64],
						"rightEndpoint" : [975,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [975,128],
						"rightEndpoint" : [125,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [11375,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [975,128],
						"rightEndpoint" : [125,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11375,256],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [975,128],
						"rightEndpoint" : [125,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [11375,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [975,128],
						"rightEndpoint" : [125,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11375,256],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [975,128],
						"rightEndpoint" : [125,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [125,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [225,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [125,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [225,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [225,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [225,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [225,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [425,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,64],
						"rightEndpoint" : [225,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [425,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [425,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [425,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [425,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [825,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [825,128],
						"rightEndpoint" : [425,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [825,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [11425,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [825,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11425,256],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [825,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [11425,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [825,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11425,256],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [825,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [825,128],
						"rightEndpoint" : [425,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [11425,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [825,128],
						"rightEndpoint" : [425,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11425,256],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [825,128],
						"rightEndpoint" : [425,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [11425,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [825,128],
						"rightEndpoint" : [425,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11425,256],
						"rightEndpoint" : [5725,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [825,128],
						"rightEndpoint" : [425,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5725,128],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [425,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [2875,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,64],
						"rightEndpoint" : [225,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2875,64],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [225,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,32],
						"rightEndpoint" : [125,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [275,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [75,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [275,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [275,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [275,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [275,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [275,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [525,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,64],
						"rightEndpoint" : [275,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [525,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [525,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [525,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [525,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [525,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,64],
						"rightEndpoint" : [275,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,64],
						"rightEndpoint" : [275,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,64],
						"rightEndpoint" : [275,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,64],
						"rightEndpoint" : [275,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,64],
						"rightEndpoint" : [1075,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1075,128],
						"rightEndpoint" : [275,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,64],
						"rightEndpoint" : [1075,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1075,128],
						"rightEndpoint" : [275,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [11325,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1075,128],
						"rightEndpoint" : [275,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11325,256],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1075,128],
						"rightEndpoint" : [275,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [11325,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1075,128],
						"rightEndpoint" : [275,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11325,256],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1075,128],
						"rightEndpoint" : [275,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,64],
						"rightEndpoint" : [275,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [75,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [75,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [75,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [75,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [575,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,64],
						"rightEndpoint" : [75,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [575,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,64],
						"rightEndpoint" : [75,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,64],
						"rightEndpoint" : [75,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,64],
						"rightEndpoint" : [75,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,64],
						"rightEndpoint" : [75,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,64],
						"rightEndpoint" : [75,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,64],
						"rightEndpoint" : [1175,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1175,128],
						"rightEndpoint" : [75,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,64],
						"rightEndpoint" : [1175,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1175,128],
						"rightEndpoint" : [75,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [11275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1175,128],
						"rightEndpoint" : [75,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11275,256],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1175,128],
						"rightEndpoint" : [75,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [11275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1175,128],
						"rightEndpoint" : [75,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11275,256],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1175,128],
						"rightEndpoint" : [75,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11275,256],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1175,128],
						"rightEndpoint" : [2375,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11275,256],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2375,256],
						"rightEndpoint" : [75,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11275,256],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1175,128],
						"rightEndpoint" : [2375,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11275,256],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2375,256],
						"rightEndpoint" : [75,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [75,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [575,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,64],
						"rightEndpoint" : [75,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [575,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [575,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [575,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [575,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [1125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,128],
						"rightEndpoint" : [575,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [1125,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [11325,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [1125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11325,256],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [1125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [11325,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [1125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11325,256],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [1125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [5675,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,128],
						"rightEndpoint" : [575,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5675,128],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,32],
						"rightEndpoint" : [575,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,64],
						"rightEndpoint" : [75,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,16],
						"rightEndpoint" : [75,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,16],
						"rightEndpoint" : [375,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [375,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,16],
						"rightEndpoint" : [375,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [625,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,64],
						"rightEndpoint" : [325,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [625,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [625,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [625,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [625,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [625,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [1225,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,128],
						"rightEndpoint" : [625,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [1225,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [11275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [1225,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11275,256],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [1225,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [11275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [1225,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11275,256],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [1225,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,128],
						"rightEndpoint" : [625,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [11275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,128],
						"rightEndpoint" : [625,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11275,256],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,128],
						"rightEndpoint" : [625,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [11275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,128],
						"rightEndpoint" : [625,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11275,256],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1225,128],
						"rightEndpoint" : [625,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,64],
						"rightEndpoint" : [325,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,64],
						"rightEndpoint" : [325,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,64],
						"rightEndpoint" : [325,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,64],
						"rightEndpoint" : [325,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,64],
						"rightEndpoint" : [325,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [325,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [675,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,64],
						"rightEndpoint" : [175,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [675,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [675,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [675,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [675,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [1325,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,128],
						"rightEndpoint" : [675,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [1325,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [11225,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [1325,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11225,256],
						"rightEndpoint" : [5625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [1325,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [11225,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [1325,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11225,256],
						"rightEndpoint" : [5625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [1325,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [5625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,128],
						"rightEndpoint" : [675,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [11225,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,128],
						"rightEndpoint" : [675,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11225,256],
						"rightEndpoint" : [5625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,128],
						"rightEndpoint" : [675,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [11225,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,128],
						"rightEndpoint" : [675,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11225,256],
						"rightEndpoint" : [5625,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,128],
						"rightEndpoint" : [675,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5625,128],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [675,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [2825,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,64],
						"rightEndpoint" : [175,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2825,64],
						"rightEndpoint" : [1425,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,32],
						"rightEndpoint" : [175,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1425,32],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [175,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [725,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,16],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [725,16],
						"rightEndpoint" : [375,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [375,8],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
				]
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
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,4],
						"rightEndpoint" : [50,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
				]
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
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
				]
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
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
				]
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
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [875,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [225,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [875,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [225,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [225,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [225,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [225,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [225,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [1775,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1775,128],
						"rightEndpoint" : [225,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [1775,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [10975,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [1775,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10975,256],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [1775,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [10975,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [1775,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10975,256],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [1775,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10975,256],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [3525,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10975,256],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [3525,256],
						"rightEndpoint" : [1775,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10975,256],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [3525,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10975,256],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [3525,256],
						"rightEndpoint" : [1775,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1775,128],
						"rightEndpoint" : [225,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [10975,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1775,128],
						"rightEndpoint" : [225,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10975,256],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1775,128],
						"rightEndpoint" : [225,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [10975,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1775,128],
						"rightEndpoint" : [225,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10975,256],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1775,128],
						"rightEndpoint" : [225,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [225,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [425,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [825,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [1625,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1625,128],
						"rightEndpoint" : [825,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [1625,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [11075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [1625,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11075,256],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [1625,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [11075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [1625,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11075,256],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [1625,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1625,128],
						"rightEndpoint" : [825,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [11075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1625,128],
						"rightEndpoint" : [825,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11075,256],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1625,128],
						"rightEndpoint" : [825,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [11075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1625,128],
						"rightEndpoint" : [825,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [11075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1625,128],
						"rightEndpoint" : [3275,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [11075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [3275,256],
						"rightEndpoint" : [825,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [11075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1625,128],
						"rightEndpoint" : [3275,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [11075,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [3275,256],
						"rightEndpoint" : [825,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11075,256],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1625,128],
						"rightEndpoint" : [825,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [425,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [425,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [425,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [425,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [1675,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1675,128],
						"rightEndpoint" : [425,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [1675,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1675,128],
						"rightEndpoint" : [425,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [11025,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1675,128],
						"rightEndpoint" : [425,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11025,256],
						"rightEndpoint" : [5525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1675,128],
						"rightEndpoint" : [425,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [11025,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1675,128],
						"rightEndpoint" : [425,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11025,256],
						"rightEndpoint" : [5525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1675,128],
						"rightEndpoint" : [425,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [825,64],
						"rightEndpoint" : [425,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [425,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [875,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [225,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [875,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [875,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [875,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [1725,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1725,128],
						"rightEndpoint" : [875,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [1725,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [11025,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [1725,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11025,256],
						"rightEndpoint" : [5525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [1725,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [11025,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [1725,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [11025,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [3425,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [11025,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [3425,256],
						"rightEndpoint" : [1725,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [11025,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [3425,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [11025,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [3425,256],
						"rightEndpoint" : [1725,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11025,256],
						"rightEndpoint" : [5525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [1725,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [5525,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1725,128],
						"rightEndpoint" : [875,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5525,128],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [875,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [2775,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [875,64],
						"rightEndpoint" : [225,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2775,64],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [425,32],
						"rightEndpoint" : [225,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [475,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [125,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [475,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [475,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [475,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [475,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [475,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [925,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [475,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [925,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [925,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [925,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [925,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [1825,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1825,128],
						"rightEndpoint" : [925,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [1825,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1825,128],
						"rightEndpoint" : [925,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [10925,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1825,128],
						"rightEndpoint" : [925,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10925,256],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1825,128],
						"rightEndpoint" : [925,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [10925,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1825,128],
						"rightEndpoint" : [925,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10925,256],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1825,128],
						"rightEndpoint" : [925,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10925,256],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1825,128],
						"rightEndpoint" : [3675,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10925,256],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [3675,256],
						"rightEndpoint" : [925,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10925,256],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1825,128],
						"rightEndpoint" : [3675,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10925,256],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [3675,256],
						"rightEndpoint" : [925,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [925,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [475,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [475,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [475,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [475,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [1875,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1875,128],
						"rightEndpoint" : [475,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [1875,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [10925,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [1875,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10925,256],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [1875,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [10925,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [1875,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10925,256],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [1875,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [5475,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1875,128],
						"rightEndpoint" : [475,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5475,128],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [925,64],
						"rightEndpoint" : [475,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [125,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [125,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [125,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [125,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [975,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [975,64],
						"rightEndpoint" : [125,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [975,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [975,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [975,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [975,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [975,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [1925,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1925,128],
						"rightEndpoint" : [975,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [1925,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [10875,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [1925,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10875,256],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [1925,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [10875,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [1925,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10875,256],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [1925,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10875,256],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [3825,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10875,256],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [3825,256],
						"rightEndpoint" : [1925,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10875,256],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [3825,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10875,256],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [3825,256],
						"rightEndpoint" : [1925,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1925,128],
						"rightEndpoint" : [975,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [10875,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1925,128],
						"rightEndpoint" : [975,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10875,256],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1925,128],
						"rightEndpoint" : [975,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [10875,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1925,128],
						"rightEndpoint" : [975,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [10875,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1925,128],
						"rightEndpoint" : [3875,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [10875,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [3875,256],
						"rightEndpoint" : [975,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [10875,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1925,128],
						"rightEndpoint" : [3875,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [10875,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [3875,256],
						"rightEndpoint" : [975,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10875,256],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1925,128],
						"rightEndpoint" : [975,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [975,64],
						"rightEndpoint" : [125,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [975,64],
						"rightEndpoint" : [125,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [975,64],
						"rightEndpoint" : [125,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [975,64],
						"rightEndpoint" : [125,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [975,64],
						"rightEndpoint" : [1975,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1975,128],
						"rightEndpoint" : [125,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [975,64],
						"rightEndpoint" : [1975,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1975,128],
						"rightEndpoint" : [125,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [10825,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1975,128],
						"rightEndpoint" : [125,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10825,256],
						"rightEndpoint" : [5425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1975,128],
						"rightEndpoint" : [125,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [10825,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1975,128],
						"rightEndpoint" : [125,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10825,256],
						"rightEndpoint" : [5425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1975,128],
						"rightEndpoint" : [125,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [975,64],
						"rightEndpoint" : [125,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [475,32],
						"rightEndpoint" : [125,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [225,16],
						"rightEndpoint" : [125,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [75,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [525,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [275,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [525,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [525,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [525,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [525,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [525,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [1025,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [525,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [1025,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [5375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [1025,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [1025,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [5375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [1025,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [1025,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [2025,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2025,128],
						"rightEndpoint" : [1025,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [2025,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2025,128],
						"rightEndpoint" : [1025,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [10775,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2025,128],
						"rightEndpoint" : [1025,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10775,256],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2025,128],
						"rightEndpoint" : [1025,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [10775,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2025,128],
						"rightEndpoint" : [1025,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10775,256],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2025,128],
						"rightEndpoint" : [1025,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10775,256],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2025,128],
						"rightEndpoint" : [4075,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10775,256],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4075,256],
						"rightEndpoint" : [1025,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10775,256],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2025,128],
						"rightEndpoint" : [4075,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10775,256],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4075,256],
						"rightEndpoint" : [1025,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10775,256],
						"rightEndpoint" : [21575,512]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4075,256],
						"rightEndpoint" : [1025,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [21575,512],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4075,256],
						"rightEndpoint" : [1025,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10775,256],
						"rightEndpoint" : [21575,512]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4075,256],
						"rightEndpoint" : [1025,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [21575,512],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4075,256],
						"rightEndpoint" : [1025,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [525,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [5375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [525,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [525,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [5375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [525,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [525,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [2075,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2075,128],
						"rightEndpoint" : [525,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [2075,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [10775,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [2075,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10775,256],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [2075,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [10775,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [2075,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10775,256],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [2075,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2075,128],
						"rightEndpoint" : [525,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [275,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [275,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [275,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [275,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [1075,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1075,64],
						"rightEndpoint" : [275,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [1075,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1075,64],
						"rightEndpoint" : [275,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1075,64],
						"rightEndpoint" : [275,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1075,64],
						"rightEndpoint" : [275,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1075,64],
						"rightEndpoint" : [275,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1075,64],
						"rightEndpoint" : [275,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1075,64],
						"rightEndpoint" : [2175,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2175,128],
						"rightEndpoint" : [275,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1075,64],
						"rightEndpoint" : [2175,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2175,128],
						"rightEndpoint" : [275,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [10675,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2175,128],
						"rightEndpoint" : [275,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10675,256],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2175,128],
						"rightEndpoint" : [275,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [10675,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2175,128],
						"rightEndpoint" : [275,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10675,256],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2175,128],
						"rightEndpoint" : [275,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [275,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [1075,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1075,64],
						"rightEndpoint" : [275,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [1075,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [5375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [1075,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [1075,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [5375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [1075,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [5375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [2125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [5375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2125,128],
						"rightEndpoint" : [1075,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [5375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [2125,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [10725,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [2125,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10725,256],
						"rightEndpoint" : [5375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [2125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [10725,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [2125,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10725,256],
						"rightEndpoint" : [5375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [2125,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10725,256],
						"rightEndpoint" : [5375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [4225,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10725,256],
						"rightEndpoint" : [5375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4225,256],
						"rightEndpoint" : [2125,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10725,256],
						"rightEndpoint" : [5375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [4225,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10725,256],
						"rightEndpoint" : [5375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4225,256],
						"rightEndpoint" : [2125,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [5375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2125,128],
						"rightEndpoint" : [1075,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [10725,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2125,128],
						"rightEndpoint" : [1075,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10725,256],
						"rightEndpoint" : [5375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2125,128],
						"rightEndpoint" : [1075,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [10725,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2125,128],
						"rightEndpoint" : [1075,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [10725,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2125,128],
						"rightEndpoint" : [4275,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [10725,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4275,256],
						"rightEndpoint" : [1075,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [10725,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2125,128],
						"rightEndpoint" : [4275,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [10725,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4275,256],
						"rightEndpoint" : [1075,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10725,256],
						"rightEndpoint" : [5375,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2125,128],
						"rightEndpoint" : [1075,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5375,128],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [1075,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1075,64],
						"rightEndpoint" : [275,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [75,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [75,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [75,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [75,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [75,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [2625,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [2625,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [1125,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [1125,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [5275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [5275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [2275,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2275,128],
						"rightEndpoint" : [575,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [2275,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2275,128],
						"rightEndpoint" : [575,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [10575,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2275,128],
						"rightEndpoint" : [575,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10575,256],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2275,128],
						"rightEndpoint" : [575,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [10575,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2275,128],
						"rightEndpoint" : [575,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10575,256],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2275,128],
						"rightEndpoint" : [575,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10575,256],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2275,128],
						"rightEndpoint" : [4575,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10575,256],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4575,256],
						"rightEndpoint" : [575,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10575,256],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2275,128],
						"rightEndpoint" : [4575,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10575,256],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4575,256],
						"rightEndpoint" : [575,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [75,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [2625,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [75,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [75,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [2625,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [75,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [75,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [1175,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [75,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [1175,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [5275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [1175,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [1175,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [5275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [1175,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [1175,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [2325,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2325,128],
						"rightEndpoint" : [1175,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [2325,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [10575,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [2325,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10575,256],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [2325,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [10575,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [2325,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [10575,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [4625,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [10575,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4625,256],
						"rightEndpoint" : [2325,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [10575,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [4625,256]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [10575,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4625,256],
						"rightEndpoint" : [2325,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [21125,512]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4625,256],
						"rightEndpoint" : [2325,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [21125,512],
						"rightEndpoint" : [10575,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4625,256],
						"rightEndpoint" : [2325,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [21125,512]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4625,256],
						"rightEndpoint" : [2325,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [21125,512],
						"rightEndpoint" : [10575,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4625,256],
						"rightEndpoint" : [2325,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10575,256],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [2325,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2325,128],
						"rightEndpoint" : [1175,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [75,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [5275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [75,4]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [75,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [5275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [75,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [5275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [2375,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [5275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2375,128],
						"rightEndpoint" : [75,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [5275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [2375,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [10525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [2375,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10525,256],
						"rightEndpoint" : [5275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [2375,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [10525,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [2375,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10525,256],
						"rightEndpoint" : [5275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [2375,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2625,64],
						"rightEndpoint" : [5275,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2375,128],
						"rightEndpoint" : [75,4]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5275,128],
						"rightEndpoint" : [1325,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1175,64],
						"rightEndpoint" : [75,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [75,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [75,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [1125,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [1125,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [1125,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [1125,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [1125,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [2225,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2225,128],
						"rightEndpoint" : [1125,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [2225,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2225,128],
						"rightEndpoint" : [1125,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [10625,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2225,128],
						"rightEndpoint" : [1125,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10625,256],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2225,128],
						"rightEndpoint" : [1125,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [10625,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2225,128],
						"rightEndpoint" : [1125,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10625,256],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2225,128],
						"rightEndpoint" : [1125,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10625,256],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2225,128],
						"rightEndpoint" : [4475,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10625,256],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4475,256],
						"rightEndpoint" : [1125,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10625,256],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2225,128],
						"rightEndpoint" : [4475,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10625,256],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4475,256],
						"rightEndpoint" : [1125,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [1125,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [2275,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2275,128],
						"rightEndpoint" : [575,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [2275,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [10625,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [2275,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10625,256],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [2275,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [10625,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [2275,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [10625,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [4525,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [10625,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4525,256],
						"rightEndpoint" : [2275,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [10625,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [4525,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [10625,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4525,256],
						"rightEndpoint" : [2275,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10625,256],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [2275,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [5325,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2275,128],
						"rightEndpoint" : [575,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5325,128],
						"rightEndpoint" : [2675,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1125,64],
						"rightEndpoint" : [575,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2675,64],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [575,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1325,32],
						"rightEndpoint" : [675,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [575,32],
						"rightEndpoint" : [75,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [75,4]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [525,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [275,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [525,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [525,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [525,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [525,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [1025,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [525,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [1025,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [1025,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [1025,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [1025,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [2025,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2025,128],
						"rightEndpoint" : [1025,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [2025,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [10825,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [2025,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10825,256],
						"rightEndpoint" : [5425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [2025,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [10825,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [2025,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [10825,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [4025,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [10825,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4025,256],
						"rightEndpoint" : [2025,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [10825,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [4025,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [10825,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4025,256],
						"rightEndpoint" : [2025,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10825,256],
						"rightEndpoint" : [5425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [2025,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [5425,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2025,128],
						"rightEndpoint" : [1025,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5425,128],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [1025,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [2725,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1025,64],
						"rightEndpoint" : [525,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2725,64],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [525,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [1375,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [525,32],
						"rightEndpoint" : [275,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1375,32],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [275,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [675,16],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275,16],
						"rightEndpoint" : [75,4]
					}
				]
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
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325,8],
						"rightEndpoint" : [175,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
				]
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
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
				]
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
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
				]
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
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [325,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [175,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [325,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [325,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [325,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [325,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [325,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [625,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [325,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [625,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [325,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [325,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [325,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [325,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [325,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [1275,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [325,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [1275,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [5175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [1275,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [1275,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [5175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [1275,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [1275,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [2525,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,128],
						"rightEndpoint" : [1275,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [2525,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [10375,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [2525,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10375,256],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [2525,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [10375,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [2525,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10375,256],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [2525,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10375,256],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [5025,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10375,256],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5025,256],
						"rightEndpoint" : [2525,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10375,256],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [625,32],
						"rightEndpoint" : [5025,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10375,256],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5025,256],
						"rightEndpoint" : [2525,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,128],
						"rightEndpoint" : [1275,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [10375,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,128],
						"rightEndpoint" : [1275,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10375,256],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,128],
						"rightEndpoint" : [1275,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [10375,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,128],
						"rightEndpoint" : [1275,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [10375,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,128],
						"rightEndpoint" : [5075,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [10375,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5075,256],
						"rightEndpoint" : [1275,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [10375,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,128],
						"rightEndpoint" : [5075,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [10375,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5075,256],
						"rightEndpoint" : [1275,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10375,256],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2525,128],
						"rightEndpoint" : [1275,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [325,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [5175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [325,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [325,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [5175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [325,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [5175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [2575,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [5175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,128],
						"rightEndpoint" : [325,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [5175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [2575,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [10325,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [2575,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10325,256],
						"rightEndpoint" : [5175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [2575,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [10325,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [2575,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10325,256],
						"rightEndpoint" : [5175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [2575,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10325,256],
						"rightEndpoint" : [5175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [5125,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10325,256],
						"rightEndpoint" : [5175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5125,256],
						"rightEndpoint" : [2575,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10325,256],
						"rightEndpoint" : [5175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [5125,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10325,256],
						"rightEndpoint" : [5175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5125,256],
						"rightEndpoint" : [2575,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [5175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,128],
						"rightEndpoint" : [325,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [10325,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,128],
						"rightEndpoint" : [325,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10325,256],
						"rightEndpoint" : [5175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,128],
						"rightEndpoint" : [325,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [10325,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,128],
						"rightEndpoint" : [325,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [10325,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,128],
						"rightEndpoint" : [5175,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [10325,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5175,256],
						"rightEndpoint" : [325,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [10325,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,128],
						"rightEndpoint" : [5175,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [10325,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5175,256],
						"rightEndpoint" : [325,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10325,256],
						"rightEndpoint" : [5175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2575,128],
						"rightEndpoint" : [325,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5175,128],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1275,64],
						"rightEndpoint" : [325,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [175,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [175,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [175,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [175,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [675,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [175,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [675,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [175,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [2525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [175,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [175,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [2525,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [175,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [175,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [1375,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [175,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [1375,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [5075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [1375,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5075,128],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [1375,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [5075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [1375,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5075,128],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [1375,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5075,128],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [2725,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5075,128],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,128],
						"rightEndpoint" : [1375,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5075,128],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [2725,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5075,128],
						"rightEndpoint" : [10175,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [2725,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10175,256],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [2725,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5075,128],
						"rightEndpoint" : [10175,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [2725,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10175,256],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [2725,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10175,256],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [5425,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10175,256],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5425,256],
						"rightEndpoint" : [2725,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10175,256],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [5425,256]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10175,256],
						"rightEndpoint" : [20375,512]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [5425,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [20375,512],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [5425,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10175,256],
						"rightEndpoint" : [20375,512]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [5425,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [20375,512],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [5425,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10175,256],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5425,256],
						"rightEndpoint" : [2725,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5075,128],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2725,128],
						"rightEndpoint" : [1375,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [175,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [5075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [175,8]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5075,128],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [175,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [5075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [175,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [5075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [2775,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [5075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2775,128],
						"rightEndpoint" : [175,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [5075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [2775,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [10125,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [2775,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10125,256],
						"rightEndpoint" : [5075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [2775,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [10125,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [2775,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10125,256],
						"rightEndpoint" : [5075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [2775,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2525,64],
						"rightEndpoint" : [5075,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2775,128],
						"rightEndpoint" : [175,8]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5075,128],
						"rightEndpoint" : [1275,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1375,64],
						"rightEndpoint" : [175,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [175,8]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [675,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [175,8]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [675,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [675,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [675,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [675,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [1325,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [675,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [1325,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [5125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [1325,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [1325,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [5125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [1325,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [1325,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [2625,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,128],
						"rightEndpoint" : [1325,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [2625,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [10275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [2625,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10275,256],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [2625,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [10275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [2625,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10275,256],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [2625,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10275,256],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [5225,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10275,256],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5225,256],
						"rightEndpoint" : [2625,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10275,256],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [5225,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10275,256],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5225,256],
						"rightEndpoint" : [2625,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,128],
						"rightEndpoint" : [1325,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [10275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,128],
						"rightEndpoint" : [1325,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10275,256],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,128],
						"rightEndpoint" : [1325,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [10275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,128],
						"rightEndpoint" : [1325,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [10275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,128],
						"rightEndpoint" : [5275,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [10275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,256],
						"rightEndpoint" : [1325,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [10275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,128],
						"rightEndpoint" : [5275,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [10275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5275,256],
						"rightEndpoint" : [1325,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10275,256],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2625,128],
						"rightEndpoint" : [1325,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [675,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [5125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [675,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [675,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [5125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [675,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [5125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [2675,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [5125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,128],
						"rightEndpoint" : [675,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [5125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [2675,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [10225,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [2675,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10225,256],
						"rightEndpoint" : [5125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [2675,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [10225,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [2675,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10225,256],
						"rightEndpoint" : [5125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [2675,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10225,256],
						"rightEndpoint" : [5125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [5325,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10225,256],
						"rightEndpoint" : [5125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5325,256],
						"rightEndpoint" : [2675,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10225,256],
						"rightEndpoint" : [5125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [5325,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10225,256],
						"rightEndpoint" : [5125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5325,256],
						"rightEndpoint" : [2675,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [5125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,128],
						"rightEndpoint" : [675,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [10225,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,128],
						"rightEndpoint" : [675,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10225,256],
						"rightEndpoint" : [5125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,128],
						"rightEndpoint" : [675,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [10225,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,128],
						"rightEndpoint" : [675,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [10225,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,128],
						"rightEndpoint" : [5375,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [10225,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5375,256],
						"rightEndpoint" : [675,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [10225,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,128],
						"rightEndpoint" : [5375,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [10225,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5375,256],
						"rightEndpoint" : [675,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [10225,256],
						"rightEndpoint" : [5125,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2675,128],
						"rightEndpoint" : [675,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5125,128],
						"rightEndpoint" : [2575,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1325,64],
						"rightEndpoint" : [675,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2575,64],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [675,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1275,32],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [675,32],
						"rightEndpoint" : [175,8]
					}
				]
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
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [625,16],
						"rightEndpoint" : [325,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
				]
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
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [375,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [375,16],
						"rightEndpoint" : [25,1]
					}
				]
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
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [375,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [1225,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [375,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [375,16]
					}
				]
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
						"rightEndpoint" : [1225,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [375,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [375,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [725,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [375,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [725,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [725,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [725,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [725,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [725,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [1425,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [725,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [1425,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [725,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [4975,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [725,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [725,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [4975,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [725,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [725,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [2875,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,128],
						"rightEndpoint" : [725,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1425,64],
						"rightEndpoint" : [2875,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,128],
						"rightEndpoint" : [725,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [9975,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,128],
						"rightEndpoint" : [725,32]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [9975,256],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,128],
						"rightEndpoint" : [725,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [9975,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,128],
						"rightEndpoint" : [725,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [9975,256],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,128],
						"rightEndpoint" : [725,32]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [9975,256],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,128],
						"rightEndpoint" : [5775,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [9975,256],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5775,256],
						"rightEndpoint" : [725,32]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [9975,256],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2875,128],
						"rightEndpoint" : [5775,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [9975,256],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5775,256],
						"rightEndpoint" : [725,32]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [375,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [375,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [375,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [375,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [1475,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1475,64],
						"rightEndpoint" : [375,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [1475,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [2475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1475,64],
						"rightEndpoint" : [375,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [4925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1475,64],
						"rightEndpoint" : [375,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [2475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1475,64],
						"rightEndpoint" : [375,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1225,32],
						"rightEndpoint" : [4925,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1475,64],
						"rightEndpoint" : [375,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [2475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1475,64],
						"rightEndpoint" : [375,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [2475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1475,64],
						"rightEndpoint" : [2975,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [2475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2975,128],
						"rightEndpoint" : [375,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [2475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1475,64],
						"rightEndpoint" : [2975,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [2475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2975,128],
						"rightEndpoint" : [375,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [9875,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2975,128],
						"rightEndpoint" : [375,16]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [9875,256],
						"rightEndpoint" : [2475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2975,128],
						"rightEndpoint" : [375,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [9875,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2975,128],
						"rightEndpoint" : [375,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [9875,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2975,128],
						"rightEndpoint" : [5975,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [9875,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5975,256],
						"rightEndpoint" : [375,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [9875,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2975,128],
						"rightEndpoint" : [5975,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4925,128],
						"rightEndpoint" : [9875,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5975,256],
						"rightEndpoint" : [375,16]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [9875,256],
						"rightEndpoint" : [2475,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2975,128],
						"rightEndpoint" : [375,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [375,16]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [1475,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1475,64],
						"rightEndpoint" : [375,16]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [1475,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [4975,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [1475,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [1475,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [4975,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [1475,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [4975,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [2925,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [4975,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2925,128],
						"rightEndpoint" : [1475,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [4975,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [2925,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [4975,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2925,128],
						"rightEndpoint" : [1475,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [9925,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2925,128],
						"rightEndpoint" : [1475,64]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [9925,256],
						"rightEndpoint" : [4975,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2925,128],
						"rightEndpoint" : [1475,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [9925,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2925,128],
						"rightEndpoint" : [1475,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [9925,256],
						"rightEndpoint" : [4975,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2925,128],
						"rightEndpoint" : [1475,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [1475,64]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [2925,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2925,128],
						"rightEndpoint" : [1475,64]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [2925,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [9975,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [2925,128]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [9975,256],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [2925,128]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [9975,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [2925,128]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [9975,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [5825,256]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [9975,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5825,256],
						"rightEndpoint" : [2925,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [9975,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [5825,256]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [9975,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5825,256],
						"rightEndpoint" : [2925,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [9975,256],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [725,32],
						"rightEndpoint" : [2925,128]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4975,128],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [2925,128],
						"rightEndpoint" : [1475,64]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2475,64],
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1475,64],
						"rightEndpoint" : [375,16]
					}
				]
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
						"rightEndpoint" : [625,16]
					}
					,
					{
						"variableName" : "y",
					}
				],
			"boxL":