Ext.require(['Данные.Справочники.ТипыЦенНоменклатуры'], function () 
{
	Ext.define('Справочники.ТипыЦенНоменклатуры.ФормаВыбораУправляемая',
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