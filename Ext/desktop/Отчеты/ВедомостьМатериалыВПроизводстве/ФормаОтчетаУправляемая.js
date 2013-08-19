Ext.require(['Данные.Отчеты.ВедомостьМатериалыВПроизводстве'], function () 
{
	Ext.define('Отчеты.ВедомостьМатериалыВПроизводстве.ФормаОтчетаУправляемая',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:0px;height:0px;',
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