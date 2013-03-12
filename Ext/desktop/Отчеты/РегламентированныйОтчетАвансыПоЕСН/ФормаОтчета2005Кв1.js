Ext.define('Отчеты.РегламентированныйОтчетАвансыПоЕСН.ФормаОтчета2005Кв1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:721px;height:491px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Авансы по ЕСН',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:721px;height:25px;',
			items:
			[
				{
					text:'Расширить поле бланка',
				},
				{
					text:'Поиск',
				},
				'-',
				'-',
				{
					text:'Проверка',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Проверить в Интернете',
				},
				{
					text:'Очистить',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				'-',
				{
					text:'Отправить',
				},
				'-',
				{
					text:'Заполнить',
				},
				{
					text:'Подготовить к отправке и подписать',
				},
				{
					text:'Показать отправки',
				},
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Выгрузить',
				},
				{
					text:'Справка',
				},
				{
					text:'Подготовить к отправке',
				},
				{
					text:'Проверить выгрузку',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:466px;width:721px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
				'-',
				'-',
				'-',
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
					title:'Физ. лица',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуФизЛица',
			text: 'Добавить',
			style: 'position:absolute;left:453px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуФизЛица',
			text: 'Удалить',
			style: 'position:absolute;left:539px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаФизЛица',
			text: '',
			style: 'position:absolute;left:314px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаФизЛица',
			text: '',
			style: 'position:absolute;left:418px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуФизЛица',
			text: 'Перейти',
			style: 'position:absolute;left:621px;top:265px;width:76px;height:19px;',
		},
					]
				},
				{
					title:'Раздел 1',
				},
				{
					title:'Раздел 2',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:164px;top:265px;width:148px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись39',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:395px;top:265px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Дополнительные страницы',
			style: 'position:absolute;left:169px;top:265px;width:144px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:260px;width:691px;height:24px;',
			height: 24,width: 691,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел2',
			style: 'position:absolute;left:237px;top:5px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел2',
			style: 'position:absolute;left:358px;top:5px;width:333px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел 2.1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:260px;width:691px;height:24px;',
			height: 24,width: 691,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел21',
			style: 'position:absolute;left:237px;top:5px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел21',
			style: 'position:absolute;left:358px;top:5px;width:333px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел 2.2',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницФизЛица',
			text: '999 из 999',
			style: 'position:absolute;left:336px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницРаздел3',
			text: '999 из 999',
			style: 'position:absolute;left:352px;top:265px;width:64px;height:19px;',
		},
					]
				},
				{
					title:'Раздел 3',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел3',
			text: 'Добавить',
			style: 'position:absolute;left:457px;top:265px;width:72px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел3',
			text: 'Удалить',
			style: 'position:absolute;left:537px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел3',
			text: '',
			style: 'position:absolute;left:326px;top:265px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел3',
			text: '',
			style: 'position:absolute;left:422px;top:265px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел3',
			text: 'Перейти',
			style: 'position:absolute;left:621px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:238px;width:691px;height:26px;',
			height: 26,width: 691,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаЗначениеКорректировкиРаздел3',
			style: 'position:absolute;left:237px;top:6px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКомментарийРаздел3',
			style: 'position:absolute;left:358px;top:6px;width:333px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел 3.1',
				},
				{
					title:'Раздел 3.2',
				},
				{
					title:'Раздел 3.3',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел33',
			text: 'Добавить',
			style: 'position:absolute;left:533px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел33',
			text: 'Удалить',
			style: 'position:absolute;left:617px;top:265px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:635px;top:6px;width:78px;height:15px;',
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
			xtype: 'checkbox',
			boxLabel: 'Отключить авторасчет вычисляемых ячеек',
			style: 'position:absolute;left:171px;top:24px;width:247px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:556px;top:24px;width:49px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Внешние данные',
			style: 'position:absolute;left:274px;top:0px;width:110px;height:19px;',
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
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:183px;top:5px;width:80px;height:19px;',
		},
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