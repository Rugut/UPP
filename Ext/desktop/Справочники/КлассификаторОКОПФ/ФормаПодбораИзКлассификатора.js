Ext.require(['Данные.Справочники.КлассификаторОКОПФ'], function () 
{
	Ext.define('Справочники.КлассификаторОКОПФ.ФормаПодбораИзКлассификатора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:716px;height:416px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Общероссийский классификатор организационно-правовых форм',
	
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