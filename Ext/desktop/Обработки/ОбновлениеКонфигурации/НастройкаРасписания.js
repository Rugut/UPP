Ext.require(['Данные.Обработки.ОбновлениеКонфигурации'], function () 
{
	Ext.define('Обработки.ОбновлениеКонфигурации.НастройкаРасписания',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:60px;height:0px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
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