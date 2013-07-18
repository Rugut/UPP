Ext.require(['Данные.Отчеты.ВыпускПродукцииСКД'], function () 
{
	Ext.define('Отчеты.ВыпускПродукцииСКД.ФормаОтчета',
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