Ext.require(['Данные.Обработки.ОбновлениеКонфигурации'], function () 
{
	Ext.define('Обработки.ОбновлениеКонфигурации.НастройкаРезервнойКопии',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:0px;height:0px;',
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