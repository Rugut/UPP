Ext.require(['Данные.Справочники.ТипыЦенНоменклатурыКонтрагентов'], function () 
{
	Ext.define('Справочники.ТипыЦенНоменклатурыКонтрагентов.ФормаСпискаУправляемая',
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