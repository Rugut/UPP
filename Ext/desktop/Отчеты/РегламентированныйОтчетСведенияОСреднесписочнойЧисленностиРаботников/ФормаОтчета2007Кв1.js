Ext.define('Отчеты.РегламентированныйОтчетСведенияОСреднесписочнойЧисленностиРаботников.ФормаОтчета2007Кв1',
	{
	extend: 'Ext.window.Window',
	height: 490,width: 670,
	iconCls: 'bogus',
	title: 'Сведения о среднесписочной численности работников за предшествующий календарный год',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			items:
			[
				{
					text:'Отправить',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Отправка',
				},
				{
					text:'ПодготовитьИПодписать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Справка',
				},
				{
					text:'РазделительОтправка',
				},
				{
					text:'Очистить',
				},
				{
					text:'Поиск',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'КнопкаНастройкаСтраниц',
				},
				{
					text:'Проверить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Проверить',
				},
				{
					text:'РасширитьПолеБланка',
				},
				{
					text:'Выгрузка',
				},
				{
					text:'ПоказатьЦиклыОбмена',
				},
				{
					text:'КнопкаЗаполнитьСведенияОбОрганизации',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'РазделительЗаполнить',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подготовить',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:465px;width:670px;height:25px;',
			items:
			[
				{
					text:'ПодменюПечати',
				},
				{
					text:'Действие2',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СохранитьИЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:102px;width:654px;height:333px;',
			height: 333,width: 654,
			items:
			[
				{
					title:'Титульный',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:654px;height:21px;',
			height: 21,width: 654,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:86px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:302px;top:0px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:435px;width:654px;height:22px;',
			height: 22,width: 654,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:263px;top:3px;width:391px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Статус',
			style: 'position:absolute;left:47px;top:3px;width:119px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:654px;height:37px;',
			height: 37,width: 654,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:2px;top:0px;width:652px;height:35px;',
			height: 35,width: 652,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
	]
});