Ext.define('Документы.ПланЗакупок.ФормаФормированиеЗаказовПоставщикам',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Формирование заказов поставщикам',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:624px;height:439px;',
			height: 439,width: 624,
			items:
			[
				{
					title:'Потребности',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:610px;height:383px;',
			height: 383,width: 610,
			columns:
			[
				{
					text:' Поставщик. Номенклатура.',
					width:'154',
					dataIndex:'ПоставщикНоменклатура',
					flex:1,
				},
				{
					text:' Характеристика',
					width:'100',
					dataIndex:'Характеристика',
					flex:1,
				},
				{
					text:' Цена',
					width:'100',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:' Требуемое кол.',
					width:'100',
					dataIndex:'ТребуемоеКоличество',
					flex:1,
				},
				{
					text:' Заказанное кол.',
					width:'100',
					dataIndex:'ЗаказанноеКоличество',
					flex:1,
				},
				{
					text:' Заказать кол.',
					width:'100',
					dataIndex:'ЗаказатьКоличество',
					flex:1,
				},
				{
					text:' Заказ',
					width:'100',
					dataIndex:'Заказ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланЗакупок/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПоставщикНоменклатура',
					},
					{
						name:'Характеристика',
					},
					{
						name:'Цена',
					},
					{
						name:'ТребуемоеКоличество',
					},
					{
						name:'ЗаказанноеКоличество',
					},
					{
						name:'ЗаказатьКоличество',
					},
					{
						name:'Заказ',
					},
				]
			},
		},
					]
				},
				{
					title:'Заказы поставщикам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:610px;height:383px;',
			height: 383,width: 610,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'ДокументПроведен',
					flex:1,
				},
				{
					text:'Документ',
					width:'220',
					dataIndex:'Документ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланЗакупок/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ДокументПроведен',
					},
					{
						name:'Документ',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:640px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});