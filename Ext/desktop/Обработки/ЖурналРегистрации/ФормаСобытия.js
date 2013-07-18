Ext.require(['Данные.Обработки.ЖурналРегистрации'], function () 
{
	Ext.define('Обработки.ЖурналРегистрации.ФормаСобытия',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:100px;height:0px;',
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