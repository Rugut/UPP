Ext.require(['Данные.Отчеты.ПоказателиРаботыМенеджеров'], function () 
{
	Ext.define('Отчеты.ПоказателиРаботыМенеджеров.ФормаРасшифровок',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:569px;height:394px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отчет  Показатели работы менеджеров',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:569px;height:24px;',
			width: 569,
			height: 24,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Заголовок',
					tooltip:'Заголовок',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});