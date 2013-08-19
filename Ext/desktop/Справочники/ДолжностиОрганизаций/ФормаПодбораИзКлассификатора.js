Ext.require(['Данные.Справочники.ДолжностиОрганизаций'], function () 
{
	Ext.define('Справочники.ДолжностиОрганизаций.ФормаПодбораИзКлассификатора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:696px;height:396px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Классификатор профессий и должностей. Раздел ""Должности служащих"" ',
	
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