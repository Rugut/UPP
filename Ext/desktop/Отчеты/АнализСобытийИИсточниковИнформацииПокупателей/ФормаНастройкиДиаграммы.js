Ext.define('Отчеты.АнализСобытийИИсточниковИнформацииПокупателей.ФормаНастройкиДиаграммы',
	{
	extend: 'Ext.window.Window',
	height: 301,width: 602,
	iconCls: 'bogus',
	title: 'Настройка диаграммы ""Анализ событий и источников информации покупателей""',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:276px;width:602px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:28px;width:340px;height:240px;',
			height: 240,width: 340,
			columns:
			[
				{
					text:'ИспользованиеСерии',
				},
				{
					text:'ИспользованиеТочки',
				},
				{
					text:'Представление',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:354px;top:28px;width:240px;height:240px;',
			height: 240,width: 240,
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