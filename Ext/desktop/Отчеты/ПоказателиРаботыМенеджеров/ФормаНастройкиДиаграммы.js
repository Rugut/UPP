Ext.define('Отчеты.ПоказателиРаботыМенеджеров.ФормаНастройкиДиаграммы',
	{
	extend: 'Ext.window.Window',
	height: 342,width: 356,
	iconCls: 'bogus',
	title: 'Настройка диаграммы (Показатели работы менеджеров)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:317px;width:356px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:29px;width:340px;height:280px;',
			height: 280,width: 340,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Представление',
				},
			]
		},
	]
});