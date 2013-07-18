Ext.require(['Данные.Справочники.ЭДПрисоединенныеФайлы'], function () 
{
	Ext.define('Справочники.ЭДПрисоединенныеФайлы.ФормаСписка',
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