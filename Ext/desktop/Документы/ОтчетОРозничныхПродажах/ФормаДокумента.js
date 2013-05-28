Ext.define('Документы.ОтчетОРозничныхПродажах.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:672px;height:457px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет о розничных продажах',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:405px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 570,
			height: 19,
			style: 'position:absolute;left:94px;top:405px;width:570px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:672px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:428px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:506px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:357px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПодразделениеКомпании',
			width: 220,
			height: 19,
			style: 'position:absolute;left:94px;top:357px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:381px;width:84px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 220,
			height: 19,
			style: 'position:absolute;left:94px;top:381px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 220,
			height: 19,
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'КассаККМ',
			width: 220,
			height: 19,
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКассаККМ',
			text: 'ККМ:\r\n',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:334px;top:33px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСклад',
			text: 'Склад:',
			style: 'position:absolute;left:334px;top:57px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Склад',
			width: 236,
			height: 19,
			style: 'position:absolute;left:428px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнвентаризацияТоваровНаСкладе',
			text: 'Инвентаризация:',
			style: 'position:absolute;left:334px;top:81px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ИнвентаризацияТоваровНаСкладе',
			width: 236,
			height: 19,
			style: 'position:absolute;left:428px;top:81px;width:236px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:432px;width:672px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:584px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяДвиженияДенежныхСредств',
			text: 'Статья движения денежных средств:',
			style: 'position:absolute;left:322px;top:375px;width:101px;height:28px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяДвиженияДенежныхСредств',
			width: 236,
			height: 19,
			style: 'position:absolute;left:428px;top:381px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Проект',
			width: 236,
			height: 20,
			style: 'position:absolute;left:428px;top:356px;width:236px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:322px;top:355px;width:98px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:108px;width:656px;height:244px;',
			height: 244,width: 656,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:642px;height:144px;',
			height: 144,width: 642,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Склад',
					width:'220',
					dataIndex:'Склад',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'120',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'120',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'120',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия номенклатуры',
					width:'120',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Количество',
					width:'65',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед.',
					width:'60',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'К.',
					width:'45',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Цена',
					width:'80',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'% Руч.ск.',
					width:'54',
					dataIndex:'ПроцентСкидкиНаценки',
					flex:1,
				},
				{
					text:'% Авт.ск.',
					width:'55',
					dataIndex:'ПроцентАвтоматическихСкидок',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'% НДС',
					width:'40',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'80',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'Всего',
					width:'80',
					dataIndex:'Всего',
					flex:1,
				},
				{
					text:'Номер ГТД',
					width:'200',
					dataIndex:'НомерГТД',
					flex:1,
				},
				{
					text:'Страна происхождения',
					width:'100',
					dataIndex:'СтранаПроисхождения',
					flex:1,
				},
				{
					text:'Собственные, счет учета (БУ)',
					width:'100',
					dataIndex:'СчетУчетаБУ',
					flex:1,
				},
				{
					text:'Принятые, счет учета (БУ)',
					width:'100',
					dataIndex:'ПринятыеСчетУчетаБУ',
					flex:1,
				},
				{
					text:'Счет доходов (БУ)',
					width:'100',
					dataIndex:'СчетДоходовБУ',
					flex:1,
				},
				{
					text:'Субконто (БУ)',
					width:'100',
					dataIndex:'СубконтоБУ',
					flex:1,
				},
				{
					text:'Счет расходов (БУ)',
					width:'100',
					dataIndex:'СчетРасходовБУ',
					flex:1,
				},
				{
					text:'Счет учета (НУ)',
					width:'100',
					dataIndex:'СчетУчетаНУ',
					flex:1,
				},
				{
					text:'Принятые счет учета (НУ)',
					width:'100',
					dataIndex:'ПринятыеСчетУчетаНУ',
					flex:1,
				},
				{
					text:'Счет доходов (НУ)',
					width:'100',
					dataIndex:'СчетДоходовНУ',
					flex:1,
				},
				{
					text:'Субконто (НУ)',
					width:'100',
					dataIndex:'СубконтоНУ',
					flex:1,
				},
				{
					text:'Счет расходов (НУ)',
					width:'100',
					dataIndex:'СчетРасходовНУ',
					flex:1,
				},
				{
					text:'Условие автоматической скидки',
					width:'120',
					dataIndex:'УсловиеАвтоматическойСкидки',
					flex:1,
				},
				{
					text:'Значение условия автоматической скидки',
					width:'120',
					dataIndex:'ЗначениеУсловияАвтоматическойСкидки',
					flex:1,
				},
				{
					text:'Принадлежность номенклатуры',
					width:'100',
					dataIndex:'ПринадлежностьНоменклатуры',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетОРозничныхПродажах/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Склад',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СерияНоменклатуры',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'Цена',
					},
					{
						name:'ПроцентСкидкиНаценки',
					},
					{
						name:'ПроцентАвтоматическихСкидок',
					},
					{
						name:'Сумма',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаНДС',
					},
					{
						name:'Всего',
					},
					{
						name:'НомерГТД',
					},
					{
						name:'СтранаПроисхождения',
					},
					{
						name:'СчетУчетаБУ',
					},
					{
						name:'ПринятыеСчетУчетаБУ',
					},
					{
						name:'СчетДоходовБУ',
					},
					{
						name:'СубконтоБУ',
					},
					{
						name:'СчетРасходовБУ',
					},
					{
						name:'СчетУчетаНУ',
					},
					{
						name:'ПринятыеСчетУчетаНУ',
					},
					{
						name:'СчетДоходовНУ',
					},
					{
						name:'СубконтоНУ',
					},
					{
						name:'СчетРасходовНУ',
					},
					{
						name:'УсловиеАвтоматическойСкидки',
					},
					{
						name:'ЗначениеУсловияАвтоматическойСкидки',
					},
					{
						name:'ПринадлежностьНоменклатуры',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:480px;top:180px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Всего',
			style: 'position:absolute;left:553px;top:180px;width:95px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьТоварыИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:6px;top:180px;width:467px;height:17px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:552px;top:201px;width:96px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'Эквайрер',
			text: 'Эквайрер',
			style: 'position:absolute;left:121px;top:29px;width:174px;height:15px;',
		},
					]
				},
				{
					title:'Оплата платежными картами',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:72px;width:642px;height:102px;',
			height: 102,width: 642,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид оплаты',
					width:'257',
					dataIndex:'ВидОплаты',
					flex:1,
				},
				{
					text:'Сумма',
					width:'102',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'% торговой уступки',
					width:'109',
					dataIndex:'ПроцентТорговойУступки',
					flex:1,
				},
				{
					text:'Сумма торговой уступки',
					width:'133',
					dataIndex:'СуммаТорговойУступки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетОРозничныхПродажах/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидОплаты',
					},
					{
						name:'Сумма',
					},
					{
						name:'ПроцентТорговойУступки',
					},
					{
						name:'СуммаТорговойУступки',
					},
				]
			},
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВсегоОплатаПлатежнымиКартами',
			style: 'position:absolute;left:568px;top:180px;width:80px;height:17px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВсегоТорговаяУступка',
			style: 'position:absolute;left:568px;top:201px;width:80px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорЭквайринга',
			text: 'Договор эквайринга:',
			style: 'position:absolute;left:6px;top:6px;width:109px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ДоговорЭквайринга',
			width: 240,
			height: 19,
			style: 'position:absolute;left:121px;top:6px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЭквайрер',
			text: 'Эквайрер:',
			style: 'position:absolute;left:6px;top:29px;width:53px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорВзаиморасчетовЭквайрера',
			text: 'Договор взаиморасчетов:',
			style: 'position:absolute;left:300px;top:29px;width:134px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетовСЭквайрером',
			text: 'Счет учета расчетов с эквайрером:',
			style: 'position:absolute;left:366px;top:6px;width:192px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СчетУчетаРасчетовСЭквайрером',
			width: 80,
			height: 19,
			style: 'position:absolute;left:566px;top:6px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Оплата банковскими кредитами',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВсегоТорговаяУступка',
			text: 'Торговая уступка, руб.:',
			style: 'position:absolute;left:448px;top:201px;width:120px;height:17px;text-align:left;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:642px;height:144px;',
			height: 144,width: 642,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид оплаты',
					width:'184',
					dataIndex:'ВидОплаты',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'% комиссии',
					width:'69',
					dataIndex:'ПроцентБанковскойКомиссии',
					flex:1,
				},
				{
					text:'Сумма комиссии',
					width:'100',
					dataIndex:'СуммаБанковскойКомиссии',
					flex:1,
				},
				{
					text:'Банк-кредитор',
					width:'137',
					dataIndex:'БанкКредитор',
					flex:1,
				},
				{
					text:'Договор взаиморасчетов',
					width:'145',
					dataIndex:'ДоговорВзаиморасчетовБанкаКредитора',
					flex:1,
				},
				{
					text:'Счет расчетов',
					width:'84',
					dataIndex:'СчетУчетаРасчетовСКонтрагентом',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетОРозничныхПродажах/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидОплаты',
					},
					{
						name:'Сумма',
					},
					{
						name:'ПроцентБанковскойКомиссии',
					},
					{
						name:'СуммаБанковскойКомиссии',
					},
					{
						name:'БанкКредитор',
					},
					{
						name:'ДоговорВзаиморасчетовБанкаКредитора',
					},
					{
						name:'СчетУчетаРасчетовСКонтрагентом',
					},
				]
			},
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВсегоОплатаБанковскимиКредитами',
			style: 'position:absolute;left:568px;top:180px;width:80px;height:17px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВсегоСуммаКомиссии',
			style: 'position:absolute;left:568px;top:201px;width:80px;height:17px;',
		},
					]
				},
				{
					title:'Продажи по дисконтным картам',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВсегоОплатаБанковскимиКредитами',
			text: 'Всего, руб.:',
			style: 'position:absolute;left:508px;top:180px;width:60px;height:17px;text-align:left;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:642px;height:188px;',
			height: 188,width: 642,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Дисконтная карта',
					width:'220',
					dataIndex:'ДисконтнаяКарта',
					flex:1,
				},
				{
					text:'Владелец дисконтной карты',
					width:'279',
					dataIndex:'ВладелецДисконтнойКарты',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетОРозничныхПродажах/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДисконтнаяКарта',
					},
					{
						name:'ВладелецДисконтнойКарты',
					},
					{
						name:'Сумма',
					},
				]
			},
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
	]
});