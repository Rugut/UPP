Ext.require(['Данные.Обработки.РегистрацияИзмененийДляОбмена'], function () 
{
	Ext.define('Обработки.РегистрацияИзмененийДляОбмена.ФормаСообщенияОбОбычномРежиме',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:48px;height:0px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		],
	}],
	dockedItems:
	[
	]
	});
});