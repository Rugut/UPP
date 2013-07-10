Ext.define('Отчеты.ПоказателиРаботыМенеджеров.ФормаРасшифровок',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:569px;height:394px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет  Показатели работы менеджеров',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:569px;height:24px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Заголовок',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
			]
		},
	]
});