Ext.define('Документы.РасчетСтраховыхВзносов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:782px;height:531px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Начисление страховых взносов в ПФР, ФОМС и ФСС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:365px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:453px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:533px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:553px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:8px;top:59px;width:105px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:59px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:365px;top:59px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:453px;top:59px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:33px;width:105px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:113px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:365px;top:85px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:453px;top:85px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:782px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:506px;width:782px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:479px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:479px;width:678px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:131px;width:766px;height:341px;',
			height: 341,width: 766,
			items:
			[
				{
					title:'Взносы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:752px;height:24px;',
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
					text:'Пересчитать страховые взносы',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:752px;height:285px;',
			height: 285,width: 752,
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
				{
					text:'ФСС, соц.страхование',
					width:'126',
				},
				{
					text:'ФСС, несчастные случаи',
					width:'126',
				},
				{
					text:'ФФОМС',
					width:'100',
				},
				{
					text:'ТФОМС',
					width:'100',
				},
				{
					text:'ПФР, страховая часть',
					width:'115',
				},
				{
					text:'ПФР, накопительная часть',
					width:'122',
				},
				{
					text:'ФСС, ЕНВД',
					width:'100',
				},
				{
					text:'ФФОМС, ЕНВД',
					width:'100',
				},
				{
					text:'ТФОМС, ЕНВД',
					width:'100',
				},
				{
					text:'ПФР, страховая часть, ЕНВД',
					width:'159',
				},
				{
					text:'ПФР, накопительная часть, ЕНВД',
					width:'159',
				},
				{
					text:'ПФР, по дополнительному тарифу',
					width:'100',
				},
				{
					text:'На доплату к пенсии в угольной промышленности',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Осн. начисления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:752px;height:285px;',
			height: 285,width: 752,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'68',
				},
				{
					text:'Сотрудник',
					width:'100',
				},
				{
					text:'Начисление',
					width:'100',
				},
				{
					text:'Вид дохода',
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
					text:'Результат',
					width:'100',
				},
				{
					text:'ЕНВД',
					width:'42',
				},
				{
					text:'Облагается по дополнительному тарифу',
					width:'101',
				},
				{
					text:'Облагается взносами на доплату к пенсии шахтерам',
					width:'100',
				},
				{
					text:'Доход фармацевта в аптеке',
					width:'100',
				},
				{
					text:'Доход члена экипажа судна под флагом РФ',
					width:'100',
				},
				{
					text:'Сторно',
					width:'43',
				},
				{
					text:'Документ основание',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:752px;height:24px;',
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
					text:'Подбор',
				},
			]
		},
					]
				},
				{
					title:'Доп. начисления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:752px;height:285px;',
			height: 285,width: 752,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'68',
				},
				{
					text:'Сотрудник',
					width:'100',
				},
				{
					text:'Начисление',
					width:'100',
				},
				{
					text:'Вид дохода',
					width:'100',
				},
				{
					text:'Результат',
					width:'100',
				},
				{
					text:'ЕНВД',
					width:'40',
				},
				{
					text:'Облагается по дополнительному тарифу',
					width:'100',
				},
				{
					text:'Облагается взносами на доплату к пенсии шахтерам',
					width:'100',
				},
				{
					text:'Доход фармацевта в аптеке',
					width:'100',
				},
				{
					text:'Доход члена экипажа судна под флагом РФ',
					width:'100',
				},
				{
					text:'Сторно',
					width:'42',
				},
				{
					text:'Документ основание',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:752px;height:24px;',
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
					text:'Подбор',
				},
			]
		},
					]
				},
				{
					title:'Необлагаемые суммы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:752px;height:285px;',
			height: 285,width: 752,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'Вид дохода',
					width:'220',
				},
				{
					text:'Скидка',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:752px;height:24px;',
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
					text:'Пересчитать скидки',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
					]
				},
				{
					title:'Пособия по соц. страхованию',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:752px;height:285px;',
			height: 285,width: 752,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'68',
				},
				{
					text:'Сотрудник',
					width:'100',
				},
				{
					text:'Вид пособия',
					width:'100',
				},
				{
					text:'Финансирование',
					width:'100',
				},
				{
					text:'Страховой случай:',
					width:'64',
				},
				{
					text:'Новый',
					width:'45',
				},
				{
					text:'Дата события',
					width:'84',
				},
				{
					text:'Период оплаты:',
					width:'178',
				},
				{
					text:'Дата начала',
					width:'89',
				},
				{
					text:'Дата окончания',
					width:'89',
				},
				{
					text:'Сумма пособия',
					width:'90',
				},
				{
					text:'Оплаченные дни',
					width:'90',
				},
				{
					text:'В т.ч. за счет федерального бюджета',
					width:'80',
				},
				{
					text:'Расшифровка выплат за счет федерального бюджета',
					width:'80',
				},
				{
					text:'Начисление',
					width:'100',
				},
				{
					text:'ЕНВД',
					width:'41',
				},
				{
					text:'Доход фармацевта в аптеке',
					width:'100',
				},
				{
					text:'Облагается по дополнительному тарифу',
					width:'100',
				},
				{
					text:'Облагается взносами на доплату к пенсии шахтерам',
					width:'100',
				},
				{
					text:'Доход члена экипажа судна под флагом РФ',
					width:'100',
				},
				{
					text:'Документ основание',
					width:'100',
				},
				{
					text:'Сторно',
					width:'44',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:752px;height:24px;',
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
					text:'Подбор',
				},
			]
		},
					]
				},
				{
					title:'По уходу за ребенком до полутора лет',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:752px;height:285px;',
			height: 285,width: 752,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'68',
				},
				{
					text:'Сотрудник',
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
					text:'Пособие по уходу за первым ребенком',
					width:'100',
				},
				{
					text:'В т.ч. за счет федерального бюджета',
					width:'80',
				},
				{
					text:'Пособие по уходу за вторым ребенком',
					width:'100',
				},
				{
					text:'В т.ч. за счет федерального бюджета',
					width:'80',
				},
				{
					text:'Расшифровка выплат за счет федерального бюджета',
					width:'100',
				},
				{
					text:'Вид расчета',
					width:'100',
				},
				{
					text:'ЕНВД',
					width:'41',
				},
				{
					text:'Облагается по дополнительному тарифу',
					width:'100',
				},
				{
					text:'Облагается взносами на доплату к пенсии шахтерам',
					width:'100',
				},
				{
					text:'Доход фармацевта в аптеке',
					width:'100',
				},
				{
					text:'Доход члена экипажа судна под флагом РФ',
					width:'100',
				},
				{
					text:'Сторно',
					width:'47',
				},
				{
					text:'Документ основание',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:752px;height:24px;',
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
					text:'Подбор',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить',
			text: 'Заполнить и рассчитать',
			style: 'position:absolute;left:8px;top:85px;width:193px;height:36px;',
		},
	]
});