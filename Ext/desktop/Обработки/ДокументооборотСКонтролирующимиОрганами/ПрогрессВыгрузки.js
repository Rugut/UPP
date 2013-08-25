Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПрогрессВыгрузки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:620px;height:90px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Выгрузка архива документооборота',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Цикл обмена:',
			style: 'position:absolute;left:8px;top:8px;width:77px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'ЦиклОбмена',
			text: 'ЦиклОбмена',
			style: 'position:absolute;left:91px;top:8px;width:521px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Сообщение:',
			style: 'position:absolute;left:8px;top:29px;width:77px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Сообщение',
			text: 'Сообщение',
			style: 'position:absolute;left:91px;top:29px;width:521px;height:16px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:52px;width:604px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
	]
	});
});