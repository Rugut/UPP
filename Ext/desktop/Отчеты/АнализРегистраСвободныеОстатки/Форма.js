Ext.define('Отчеты.АнализРегистраСвободныеОстатки.Форма',
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
					text:'СохранитьНастройку',
				},
				{
					text:'Справка',
				},
				{
					text:'Справка',
				},
				{
					text:'НовыйОтчет',
				},
				{
					text:'РазделительНастройка',
				},
				{
					text:'РазделительБыстрыеОтборыЗаголовокОтчета',
				},
				{
					text:'НовыйОтчет',
				},
				{
					text:'РазделительДействия',
				},
				{
					text:'РазделительСохранитьВосстановитьНастройку',
				},
				{
					text:'ВосстановитьНастройку',
				},
				{
					text:'ЗаголовокОтчета',
				},
				{
					text:'РазделительНастройка',
				},
				{
					text:'РазделительНовыйОтчет',
				},
				{
					text:'БыстрыеОтборы',
				},
				{
					text:'РазделительСохранитьВосстановитьНастройку',
				},
				{
					text:'ЗаголовокОтчета',
				},
				{
					text:'РазделительНовыйОтчет',
				},
				{
					text:'БыстрыеОтборы',
				},
				{
					text:'ДействиеЗакрыть',
				},
				{
					text:'ВосстановитьНастройку',
				},
				{
					text:'РазделительБыстрыеОтборыЗаголовокОтчета',
				},
				{
					text:'Настройка',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Настройка',
				},
				{
					text:'Сформировать',
				},
				{
					text:'СохранитьНастройку',
				},
				{
					text:'Подменю',
				},
				{
					text:'РазделительСформировать',
				},
				{
					text:'РазделительСформировать',
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