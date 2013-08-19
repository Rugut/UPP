Ext.require(['Данные.Справочники.ПодключаемоеОборудование'], function () 
{
	Ext.define('Справочники.ПодключаемоеОборудование.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:0px;height:0px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
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