Ext.require(['Данные.Документы.НеформализованныйДокументНалоговогоОргана'], function () 
{
	Ext.define('Документы.НеформализованныйДокументНалоговогоОргана.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:326px;height:130px;',
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