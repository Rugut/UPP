Ext.require(['Данные.Документы.ЗапросНаИнформационноеОбслуживаниеНалогоплательщика'], function () 
{
	Ext.define('Документы.ЗапросНаИнформационноеОбслуживаниеНалогоплательщика.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:97px;',
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