Ext.define('Обработки.ПечатьЦенников.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:461px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Печать ценников',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:210px;width:764px;height:217px;',
			height: 217,width: 764,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Печать',
					flex:1,
				},
				{
					text:'N',
					width:'31',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'224',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'189',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Ед. изм.',
					width:'58',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Цена',
					width:'89',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Количество',
					width:'66',
					dataIndex:'Количество',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПечатьЦенников/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Печать',
					},
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
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Цена',
					},
					{
						name:'Количество',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьТипЦен',
			text: 'Тип цен:',
			style: 'position:absolute;left:341px;top:33px;width:44px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ТипЦен',
			width: 236,
			height: 19,
			style: 'position:absolute;left:390px;top:33px;width:236px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:111px;width:764px;height:69px;',
			height: 69,width: 764,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПечатьЦенников/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
					},
				]
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только имеющиеся в наличии',
			style: 'position:absolute;left:8px;top:72px;width:233px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Отбор',
			style: 'position:absolute;left:8px;top:53px;width:764px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:186px;width:764px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:435px;width:780px;height:25px;',
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
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Валюта',
			width: 92,
			height: 19,
			style: 'position:absolute;left:680px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалюта',
			text: 'Валюта:',
			style: 'position:absolute;left:632px;top:33px;width:43px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 244,
			height: 19,
			style: 'position:absolute;left:83px;top:33px;width:244px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:70px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:87px;width:764px;height:24px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});