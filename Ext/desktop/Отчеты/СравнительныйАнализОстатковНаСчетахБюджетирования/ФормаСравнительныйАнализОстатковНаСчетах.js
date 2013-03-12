Ext.define('Отчеты.СравнительныйАнализОстатковНаСчетахБюджетирования.ФормаСравнительныйАнализОстатковНаСчетах',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				'-',
				{
					text:'Настройка...',
				},
				{
					text:'Настройка...',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Справка',
				},
				'-',
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Справка',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Восстановить значения',
				},
				{
					text:'Заголовок',
				},
			]
		},
	]
});