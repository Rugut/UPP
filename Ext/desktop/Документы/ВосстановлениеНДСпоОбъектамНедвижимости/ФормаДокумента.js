Ext.define('Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:644px;height:459px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Восстановление НДС по объектам недвижимости',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:82px;height:19px;text-align:left;',
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
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:181px;top:33px;width:16px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:203px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:58px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Организация',
			width: 227,
			height: 19,
			style: 'position:absolute;left:96px;top:58px;width:227px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:407px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 540,
			height: 19,
			style: 'position:absolute;left:96px;top:407px;width:540px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отражать восстановление в книге продаж',
			style: 'position:absolute;left:331px;top:58px;width:242px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражатьВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:331px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:419px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:82px;width:628px;height:321px;',
			height: 321,width: 628,
			items:
			[
				{
					title:'Объекты недвижимости',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:614px;height:115px;',
			height: 115,width: 614,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Объект недвижимости',
					width:'120',
					dataIndex:'ОбъектНедвижимости',
					flex:1,
				},
				{
					text:'Используется для операций не облагаемых НДС',
					width:'100',
					dataIndex:'ИспользуетсяДляОперацийНеОблагаемыхНДС',
					flex:1,
				},
				{
					text:'Дата начала использования для операций, не облагаемых НДС',
					width:'80',
					dataIndex:'ДатаНачалаИспользованияДляОпераций',
					flex:1,
				},
				{
					text:'Дата ввода в эксплуатацию (БУ)',
					width:'80',
					dataIndex:'ДатаВводаВЭксплуатациюБУ',
					flex:1,
				},
				{
					text:'Дата начала начисления амортизации (НУ)',
					width:'79',
					dataIndex:'ДатаНачисленияАмортизацииНУ',
					flex:1,
				},
				{
					text:'Стоимость объекта недвижимости (БУ)',
					width:'121',
					dataIndex:'СтоимостьОбъектаНедвижимости',
					flex:1,
				},
				{
					text:'НДС по подрядным работам',
					width:'120',
					dataIndex:'СуммаНДСПоПодряднымРаботам',
					flex:1,
				},
				{
					text:'НДС по СМР хозспособом',
					width:'120',
					dataIndex:'СуммаНДСПоСМРДляСобственногоПотребления',
					flex:1,
				},
				{
					text:'НДС по объекту недвижимости',
					width:'120',
					dataIndex:'СуммаНДСПоОбъектуНедвижимости',
					flex:1,
				},
				{
					text:'Доля выручки, не облагаемая НДС (%)',
					width:'120',
					dataIndex:'ДоляВыручкиНеОблагаемаяНДС',
					flex:1,
				},
				{
					text:'НДС по подрядным работам, восстановленная',
					width:'120',
					dataIndex:'СуммаНДСПоПодряднымРаботамВосстановлена',
					flex:1,
				},
				{
					text:'НДС по СМР хозспособом восстановлена',
					width:'120',
					dataIndex:'СуммаНДСПоСМРДляСобственногоПотребленияВосстановлена',
					flex:1,
				},
				{
					text:'НДС по объекту недвижимости, восстановлена',
					width:'120',
					dataIndex:'СуммаНДСПоОбъектуНедвижимостиВосстановлена',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВосстановлениеНДСпоОбъектамНедвижимости/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ОбъектНедвижимости',
					},
					{
						name:'ИспользуетсяДляОперацийНеОблагаемыхНДС',
					},
					{
						name:'ДатаНачалаИспользованияДляОпераций',
					},
					{
						name:'ДатаВводаВЭксплуатациюБУ',
					},
					{
						name:'ДатаНачисленияАмортизацииНУ',
					},
					{
						name:'СтоимостьОбъектаНедвижимости',
					},
					{
						name:'СуммаНДСПоПодряднымРаботам',
					},
					{
						name:'СуммаНДСПоСМРДляСобственногоПотребления',
					},
					{
						name:'СуммаНДСПоОбъектуНедвижимости',
					},
					{
						name:'ДоляВыручкиНеОблагаемаяНДС',
					},
					{
						name:'СуммаНДСПоПодряднымРаботамВосстановлена',
					},
					{
						name:'СуммаНДСПоСМРДляСобственногоПотребленияВосстановлена',
					},
					{
						name:'СуммаНДСПоОбъектуНедвижимостиВосстановлена',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:164px;width:614px;height:24px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:188px;width:614px;height:106px;',
			height: 106,width: 614,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Счет-фактура',
					width:'120',
					dataIndex:'СчетФактура',
					flex:1,
				},
				{
					text:'Вид ценности',
					width:'120',
					dataIndex:'ВидЦенности',
					flex:1,
				},
				{
					text:'Код операции (для декларации)',
					width:'120',
					dataIndex:'КодОперацииДляДекларации',
					flex:1,
				},
				{
					text:'Поставщик',
					width:'100',
					dataIndex:'Поставщик',
					flex:1,
				},
				{
					text:'Дата оплаты',
					width:'80',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
				{
					text:'Документ оплаты',
					width:'120',
					dataIndex:'ДокументОплаты',
					flex:1,
				},
				{
					text:'Сумма без НДС',
					width:'120',
					dataIndex:'СуммаБезНДС',
					flex:1,
				},
				{
					text:'% НДС',
					width:'80',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'НДС',
					width:'120',
					dataIndex:'НДС',
					flex:1,
				},
				{
					text:'Сумма без НДС, восстановлена',
					width:'120',
					dataIndex:'СуммаБезНДСВосстановлена',
					flex:1,
				},
				{
					text:'НДС, восстановлен',
					width:'120',
					dataIndex:'НДСВосстановлен',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВосстановлениеНДСпоОбъектамНедвижимости/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'СчетФактура',
					},
					{
						name:'ВидЦенности',
					},
					{
						name:'КодОперацииДляДекларации',
					},
					{
						name:'Поставщик',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'ДокументОплаты',
					},
					{
						name:'СуммаБезНДС',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'НДС',
					},
					{
						name:'СуммаБезНДСВосстановлена',
					},
					{
						name:'НДСВосстановлен',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Счета-фактуры (объект недвижимости)',
			style: 'position:absolute;left:6px;top:151px;width:614px;height:13px;',
		},
					]
				},
				{
					title:'Счета списания НДС',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДС',
			text: 'Счет:',
			style: 'position:absolute;left:6px;top:6px;width:83px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СчетСписанияНДС',
			width: 80,
			height: 19,
			style: 'position:absolute;left:105px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:6px;top:35px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:6px;top:59px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:6px;top:82px;width:83px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СубконтоСписанияНДС1',
			width: 199,
			height: 19,
			style: 'position:absolute;left:105px;top:35px;width:199px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СубконтоСписанияНДС2',
			width: 199,
			height: 19,
			style: 'position:absolute;left:105px;top:59px;width:199px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СубконтоСписанияНДС3',
			width: 199,
			height: 19,
			style: 'position:absolute;left:105px;top:82px;width:199px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДСНУ',
			text: 'Счет (НУ):',
			style: 'position:absolute;left:322px;top:6px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СчетСписанияНДСНУ',
			width: 80,
			height: 19,
			style: 'position:absolute;left:421px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ1',
			text: 'Субконто 1 (НУ):',
			style: 'position:absolute;left:322px;top:35px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СубконтоСписанияНДСНУ1',
			width: 200,
			height: 19,
			style: 'position:absolute;left:420px;top:35px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ2',
			text: 'Субконто 2 (НУ):',
			style: 'position:absolute;left:322px;top:59px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СубконтоСписанияНДСНУ2',
			width: 200,
			height: 19,
			style: 'position:absolute;left:420px;top:59px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ3',
			text: 'Субконто 3 (НУ):',
			style: 'position:absolute;left:322px;top:82px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СубконтоСписанияНДСНУ3',
			width: 200,
			height: 19,
			style: 'position:absolute;left:420px;top:82px;width:200px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:6px;top:6px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответственный',
			width: 527,
			height: 19,
			style: 'position:absolute;left:93px;top:6px;width:527px;height:19px;',
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:644px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:434px;width:644px;height:25px;',
			dock: 'bottom',
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
					text:'OK',
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
	]
});