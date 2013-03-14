Ext.define('Отчеты.РегламентированныйОтчетСтатистикаФормаП1.ФормаВыбораПриложения3',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:657px;height:164px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выберите сохраненную форму ""П-1 Приложение 3"" для выгрузки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Открыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:641px;height:125px;',
			height: 125,width: 641,
			columns:
			[
				{
					text:'Представление',
					width:'320',
				},
				{
					text:'Периодичность',
					width:'85',
				},
				{
					text:'Комментарий',
					width:'265',
				},
				{
					text:'Период',
					width:'120',
				},
				{
					text:'Дата начала',
					width:'90',
				},
				{
					text:'Дата окончания',
					width:'90',
				},
				{
					text:'Текущий документ',
					width:'142',
				},
			]
		},
	]
});