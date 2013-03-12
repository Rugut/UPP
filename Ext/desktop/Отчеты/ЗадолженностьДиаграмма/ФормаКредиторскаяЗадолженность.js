Ext.define('Отчеты.ЗадолженностьДиаграмма.ФормаКредиторскаяЗадолженность',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:450px;',
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
					text:'Настройка...',
				},
				'-',
				{
					text:'Настройка...',
				},
				{
					text:'Печать',
				},
				{
					text:'Транспонировать',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Справка',
				},
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Справка',
				},
				'-',
				{
					text:'Восстановить значения',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Сохранить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Отбор',
				},
				{
					text:'Транспонировать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:62px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'На дату:',
			style: 'position:absolute;left:8px;top:33px;width:52px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Тип диаграммы:',
			style: 'position:absolute;left:326px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:58px;width:588px;height:49px;',
			height: 49,width: 588,
			items:
			[
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиОрганизация',
			style: 'position:absolute;left:292px;top:0px;width:296px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:128px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиВидВзаиморасчетов',
			style: 'position:absolute;left:292px;top:23px;width:296px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вид взаиморасчетов:',
			style: 'position:absolute;left:0px;top:23px;width:128px;height:18px;',
		},
					]
				},
			]
		},
	]
});