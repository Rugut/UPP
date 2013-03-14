Ext.define('Документы.НачислениеЗарплатыРаботникамОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:720px;height:578px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Начисление зарплаты сотрудникам организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:416px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:510px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:610px;top:33px;width:102px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:8px;top:56px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:110px;top:56px;width:202px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:416px;top:56px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:510px;top:56px;width:202px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:526px;width:75px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:85px;top:526px;width:627px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			items:
			[
				{
					text:'Полный расчет',
				},
				'-',
				{
					text:'Расчет начислений',
				},
				{
					text:'Погашение займов',
				},
				{
					text:'Расчет НДФЛ',
				},
				{
					text:'Расчет удержаний',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:246px;top:553px;width:474px;height:25px;',
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
			style: 'position:absolute;left:8px;top:158px;width:704px;height:231px;',
			height: 231,width: 704,
			items:
			[
				{
					title:'Основные начисления',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:690px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:690px;height:180px;',
			height: 180,width: 690,
			columns:
			[
				{
					text:'Картинка',
					width:'21',
				},
				{
					text:'Признак автоматического расчета',
					width:'21',
				},
				{
					text:'№',
					width:'30',
				},
				{
					text:'Таб. №',
					width:'80',
				},
				{
					text:'Сотрудник',
					width:'111',
				},
				{
					text:'Начисление',
					width:'120',
				},
				{
					text:'Подразделение',
					width:'120',
				},
				{
					text:'Показатели для расчета начисления',
					width:'190',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер',
					width:'80',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 2',
					width:'80',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 3',
					width:'80',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 4',
					width:'80',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 5',
					width:'80',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 6',
					width:'80',
				},
				{
					text:'Результат',
					width:'75',
				},
				{
					text:'Дней',
					width:'39',
				},
				{
					text:'Часов',
					width:'39',
				},
				{
					text:'отработано',
					width:'78',
				},
				{
					text:'Оплачено дней/часов',
					width:'75',
				},
				{
					text:'Дата начала',
					width:'73',
				},
				{
					text:'Дата окончания',
					width:'73',
				},
				{
					text:'Дополнительный результат',
					width:'100',
				},
				{
					text:'Оплачивать часов',
					width:'72',
				},
				{
					text:'Сторно',
					width:'39',
				},
				{
					text:'Зачесть в норму дней',
					width:'66',
				},
				{
					text:'Зачесть в норму часов',
					width:'66',
				},
				{
					text:'Норма по пятидневке',
					width:'99',
				},
				{
					text:'Отработано по пятидневке',
					width:'99',
				},
				{
					text:'Норма часов по пятидневке',
					width:'100',
				},
				{
					text:'Отработано часов по пятидневке',
					width:'100',
				},
				{
					text:'Начало расчетного периода',
					width:'96',
				},
				{
					text:'Окончание расчетного периода',
					width:'96',
				},
				{
					text:'Дата начала события',
					width:'116',
				},
				{
					text:'Сторнируемый документ',
					width:'100',
				},
				{
					text:'Расчетная база за единицу нормы времени',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:60px;width:690px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
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
					text:'Конструктор настроек...',
				},
				{
					text:'',
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
					text:'',
					menu: [
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
					]
				},
				{
					title:'Договоры (подряда)',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:690px;height:180px;',
			height: 180,width: 690,
			columns:
			[
				{
					text:'№',
					width:'42',
				},
				{
					text:'Таб. №',
					width:'69',
				},
				{
					text:'Сотрудник',
					width:'100',
				},
				{
					text:'Договор',
					width:'168',
				},
				{
					text:'Дата начала',
					width:'84',
				},
				{
					text:'Дата окончания',
					width:'84',
				},
				{
					text:'Начисление',
					width:'100',
				},
				{
					text:'Сумма по договору',
					width:'100',
				},
				{
					text:'Результат',
					width:'100',
				},
				{
					text:'Код вычета',
					width:'80',
				},
				{
					text:'Сумма вычета',
					width:'100',
				},
				{
					text:'Подразделение организации',
					width:'120',
				},
				{
					text:'Сторно',
					width:'42',
				},
				{
					text:'Сторнируемый документ',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:690px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:56px;width:690px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
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
					text:'Конструктор настроек...',
				},
				{
					text:'',
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
					text:'',
					menu: [
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
					]
				},
				{
					title:'Дополнительные начисления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:690px;height:180px;',
			height: 180,width: 690,
			columns:
			[
				{
					text:'Картинка',
					width:'21',
				},
				{
					text:'Признак автоматического расчета',
					width:'21',
				},
				{
					text:'№',
					width:'30',
				},
				{
					text:'Таб. №',
					width:'76',
				},
				{
					text:'Сотрудник',
					width:'104',
				},
				{
					text:'Начисление',
					width:'120',
				},
				{
					text:'Подразделение',
					width:'84',
				},
				{
					text:'Показатели для расчета начисления',
					width:'190',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер',
					width:'80',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 2',
					width:'80',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 3',
					width:'80',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 4',
					width:'80',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 5',
					width:'80',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 6',
					width:'80',
				},
				{
					text:'Результат',
					width:'75',
				},
				{
					text:'Дата начала',
					width:'87',
				},
				{
					text:'Дата окончания',
					width:'87',
				},
				{
					text:'Код вычета',
					width:'62',
				},
				{
					text:'Сумма вычета (количество детей)',
					width:'119',
				},
				{
					text:'Начало расчетного периода',
					width:'100',
				},
				{
					text:'Окончание расчетного периода',
					width:'100',
				},
				{
					text:'Дата начала события',
					width:'100',
				},
				{
					text:'Оплачено дней/часов',
					width:'80',
				},
				{
					text:'Сторно',
					width:'42',
				},
				{
					text:'Сторнируемый документ',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:690px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:70px;width:690px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
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
					text:'Конструктор настроек...',
				},
				{
					text:'',
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
					text:'',
					menu: [
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
					]
				},
				{
					title:'Погашение займов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:690px;height:180px;',
			height: 180,width: 690,
			columns:
			[
				{
					text:'№',
					width:'21',
				},
				{
					text:'',
					width:'33',
				},
				{
					text:'Сотрудник',
					width:'210',
				},
				{
					text:'Договор займа',
					width:'120',
				},
				{
					text:'Начислено %%',
					width:'80',
				},
				{
					text:'Погашено займа и %%',
					width:'120',
				},
				{
					text:'В т.ч. погашено %%',
					width:'120',
				},
				{
					text:'Материальная выгода',
					width:'120',
				},
				{
					text:'Ставка',
					width:'40',
				},
				{
					text:'Налог по 35%',
					width:'80',
				},
				{
					text:'Подразделение организации',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:690px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:81px;width:690px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
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
					text:'Конструктор настроек...',
				},
				{
					text:'',
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
					text:'',
					menu: [
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
					]
				},
				{
					title:'НДФЛ',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:690px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:61px;width:690px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
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
					text:'Конструктор настроек...',
				},
				{
					text:'',
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
					text:'',
					menu: [
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
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:690px;height:180px;',
			height: 180,width: 690,
			columns:
			[
				{
					text:'№',
					width:'42',
				},
				{
					text:'Сотрудник',
					width:'200',
				},
				{
					text:'Месяц налогового периода',
					width:'120',
				},
				{
					text:'Подразделение организации',
					width:'320',
				},
				{
					text:'Налог',
					width:'80',
				},
				{
					text:'Личный вычет ',
					width:'80',
				},
				{
					text:'Вычеты на первого ребенка',
					width:'180',
				},
				{
					text:'Примененный вычет на детей',
					width:'60',
				},
				{
					text:'Примененный вычет на детей двойной',
					width:'60',
				},
				{
					text:'Примененный вычет на детей двойной второй',
					width:'60',
				},
				{
					text:'Вычеты на второго ребенка',
					width:'180',
				},
				{
					text:'Примененный вычет на второго ребенка',
					width:'60',
				},
				{
					text:'Примененный вычет на второго ребенка двойной',
					width:'60',
				},
				{
					text:'Примененный вычет на второго ребенка двойной второй',
					width:'60',
				},
				{
					text:'Вычеты на третьего и посл. детей',
					width:'180',
				},
				{
					text:'Примененный вычет на третьего ребенка',
					width:'60',
				},
				{
					text:'Примененный вычет на третьего ребенка двойной',
					width:'60',
				},
				{
					text:'Примененный вычет на третьего ребенка двойной второй',
					width:'60',
				},
				{
					text:'Вычеты на детей-инвалидов',
					width:'180',
				},
				{
					text:'Примененный вычет на детей-инвалидов',
					width:'60',
				},
				{
					text:'Примененный вычет на детей инвалидов двойной',
					width:'60',
				},
				{
					text:'Примененный вычет на детей инвалидов двойной второй',
					width:'60',
				},
				{
					text:'Имущественные вычеты',
					width:'120',
				},
				{
					text:'Примененный вычет имущественный - расход',
					width:'60',
				},
				{
					text:'Примененный вычет имущественный - %% по кредитам',
					width:'60',
				},
				{
					text:'Примененный вычет имущественный - %% при перекредитовании',
					width:'60',
				},
			]
		},
					]
				},
				{
					title:'Прочие удержания',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:690px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:690px;height:180px;',
			height: 180,width: 690,
			columns:
			[
				{
					text:'Картинка',
					width:'21',
				},
				{
					text:'Признак автоматического расчета',
					width:'21',
				},
				{
					text:'№',
					width:'42',
				},
				{
					text:'Сотрудник',
					width:'170',
				},
				{
					text:'Удержание',
					width:'170',
				},
				{
					text:'Документ основание',
					width:'170',
				},
				{
					text:'Получатель',
					width:'170',
				},
				{
					text:'Показатели для расчета удержания',
					width:'190',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер',
					width:'100',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер2',
					width:'100',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер3',
					width:'100',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер4',
					width:'100',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер5',
					width:'100',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер6',
					width:'100',
				},
				{
					text:'Результат',
					width:'100',
				},
				{
					text:'Дата начала',
					width:'100',
				},
				{
					text:'Дата окончания',
					width:'100',
				},
				{
					text:'Начало расчетного периода',
					width:'100',
				},
				{
					text:'Окончание расчетного периода',
					width:'100',
				},
				{
					text:'Дата начала события',
					width:'100',
				},
				{
					text:'Порядок исчисления издержек',
					width:'100',
				},
				{
					text:'Дополнительные данные',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:101px;width:690px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
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
					text:'Конструктор настроек...',
				},
				{
					text:'',
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
					text:'',
					menu: [
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
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:590px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:33px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:110px;top:33px;width:202px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:416px;top:79px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:510px;top:79px;width:202px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:414px;width:704px;height:75px;',
			height: 75,width: 704,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериодНачисления',
			text: 'Режим начисления:',
			style: 'position:absolute;left:8px;top:79px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачисления',
			style: 'position:absolute;left:110px;top:79px;width:202px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчета',
			text: 'За период с:',
			style: 'position:absolute;left:8px;top:102px;width:100px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ПодменюЗаполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:8px;top:130px;width:80px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ПодменюРассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:91px;top:130px;width:80px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОчистить',
			text: 'Очистить',
			style: 'position:absolute;left:174px;top:130px;width:84px;height:22px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачисленияДатаНачала',
			style: 'position:absolute;left:110px;top:102px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачисленияДатаОкончания',
			style: 'position:absolute;left:222px;top:102px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодНачисленияПо',
			text: 'по:',
			style: 'position:absolute;left:203px;top:102px;width:17px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказыватьРасчетныйЛисток',
			text: 'Надпись показывать расчетный листок',
			style: 'position:absolute;left:8px;top:395px;width:704px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетныйЛисток',
			text: ' Расчетный листок',
			style: 'position:absolute;left:8px;top:395px;width:449px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:553px;width:246px;height:25px;',
			items:
			[
				'-',
				{
					text:'Отменить исправление',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:492px;width:466px;height:33px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:500px;top:492px;width:83px;height:33px;',
			height: 33,width: 83,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсправление',
			text: 'Открыть исправления',
			style: 'position:absolute;left:0px;top:0px;width:71px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:583px;top:492px;width:129px;height:33px;',
			height: 33,width: 129,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсходный',
			text: 'Открыть исправленный документ',
			style: 'position:absolute;left:0px;top:0px;width:129px;height:33px;',
		},
					]
				},
			]
		},
	]
});