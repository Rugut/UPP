Ext.define('Отчеты.ABCАнализПродаж.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:672px;height:430px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'АВС-анализ продаж',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:672px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Отбор',
				},
				{
					text:'Диаграмма',
				},
				'-',
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Настройка ...',
				},
				'-',
				{
					text:'Заголовок',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Настройка ...',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
				'-',
				'-',
				{
					text:'Заголовок',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:70px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:152px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:170px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Параметр анализа:',
			style: 'position:absolute;left:338px;top:57px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Объект анализа:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:656px;height:19px;',
			height: 19,width: 656,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборЗначениеКласс',
			style: 'position:absolute;left:313px;top:0px;width:343px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'АВС-класс:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:18px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:256px;top:33px;width:19px;height:19px;',
		},
	]
});