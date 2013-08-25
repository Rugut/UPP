Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПросмотрПодтвержденияПолученияПисьмаПФР',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:473px;height:59px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Подтверждение получения',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата и время получения:',
			style: 'position:absolute;left:8px;top:8px;width:206px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: 'Надпись40',
			style: 'position:absolute;left:218px;top:9px;width:247px;height:17px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:34px;width:473px;height:25px;',
			width: 473,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});