Ext.require(['Данные.Справочники.КлассификаторСтранМира'], function () 
{
	Ext.define('Справочники.КлассификаторСтранМира.ФормаПодбораИзКлассификатора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:400px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Общероссийский классификатор стран мира',
	
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