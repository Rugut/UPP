Ext.define('Отчеты.ОстаткиДенежныхСредствДиаграмма.ФормаДенежныеСредства',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:420px;',
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
					text:'Печать',
				},
				{
					text:'Транспонировать',
				},
				{
					text:'Настройка...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Настройка...',
				},
				{
					text:'Сохранить значения...',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Отбор',
				},
				{
					text:'Транспонировать',
				},
				'-',
				'-',
				{
					text:'Отбор',
				},
				{
					text:'Справка',
				},
				'-',
				'-',
				{
					text:'Справка',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				'-',
				{
					text:'Восстановить значения',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Сформировать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:68px;top:33px;width:97px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'На дату::',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Тип диаграммы:',
			style: 'position:absolute;left:288px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:588px;height:72px;',
			height: 72,width: 588,
			items:
			[
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиВидДенежныхСредств',
			style: 'position:absolute;left:288px;top:0px;width:300px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Наличные, безналичные:',
			style: 'position:absolute;left:0px;top:0px;width:156px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиВалютаДенежныхСредств',
			style: 'position:absolute;left:288px;top:24px;width:300px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Валюта денежных средств:',
			style: 'position:absolute;left:0px;top:24px;width:156px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиБанковскийСчетКасса',
			style: 'position:absolute;left:288px;top:48px;width:300px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Банковский счет, касса:',
			style: 'position:absolute;left:0px;top:48px;width:156px;height:19px;',
		},
					]
				},
			]
		},
	]
});