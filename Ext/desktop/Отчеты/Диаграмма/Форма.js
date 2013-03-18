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
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Транспонировать диаграмму',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'Настройка ...',
				},
				{
					text:'Закрыть',
				},
					]
				},
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Транспонировать диаграмму',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'Настройка ...',
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
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:98px;top:33px;width:360px;height:19px;',
		},
	]
});