Ext.require(['Данные.Документы.ЗаявлениеАбонентаСпецоператораСвязи'], function () 
{
	Ext.define('Документы.ЗаявлениеАбонентаСпецоператораСвязи.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:338px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Заявление абонента Спецоператора Связи',
	
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