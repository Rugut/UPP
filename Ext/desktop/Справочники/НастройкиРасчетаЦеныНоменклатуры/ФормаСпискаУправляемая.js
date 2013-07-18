Ext.require(['Данные.Справочники.НастройкиРасчетаЦеныНоменклатуры'], function () 
{
	Ext.define('Справочники.НастройкиРасчетаЦеныНоменклатуры.ФормаСпискаУправляемая',
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