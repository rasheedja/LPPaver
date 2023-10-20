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
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [7549747,4194304]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [7549747,4194304]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [7549747,4194304]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [7549747,4194304]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [7549747,4194304]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [7549747,4194304]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [131,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [131,256],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [131,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [131,256],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [131,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [131,256],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [131,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [131,256],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [137,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [137,256],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [137,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [137,256],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [137,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [137,256],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [137,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [137,256],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [143,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [143,256],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [143,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [143,256],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [143,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [143,256],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [143,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [143,256],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [149,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [149,256],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [149,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [149,256],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [149,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [149,256],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [149,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [149,256],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [155,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,256],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [155,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,256],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [161,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [161,256],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [161,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [161,256],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [161,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [161,256],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [161,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [161,256],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [167,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [167,256],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [167,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [167,256],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [167,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [167,256],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [167,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [167,256],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [173,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [173,256],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [173,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [173,256],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [173,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [173,256],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [173,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [173,256],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [179,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [179,256],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [179,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [179,256],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
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
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [179,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [179,256],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [179,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [179,256],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [185,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [185,256],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [185,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [185,256],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [185,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [185,256],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [185,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [185,256],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [97,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [97,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [191,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [191,256],
						"rightEndpoint" : [97,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [191,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [191,256],
						"rightEndpoint" : [97,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [197,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [197,256],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [197,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [197,256],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [97,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [97,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [197,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [197,256],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [197,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [197,256],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				]
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
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				]
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
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				]
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
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [117021059,134217728]
					}
				]
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
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				]
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
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				]
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
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				]
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
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [203,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [203,256],
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				]
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
						"rightEndpoint" : [203,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [203,256],
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				]
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
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [203,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [203,256],
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				]
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
						"rightEndpoint" : [203,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [203,256],
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [209,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [209,256],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [209,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [209,256],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				]
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
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				]
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
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				]
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
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				]
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
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [209,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [209,256],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [209,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [209,256],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
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
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [109,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [109,128],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [109,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [109,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [109,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [109,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [215,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [215,256],
						"rightEndpoint" : [109,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [215,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [215,256],
						"rightEndpoint" : [109,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [109,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [109,128],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [109,128],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [109,128],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [109,128],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [109,128],
						"rightEndpoint" : [221,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [221,256],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [109,128],
						"rightEndpoint" : [221,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [221,256],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [109,128],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [109,128],
						"rightEndpoint" : [221,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [221,256],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [109,128],
						"rightEndpoint" : [221,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [221,256],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [227,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [227,256],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [227,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [227,256],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [227,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [227,256],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [227,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [227,256],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [233,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [233,256],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [233,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [233,256],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [233,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [233,256],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [233,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [233,256],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [121,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [121,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [239,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [239,256],
						"rightEndpoint" : [121,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [239,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [239,256],
						"rightEndpoint" : [121,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [245,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,256],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [245,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,256],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [121,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [121,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [245,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,256],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [245,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,256],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [127,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [127,128],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [127,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [127,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [127,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [127,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [251,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [251,256],
						"rightEndpoint" : [127,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [251,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [251,256],
						"rightEndpoint" : [127,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [127,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [251,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [251,256],
						"rightEndpoint" : [127,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [251,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [251,256],
						"rightEndpoint" : [127,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [127,128],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [127,128],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [127,128],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [127,128],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [127,128],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [127,128],
						"rightEndpoint" : [257,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [257,256],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [127,128],
						"rightEndpoint" : [257,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [257,256],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [263,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [263,256],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [263,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [263,256],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [263,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [263,256],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [263,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [263,256],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [269,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [269,256],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [269,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [269,256],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [269,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [269,256],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [269,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [269,256],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [139,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [139,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,256],
						"rightEndpoint" : [139,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,256],
						"rightEndpoint" : [139,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [281,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [281,256],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [281,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [281,256],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [139,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [139,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [281,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [281,256],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [281,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [281,256],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [145,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,128],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [145,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [145,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [145,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [145,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [287,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [287,256],
						"rightEndpoint" : [145,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [287,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [287,256],
						"rightEndpoint" : [145,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [145,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [287,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [287,256],
						"rightEndpoint" : [145,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [287,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [287,256],
						"rightEndpoint" : [145,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,128],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,128],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,128],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,128],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,128],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,128],
						"rightEndpoint" : [293,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [293,256],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,128],
						"rightEndpoint" : [293,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [293,256],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [299,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [299,256],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [299,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [299,256],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [299,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [299,256],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [299,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [299,256],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [305,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [305,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [305,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [305,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [157,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [157,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [311,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [311,256],
						"rightEndpoint" : [157,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [311,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [311,256],
						"rightEndpoint" : [157,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [317,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [317,256],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [317,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [317,256],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [157,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [157,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [317,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [317,256],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [317,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [317,256],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [7549747,4194304]
					}
				]
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
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [7549747,4194304]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [7549747,4194304]
					}
				]
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
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				]
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
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				]
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
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				]
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
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				]
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
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [37329301,33554432]
					}
				]
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
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				]
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
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				]
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
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				]
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
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				]
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
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				]
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
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [163,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [163,128],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				]
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
						"rightEndpoint" : [163,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [163,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [163,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
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
						"rightEndpoint" : [163,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [323,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [323,256],
						"rightEndpoint" : [163,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				]
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
						"rightEndpoint" : [323,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [323,256],
						"rightEndpoint" : [163,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				]
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
						"rightEndpoint" : [163,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [163,128],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [163,128],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [163,128],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [163,128],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [163,128],
						"rightEndpoint" : [329,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [329,256],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [163,128],
						"rightEndpoint" : [329,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [329,256],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [163,128],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [163,128],
						"rightEndpoint" : [329,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [329,256],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [163,128],
						"rightEndpoint" : [329,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [329,256],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
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
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [169,128],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [335,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [335,256],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [335,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [335,256],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [169,128],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [169,128],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [335,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [335,256],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [335,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [335,256],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [169,128],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [169,128],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [169,128],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [169,128],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [169,128],
						"rightEndpoint" : [341,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [341,256],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [169,128],
						"rightEndpoint" : [341,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [341,256],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [169,128],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
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
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,128],
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [347,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [347,256],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [347,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [347,256],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [347,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [347,256],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [347,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [347,256],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
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
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,128],
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,128],
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
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
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
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
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,128],
						"rightEndpoint" : [353,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [353,256],
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
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
						"rightEndpoint" : [353,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [353,256],
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [359,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [359,256],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [359,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [359,256],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [359,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [359,256],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [359,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [359,256],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [365,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [365,256],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [365,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [365,256],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [365,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [365,256],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [365,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [365,256],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [187,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [187,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [187,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [187,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [187,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [187,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [371,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [371,256],
						"rightEndpoint" : [187,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [371,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [371,256],
						"rightEndpoint" : [187,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [377,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [377,256],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [377,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [377,256],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [187,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [187,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [377,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [377,256],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [377,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [377,256],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [193,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [193,128],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [193,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [193,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [193,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [193,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [383,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [383,256],
						"rightEndpoint" : [193,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [383,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [383,256],
						"rightEndpoint" : [193,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [193,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [193,128],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [193,128],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [193,128],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [193,128],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [193,128],
						"rightEndpoint" : [389,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [389,256],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [193,128],
						"rightEndpoint" : [389,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [389,256],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [193,128],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [193,128],
						"rightEndpoint" : [389,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [389,256],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [193,128],
						"rightEndpoint" : [389,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [389,256],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [199,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [199,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [395,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [395,256],
						"rightEndpoint" : [199,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [395,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [395,256],
						"rightEndpoint" : [199,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [401,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [401,256],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [401,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [401,256],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				]
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
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [7549747,4194304]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [7549747,4194304]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [7549747,4194304]
					}
				]
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
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [7549747,4194304]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25585253,16777216],
						"rightEndpoint" : [7549747,4194304]
					}
				]
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
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				]
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
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [25585253,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [199,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [199,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [401,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [401,256],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [401,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [401,256],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [205,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [205,128],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [205,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [205,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [205,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [205,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [407,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [407,256],
						"rightEndpoint" : [205,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [407,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [407,256],
						"rightEndpoint" : [205,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [205,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [205,128],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [205,128],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [205,128],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [205,128],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [205,128],
						"rightEndpoint" : [413,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [413,256],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [205,128],
						"rightEndpoint" : [413,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [413,256],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [205,128],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [25585253,16777216]
					}
				]
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
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25585253,16777216],
						"rightEndpoint" : [7549747,4194304]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [7549747,4194304]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25585253,16777216],
						"rightEndpoint" : [7549747,4194304]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [25585253,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [107,64],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [211,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [211,128],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [211,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [211,128],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [107,64],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [107,64],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [211,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [211,128],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [211,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [211,128],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [211,128],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [349385493,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [211,128],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [211,128],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [349385493,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [211,128],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [107,64],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [107,64],
						"rightEndpoint" : [217,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [217,128],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [107,64],
						"rightEndpoint" : [217,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [107,64],
						"rightEndpoint" : [217,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [349385493,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [107,64],
						"rightEndpoint" : [217,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [107,64],
						"rightEndpoint" : [217,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [349385493,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [107,64],
						"rightEndpoint" : [217,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [217,128],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [217,128],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [349385493,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [217,128],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [217,128],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [349385493,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [217,128],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [349385493,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [349385493,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [223,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [223,128],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [223,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [223,128],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [223,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [223,128],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [223,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [223,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [358612963,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [223,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [223,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [358612963,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [223,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [223,128],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [223,128],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [358612963,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [223,128],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [223,128],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [358612963,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [223,128],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [229,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [229,128],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [229,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [229,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [358612963,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [229,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [229,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [358612963,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [229,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [229,128],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [229,128],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [358612963,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [229,128],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [229,128],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [358612963,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [229,128],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [25585253,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [25585253,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [119,64],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [358612963,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [358612963,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [235,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [235,128],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [235,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [235,128],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [119,64],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [119,64],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [235,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [235,128],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [235,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [235,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [367840433,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [235,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [235,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [367840433,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [235,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [235,128],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [235,128],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [367840433,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [235,128],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [235,128],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [367840433,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [235,128],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [119,64],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [119,64],
						"rightEndpoint" : [241,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [241,128],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [119,64],
						"rightEndpoint" : [241,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [119,64],
						"rightEndpoint" : [241,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [367840433,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [119,64],
						"rightEndpoint" : [241,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [119,64],
						"rightEndpoint" : [241,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [367840433,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [119,64],
						"rightEndpoint" : [241,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [241,128],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [241,128],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [367840433,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [241,128],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [241,128],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [367840433,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [241,128],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [367840433,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [367840433,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [247,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [247,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [247,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [247,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
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
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [25585253,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [25585253,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [97727277,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [97727277,67108864],
						"rightEndpoint" : [25585253,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [97727277,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [97727277,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [97727277,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [97727277,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [190840819,134217728],
						"rightEndpoint" : [97727277,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [247,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [247,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [247,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [247,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [377067903,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [247,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [377067903,268435456],
						"rightEndpoint" : [190840819,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [247,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [377067903,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [247,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [377067903,268435456],
						"rightEndpoint" : [190840819,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [247,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [247,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [377067903,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [247,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [377067903,268435456],
						"rightEndpoint" : [190840819,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [247,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [377067903,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [247,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [377067903,268435456],
						"rightEndpoint" : [190840819,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [190840819,134217728],
						"rightEndpoint" : [97727277,67108864]
					}
				]
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
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [97727277,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [190840819,134217728],
						"rightEndpoint" : [97727277,67108864]
					}
				]
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
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [253,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [253,128],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				]
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
						"rightEndpoint" : [253,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [253,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [377067903,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [253,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [377067903,268435456],
						"rightEndpoint" : [190840819,134217728]
					}
				]
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
						"rightEndpoint" : [253,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [377067903,268435456]
					}
				]
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
						"rightEndpoint" : [253,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [377067903,268435456],
						"rightEndpoint" : [190840819,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [253,128],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [253,128],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [377067903,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [253,128],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [377067903,268435456],
						"rightEndpoint" : [190840819,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [253,128],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [377067903,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [253,128],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [377067903,268435456],
						"rightEndpoint" : [190840819,134217728]
					}
				]
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
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [190840819,134217728],
						"rightEndpoint" : [97727277,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [97727277,67108864],
						"rightEndpoint" : [25585253,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25585253,16777216],
						"rightEndpoint" : [7549747,4194304]
					}
				]
		}

	],
	[
		{
			"boxStep": "Initial",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [7549747,4194304]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [7549747,4194304]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [7549747,4194304]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [7549747,4194304]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [7549747,4194304]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [7549747,4194304]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [131,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [131,256],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [131,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [131,256],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [131,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [131,256],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [131,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [131,256],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [137,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [137,256],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [137,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [137,256],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [137,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [137,256],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [137,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [137,256],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [143,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [143,256],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [143,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [143,256],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [143,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [143,256],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [143,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [143,256],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [149,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [149,256],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [149,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [149,256],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [149,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [149,256],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [149,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [149,256],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [155,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,256],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [155,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,256],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [161,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [161,256],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [161,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [161,256],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [161,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [161,256],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [161,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [161,256],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [167,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [167,256],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [167,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [167,256],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [167,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [167,256],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [167,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [167,256],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [173,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [173,256],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [173,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [173,256],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [173,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [173,256],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [173,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [173,256],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [220200913,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [179,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [179,256],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [179,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [179,256],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [220200913,268435456],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
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
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [179,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [179,256],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [179,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [179,256],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [91,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [185,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [185,256],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [185,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [185,256],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [185,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [185,256],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [91,128],
						"rightEndpoint" : [185,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [185,256],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [47,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [229428383,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [97,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [97,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [191,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [191,256],
						"rightEndpoint" : [97,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [191,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [191,256],
						"rightEndpoint" : [97,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [197,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [197,256],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [197,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [197,256],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [229428383,268435456],
						"rightEndpoint" : [117021059,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [97,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [47,64],
						"rightEndpoint" : [97,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [197,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [197,256],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [197,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [197,256],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [97,128],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [25,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				]
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
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				]
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
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [117021059,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				]
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
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [117021059,134217728]
					}
				]
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
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				]
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
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				]
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
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				]
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
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [203,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [203,256],
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				]
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
						"rightEndpoint" : [203,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [203,256],
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				]
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
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [203,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [203,256],
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				]
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
						"rightEndpoint" : [203,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [203,256],
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [238655853,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [209,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [209,256],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [209,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [209,256],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [238655853,268435456],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [117021059,134217728],
						"rightEndpoint" : [60817397,67108864]
					}
				]
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
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				]
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
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				]
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
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,32],
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				]
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
						"rightEndpoint" : [103,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [209,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [209,256],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [209,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [209,256],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [103,128],
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
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
						"rightEndpoint" : [53,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [109,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [109,128],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [109,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [109,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [109,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [109,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [215,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [215,256],
						"rightEndpoint" : [109,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [215,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [215,256],
						"rightEndpoint" : [109,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [109,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [109,128],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [109,128],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [109,128],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [109,128],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [109,128],
						"rightEndpoint" : [221,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [221,256],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [109,128],
						"rightEndpoint" : [221,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [221,256],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [109,128],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [109,128],
						"rightEndpoint" : [221,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [221,256],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [109,128],
						"rightEndpoint" : [221,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [221,256],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [53,64],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [60817397,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [60817397,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [247883323,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [227,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [227,256],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [227,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [227,256],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [247883323,268435456],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [126248529,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [227,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [227,256],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [227,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [227,256],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [115,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [233,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [233,256],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [233,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [233,256],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [233,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [233,256],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [115,128],
						"rightEndpoint" : [233,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [233,256],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [126248529,134217728],
						"rightEndpoint" : [257110793,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [121,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [121,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [239,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [239,256],
						"rightEndpoint" : [121,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [239,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [239,256],
						"rightEndpoint" : [121,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [245,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,256],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [245,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,256],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [257110793,268435456],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [60817397,67108864],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [59,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [121,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [121,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [245,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,256],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [245,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [245,256],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [121,128],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [59,64],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [31,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [127,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [127,128],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [127,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [127,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [127,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [127,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [251,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [251,256],
						"rightEndpoint" : [127,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [251,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [251,256],
						"rightEndpoint" : [127,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [127,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [251,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [251,256],
						"rightEndpoint" : [127,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [251,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [251,256],
						"rightEndpoint" : [127,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [127,128],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [127,128],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [127,128],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [127,128],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [127,128],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [127,128],
						"rightEndpoint" : [257,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [257,256],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [127,128],
						"rightEndpoint" : [257,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [257,256],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [65,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [266338263,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [263,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [263,256],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [263,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [263,256],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [266338263,268435456],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [263,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [263,256],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [263,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [263,256],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [65,64],
						"rightEndpoint" : [133,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [269,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [269,256],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [269,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [269,256],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [269,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [269,256],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [133,128],
						"rightEndpoint" : [269,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [269,256],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [31,32],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [17,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [135475999,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [275565733,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [139,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [139,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,256],
						"rightEndpoint" : [139,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [275,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [275,256],
						"rightEndpoint" : [139,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [281,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [281,256],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [281,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [281,256],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [275565733,268435456],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [135475999,134217728],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [70044867,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [139,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [139,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [281,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [281,256],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [281,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [281,256],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [139,128],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [71,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [145,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,128],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [145,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [145,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [145,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [145,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [287,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [287,256],
						"rightEndpoint" : [145,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [287,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [287,256],
						"rightEndpoint" : [145,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [145,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [287,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [287,256],
						"rightEndpoint" : [145,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [287,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [287,256],
						"rightEndpoint" : [145,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,128],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,128],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,128],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,128],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,128],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,128],
						"rightEndpoint" : [293,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [293,256],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [145,128],
						"rightEndpoint" : [293,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [293,256],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [71,64],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [284793203,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [299,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [299,256],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [299,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [299,256],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [284793203,268435456],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [70044867,67108864],
						"rightEndpoint" : [144703469,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [299,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [299,256],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [299,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [299,256],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [151,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [305,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [305,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [305,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [151,128],
						"rightEndpoint" : [305,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [305,256],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [144703469,134217728],
						"rightEndpoint" : [294020673,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [157,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [157,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [311,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [311,256],
						"rightEndpoint" : [157,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [311,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [311,256],
						"rightEndpoint" : [157,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [317,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [317,256],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [317,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [317,256],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [294020673,268435456],
						"rightEndpoint" : [37329301,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [17,16],
						"rightEndpoint" : [37,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [77,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [157,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [157,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [317,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [317,256],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [317,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [317,256],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [157,128],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [77,64],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [37,32],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [7549747,4194304]
					}
				]
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
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [7549747,4194304]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [7549747,4194304]
					}
				]
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
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				]
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
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				]
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
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				]
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
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [37329301,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				]
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
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [37329301,33554432]
					}
				]
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
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				]
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
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				]
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
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				]
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
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				]
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
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				]
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
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [163,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [163,128],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				]
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
						"rightEndpoint" : [163,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [163,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [163,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
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
						"rightEndpoint" : [163,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [323,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [323,256],
						"rightEndpoint" : [163,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				]
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
						"rightEndpoint" : [323,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [323,256],
						"rightEndpoint" : [163,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				]
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
						"rightEndpoint" : [163,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [163,128],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [163,128],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [163,128],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [163,128],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [163,128],
						"rightEndpoint" : [329,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [329,256],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [163,128],
						"rightEndpoint" : [329,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [329,256],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [163,128],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [163,128],
						"rightEndpoint" : [329,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [329,256],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [163,128],
						"rightEndpoint" : [329,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [329,256],
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
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
						"rightEndpoint" : [83,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [303248143,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [169,128],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [335,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [335,256],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [335,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [335,256],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [169,128],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [303248143,268435456],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [169,128],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [335,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [335,256],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [335,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [335,256],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [83,64],
						"rightEndpoint" : [169,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [169,128],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [169,128],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [169,128],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [169,128],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [169,128],
						"rightEndpoint" : [341,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [341,256],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [169,128],
						"rightEndpoint" : [341,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [341,256],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [169,128],
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
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
						"rightEndpoint" : [43,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [153930939,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,128],
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [347,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [347,256],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [347,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [347,256],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [347,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [347,256],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [347,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [347,256],
						"rightEndpoint" : [175,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
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
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,128],
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,128],
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
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
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
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
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,128],
						"rightEndpoint" : [353,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [353,256],
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
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
						"rightEndpoint" : [353,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [353,256],
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [153930939,134217728],
						"rightEndpoint" : [312475613,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [359,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [359,256],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [359,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [359,256],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [312475613,268435456],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [43,32],
						"rightEndpoint" : [89,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [359,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [359,256],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [359,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [359,256],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [181,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [365,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [365,256],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [365,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [365,256],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [365,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [365,256],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [181,128],
						"rightEndpoint" : [365,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [365,256],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [89,64],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [37329301,33554432],
						"rightEndpoint" : [79272337,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [187,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [187,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [187,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [187,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [187,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [187,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [371,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [371,256],
						"rightEndpoint" : [187,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [371,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [371,256],
						"rightEndpoint" : [187,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [321703083,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [377,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [377,256],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [377,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [377,256],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [321703083,268435456],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [187,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [187,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [377,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [377,256],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [377,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [377,256],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [187,128],
						"rightEndpoint" : [95,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [193,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [193,128],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [193,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [193,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [193,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [193,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [383,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [383,256],
						"rightEndpoint" : [193,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [383,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [383,256],
						"rightEndpoint" : [193,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [95,64],
						"rightEndpoint" : [193,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [193,128],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [193,128],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [193,128],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [193,128],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [193,128],
						"rightEndpoint" : [389,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [389,256],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [193,128],
						"rightEndpoint" : [389,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [389,256],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [193,128],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [193,128],
						"rightEndpoint" : [389,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [389,256],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [193,128],
						"rightEndpoint" : [389,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [389,256],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [79272337,67108864],
						"rightEndpoint" : [163158409,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [330930553,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [199,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [199,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [395,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [395,256],
						"rightEndpoint" : [199,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [395,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [395,256],
						"rightEndpoint" : [199,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [401,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [401,256],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [401,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [401,256],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [330930553,268435456],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [163158409,134217728],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				]
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
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [7549747,4194304]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [7549747,4194304]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [7549747,4194304]
					}
				]
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
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [7549747,4194304]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25585253,16777216],
						"rightEndpoint" : [7549747,4194304]
					}
				]
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
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				]
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
						"rightEndpoint" : [23,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [25585253,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [49,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [199,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [199,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [401,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [401,256],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [401,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [401,256],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [199,128],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [101,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [205,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [205,128],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [205,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [205,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [205,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [205,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [407,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [407,256],
						"rightEndpoint" : [205,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [407,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [407,256],
						"rightEndpoint" : [205,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [205,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [205,128],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [205,128],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [205,128],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [205,128],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [205,128],
						"rightEndpoint" : [413,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [413,256],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [205,128],
						"rightEndpoint" : [413,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [413,256],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [205,128],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [101,64],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [49,32],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [23,16],
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [25585253,16777216]
					}
				]
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
						"rightEndpoint" : [13,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25585253,16777216],
						"rightEndpoint" : [7549747,4194304]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [7549747,4194304]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25585253,16777216],
						"rightEndpoint" : [7549747,4194304]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [25585253,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [107,64],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [340158023,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [211,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [211,128],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [211,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [211,128],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [211,128],
						"rightEndpoint" : [425,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,256],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [211,128],
						"rightEndpoint" : [425,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [425,256],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [340158023,268435456],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [107,64],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [107,64],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [211,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [211,128],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [211,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [211,128],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [211,128],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [349385493,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [211,128],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [211,128],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [349385493,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [211,128],
						"rightEndpoint" : [107,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [107,64],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [107,64],
						"rightEndpoint" : [217,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [217,128],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [107,64],
						"rightEndpoint" : [217,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [107,64],
						"rightEndpoint" : [217,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [349385493,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [107,64],
						"rightEndpoint" : [217,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [107,64],
						"rightEndpoint" : [217,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [349385493,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [107,64],
						"rightEndpoint" : [217,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [217,128],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [217,128],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [349385493,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [217,128],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [217,128],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [349385493,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [217,128],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [55,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [172385879,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [349385493,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [349385493,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [223,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [223,128],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [223,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [223,128],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [349385493,268435456],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [172385879,134217728],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [223,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [223,128],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [223,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [223,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [358612963,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [223,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [223,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [358612963,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [223,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [223,128],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [223,128],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [358612963,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [223,128],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [223,128],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [358612963,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [223,128],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [55,32],
						"rightEndpoint" : [113,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [229,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [229,128],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [229,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [229,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [358612963,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [229,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [229,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [358612963,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [229,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [229,128],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [229,128],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [358612963,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [229,128],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [229,128],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [358612963,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [229,128],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [113,64],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [29,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [25585253,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [25585253,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [88499807,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [119,64],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [358612963,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [358612963,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [235,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [235,128],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [235,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [235,128],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [358612963,268435456],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [119,64],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [119,64],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [235,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [235,128],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [235,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [235,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [367840433,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [235,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [235,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [367840433,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [235,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [235,128],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [235,128],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [367840433,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [235,128],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [235,128],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [367840433,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [235,128],
						"rightEndpoint" : [119,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [119,64],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [119,64],
						"rightEndpoint" : [241,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [241,128],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [119,64],
						"rightEndpoint" : [241,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [119,64],
						"rightEndpoint" : [241,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [367840433,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [119,64],
						"rightEndpoint" : [241,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [119,64],
						"rightEndpoint" : [241,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [367840433,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [119,64],
						"rightEndpoint" : [241,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [241,128],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [241,128],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [367840433,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [241,128],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [241,128],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [367840433,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [241,128],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [88499807,67108864],
						"rightEndpoint" : [181613349,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [367840433,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [367840433,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [247,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [247,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [247,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [247,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [367840433,268435456],
						"rightEndpoint" : [46556771,33554432]
					}
				]
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
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [181613349,134217728],
						"rightEndpoint" : [46556771,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [25585253,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [29,16],
						"rightEndpoint" : [61,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [25585253,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [25585253,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [97727277,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [97727277,67108864],
						"rightEndpoint" : [25585253,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [97727277,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [97727277,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [97727277,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [97727277,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [190840819,134217728],
						"rightEndpoint" : [97727277,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [247,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [247,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [247,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [247,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [377067903,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [247,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [377067903,268435456],
						"rightEndpoint" : [190840819,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [247,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [377067903,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [247,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [377067903,268435456],
						"rightEndpoint" : [190840819,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [247,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [247,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [377067903,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [247,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [377067903,268435456],
						"rightEndpoint" : [190840819,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [247,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [377067903,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [247,128],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [377067903,268435456],
						"rightEndpoint" : [190840819,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [125,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [190840819,134217728],
						"rightEndpoint" : [97727277,67108864]
					}
				]
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
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [97727277,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [190840819,134217728],
						"rightEndpoint" : [97727277,67108864]
					}
				]
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
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [253,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [253,128],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				]
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
						"rightEndpoint" : [253,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [253,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [377067903,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,64],
						"rightEndpoint" : [253,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [377067903,268435456],
						"rightEndpoint" : [190840819,134217728]
					}
				]
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
						"rightEndpoint" : [253,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [377067903,268435456]
					}
				]
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
						"rightEndpoint" : [253,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [377067903,268435456],
						"rightEndpoint" : [190840819,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [253,128],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [190840819,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [253,128],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [377067903,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [253,128],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [377067903,268435456],
						"rightEndpoint" : [190840819,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [253,128],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [46556771,33554432],
						"rightEndpoint" : [377067903,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [253,128],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [377067903,268435456],
						"rightEndpoint" : [190840819,134217728]
					}
				]
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
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [190840819,134217728],
						"rightEndpoint" : [97727277,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [61,32],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [97727277,67108864],
						"rightEndpoint" : [25585253,16777216]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [13,8],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25585253,16777216],
						"rightEndpoint" : [7549747,4194304]
					}
				]
		}

	],
	[
		{
			"boxStep": "Initial",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [7549747,4194304]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [7549747,4194304]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [7549747,4194304]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5,4],
						"rightEndpoint" : [2,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [7549747,4194304]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [7549747,4194304]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [10485759,8388608],
						"rightEndpoint" : [7549747,4194304]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [7,8],
						"rightEndpoint" : [5,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [10485759,8388608]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [16357783,16777216],
						"rightEndpoint" : [10485759,8388608]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11,16],
						"rightEndpoint" : [7,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [16357783,16777216]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [28101831,33554432],
						"rightEndpoint" : [16357783,16777216]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [131,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [131,256],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [131,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [131,256],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [131,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [131,256],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [131,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [131,256],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [192518503,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [137,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [137,256],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [137,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [137,256],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [192518503,268435456],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [67,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [137,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [137,256],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [137,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [137,256],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [67,128],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [98566119,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [143,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [143,256],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [143,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [143,256],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [143,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [143,256],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [143,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [143,256],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [98566119,134217728],
						"rightEndpoint" : [201745973,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [149,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [149,256],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [149,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [149,256],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [201745973,268435456],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1,2],
						"rightEndpoint" : [35,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [73,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [149,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [149,256],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [149,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [149,256],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [73,128],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [35,64],
						"rightEndpoint" : [19,32]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734003,1048576],
						"rightEndpoint" : [51589927,67108864]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [155,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,256],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [155,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [155,256],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [79,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [161,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [161,256],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [161,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [161,256],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [161,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [161,256],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [79,128],
						"rightEndpoint" : [161,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [161,256],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [19,32],
						"rightEndpoint" : [41,64]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [28101831,33554432]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [107793589,134217728],
						"rightEndpoint" : [28101831,33554432]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [51589927,67108864],
						"rightEndpoint" : [210973443,268435456]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [85,128],
						"rightEndpoint" : [11,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [41,64],
						"rightEndpoint" : [167,256]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [167,256],
						"rightEndpoint" : [85,128]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [210973443,268435456],
						"rightEndpoint" : [107793589,134217728]
					}
				]

