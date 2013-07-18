Ext.require(['Данные.Справочники.КомпетенцииРаботников'], function () 
{
	Ext.define('Справочники.КомпетенцииРаботников.ФормаВыбораПримеровКомпетенций',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:441px;height:360px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Примеры компетенций (критериев оценки)',
	
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