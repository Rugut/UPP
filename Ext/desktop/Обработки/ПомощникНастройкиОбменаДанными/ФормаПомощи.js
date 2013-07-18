Ext.require(['Данные.Обработки.ПомощникНастройкиОбменаДанными'], function () 
{
	Ext.define('Обработки.ПомощникНастройкиОбменаДанными.ФормаПомощи',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:750px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Дополнительная информация',
	
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