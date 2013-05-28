Ext.define('Документы.ОтчетКомиссионераОПродажах.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:664px;height:547px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет комиссионера',
	
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
			style: 'position:absolute;left:174px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:495px;width:84px;height:19px;text-align:left;',
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
			width: 562,
			height: 19,
			style: 'position:absolute;left:94px;top:495px;width:562px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
			items:
			[
				{
					text:'Цены и валюта...',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Заполнить и провести',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Показать/скрыть счета учета',
				},
				'-',
				{
					text:'XML-обмен',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:420px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:498px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:150px;width:648px;height:280px;',
			height: 280,width: 648,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВходящийНомер',
			text: 'Вх. номер:',
			style: 'position:absolute;left:12px;top:27px;width:84px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:128px;width:634px;height:126px;',
			height: 126,width: 634,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
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
					width:'220',
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
					text:'Ед. мест',
					width:'50',
					dataIndex:'ЕдиницаМест',
					flex:1,
				},
				{
					text:'К. мест',
					width:'49',
					dataIndex:'КоэффициентМест',
					flex:1,
				},
				{
					text:'Мест',
					width:'59',
					dataIndex:'КоличествоМест',
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
					width:'50',
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
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Цена передачи',
					width:'80',
					dataIndex:'ЦенаПередачи',
					flex:1,
				},
				{
					text:'Сумма передачи',
					width:'90',
					dataIndex:'СуммаПередачи',
					flex:1,
				},
				{
					text:'Сумма НДС передачи',
					width:'100',
					dataIndex:'СуммаНДСПередачи',
					flex:1,
				},
				{
					text:'% НДС',
					width:'38',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'82',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'Вознаграждение',
					width:'90',
					dataIndex:'СуммаВознаграждения',
					flex:1,
				},
				{
					text:'Сумма НДС вознаграждения',
					width:'100',
					dataIndex:'СуммаНДСВознаграждения',
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
					text:'Счет учета (БУ)',
					width:'100',
					dataIndex:'СчетУчетаБУ',
					flex:1,
				},
				{
					text:'Переданные принятые (БУ)',
					width:'100',
					dataIndex:'ПереданныеПринятыеБУ',
					flex:1,
				},
				{
					text:'Счет учета (НУ)',
					width:'100',
					dataIndex:'СчетУчетаНУ',
					flex:1,
				},
				{
					text:'Переданные принятые (НУ)',
					width:'100',
					dataIndex:'ПереданныеПринятыеНУ',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетКомиссионераОПродажах/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
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
						name:'ЕдиницаМест',
					},
					{
						name:'КоэффициентМест',
					},
					{
						name:'КоличествоМест',
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
						name:'Сумма',
					},
					{
						name:'ЦенаПередачи',
					},
					{
						name:'СуммаПередачи',
					},
					{
						name:'СуммаНДСПередачи',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаНДС',
					},
					{
						name:'СуммаВознаграждения',
					},
					{
						name:'СуммаНДСВознаграждения',
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
						name:'ПереданныеПринятыеБУ',
					},
					{
						name:'СчетУчетаНУ',
					},
					{
						name:'ПереданныеПринятыеНУ',
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
						name:'СчетДоходовНУ',
					},
					{
						name:'СубконтоНУ',
					},
					{
						name:'СчетРасходовНУ',
					},
					{
						name:'ПринадлежностьНоменклатуры',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:104px;width:634px;height:24px;',
			items:
			[
				{
					text:'Заполнить по инвентаризации',
				},
				{
					text:'Заполнить по договору',
				},
				{
					text:'Заполнить по реализации',
				},
				{
					text:'Добавить из реализации',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:634px;height:74px;',
			height: 74,width: 634,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Покупатель',
					width:'133',
					dataIndex:'Покупатель',
					flex:1,
				},
				{
					text:'Всего',
					width:'87',
					dataIndex:'Всего',
					flex:1,
				},
				{
					text:'Выставлен счет-фактура',
					width:'110',
					dataIndex:'ВыставленСФ',
					flex:1,
				},
				{
					text:'Дата счета-фактуры',
					width:'106',
					dataIndex:'ДатаСФ',
					flex:1,
				},
				{
					text:'Счет фактура',
					width:'161',
					dataIndex:'СчетФактура',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетКомиссионераОПродажах/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Покупатель',
					},
					{
						name:'Всего',
					},
					{
						name:'ВыставленСФ',
					},
					{
						name:'ДатаСФ',
					},
					{
						name:'СчетФактура',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:634px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Денежные средства',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Счет учета расчетов за товары:',
			style: 'position:absolute;left:6px;top:6px;width:244px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Ном-ная группа:',
			style: 'position:absolute;left:6px;top:6px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:634px;height:230px;',
			height: 230,width: 634,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид отчета по платежам',
					width:'220',
					dataIndex:'ВидОтчетаПоПлатежам',
					flex:1,
				},
				{
					text:'Покупатель',
					width:'100',
					dataIndex:'Покупатель',
					flex:1,
				},
				{
					text:'Дата события',
					width:'100',
					dataIndex:'ДатаСобытия',
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
					width:'54',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'80',
					dataIndex:'СуммаНДС',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетКомиссионераОПродажах/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидОтчетаПоПлатежам',
					},
					{
						name:'Покупатель',
					},
					{
						name:'ДатаСобытия',
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
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:634px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Учет затрат',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Подразделение',
			width: 210,
			height: 19,
			style: 'position:absolute;left:96px;top:30px;width:210px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			trigger2Cls: 'x-form-select-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПодразделениеОрганизации',
			width: 224,
			height: 19,
			style: 'position:absolute;left:416px;top:30px;width:224px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'НоменклатурнаяГруппа',
			width: 210,
			height: 19,
			style: 'position:absolute;left:96px;top:6px;width:210px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СтатьяЗатрат',
			width: 224,
			height: 19,
			style: 'position:absolute;left:416px;top:6px;width:224px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Субконто1',
			width: 210,
			height: 19,
			style: 'position:absolute;left:96px;top:83px;width:210px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Субконто2',
			width: 210,
			height: 19,
			style: 'position:absolute;left:96px;top:107px;width:210px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Субконто3',
			width: 210,
			height: 19,
			style: 'position:absolute;left:96px;top:131px;width:210px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетУчетаЗатрат',
			width: 100,
			height: 19,
			style: 'position:absolute;left:96px;top:59px;width:100px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетУчетаЗатратНУ',
			width: 102,
			height: 19,
			style: 'position:absolute;left:416px;top:59px;width:102px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СубконтоНУ1',
			width: 224,
			height: 19,
			style: 'position:absolute;left:416px;top:83px;width:224px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СубконтоНУ2',
			width: 224,
			height: 19,
			style: 'position:absolute;left:416px;top:107px;width:224px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СубконтоНУ3',
			width: 224,
			height: 19,
			style: 'position:absolute;left:416px;top:131px;width:224px;height:19px;',
		},
					]
				},
				{
					title:'Счета учета расчетов',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:12px;top:99px;width:99px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СчетУчетаРасчетовСКонтрагентом',
			width: 80,
			height: 19,
			style: 'position:absolute;left:252px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Счет учета расчетов по авансам полученным:',
			style: 'position:absolute;left:6px;top:29px;width:244px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СчетУчетаРасчетовПоАвансамПолученным',
			width: 80,
			height: 19,
			style: 'position:absolute;left:252px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СчетУчетаРасчетовЗаПосредническиеУслуги',
			width: 80,
			height: 19,
			style: 'position:absolute;left:252px;top:52px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СчетУчетаРасчетовПоАвансамВыданным',
			width: 80,
			height: 19,
			style: 'position:absolute;left:252px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СчетУчетаНДС',
			width: 80,
			height: 19,
			style: 'position:absolute;left:252px;top:98px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Статья затрат:',
			style: 'position:absolute;left:326px;top:6px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоДокументу',
			text: 'Всего по документу:',
			style: 'position:absolute;left:6px;top:190px;width:105px;height:18px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВходящаяДата',
			text: 'Вх. дата:',
			style: 'position:absolute;left:328px;top:27px;width:77px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 189,
			height: 19,
			style: 'position:absolute;left:115px;top:99px;width:189px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:6px;width:633px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:7px;top:78px;width:633px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерВходящегоДокумента',
			width: 206,
			height: 19,
			style: 'position:absolute;left:98px;top:27px;width:206px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаВходящегоДокумента',
			width: 80,
			height: 19,
			style: 'position:absolute;left:411px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:98px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Проект',
			width: 219,
			height: 19,
			style: 'position:absolute;left:421px;top:99px;width:219px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:328px;top:99px;width:90px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Грузоотправитель',
			width: 189,
			height: 19,
			style: 'position:absolute;left:115px;top:128px;width:189px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрузополучатель',
			text: 'Грузополучатель:',
			style: 'position:absolute;left:328px;top:128px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Грузополучатель',
			width: 219,
			height: 19,
			style: 'position:absolute;left:421px;top:128px;width:219px;height:19px;',
		},
					]
				},
				{
					title:'Предоплата',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Счет учета расчетов за посреднические услуги:',
			style: 'position:absolute;left:6px;top:52px;width:244px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:30px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:634px;height:152px;',
			height: 152,width: 634,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'221',
					dataIndex:'ДокументРасчетовСКонтрагентом',
					flex:1,
				},
				{
					text:'Дата оплаты',
					width:'116',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
				{
					text:'Сумма взаиморасчетов',
					width:'100',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма регл',
					width:'100',
					dataIndex:'СуммаРегл',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетКомиссионераОПродажах/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДокументРасчетовСКонтрагентом',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'СуммаВзаиморасчетов',
					},
					{
						name:'СуммаРегл',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Заполнить по заказам документа',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПоДокументуВал',
			width: 134,
			height: 17,
			style: 'position:absolute;left:161px;top:190px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПоДокументуРегл',
			width: 134,
			height: 17,
			style: 'position:absolute;left:323px;top:190px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредоплатаВал',
			width: 134,
			height: 17,
			style: 'position:absolute;left:161px;top:211px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредоплатаРегл',
			width: 134,
			height: 17,
			style: 'position:absolute;left:323px;top:211px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОстатокРегл',
			width: 134,
			height: 17,
			style: 'position:absolute;left:323px;top:237px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОстатокВал',
			width: 134,
			height: 17,
			style: 'position:absolute;left:161px;top:237px;width:134px;height:17px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:334px;top:81px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ДоговорКонтрагента',
			width: 236,
			height: 19,
			style: 'position:absolute;left:420px;top:81px;width:236px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Контрагент',
			width: 220,
			height: 19,
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
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
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Сделка',
			width: 220,
			height: 19,
			style: 'position:absolute;left:94px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Сделка:\r\n',
			style: 'position:absolute;left:8px;top:100px;width:84px;height:29px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкаНДСВознаграждения',
			text: 'НДС возн.:',
			style: 'position:absolute;left:162px;top:128px;width:84px;height:19px;text-align:center;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СтавкаНДСВознаграждения',
			width: 64,
			height: 19,
			style: 'position:absolute;left:250px;top:128px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьТоварыИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:8px;top:434px;width:235px;height:37px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:334px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьДолга',
			text: 'По договору 250 USD, 1 USD = 30 руб.',
			style: 'position:absolute;left:334px;top:57px;width:303px;height:19px;text-align:right;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:641px;top:57px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:251px;top:434px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Всего',
			style: 'position:absolute;left:326px;top:434px;width:92px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:251px;top:454px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:326px;top:454px;width:92px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРасчетаКомиссионногоВознаграждения',
			text: 'Способ расчета:',
			style: 'position:absolute;left:334px;top:105px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СпособРасчетаКомиссионногоВознаграждения',
			width: 236,
			height: 19,
			style: 'position:absolute;left:420px;top:105px;width:236px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВознаграждения',
			text: 'Сумма вознаграждения:',
			style: 'position:absolute;left:435px;top:434px;width:128px;height:17px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВсегоВознаграждения',
			style: 'position:absolute;left:564px;top:434px;width:92px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДСВознаграждения',
			text: 'Сумма НДС возн.:',
			style: 'position:absolute;left:435px;top:454px;width:128px;height:17px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаНДСВознаграждения',
			style: 'position:absolute;left:564px;top:454px;width:92px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентКомиссионногоВознаграждения',
			text: 'Процент возн.:',
			style: 'position:absolute;left:8px;top:128px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентКомиссионногоВознаграждения',
			style: 'position:absolute;left:94px;top:128px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаСчетФактураПолученный',
			text: 'Ввести счет-фактуру',
			style: 'position:absolute;left:226px;top:475px;width:430px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактура1',
			text: 'Счет-фактура на сумму вознаграждения:',
			style: 'position:absolute;left:8px;top:475px;width:216px;height:15px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:522px;width:664px;height:25px;',
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
			style: 'position:absolute;left:576px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Удержать комиссионное вознаграждение',
			style: 'position:absolute;left:334px;top:132px;width:240px;height:15px;',
		},
	],
	dockedItems:
	[
	]
});