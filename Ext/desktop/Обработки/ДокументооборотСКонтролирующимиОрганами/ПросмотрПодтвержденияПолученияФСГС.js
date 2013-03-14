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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:266px;width:473px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
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
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:20px;width:457px;height:230px;',
			height: 230,width: 457,
			columns:
			[
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Идентификатор',
					width:'100',
				},
				{
					text:'Транспортное сообщение',
					width:'141',
				},
			]
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
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:457px;height:229px;',
			height: 229,width: 457,
			columns:
			[
				{
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Идентификатор',
					width:'100',
				},
				{
					text:'Транспортное сообщение',
					width:'141',
				},
			]
		},
					]
				},
			]
		},
	]
});