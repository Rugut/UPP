Ext.define('Документы.ПеремещениеМатериаловВЭксплуатации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:384px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Перемещение материалов в эксплуатации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:332px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
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
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 548,
			height: 19,
			style: 'position:absolute;left:96px;top:332px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
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
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:424px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:498px;top:33px;width:69px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:82px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Подразделение',
			width: 220,
			height: 19,
			style: 'position:absolute;left:96px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:307px;width:88px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 548,
			height: 19,
			style: 'position:absolute;left:96px;top:307px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:359px;width:652px;height:25px;',
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
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:336px;top:80px;width:88px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			trigger2Cls: 'x-form-select-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПодразделениеОрганизации',
			width: 220,
			height: 19,
			style: 'position:absolute;left:424px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:571px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:114px;width:636px;height:182px;',
			height: 182,width: 636,
			items:
			[
				{
					title:'Материалы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:622px;height:124px;',
			height: 124,width: 622,
			columns:
			[
				{
					text:'№',
					width:'30',
					dataIndex:'НомерCтроки',
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
					text:'Материал',
					width:'200',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика материала',
					width:'200',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия материала',
					width:'200',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Работник',
					width:'100',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Назначение использования',
					width:'100',
					dataIndex:'НазначениеИспользования',
					flex:1,
				},
				{
					text:'Ед. мест',
					width:'50',
					dataIndex:'ЕдиницаМест',
					flex:1,
				},
				{
					text:'К.мест',
					width:'45',
					dataIndex:'КоэффициентМест',
					flex:1,
				},
				{
					text:'Мест',
					width:'67',
					dataIndex:'КоличествоМест',
					flex:1,
				},
				{
					text:'Количество',
					width:'67',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед.',
					width:'50',
					dataIndex:'Единица',
					flex:1,
				},
				{
					text:'К.',
					width:'45',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Тип стоимости',
					width:'100',
					dataIndex:'ТипСтоимости',
					flex:1,
				},
				{
					text:'Цена',
					width:'62',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Сумма',
					width:'76',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Сумма (регл.)',
					width:'78',
					dataIndex:'СуммаРегл',
					flex:1,
				},
				{
					text:'Счет учета (БУ)',
					width:'82',
					dataIndex:'СчетУчетаБУ',
					flex:1,
				},
				{
					text:'Счет учета (НУ)',
					width:'82',
					dataIndex:'СчетУчетаНУ',
					flex:1,
				},
				{
					text:'Документ передачи',
					width:'100',
					dataIndex:'ДокументПередачи',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПеремещениеМатериаловВЭксплуатации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерCтроки',
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
						name:'ФизЛицо',
					},
					{
						name:'НазначениеИспользования',
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
						name:'Единица',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'ТипСтоимости',
					},
					{
						name:'Цена',
					},
					{
						name:'Сумма',
					},
					{
						name:'СуммаРегл',
					},
					{
						name:'СчетУчетаБУ',
					},
					{
						name:'СчетУчетаНУ',
					},
					{
						name:'ДокументПередачи',
					},
				]
			},
		},
					]
				},
				{
					title:'Получатели',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:622px;height:125px;',
			height: 125,width: 622,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Материал',
					width:'147',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика материала',
					width:'106',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия материала',
					width:'111',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Количество',
					width:'53',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'100',
					dataIndex:'ПодразделениеПолучатель',
					flex:1,
				},
				{
					text:'Подразделение организации',
					width:'100',
					dataIndex:'ПодразделениеОрганизацииПолучатель',
					flex:1,
				},
				{
					text:'Работник',
					width:'112',
					dataIndex:'ФизЛицоПолучатель',
					flex:1,
				},
				{
					text:'Назначение использования',
					width:'116',
					dataIndex:'НазначениеИспользованияПолучатель',
					flex:1,
				},
				{
					text:'Счет учета (БУ)',
					width:'82',
					dataIndex:'СчетУчетаПолучательБУ',
					flex:1,
				},
				{
					text:'Счет учета (НУ)',
					width:'82',
					dataIndex:'СчетУчетаПолучательНУ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПеремещениеМатериаловВЭксплуатации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
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
						name:'ПодразделениеПолучатель',
					},
					{
						name:'ПодразделениеОрганизацииПолучатель',
					},
					{
						name:'ФизЛицоПолучатель',
					},
					{
						name:'НазначениеИспользованияПолучатель',
					},
					{
						name:'СчетУчетаПолучательБУ',
					},
					{
						name:'СчетУчетаПолучательНУ',
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