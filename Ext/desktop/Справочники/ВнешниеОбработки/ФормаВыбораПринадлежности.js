Ext.define('Справочники.ВнешниеОбработки.ФормаВыбораПринадлежности',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:425px;height:435px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Принадлежность печатной формы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:410px;width:425px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:409px;height:394px;',
			height: 394,width: 409,
			items:
			[
				{
					title:'Документы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:395px;height:362px;',
			height: 362,width: 395,
			columns:
			[
				{
					text:'',
					width:'0',
					dataIndex:'',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВнешниеОбработки/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'',
					},
				]
			},
		},
					]
				},
				{
					title:'Справочники',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:395px;height:362px;',
			height: 362,width: 395,
			columns:
			[
				{
					text:'',
					width:'0',
					dataIndex:'',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВнешниеОбработки/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'',
					},
				]
			},
		},
					]
				},
				{
					title:'Отчеты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:395px;height:362px;',
			height: 362,width: 395,
			columns:
			[
				{
					text:'',
					width:'0',
					dataIndex:'',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВнешниеОбработки/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'',
					},
				]
			},
		},
					]
				},
			]
		},
	]
});