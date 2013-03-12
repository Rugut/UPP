Ext.define('Отчеты.ОтчетДиаграмма.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:586px;height:449px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:586px;height:25px;',
			items:
			[
				'-',
				{
					text:'Транспонировать',
				},
				{
					text:'Транспонировать',
				},
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Справка',
				},
				'-',
				{
					text:'Печать',
				},
				{
					text:'Восстановить значения',
				},
				{
					text:'Справка',
				},
				{
					text:'Настройка...',
				},
				{
					text:'Сохранить значения...',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Отбор',
				},
				{
					text:'Восстановить значения...',
				},
				'-',
				{
					text:'Отбор',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:66px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:166px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:148px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Тип диаграммы:',
			style: 'position:absolute;left:288px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяРегистра',
			text: 'Раздел учета:',
			style: 'position:absolute;left:288px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:570px;height:24px;',
			height: 24,width: 570,
			items:
			[
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройки1',
			style: 'position:absolute;left:324px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Настройка',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиС1',
			style: 'position:absolute;left:324px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПо1',
			style: 'position:absolute;left:450px;top:0px;width:120px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:177px;width:570px;height:24px;',
			height: 24,width: 570,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройки5',
			style: 'position:absolute;left:324px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Настройка',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиС5',
			style: 'position:absolute;left:324px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПо5',
			style: 'position:absolute;left:450px;top:0px;width:120px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:153px;width:570px;height:24px;',
			height: 24,width: 570,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройки4',
			style: 'position:absolute;left:324px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Настройка',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиС4',
			style: 'position:absolute;left:324px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПо4',
			style: 'position:absolute;left:450px;top:0px;width:120px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:129px;width:570px;height:24px;',
			height: 24,width: 570,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройки3',
			style: 'position:absolute;left:324px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Настройка',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиС3',
			style: 'position:absolute;left:324px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПо3',
			style: 'position:absolute;left:450px;top:0px;width:120px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:570px;height:24px;',
			height: 24,width: 570,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройки2',
			style: 'position:absolute;left:324px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Настройка',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиС2',
			style: 'position:absolute;left:324px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиПо2',
			style: 'position:absolute;left:450px;top:0px;width:120px;height:19px;',
		},
					]
				},
			]
		},
	]
});