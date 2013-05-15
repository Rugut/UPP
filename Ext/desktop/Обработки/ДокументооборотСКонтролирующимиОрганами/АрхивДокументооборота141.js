Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.АрхивДокументооборота141',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:794px;height:520px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Архив документооборота по отчетности с ФНС в формате приказа от 26 марта 2009 г. № ММ-7-6/141@ и более ранних',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:778px;height:23px;',
			height: 23,width: 778,
			tabBar:{hidden:true},
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
			disabled: false,
			name: 'ОтборУчетнаяЗапись',
			style: 'position:absolute;left:97px;top:0px;width:681px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:56px;width:778px;height:456px;',
			height: 456,width: 778,
			tabBar:{hidden:true},
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
			tabBar:{hidden:true},
			items:
			[
				{
					title:'ФНС',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:577px;height:456px;',
			height: 456,width: 577,
			items:
			[
				{
					title:'Отчетность',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:85px;width:562px;height:345px;',
			height: 345,width: 562,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Вид отчета',
					width:'120',
					dataIndex:'Отчет',
					flex:1,
				},
				{
					text:'Период',
					width:'120',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Вид',
					width:'36',
					dataIndex:'Вид',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'112',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'112',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее файл отчетности',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение отправки файла отчетности',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Переподписанное налогоплательщиком подтверждение отправки файла отчетности',
					width:'25',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Протокол входного контроля документа',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'Подтверждение на протокол входного контроля документа',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'Уведомление об уточнении налоговой декларации (отчета)',
					width:'25',
					dataIndex:'ОтветНаЗапрос',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Налоговый орган',
					width:'120',
					dataIndex:'НалоговыйОрган',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'112',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пометка',
					},
					{
						name:'Отчет',
					},
					{
						name:'Период',
					},
					{
						name:'Вид',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'Наименование',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеОтправки',
					},
					{
						name:'ОтветНаПодтверждениеОтправки',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ПротоколПроверки',
					},
					{
						name:'ПодтверждениеНаПротоколПроверки',
					},
					{
						name:'ОтветНаЗапрос',
					},
					{
						name:'Организация',
					},
					{
						name:'НалоговыйОрган',
					},
					{
						name:'ДатаПоследнегоСообщения',
					},
				]
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:562px;height:22px;',
			height: 22,width: 562,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидОтбораЦикловОбмена',
			style: 'position:absolute;left:0px;top:0px;width:148px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:152px;top:0px;width:410px;height:21px;',
			height: 21,width: 410,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'По отчету',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтчетДляОтбора',
			style: 'position:absolute;left:0px;top:0px;width:410px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтчетДляОтбораСтрока',
			style: 'position:absolute;left:0px;top:0px;width:382px;height:19px;',
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
			disabled: false,
			name: 'ВидОтчета',
			style: 'position:absolute;left:0px;top:0px;width:410px;height:19px;',
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
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:310px;top:0px;width:41px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: '№ корректировки:',
			style: 'position:absolute;left:195px;top:2px;width:111px;height:15px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'первичный',
			style: 'position:absolute;left:2px;top:2px;width:74px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'корректирующий',
			style: 'position:absolute;left:81px;top:2px;width:106px;height:15px;',
		},
			]
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
			disabled: false,
			name: 'ЭлектронноеПредставлениеДляОтбора',
			style: 'position:absolute;left:0px;top:0px;width:410px;height:19px;',
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
			style: 'position:absolute;left:6px;top:52px;width:562px;height:33px;',
			height: 33,width: 562,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Год',
			style: 'position:absolute;left:93px;top:4px;width:55px;height:20px;',
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
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:55px;width:563px;height:375px;',
			height: 375,width: 563,
			columns:
			[
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'112',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'112',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее документ налогоплательщика',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение отправки от почтового сервера',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Подтверждение на подтверждение отправки',
					width:'25',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'25',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеОтправки',
					},
					{
						name:'ОтветНаПодтверждениеОтправки',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ДатаПоследнегоСообщения',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:563px;height:24px;',
			items:
			[
				{
					text:'Открыть основание',
				},
				'-',
				{
					text:'Журнал документов налогоплательщика',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:563px;height:22px;',
			height: 22,width: 563,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПоДокументуОснованию1',
			text: 'По документу-основанию:',
			style: 'position:absolute;left:4px;top:1px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтборИсходящийДокумент',
			style: 'position:absolute;left:153px;top:1px;width:410px;height:19px;',
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
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:55px;width:563px;height:375px;',
			height: 375,width: 563,
			columns:
			[
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'112',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'112',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'112',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее документ налогового органа',
					width:'25',
					dataIndex:'ОтветНаЗапрос',
					flex:1,
				},
				{
					text:'Ответ на первичное сообщение, содержащее документ налогового органа',
					width:'25',
					dataIndex:'ОтветНаОтветНаЗапрос',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ДатаПоследнегоСообщения',
					},
					{
						name:'ОтветНаЗапрос',
					},
					{
						name:'ОтветНаОтветНаЗапрос',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:563px;height:24px;',
			items:
			[
				{
					text:'Открыть основание',
				},
				'-',
				{
					text:'Журнал документов налогового органа',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:563px;height:22px;',
			height: 22,width: 563,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтборВходящийДокумент',
			style: 'position:absolute;left:153px;top:1px;width:410px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоДокументуОснованию',
			text: 'По документу-основанию:',
			style: 'position:absolute;left:4px;top:1px;width:136px;height:19px;',
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
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:55px;width:563px;height:375px;',
			height: 375,width: 563,
			columns:
			[
				{
					text:'Вид услуги',
					width:'100',
					dataIndex:'ВидУслуги',
					flex:1,
				},
				{
					text:'Период запроса',
					width:'120',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Формат ответа',
					width:'104',
					dataIndex:'ФорматОтвета',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'112',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'112',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее запрос на информационное обслуживание',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение отправки от почтового сервера',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Подтверждение на подтверждение отправки',
					width:'25',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Подтверждение доставки запроса в налоговый орган',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Протокол входного контроля запроса',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'Подтверждение на протокол входного контроля запроса',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ОтветНаЗапрос',
					flex:1,
				},
				{
					text:'',
					width:'25',
					dataIndex:'ОтветНаОтветНаЗапрос',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Налоговый орган',
					width:'120',
					dataIndex:'НалоговыйОрган',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'112',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ВидУслуги',
					},
					{
						name:'Период',
					},
					{
						name:'ФорматОтвета',
					},
					{
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'Наименование',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеОтправки',
					},
					{
						name:'ОтветНаПодтверждениеОтправки',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ПротоколПроверки',
					},
					{
						name:'ПодтверждениеНаПротоколПроверки',
					},
					{
						name:'ОтветНаЗапрос',
					},
					{
						name:'ОтветНаОтветНаЗапрос',
					},
					{
						name:'Организация',
					},
					{
						name:'НалоговыйОрган',
					},
					{
						name:'ДатаПоследнегоСообщения',
					},
				]
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:563px;height:22px;',
			height: 22,width: 563,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидОтбораЦикловОбменаЗапросы',
			style: 'position:absolute;left:0px;top:1px;width:148px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:153px;top:1px;width:410px;height:21px;',
			height: 21,width: 410,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'По запросу',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтборЗапрос',
			style: 'position:absolute;left:0px;top:0px;width:410px;height:19px;',
		},
					]
				},
				{
					title:'По виду услуги',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтборВидУслуги',
			style: 'position:absolute;left:0px;top:0px;width:410px;height:19px;',
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
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:195px;height:456px;',
			height: 456,width: 195,
			tabBar:{hidden:true},
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
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Объект',
					width:'21',
					dataIndex:'Объект',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пометка',
					},
					{
						name:'Объект',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Учетные записи',
			style: 'position:absolute;left:0px;top:2px;width:195px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:23px;width:195px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:0px;top:21px;width:195px;height:3px;',
		},
					]
				},
			]
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
			style: 'position:absolute;left:0px;top:0px;width:794px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Исходящие документы',
				},
				{
					text:'Входящие документы',
				},
				{
					text:'Запросы на информационное обслуживание',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:561px;top:0px;width:233px;height:24px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сегодня',
				},
				{
					text:'Текущая неделя',
				},
				{
					text:'Текущий месяц',
				},
				{
					text:'Текущий квартал',
				},
				{
					text:'Текущий год',
				},
				'-',
				{
					text:'Вчера',
				},
				{
					text:'Предыдущая неделя',
				},
				{
					text:'Предыдущий месяц',
				},
				{
					text:'Предыдущий квартал',
				},
				{
					text:'Предыдущий год',
				},
				'-',
				{
					text:'Произвольный период',
				},
				{
					text:'Без ограничений',
				},
			]
		},
	]
});