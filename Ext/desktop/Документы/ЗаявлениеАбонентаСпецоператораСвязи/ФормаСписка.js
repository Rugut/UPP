Ext.require(['Данные.Документы.ЗаявлениеАбонентаСпецоператораСвязи'], function () 
{
	Ext.define('Документы.ЗаявлениеАбонентаСпецоператораСвязи.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Список заявлений абонентов спецоператоров связи',
	
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