Ext.define('Отчеты.АнализСостоянияНалоговогоУчетаПоУСН.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1049px;height:600px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Анализ состояния налогового учета по УСН',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:1049px;height:28px;',
			height: 28,width: 1049,
			items:
			[
				{
					title:'Основная',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:265px;top:8px;width:70px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:338px;top:7px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоПериода',
			style: 'position:absolute;left:57px;top:7px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонецПериода',
			style: 'position:absolute;left:155px;top:7px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:4px;top:8px;width:50px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:139px;top:8px;width:15px;height:18px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:239px;top:7px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСформировать',
			text: 'Сформировать',
			style: 'position:absolute;left:570px;top:7px;width:119px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Справка',
			text: '',
			style: 'position:absolute;left:1026px;top:7px;width:22px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительная',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:787px;top:2px;width:261px;height:24px;',
			items:
			[
				{
					text:'Настройка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:2px;top:2px;width:551px;height:24px;',
			items:
			[
				{
					text:'Печать...',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				'-',
				{
					text:'Структура налоговой базы',
				},
				{
					text:'Назад',
				},
			]
		},
					]
				},
			]
		},
	]
});