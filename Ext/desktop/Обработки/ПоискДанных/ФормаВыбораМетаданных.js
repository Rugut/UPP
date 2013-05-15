Ext.define('Обработки.ПоискДанных.ФормаВыбораМетаданных',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:365px;height:410px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор объектов поиска',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:385px;width:365px;height:25px;',
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
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:349px;height:369px;',
			height: 369,width: 349,
			columns:
			[
				{
					text:'Колонка1',
					width:'21',
					dataIndex:'Колонка1',
					flex:1,
				},
				{
					text:'Тип метаданного',
					width:'21',
					dataIndex:'КолонкаКартинки',
					flex:1,
				},
				{
					text:'Колонка2',
					width:'403',
					dataIndex:'Колонка2',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоискДанных/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Колонка1',
					},
					{
						name:'КолонкаКартинки',
					},
					{
						name:'Колонка2',
					},
				]
			},
		},
	],
	dockedItems:
	[
	]
});