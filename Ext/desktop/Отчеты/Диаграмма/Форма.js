Ext.define('Отчеты.Диаграмма.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:466px;height:430px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Диаграмма',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:466px;height:25px;',
			items:
			[
				{
					text:'Настройка ...',
				},
				'-',
				{
					text:'Печать',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Транспонировать диаграмму',
				},
				{
					text:'Настройка ...',
				},
				{
					text:'Сформировать',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Закрыть',
				},
				'-',
				'-',
				{
					text:'Печать',
				},
				{
					text:'Транспонировать диаграмму',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Тип диаграммы:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
	]
});