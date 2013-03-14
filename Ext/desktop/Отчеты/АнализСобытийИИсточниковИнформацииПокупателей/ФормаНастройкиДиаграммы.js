Ext.define('Отчеты.АнализСобытийИИсточниковИнформацииПокупателей.ФормаНастройкиДиаграммы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:602px;height:301px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
				'-',
				{
					text:'Закрыть',
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
					text:'Серии',
					width:'60',
				},
				{
					text:'Точки',
					width:'60',
				},
				{
					text:'Представление',
					width:'220',
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
					text:'',
					width:'20',
				},
				{
					text:'Представление',
					width:'220',
				},
			]
		},
	]
});