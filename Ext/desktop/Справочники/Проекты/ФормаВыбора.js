Ext.define('Справочники.Проекты.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:540px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Проекты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:186px;top:33px;width:346px;height:259px;',
			height: 259,width: 346,
			columns:
			[
				{
					text:'',
					width:'35',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'81',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Проекты/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:172px;height:259px;',
			height: 259,width: 172,
			columns:
			[
				{
					text:'Наименование',
					width:'163',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Проекты/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:540px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
			]
		},
	]
});