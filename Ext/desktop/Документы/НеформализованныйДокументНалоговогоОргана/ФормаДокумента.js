Ext.require(['Данные.Документы.НеформализованныйДокументНалоговогоОргана'], function () 
{
	Ext.define('Документы.НеформализованныйДокументНалоговогоОргана.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:97px;',
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