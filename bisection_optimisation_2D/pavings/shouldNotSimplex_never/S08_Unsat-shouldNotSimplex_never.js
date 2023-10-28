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
			"boxStep": "Contract",
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
			"boxC":
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
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
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
						"leftEndpoint" : [25,1],
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
						"leftEndpoint" : [25,1],
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
						"leftEndpoint" : [1082872584923252257316267535017,37354159646071898560698253312],
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
						"leftEndpoint" : [1082872584923252257316267535017,37354159646071898560698253312],
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
						"leftEndpoint" : [1082872584923252257316267535017,37354159646071898560698253312],
						"rightEndpoint" : [2950580567226847185351180200617,74708319292143797121396506624]
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
						"leftEndpoint" : [2950580567226847185351180200617,74708319292143797121396506624],
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
						"rightEndpoint" : [25,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1082872584923252257316267535017,37354159646071898560698253312],
						"rightEndpoint" : [2950580567226847185351180200617,74708319292143797121396506624]
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
						"leftEndpoint" : [2950580567226847185351180200617,74708319292143797121396506624],
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
						"leftEndpoint" : [195180895641764535887264179960970172710159739,4791225473298741586942480598114630430097408],
						"rightEndpoint" : [269473835473961366055424840701627792030476097902791465148945,5664590939220541437163059309646171556522600708024257478656]
					}
				]
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
						"leftEndpoint" : [195180895641764535887264179960970172710159739,4791225473298741586942480598114630430097408],
						"rightEndpoint" : [269473835473961366055424840701627792030476097902791465148945,5664590939220541437163059309646171556522600708024257478656]
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
						"leftEndpoint" : [195180895641764535887264179960970172710159739,4791225473298741586942480598114630430097408],
						"rightEndpoint" : [269473835473961366055424840701627792030476097902791465148945,5664590939220541437163059309646171556522600708024257478656]
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
						"leftEndpoint" : [195180895641764535887264179960970172710159739,4791225473298741586942480598114630430097408],
						"rightEndpoint" : [269473835473961366055424840701627792030476097902791465148945,5664590939220541437163059309646171556522600708024257478656]
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
						"leftEndpoint" : [195180895641764535887264179960970172710159739,4791225473298741586942480598114630430097408],
						"rightEndpoint" : [269473835473961366055424840701627792030476097902791465148945,5664590939220541437163059309646171556522600708024257478656]
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
						"leftEndpoint" : [2520895608760731355336637216143160327692070097151014630545797,57235153200521771961872637535799019566877058799582127849472],
						"rightEndpoint" : [601457437478628744629781263725979269586522653,13115339049607619241739804306233312887701504]
					}
				]
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
						"leftEndpoint" : [2520895608760731355336637216143160327692070097151014630545797,57235153200521771961872637535799019566877058799582127849472],
						"rightEndpoint" : [601457437478628744629781263725979269586522653,13115339049607619241739804306233312887701504]
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
						"leftEndpoint" : [2520895608760731355336637216143160327692070097151014630545797,57235153200521771961872637535799019566877058799582127849472],
						"rightEndpoint" : [601457437478628744629781263725979269586522653,13115339049607619241739804306233312887701504]
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
						"leftEndpoint" : [2520895608760731355336637216143160327692070097151014630545797,57235153200521771961872637535799019566877058799582127849472],
						"rightEndpoint" : [601457437478628744629781263725979269586522653,13115339049607619241739804306233312887701504]
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
						"leftEndpoint" : [2520895608760731355336637216143160327692070097151014630545797,57235153200521771961872637535799019566877058799582127849472],
						"rightEndpoint" : [601457437478628744629781263725979269586522653,13115339049607619241739804306233312887701504]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [283137619060210497956605438883557885016277,516723352502959373272797480212825066438656],
						"rightEndpoint" : [15125940793240294316250709474654865010581143,6205930514465363936224967387541685321859072]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5026214782635006659574470378156733635112218282477118596316829,111749126886295944432937560540696133292931379133985698349056],
						"rightEndpoint" : [629226791760147839472562250660975974876203327610029501348367,13968562902145476435490763608627985852527634610481149247488]
					}
				]
		}
		,
		{
			"boxStep": "EvalFalse",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [283137619060210497956605438883557885016277,516723352502959373272797480212825066438656],
						"rightEndpoint" : [15125940793240294316250709474654865010581143,6205930514465363936224967387541685321859072]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [5026214782635006659574470378156733635112218282477118596316829,111749126886295944432937560540696133292931379133985698349056],
						"rightEndpoint" : [629226791760147839472562250660975974876203327610029501348367,13968562902145476435490763608627985852527634610481149247488]
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
						"leftEndpoint" : [2520895608760731355336637216143160327692070097151014630545797,57235153200521771961872637535799019566877058799582127849472],
						"rightEndpoint" : [601457437478628744629781263725979269586522653,13115339049607619241739804306233312887701504]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [11107913347418776504999377983345711970870819,2956460931387082005840814715911932548743168],
						"rightEndpoint" : [1491443938355957478203173973739800050354031,246573904629678155107371514350689912356864]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [793378251147444470559405272989982121773502134203203927536835,17767522320152108125460539755757647249022537776932746952704],
						"rightEndpoint" : [8697745626232094616370071941937180936021050852401,193754623599383806334783633222004411514432258048]
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
						"leftEndpoint" : [11107913347418776504999377983345711970870819,2956460931387082005840814715911932548743168],
						"rightEndpoint" : [1491443938355957478203173973739800050354031,246573904629678155107371514350689912356864]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [793378251147444470559405272989982121773502134203203927536835,17767522320152108125460539755757647249022537776932746952704],
						"rightEndpoint" : [8697745626232094616370071941937180936021050852401,193754623599383806334783633222004411514432258048]
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
						"leftEndpoint" : [195180895641764535887264179960970172710159739,4791225473298741586942480598114630430097408],
						"rightEndpoint" : [269473835473961366055424840701627792030476097902791465148945,5664590939220541437163059309646171556522600708024257478656]
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
						"leftEndpoint" : [753739207262217625458965226661840730513354383,17748252121682159412259736625763415538794496],
						"rightEndpoint" : [403779504182671708475876020991622923059407861,8875487190308764697923761096691709741367296]
					}
				]
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
						"leftEndpoint" : [753739207262217625458965226661840730513354383,17748252121682159412259736625763415538794496],
						"rightEndpoint" : [403779504182671708475876020991622923059407861,8875487190308764697923761096691709741367296]
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
						"leftEndpoint" : [753739207262217625458965226661840730513354383,17748252121682159412259736625763415538794496],
						"rightEndpoint" : [403779504182671708475876020991622923059407861,8875487190308764697923761096691709741367296]
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
						"leftEndpoint" : [753739207262217625458965226661840730513354383,17748252121682159412259736625763415538794496],
						"rightEndpoint" : [403779504182671708475876020991622923059407861,8875487190308764697923761096691709741367296]
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
						"leftEndpoint" : [753739207262217625458965226661840730513354383,17748252121682159412259736625763415538794496],
						"rightEndpoint" : [403779504182671708475876020991622923059407861,8875487190308764697923761096691709741367296]
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
						"leftEndpoint" : [7134445929500510018395122318531255217947681203,162017321794404925640529199542378168454217728],
						"rightEndpoint" : [453195151257791602901140520526342817733623525,10126763176884150967400041005993773963935744]
					}
				]
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
						"leftEndpoint" : [7134445929500510018395122318531255217947681203,162017321794404925640529199542378168454217728],
						"rightEndpoint" : [453195151257791602901140520526342817733623525,10126763176884150967400041005993773963935744]
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
						"leftEndpoint" : [7134445929500510018395122318531255217947681203,162017321794404925640529199542378168454217728],
						"rightEndpoint" : [453195151257791602901140520526342817733623525,10126763176884150967400041005993773963935744]
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
						"leftEndpoint" : [7134445929500510018395122318531255217947681203,162017321794404925640529199542378168454217728],
						"rightEndpoint" : [453195151257791602901140520526342817733623525,10126763176884150967400041005993773963935744]
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
						"leftEndpoint" : [7134445929500510018395122318531255217947681203,162017321794404925640529199542378168454217728],
						"rightEndpoint" : [453195151257791602901140520526342817733623525,10126763176884150967400041005993773963935744]
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
						"leftEndpoint" : [7134445929500510018395122318531255217947681203,162017321794404925640529199542378168454217728],
						"rightEndpoint" : [453195151257791602901140520526342817733623525,10126763176884150967400041005993773963935744]
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
						"leftEndpoint" : [753739207262217625458965226661840730513354383,17748252121682159412259736625763415538794496],
						"rightEndpoint" : [403779504182671708475876020991622923059407861,8875487190308764697923761096691709741367296]
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
						"leftEndpoint" : [6887862132039888384872624542724644001212956993,159460297426367224902985102997879918430257152],
						"rightEndpoint" : [3520862390981545214095491163400047702476793583,79735593231054357370428279775701066699505664]
					}
				]
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
						"leftEndpoint" : [6887862132039888384872624542724644001212956993,159460297426367224902985102997879918430257152],
						"rightEndpoint" : [3520862390981545214095491163400047702476793583,79735593231054357370428279775701066699505664]
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
						"leftEndpoint" : [6887862132039888384872624542724644001212956993,159460297426367224902985102997879918430257152],
						"rightEndpoint" : [3520862390981545214095491163400047702476793583,79735593231054357370428279775701066699505664]
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
						"leftEndpoint" : [6887862132039888384872624542724644001212956993,159460297426367224902985102997879918430257152],
						"rightEndpoint" : [3520862390981545214095491163400047702476793583,79735593231054357370428279775701066699505664]
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
						"leftEndpoint" : [6887862132039888384872624542724644001212956993,159460297426367224902985102997879918430257152],
						"rightEndpoint" : [3520862390981545214095491163400047702476793583,79735593231054357370428279775701066699505664]
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
						"leftEndpoint" : [6887862132039888384872624542724644001212956993,159460297426367224902985102997879918430257152],
						"rightEndpoint" : [3520862390981545214095491163400047702476793583,79735593231054357370428279775701066699505664]
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
						"leftEndpoint" : [25,1],
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
						"leftEndpoint" : [2559407903732764863893532613441,100217051678347943268791091200],
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
						"leftEndpoint" : [2559407903732764863893532613441,100217051678347943268791091200],
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
						"leftEndpoint" : [2559407903732764863893532613441,100217051678347943268791091200],
						"rightEndpoint" : [7570260487650162027333087173441,200434103356695886537582182400]
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
						"leftEndpoint" : [7570260487650162027333087173441,200434103356695886537582182400],
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
						"leftEndpoint" : [2559407903732764863893532613441,100217051678347943268791091200],
						"rightEndpoint" : [7570260487650162027333087173441,200434103356695886537582182400]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [36685090644893019690137785213,1601083724933487191073488896],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1030666938107290305928668313288128196895785593,27686966105280579229235101112712559851470848],
						"rightEndpoint" : [748098524834726316803839059135,19807040628566084398385987584]
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
						"leftEndpoint" : [36685090644893019690137785213,1601083724933487191073488896],
						"rightEndpoint" : [25,1]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1030666938107290305928668313288128196895785593,27686966105280579229235101112712559851470848],
						"rightEndpoint" : [748098524834726316803839059135,19807040628566084398385987584]
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
						"leftEndpoint" : [7570260487650162027333087173441,200434103356695886537582182400],
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
						"leftEndpoint" : [374049262417363152352522375369,9903520314283042199192993792],
						"rightEndpoint" : [1160490614919655744251171582773832764669930945,24566289171575824752556889965460719564488704]
					}
				]
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
						"leftEndpoint" : [374049262417363152352522375369,9903520314283042199192993792],
						"rightEndpoint" : [1160490614919655744251171582773832764669930945,24566289171575824752556889965460719564488704]
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
						"leftEndpoint" : [374049262417363152352522375369,9903520314283042199192993792],
						"rightEndpoint" : [1160490614919655744251171582773832764669930945,24566289171575824752556889965460719564488704]
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
						"leftEndpoint" : [374049262417363152352522375369,9903520314283042199192993792],
						"rightEndpoint" : [1160490614919655744251171582773832764669930945,24566289171575824752556889965460719564488704]
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
						"leftEndpoint" : [374049262417363152352522375369,9903520314283042199192993792],
						"rightEndpoint" : [1160490614919655744251171582773832764669930945,24566289171575824752556889965460719564488704]
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
						"leftEndpoint" : [181521442569486635082018489949063700729599,4573067674255816596770893786067738034176],
						"rightEndpoint" : [50604192945876280502911803732304520947860319,1126612431213989801159051294170496725155840]
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
						"leftEndpoint" : [181521442569486635082018489949063700729599,4573067674255816596770893786067738034176],
						"rightEndpoint" : [50604192945876280502911803732304520947860319,1126612431213989801159051294170496725155840]
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
						"leftEndpoint" : [476546674686106827705205572398569725887297599,11783990228018093000820663439193372499116032],
						"rightEndpoint" : [1554426584414863638868070664159971311794661565,35357415201925014017877404311299025788731392]
					}
				]
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
						"leftEndpoint" : [476546674686106827705205572398569725887297599,11783990228018093000820663439193372499116032],
						"rightEndpoint" : [1554426584414863638868070664159971311794661565,35357415201925014017877404311299025788731392]
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
						"leftEndpoint" : [476546674686106827705205572398569725887297599,11783990228018093000820663439193372499116032],
						"rightEndpoint" : [1554426584414863638868070664159971311794661565,35357415201925014017877404311299025788731392]
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
						"leftEndpoint" : [476546674686106827705205572398569725887297599,11783990228018093000820663439193372499116032],
						"rightEndpoint" : [1554426584414863638868070664159971311794661565,35357415201925014017877404311299025788731392]
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
						"leftEndpoint" : [476546674686106827705205572398569725887297599,11783990228018093000820663439193372499116032],
						"rightEndpoint" : [1554426584414863638868070664159971311794661565,35357415201925014017877404311299025788731392]
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
						"leftEndpoint" : [12607833984708820591633201970514850157796899,298926456435560524041746423422399279005696],
						"rightEndpoint" : [4041637650328457626539140932403640903249171571,92946334914865350487944926658408568848384000]
					}
				]
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
						"leftEndpoint" : [12607833984708820591633201970514850157796899,298926456435560524041746423422399279005696],
						"rightEndpoint" : [4041637650328457626539140932403640903249171571,92946334914865350487944926658408568848384000]
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
						"leftEndpoint" : [12607833984708820591633201970514850157796899,298926456435560524041746423422399279005696],
						"rightEndpoint" : [4041637650328457626539140932403640903249171571,92946334914865350487944926658408568848384000]
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
						"leftEndpoint" : [12607833984708820591633201970514850157796899,298926456435560524041746423422399279005696],
						"rightEndpoint" : [4041637650328457626539140932403640903249171571,92946334914865350487944926658408568848384000]
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
						"leftEndpoint" : [12607833984708820591633201970514850157796899,298926456435560524041746423422399279005696],
						"rightEndpoint" : [4041637650328457626539140932403640903249171571,92946334914865350487944926658408568848384000]
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
						"leftEndpoint" : [12607833984708820591633201970514850157796899,298926456435560524041746423422399279005696],
						"rightEndpoint" : [4041637650328457626539140932403640903249171571,92946334914865350487944926658408568848384000]
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
						"leftEndpoint" : [476546674686106827705205572398569725887297599,11783990228018093000820663439193372499116032],
						"rightEndpoint" : [1554426584414863638868070664159971311794661565,35357415201925014017877404311299025788731392]
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
						"leftEndpoint" : [1853014212063207091903556331986583660252338907,45362712922773369715366877313112689136893952],
						"rightEndpoint" : [1583991710594694961398880117713107266323375397,37353124828368351983310222261401527703830528]
					}
				]
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
						"leftEndpoint" : [1853014212063207091903556331986583660252338907,45362712922773369715366877313112689136893952],
						"rightEndpoint" : [1583991710594694961398880117713107266323375397,37353124828368351983310222261401527703830528]
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
						"leftEndpoint" : [1853014212063207091903556331986583660252338907,45362712922773369715366877313112689136893952],
						"rightEndpoint" : [1583991710594694961398880117713107266323375397,37353124828368351983310222261401527703830528]
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
						"leftEndpoint" : [1853014212063207091903556331986583660252338907,45362712922773369715366877313112689136893952],
						"rightEndpoint" : [1583991710594694961398880117713107266323375397,37353124828368351983310222261401527703830528]
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
						"leftEndpoint" : [1853014212063207091903556331986583660252338907,45362712922773369715366877313112689136893952],
						"rightEndpoint" : [1583991710594694961398880117713107266323375397,37353124828368351983310222261401527703830528]
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
						"leftEndpoint" : [1853014212063207091903556331986583660252338907,45362712922773369715366877313112689136893952],
						"rightEndpoint" : [1583991710594694961398880117713107266323375397,37353124828368351983310222261401527703830528]
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
						"leftEndpoint" : [374049262417363152352522375369,9903520314283042199192993792],
						"rightEndpoint" : [1160490614919655744251171582773832764669930945,24566289171575824752556889965460719564488704]
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
						"leftEndpoint" : [93512315604340787923739214971,2475880078570760549798248448],
						"rightEndpoint" : [305924597152150940448179678845872284372411911,7263549415461420407969850892892449370275840]
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
						"leftEndpoint" : [93512315604340787923739214971,2475880078570760549798248448],
						"rightEndpoint" : [305924597152150940448179678845872284372411911,7263549415461420407969850892892449370275840]
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
						"leftEndpoint" : [374049262417363149949489313933,9903520314283042199192993792],
						"rightEndpoint" : [2787954509384139601461175469046276562716444751,67125176688008299066490069344009422605647872]
					}
				]
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
						"leftEndpoint" : [374049262417363149949489313933,9903520314283042199192993792],
						"rightEndpoint" : [2787954509384139601461175469046276562716444751,67125176688008299066490069344009422605647872]
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
						"leftEndpoint" : [374049262417363149949489313933,9903520314283042199192993792],
						"rightEndpoint" : [2787954509384139601461175469046276562716444751,67125176688008299066490069344009422605647872]
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
						"leftEndpoint" : [374049262417363149949489313933,9903520314283042199192993792],
						"rightEndpoint" : [2787954509384139601461175469046276562716444751,67125176688008299066490069344009422605647872]
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
						"leftEndpoint" : [374049262417363149949489313933,9903520314283042199192993792],
						"rightEndpoint" : [2787954509384139601461175469046276562716444751,67125176688008299066490069344009422605647872]
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
						"leftEndpoint" : [695186523075113181949791823306597508762699725,17713564457375530724422714181384100049321984],
						"rightEndpoint" : [908578028109035770088345212204835627607390259,22045027293666919346637974950943697777197056]
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
						"leftEndpoint" : [695186523075113181949791823306597508762699725,17713564457375530724422714181384100049321984],
						"rightEndpoint" : [908578028109035770088345212204835627607390259,22045027293666919346637974950943697777197056]
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
						"leftEndpoint" : [735149609038893635049450106844334326421259355,18667707200973467936486632952448721996480512],
						"rightEndpoint" : [72976181641267576971992436588345173639053819,1778006507661062301544815716346571320721408]
					}
				]
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
						"leftEndpoint" : [735149609038893635049450106844334326421259355,18667707200973467936486632952448721996480512],
						"rightEndpoint" : [72976181641267576971992436588345173639053819,1778006507661062301544815716346571320721408]
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
						"leftEndpoint" : [735149609038893635049450106844334326421259355,18667707200973467936486632952448721996480512],
						"rightEndpoint" : [72976181641267576971992436588345173639053819,1778006507661062301544815716346571320721408]
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
						"leftEndpoint" : [735149609038893635049450106844334326421259355,18667707200973467936486632952448721996480512],
						"rightEndpoint" : [72976181641267576971992436588345173639053819,1778006507661062301544815716346571320721408]
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
						"rightEndpoint" : [325,16]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [735149609038893635049450106844334326421259355,18667707200973467936486632952448721996480512],
						"rightEndpoint" : [72976181641267576971992436588345173639053819,1778006507661062301544815716346571320721408]
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
						"leftEndpoint" : [325,16],
						"rightEndpoint" : [175,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [735149609038893635049450106844334326421259355,18667707200973467936486632952448721996480512],
						"rightEndpoint" : [72976181641267576971992436588345173639053819,1778006507661062301544815716346571320721408]
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
						"leftEndpoint" : [374049262417363149949489313933,9903520314283042199192993792],
						"rightEndpoint" : [2787954509384139601461175469046276562716444751,67125176688008299066490069344009422605647872]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [109715449899736937660994937363,4402896288244221040497000448]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [93512315604340787425845303245,2475880078570760549798248448],
						"rightEndpoint" : [42399205442407757630110709014963129162769409,1072643741273301959111025367713994294427648]
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
						"rightEndpoint" : [109715449899736937660994937363,4402896288244221040497000448]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [93512315604340787425845303245,2475880078570760549798248448],
						"rightEndpoint" : [42399205442407757630110709014963129162769409,1072643741273301959111025367713994294427648]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [866558027499766189996472820439,39614081257132168796771975168],
						"rightEndpoint" : [5038670335039016601857933422963857528198347699,204086500446263882637471648781554576175136768]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [748098524834726298536529037955,19807040628566084398385987584],
						"rightEndpoint" : [2832306698007767463167651753497693520954365879,71793485299094325535433613038928978549669888]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [866558027499766189996472820439,39614081257132168796771975168],
						"rightEndpoint" : [5038670335039016601857933422963857528198347699,204086500446263882637471648781554576175136768]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [748098524834726298536529037955,19807040628566084398385987584],
						"rightEndpoint" : [2832306698007767463167651753497693520954365879,71793485299094325535433613038928978549669888]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [866558027499766189996472820439,39614081257132168796771975168],
						"rightEndpoint" : [4751531266150519511009287153173931935426231219,204086500446263882637471648781554576175136768]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [748098524834726298536529037955,19807040628566084398385987584],
						"rightEndpoint" : [2832306698007767463167651753497693520954365879,71793485299094325535433613038928978549669888]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4751531266150519511009287153173931935426231219,204086500446263882637471648781554576175136768],
						"rightEndpoint" : [5038670335039016601857933422963857528198347699,204086500446263882637471648781554576175136768]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [748098524834726298536529037955,19807040628566084398385987584],
						"rightEndpoint" : [2832306698007767463167651753497693520954365879,71793485299094325535433613038928978549669888]
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
						"leftEndpoint" : [866558027499766189996472820439,39614081257132168796771975168],
						"rightEndpoint" : [4751531266150519511009287153173931935426231219,204086500446263882637471648781554576175136768]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [748098524834726298536529037955,19807040628566084398385987584],
						"rightEndpoint" : [2832306698007767463167651753497693520954365879,71793485299094325535433613038928978549669888]
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
						"leftEndpoint" : [4751531266150519511009287153173931935426231219,204086500446263882637471648781554576175136768],
						"rightEndpoint" : [5038670335039016601857933422963857528198347699,204086500446263882637471648781554576175136768]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [748098524834726298536529037955,19807040628566084398385987584],
						"rightEndpoint" : [2832306698007767463167651753497693520954365879,71793485299094325535433613038928978549669888]
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
			"boxC":
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
			"boxStep": "Contract",
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
			"boxC":
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
				]
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
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,1]
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
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,2]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [180874765193301411500851724287,4529536868562260100084924416],
						"rightEndpoint" : [1314544278192101976812753142649,27182056914652023515254882304]
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
						"leftEndpoint" : [180874765193301411500851724287,4529536868562260100084924416],
						"rightEndpoint" : [1314544278192101976812753142649,27182056914652023515254882304]
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
						"leftEndpoint" : [180874765193301411500851724287,4529536868562260100084924416],
						"rightEndpoint" : [1314544278192101976812753142649,27182056914652023515254882304]
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
						"leftEndpoint" : [180874765193301411500851724287,4529536868562260100084924416],
						"rightEndpoint" : [1314544278192101976812753142649,27182056914652023515254882304]
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [180874765193301411500851724287,4529536868562260100084924416],
						"rightEndpoint" : [1314544278192101976812753142649,27182056914652023515254882304]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [40198374885559629032693251553544750188645011786338689154670735,921382672043318993106601258981600748176034255045729204568064],
						"rightEndpoint" : [1259570613534102953675040646097969274978395971,27324041317695867970832411132431705451790336]
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [40198374885559629032693251553544750188645011786338689154670735,921382672043318993106601258981600748176034255045729204568064],
						"rightEndpoint" : [1259570613534102953675040646097969274978395971,27324041317695867970832411132431705451790336]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [0,1],
						"rightEndpoint" : [25,4]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [9955841980455656965934568821037868633856408048373481733242769,223275883077183898765118512879825696771592382746699067555840],
						"rightEndpoint" : [2238249813338153944042571619221301936319667589932509221832717,49615784914558108534608986736810045730106374715660826574848]
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
						"leftEndpoint" : [9955841980455656965934568821037868633856408048373481733242769,223275883077183898765118512879825696771592382746699067555840],
						"rightEndpoint" : [2238249813338153944042571619221301936319667589932509221832717,49615784914558108534608986736810045730106374715660826574848]
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
						"leftEndpoint" : [9955841980455656965934568821037868633856408048373481733242769,223275883077183898765118512879825696771592382746699067555840],
						"rightEndpoint" : [2238249813338153944042571619221301936319667589932509221832717,49615784914558108534608986736810045730106374715660826574848]
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
						"leftEndpoint" : [9955841980455656965934568821037868633856408048373481733242769,223275883077183898765118512879825696771592382746699067555840],
						"rightEndpoint" : [2238249813338153944042571619221301936319667589932509221832717,49615784914558108534608986736810045730106374715660826574848]
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
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [9955841980455656965934568821037868633856408048373481733242769,223275883077183898765118512879825696771592382746699067555840],
						"rightEndpoint" : [2238249813338153944042571619221301936319667589932509221832717,49615784914558108534608986736810045730106374715660826574848]
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
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [9955841980455656965934568821037868633856408048373481733242769,223275883077183898765118512879825696771592382746699067555840],
						"rightEndpoint" : [2238249813338153944042571619221301936319667589932509221832717,49615784914558108534608986736810045730106374715660826574848]
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [180874765193301411500851724287,4529536868562260100084924416],
						"rightEndpoint" : [1314544278192101976812753142649,27182056914652023515254882304]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4580499971899635985638179126700659439070246853,108585837449183430377008584565745932669288448],
						"rightEndpoint" : [155803431139659582541710926825519540226158507,3393647702653903756715001284977129613688832]
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4580499971899635985638179126700659439070246853,108585837449183430377008584565745932669288448],
						"rightEndpoint" : [155803431139659582541710926825519540226158507,3393647702653903756715001284977129613688832]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [25,2]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1681948671234714864270440674128664318109273169,39022078623776187866022850197642562230026240],
						"rightEndpoint" : [7005142139312892389099288844282114735404578753,156099203530846241301962857344092463888859136]
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
						"leftEndpoint" : [1681948671234714864270440674128664318109273169,39022078623776187866022850197642562230026240],
						"rightEndpoint" : [7005142139312892389099288844282114735404578753,156099203530846241301962857344092463888859136]
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
						"leftEndpoint" : [1681948671234714864270440674128664318109273169,39022078623776187866022850197642562230026240],
						"rightEndpoint" : [7005142139312892389099288844282114735404578753,156099203530846241301962857344092463888859136]
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
						"leftEndpoint" : [1681948671234714864270440674128664318109273169,39022078623776187866022850197642562230026240],
						"rightEndpoint" : [7005142139312892389099288844282114735404578753,156099203530846241301962857344092463888859136]
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1681948671234714864270440674128664318109273169,39022078623776187866022850197642562230026240],
						"rightEndpoint" : [7005142139312892389099288844282114735404578753,156099203530846241301962857344092463888859136]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [75,8]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4534980485781188699787863115993911385208429052692081128956117,102558263639360031651180400358535494973777429018299324170240],
						"rightEndpoint" : [116703097689454489647651718165997331010349913,2614006682072017667787632363909879473111040]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [97971550573668214083920405630152979272936511,11386254565799450905314627075896660165918720]
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
						"leftEndpoint" : [4534980485781188699787863115993911385208429052692081128956117,102558263639360031651180400358535494973777429018299324170240],
						"rightEndpoint" : [116703097689454489647651718165997331010349913,2614006682072017667787632363909879473111040]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,4],
						"rightEndpoint" : [97971550573668214083920405630152979272936511,11386254565799450905314627075896660165918720]
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
						"leftEndpoint" : [1681948671234714864270440674128664318109273169,39022078623776187866022850197642562230026240],
						"rightEndpoint" : [7005142139312892389099288844282114735404578753,156099203530846241301962857344092463888859136]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,8],
						"rightEndpoint" : [25,2]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1781473616876667399279285329474484888965546975,41148163330738035388059826040618018370748416],
						"rightEndpoint" : [7606095942960343381252987167213991485248676381417,173025224100643273268456181431807459816812576768]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [26066764587053674263217501698713717705036681,2640155397043506977362917807492179257458688],
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
						"leftEndpoint" : [1781473616876667399279285329474484888965546975,41148163330738035388059826040618018370748416],
						"rightEndpoint" : [7606095942960343381252987167213991485248676381417,173025224100643273268456181431807459816812576768]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [26066764587053674263217501698713717705036681,2640155397043506977362917807492179257458688],
						"rightEndpoint" : [25,2]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1781473616876667399279285329474484888965546975,41148163330738035388059826040618018370748416],
						"rightEndpoint" : [7606095942960343381252987167213991485248676381417,173025224100643273268456181431807459816812576768]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [26066764587053674263217501698713717705036681,2640155397043506977362917807492179257458688],
						"rightEndpoint" : [59068707050097511480253974292365958423270281,5280310794087013954725835614984358514917376]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1781473616876667399279285329474484888965546975,41148163330738035388059826040618018370748416],
						"rightEndpoint" : [7606095942960343381252987167213991485248676381417,173025224100643273268456181431807459816812576768]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [59068707050097511480253974292365958423270281,5280310794087013954725835614984358514917376],
						"rightEndpoint" : [25,2]
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
						"leftEndpoint" : [1781473616876667399279285329474484888965546975,41148163330738035388059826040618018370748416],
						"rightEndpoint" : [7606095942960343381252987167213991485248676381417,173025224100643273268456181431807459816812576768]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [26066764587053674263217501698713717705036681,2640155397043506977362917807492179257458688],
						"rightEndpoint" : [59068707050097511480253974292365958423270281,5280310794087013954725835614984358514917376]
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
						"leftEndpoint" : [1781473616876667399279285329474484888965546975,41148163330738035388059826040618018370748416],
						"rightEndpoint" : [7606095942960343381252987167213991485248676381417,173025224100643273268456181431807459816812576768]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [59068707050097511480253974292365958423270281,5280310794087013954725835614984358514917376],
						"rightEndpoint" : [25,2]
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
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [25,1]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [509651605823937208757427002581,10700714765613018554336018432]
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
						"rightEndpoint" : [509651605823937208757427002581,10700714765613018554336018432]
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
						"rightEndpoint" : [509651605823937208757427002581,10700714765613018554336018432]
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
						"rightEndpoint" : [509651605823937208757427002581,10700714765613018554336018432]
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [509651605823937208757427002581,10700714765613018554336018432]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [272124572428751000857884710786986544424217707,6875762087383919215752952831003710294327296],
						"rightEndpoint" : [2479569630937494753839383939973116749234951149,55011541216942098644959350924790789838995456]
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [272124572428751000857884710786986544424217707,6875762087383919215752952831003710294327296],
						"rightEndpoint" : [2479569630937494753839383939973116749234951149,55011541216942098644959350924790789838995456]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [75,4]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [471745430864707748237188330251652859572992229,11684203738703234506735670137589104201695232],
						"rightEndpoint" : [3086826022630967136277755087388251960402607343,70116111467960886974765163096014640985931776]
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
						"leftEndpoint" : [471745430864707748237188330251652859572992229,11684203738703234506735670137589104201695232],
						"rightEndpoint" : [3086826022630967136277755087388251960402607343,70116111467960886974765163096014640985931776]
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
						"leftEndpoint" : [471745430864707748237188330251652859572992229,11684203738703234506735670137589104201695232],
						"rightEndpoint" : [3086826022630967136277755087388251960402607343,70116111467960886974765163096014640985931776]
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
						"leftEndpoint" : [471745430864707748237188330251652859572992229,11684203738703234506735670137589104201695232],
						"rightEndpoint" : [3086826022630967136277755087388251960402607343,70116111467960886974765163096014640985931776]
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [471745430864707748237188330251652859572992229,11684203738703234506735670137589104201695232],
						"rightEndpoint" : [3086826022630967136277755087388251960402607343,70116111467960886974765163096014640985931776]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [25,2],
						"rightEndpoint" : [125,8]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [6430600884616124506943661357559822207755917857,152512297907515493579908878984180604474490880],
						"rightEndpoint" : [579237389242124854007933980733081136778604299,13318035406336079711426869323835442775195648]
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
						"leftEndpoint" : [6430600884616124506943661357559822207755917857,152512297907515493579908878984180604474490880],
						"rightEndpoint" : [579237389242124854007933980733081136778604299,13318035406336079711426869323835442775195648]
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
						"leftEndpoint" : [6430600884616124506943661357559822207755917857,152512297907515493579908878984180604474490880],
						"rightEndpoint" : [579237389242124854007933980733081136778604299,13318035406336079711426869323835442775195648]
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
						"leftEndpoint" : [6430600884616124506943661357559822207755917857,152512297907515493579908878984180604474490880],
						"rightEndpoint" : [579237389242124854007933980733081136778604299,13318035406336079711426869323835442775195648]
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
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [6430600884616124506943661357559822207755917857,152512297907515493579908878984180604474490880],
						"rightEndpoint" : [579237389242124854007933980733081136778604299,13318035406336079711426869323835442775195648]
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
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [6430600884616124506943661357559822207755917857,152512297907515493579908878984180604474490880],
						"rightEndpoint" : [579237389242124854007933980733081136778604299,13318035406336079711426869323835442775195648]
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [471745430864707748237188330251652859572992229,11684203738703234506735670137589104201695232],
						"rightEndpoint" : [3086826022630967136277755087388251960402607343,70116111467960886974765163096014640985931776]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [125,8],
						"rightEndpoint" : [75,4]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3716119717783392756810646441683955332615625069,90992334024535642761521209073970903632576512],
						"rightEndpoint" : [631640687138100693279579592256162255801550775,14890046102697854133332763612499069326327808]
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
						"leftEndpoint" : [3716119717783392756810646441683955332615625069,90992334024535642761521209073970903632576512],
						"rightEndpoint" : [631640687138100693279579592256162255801550775,14890046102697854133332763612499069326327808]
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
						"leftEndpoint" : [3716119717783392756810646441683955332615625069,90992334024535642761521209073970903632576512],
						"rightEndpoint" : [631640687138100693279579592256162255801550775,14890046102697854133332763612499069326327808]
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
						"leftEndpoint" : [3716119717783392756810646441683955332615625069,90992334024535642761521209073970903632576512],
						"rightEndpoint" : [631640687138100693279579592256162255801550775,14890046102697854133332763612499069326327808]
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
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3716119717783392756810646441683955332615625069,90992334024535642761521209073970903632576512],
						"rightEndpoint" : [631640687138100693279579592256162255801550775,14890046102697854133332763612499069326327808]
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
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3716119717783392756810646441683955332615625069,90992334024535642761521209073970903632576512],
						"rightEndpoint" : [631640687138100693279579592256162255801550775,14890046102697854133332763612499069326327808]
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [75,2],
						"rightEndpoint" : [509651605823937208757427002581,10700714765613018554336018432]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [371382011785614081599691190421,9903520314283042199192993792],
						"rightEndpoint" : [1199371247756996898495255605004918982047211771,28327427009862938259541748151065243969126400]
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [371382011785614081599691190421,9903520314283042199192993792],
						"rightEndpoint" : [1199371247756996898495255605004918982047211771,28327427009862938259541748151065243969126400]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [25,1]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [742764023571228161079418216427,19807040628566084398385987584],
						"rightEndpoint" : [5506512640969452377226081927670265175627664373,132217112037890813890924105288059117761462272]
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
						"leftEndpoint" : [742764023571228161079418216427,19807040628566084398385987584],
						"rightEndpoint" : [5506512640969452377226081927670265175627664373,132217112037890813890924105288059117761462272]
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
						"leftEndpoint" : [742764023571228161079418216427,19807040628566084398385987584],
						"rightEndpoint" : [5506512640969452377226081927670265175627664373,132217112037890813890924105288059117761462272]
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
						"leftEndpoint" : [742764023571228161079418216427,19807040628566084398385987584],
						"rightEndpoint" : [5506512640969452377226081927670265175627664373,132217112037890813890924105288059117761462272]
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [742764023571228161079418216427,19807040628566084398385987584],
						"rightEndpoint" : [5506512640969452377226081927670265175627664373,132217112037890813890924105288059117761462272]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [686341728234620609535236676837400935195448235,17506723205902078414312060461447802586660864],
						"rightEndpoint" : [70555989558553670577731147351903914822288233,1710844577646069355839830821803244512083968]
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [686341728234620609535236676837400935195448235,17506723205902078414312060461447802586660864],
						"rightEndpoint" : [70555989558553670577731147351903914822288233,1710844577646069355839830821803244512083968]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [75,4],
						"rightEndpoint" : [175,8]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5870218132298542680528445787538047520851796897,149080607868693955720954381766781536642793472],
						"rightEndpoint" : [765030889023259365605165198661183874385566259,18636437113054430694853229790037968951443456]
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
						"leftEndpoint" : [5870218132298542680528445787538047520851796897,149080607868693955720954381766781536642793472],
						"rightEndpoint" : [765030889023259365605165198661183874385566259,18636437113054430694853229790037968951443456]
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
						"leftEndpoint" : [5870218132298542680528445787538047520851796897,149080607868693955720954381766781536642793472],
						"rightEndpoint" : [765030889023259365605165198661183874385566259,18636437113054430694853229790037968951443456]
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
						"leftEndpoint" : [5870218132298542680528445787538047520851796897,149080607868693955720954381766781536642793472],
						"rightEndpoint" : [765030889023259365605165198661183874385566259,18636437113054430694853229790037968951443456]
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
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5870218132298542680528445787538047520851796897,149080607868693955720954381766781536642793472],
						"rightEndpoint" : [765030889023259365605165198661183874385566259,18636437113054430694853229790037968951443456]
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
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [5870218132298542680528445787538047520851796897,149080607868693955720954381766781536642793472],
						"rightEndpoint" : [765030889023259365605165198661183874385566259,18636437113054430694853229790037968951443456]
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [742764023571228161079418216427,19807040628566084398385987584],
						"rightEndpoint" : [5506512640969452377226081927670265175627664373,132217112037890813890924105288059117761462272]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [92845502946403519997572549933,2475880078570760549798248448],
						"rightEndpoint" : [335854160919315930754740456985083176325463181,8484491071795815211995725599312424820801536]
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
			"boxStep": "Contract",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [92845502946403519997572549933,2475880078570760549798248448],
						"rightEndpoint" : [335854160919315930754740456985083176325463181,8484491071795815211995725599312424820801536]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [175,8],
						"rightEndpoint" : [25,1]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [185691005892807039850005506659,4951760157141521099596496896],
						"rightEndpoint" : [1403101586183731060244040292353009291626801643,35529562754022389848935668463928622423474176]
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
						"leftEndpoint" : [185691005892807039850005506659,4951760157141521099596496896],
						"rightEndpoint" : [1403101586183731060244040292353009291626801643,35529562754022389848935668463928622423474176]
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
						"leftEndpoint" : [185691005892807039850005506659,4951760157141521099596496896],
						"rightEndpoint" : [1403101586183731060244040292353009291626801643,35529562754022389848935668463928622423474176]
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
						"leftEndpoint" : [185691005892807039850005506659,4951760157141521099596496896],
						"rightEndpoint" : [1403101586183731060244040292353009291626801643,35529562754022389848935668463928622423474176]
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
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [185691005892807039850005506659,4951760157141521099596496896],
						"rightEndpoint" : [1403101586183731060244040292353009291626801643,35529562754022389848935668463928622423474176]
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
			"boxStep": "ContractEmpty",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [185691005892807039850005506659,4951760157141521099596496896],
						"rightEndpoint" : [1403101586183731060244040292353009291626801643,35529562754022389848935668463928622423474176]
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
			"boxStep": "Contract",
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
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [50,1]
					}
				],
			"boxC":
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
						"leftEndpoint" : [25,1],
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
						"leftEndpoint" : [25,1],
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
						"leftEndpoint" : [25,1],
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
						"leftEndpoint" : [25,1],
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
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [829813722629910112659298058249,16894269611928558073028804608]
					}
				]
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
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [829813722629910112659298058249,16894269611928558073028804608]
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
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [1252170462928124064485018173449,33788539223857116146057609216]
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
						"leftEndpoint" : [1252170462928124064485018173449,33788539223857116146057609216],
						"rightEndpoint" : [829813722629910112659298058249,16894269611928558073028804608]
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
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [1252170462928124064485018173449,33788539223857116146057609216]
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
						"leftEndpoint" : [495176015714152093364186637293,19807040628566084398385987584],
						"rightEndpoint" : [734029697726497870013938131949,19807040628566084398385987584]
					}
				]
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
						"leftEndpoint" : [495176015714152093364186637293,19807040628566084398385987584],
						"rightEndpoint" : [734029697726497870013938131949,19807040628566084398385987584]
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
						"leftEndpoint" : [495176015714152093364186637293,19807040628566084398385987584],
						"rightEndpoint" : [734029697726497870013938131949,19807040628566084398385987584]
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
						"leftEndpoint" : [495176015714152093364186637293,19807040628566084398385987584],
						"rightEndpoint" : [734029697726497870013938131949,19807040628566084398385987584]
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
						"leftEndpoint" : [495176015714152093364186637293,19807040628566084398385987584],
						"rightEndpoint" : [734029697726497870013938131949,19807040628566084398385987584]
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
						"leftEndpoint" : [2146083136253362593336659297370695775866587123,74042490159241976819380832452523383708450816],
						"rightEndpoint" : [734029697726497870013938131949,19807040628566084398385987584]
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
						"leftEndpoint" : [2146083136253362593336659297370695775866587123,74042490159241976819380832452523383708450816],
						"rightEndpoint" : [734029697726497870013938131949,19807040628566084398385987584]
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
						"leftEndpoint" : [94656268083006039318286397456574109807469329,3058347321741085425377846570506799814803456],
						"rightEndpoint" : [367014848863248938852593045687,9903520314283042199192993792]
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
						"leftEndpoint" : [94656268083006039318286397456574109807469329,3058347321741085425377846570506799814803456],
						"rightEndpoint" : [367014848863248938852593045687,9903520314283042199192993792]
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
						"leftEndpoint" : [13322709579416253634570835972637058973655161,422517784279223416044284217246182782533632],
						"rightEndpoint" : [734029697726497884403929666535,19807040628566084398385987584]
					}
				]
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
						"leftEndpoint" : [13322709579416253634570835972637058973655161,422517784279223416044284217246182782533632],
						"rightEndpoint" : [734029697726497884403929666535,19807040628566084398385987584]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [225,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [13322709579416253634570835972637058973655161,422517784279223416044284217246182782533632],
						"rightEndpoint" : [734029697726497884403929666535,19807040628566084398385987584]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,8],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [13322709579416253634570835972637058973655161,422517784279223416044284217246182782533632],
						"rightEndpoint" : [734029697726497884403929666535,19807040628566084398385987584]
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
						"rightEndpoint" : [225,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [13322709579416253634570835972637058973655161,422517784279223416044284217246182782533632],
						"rightEndpoint" : [734029697726497884403929666535,19807040628566084398385987584]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [264576444427248943257217586489,10391687358572618446706573312],
						"rightEndpoint" : [225,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [128328708278687361015800809696407592011187053,3673131389302236247622541212590498637676544],
						"rightEndpoint" : [45876856107906117993234485599,1237940039285380274899124224]
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
						"leftEndpoint" : [264576444427248943257217586489,10391687358572618446706573312],
						"rightEndpoint" : [225,8]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [128328708278687361015800809696407592011187053,3673131389302236247622541212590498637676544],
						"rightEndpoint" : [45876856107906117993234485599,1237940039285380274899124224]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2973048799733210731356780334539918287467272033,116259493143450141282021836327785429238546432],
						"rightEndpoint" : [1114146035356842247975944344587,39614081257132168796771975168]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1172102849772205451029860019909328194388585935,33310496182542173823769174963093405970726912],
						"rightEndpoint" : [183507424431624472734139335481,4951760157141521099596496896]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2973048799733210731356780334539918287467272033,116259493143450141282021836327785429238546432],
						"rightEndpoint" : [1114146035356842247975944344587,39614081257132168796771975168]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1172102849772205451029860019909328194388585935,33310496182542173823769174963093405970726912],
						"rightEndpoint" : [183507424431624472734139335481,4951760157141521099596496896]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [2973048799733210731356780334539918287467272033,116259493143450141282021836327785429238546432],
						"rightEndpoint" : [3121423522196372978288446199896509485461624673,116259493143450141282021836327785429238546432]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1172102849772205451029860019909328194388585935,33310496182542173823769174963093405970726912],
						"rightEndpoint" : [183507424431624472734139335481,4951760157141521099596496896]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [3121423522196372978288446199896509485461624673,116259493143450141282021836327785429238546432],
						"rightEndpoint" : [1114146035356842247975944344587,39614081257132168796771975168]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1172102849772205451029860019909328194388585935,33310496182542173823769174963093405970726912],
						"rightEndpoint" : [183507424431624472734139335481,4951760157141521099596496896]
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
						"leftEndpoint" : [2973048799733210731356780334539918287467272033,116259493143450141282021836327785429238546432],
						"rightEndpoint" : [3121423522196372978288446199896509485461624673,116259493143450141282021836327785429238546432]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1172102849772205451029860019909328194388585935,33310496182542173823769174963093405970726912],
						"rightEndpoint" : [183507424431624472734139335481,4951760157141521099596496896]
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
						"leftEndpoint" : [3121423522196372978288446199896509485461624673,116259493143450141282021836327785429238546432],
						"rightEndpoint" : [1114146035356842247975944344587,39614081257132168796771975168]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1172102849772205451029860019909328194388585935,33310496182542173823769174963093405970726912],
						"rightEndpoint" : [183507424431624472734139335481,4951760157141521099596496896]
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
						"leftEndpoint" : [225,8],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [13322709579416253634570835972637058973655161,422517784279223416044284217246182782533632],
						"rightEndpoint" : [734029697726497884403929666535,19807040628566084398385987584]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,8],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [63252184649851160275467209313820867743075177,1967236748680391463231845353647976814215168],
						"rightEndpoint" : [87933887612245227584923384479048042347434651,2459386218217410576988279888012471510761472]
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
						"leftEndpoint" : [225,8],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [63252184649851160275467209313820867743075177,1967236748680391463231845353647976814215168],
						"rightEndpoint" : [87933887612245227584923384479048042347434651,2459386218217410576988279888012471510761472]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,8],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [302313976841729477003485322733976529147366371,9363028267777048264902980621162432709001216],
						"rightEndpoint" : [55445674619274654245543577465193132824244277,1560731566207455542782812234162072446828544]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,8],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [302313976841729477003485322733976529147366371,9363028267777048264902980621162432709001216],
						"rightEndpoint" : [55445674619274654245543577465193132824244277,1560731566207455542782812234162072446828544]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,8],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [302313976841729477003485322733976529147366371,9363028267777048264902980621162432709001216],
						"rightEndpoint" : [400249751159549957377646448384421932933215318444222486109997,11804427766346445110606290118499196451268951571790976516096]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,8],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [400249751159549957377646448384421932933215318444222486109997,11804427766346445110606290118499196451268951571790976516096],
						"rightEndpoint" : [55445674619274654245543577465193132824244277,1560731566207455542782812234162072446828544]
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
						"leftEndpoint" : [225,8],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [302313976841729477003485322733976529147366371,9363028267777048264902980621162432709001216],
						"rightEndpoint" : [400249751159549957377646448384421932933215318444222486109997,11804427766346445110606290118499196451268951571790976516096]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [355100515483592363756329259763,11988207431421417324202164224],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4038118214547136234402801445446065837931628149,124283154227890351375480633460156389054742528],
						"rightEndpoint" : [671592324482863999718635968009,19807040628566084398385987584]
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
						"leftEndpoint" : [355100515483592363756329259763,11988207431421417324202164224],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [4038118214547136234402801445446065837931628149,124283154227890351375480633460156389054742528],
						"rightEndpoint" : [671592324482863999718635968009,19807040628566084398385987584]
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
						"leftEndpoint" : [225,8],
						"rightEndpoint" : [125,4]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [400249751159549957377646448384421932933215318444222486109997,11804427766346445110606290118499196451268951571790976516096],
						"rightEndpoint" : [55445674619274654245543577465193132824244277,1560731566207455542782812234162072446828544]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [225,8],
						"rightEndpoint" : [347524699332759007695463744549,11689639290592556955711045632]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [671592324482863997845732424943,19807040628566084398385987584],
						"rightEndpoint" : [1120941663977640382456021918160483074552592807,31814090254387560377765363305901860312842240]
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
						"leftEndpoint" : [225,8],
						"rightEndpoint" : [347524699332759007695463744549,11689639290592556955711045632]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [671592324482863997845732424943,19807040628566084398385987584],
						"rightEndpoint" : [1120941663977640382456021918160483074552592807,31814090254387560377765363305901860312842240]
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
						"leftEndpoint" : [495176015714152093364186637293,19807040628566084398385987584],
						"rightEndpoint" : [734029697726497870013938131949,19807040628566084398385987584]
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
						"leftEndpoint" : [495176015714152093364186637293,19807040628566084398385987584],
						"rightEndpoint" : [3003839162694282561806929420275658619685586703,85115037227570865398188385455907020627509248]
					}
				]
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
						"leftEndpoint" : [495176015714152093364186637293,19807040628566084398385987584],
						"rightEndpoint" : [3003839162694282561806929420275658619685586703,85115037227570865398188385455907020627509248]
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
						"leftEndpoint" : [495176015714152093364186637293,19807040628566084398385987584],
						"rightEndpoint" : [2565857546691777062723714512135524271363606287,85115037227570865398188385455907020627509248]
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
						"leftEndpoint" : [2565857546691777062723714512135524271363606287,85115037227570865398188385455907020627509248],
						"rightEndpoint" : [3003839162694282561806929420275658619685586703,85115037227570865398188385455907020627509248]
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
						"leftEndpoint" : [495176015714152093364186637293,19807040628566084398385987584],
						"rightEndpoint" : [2565857546691777062723714512135524271363606287,85115037227570865398188385455907020627509248]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [200793450510567718183063562367,6144032981530510768631447552],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [495176015714152091153339050409,19807040628566084398385987584],
						"rightEndpoint" : [597098307535891088374787271081,19807040628566084398385987584]
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
						"leftEndpoint" : [200793450510567718183063562367,6144032981530510768631447552],
						"rightEndpoint" : [75,2]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [495176015714152091153339050409,19807040628566084398385987584],
						"rightEndpoint" : [597098307535891088374787271081,19807040628566084398385987584]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1939355698531413527343964309837531996301880559,58827704778632510801947089605858975914393600],
						"rightEndpoint" : [742764023571228167301927582129,19807040628566084398385987584]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [495176015714152091153339050409,19807040628566084398385987584],
						"rightEndpoint" : [597098307535891088374787271081,19807040628566084398385987584]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1939355698531413527343964309837531996301880559,58827704778632510801947089605858975914393600],
						"rightEndpoint" : [742764023571228167301927582129,19807040628566084398385987584]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [495176015714152091153339050409,19807040628566084398385987584],
						"rightEndpoint" : [597098307535891088374787271081,19807040628566084398385987584]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1939355698531413527343964309837531996301880559,58827704778632510801947089605858975914393600],
						"rightEndpoint" : [742764023571228167301927582129,19807040628566084398385987584]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [495176015714152091153339050409,19807040628566084398385987584],
						"rightEndpoint" : [546137161625021589764063160745,19807040628566084398385987584]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1939355698531413527343964309837531996301880559,58827704778632510801947089605858975914393600],
						"rightEndpoint" : [742764023571228167301927582129,19807040628566084398385987584]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [546137161625021589764063160745,19807040628566084398385987584],
						"rightEndpoint" : [597098307535891088374787271081,19807040628566084398385987584]
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
						"leftEndpoint" : [1939355698531413527343964309837531996301880559,58827704778632510801947089605858975914393600],
						"rightEndpoint" : [742764023571228167301927582129,19807040628566084398385987584]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [495176015714152091153339050409,19807040628566084398385987584],
						"rightEndpoint" : [546137161625021589764063160745,19807040628566084398385987584]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [550248683096524622690031015927983199892523845,15518243120886071610158995188394606626603008],
						"rightEndpoint" : [185691005892807043294281920441,4951760157141521099596496896]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [495176015714152091153339050409,19807040628566084398385987584],
						"rightEndpoint" : [546137161625021589764063160745,19807040628566084398385987584]
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
						"leftEndpoint" : [550248683096524622690031015927983199892523845,15518243120886071610158995188394606626603008],
						"rightEndpoint" : [185691005892807043294281920441,4951760157141521099596496896]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [495176015714152091153339050409,19807040628566084398385987584],
						"rightEndpoint" : [546137161625021589764063160745,19807040628566084398385987584]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1605917644651010470505878164225649918112488277,45077656937303608082284162285385582135738368],
						"rightEndpoint" : [742764023571228175094476900455,19807040628566084398385987584]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [495176015714152091153339050409,19807040628566084398385987584],
						"rightEndpoint" : [546137161625021589764063160745,19807040628566084398385987584]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1605917644651010470505878164225649918112488277,45077656937303608082284162285385582135738368],
						"rightEndpoint" : [742764023571228175094476900455,19807040628566084398385987584]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [495176015714152091153339050409,19807040628566084398385987584],
						"rightEndpoint" : [546137161625021589764063160745,19807040628566084398385987584]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1605917644651010470505878164225649918112488277,45077656937303608082284162285385582135738368],
						"rightEndpoint" : [742764023571228175094476900455,19807040628566084398385987584]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [495176015714152091153339050409,19807040628566084398385987584],
						"rightEndpoint" : [520656588669586840458701105577,19807040628566084398385987584]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1605917644651010470505878164225649918112488277,45077656937303608082284162285385582135738368],
						"rightEndpoint" : [742764023571228175094476900455,19807040628566084398385987584]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [520656588669586840458701105577,19807040628566084398385987584],
						"rightEndpoint" : [546137161625021589764063160745,19807040628566084398385987584]
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
						"leftEndpoint" : [1605917644651010470505878164225649918112488277,45077656937303608082284162285385582135738368],
						"rightEndpoint" : [742764023571228175094476900455,19807040628566084398385987584]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [495176015714152091153339050409,19807040628566084398385987584],
						"rightEndpoint" : [520656588669586840458701105577,19807040628566084398385987584]
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
						"leftEndpoint" : [1605917644651010470505878164225649918112488277,45077656937303608082284162285385582135738368],
						"rightEndpoint" : [742764023571228175094476900455,19807040628566084398385987584]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [520656588669586840458701105577,19807040628566084398385987584],
						"rightEndpoint" : [546137161625021589764063160745,19807040628566084398385987584]
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
						"leftEndpoint" : [1939355698531413527343964309837531996301880559,58827704778632510801947089605858975914393600],
						"rightEndpoint" : [742764023571228167301927582129,19807040628566084398385987584]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [546137161625021589764063160745,19807040628566084398385987584],
						"rightEndpoint" : [597098307535891088374787271081,19807040628566084398385987584]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [325711323779084397863791794441295667605247405,9766355273505539255948023747915560985296896],
						"rightEndpoint" : [270326026851427186313541425706543747798428243,7515905577675083426429845814329082938130432]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [546137161625021589764063160745,19807040628566084398385987584],
						"rightEndpoint" : [597098307535891088374787271081,19807040628566084398385987584]
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
						"leftEndpoint" : [325711323779084397863791794441295667605247405,9766355273505539255948023747915560985296896],
						"rightEndpoint" : [270326026851427186313541425706543747798428243,7515905577675083426429845814329082938130432]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [546137161625021589764063160745,19807040628566084398385987584],
						"rightEndpoint" : [597098307535891088374787271081,19807040628566084398385987584]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4964689840712246636656346933254734187784582057,148560606633499989760385639048526973051600896],
						"rightEndpoint" : [4506196380147468197237341107910099329251003479,125875761158769197268972128346764362414817280]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [546137161625021589764063160745,19807040628566084398385987584],
						"rightEndpoint" : [597098307535891088374787271081,19807040628566084398385987584]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4964689840712246636656346933254734187784582057,148560606633499989760385639048526973051600896],
						"rightEndpoint" : [4506196380147468197237341107910099329251003479,125875761158769197268972128346764362414817280]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [546137161625021589764063160745,19807040628566084398385987584],
						"rightEndpoint" : [597098307535891088374787271081,19807040628566084398385987584]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4964689840712246636656346933254734187784582057,148560606633499989760385639048526973051600896],
						"rightEndpoint" : [4506196380147468197237341107910099329251003479,125875761158769197268972128346764362414817280]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [546137161625021589764063160745,19807040628566084398385987584],
						"rightEndpoint" : [571617734580456339069425215913,19807040628566084398385987584]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [4964689840712246636656346933254734187784582057,148560606633499989760385639048526973051600896],
						"rightEndpoint" : [4506196380147468197237341107910099329251003479,125875761158769197268972128346764362414817280]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571617734580456339069425215913,19807040628566084398385987584],
						"rightEndpoint" : [597098307535891088374787271081,19807040628566084398385987584]
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
						"leftEndpoint" : [4964689840712246636656346933254734187784582057,148560606633499989760385639048526973051600896],
						"rightEndpoint" : [4506196380147468197237341107910099329251003479,125875761158769197268972128346764362414817280]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [546137161625021589764063160745,19807040628566084398385987584],
						"rightEndpoint" : [571617734580456339069425215913,19807040628566084398385987584]
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
						"leftEndpoint" : [4964689840712246636656346933254734187784582057,148560606633499989760385639048526973051600896],
						"rightEndpoint" : [4506196380147468197237341107910099329251003479,125875761158769197268972128346764362414817280]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [571617734580456339069425215913,19807040628566084398385987584],
						"rightEndpoint" : [597098307535891088374787271081,19807040628566084398385987584]
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
						"leftEndpoint" : [2565857546691777062723714512135524271363606287,85115037227570865398188385455907020627509248],
						"rightEndpoint" : [3003839162694282561806929420275658619685586703,85115037227570865398188385455907020627509248]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [125,4],
						"rightEndpoint" : [392164899843894200702199137207,11548073605671976110452113408]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [298549153767945541976546048655,9903520314283042199192993792],
						"rightEndpoint" : [103661952475042720973946750760952603610784047,3146554400820930710906945366709843401900032]
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
						"rightEndpoint" : [392164899843894200702199137207,11548073605671976110452113408]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [298549153767945541976546048655,9903520314283042199192993792],
						"rightEndpoint" : [103661952475042720973946750760952603610784047,3146554400820930710906945366709843401900032]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [618970019642690133897431942605,19807040628566084398385987584],
						"rightEndpoint" : [983468128775047485960139983475033056510879073,29216470965601208402047922944779545498091520]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1194196615071782163778682323283,39614081257132168796771975168],
						"rightEndpoint" : [7358645008895414302026241286295579019366554209,225405415415056708811723461327253715235635200]
					}
				]
		}
		,
		{
			"boxStep": "Split",
			"box":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [618970019642690133897431942605,19807040628566084398385987584],
						"rightEndpoint" : [983468128775047485960139983475033056510879073,29216470965601208402047922944779545498091520]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1194196615071782163778682323283,39614081257132168796771975168],
						"rightEndpoint" : [7358645008895414302026241286295579019366554209,225405415415056708811723461327253715235635200]
					}
				],
			"boxL":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [618970019642690133897431942605,19807040628566084398385987584],
						"rightEndpoint" : [983468128775047485960139983475033056510879073,29216470965601208402047922944779545498091520]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1194196615071782163778682323283,39614081257132168796771975168],
						"rightEndpoint" : [7076831364495375387483324654653959588160658017,225405415415056708811723461327253715235635200]
					}
				],
			"boxR":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [618970019642690133897431942605,19807040628566084398385987584],
						"rightEndpoint" : [983468128775047485960139983475033056510879073,29216470965601208402047922944779545498091520]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [7076831364495375387483324654653959588160658017,225405415415056708811723461327253715235635200],
						"rightEndpoint" : [7358645008895414302026241286295579019366554209,225405415415056708811723461327253715235635200]
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
						"leftEndpoint" : [618970019642690133897431942605,19807040628566084398385987584],
						"rightEndpoint" : [983468128775047485960139983475033056510879073,29216470965601208402047922944779545498091520]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [1194196615071782163778682323283,39614081257132168796771975168],
						"rightEndpoint" : [7076831364495375387483324654653959588160658017,225405415415056708811723461327253715235635200]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [1948749915644694933911908582381102536123304473,60292089415894310009757458296664240741679104],
						"rightEndpoint" : [82762390858263758791821738181165737756317047027,2533451630078176208707713282026605193927327744]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [786325999633135223961192886582100012101610906721,25334516300781762087077132820266051939273277440],
						"rightEndpoint" : [621862106107622224760573118863,19807040628566084398385987584]
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
						"leftEndpoint" : [1948749915644694933911908582381102536123304473,60292089415894310009757458296664240741679104],
						"rightEndpoint" : [82762390858263758791821738181165737756317047027,2533451630078176208707713282026605193927327744]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [786325999633135223961192886582100012101610906721,25334516300781762087077132820266051939273277440],
						"rightEndpoint" : [621862106107622224760573118863,19807040628566084398385987584]
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
						"leftEndpoint" : [618970019642690133897431942605,19807040628566084398385987584],
						"rightEndpoint" : [983468128775047485960139983475033056510879073,29216470965601208402047922944779545498091520]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [7076831364495375387483324654653959588160658017,225405415415056708811723461327253715235635200],
						"rightEndpoint" : [7358645008895414302026241286295579019366554209,225405415415056708811723461327253715235635200]
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
						"leftEndpoint" : [1252170462928124064485018173449,33788539223857116146057609216],
						"rightEndpoint" : [829813722629910112659298058249,16894269611928558073028804608]
					}
				],
			"boxC":
				[
					{
						"variableName" : "x",
						"variableType" : "Real",
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [5143034513539051799886800629,198371738273657050844102656]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734029697726497836823012027331,19807040628566084398385987584],
						"rightEndpoint" : [421589700452480537536223574143669391705470555,11197533766401256088522811921149002579443712]
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
						"rightEndpoint" : [5143034513539051799886800629,198371738273657050844102656]
					}
					,
					{
						"variableName" : "y",
						"variableType" : "Real",
						"leftEndpoint" : [734029697726497836823012027331,19807040628566084398385987584],
						"rightEndpoint" : [421589700452480537536223574143669391705470555,11197533766401256088522811921149002579443712]
					}
				]
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
						"leftEndpoint" : [25,1],
						"rightEndpoint" : [50,1]
					}
				]
		}

	]
]