Ext.define('Отчеты.ABCАнализПродаж.ФормаНастройкиДиаграммы',
	{
	extend: 'Ext.window.Window',
	height: 342,width: 256,
	iconCls: 'bogus',
	title: 'Настройка диаграммы (ABC-анализ продаж)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:317px;width:256px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:29px;width:240px;height:280px;',
			height: 280,width: 240,
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