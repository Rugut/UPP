Ext.define('Отчеты.РегламентированныйОтчетСтатистикаФорма3Ф.ФормаОтчета2012Кв1',
	{
	extend: 'Ext.window.Window',
	height: 438,width: 716,
	iconCls: 'bogus',
	title: 'Статистика: Форма 3-Ф',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:716px;height:25px;',
			items:
			[
				{
					text:'Выгрузить',
				},
				{
					text:'ПоказатьЦиклыОбмена',
				},
				{
					text:'КнопкаЗаполнитьСведенияОбОрганизации',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Отправить',
				},
				{
					text:'Отправка',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Проверить',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Очистить',
				},
				{
					text:'Выгрузка',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Поиск',
				},
				{
					text:'РасширитьПолеБланка',
				},
				{
					text:'Проверить',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие',
				},
				{
					text:'РазделительОтправка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:413px;width:716px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СохранитьИЗакрыть',
				},
				{
					text:'Действие2',
				},
				{
					text:'ПодменюПечати',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:76px;width:700px;height:27px;',
			height: 27,width: 700,
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
			style: 'position:absolute;left:82px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:323px;top:0px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:381px;width:700px;height:24px;',
			height: 24,width: 700,
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
			style: 'position:absolute;left:263px;top:5px;width:437px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Статус',
			style: 'position:absolute;left:47px;top:5px;width:119px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:700px;height:43px;',
			height: 43,width: 700,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:35px;',
			height: 35,width: 700,
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