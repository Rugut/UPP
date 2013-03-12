Ext.define('Обработки.ПодготовкаДанныхПФР2010.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:616px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подготовка данных для передачи в ПФР',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:205px;top:8px;width:70px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:278px;top:8px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Состав форм:',
			style: 'position:absolute;left:594px;top:8px;width:70px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод3',
			text: 'Отчетный период:',
			style: 'position:absolute;left:385px;top:8px;width:92px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:45px;width:984px;height:563px;',
			height: 563,width: 984,
			items:
			[
				{
					title:'Квартальная отчетность',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДанныеОСтажеФизлица',
			text: '  Состав пачки СЗВ-6',
			style: 'position:absolute;left:0px;top:310px;width:984px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:21px;width:248px;height:24px;',
			items:
			[
				'-',
				{
					text:'Удалить',
				},
				{
					text:'Перенести',
				},
				{
					text:'Принятые в ПФР комплекты прошлых периодов',
				},
				{
					text:'Обновить',
				},
				{
					text:'АДВ-11',
				},
				'-',
				'-',
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:46px;width:248px;height:96px;',
			height: 96,width: 248,
			columns:
			[
				{
					text:'Комплект документов',
					width:'130',
				},
				{
					text:'Отчетный период',
					width:'100',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:168px;width:984px;height:137px;',
			height: 137,width: 984,
			items:
			[
				{
					title:'СЗВ6',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:343px;height:137px;',
			height: 137,width: 343,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:26px;width:333px;height:111px;',
			height: 111,width: 333,
			columns:
			[
				{
					text:'№',
					width:'24',
				},
				{
					text:'Пачка СЗВ',
					width:'100',
				},
				{
					text:'Страховая часть',
					width:'138',
				},
				{
					text:'Начислено',
					width:'41',
				},
				{
					text:'Уплачено',
					width:'44',
				},
				{
					text:'Накопительная часть',
					width:'153',
				},
				{
					text:'Начислено',
					width:'70',
				},
				{
					text:'Уплачено',
					width:'83',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:333px;height:25px;',
			items:
			[
				{
					text:'Добавить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Перенести в другую опись АДВ-6-2',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:344px;top:0px;width:640px;height:137px;',
			height: 137,width: 640,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТипФормы',
			text: 'Форма:',
			style: 'position:absolute;left:121px;top:24px;width:54px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидКорректировки',
			text: 'Сведения:',
			style: 'position:absolute;left:0px;top:2px;width:54px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись28',
			text: 'Дата заполнения:',
			style: 'position:absolute;left:121px;top:46px;width:93px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСоставления1',
			style: 'position:absolute;left:216px;top:46px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКатегорияЗастрахованныхЛиц',
			text: 'Категория ЗЛ:',
			style: 'position:absolute;left:121px;top:94px;width:93px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КатегорияЗастрахованныхЛиц',
			style: 'position:absolute;left:216px;top:94px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный1',
			text: 'Ответственный:',
			style: 'position:absolute;left:326px;top:94px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель1',
			style: 'position:absolute;left:412px;top:94px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:326px;top:46px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель1',
			style: 'position:absolute;left:412px;top:46px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя',
			text: 'Должность:',
			style: 'position:absolute;left:326px;top:70px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя1',
			style: 'position:absolute;left:412px;top:70px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки2',
			text: 'Номер пачки:',
			style: 'position:absolute;left:121px;top:70px;width:93px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки1',
			style: 'position:absolute;left:216px;top:70px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод2',
			text: 'Корректируемый период:',
			style: 'position:absolute;left:344px;top:2px;width:130px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КорректируемыйПериод',
			style: 'position:absolute;left:477px;top:2px;width:163px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Проверить2',
			text: 'Проверить пачку',
			style: 'position:absolute;left:510px;top:116px;width:130px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:25px;width:121px;height:112px;',
			height: 112,width: 121,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'button',
			name: 'РаспределитьВзносы',
			text: 'Перераспределить взносы в пачке',
			style: 'position:absolute;left:0px;top:19px;width:117px;height:36px;',
		},
		{
			xtype: 'button',
			name: 'РаспределитьВзносыСКомментарием',
			text: 'Перераспределить с комментарием',
			style: 'position:absolute;left:0px;top:67px;width:117px;height:36px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:121px;top:118px;width:93px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:216px;top:118px;width:289px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'АДВ11',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:20px;width:984px;height:116px;',
			height: 116,width: 984,
			items:
			[
				{
					title:'',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:25px;width:984px;height:91px;',
			height: 91,width: 984,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Тип строки',
					width:'240',
				},
				{
					text:'Год',
					width:'100',
				},
				{
					text:'Страховая часть',
					width:'100',
				},
				{
					text:'Накопительная часть',
					width:'118',
				},
				{
					text:'Дополнительный тариф',
					width:'130',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:984px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить расчетами с ПФР',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'&Добавить строку',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
			]
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Данные о уплате взносов доступны только расчетчику!',
			style: 'position:absolute;left:25px;top:9px;width:291px;height:18px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:333px;width:984px;height:207px;',
			height: 207,width: 984,
			items:
			[
				{
					title:'СЗВ6',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:333px;height:182px;',
			height: 182,width: 333,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Застрахованное лицо',
					width:'200',
				},
				{
					text:'Адрес для информирования',
					width:'100',
				},
				{
					text:'Начислено страховая',
					width:'100',
				},
				{
					text:'Уплачено страховая',
					width:'100',
				},
				{
					text:'Начислено накопительная',
					width:'100',
				},
				{
					text:'Уплачено накопительная',
					width:'100',
				},
				{
					text:'Доначислено страховая',
					width:'100',
				},
				{
					text:'Доначислено накопительная',
					width:'100',
				},
				{
					text:'Страховой номер ПФР',
					width:'100',
				},
				{
					text:'Фамилия',
					width:'100',
				},
				{
					text:'Имя',
					width:'100',
				},
				{
					text:'Отчество',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:333px;height:24px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Очистить',
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
				'-',
				'-',
				{
					text:'Заполнить все',
				},
				{
					text:'Только изменившиеся (рекомендуется)',
				},
				{
					text:'Действие4',
				},
				{
					text:'Перенести',
				},
				{
					text:'Комментировать',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:347px;top:93px;width:637px;height:24px;',
			items:
			[
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие12',
				},
				'-',
				{
					text:'Действие14',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Действие16',
				},
				'-',
				{
					text:'Действие15',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие13',
				},
				{
					text:'Перезаполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:347px;top:118px;width:637px;height:88px;',
			height: 88,width: 637,
			columns:
			[
				{
					text:'Период',
					width:'120',
				},
				{
					text:'Начало',
					width:'60',
				},
				{
					text:'Окончание',
					width:'60',
				},
				{
					text:'Территориальные условия',
					width:'95',
				},
				{
					text:'Код',
					width:'30',
				},
				{
					text:'Ставка',
					width:'49',
				},
				{
					text:'Условия труда',
					width:'120',
				},
				{
					text:'Код особых условий труда',
					width:'60',
				},
				{
					text:'Код позиции списка',
					width:'60',
				},
				{
					text:'Исчисление стажа',
					width:'100',
				},
				{
					text:'Код',
					width:'26',
				},
				{
					text:'Отпуск/болезнь',
					width:'54',
				},
				{
					text:'Факт.отраб.время',
					width:'100',
				},
				{
					text:'Месяцы',
					width:'30',
				},
				{
					text:'Дни',
					width:'30',
				},
				{
					text:'Досрочное назначение пенсии',
					width:'150',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Часы/месяцы',
					width:'30',
				},
				{
					text:'Минуты',
					width:'30',
				},
				{
					text:'Ставка',
					width:'30',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресДляИнформирования',
			style: 'position:absolute;left:689px;top:0px;width:295px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:347px;top:27px;width:637px;height:50px;',
			height: 50,width: 637,
			items:
			[
				{
					title:'',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачисленоСтраховая',
			style: 'position:absolute;left:149px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачисленоНакопительная',
			style: 'position:absolute;left:149px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УплаченоСтраховая',
			style: 'position:absolute;left:286px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УплаченоНакопительная',
			style: 'position:absolute;left:286px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Уплачено:',
			style: 'position:absolute;left:233px;top:0px;width:53px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись38',
			text: 'Накопит. часть. Начислено:',
			style: 'position:absolute;left:0px;top:23px;width:148px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: 'Уплачено:',
			style: 'position:absolute;left:233px;top:23px;width:53px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтраховаяЧасть',
			text: 'Страховая часть. Начислено:',
			style: 'position:absolute;left:0px;top:0px;width:148px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:370px;top:0px;width:267px;height:42px;',
			height: 42,width: 267,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоначисленоСтраховая',
			style: 'position:absolute;left:79px;top:0px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоначисленоНакопительная',
			style: 'position:absolute;left:79px;top:23px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'В т.ч. донач-но:',
			style: 'position:absolute;left:0px;top:0px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись39',
			text: 'В т.ч. донач-но:',
			style: 'position:absolute;left:0px;top:23px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоУплаченоСтраховая',
			style: 'position:absolute;left:199px;top:0px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоУплаченоНакопительная',
			style: 'position:absolute;left:199px;top:23px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись52',
			text: 'доупл-но:',
			style: 'position:absolute;left:151px;top:0px;width:47px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись53',
			text: 'доупл-но:',
			style: 'position:absolute;left:151px;top:23px;width:47px;height:19px;',
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
			xtype: 'label',
			name: 'НадписьАдресДляИнформирования',
			text: 'Адрес для информирования:',
			style: 'position:absolute;left:537px;top:0px;width:148px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтраховойНомерПФР',
			text: 'Страховой №:',
			style: 'position:absolute;left:347px;top:0px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР',
			style: 'position:absolute;left:422px;top:0px;width:100px;height:19px;',
		},
					]
				},
				{
					title:'Пустая страница',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаОК',
			text: 'ОК',
			style: 'position:absolute;left:923px;top:542px;width:36px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Справка',
			text: '',
			style: 'position:absolute;left:961px;top:542px;width:23px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:254px;top:22px;width:730px;height:120px;',
			height: 120,width: 730,
			items:
			[
				{
					title:'Страница АДВ',
					items:
					[
		{
			xtype: 'button',
			name: 'Печать',
			text: '&Печать',
			style: 'position:absolute;left:615px;top:49px;width:115px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПоказатьФайлы',
			text: 'Показать &файлы',
			style: 'position:absolute;left:615px;top:74px;width:115px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'НаДиск',
			text: 'Файлы на &диск',
			style: 'position:absolute;left:615px;top:99px;width:115px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'Надпись41',
			text: 'Дата заполнения:',
			style: 'position:absolute;left:179px;top:0px;width:93px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСоставления',
			style: 'position:absolute;left:274px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный3',
			text: 'Ответственный:',
			style: 'position:absolute;left:179px;top:24px;width:93px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель',
			style: 'position:absolute;left:274px;top:24px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель2',
			text: 'Руководитель:',
			style: 'position:absolute;left:380px;top:0px;width:75px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:457px;top:0px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя2',
			text: 'Должность:',
			style: 'position:absolute;left:380px;top:24px;width:75px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя',
			style: 'position:absolute;left:457px;top:24px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки',
			text: 'Номер пачки:',
			style: 'position:absolute;left:6px;top:0px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки',
			style: 'position:absolute;left:81px;top:0px;width:85px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:77px;width:591px;height:43px;',
			height: 43,width: 591,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'button',
			name: 'РаспределитьВзносыВоВсехПачках',
			text: 'Перераспределить взносы во всех пачках',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:43px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий3',
			text: 'Комментарий:',
			style: 'position:absolute;left:179px;top:48px;width:93px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий3',
			style: 'position:absolute;left:274px;top:48px;width:323px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасчетСтраховыхВзносов',
			style: 'position:absolute;left:642px;top:0px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетСтраховыхВзносов',
			text: 'РСВ-1:',
			style: 'position:absolute;left:605px;top:0px;width:35px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ПроверитьКомплект',
			text: 'Проверить',
			style: 'position:absolute;left:615px;top:24px;width:115px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:24px;width:173px;height:51px;',
			height: 51,width: 173,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаПринятоВПФР',
			text: 'Пометить все пачки как принятые ПФР',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:43px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Пустая страница',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСостояниеПачекДокументов1',
			text: 'Распределение сумм уплаченных взносов производится по коэффициентам текущего периода без учета переданных ранее в ПФР сведений.',
			style: 'position:absolute;left:31px;top:6px;width:684px;height:43px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДанныеОФизлицахСЗВ63',
			text: '  Состав пачки СЗВ-6-3',
			style: 'position:absolute;left:0px;top:237px;width:984px;height:19px;',
		},
					]
				},
				{
					title:'Оформление пенсии',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНазваниеПачки',
			text: '  Комплекты документов',
			style: 'position:absolute;left:0px;top:0px;width:984px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПодготовкиДокументов1',
			text: 'Данные для передачи еще не готовы. Необходимо создать хотя бы одну пачку.',
			style: 'position:absolute;left:22px;top:542px;width:700px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОК1',
			text: 'ОК',
			style: 'position:absolute;left:923px;top:542px;width:36px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Справка1',
			text: '',
			style: 'position:absolute;left:961px;top:542px;width:23px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПачкиСПВ',
			text: '  Пачки документов',
			style: 'position:absolute;left:0px;top:133px;width:984px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:155px;width:293px;height:24px;',
			items:
			[
				'-',
				'-',
				{
					text:'Обновить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Добавить',
				},
				{
					text:'Принято ПФР',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:179px;width:293px;height:102px;',
			height: 102,width: 293,
			columns:
			[
				{
					text:'Пачки документов',
					width:'131',
				},
				{
					text:'Страховая часть',
					width:'138',
				},
				{
					text:'Начислено',
					width:'41',
				},
				{
					text:'Уплачено',
					width:'44',
				},
				{
					text:'Накопительная часть',
					width:'153',
				},
				{
					text:'Начислено',
					width:'70',
				},
				{
					text:'Уплачено',
					width:'83',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:47px;width:333px;height:81px;',
			height: 81,width: 333,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'126',
				},
				{
					text:'Дата выхода на пенсию',
					width:'150',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:22px;width:333px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаСформировать1',
			text: 'Сформировать сведения',
			style: 'position:absolute;left:344px;top:94px;width:192px;height:34px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:300px;top:154px;width:684px;height:127px;',
			height: 127,width: 684,
			items:
			[
				{
					title:'Страница данных',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидКорректировки1',
			text: 'Сведения:',
			style: 'position:absolute;left:6px;top:6px;width:54px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись47',
			text: 'Дата заполнения:',
			style: 'position:absolute;left:109px;top:31px;width:93px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСоставления2',
			style: 'position:absolute;left:206px;top:31px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКатегорияЗастрахованныхЛиц1',
			text: 'Категория ЗЛ:',
			style: 'position:absolute;left:109px;top:81px;width:93px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КатегорияЗастрахованныхЛиц1',
			style: 'position:absolute;left:206px;top:81px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный4',
			text: 'Ответственный:',
			style: 'position:absolute;left:321px;top:81px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель2',
			style: 'position:absolute;left:407px;top:81px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель3',
			text: 'Руководитель:',
			style: 'position:absolute;left:321px;top:31px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель2',
			style: 'position:absolute;left:407px;top:31px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя3',
			text: 'Должность:',
			style: 'position:absolute;left:321px;top:56px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя2',
			style: 'position:absolute;left:407px;top:56px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки3',
			text: 'Номер пачки:',
			style: 'position:absolute;left:109px;top:56px;width:93px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки2',
			style: 'position:absolute;left:206px;top:56px;width:100px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Проверить3',
			text: 'Проверить',
			style: 'position:absolute;left:576px;top:6px;width:108px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Печать3',
			text: 'Печать',
			style: 'position:absolute;left:576px;top:31px;width:108px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПоказатьФайл3',
			text: 'Показать файл',
			style: 'position:absolute;left:576px;top:56px;width:108px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'НаДиск3',
			text: 'Файл на диск',
			style: 'position:absolute;left:576px;top:81px;width:108px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:31px;width:101px;height:77px;',
			height: 77,width: 101,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'button',
			name: 'РаспределитьВзносы1',
			text: '',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:71px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий1',
			text: 'Комментарий:',
			style: 'position:absolute;left:109px;top:106px;width:93px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий1',
			style: 'position:absolute;left:206px;top:106px;width:361px;height:19px;',
		},
					]
				},
				{
					title:'Пустая страница',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:310px;width:984px;height:224px;',
			height: 224,width: 984,
			items:
			[
				{
					title:'Данные физлица',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:333px;height:200px;',
			height: 200,width: 333,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Застрахованное лицо',
					width:'200',
				},
				{
					text:'Страховой номер ПФР',
					width:'100',
				},
				{
					text:'Фамилия',
					width:'100',
				},
				{
					text:'Имя',
					width:'100',
				},
				{
					text:'Отчество',
					width:'100',
				},
				{
					text:'Начислено страховая',
					width:'100',
				},
				{
					text:'Уплачено страховая',
					width:'100',
				},
				{
					text:'Начислено накопительная',
					width:'100',
				},
				{
					text:'Уплачено накопительная',
					width:'100',
				},
				{
					text:'Дата составления',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:333px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Перенести в другую пачку',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:347px;top:93px;width:637px;height:24px;',
			items:
			[
				{
					text:'Действие12',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие14',
				},
				'-',
				{
					text:'Действие13',
				},
				{
					text:'Перечитать',
				},
				'-',
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие15',
				},
				{
					text:'Перезаполнить',
				},
				{
					text:'Действие16',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:347px;top:118px;width:637px;height:106px;',
			height: 106,width: 637,
			columns:
			[
				{
					text:'Период',
					width:'120',
				},
				{
					text:'Начало',
					width:'60',
				},
				{
					text:'Окончание',
					width:'60',
				},
				{
					text:'Территориальные условия',
					width:'95',
				},
				{
					text:'Код',
					width:'30',
				},
				{
					text:'Ставка',
					width:'49',
				},
				{
					text:'Условия труда',
					width:'120',
				},
				{
					text:'Код особых условий труда',
					width:'60',
				},
				{
					text:'Код позиции списка',
					width:'60',
				},
				{
					text:'Исчисление стажа',
					width:'100',
				},
				{
					text:'Код',
					width:'26',
				},
				{
					text:'Отпуск/болезнь',
					width:'54',
				},
				{
					text:'Факт.отраб.время',
					width:'100',
				},
				{
					text:'Месяцы',
					width:'30',
				},
				{
					text:'Дни',
					width:'30',
				},
				{
					text:'Досрочное назначение пенсии',
					width:'150',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Часы/месяцы',
					width:'30',
				},
				{
					text:'Минуты',
					width:'30',
				},
				{
					text:'Ставка',
					width:'30',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:347px;top:24px;width:637px;height:50px;',
			height: 50,width: 637,
			items:
			[
				{
					title:'',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачисленоСтраховая1',
			style: 'position:absolute;left:223px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачисленоНакопительная1',
			style: 'position:absolute;left:223px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УплаченоСтраховая1',
			style: 'position:absolute;left:371px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УплаченоНакопительная1',
			style: 'position:absolute;left:371px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись42',
			text: 'Уплачено:',
			style: 'position:absolute;left:314px;top:0px;width:53px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись44',
			text: 'Накопительная часть взносов. Начислено:',
			style: 'position:absolute;left:0px;top:23px;width:219px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись46',
			text: 'Уплачено:',
			style: 'position:absolute;left:314px;top:23px;width:53px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтраховаяЧасть1',
			text: 'Страховая часть взносов. Начислено:',
			style: 'position:absolute;left:24px;top:0px;width:195px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСтраховойНомерПФР1',
			text: 'Страховой №:',
			style: 'position:absolute;left:347px;top:0px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР1',
			style: 'position:absolute;left:422px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСоставленияФЛ',
			style: 'position:absolute;left:798px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСоставленияФЛ',
			text: 'Дата составления сведений (выхода на пенсию):',
			style: 'position:absolute;left:541px;top:0px;width:255px;height:19px;',
		},
					]
				},
				{
					title:'Пустая страница',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПачкиСЗВ63',
			text: '  Пачки документов',
			style: 'position:absolute;left:0px;top:3px;width:984px;height:19px;',
		},
					]
				},
				{
					title:'Сведения о начисленном заработке',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:25px;width:293px;height:24px;',
			items:
			[
				{
					text:'Добавить',
				},
				'-',
				{
					text:'Удалить',
				},
				{
					text:'Обновить',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:49px;width:293px;height:182px;',
			height: 182,width: 293,
			columns:
			[
				{
					text:'Пачка',
					width:'59',
				},
				{
					text:'Заработок',
					width:'68',
				},
				{
					text:'В т.ч. облагается взносами',
					width:'145',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:305px;top:25px;width:679px;height:206px;',
			height: 206,width: 679,
			items:
			[
				{
					title:'Страница данных',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидКорректировки2',
			text: 'Сведения:',
			style: 'position:absolute;left:0px;top:47px;width:93px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись51',
			text: 'Дата заполнения:',
			style: 'position:absolute;left:0px;top:71px;width:93px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСоставления3',
			style: 'position:absolute;left:99px;top:71px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКатегорияЗастрахованныхЛиц2',
			text: 'Категория ЗЛ:',
			style: 'position:absolute;left:0px;top:96px;width:77px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КатегорияЗастрахованныхЛиц2',
			style: 'position:absolute;left:99px;top:96px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный5',
			text: 'Ответственный:',
			style: 'position:absolute;left:0px;top:145px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель3',
			style: 'position:absolute;left:99px;top:145px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель4',
			text: 'Руководитель:',
			style: 'position:absolute;left:0px;top:121px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель3',
			style: 'position:absolute;left:99px;top:121px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя4',
			text: 'Должность:',
			style: 'position:absolute;left:307px;top:121px;width:75px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя3',
			style: 'position:absolute;left:389px;top:121px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки4',
			text: 'Номер пачки:',
			style: 'position:absolute;left:205px;top:71px;width:70px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПачки3',
			style: 'position:absolute;left:282px;top:71px;width:100px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Проверить4',
			text: 'Проверить пачку',
			style: 'position:absolute;left:549px;top:185px;width:130px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'РассчитатьЗаработок',
			text: 'Обновить данные о заработке',
			style: 'position:absolute;left:0px;top:171px;width:160px;height:35px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипДоговора',
			text: 'Тип договора:',
			style: 'position:absolute;left:307px;top:96px;width:77px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипДоговора',
			style: 'position:absolute;left:389px;top:96px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий2',
			text: 'Комментарий:',
			style: 'position:absolute;left:307px;top:145px;width:75px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий2',
			style: 'position:absolute;left:389px;top:145px;width:200px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПринятоВПФР1',
			text: 'Пометить все пачки как принятые ПФР',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОписьАДВ62',
			text: 'Опись АДВ-6-2:',
			style: 'position:absolute;left:389px;top:71px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОписьАДВ62',
			style: 'position:absolute;left:476px;top:71px;width:113px;height:19px;',
		},
					]
				},
				{
					title:'Пустая страница',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:264px;width:984px;height:270px;',
			height: 270,width: 984,
			items:
			[
				{
					title:'Данные физлица',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:342px;height:245px;',
			height: 245,width: 342,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:342px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Перенести в другую пачку',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеОДоходах',
			text: 'Обновить',
			style: 'position:absolute;left:358px;top:248px;width:82px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Заработок по месяцам',
			style: 'position:absolute;left:358px;top:0px;width:148px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:358px;top:24px;width:329px;height:219px;',
			height: 219,width: 329,
			columns:
			[
				{
					text:'Месяц',
					width:'60',
				},
				{
					text:'Заработок',
					width:'100',
				},
				{
					text:'В т.ч. облагается взносами',
					width:'144',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьФамилия',
			text: 'Фамилия:',
			style: 'position:absolute;left:702px;top:24px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:777px;top:24px;width:207px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:702px;top:48px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:777px;top:48px;width:207px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчество',
			text: 'Отчество:',
			style: 'position:absolute;left:702px;top:72px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:777px;top:72px;width:207px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтраховойНомерПФР3',
			text: 'Страховой №:',
			style: 'position:absolute;left:702px;top:96px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР3',
			style: 'position:absolute;left:777px;top:96px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Личные данные',
			style: 'position:absolute;left:702px;top:0px;width:125px;height:19px;',
		},
					]
				},
				{
					title:'Пустая страница',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПодготовкиДокументов2',
			text: 'Данные для передачи еще не готовы. Необходимо создать хотя бы одну пачку.',
			style: 'position:absolute;left:22px;top:542px;width:591px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОК2',
			text: 'ОК',
			style: 'position:absolute;left:923px;top:542px;width:36px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Справка2',
			text: '',
			style: 'position:absolute;left:961px;top:542px;width:23px;height:21px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:197px;height:34px;',
			height: 34,width: 197,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаСформировать',
			text: 'Сформировать сведения',
			style: 'position:absolute;left:0px;top:0px;width:192px;height:34px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:479px;top:8px;width:112px;height:34px;',
			height: 34,width: 112,
			items:
			[
				{
					title:'Страница период персучета',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетныйПериод',
			style: 'position:absolute;left:0px;top:0px;width:112px;height:19px;',
		},
					]
				},
				{
					title:'Страница отчетный год',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетныйГод',
			style: 'position:absolute;left:0px;top:0px;width:112px;height:19px;',
		},
					]
				},
			]
		},
	]
});