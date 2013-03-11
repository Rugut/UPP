Ext.define('Обработки.АдреснаяКнига.ФормаПодбора',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 779,
	iconCls: 'bogus',
	title: 'Адресная книга (подбор)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:779px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:9px;width:483px;height:408px;',
			height: 408,width: 483,
			items:
			[
				{
					title:'КонтрагентыКонтактныеЛица',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:143px;',
			height: 143,width: 436,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:230px;width:436px;height:128px;',
			height: 128,width: 436,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'Должность',
				},
				{
					text:'РольКонтактногоЛица',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
				{
					text:'КонтрагентыКонтактныеЛица',
				},
				{
					text:'ПрочиеКонтактныеЛица',
				},
				{
					text:'ВыбратьОбъект',
				},
				{
					text:'ФизическиеЛица',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Организации',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:206px;width:436px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьКонтрагенты',
			text: '>',
			style: 'position:absolute;left:447px;top:79px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьКонтрагентыВсе',
			text: '>>',
			style: 'position:absolute;left:447px;top:101px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьКонтактныеЛицаКонтрагентов',
			text: '>',
			style: 'position:absolute;left:447px;top:272px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьКонтактныеЛицаКонтрагентовВсе',
			text: '>>',
			style: 'position:absolute;left:447px;top:294px;width:28px;height:17px;',
		},
					]
				},
				{
					title:'ФизическиеЛица',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:328px;',
			height: 328,width: 436,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
				{
					text:'ФизическиеЛица',
				},
				{
					text:'Организации',
				},
				{
					text:'ПрочиеКонтактныеЛица',
				},
				{
					text:'КонтрагентыКонтактныеЛица',
				},
				{
					text:'Подменю',
				},
				{
					text:'ВыбратьОбъект',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьФизЛица',
			text: '>',
			style: 'position:absolute;left:447px;top:171px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьФизЛицаВсе',
			text: '>>',
			style: 'position:absolute;left:447px;top:193px;width:28px;height:17px;',
		},
					]
				},
				{
					title:'ПрочиеКонтактныеЛица',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:328px;',
			height: 328,width: 436,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
				{
					text:'ПрочиеКонтактныеЛица',
				},
				{
					text:'ВыбратьОбъект',
				},
				{
					text:'Организации',
				},
				{
					text:'Подменю',
				},
				{
					text:'ФизическиеЛица',
				},
				{
					text:'КонтрагентыКонтактныеЛица',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьПрочиеКонтактныеЛица',
			text: '>',
			style: 'position:absolute;left:447px;top:171px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьПрочиеКонтактныеЛицаВсе',
			text: '>>',
			style: 'position:absolute;left:447px;top:193px;width:28px;height:17px;',
		},
					]
				},
				{
					title:'Организации',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:328px;',
			height: 328,width: 436,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
				{
					text:'ФизическиеЛица',
				},
				{
					text:'КонтрагентыКонтактныеЛица',
				},
				{
					text:'ПрочиеКонтактныеЛица',
				},
				{
					text:'Организации',
				},
				{
					text:'ВыбратьОбъект',
				},
				{
					text:'Подменю',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьОрганизации',
			text: '>',
			style: 'position:absolute;left:447px;top:171px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьОрганизацииВсе',
			text: '>>',
			style: 'position:absolute;left:447px;top:193px;width:28px;height:17px;',
		},
					]
				},
				{
					title:'Личные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:328px;',
			height: 328,width: 436,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьЛичныеКонтакты',
			text: '>',
			style: 'position:absolute;left:447px;top:171px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьЛичныеКонтактыВсе',
			text: '>>',
			style: 'position:absolute;left:447px;top:193px;width:28px;height:17px;',
		},
					]
				},
				{
					title:'Пользователи',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:328px;',
			height: 328,width: 436,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьПользователи',
			text: '>',
			style: 'position:absolute;left:447px;top:171px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьПользователиВсе',
			text: '>>',
			style: 'position:absolute;left:447px;top:193px;width:28px;height:17px;',
		},
					]
				},
				{
					title:'ГруппыОбъектов',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьГруппыОбъектов',
			text: '>',
			style: 'position:absolute;left:447px;top:104px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьГруппыОбъектовВсе',
			text: '>>',
			style: 'position:absolute;left:447px;top:126px;width:28px;height:17px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:178px;',
			height: 178,width: 436,
			columns:
			[
				{
					text:'ПометкаУдаления',
				},
				{
					text:'ГруппаРассылки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
				{
					text:'Обновить',
				},
				{
					text:'Действие9',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:212px;width:436px;height:146px;',
			height: 146,width: 436,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ОбъектРассылки',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьЭлементГруппыОбъектов',
			text: '>',
			style: 'position:absolute;left:447px;top:264px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьЭлементГруппыОбъектовВсе',
			text: '>>',
			style: 'position:absolute;left:447px;top:286px;width:28px;height:17px;',
		},
					]
				},
				{
					title:'Поиск',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьПоиск',
			text: '>',
			style: 'position:absolute;left:447px;top:171px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьПоискВсе',
			text: '>>',
			style: 'position:absolute;left:447px;top:193px;width:28px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтрокаПоиска',
			style: 'position:absolute;left:6px;top:30px;width:361px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:78px;width:436px;height:280px;',
			height: 280,width: 436,
			columns:
			[
				{
					text:'Объект',
				},
				{
					text:'ПредставлениеЗначенияПоУмолчанию',
				},
				{
					text:'ТипОбъекта',
				},
				{
					text:'ДоступныеАдреса',
				},
				{
					text:'ЗначениеПоУмолчанию',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:54px;width:436px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Добавить',
				},
				{
					text:'АдресЭлектроннойПочтыВНовыйОбъект',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие8',
				},
				{
					text:'АдресЭлектроннойПочтыВОбъектТекущейСтроки',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаНайти',
			text: 'Найти',
			style: 'position:absolute;left:372px;top:30px;width:70px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:495px;top:9px;width:276px;height:408px;',
			height: 408,width: 276,
			items:
			[
				{
					title:'Кому',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:40px;top:30px;width:228px;height:352px;',
			height: 352,width: 228,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Объект',
				},
				{
					text:'АдресЭлектроннойПочты',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:40px;top:6px;width:228px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьКому',
			text: '<',
			style: 'position:absolute;left:6px;top:160px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьКомуВсе',
			text: '<<',
			style: 'position:absolute;left:6px;top:182px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьВсе',
			text: '<<<',
			style: 'position:absolute;left:6px;top:204px;width:28px;height:17px;',
		},
					]
				},
				{
					title:'Копии',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:40px;top:6px;width:228px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:40px;top:30px;width:228px;height:352px;',
			height: 352,width: 228,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Объект',
				},
				{
					text:'АдресЭлектроннойПочты',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьКопии',
			text: '<',
			style: 'position:absolute;left:6px;top:160px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьКопииВсе',
			text: '<<',
			style: 'position:absolute;left:6px;top:182px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьВсе2',
			text: '<<<',
			style: 'position:absolute;left:6px;top:204px;width:28px;height:17px;',
		},
					]
				},
				{
					title:'СкрытыеКопии',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:40px;top:6px;width:228px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:40px;top:30px;width:228px;height:352px;',
			height: 352,width: 228,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Объект',
				},
				{
					text:'АдресЭлектроннойПочты',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьСкрытыеКопии',
			text: '<',
			style: 'position:absolute;left:6px;top:160px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьСкрытыеКопииВсе',
			text: '<<',
			style: 'position:absolute;left:6px;top:182px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьВсе3',
			text: '<<<',
			style: 'position:absolute;left:6px;top:204px;width:28px;height:17px;',
		},
					]
				},
				{
					title:'Объекты',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:40px;top:6px;width:228px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:40px;top:30px;width:228px;height:352px;',
			height: 352,width: 228,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Объект',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьОбъекты',
			text: '<',
			style: 'position:absolute;left:6px;top:171px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьОбъектыВсе',
			text: '<<',
			style: 'position:absolute;left:6px;top:193px;width:28px;height:17px;',
		},
					]
				},
			]
		},
	]
});