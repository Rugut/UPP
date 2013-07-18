Ext.require(['Данные.Документы.ВыгрузкаРегламентированныхОтчетов'], function () 
{
	Ext.define('Документы.ВыгрузкаРегламентированныхОтчетов.ФормаПросмотраXML',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Просмотр XML',
	
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