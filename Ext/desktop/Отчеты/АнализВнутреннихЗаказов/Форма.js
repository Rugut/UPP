Ext.define('Отчеты.АнализВнутреннихЗаказов.Форма',
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
					text:'ЗаказПоставщику',
				},
				{
					text:'Настройка',
				},
				{
					text:'ЗаголовокОтчета',
				},
				{
					text:'БыстрыеОтборы',
				},
				{
					text:'СформироватьЗаказыПоОсновномуПоставщику',
				},
				{
					text:'РазделительСохранитьВосстановитьНастройку',
				},
				{
					text:'РазделительСохранитьВосстановитьНастройку',
				},
				{
					text:'РазделительСформировать',
				},
				{
					text:'СформироватьОдинЗаказПоставщику',
				},
				{
					text:'ЗаголовокОтчета',
				},
				{
					text:'НовыйОтчет',
				},
				{
					text:'СохранитьНастройку',
				},
				{
					text:'Подменю',
				},
				{
					text:'ДействиеЗакрыть',
				},
				{
					text:'Справка',
				},
				{
					text:'РазделительБыстрыеОтборыЗаголовокОтчета',
				},
				{
					text:'НовыйОтчет',
				},
				{
					text:'Справка',
				},
				{
					text:'СохранитьНастройку',
				},
				{
					text:'РазделительНастройка',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительБыстрыеОтборыЗаголовокОтчета',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительНовыйОтчет',
				},
				{
					text:'ЗаказПоставщику',
				},
				{
					text:'РазделительНовыйОтчет',
				},
				{
					text:'РазделительДействия',
				},
				{
					text:'ВосстановитьНастройку',
				},
				{
					text:'РазделительСформировать',
				},
				{
					text:'Сформировать',
				},
				{
					text:'СформироватьЗаказыПоОсновномуПоставщику',
				},
				{
					text:'Настройка',
				},
				{
					text:'БыстрыеОтборы',
				},
				{
					text:'РазделительНастройка',
				},
				{
					text:'ВосстановитьНастройку',
				},
				{
					text:'СформироватьОдинЗаказПоставщику',
				},
				{
					text:'Сформировать',
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