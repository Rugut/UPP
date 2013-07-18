Ext.require(['Данные.Отчеты.ВыпускПродукцииИУслуг'], function () 
{
	Ext.define('Отчеты.ВыпускПродукцииИУслуг.ФормаОтчетаУправляемая',
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