Ext.require(['Данные.Обработки.ЭлектронныеДокументы'], function () 
{
	Ext.define('Обработки.ЭлектронныеДокументы.ЗагрузкаРеквизитовКонтрагента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:0px;',
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