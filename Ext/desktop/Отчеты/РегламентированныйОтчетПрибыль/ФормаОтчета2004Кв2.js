Ext.define('Отчеты.РегламентированныйОтчетПрибыль.ФормаОтчета2004Кв2',
	{
	extend: 'Ext.window.Window',
	height: 491,width: 675,
	iconCls: 'bogus',
	title: 'Прибыль',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:675px;height:25px;',
			items:
			[
				{
					text:'Заполнить',
				},
				{
					text:'Проверить',
				},
				{
					text:'КнопкаЗаполнитьСведенияОбОрганизации',
				},
				{
					text:'КнопкаНастройкаСтраниц',
				},
				{
					text:'ПоказатьЦиклыОбмена',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Очистить',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подготовить',
				},
				{
					text:'РазделительОтправка',
				},
				{
					text:'ПодготовитьИПодписать',
				},
				{
					text:'РасширитьПолеБланка',
				},
				{
					text:'Выгрузка',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Справка',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Отправить',
				},
				{
					text:'Поиск',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Отправка',
				},
				{
					text:'РазделительЗаполнить',
				},
				{
					text:'Проверить',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:466px;width:675px;height:25px;',
			items:
			[
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
					text:'Действие2',
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
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:122px;width:654px;height:310px;',
			height: 310,width: 654,
			items:
			[
				{
					title:'Титульный',
				},
				{
					title:'ФизЛица',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуФизЛица',
			text: 'Добавить',
			style: 'position:absolute;left:395px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуФизЛица',
			text: 'Удалить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаФизЛица',
			text: '',
			style: 'position:absolute;left:251px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаФизЛица',
			text: '',
			style: 'position:absolute;left:355px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуФизЛица',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Раздел1_1',
					items:
					[
					]
				},
				{
					title:'Раздел1_2',
					items:
					[
					]
				},
				{
					title:'Раздел1_3',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел1_3',
			text: 'Добавить',
			style: 'position:absolute;left:396px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел1_3',
			text: 'Удалить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел1_3',
			text: '',
			style: 'position:absolute;left:266px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел1_3',
			text: '',
			style: 'position:absolute;left:370px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел1_3',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Раздел1_4',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел1_4',
			text: 'Добавить',
			style: 'position:absolute;left:396px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел1_4',
			text: 'Удалить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел1_4',
			text: '',
			style: 'position:absolute;left:266px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел1_4',
			text: '',
			style: 'position:absolute;left:370px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел1_4',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Лист02',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист02',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист02',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист02_Прил1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист02_Прил1',
			style: 'position:absolute;left:233px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист02_Прил1',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист02_Прил2',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист02_Прил2',
			style: 'position:absolute;left:233px;top:266px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист02_Прил2',
			style: 'position:absolute;left:355px;top:266px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист02_Прил4',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист02_Прил4',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист02_Прил4',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист02_Прил5',
				},
				{
					title:'Лист02_Прил5а',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуЛист02_Прил5а',
			text: 'Добавить',
			style: 'position:absolute;left:394px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуЛист02_Прил5а',
			text: 'Удалить',
			style: 'position:absolute;left:480px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаЛист02_Прил5а',
			text: '',
			style: 'position:absolute;left:250px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаЛист02_Прил5а',
			text: '',
			style: 'position:absolute;left:354px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуЛист02_Прил5а',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Лист02_Прил6',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист02_Прил6',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист02_Прил6',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист02_Прил7',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист02_Прил7',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист02_Прил7',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист03_РазделА',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиЛист03_РазделА',
			text: 'Добавить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиЛист03_РазделА',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Лист03_РазделыБВ',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуЛист03_РазделыБВ',
			text: 'Добавить',
			style: 'position:absolute;left:395px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуЛист03_РазделыБВ',
			text: 'Удалить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаЛист03_РазделыБВ',
			text: '',
			style: 'position:absolute;left:266px;top:265px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаЛист03_РазделыБВ',
			text: '',
			style: 'position:absolute;left:355px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуЛист03_РазделыБВ',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Лист04_РазделА',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист04_РазделА',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист04_РазделА',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист04_РазделБ',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист04_РазделБ',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист04_РазделБ',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист05',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист05',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист05',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист06',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист06',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист06',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист07',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист07',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист07',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист08',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиЛист08',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийЛист08',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист09',
				},
				{
					title:'Лист10',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиЛист10',
			text: 'Добавить',
			style: 'position:absolute;left:480px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиЛист10',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Лист11',
				},
				{
					title:'Лист11_Прил1',
				},
				{
					title:'Лист11_Прил2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:659px;height:48px;',
			height: 48,width: 659,
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
			style: 'position:absolute;left:555px;top:24px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:433px;width:659px;height:24px;',
			height: 24,width: 659,
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
			style: 'position:absolute;left:263px;top:5px;width:396px;height:19px;',
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
			style: 'position:absolute;left:8px;top:33px;width:659px;height:37px;',
			height: 37,width: 659,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:2px;top:0px;width:657px;height:35px;',
			height: 35,width: 657,
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