Ext.define('Справочники.НастройкиВыполненияОбмена.ВыборДействий',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:256px;height:266px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор действий',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:240px;height:225px;',
			height: 225,width: 240,
			columns:
			[
				{
					text:'Действие',
					width:'241',
					dataIndex:'Действие',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиВыполненияОбмена/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Действие',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:241px;width:256px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Отмена',
				},
				{
					text:'ОК',
				},
			]
		},
	]
});