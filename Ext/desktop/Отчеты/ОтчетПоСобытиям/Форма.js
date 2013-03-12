Ext.define('Отчеты.ОтчетПоСобытиям.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:396px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет по событиям',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				{
					text:'Заголовок',
				},
				{
					text:'Закрыть',
				},
				'-',
				'-',
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Отбор',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Настройка...',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Настройка...',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				'-',
				'-',
				'-',
			]
		},
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:588px;height:48px;',
			height: 48,width: 588,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагент:',
			style: 'position:absolute;left:0px;top:0px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиКонтрагент',
			style: 'position:absolute;left:292px;top:0px;width:296px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контактное лицо:',
			style: 'position:absolute;left:0px;top:24px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиКонтактноеЛицо',
			style: 'position:absolute;left:292px;top:24px;width:296px;height:19px;',
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