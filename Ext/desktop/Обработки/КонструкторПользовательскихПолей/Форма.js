Ext.define('Обработки.КонструкторПользовательскихПолей.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Пользовательские поля',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:384px;height:227px;',
			height: 227,width: 384,
			columns:
			[
				{
					text:'Пользовательские поля',
					width:'100',
					dataIndex:'Заголовок',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторПользовательскихПолей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Заголовок',
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
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Формула',
				},
			]
		},
	]
});