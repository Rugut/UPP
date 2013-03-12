Ext.define('Справочники.Контрагенты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:560px;height:454px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Контрагенты',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:560px;height:25px;',
			items:
			[
				{
					text:'Телефонный звонок',
				},
				{
					text:'Заказ покупателя',
				},
				{
					text:'Прочее событие',
				},
				'-',
				'-',
				{
					text:'Личная встреча',
				},
				{
					text:'Событие """"Электронное письмо""""',
				},
				{
					text:'Список событий',
				},
				'-',
				{
					text:'Событие """"Почтовое письмо""""',
				},
				{
					text:'Файлы',
				},
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Отчет',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Заказы покупателей',
				},
				'-',
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'Файлы',
				},
				{
					text:'Написать письмо',
				},
				'-',
				{
					text:'Электронное письмо',
				},
				'-',
				{
					text:'Найти в списке',
				},
				{
					text:'Электронные письма (контрагент)',
				},
				{
					text:'Событие """"Телефонный звонок""""',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Справка',
				},
				'-',
				{
					text:'Прочее',
				},
				{
					text:'',
				},
				{
					text:'Найти в списке',
				},
				{
					text:'Электронные письма (контрагент + контактные лица)',
				},
				'-',
				{
					text:'Записать',
				},
				{
					text:'Почтовое письмо',
				},
				{
					text:'Заказ покупателя',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Заказ поставщику',
				},
				{
					text:'Заказ поставщику',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Продажи',
				},
				{
					text:'Заказы поставщикам',
				},
				{
					text:'Отчет по контрагенту',
				},
				{
					text:'Ведомость по взаиморасчетам',
				},
				{
					text:'Событие """"Личная встреча""""',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:429px;width:560px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				{
					text:'Закрыть',
				},
				'-',
				'-',
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:61px;width:544px;height:336px;',
			height: 336,width: 544,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Покупатель',
			style: 'position:absolute;left:363px;top:6px;width:82px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Поставщик',
			style: 'position:absolute;left:454px;top:6px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГоловнойКонтрагент',
			text: 'Головной контрагент:',
			style: 'position:absolute;left:119px;top:130px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГоловнойКонтрагент',
			style: 'position:absolute;left:238px;top:130px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЮрФизЛицо',
			text: 'Юр. / физ. лицо:',
			style: 'position:absolute;left:6px;top:6px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЮрФизЛицо',
			style: 'position:absolute;left:118px;top:6px;width:105px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:53px;width:530px;height:48px;',
			height: 48,width: 530,
			items:
			[
				{
					title:'Как юридическое лицо',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКодПоОКПО',
			text: 'Код по ОКПО:',
			style: 'position:absolute;left:339px;top:27px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПоОКПО',
			style: 'position:absolute;left:418px;top:27px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПП',
			style: 'position:absolute;left:242px;top:29px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПолное',
			text: 'Полное наименование:',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:112px;top:0px;width:418px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН1',
			style: 'position:absolute;left:112px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаГенарацииКПП',
			text: '',
			style: 'position:absolute;left:193px;top:29px;width:20px;height:19px;',
		},
					]
				},
				{
					title:'Как физическое лицо',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДокументУдостоверяющийЛичность',
			text: 'Документ:',
			style: 'position:absolute;left:0px;top:24px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПолноеФизЛицо',
			text: 'ФИО:',
			style: 'position:absolute;left:0px;top:0px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолноеФизЛицо',
			style: 'position:absolute;left:112px;top:0px;width:418px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:250px;top:24px;width:33px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:286px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументУдостоверяющийЛичность2',
			style: 'position:absolute;left:112px;top:24px;width:131px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПоОКПО1',
			text: 'Код по ОКПО:',
			style: 'position:absolute;left:372px;top:24px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПоОКПО1',
			style: 'position:absolute;left:450px;top:24px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:154px;width:530px;height:156px;',
			height: 156,width: 530,
			items:
			[
				{
					title:'Виды деятельности',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:516px;height:106px;',
			height: 106,width: 516,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Вид деятельности',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:516px;height:24px;',
			items:
			[
				{
					text:'Установить основным',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Как покупатель',
					items:
					[
		{
			xtype: 'label',
			name: 'Надежность',
			text: 'Надежность не указана',
			style: 'position:absolute;left:84px;top:6px;width:438px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:516px;height:124px;',
			height: 124,width: 516,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВажностьКлиента',
			text: 'Важность:',
			style: 'position:absolute;left:343px;top:31px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтадияВзаимоотношений',
			text: 'Стадия взаимоотношений:',
			style: 'position:absolute;left:6px;top:30px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'СтадияВзаимоотношений',
			text: 'Стадия взаимоотношений не указана',
			style: 'position:absolute;left:147px;top:31px;width:190px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИсточникИнформацииПриОбращении',
			text: 'Источник информации:',
			style: 'position:absolute;left:6px;top:6px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ABCКлассПокупателя',
			text: 'ABC-класс не указан',
			style: 'position:absolute;left:412px;top:31px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИсточникИнформации',
			text: 'Источник информации при обращении не указан',
			style: 'position:absolute;left:147px;top:6px;width:361px;height:19px;',
		},
					]
				},
				{
					title:'Менеджеры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:502px;height:68px;',
			height: 68,width: 502,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Менеджер покупателя',
					width:'458',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:502px;height:24px;',
			items:
			[
				{
					text:'Установить основным',
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
					title:'Как поставщик',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНадежность',
			text: 'Надежность:',
			style: 'position:absolute;left:6px;top:6px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокВыполненияЗаказаПоставщиком',
			text: 'Срок выполнения заказа поставщиком (в днях):',
			style: 'position:absolute;left:6px;top:33px;width:252px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокВыполненияЗаказаПоставщиком',
			style: 'position:absolute;left:260px;top:33px;width:60px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасписаниеРаботыСтрокой',
			style: 'position:absolute;left:118px;top:106px;width:202px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа контрагентов:',
			style: 'position:absolute;left:247px;top:30px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:362px;top:30px;width:174px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Входит в холдинг',
			style: 'position:absolute;left:6px;top:130px;width:108px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Регион:',
			style: 'position:absolute;left:345px;top:106px;width:44px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Регион',
			style: 'position:absolute;left:424px;top:106px;width:112px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись63',
			text: 'ОКОПФ:',
			style: 'position:absolute;left:6px;top:30px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОКОПФ',
			style: 'position:absolute;left:118px;top:30px;width:105px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Нерезидент',
			style: 'position:absolute;left:240px;top:6px;width:86px;height:19px;',
		},
					]
				},
				{
					title:'Контакты',
					items:
					[
		{
			xtype: 'label',
			name: 'ТелефоныКонтактногоЛица',
			text: 'Телефоны:',
			style: 'position:absolute;left:6px;top:295px;width:530px;height:15px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:50px;width:530px;height:106px;',
			height: 106,width: 530,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Вид',
					width:'145',
				},
				{
					text:'Представление',
					width:'172',
				},
				{
					text:'Комментарий',
					width:'89',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:26px;width:530px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				'-',
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Командная панель контактной информации редактировать в диалоге',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Основная',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Закончить редактирование',
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'Отключить отбор',
				},
				{
					text:'Вывести список...',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:206px;width:530px;height:87px;',
			height: 87,width: 530,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Контактное лицо контрагента',
					width:'180',
				},
				{
					text:'Должность',
					width:'120',
				},
				{
					text:'Роль ',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:182px;width:530px;height:24px;',
			items:
			[
				'-',
				{
					text:'Установить пометку удаления',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Электронные письма',
				},
				'-',
				{
					text:'Установить основным',
				},
				{
					text:'Написать письмо',
				},
				'-',
				'-',
				'-',
				{
					text:'Контактные лица обновить',
				},
				{
					text:'Список событий',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Добавить',
				},
			]
		},
					]
				},
				{
					title:'Счета и договоры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:202px;width:530px;height:108px;',
			height: 108,width: 530,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Код',
					width:'65',
				},
				{
					text:'Наименование',
					width:'156',
				},
				{
					text:'Ведение взаиморасчетов',
					width:'140',
				},
				{
					text:'Вид договора',
					width:'110',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Дата',
					width:'80',
				},
				{
					text:'Организация',
					width:'99',
				},
				{
					text:'Валюта взаиморасчетов',
					width:'128',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:178px;width:530px;height:24px;',
			items:
			[
				'-',
				'-',
				'-',
				{
					text:'Отключить отбор',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'Уровень вниз',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'Иерархический просмотр',
				},
				{
					text:'Уровень вверх',
				},
				{
					text:'Иерархический просмотр',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Переместить в группу',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Новая группа',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				'-',
				{
					text:'Настройка списка...',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Отключить отбор',
				},
				{
					text:'Новая группа',
				},
				{
					text:'Обновить',
				},
				{
					text:'',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Редактировать в диалоге',
				},
				'-',
				{
					text:'Просмотр по владельцу',
				},
				{
					text:'',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Переместить в группу',
				},
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Основной',
				},
				{
					text:'',
				},
				{
					text:'Редактировать в диалоге',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:530px;height:110px;',
			height: 110,width: 530,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'67',
				},
				{
					text:'Наименование',
					width:'264',
				},
				{
					text:'Банк',
					width:'230',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:530px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Основной',
				},
				{
					text:'Вывести список...',
				},
				'-',
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Настройка списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				'-',
				{
					text:'Просмотр по владельцу',
				},
				{
					text:'&Изменить',
				},
				{
					text:'',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				'-',
				{
					text:'Отключить отбор',
				},
				{
					text:'',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Обновить',
				},
				'-',
				{
					text:'&Скопировать',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРасписаниеРаботыСтрокой',
			text: 'Расписание работы:',
			style: 'position:absolute;left:6px;top:106px;width:110px;height:19px;',
		},
					]
				},
				{
					title:'События',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:530px;height:286px;',
			height: 286,width: 530,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'',
					width:'29',
				},
				{
					text:'',
					width:'32',
				},
				{
					text:'Номер',
					width:'44',
				},
				{
					text:'Дата',
					width:'48',
				},
				{
					text:'Вид события',
					width:'110',
				},
				{
					text:'Контактное лицо',
					width:'122',
				},
				{
					text:'Описание события',
					width:'118',
				},
				{
					text:'Ответственный',
					width:'107',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:530px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Свойства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:530px;height:286px;',
			height: 286,width: 530,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Свойство',
					width:'186',
				},
				{
					text:'Значение',
					width:'302',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:530px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Категории',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:530px;height:286px;',
			height: 286,width: 530,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'',
					width:'32',
				},
				{
					text:'Категория',
					width:'465',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:530px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Изменить',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаДоступаКонтрагента',
			style: 'position:absolute;left:170px;top:14px;width:366px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись64',
			text: 'Группа доступа к контрагенту:',
			style: 'position:absolute;left:6px;top:14px;width:164px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:472px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:338px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:432px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:402px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КомментарийСтрокой',
			style: 'position:absolute;left:94px;top:402px;width:458px;height:19px;',
		},
	]
});