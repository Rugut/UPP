Ext.require(['Данные.Обработки.ЖурналРегистрации'], function () 
{
	Ext.define('Обработки.ЖурналРегистрации.ОтборЖурналаРегистрации',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:90px;height:0px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
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