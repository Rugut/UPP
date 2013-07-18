Ext.require(['Данные.Обработки.ЭлектронныеДокументы'], function () 
{
	Ext.define('Обработки.ЭлектронныеДокументы.ДеревоЭД',
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