Ext.define('Отчеты.АнализПричинЗакрытияЗаказов.Форма',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 820,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:548px;height:25px;',
			items:
			[
				{
					text:'БыстрыеОтборы',
				},
				{
					text:'Настройка',
				},
				{
					text:'РазделительНастройка',
				},
				{
					text:'РазделительСохранитьВосстановитьНастройку',
				},
				{
					text:'БыстрыеОтборы',
				},
				{
					text:'РазделительСформировать',
				},
				{
					text:'Подменю',
				},
				{
					text:'РазделительСформировать',
				},
				{
					text:'СохранитьНастройку',
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
					text:'РазделительНовыйОтчет',
				},
				{
					text:'РазделительНовыйОтчет',
				},
				{
					text:'РазделительБыстрыеОтборыЗаголовокОтчета',
				},
				{
					text:'НовыйОтчет',
				},
				{
					text:'РазделительБыстрыеОтборыЗаголовокОтчета',
				},
				{
					text:'СохранитьНастройку',
				},
				{
					text:'Справка',
				},
				{
					text:'ДействиеЗакрыть',
				},
				{
					text:'ВосстановитьНастройку',
				},
				{
					text:'Справка',
				},
				{
					text:'ЗаголовокОтчета',
				},
				{
					text:'Настройка',
				},
				{
					text:'Сформировать',
				},
				{
					text:'РазделительНастройка',
				},
				{
					text:'Сформировать',
				},
				{
					text:'ЗаголовокОтчета',
				},
				{
					text:'НовыйОтчет',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:555px;top:3px;width:265px;height:19px;',
			height: 19,width: 265,
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
			style: 'position:absolute;left:519px;top:0px;width:301px;height:25px;',
			items:
			[
			]
		},
	]
});