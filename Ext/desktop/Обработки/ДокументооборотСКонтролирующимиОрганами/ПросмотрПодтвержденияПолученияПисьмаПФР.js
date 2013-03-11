Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПросмотрПодтвержденияПолученияПисьмаПФР',
	{
	extend: 'Ext.window.Window',
	height: 59,width: 473,
	iconCls: 'bogus',
	title: 'Подтверждение получения',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:34px;width:473px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
	]
});