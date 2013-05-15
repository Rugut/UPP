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
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:336px;top:33px;width:105px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:441px;top:33px;width:155px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:57px;width:105px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:441px;top:57px;width:155px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:380px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
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
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:574px;height:217px;',
			height: 217,width: 574,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'100',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Федеральный бюджет',
					width:'100',
					dataIndex:'ФедеральныйБюджет',
					flex:1,
				},
				{
					text:'Льгота ФБ',
					width:'100',
					dataIndex:'ПримененнаяЛьготаФБ',
					flex:1,
				},
				{
					text:'ФСС',
					width:'100',
					dataIndex:'ФСС',
					flex:1,
				},
				{
					text:'Льгота ФСС',
					width:'100',
					dataIndex:'ПримененнаяЛьготаФСС',
					flex:1,
				},
				{
					text:'ТФОМС',
					width:'100',
					dataIndex:'ТФОМС',
					flex:1,
				},
				{
					text:'ФФОМС',
					width:'100',
					dataIndex:'ФФОМС',
					flex:1,
				},
				{
					text:'Льгота ФОМС',
					width:'200',
					dataIndex:'ПримененнаяЛьготаФОМС',
					flex:1,
				},
				{
					text:'ПФР Накопительная',
					width:'100',
					dataIndex:'ПФРНакопительная',
					flex:1,
				},
				{
					text:'в том числе ЕНВД',
					width:'100',
					dataIndex:'ПФРНакопительнаяЕНВД',
					flex:1,
				},
				{
					text:'ПФР Страховая',
					width:'100',
					dataIndex:'ПФРСтраховая',
					flex:1,
				},
				{
					text:'в том числе ЕНВД',
					width:'100',
					dataIndex:'ПФРСтраховаяЕНВД',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетЕСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'ФедеральныйБюджет',
					},
					{
						name:'ПримененнаяЛьготаФБ',
					},
					{
						name:'ФСС',
					},
					{
						name:'ПримененнаяЛьготаФСС',
					},
					{
						name:'ТФОМС',
					},
					{
						name:'ФФОМС',
					},
					{
						name:'ПримененнаяЛьготаФОМС',
					},
					{
						name:'ПФРНакопительная',
					},
					{
						name:'ПФРНакопительнаяЕНВД',
					},
					{
						name:'ПФРСтраховая',
					},
					{
						name:'ПФРСтраховаяЕНВД',
					},
				]
			},
		},
					]
				},
				{
					title:'Основные начисления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:574px;height:217px;',
			height: 217,width: 574,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Таб. №',
					width:'68',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'180',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Начисление',
					width:'160',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Код дохода ЕСН',
					width:'160',
					dataIndex:'КодДоходаЕСН',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'100',
					dataIndex:'ПериодДействияНачало',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'100',
					dataIndex:'ПериодДействияОкончание',
					flex:1,
				},
				{
					text:'Результат',
					width:'80',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'Облагается ЕНВД',
					width:'100',
					dataIndex:'ОблагаетсяЕНВД',
					flex:1,
				},
				{
					text:'Сторно',
					width:'42',
					dataIndex:'Сторно',
					flex:1,
				},
				{
					text:'Документ основание',
					width:'100',
					dataIndex:'ДокументОснование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетЕСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ТабельныйНомерСтрока',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'КодДоходаЕСН',
					},
					{
						name:'ПериодДействияНачало',
					},
					{
						name:'ПериодДействияОкончание',
					},
					{
						name:'Результат',
					},
					{
						name:'ОблагаетсяЕНВД',
					},
					{
						name:'Сторно',
					},
					{
						name:'ДокументОснование',
					},
				]
			},
		},
					]
				},
				{
					title:'Дополнительные начисления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:574px;height:217px;',
			height: 217,width: 574,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Таб. №',
					width:'68',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'180',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Начисление',
					width:'180',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Код дохода ЕСН',
					width:'180',
					dataIndex:'КодДоходаЕСН',
					flex:1,
				},
				{
					text:'Скидка',
					width:'80',
					dataIndex:'Скидка',
					flex:1,
				},
				{
					text:'Результат',
					width:'80',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'Облагается ЕНВД',
					width:'100',
					dataIndex:'ОблагаетсяЕНВД',
					flex:1,
				},
				{
					text:'Сторно',
					width:'42',
					dataIndex:'Сторно',
					flex:1,
				},
				{
					text:'Документ основание',
					width:'100',
					dataIndex:'ДокументОснование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетЕСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ТабельныйНомерСтрока',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'КодДоходаЕСН',
					},
					{
						name:'Скидка',
					},
					{
						name:'Результат',
					},
					{
						name:'ОблагаетсяЕНВД',
					},
					{
						name:'Сторно',
					},
					{
						name:'ДокументОснование',
					},
				]
			},
		},
					]
				},
				{
					title:'Пособия по социальному страхованию',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:574px;height:217px;',
			height: 217,width: 574,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Таб. №',
					width:'68',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'180',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Вид пособия',
					width:'100',
					dataIndex:'ВидПособияСоциальногоСтрахования',
					flex:1,
				},
				{
					text:'Финансирование',
					width:'100',
					dataIndex:'СпособФинансированияПособий',
					flex:1,
				},
				{
					text:'Страховой случай:',
					width:'50',
					dataIndex:'ЗаголовокСтраховогоСлучая',
					flex:1,
				},
				{
					text:'Новый ',
					width:'52',
					dataIndex:'УчитыватьКакНовыйСтраховойСлучай',
					flex:1,
				},
				{
					text:'Дата события',
					width:'82',
					dataIndex:'ДатаСтраховогоСлучая',
					flex:1,
				},
				{
					text:'Период оплаты:',
					width:'79',
					dataIndex:'ЗаголовокПериодаОплаты',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'70',
					dataIndex:'ПериодДействияНачало',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'88',
					dataIndex:'ПериодДействияКонец',
					flex:1,
				},
				{
					text:'Сумма пособия',
					width:'103',
					dataIndex:'СуммаВсего',
					flex:1,
				},
				{
					text:'Оплачено дней',
					width:'103',
					dataIndex:'ОплаченныеДни',
					flex:1,
				},
				{
					text:'Начисление',
					width:'100',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Облагается ЕНВД',
					width:'100',
					dataIndex:'ОблагаетсяЕНВД',
					flex:1,
				},
				{
					text:'Документ основание',
					width:'100',
					dataIndex:'ДокументОснование',
					flex:1,
				},
				{
					text:'Сторно',
					width:'46',
					dataIndex:'Сторно',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетЕСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ТабельныйНомерСтрока',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ВидПособияСоциальногоСтрахования',
					},
					{
						name:'СпособФинансированияПособий',
					},
					{
						name:'ЗаголовокСтраховогоСлучая',
					},
					{
						name:'УчитыватьКакНовыйСтраховойСлучай',
					},
					{
						name:'ДатаСтраховогоСлучая',
					},
					{
						name:'ЗаголовокПериодаОплаты',
					},
					{
						name:'ПериодДействияНачало',
					},
					{
						name:'ПериодДействияКонец',
					},
					{
						name:'СуммаВсего',
					},
					{
						name:'ОплаченныеДни',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'ОблагаетсяЕНВД',
					},
					{
						name:'ДокументОснование',
					},
					{
						name:'Сторно',
					},
				]
			},
		},
					]
				},
				{
					title:'Пособия по уходу за ребенком',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:574px;height:217px;',
			height: 217,width: 574,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Таб. №',
					width:'68',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'120',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'100',
					dataIndex:'ПериодДействияНачало',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'100',
					dataIndex:'ПериодДействияКонец',
					flex:1,
				},
				{
					text:'Средний дневной заработок',
					width:'100',
					dataIndex:'СреднийДневнойЗаработок',
					flex:1,
				},
				{
					text:'Пособие по уходу за первым ребенком',
					width:'100',
					dataIndex:'ПособиеПоУходуЗаПервымРебенком',
					flex:1,
				},
				{
					text:'Пособие по уходу за вторым ребенком',
					width:'100',
					dataIndex:'ПособиеПоУходуЗаВторымРебенком',
					flex:1,
				},
				{
					text:'Вид расчета',
					width:'120',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Облагается ЕНВД',
					width:'100',
					dataIndex:'ОблагаетсяЕНВД',
					flex:1,
				},
				{
					text:'Сторно',
					width:'100',
					dataIndex:'Сторно',
					flex:1,
				},
				{
					text:'Документ основание',
					width:'120',
					dataIndex:'ДокументОснование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетЕСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ТабельныйНомерСтрока',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ПериодДействияНачало',
					},
					{
						name:'ПериодДействияКонец',
					},
					{
						name:'СреднийДневнойЗаработок',
					},
					{
						name:'ПособиеПоУходуЗаПервымРебенком',
					},
					{
						name:'ПособиеПоУходуЗаВторымРебенком',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'ОблагаетсяЕНВД',
					},
					{
						name:'Сторно',
					},
					{
						name:'ДокументОснование',
					},
				]
			},
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:407px;width:604px;height:25px;',
			dock: 'bottom',
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
	]
});