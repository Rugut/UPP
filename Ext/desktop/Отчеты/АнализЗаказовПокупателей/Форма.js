Ext.define('Отчеты.АнализЗаказовПокупателей.Форма',
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
					text:'Справка',
				},
				{
					text:'Сформировать',
				},
				{
					text:'РазделительСохранитьВосстановитьНастройку',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительСформировать',
				},
				{
					text:'НовыйОтчет',
				},
				{
					text:'ВосстановитьНастройку',
				},
				{
					text:'РазделительДействия',
				},
				{
					text:'ЗаголовокОтчета',
				},
				{
					text:'РазделительСформировать',
				},
				{
					text:'РазделительНастройка',
				},
				{
					text:'СформироватьОдинЗаказПоставщику',
				},
				{
					text:'ДействиеЗакрыть',
				},
				{
					text:'Справка',
				},
				{
					text:'ВосстановитьНастройку',
				},
				{
					text:'БыстрыеОтборы',
				},
				{
					text:'НовыйОтчет',
				},
				{
					text:'Настройка',
				},
				{
					text:'БыстрыеОтборы',
				},
				{
					text:'Сформировать',
				},
				{
					text:'РазделительНастройка',
				},
				{
					text:'СохранитьНастройку',
				},
				{
					text:'СформироватьЗаказыПоОсновномуПоставщику',
				},
				{
					text:'СохранитьНастройку',
				},
				{
					text:'РазделительСохранитьВосстановитьНастройку',
				},
				{
					text:'Настройка',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ЗаголовокОтчета',
				},
				{
					text:'ЗаказПоставщику',
				},
				{
					text:'Подменю',
				},
				{
					text:'РазделительБыстрыеОтборыЗаголовокОтчета',
				},
				{
					text:'СформироватьЗаказыПоОсновномуПоставщику',
				},
				{
					text:'ЗаказПоставщику',
				},
				{
					text:'СформироватьОдинЗаказПоставщику',
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