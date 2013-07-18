Ext.require(['Данные.Документы.РасчетСебестоимостиВыпуска'], function () 
{
	Ext.define('Документы.РасчетСебестоимостиВыпуска.ФормаДокументаУправляемая',
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