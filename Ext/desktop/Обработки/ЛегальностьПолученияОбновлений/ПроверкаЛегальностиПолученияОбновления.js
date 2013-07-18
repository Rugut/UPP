Ext.require(['Данные.Обработки.ЛегальностьПолученияОбновлений'], function () 
{
	Ext.define('Обработки.ЛегальностьПолученияОбновлений.ПроверкаЛегальностиПолученияОбновления',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:75px;height:0px;',
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