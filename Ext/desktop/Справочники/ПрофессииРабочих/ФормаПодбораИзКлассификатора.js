Ext.require(['Данные.Справочники.ПрофессииРабочих'], function () 
{
	Ext.define('Справочники.ПрофессииРабочих.ФормаПодбораИзКлассификатора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:696px;height:396px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Классификатор профессий и должностей. Раздел ""Профессии рабочих"" ',
	
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