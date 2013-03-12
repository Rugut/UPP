Ext.define('Отчеты.ПоказателиРаботыМенеджеров.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:622px;height:412px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Показатели работы менеджеров',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:66px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:148px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонца',
			style: 'position:absolute;left:166px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:622px;height:25px;',
			items:
			[
				{
					text:'Отбор',
				},
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Настройка ...',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Действие2',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Настройка ...',
				},
				'-',
				'-',
				{
					text:'Сформировать',
				},
				{
					text:'Отбор',
				},
				{
					text:'Диаграмма',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие',
				},
				'-',
				'-',
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:606px;height:24px;',
			height: 24,width: 606,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Менеджер:',
			style: 'position:absolute;left:0px;top:0px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиМенеджер',
			style: 'position:absolute;left:243px;top:0px;width:363px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:20px;height:19px;',
		},
	]
});