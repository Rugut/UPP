Ext.define('Отчеты.РегламентированныйОтчетКосвенныеНалоги.ФормаОтчета2007Кв1',
	{
	extend: 'Ext.window.Window',
	height: 491,width: 721,
	iconCls: 'bogus',
	title: 'Косвенные налоги при ввозе товаров из Республики Беларусь',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:721px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ПодменюОчистить',
				},
				{
					text:'Подготовить',
				},
				{
					text:'КнопкаНастройкаСтраниц',
				},
				{
					text:'ВыбратьВариантОчисткиОтчета',
				},
				{
					text:'Проверить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Отправка',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПоказатьЦиклыОбмена',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Отправить',
				},
				{
					text:'РасширитьПолеБланка',
				},
				{
					text:'Поиск',
				},
				{
					text:'РазделительОтправка',
				},
				{
					text:'КнопкаЗаполнитьСведенияОбОрганизации',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ПодготовитьИПодписать',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Справка',
				},
				{
					text:'Выгрузка',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Проверить',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПроверкаПоказателей',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:466px;width:721px;height:25px;',
			items:
			[
				{
					text:'ПодменюПечати',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СохранитьИЗакрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:124px;width:705px;height:310px;',
			height: 310,width: 705,
			items:
			[
				{
					title:'Титульный',
				},
				{
					title:'Раздел11',
				},
				{
					title:'Раздел12',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел12',
			text: 'Добавить',
			style: 'position:absolute;left:453px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел12',
			text: 'Удалить',
			style: 'position:absolute;left:539px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел12',
			text: '',
			style: 'position:absolute;left:314px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел12',
			text: '',
			style: 'position:absolute;left:418px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел12',
			text: 'Перейти',
			style: 'position:absolute;left:621px;top:265px;width:76px;height:19px;',
		},
					]
				},
				{
					title:'Раздел2',
					items:
					[
					]
				},
				{
					title:'Раздел3',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел3',
			text: 'Добавить',
			style: 'position:absolute;left:531px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел3',
			text: 'Удалить',
			style: 'position:absolute;left:617px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Раздел4',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел4',
			text: 'Добавить',
			style: 'position:absolute;left:531px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел4',
			text: 'Удалить',
			style: 'position:absolute;left:617px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Раздел41',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел41',
			text: 'Добавить',
			style: 'position:absolute;left:531px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел41',
			text: 'Удалить',
			style: 'position:absolute;left:617px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел41',
			text: 'Добавить',
			style: 'position:absolute;left:446px;top:240px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел41',
			text: 'Удалить',
			style: 'position:absolute;left:532px;top:240px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел41',
			text: '',
			style: 'position:absolute;left:301px;top:240px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел41',
			text: '',
			style: 'position:absolute;left:405px;top:240px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел41',
			text: 'Перейти',
			style: 'position:absolute;left:617px;top:240px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:705px;height:50px;',
			height: 50,width: 705,
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
			style: 'position:absolute;left:230px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:86px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:559px;top:24px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:434px;width:705px;height:24px;',
			height: 24,width: 705,
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
			style: 'position:absolute;left:263px;top:5px;width:442px;height:19px;',
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
			style: 'position:absolute;left:8px;top:33px;width:705px;height:37px;',
			height: 37,width: 705,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:2px;top:0px;width:703px;height:35px;',
			height: 35,width: 703,
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