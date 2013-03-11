Ext.define('Отчеты.РегламентированныйОтчетФорма5.ФормаОтчета2006Кв4',
	{
	extend: 'Ext.window.Window',
	height: 491,width: 720,
	iconCls: 'bogus',
	title: 'Форма №5',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			items:
			[
				{
					text:'Проверить',
				},
				{
					text:'Выгрузка',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие',
				},
				{
					text:'Проверить',
				},
				{
					text:'Подготовить',
				},
				{
					text:'ПоказатьЦиклыОбмена',
				},
				{
					text:'РасширитьПолеБланка',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'КнопкаСохранятьРасшифровку',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ПодменюРасшифровка',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Расшифровка',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюНастройка',
				},
				{
					text:'Отправка',
				},
				{
					text:'Поиск',
				},
				{
					text:'ПодготовитьИПодписать',
				},
				{
					text:'КнопкаЗаполнитьСведенияОбОрганизации',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Очистить',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'РазделительОтправка',
				},
				{
					text:'КнопкаНастройкаСтраниц',
				},
				{
					text:'Отправить',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:466px;width:720px;height:25px;',
			items:
			[
				{
					text:'СохранитьИЗакрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Записать',
				},
				{
					text:'ПодменюПечати',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:75px;width:704px;height:51px;',
			height: 51,width: 704,
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
			style: 'position:absolute;left:226px;top:0px;width:32px;height:19px;',
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
			style: 'position:absolute;left:303px;top:24px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:437px;width:704px;height:22px;',
			height: 22,width: 704,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КомментарийОбщий',
			style: 'position:absolute;left:263px;top:3px;width:441px;height:19px;',
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
			style: 'position:absolute;left:8px;top:126px;width:704px;height:311px;',
			height: 311,width: 704,
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
			style: 'position:absolute;left:226px;top:265px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийФормаОтчета',
			style: 'position:absolute;left:352px;top:265px;width:352px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиФормаОтчета',
			text: 'Добавить',
			style: 'position:absolute;left:143px;top:289px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиФормаОтчета',
			text: 'Удалить',
			style: 'position:absolute;left:229px;top:289px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:704px;height:37px;',
			height: 37,width: 704,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:704px;height:35px;',
			height: 35,width: 704,
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