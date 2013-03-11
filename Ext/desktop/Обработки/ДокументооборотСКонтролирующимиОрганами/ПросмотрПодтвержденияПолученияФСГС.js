Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПросмотрПодтвержденияПолученияФСГС',
	{
	extend: 'Ext.window.Window',
	height: 291,width: 473,
	iconCls: 'bogus',
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
					text:'ИмяФайла',
				},
				{
					text:'Идентификатор',
				},
				{
					text:'ТранспортноеСообщение',
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
					text:'ИмяФайла',
				},
				{
					text:'Идентификатор',
				},
				{
					text:'ТранспортноеСообщение',
				},
			]
		},
					]
				},
			]
		},
	]
});