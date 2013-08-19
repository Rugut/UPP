Ext.require(['Данные.Справочники.ДокументыРеализацииПолномочийНалоговыхОрганов'], function () 
{
	Ext.define('Справочники.ДокументыРеализацииПолномочийНалоговыхОрганов.ФормаЭлемента',
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