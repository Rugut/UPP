Ext.require(['Данные.Справочники.КлассификаторЕдиницИзмерения'], function () 
{
	Ext.define('Справочники.КлассификаторЕдиницИзмерения.ФормаПодбораИзКлассификатора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:716px;height:416px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Общероссийский классификатор единиц измерения',
	
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