Ext.require(['Данные.Справочники.КлассификаторСпециальностейПоОбразованию'], function () 
{
	Ext.define('Справочники.КлассификаторСпециальностейПоОбразованию.ФормаПодбораИзКлассификатора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:696px;height:396px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Классификатор специальностей по образованию (ОКСО)',
	
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