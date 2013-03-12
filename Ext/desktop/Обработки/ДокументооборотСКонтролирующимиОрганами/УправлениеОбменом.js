Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменом',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:794px;height:524px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документооборот с контролирующими органами',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:794px;height:25px;',
			items:
			[
				{
					text:'Режим одной учетной записи',
				},
				{
					text:'Внешние электронные представления отчетов',
				},
				{
					text:'Органы ПФР',
				},
				{
					text:'Налоговые органы',
				},
				{
					text:'Получить',
				},
				{
					text:'Обменяться',
				},
				{
					text:'Виды отправляемых документов',
				},
				{
					text:'Регламентированные отчеты',
				},
				{
					text:'Архив документооборота с ФНС',
				},
				{
					text:'Отправить',
				},
				'-',
				{
					text:'Заявления на подключение',
				},
				'-',
				'-',
				{
					text:'Учетные записи документооборота',
				},
				'-',
				'-',
				{
					text:'Серверы документооборота',
				},
				{
					text:'Органы ФСГС',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:561px;top:0px;width:233px;height:24px;',
			items:
			[
				{
					text:'Предыдущий год',
				},
				{
					text:'Предыдущая неделя',
				},
				{
					text:'Произвольный период',
				},
				{
					text:'Текущий месяц',
				},
				{
					text:'Без ограничений',
				},
				'-',
				{
					text:'Текущий год',
				},
				{
					text:'Предыдущий квартал',
				},
				{
					text:'Предыдущий месяц',
				},
				{
					text:'Сегодня',
				},
				{
					text:'Текущий квартал',
				},
				{
					text:'Текущая неделя',
				},
				{
					text:'Вчера',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:778px;height:23px;',
			height: 23,width: 778,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1УчетнаяЗапись',
			text: 'Учетная запись:',
			style: 'position:absolute;left:0px;top:2px;width:92px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборУчетнаяЗапись',
			style: 'position:absolute;left:97px;top:0px;width:681px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:778px;height:456px;',
			height: 456,width: 778,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:201px;top:0px;width:577px;height:456px;',
			height: 456,width: 577,
			items:
			[
				{
					title:'ФНС',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:543px;height:442px;',
			height: 442,width: 543,
			items:
			[
				{
					title:'Отчетность',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:85px;width:529px;height:331px;',
			height: 331,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Вид отчета',
					width:'120',
				},
				{
					text:'Период',
					width:'120',
				},
				{
					text:'Вид',
					width:'36',
				},
				{
					text:'Дата начала',
					width:'112',
				},
				{
					text:'Дата завершения',
					width:'112',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Первичное сообщение, содержащее отчетность',
					width:'25',
				},
				{
					text:'Подтверждение даты отправки',
					width:'25',
				},
				{
					text:'Извещение о получении подтверждения даты отправки',
					width:'25',
				},
				{
					text:'Извещение о получении отчетности',
					width:'25',
				},
				{
					text:'Результат приема отчетности',
					width:'25',
				},
				{
					text:'Извещение о получении результата приема',
					width:'25',
				},
				{
					text:'Результат обработки отчетности',
					width:'25',
				},
				{
					text:'Извещение о получении результата обработки',
					width:'25',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Налоговый орган',
					width:'120',
				},
				{
					text:'Дата последнего сообщения',
					width:'112',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:22px;',
			height: 22,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОтбораЦикловОбмена',
			style: 'position:absolute;left:0px;top:0px;width:148px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:153px;top:0px;width:376px;height:21px;',
			height: 21,width: 376,
			items:
			[
				{
					title:'По отчету',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетДляОтбора',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетДляОтбораСтрока',
			style: 'position:absolute;left:0px;top:0px;width:331px;height:19px;',
		},
					]
				},
				{
					title:'По виду отчета',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОтчета',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
					]
				},
				{
					title:'По периоду отчета',
				},
				{
					title:'По виду документа',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:310px;top:0px;width:41px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: '№ корректировки:',
			style: 'position:absolute;left:195px;top:2px;width:111px;height:15px;',
		},
					]
				},
				{
					title:'По электронному представлению',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЭлектронноеПредставлениеДляОтбора',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
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
			style: 'position:absolute;left:6px;top:52px;width:529px;height:33px;',
			height: 33,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Год',
			style: 'position:absolute;left:93px;top:4px;width:55px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:24px;',
			items:
			[
				'-',
				{
					text:'Зашифровать',
				},
				{
					text:'Расшифровать',
				},
				{
					text:'Подписать',
				},
				{
					text:'Снять все флажки',
				},
				'-',
				{
					text:'Показать документы',
				},
				{
					text:'Выгрузить контейнеры и их содержимое',
				},
				{
					text:'Показать отчеты о состоянии',
				},
				{
					text:'Выгрузить контейнеры',
				},
				'-',
				'-',
				'-',
				{
					text:'Сформировать подтверждения',
				},
				{
					text:'Выгрузить содержимое',
				},
				{
					text:'Открыть исходный отчет',
				},
				'-',
				'-',
				{
					text:'Установить все флажки',
				},
				{
					text:'Найти исходный отчет в списке',
				},
				'-',
				{
					text:'Отобрать',
				},
			]
		},
					]
				},
				{
					title:'Заявления о ввозе товаров',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:85px;width:529px;height:331px;',
			height: 331,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Вид отчета',
					width:'120',
				},
				{
					text:'Период',
					width:'120',
				},
				{
					text:'Дата начала',
					width:'112',
				},
				{
					text:'Дата завершения',
					width:'112',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Первичное сообщение, содержащее отчетность',
					width:'25',
				},
				{
					text:'Подтверждение даты отправки',
					width:'25',
				},
				{
					text:'Извещение о получении подтверждения даты отправки',
					width:'25',
				},
				{
					text:'Извещение о получении отчетности',
					width:'25',
				},
				{
					text:'Результат приема отчетности',
					width:'25',
				},
				{
					text:'Извещение о получении результата приема',
					width:'25',
				},
				{
					text:'Результат обработки отчетности',
					width:'25',
				},
				{
					text:'Извещение о получении результата обработки',
					width:'25',
				},
				{
					text:'Возврат заявления',
					width:'25',
				},
				{
					text:'Извещение о получении сообщения о возврате заявления',
					width:'25',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Налоговый орган',
					width:'120',
				},
				{
					text:'Дата последнего сообщения',
					width:'112',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:22px;',
			height: 22,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОтбораЦикловОбменаЗаявление',
			style: 'position:absolute;left:0px;top:0px;width:148px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:153px;top:0px;width:376px;height:21px;',
			height: 21,width: 376,
			items:
			[
				{
					title:'По отчету',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетДляОтбораЗаявление',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление1',
			text: 'Янв',
			style: 'position:absolute;left:1px;top:4px;width:25px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление3',
			text: 'I кв',
			style: 'position:absolute;left:57px;top:4px;width:28px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление5',
			text: 'Май',
			style: 'position:absolute;left:114px;top:4px;width:25px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление7',
			text: 'Июл',
			style: 'position:absolute;left:171px;top:4px;width:25px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление9',
			text: 'III кв',
			style: 'position:absolute;left:224px;top:4px;width:32px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление11',
			text: 'Ноя',
			style: 'position:absolute;left:282px;top:4px;width:25px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление2',
			text: 'Фев',
			style: 'position:absolute;left:30px;top:4px;width:25px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление4',
			text: 'Апр',
			style: 'position:absolute;left:86px;top:4px;width:25px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление6',
			text: 'II кв',
			style: 'position:absolute;left:141px;top:4px;width:28px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление8',
			text: 'Авг',
			style: 'position:absolute;left:198px;top:4px;width:25px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление10',
			text: 'Окт',
			style: 'position:absolute;left:256px;top:4px;width:25px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление12',
			text: 'IV кв',
			style: 'position:absolute;left:307px;top:4px;width:32px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетДляОтбораЗаявлениеСтрока',
			style: 'position:absolute;left:0px;top:0px;width:331px;height:19px;',
		},
					]
				},
				{
					title:'По периоду отчета',
				},
				{
					title:'По электронному представлению',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЭлектронноеПредставлениеДляОтбораЗаявление',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
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
			style: 'position:absolute;left:6px;top:52px;width:529px;height:33px;',
			height: 33,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьГодЗаявление',
			text: 'Год:',
			style: 'position:absolute;left:63px;top:7px;width:23px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГодЗаявление',
			style: 'position:absolute;left:93px;top:4px;width:55px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:24px;',
			items:
			[
				{
					text:'Открыть исходный отчет',
				},
				{
					text:'Снять все флажки',
				},
				'-',
				'-',
				{
					text:'Найти исходный отчет в списке',
				},
				'-',
				{
					text:'Установить все флажки',
				},
				{
					text:'Показать документы',
				},
				'-',
				{
					text:'Выгрузить контейнеры и их содержимое',
				},
				{
					text:'Отобрать',
				},
				{
					text:'Выгрузить содержимое',
				},
				{
					text:'Выгрузить контейнеры',
				},
				{
					text:'Показать отчеты о состоянии',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Требования и уведомления',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:529px;height:252px;',
			height: 252,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Дата документа',
					width:'99',
				},
				{
					text:'Номер документа',
					width:'100',
				},
				{
					text:'Вид документа',
					width:'227',
				},
				{
					text:'Налоговый орган',
					width:'106',
				},
				{
					text:'Организация',
					width:'110',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			items:
			[
				'-',
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'Отображать панель обмена',
				},
				'-',
				{
					text:'Открыть',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие5',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:128px;',
			height: 128,width: 529,
			columns:
			[
				{
					text:'Дата начала',
					width:'128',
				},
				{
					text:'Дата завершения',
					width:'128',
				},
				{
					text:'Первичное сообщение, содержащее документ налогового орагана',
					width:'25',
				},
				{
					text:'Подтверждение доставки документа налогоплательщику',
					width:'25',
				},
				{
					text:'Результат приема документа',
					width:'25',
				},
				{
					text:'Извещение о получении результата приема',
					width:'25',
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Исходящие документы',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:529px;height:252px;',
			height: 252,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Дата создания',
					width:'119',
				},
				{
					text:'Получатель',
					width:'68',
				},
				{
					text:'Тема',
					width:'187',
				},
				{
					text:'Организация',
					width:'112',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'&Новый',
				},
				{
					text:'Отображать панель обмена',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:128px;',
			height: 128,width: 529,
			columns:
			[
				{
					text:'Дата начала',
					width:'128',
				},
				{
					text:'Дата завершения',
					width:'128',
				},
				{
					text:'Обращение налогоплательщика',
					width:'25',
				},
				{
					text:'Подтверждение даты отправки',
					width:'25',
				},
				{
					text:'Извещение о получении подтверждения даты отправки',
					width:'25',
				},
				{
					text:'Извещение о получении обращения',
					width:'25',
				},
				{
					text:'Результат приема обращения',
					width:'25',
				},
				{
					text:'Извещение о получении результата приема',
					width:'25',
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
				},
				{
					text:'Наименование',
					width:'228',
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Входящие документы',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:529px;height:252px;',
			height: 252,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Дата получения',
					width:'120',
				},
				{
					text:'Отправитель',
					width:'83',
				},
				{
					text:'Тема',
					width:'173',
				},
				{
					text:'Организация',
					width:'112',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				{
					text:'Отображать панель обмена',
				},
				'-',
				{
					text:'Открыть',
				},
				{
					text:'',
				},
				{
					text:'Ответить',
				},
				'-',
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:128px;',
			height: 128,width: 529,
			columns:
			[
				{
					text:'Дата начала',
					width:'128',
				},
				{
					text:'Дата завершения',
					width:'128',
				},
				{
					text:'Первичное сообщение, содержащее документ налогоплательщика',
					width:'25',
				},
				{
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Запросы',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:128px;',
			height: 128,width: 529,
			columns:
			[
				{
					text:'Дата начала',
					width:'128',
				},
				{
					text:'Дата завершения',
					width:'128',
				},
				{
					text:'Первичное сообщение, содержащее отчетность',
					width:'25',
				},
				{
					text:'Подтверждение даты отправки',
					width:'25',
				},
				{
					text:'Извещение о получении подтверждения даты отправки',
					width:'25',
				},
				{
					text:'Извещение о получении отчетности',
					width:'25',
				},
				{
					text:'Результат приема отчетности',
					width:'25',
				},
				{
					text:'Извещение о получении результата приема',
					width:'25',
				},
				{
					text:'Результат обработки отчетности',
					width:'25',
				},
				{
					text:'Извещение о получении результата обработки',
					width:'25',
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
				},
				{
					text:'Наименование',
					width:'228',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			items:
			[
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'',
				},
				{
					text:'&Новый',
				},
				{
					text:'Отображать панель обмена',
				},
				{
					text:'Действие4',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:529px;height:252px;',
			height: 252,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Дата создания',
					width:'119',
				},
				{
					text:'Начало периода',
					width:'100',
				},
				{
					text:'Конец периода',
					width:'100',
				},
				{
					text:'Вид услуги',
					width:'104',
				},
				{
					text:'Организация',
					width:'90',
				},
				{
					text:'Ответ',
					width:'100',
				},
				{
					text:'Формат ответа',
					width:'100',
				},
				{
					text:'Номер',
					width:'90',
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
		},
					]
				},
				{
					title:'ПФР',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:543px;height:442px;',
			height: 442,width: 543,
			items:
			[
				{
					title:'Отчетность',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:52px;width:529px;height:364px;',
			height: 364,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Отчет',
					width:'138',
				},
				{
					text:'Период',
					width:'109',
				},
				{
					text:'Дата начала',
					width:'75',
				},
				{
					text:'Дата завершения',
					width:'74',
				},
				{
					text:'Первичное сообщение, содержащее файл отчетности',
					width:'25',
				},
				{
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
				},
				{
					text:'Протокол',
					width:'25',
				},
				{
					text:'Квитанция на протокол',
					width:'25',
				},
				{
					text:'Вид отчета',
					width:'120',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Орган ПФР',
					width:'120',
				},
				{
					text:'Дата последнего сообщения',
					width:'112',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:22px;',
			height: 22,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОтбораЦикловОбменаПФР',
			style: 'position:absolute;left:0px;top:0px;width:148px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:153px;top:0px;width:376px;height:21px;',
			height: 21,width: 376,
			items:
			[
				{
					title:'По отчету',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетДляОтбораПФР',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетДляОтбораСтрокаПФР',
			style: 'position:absolute;left:0px;top:0px;width:331px;height:19px;',
		},
					]
				},
				{
					title:'По виду отчета',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОтчетаПФР',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
					]
				},
				{
					title:'По электронному представлению',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЭлектронноеПредставлениеДляОтбораПФР',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:24px;',
			items:
			[
				{
					text:'Показать отчеты о состоянии',
				},
				{
					text:'Выгрузить контейнеры',
				},
				{
					text:'Установить все флажки',
				},
				{
					text:'Журнал документов персонифицированного учета',
				},
				'-',
				'-',
				{
					text:'Открыть исходный отчет',
				},
				{
					text:'Снять все флажки',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Показать документы',
				},
				{
					text:'Выгрузить содержимое',
				},
				{
					text:'Отобрать',
				},
				{
					text:'Выгрузить контейнеры и их содержимое',
				},
			]
		},
					]
				},
				{
					title:'Исходящие документы',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:529px;height:252px;',
			height: 252,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Дата создания',
					width:'119',
				},
				{
					text:'Получатель',
					width:'112',
				},
				{
					text:'Тема',
					width:'144',
				},
				{
					text:'Организация',
					width:'112',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				{
					text:'Отображать панель обмена',
				},
				{
					text:'&Новый',
				},
				'-',
				{
					text:'Действие6',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:128px;',
			height: 128,width: 529,
			columns:
			[
				{
					text:'Дата начала',
					width:'128',
				},
				{
					text:'Дата завершения',
					width:'128',
				},
				{
					text:'Первичное сообщение, содержащее документ налогоплательщика',
					width:'25',
				},
				{
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
				},
				{
					text:'Наименование',
					width:'228',
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Входящие документы',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:529px;height:252px;',
			height: 252,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Отправитель',
					width:'112',
				},
				{
					text:'Дата получения',
					width:'120',
				},
				{
					text:'Тема',
					width:'144',
				},
				{
					text:'Организация',
					width:'112',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Отображать панель обмена',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'Открыть',
				},
				{
					text:'',
				},
				{
					text:'Ответить',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:128px;',
			height: 128,width: 529,
			columns:
			[
				{
					text:'Дата начала',
					width:'128',
				},
				{
					text:'Дата завершения',
					width:'128',
				},
				{
					text:'Первичное сообщение, содержащее документ налогоплательщика',
					width:'25',
				},
				{
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
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
		},
					]
				},
				{
					title:'Росстат',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:543px;height:442px;',
			height: 442,width: 543,
			items:
			[
				{
					title:'Отчетность',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:52px;width:529px;height:364px;',
			height: 364,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Отчет',
					width:'138',
				},
				{
					text:'Период',
					width:'109',
				},
				{
					text:'Дата начала',
					width:'75',
				},
				{
					text:'Дата завершения',
					width:'74',
				},
				{
					text:'Первичное сообщение, содержащее файл отчетности',
					width:'25',
				},
				{
					text:'Подтверждение даты отправки',
					width:'25',
				},
				{
					text:'Извещение о получении подтверждения даты отправки',
					width:'25',
				},
				{
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
				},
				{
					text:'Протокол',
					width:'25',
				},
				{
					text:'Квитанция на протокол',
					width:'25',
				},
				{
					text:'Вид отчета',
					width:'120',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Орган ФСГС',
					width:'120',
				},
				{
					text:'Дата последнего сообщения',
					width:'112',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:22px;',
			height: 22,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОтбораЦикловОбменаФСГС',
			style: 'position:absolute;left:0px;top:0px;width:148px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:153px;top:0px;width:376px;height:21px;',
			height: 21,width: 376,
			items:
			[
				{
					title:'По отчету',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетДляОтбораФСГС',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетДляОтбораСтрокаФСГС',
			style: 'position:absolute;left:0px;top:0px;width:331px;height:19px;',
		},
					]
				},
				{
					title:'По виду отчета',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОтчетаФСГС',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
					]
				},
				{
					title:'По электронному представлению',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЭлектронноеПредставлениеДляОтбораФСГС',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:24px;',
			items:
			[
				'-',
				'-',
				{
					text:'Выгрузить контейнеры и их содержимое',
				},
				'-',
				{
					text:'Показать отчеты о состоянии',
				},
				{
					text:'Установить все флажки',
				},
				{
					text:'Выгрузить содержимое',
				},
				'-',
				'-',
				{
					text:'Открыть исходный отчет',
				},
				{
					text:'Отобрать',
				},
				{
					text:'Выгрузить контейнеры',
				},
				{
					text:'Снять все флажки',
				},
				'-',
				{
					text:'Показать документы',
				},
			]
		},
					]
				},
				{
					title:'Исходящие документы',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:529px;height:252px;',
			height: 252,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Дата создания',
					width:'119',
				},
				{
					text:'Получатель',
					width:'112',
				},
				{
					text:'Тема',
					width:'144',
				},
				{
					text:'Организация',
					width:'112',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			items:
			[
				'-',
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'&Новый',
				},
				{
					text:'Действие3',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Отображать панель обмена',
				},
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:128px;',
			height: 128,width: 529,
			columns:
			[
				{
					text:'Дата начала',
					width:'128',
				},
				{
					text:'Дата завершения',
					width:'128',
				},
				{
					text:'Первичное сообщение, содержащее документ респондента',
					width:'25',
				},
				{
					text:'Подтверждение даты отправки',
					width:'25',
				},
				{
					text:'Извещение о получении подтверждения даты отправки',
					width:'25',
				},
				{
					text:'Подтверждение доставки документа в орган ФСГС',
					width:'25',
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
				},
				{
					text:'Наименование',
					width:'228',
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Входящие документы',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:529px;height:252px;',
			height: 252,width: 529,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Отправитель',
					width:'112',
				},
				{
					text:'Дата получения',
					width:'120',
				},
				{
					text:'Тема',
					width:'144',
				},
				{
					text:'Организация',
					width:'112',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Открыть',
				},
				{
					text:'Отображать панель обмена',
				},
				'-',
				{
					text:'Ответить',
				},
				'-',
				{
					text:'',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:128px;',
			height: 128,width: 529,
			columns:
			[
				{
					text:'Дата начала',
					width:'128',
				},
				{
					text:'Дата завершения',
					width:'128',
				},
				{
					text:'Первичное сообщение, содержащее документ ФСГС',
					width:'25',
				},
				{
					text:'Подтверждение доставки документа',
					width:'25',
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
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
		},
					]
				},
				{
					title:'Прочее',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:543px;height:442px;',
			height: 442,width: 543,
			items:
			[
				{
					title:'Прочие',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:41px;width:543px;height:401px;',
			height: 401,width: 543,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Дата получения',
					width:'128',
				},
				{
					text:'Отправитель',
					width:'159',
				},
				{
					text:'Тема',
					width:'212',
				},
				{
					text:'От кого',
					width:'122',
				},
				{
					text:'Дата отправки',
					width:'128',
				},
				{
					text:'Учетная запись',
					width:'153',
				},
				{
					text:'Пометка удаления',
					width:'70',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:543px;height:24px;',
			items:
			[
				{
					text:'Открыть',
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
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:195px;height:456px;',
			height: 456,width: 195,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:48px;width:195px;height:408px;',
			height: 408,width: 195,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Объект',
					width:'21',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:23px;width:195px;height:24px;',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
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
		},
	]
});