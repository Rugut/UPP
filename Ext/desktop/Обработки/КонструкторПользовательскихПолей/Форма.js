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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:400px;height:25px;',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:24px;',
			items:
			[
				{
					text:'Формула',
				},
			]
		},
	]
});