Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПросмотрПодтвержденияПолученияФСГС',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:473px;height:291px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Извещение о получении',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:457px;height:250px;',
			height: 250,width: 457,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:20px;width:457px;height:230px;',
			height: 230,width: 457,
			columns:
			[
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Идентификатор',
					width:'100',
					dataIndex:'Идентификатор',
					flex:1,
				},
				{
					text:'Транспортное сообщение',
					width:'141',
					dataIndex:'ТранспортноеСообщение',
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
						name:'ИмяФайла',
					},
					{
						name:'Идентификатор',
					},
					{
						name:'ТранспортноеСообщение',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Было получено следующее содержимое:',
			style: 'position:absolute;left:0px;top:0px;width:457px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:457px;height:250px;',
			height: 250,width: 457,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Протоколы входного контроля отчетности',
			style: 'position:absolute;left:0px;top:0px;width:457px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:457px;height:229px;',
			height: 229,width: 457,
			columns:
			[
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Идентификатор',
					width:'100',
					dataIndex:'Идентификатор',
					flex:1,
				},
				{
					text:'Транспортное сообщение',
					width:'141',
					dataIndex:'ТранспортноеСообщение',
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
						name:'ИмяФайла',
					},
					{
						name:'Идентификатор',
					},
					{
						name:'ТранспортноеСообщение',
					},
				]
			},
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:266px;width:473px;height:25px;',
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
	]
});