Ext.require(['Данные.Справочники.Валюты'], function () 
{
	Ext.define('Справочники.Валюты.ФормаПодбораИзКлассификатора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:696px;height:396px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Общероссийский классификатор валют',
	
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