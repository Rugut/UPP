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
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Отчет',
				},
				'-',
				{
					text:'Файлы',
				},
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Список событий',
				},
				{
					text:'Электронные письма (контрагент + контактные лица)',
				},
				{
					text:'Электронные письма (контрагент)',
				},
					]
				},
				'-',
				'-',
				{
					text:'Файлы',
				},
				'-',
				{
					text:'Написать письмо',
				},
				'-',
				'-',
				{
					text:'Справка',
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
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
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
			tabBar:{hidden:true},
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
				'-',
				{
					text:'Установить основным',
				},
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
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				'-',
				{
					text:'Командная панель контактной информации редактировать в диалоге',
				},
				'-',
				{
					text:'Основная',
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
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
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
					text:'Контактные лица обновить',
				},
				'-',
				{
					text:'Установить основным',
				},
				'-',
				{
					text:'Написать письмо',
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
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'Новая группа',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
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
					text:'Иерархический просмотр',
				},
				{
					text:'Переместить в группу',
				},
				{
					text:'Уровень вверх',
				},
				{
					text:'Уровень вниз',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				{
					xtype: 'splitbutton',
					text:'Сортировка',
					menu: [
				{
					text:'(Поля сортировки)',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Обновить',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'Новая группа',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Редактировать в диалоге',
				},
				'-',
				{
					text:'Иерархический просмотр',
				},
				{
					text:'Переместить в группу',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
				'-',
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Основной',
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
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Просмотр по владельцу',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				{
					xtype: 'splitbutton',
					text:'Сортировка',
					menu: [
				{
					text:'(Поля сортировки)',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Обновить',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
				'-',
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Основной',
				},
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
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
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