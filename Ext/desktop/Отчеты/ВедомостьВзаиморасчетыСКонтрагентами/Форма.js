Ext.define('Отчеты.ВедомостьВзаиморасчетыСКонтрагентами.Форма',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 780,
	iconCls: 'bogus',
	title: 'Ведомость по взаиморасчетам с контрагентами',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:449px;height:25px;',
			items:
			[
				{
					text:'РазделительНастройка',
				},
				{
					text:'БыстрыеОтборы',
				},
				{
					text:'ДействиеЗакрыть',
				},
				{
					text:'РазделительСохранитьВосстановитьНастройку',
				},
				{
					text:'РазделительСохранитьВосстановитьНастройку',
				},
				{
					text:'РазделительНастройка',
				},
				{
					text:'РазделительНовыйОтчет',
				},
				{
					text:'НовыйОтчет',
				},
				{
					text:'НовыйОтчет',
				},
				{
					text:'Подменю',
				},
				{
					text:'ЗаголовокОтчета',
				},
				{
					text:'СохранитьНастройку',
				},
				{
					text:'ВосстановитьНастройку',
				},
				{
					text:'ЗаголовокОтчета',
				},
				{
					text:'РазделительСформировать',
				},
				{
					text:'РазделительБыстрыеОтборыЗаголовокОтчета',
				},
				{
					text:'СохранитьНастройку',
				},
				{
					text:'БыстрыеОтборы',
				},
				{
					text:'Справка',
				},
				{
					text:'РазделительСформировать',
				},
				{
					text:'Настройка',
				},
				{
					text:'РазделительБыстрыеОтборыЗаголовокОтчета',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Сформировать',
				},
				{
					text:'ВосстановитьНастройку',
				},
				{
					text:'Справка',
				},
				{
					text:'РазделительДействия',
				},
				{
					text:'Настройка',
				},
				{
					text:'РазделительНовыйОтчет',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:513px;top:3px;width:259px;height:19px;',
			height: 19,width: 259,
			items:
			[
				{
					title:'СтраницаПроизвольныйПериод',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаНач',
			style: 'position:absolute;left:57px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаКон',
			style: 'position:absolute;left:157px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:239px;top:0px;width:20px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаНаДату',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаНаДату',
			style: 'position:absolute;left:179px;top:0px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаПериод',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаМинусПериод',
			text: '-',
			style: 'position:absolute;left:85px;top:0px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПлюсПериод',
			text: '+',
			style: 'position:absolute;left:239px;top:0px;width:20px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:448px;top:0px;width:332px;height:25px;',
			items:
			[
			]
		},
	]
});