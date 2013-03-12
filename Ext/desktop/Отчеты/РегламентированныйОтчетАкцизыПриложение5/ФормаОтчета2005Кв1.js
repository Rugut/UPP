Ext.define('Отчеты.РегламентированныйОтчетАкцизыПриложение5.ФормаОтчета2005Кв1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:490px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Декларация по акцизам на нефтепродукты',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			items:
			[
				{
					text:'Проверить в Интернете',
				},
				'-',
				{
					text:'Подготовить к отправке и подписать',
				},
				{
					text:'Подготовить к отправке',
				},
				'-',
				{
					text:'Отправить',
				},
				{
					text:'Выгрузить',
				},
				'-',
				{
					text:'Расширить поле бланка',
				},
				{
					text:'Обновить',
				},
				'-',
				'-',
				{
					text:'Очистить',
				},
				{
					text:'Справка',
				},
				{
					text:'Показать отправки',
				},
				{
					text:'Настройка...',
				},
				'-',
				'-',
				'-',
				{
					text:'Поиск',
				},
				'-',
				{
					text:'Проверить выгрузку',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:465px;width:670px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				'-',
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:125px;width:654px;height:310px;',
			height: 310,width: 654,
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
			style: 'position:absolute;left:398px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуФизЛица',
			text: 'Удалить',
			style: 'position:absolute;left:484px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаФизЛица',
			text: '',
			style: 'position:absolute;left:259px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаФизЛица',
			text: '',
			style: 'position:absolute;left:363px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуФизЛица',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:76px;height:19px;',
		},
					]
				},
				{
					title:'Раздел 1',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел1',
			text: 'Добавить',
			style: 'position:absolute;left:398px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел1',
			text: 'Удалить',
			style: 'position:absolute;left:484px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел1',
			text: '',
			style: 'position:absolute;left:259px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел1',
			text: '',
			style: 'position:absolute;left:363px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел1',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:76px;height:19px;',
		},
					]
				},
				{
					title:'Раздел 2.1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:109px;top:265px;width:148px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись27',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:109px;top:265px;width:148px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:109px;top:265px;width:144px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись30',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:114px;top:239px;width:148px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись34',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:114px;top:239px;width:148px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись39',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:344px;top:265px;width:136px;height:19px;',
		},
					]
				},
				{
					title:'Раздел 2.2',
				},
				{
					title:'Раздел 2.3',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницФизЛица',
			text: '999 из 999',
			style: 'position:absolute;left:281px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел23',
			text: 'Добавить',
			style: 'position:absolute;left:398px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел23',
			text: 'Удалить',
			style: 'position:absolute;left:484px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел23',
			text: '',
			style: 'position:absolute;left:259px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницРаздел23',
			text: '999 из 999',
			style: 'position:absolute;left:281px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел23',
			text: '',
			style: 'position:absolute;left:363px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел23',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницРаздел1',
			text: '999 из 999',
			style: 'position:absolute;left:281px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницПриложение1',
			text: '999 из 999',
			style: 'position:absolute;left:286px;top:239px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницПриложение3',
			text: '999 из 999',
			style: 'position:absolute;left:286px;top:239px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Приложение 1',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуПриложение1',
			text: 'Добавить',
			style: 'position:absolute;left:398px;top:239px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуПриложение1',
			text: 'Удалить',
			style: 'position:absolute;left:482px;top:239px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаПриложение1',
			text: '',
			style: 'position:absolute;left:264px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаПриложение1',
			text: '',
			style: 'position:absolute;left:368px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуПриложение1',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:239px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПриложение1',
			text: 'Добавить',
			style: 'position:absolute;left:482px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПриложение1',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Приложение 2',
				},
				{
					title:'Приложение 3',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуПриложение3',
			text: 'Добавить',
			style: 'position:absolute;left:398px;top:239px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуПриложение3',
			text: 'Удалить',
			style: 'position:absolute;left:482px;top:239px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаПриложение3',
			text: '',
			style: 'position:absolute;left:264px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаПриложение3',
			text: '',
			style: 'position:absolute;left:368px;top:239px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуПриложение3',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:239px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПриложение3',
			text: 'Добавить',
			style: 'position:absolute;left:482px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПриложение3',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Приложение 4',
				},
				{
					title:'Приложение 5',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:344px;top:265px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись35',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:344px;top:265px;width:136px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиПриложение5',
			text: 'Добавить',
			style: 'position:absolute;left:482px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиПриложение5',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:584px;top:5px;width:78px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:654px;height:51px;',
			height: 51,width: 654,
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
			style: 'position:absolute;left:171px;top:24px;width:246px;height:19px;',
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
			style: 'position:absolute;left:8px;top:435px;width:654px;height:22px;',
			height: 22,width: 654,
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
			style: 'position:absolute;left:183px;top:3px;width:80px;height:19px;',
		},
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