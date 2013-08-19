Ext.require(['Данные.Обработки.ПомощникНастройкиОбменаДаннымиСРозничнойТорговлей'], function () 
{
	Ext.define('Обработки.ПомощникНастройкиОбменаДаннымиСРозничнойТорговлей.ФормаПомощи',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:750px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
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