Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормаВыбораКБК',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:597px;height:408px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор КБК',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:581px;height:367px;',
			height: 367,width: 581,
			columns:
			[
				{
					text:'КБК',
					width:'171',
					dataIndex:'КБК',
					flex:1,
				},
				{
					text:'Наименование дохода',
					width:'230',
					dataIndex:'НаименованиеДохода',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'КБК',
					},
					{
						name:'НаименованиеДохода',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:383px;width:597px;height:25px;',
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
					text:'Отмена',
				},
			]
		},
	]
});