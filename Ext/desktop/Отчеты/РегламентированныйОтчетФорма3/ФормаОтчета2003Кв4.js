Ext.define('Отчеты.РегламентированныйОтчетФорма3.ФормаОтчета2003Кв4',
	{
	extend: 'Ext.window.Window',
	height: 484,width: 720,
	iconCls: 'bogus',
	title: 'Форма №3',
	
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
					text:'Поиск',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Отправить',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие',
				},
				{
					text:'Отправка',
				},
				{
					text:'Проверить',
				},
				{
					text:'ПодменюРасшифровка',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Выгрузка',
				},
				{
					text:'ПоказатьЦиклыОбмена',
				},
				{
					text:'РасширитьПолеБланка',
				},
				{
					text:'РазделительОтправка',
				},
				{
					text:'ПодготовитьИПодписать',
				},
				{
					text:'КнопкаНастройкаСтраниц',
				},
				{
					text:'Подготовить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Выгрузить',
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
					text:'Очистить',
				},
				{
					text:'КнопкаСохранятьРасшифровку',
				},
				{
					text:'КнопкаЗаполнитьСведенияОбОрганизации',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель5',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:459px;width:720px;height:25px;',
			items:
			[
				{
					text:'ПодменюПечати',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Записать',
				},
				{
					text:'СохранитьИЗакрыть',
				},
				{
					text:'Разделитель',
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
			style: 'position:absolute;left:8px;top:74px;width:704px;height:48px;',
			height: 48,width: 704,
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
			style: 'position:absolute;left:222px;top:1px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:82px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:301px;top:23px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:429px;width:704px;height:22px;',
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
			style: 'position:absolute;left:8px;top:122px;width:704px;height:307px;',
			height: 307,width: 704,
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
			style: 'position:absolute;left:238px;top:260px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийФормаОтчета',
			style: 'position:absolute;left:362px;top:260px;width:342px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиФормаОтчета',
			text: 'Добавить',
			style: 'position:absolute;left:138px;top:285px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиФормаОтчета',
			text: 'Удалить',
			style: 'position:absolute;left:224px;top:285px;width:80px;height:19px;',
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