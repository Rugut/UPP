Ext.require(['Данные.Справочники.ОснованияУвольненияИзОрганизации'], function () 
{
	Ext.define('Справочники.ОснованияУвольненияИзОрганизации.ФормаПодбораИзКлассификатора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:400px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Основания увольнения (статьи ТК РФ)',
	
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