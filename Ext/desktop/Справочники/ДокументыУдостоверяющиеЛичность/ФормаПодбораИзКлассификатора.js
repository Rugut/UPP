Ext.require(['Данные.Справочники.ДокументыУдостоверяющиеЛичность'], function () 
{
	Ext.define('Справочники.ДокументыУдостоверяющиеЛичность.ФормаПодбораИзКлассификатора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:400px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Документы, удостоверяющие личность',
	
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