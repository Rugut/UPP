Ext.define('Справочники.СтатьиБюджета.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:644px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Статьи бюджета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:462px;height:259px;',
			height: 259,width: 462,
			columns:
			[
				{
					text:'',
					width:'32',
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
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Статья оборотов',
					width:'120',
					dataIndex:'СтатьяОборотов',
					flex:1,
				},
				{
					text:'Знак',
					width:'48',
					dataIndex:'Знак',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СтатьиБюджета/ВыбратьПоСсылке/100'},
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
					{
						name:'СтатьяОборотов',
					},
					{
						name:'Знак',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:259px;',
			height: 259,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'211',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СтатьиБюджета/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:644px;height:25px;',
			items:
			[
				{
					text:'Переместить вверх',
				},
				{
					text:'Переместить вниз',
				},
			]
		},
	]
});