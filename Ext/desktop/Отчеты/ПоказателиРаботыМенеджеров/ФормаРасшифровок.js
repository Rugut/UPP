Ext.define('Отчеты.ПоказателиРаботыМенеджеров.ФормаРасшифровок',
	{
	extend: 'Ext.window.Window',
	height: 394,width: 569,
	iconCls: 'bogus',
	title: 'Отчет  Показатели работы менеджеров',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:569px;height:24px;',
			items:
			[
				{
					text:'Действия',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Заголовок',
				},
				{
					text:'ЗаголовокДействие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});