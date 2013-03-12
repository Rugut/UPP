Ext.define('Обработки.МенеджерКонтактов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:837px;height:496px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Менеджер контактов',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:25px;width:837px;height:471px;',
			height: 471,width: 837,
			items:
			[
				{
					title:'Календарь',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:804px;height:457px;',
			height: 457,width: 804,
			items:
			[
				{
					title:'Список',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВыбКонтрагент',
			style: 'position:absolute;left:89px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:1px;top:0px;width:88px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:24px;width:804px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				'-',
				{
					text:'Отбор по текущему значению',
				},
				{
					text:'Список событий',
				},
				'-',
				{
					text:'Список документов',
				},
				'-',
				{
					text:'Вывести список',
				},
				'-',
				{
					text:'Событие',
				},
				'-',
				'-',
				{
					text:'Заказ покупателя',
				},
				{
					text:'Заказ поставщику',
				},
				'-',
				{
					text:'Заказ покупателя',
				},
				{
					text:'Настроить интервал',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Документы по заказу',
				},
				{
					text:'Действие2',
				},
				'-',
				'-',
				'-',
				{
					text:'Настроить отбор',
				},
				{
					text:'Отчет по событиям',
				},
				{
					text:'Действие3',
				},
				{
					text:'Снять отбор',
				},
				{
					text:'Настройка списка',
				},
				{
					text:'Снять отбор',
				},
				{
					text:'Взаиморасчеты',
				},
				{
					text:'Все документы',
				},
				{
					text:'Действие2',
				},
				{
					text:'Настроить интервал',
				},
				{
					text:'Действие1',
				},
				{
					text:'Заказ поставщику',
				},
				'-',
				{
					text:'Настроить отбор',
				},
				{
					text:'Событие',
				},
				{
					text:'Отбор по текущему значению',
				},
				'-',
				{
					text:'Анализ заказа',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Все документы',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:48px;width:804px;height:409px;',
			height: 409,width: 804,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Дата документа',
					width:'52',
				},
				{
					text:'Дата события',
					width:'93',
				},
				{
					text:'Номер',
					width:'76',
				},
				{
					text:'Вид документа',
					width:'101',
				},
				{
					text:'Вид операции',
					width:'96',
				},
				{
					text:'Контрагент',
					width:'138',
				},
				{
					text:'Информация',
					width:'140',
				},
			]
		},
					]
				},
				{
					title:'День',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьМесяца',
			text: '',
			style: 'position:absolute;left:0px;top:0px;width:513px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНедели',
			text: '',
			style: 'position:absolute;left:0px;top:0px;width:623px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДеньНазад',
			text: '< Пред. день',
			style: 'position:absolute;left:651px;top:0px;width:75px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДеньВперед',
			text: 'След. день >',
			style: 'position:absolute;left:730px;top:0px;width:74px;height:22px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:30px;width:671px;height:427px;',
			height: 427,width: 671,
			items:
			[
				{
					title:'Грид',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:339px;top:0px;width:332px;height:427px;',
			height: 427,width: 332,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Вид операции',
					width:'136',
				},
				{
					text:'Контрагент',
					width:'133',
				},
			]
		},
					]
				},
				{
					title:'Моксель',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДня',
			text: '',
			style: 'position:absolute;left:0px;top:0px;width:200px;height:22px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:671px;top:420px;width:133px;height:26px;',
			items:
			[
				{
					text:'Изменить время',
				},
				'-',
				'-',
				{
					text:'Пометить как """"Отменено""""',
				},
				{
					text:'Изменить событие',
				},
				{
					text:'Пометить как """"Завершено""""',
				},
			]
		},
					]
				},
				{
					title:'Неделя',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаНеделяНазад',
			text: '< Пред. неделя',
			style: 'position:absolute;left:627px;top:0px;width:87px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНеделяВперед',
			text: 'След. неделя >',
			style: 'position:absolute;left:718px;top:0px;width:86px;height:22px;',
		},
					]
				},
				{
					title:'Месяц',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаМесяцНазад',
			text: '< Пред. месяц',
			style: 'position:absolute;left:517px;top:0px;width:87px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаМесяцВперед',
			text: 'След. месяц >',
			style: 'position:absolute;left:607px;top:0px;width:86px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбратьМесяц',
			text: 'Выбрать месяц',
			style: 'position:absolute;left:697px;top:0px;width:107px;height:22px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Почта',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:231px;top:30px;width:578px;height:161px;',
			height: 161,width: 578,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'',
					width:'19',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'От кого',
					width:'120',
				},
				{
					text:'Кому',
					width:'120',
				},
				{
					text:'Тема',
					width:'220',
				},
				{
					text:'Дата отправления',
					width:'120',
				},
				{
					text:'Дата транспорта',
					width:'120',
				},
				{
					text:'Не рассмотрено с ...',
					width:'64',
				},
				{
					text:'Дата создания',
					width:'105',
				},
				{
					text:'Ответственный',
					width:'84',
				},
				{
					text:'Предмет',
					width:'87',
				},
				{
					text:'Группа учетной записи',
					width:'104',
				},
				{
					text:'Основание',
					width:'100',
				},
				{
					text:'Номер',
					width:'88',
				},
				{
					text:'Учетная запись',
					width:'107',
				},
				{
					text:'Копии',
					width:'100',
				},
				{
					text:'Комментарий',
					width:'100',
				},
				{
					text:'Текст письма',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:283px;top:373px;width:473px;height:24px;',
			items:
			[
				{
					text:'Снять оформление',
				},
				{
					text:'Применить к выбранным письмам фильтры',
				},
				{
					text:'Изменить',
				},
				'-',
				'-',
				{
					text:'Создать фильтр по письму',
				},
				'-',
				'-',
				{
					text:'Скопировать',
				},
				{
					text:'Структура подчиненности',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'Установить """"Не рассмотрено""""',
				},
				{
					text:'Новое письмо в текущей группе',
				},
				'-',
				{
					text:'Выделить видимые строки',
				},
				'-',
				{
					text:'Создать событие по письму',
				},
				{
					text:'Показать заголовок письма',
				},
				'-',
				'-',
				{
					text:'Ответить всем',
				},
				{
					text:'Новое письмо',
				},
				{
					text:'Настроить возможные оформления ...',
				},
				'-',
				{
					text:'Установить """"Рассмотрено""""',
				},
				{
					text:'Отправить выбранные письма',
				},
				'-',
				{
					text:'Переслать',
				},
				{
					text:'Ответить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:650px;top:439px;width:106px;height:24px;',
			items:
			[
				{
					text:'Найти/Добавить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:650px;top:439px;width:106px;height:24px;',
			items:
			[
				{
					text:'Найти/Добавить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:650px;top:439px;width:106px;height:24px;',
			items:
			[
				{
					text:'Найти/Добавить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:652px;top:439px;width:104px;height:24px;',
			items:
			[
				{
					text:'Открыть ссылку',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:310px;top:330px;width:200px;height:24px;',
			items:
			[
				{
					text:'Создать опрос',
				},
				{
					text:'Снять отбор по предметам',
				},
				{
					text:'Отображать скрытые предметы',
				},
				{
					text:'Изменить предмет',
				},
				'-',
				{
					text:'Установить/Снять скрытость предмета',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:765px;top:439px;width:44px;height:24px;',
			items:
			[
				{
					text:'Снять отбор по группе',
				},
				{
					text:'Установить """"Рассмотрено""""',
				},
				{
					text:'Переместить вниз',
				},
				{
					text:'Применить к письмам папки фильтры',
				},
				'-',
				{
					text:'Переместить вверх',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:231px;top:197px;width:578px;height:49px;',
			height: 49,width: 578,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'От кого:',
			style: 'position:absolute;left:6px;top:0px;width:56px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Тема:',
			style: 'position:absolute;left:6px;top:24px;width:56px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеОтправитель',
			style: 'position:absolute;left:64px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеТема',
			style: 'position:absolute;left:64px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Кому:',
			style: 'position:absolute;left:290px;top:0px;width:44px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Копии:',
			style: 'position:absolute;left:290px;top:24px;width:44px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеКому',
			style: 'position:absolute;left:336px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеКопии',
			style: 'position:absolute;left:336px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВложения',
			text: '',
			style: 'position:absolute;left:556px;top:0px;width:22px;height:43px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:220px;height:433px;',
			height: 433,width: 220,
			items:
			[
				{
					title:'Список предметов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:220px;height:210px;',
			height: 210,width: 220,
			columns:
			[
				{
					text:'Группа',
					width:'120',
				},
				{
					text:'Учетная запись',
					width:'90',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:216px;width:220px;height:217px;',
			height: 217,width: 220,
			columns:
			[
				{
					text:'Предметы писем',
					width:'180',
				},
			]
		},
					]
				},
				{
					title:'Дерево групп',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:220px;height:433px;',
			height: 433,width: 220,
			columns:
			[
				{
					text:'Группа',
					width:'120',
				},
				{
					text:'Учетная запись',
					width:'60',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:705px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Неделя',
				},
				{
					text:'Список событий',
				},
				{
					text:'Месяц',
				},
				{
					text:'День',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:705px;top:0px;width:132px;height:25px;',
			items:
			[
				{
					text:'Настройка',
				},
				{
					text:'Справка',
				},
				{
					text:'Обновить',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:755px;height:25px;',
			items:
			[
				{
					text:'Изменить',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Создать событие по письму',
				},
				'-',
				'-',
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Применить к выбранным письмам фильтры',
				},
				{
					text:'Обновить',
				},
				{
					text:'Отправить письма (текущая учетная запись)',
				},
				'-',
				{
					text:'Адресная книга',
				},
				{
					text:'Поиск',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Автополучение/отправка писем',
				},
				{
					text:'',
				},
				{
					text:'Новое письмо',
				},
				'-',
				{
					text:'Получить письма',
				},
				{
					text:'Установить """"Не рассмотрено""""',
				},
				'-',
				{
					text:'Отправить (текущая учетная запись)',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				{
					text:'Получить (текущая учетная запись)',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Загрузка почтовых сообщений',
				},
				'-',
				'-',
				{
					text:'Установить """"Рассмотрено""""',
				},
				{
					text:'Список учетных записей',
				},
				'-',
				{
					text:'Ответить всем',
				},
				'-',
				'-',
				{
					text:'Рассмотренность по текущему пользователю',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Переслать',
				},
				'-',
				{
					text:'Экспорт/Импорт контактной информации',
				},
				{
					text:'Адресная книга',
				},
				{
					text:'Действие6',
				},
				{
					text:'Обновить список доступных учетных записей',
				},
				{
					text:'Использовать предметы писем',
				},
				{
					text:'Действие10',
				},
				'-',
				'-',
				'-',
				{
					text:'Новое письмо',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Ответить',
				},
				{
					text:'Новое письмо в текущей группе',
				},
				'-',
				{
					text:'Установить/Снять пометку удаления',
				},
				{
					text:'Действие7',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Действие5',
				},
				{
					text:'Ответить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:755px;top:0px;width:82px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие',
				},
				{
					text:'Обновить',
				},
			]
		},
	]
});