Ext.define('Отчеты.ТоварныйКалендарь.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:437px;',
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
				{
					text:'Сформировать',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Сохранить значения...',
				},
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Восстановить значения',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Сохранить значения...',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:64px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'На дату:',
			style: 'position:absolute;left:8px;top:33px;width:51px;height:19px;',
		},
	]
});