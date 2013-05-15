Ext.define('Обработки.КонсольОтчетов.ФормаВыбораОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор отчета для расшифровки',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:7px;width:384px;height:252px;',
			height: 252,width: 384,
			columns:
			[
				{
					text:'Отчет',
					width:'100',
					dataIndex:'Отчет',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонсольОтчетов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Отчет',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:400px;height:25px;',
			dock: 'bottom',
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
	]
});