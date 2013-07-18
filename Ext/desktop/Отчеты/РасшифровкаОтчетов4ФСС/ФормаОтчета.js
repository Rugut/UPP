Ext.require(['Данные.Отчеты.РасшифровкаОтчетов4ФСС'], function () 
{
	Ext.define('Отчеты.РасшифровкаОтчетов4ФСС.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:694px;height:464px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет',
	
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