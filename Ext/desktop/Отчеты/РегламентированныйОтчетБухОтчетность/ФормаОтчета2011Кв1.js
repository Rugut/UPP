Ext.define('Отчеты.РегламентированныйОтчетБухОтчетность.ФормаОтчета2011Кв1',
	{
	extend: 'Ext.window.Window',
	height: 484,width: 716,
	iconCls: 'bogus',
	title: 'Бухгалтерская отчетность',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:716px;height:25px;',
			items:
			[
				{
					text:'Отправить',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'КнопкаСохранятьРасшифровку',
				},
				{
					text:'Поиск',
				},
				{
					text:'Подготовить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Выгрузка',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПодготовитьИПодписать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'КнопкаЗаполнитьСведенияОбОрганизации',
				},
				{
					text:'КнопкаНастройкаСтраниц',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ПодменюНастройка',
				},
				{
					text:'ПодменюРасшифровка',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Очистить',
				},
				{
					text:'Отправка',
				},
				{
					text:'РазделительОтправка',
				},
				{
					text:'РасширитьПолеБланка',
				},
				{
					text:'Проверить',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Расшифровка',
				},
				{
					text:'ПоказатьЦиклыОбмена',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Проверить',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:459px;width:716px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюПечати',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СохранитьИЗакрыть',
				},
				{
					text:'Записать',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:700px;height:44px;',
			height: 44,width: 700,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТочностьЕдиницыИзмерения',
			style: 'position:absolute;left:222px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:82px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:301px;top:24px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:429px;width:700px;height:22px;',
			height: 22,width: 700,
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
			style: 'position:absolute;left:263px;top:3px;width:437px;height:19px;',
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
			style: 'position:absolute;left:8px;top:33px;width:700px;height:37px;',
			height: 37,width: 700,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:2px;top:0px;width:698px;height:35px;',
			height: 35,width: 698,
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
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:119px;width:700px;height:310px;',
			height: 310,width: 700,
			items:
			[
				{
					title:'Баланс',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:260px;width:686px;height:24px;',
			height: 24,width: 686,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиБаланс',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийБаланс',
			style: 'position:absolute;left:353px;top:5px;width:333px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ФормаОтчета',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:260px;width:686px;height:24px;',
			height: 24,width: 686,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиФормаОтчета',
			style: 'position:absolute;left:226px;top:5px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийФормаОтчета',
			style: 'position:absolute;left:353px;top:5px;width:333px;height:19px;',
		},
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