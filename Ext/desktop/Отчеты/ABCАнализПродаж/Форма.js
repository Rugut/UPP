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
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНачала',
			style: 'position:absolute;left:70px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:152px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:170px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:444px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Параметр анализа:',
			style: 'position:absolute;left:338px;top:57px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Объект анализа:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:656px;height:19px;',
			height: 19,width: 656,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтборЗначениеКласс',
			style: 'position:absolute;left:313px;top:0px;width:343px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'АВС-класс:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:18px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:90px;top:0px;width:220px;height:19px;',
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
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:672px;height:25px;',
			dock: 'top',
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
					text:'Отбор',
				},
				'-',
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Настройка ...',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Настройка ...',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Диаграмма',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});