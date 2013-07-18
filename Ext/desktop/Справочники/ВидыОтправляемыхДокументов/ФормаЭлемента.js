Ext.require(['Данные.Справочники.ВидыОтправляемыхДокументов'], function () 
{
	Ext.define('Справочники.ВидыОтправляемыхДокументов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:326px;height:130px;',
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