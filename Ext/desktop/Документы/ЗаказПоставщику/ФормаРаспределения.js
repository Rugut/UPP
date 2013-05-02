Ext.define('Документы.ЗаказПоставщику.ФормаРаспределения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заполнение комплектующих для комплектов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:400px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:384px;height:229px;',
			height: 229,width: 384,
			columns:
			[
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'108',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Не размещено',
					width:'100',
					dataIndex:'НеРазмещено',
					flex:1,
				},
				{
					text:'Заполнить как комплектующие',
					width:'100',
					dataIndex:'Заполняем',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаказПоставщику/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'НеРазмещено',
					},
					{
						name:'Заполняем',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:6px;width:384px;height:24px;',
			items:
			[
				{
					text:'Изменить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Заполнить все',
				},
				{
					text:'Не заполнять ничего',
				},
			]
		},
	]
});