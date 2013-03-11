Ext.define('Отчеты.ЗаявкиНаРасходованиеСредств.Форма',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 780,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:508px;height:25px;',
			items:
			[
				{
					text:'РазделительСформировать',
				},
				{
					text:'РазделительБыстрыеОтборыЗаголовокОтчета',
				},
				{
					text:'РазделительСохранитьВосстановитьНастройку',
				},
				{
					text:'Сформировать',
				},
				{
					text:'ВосстановитьНастройку',
				},
				{
					text:'РазделительНастройка',
				},
				{
					text:'Подменю',
				},
				{
					text:'ВосстановитьНастройку',
				},
				{
					text:'РазделительСохранитьВосстановитьНастройку',
				},
				{
					text:'РазделительНовыйОтчет',
				},
				{
					text:'РазделительБыстрыеОтборыЗаголовокОтчета',
				},
				{
					text:'РазделительСформировать',
				},
				{
					text:'РазделительНастройка',
				},
				{
					text:'Сформировать',
				},
				{
					text:'РазделительДействия',
				},
				{
					text:'БыстрыеОтборы',
				},
				{
					text:'РазделительНовыйОтчет',
				},
				{
					text:'Настройка',
				},
				{
					text:'НовыйОтчет',
				},
				{
					text:'Настройка',
				},
				{
					text:'ЗаголовокОтчета',
				},
				{
					text:'ДействиеЗакрыть',
				},
				{
					text:'ЗаголовокОтчета',
				},
				{
					text:'СохранитьНастройку',
				},
				{
					text:'НовыйОтчет',
				},
				{
					text:'СохранитьНастройку',
				},
				{
					text:'Справка',
				},
				{
					text:'БыстрыеОтборы',
				},
				{
					text:'Справка',
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
			style: 'position:absolute;left:508px;top:0px;width:272px;height:25px;',
			items:
			[
			]
		},
	]
});