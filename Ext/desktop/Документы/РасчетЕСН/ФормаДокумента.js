Ext.define('Документы.РасчетЕСН.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:432px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Расчет ЕСН',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:336px;top:33px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:441px;top:33px;width:155px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:57px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:441px;top:57px;width:155px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:407px;width:604px;height:25px;',
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
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:380px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:380px;width:500px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:108px;width:588px;height:267px;',
			height: 267,width: 588,
			items:
			[
				{
					title:'Расчет ЕСН',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:574px;height:24px;',
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
					text:'Рассчитать ЕСН',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:574px;height:217px;',
			height: 217,width: 574,
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
					text:'Федеральный бюджет',
					width:'100',
				},
				{
					text:'Льгота ФБ',
					width:'100',
				},
				{
					text:'ФСС',
					width:'100',
				},
				{
					text:'Льгота ФСС',
					width:'100',
				},
				{
					text:'ТФОМС',
					width:'100',
				},
				{
					text:'ФФОМС',
					width:'100',
				},
				{
					text:'Льгота ФОМС',
					width:'200',
				},
				{
					text:'ПФР Накопительная',
					width:'100',
				},
				{
					text:'в том числе ЕНВД',
					width:'100',
				},
				{
					text:'ПФР Страховая',
					width:'100',
				},
				{
					text:'в том числе ЕНВД',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Основные начисления',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:574px;height:24px;',
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
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:574px;height:217px;',
			height: 217,width: 574,
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
					width:'180',
				},
				{
					text:'Начисление',
					width:'160',
				},
				{
					text:'Код дохода ЕСН',
					width:'160',
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
					width:'80',
				},
				{
					text:'Облагается ЕНВД',
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
					]
				},
				{
					title:'Дополнительные начисления',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:574px;height:24px;',
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
				'-',
				{
					text:'Перерассчитать скидку',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:574px;height:217px;',
			height: 217,width: 574,
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
					width:'180',
				},
				{
					text:'Начисление',
					width:'180',
				},
				{
					text:'Код дохода ЕСН',
					width:'180',
				},
				{
					text:'Скидка',
					width:'80',
				},
				{
					text:'Результат',
					width:'80',
				},
				{
					text:'Облагается ЕНВД',
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
					]
				},
				{
					title:'Пособия по социальному страхованию',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:574px;height:24px;',
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
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:574px;height:217px;',
			height: 217,width: 574,
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
					width:'180',
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
					width:'50',
				},
				{
					text:'Новый ',
					width:'52',
				},
				{
					text:'Дата события',
					width:'82',
				},
				{
					text:'Период оплаты:',
					width:'79',
				},
				{
					text:'Дата начала',
					width:'70',
				},
				{
					text:'Дата окончания',
					width:'88',
				},
				{
					text:'Сумма пособия',
					width:'103',
				},
				{
					text:'Оплачено дней',
					width:'103',
				},
				{
					text:'Начисление',
					width:'100',
				},
				{
					text:'Облагается ЕНВД',
					width:'100',
				},
				{
					text:'Документ основание',
					width:'100',
				},
				{
					text:'Сторно',
					width:'46',
				},
			]
		},
					]
				},
				{
					title:'Пособия по уходу за ребенком',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:574px;height:24px;',
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
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:574px;height:217px;',
			height: 217,width: 574,
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
					width:'120',
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
					text:'Средний дневной заработок',
					width:'100',
				},
				{
					text:'Пособие по уходу за первым ребенком',
					width:'100',
				},
				{
					text:'Пособие по уходу за вторым ребенком',
					width:'100',
				},
				{
					text:'Вид расчета',
					width:'120',
				},
				{
					text:'Облагается ЕНВД',
					width:'100',
				},
				{
					text:'Сторно',
					width:'100',
				},
				{
					text:'Документ основание',
					width:'120',
				},
			]
		},
					]
				},
			]
		},
	]
});