Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПросмотрПодтвержденияПолученияПисьмаПФР',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:473px;height:59px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подтверждение получения',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:34px;width:473px;height:25px;',
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
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата и время получения:',
			style: 'position:absolute;left:8px;top:8px;width:206px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: '',
			style: 'position:absolute;left:218px;top:9px;width:247px;height:17px;',
		},
	]
});