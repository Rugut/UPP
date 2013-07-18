Ext.require(['Данные.Справочники.УчетныеЗаписиЭлектроннойПочты'], function () 
{
	Ext.define('Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаСпискаУправляемая',
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