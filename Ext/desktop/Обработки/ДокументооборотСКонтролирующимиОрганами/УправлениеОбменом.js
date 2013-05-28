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
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ОтборУчетнаяЗапись',
			width: 681,
			height: 19,
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
					text:'Первичное сообщение, содержащее отчетность',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение даты отправки',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении подтверждения даты отправки',
					width:'25',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении отчетности',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Результат приема отчетности',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'Извещение о получении результата приема',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'Результат обработки отчетности',
					width:'25',
					dataIndex:'ОтветНаЗапрос',
					flex:1,
				},
				{
					text:'Извещение о получении результата обработки',
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
			style: 'position:absolute;left:6px;top:30px;width:529px;height:22px;',
			height: 22,width: 529,
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
			width: 148,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:148px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:153px;top:0px;width:376px;height:21px;',
			height: 21,width: 376,
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
			width: 376,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтчетДляОтбораСтрока',
			width: 331,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:331px;height:19px;',
		},
					]
				},
				{
					title:'По виду отчета',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидОтчета',
			width: 376,
			height: 19,
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
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ЭлектронноеПредставлениеДляОтбора',
			width: 376,
			height: 19,
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
					text:'Первичное сообщение, содержащее отчетность',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение даты отправки',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении подтверждения даты отправки',
					width:'25',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении отчетности',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Результат приема отчетности',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'Извещение о получении результата приема',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'Результат обработки отчетности',
					width:'25',
					dataIndex:'ОтветНаЗапрос',
					flex:1,
				},
				{
					text:'Извещение о получении результата обработки',
					width:'25',
					dataIndex:'ОтветНаОтветНаЗапрос',
					flex:1,
				},
				{
					text:'Возврат заявления',
					width:'25',
					dataIndex:'Возврат',
					flex:1,
				},
				{
					text:'Извещение о получении сообщения о возврате заявления',
					width:'25',
					dataIndex:'ПодтверждениеВозврата',
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
						name:'Возврат',
					},
					{
						name:'ПодтверждениеВозврата',
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
			style: 'position:absolute;left:6px;top:30px;width:529px;height:22px;',
			height: 22,width: 529,
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
			name: 'ВидОтбораЦикловОбменаЗаявление',
			width: 148,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:148px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:153px;top:0px;width:376px;height:21px;',
			height: 21,width: 376,
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
			name: 'ОтчетДляОтбораЗаявление',
			width: 376,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление1',
			text: 'Янв',
			style: 'position:absolute;left:1px;top:4px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление3',
			text: 'I кв',
			style: 'position:absolute;left:57px;top:4px;width:28px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление5',
			text: 'Май',
			style: 'position:absolute;left:114px;top:4px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление7',
			text: 'Июл',
			style: 'position:absolute;left:171px;top:4px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление9',
			text: 'III кв',
			style: 'position:absolute;left:224px;top:4px;width:32px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление11',
			text: 'Ноя',
			style: 'position:absolute;left:282px;top:4px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление2',
			text: 'Фев',
			style: 'position:absolute;left:30px;top:4px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление4',
			text: 'Апр',
			style: 'position:absolute;left:86px;top:4px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление6',
			text: 'II кв',
			style: 'position:absolute;left:141px;top:4px;width:28px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление8',
			text: 'Авг',
			style: 'position:absolute;left:198px;top:4px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление10',
			text: 'Окт',
			style: 'position:absolute;left:256px;top:4px;width:25px;height:17px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяцЗаявление12',
			text: 'IV кв',
			style: 'position:absolute;left:307px;top:4px;width:32px;height:17px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтчетДляОтбораЗаявлениеСтрока',
			width: 331,
			height: 19,
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
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ЭлектронноеПредставлениеДляОтбораЗаявление',
			width: 376,
			height: 19,
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
			tabBar:{hidden:true},
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
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ГодЗаявление',
			style: 'position:absolute;left:93px;top:4px;width:55px;height:20px;',
		},
					]
				},
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
			tabBar:{hidden:true},
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
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Дата документа',
					width:'99',
					dataIndex:'ДатаДокумента',
					flex:1,
				},
				{
					text:'Номер документа',
					width:'100',
					dataIndex:'НомерДокумента',
					flex:1,
				},
				{
					text:'Вид документа',
					width:'227',
					dataIndex:'ВидДокумента',
					flex:1,
				},
				{
					text:'Налоговый орган',
					width:'106',
					dataIndex:'НалоговыйОрган',
					flex:1,
				},
				{
					text:'Организация',
					width:'110',
					dataIndex:'Организация',
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
						name:'Статус',
					},
					{
						name:'ДатаДокумента',
					},
					{
						name:'НомерДокумента',
					},
					{
						name:'ВидДокумента',
					},
					{
						name:'НалоговыйОрган',
					},
					{
						name:'Организация',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			tabBar:{hidden:true},
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
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'128',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее документ налогового орагана',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение доставки документа налогоплательщику',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Результат приема документа',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'Извещение о получении результата приема',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
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
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
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
						name:'ДатаПоследнегоСообщения',
					},
				]
			},
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
			tabBar:{hidden:true},
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
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Дата создания',
					width:'119',
					dataIndex:'ДатаСообщения',
					flex:1,
				},
				{
					text:'Получатель',
					width:'68',
					dataIndex:'Получатель',
					flex:1,
				},
				{
					text:'Тема',
					width:'187',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'112',
					dataIndex:'Организация',
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
						name:'Статус',
					},
					{
						name:'ДатаСообщения',
					},
					{
						name:'Получатель',
					},
					{
						name:'Наименование',
					},
					{
						name:'Организация',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			tabBar:{hidden:true},
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
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'128',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Обращение налогоплательщика',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение даты отправки',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении подтверждения даты отправки',
					width:'25',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении обращения',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Результат приема обращения',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'Извещение о получении результата приема',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
				{
					text:'Наименование',
					width:'228',
					dataIndex:'Наименование',
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
						name:'ПротоколПроверки',
					},
					{
						name:'ПодтверждениеНаПротоколПроверки',
					},
					{
						name:'ДатаПоследнегоСообщения',
					},
					{
						name:'Наименование',
					},
				]
			},
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
			tabBar:{hidden:true},
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
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Дата получения',
					width:'120',
					dataIndex:'ДатаСообщения',
					flex:1,
				},
				{
					text:'Отправитель',
					width:'83',
					dataIndex:'Отправитель',
					flex:1,
				},
				{
					text:'Тема',
					width:'173',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'112',
					dataIndex:'Организация',
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
						name:'Статус',
					},
					{
						name:'ДатаСообщения',
					},
					{
						name:'Отправитель',
					},
					{
						name:'Наименование',
					},
					{
						name:'Организация',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			tabBar:{hidden:true},
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
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'128',
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
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
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
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
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
			tabBar:{hidden:true},
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
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'128',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее отчетность',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение даты отправки',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении подтверждения даты отправки',
					width:'25',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении отчетности',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Результат приема отчетности',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'Извещение о получении результата приема',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'Результат обработки отчетности',
					width:'25',
					dataIndex:'ОтветНаЗапрос',
					flex:1,
				},
				{
					text:'Извещение о получении результата обработки',
					width:'25',
					dataIndex:'ОтветНаОтветНаЗапрос',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
				{
					text:'Наименование',
					width:'228',
					dataIndex:'Наименование',
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
						name:'ДатаПоследнегоСообщения',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
			tabBar:{hidden:true},
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
					text:'&Новый',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
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
					text:'',
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
					text:'Обновить',
				},
				'-',
				{
					text:'Отображать панель обмена',
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
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Дата создания',
					width:'119',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Начало периода',
					width:'100',
					dataIndex:'ДатаНачалаПериода',
					flex:1,
				},
				{
					text:'Конец периода',
					width:'100',
					dataIndex:'ДатаОкончанияПериода',
					flex:1,
				},
				{
					text:'Вид услуги',
					width:'104',
					dataIndex:'ВидУслуги',
					flex:1,
				},
				{
					text:'Организация',
					width:'90',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Ответ',
					width:'100',
					dataIndex:'Ответ',
					flex:1,
				},
				{
					text:'Формат ответа',
					width:'100',
					dataIndex:'ФорматОтвета',
					flex:1,
				},
				{
					text:'Номер',
					width:'90',
					dataIndex:'Номер',
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
						name:'Статус',
					},
					{
						name:'Дата',
					},
					{
						name:'ДатаНачалаПериода',
					},
					{
						name:'ДатаОкончанияПериода',
					},
					{
						name:'ВидУслуги',
					},
					{
						name:'Организация',
					},
					{
						name:'Ответ',
					},
					{
						name:'ФорматОтвета',
					},
					{
						name:'Номер',
					},
				]
			},
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
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Отчет',
					width:'138',
					dataIndex:'Отчет',
					flex:1,
				},
				{
					text:'Период',
					width:'109',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'75',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'74',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее файл отчетности',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Протокол',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'Квитанция на протокол',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'Вид отчета',
					width:'120',
					dataIndex:'ВидОтчета',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Орган ПФР',
					width:'120',
					dataIndex:'ОрганПФР',
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
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
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
						name:'ВидОтчета',
					},
					{
						name:'Наименование',
					},
					{
						name:'Организация',
					},
					{
						name:'ОрганПФР',
					},
					{
						name:'ДатаПоследнегоСообщения',
					},
				]
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:22px;',
			height: 22,width: 529,
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
			name: 'ВидОтбораЦикловОбменаПФР',
			width: 148,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:148px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:153px;top:0px;width:376px;height:21px;',
			height: 21,width: 376,
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
			name: 'ОтчетДляОтбораПФР',
			width: 376,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтчетДляОтбораСтрокаПФР',
			width: 331,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:331px;height:19px;',
		},
					]
				},
				{
					title:'По виду отчета',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидОтчетаПФР',
			width: 376,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
					]
				},
				{
					title:'По электронному представлению',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ЭлектронноеПредставлениеДляОтбораПФР',
			width: 376,
			height: 19,
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
					text:'Показать документы',
				},
				{
					text:'Показать отчеты о состоянии',
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
			tabBar:{hidden:true},
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
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Дата создания',
					width:'119',
					dataIndex:'ДатаСообщения',
					flex:1,
				},
				{
					text:'Получатель',
					width:'112',
					dataIndex:'Получатель',
					flex:1,
				},
				{
					text:'Тема',
					width:'144',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'112',
					dataIndex:'Организация',
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
						name:'Статус',
					},
					{
						name:'ДатаСообщения',
					},
					{
						name:'Получатель',
					},
					{
						name:'Наименование',
					},
					{
						name:'Организация',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			tabBar:{hidden:true},
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
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'128',
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
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
				{
					text:'Наименование',
					width:'228',
					dataIndex:'Наименование',
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
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
					},
					{
						name:'ПодтверждениеДоставки',
					},
					{
						name:'ДатаПоследнегоСообщения',
					},
					{
						name:'Наименование',
					},
				]
			},
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
			tabBar:{hidden:true},
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
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Отправитель',
					width:'112',
					dataIndex:'Отправитель',
					flex:1,
				},
				{
					text:'Дата получения',
					width:'120',
					dataIndex:'ДатаСообщения',
					flex:1,
				},
				{
					text:'Тема',
					width:'144',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'112',
					dataIndex:'Организация',
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
						name:'Статус',
					},
					{
						name:'Отправитель',
					},
					{
						name:'ДатаСообщения',
					},
					{
						name:'Наименование',
					},
					{
						name:'Организация',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			tabBar:{hidden:true},
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
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'128',
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
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
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
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
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
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Отчет',
					width:'138',
					dataIndex:'Отчет',
					flex:1,
				},
				{
					text:'Период',
					width:'109',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'75',
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'74',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее файл отчетности',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение даты отправки',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении подтверждения даты отправки',
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
					text:'Протокол',
					width:'25',
					dataIndex:'ПротоколПроверки',
					flex:1,
				},
				{
					text:'Квитанция на протокол',
					width:'25',
					dataIndex:'ПодтверждениеНаПротоколПроверки',
					flex:1,
				},
				{
					text:'Вид отчета',
					width:'120',
					dataIndex:'ВидОтчета',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Орган ФСГС',
					width:'120',
					dataIndex:'ОрганФСГС',
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
						name:'ПротоколПроверки',
					},
					{
						name:'ПодтверждениеНаПротоколПроверки',
					},
					{
						name:'ВидОтчета',
					},
					{
						name:'Наименование',
					},
					{
						name:'Организация',
					},
					{
						name:'ОрганФСГС',
					},
					{
						name:'ДатаПоследнегоСообщения',
					},
				]
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:22px;',
			height: 22,width: 529,
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
			name: 'ВидОтбораЦикловОбменаФСГС',
			width: 148,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:148px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:153px;top:0px;width:376px;height:21px;',
			height: 21,width: 376,
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
			name: 'ОтчетДляОтбораФСГС',
			width: 376,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтчетДляОтбораСтрокаФСГС',
			width: 331,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:331px;height:19px;',
		},
					]
				},
				{
					title:'По виду отчета',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидОтчетаФСГС',
			width: 376,
			height: 19,
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
					]
				},
				{
					title:'По электронному представлению',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ЭлектронноеПредставлениеДляОтбораФСГС',
			width: 376,
			height: 19,
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
					text:'Показать документы',
				},
				{
					text:'Показать отчеты о состоянии',
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
			tabBar:{hidden:true},
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
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Дата создания',
					width:'119',
					dataIndex:'ДатаСообщения',
					flex:1,
				},
				{
					text:'Получатель',
					width:'112',
					dataIndex:'Получатель',
					flex:1,
				},
				{
					text:'Тема',
					width:'144',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'112',
					dataIndex:'Организация',
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
						name:'Статус',
					},
					{
						name:'ДатаСообщения',
					},
					{
						name:'Получатель',
					},
					{
						name:'Наименование',
					},
					{
						name:'Организация',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			tabBar:{hidden:true},
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
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'128',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее документ респондента',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение даты отправки',
					width:'25',
					dataIndex:'ПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Извещение о получении подтверждения даты отправки',
					width:'25',
					dataIndex:'ОтветНаПодтверждениеОтправки',
					flex:1,
				},
				{
					text:'Подтверждение доставки документа в орган ФСГС',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
					dataIndex:'ДатаПоследнегоСообщения',
					flex:1,
				},
				{
					text:'Наименование',
					width:'228',
					dataIndex:'Наименование',
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
					{
						name:'Наименование',
					},
				]
			},
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
			tabBar:{hidden:true},
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
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'Отправитель',
					width:'112',
					dataIndex:'Отправитель',
					flex:1,
				},
				{
					text:'Дата получения',
					width:'120',
					dataIndex:'ДатаСообщения',
					flex:1,
				},
				{
					text:'Тема',
					width:'144',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'112',
					dataIndex:'Организация',
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
						name:'Статус',
					},
					{
						name:'Отправитель',
					},
					{
						name:'ДатаСообщения',
					},
					{
						name:'Наименование',
					},
					{
						name:'Организация',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
			tabBar:{hidden:true},
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
					dataIndex:'ДатаСоздания',
					flex:1,
				},
				{
					text:'Дата завершения',
					width:'128',
					dataIndex:'ДатаЗакрытия',
					flex:1,
				},
				{
					text:'Первичное сообщение, содержащее документ ФСГС',
					width:'25',
					dataIndex:'ПервичноеСообщение',
					flex:1,
				},
				{
					text:'Подтверждение доставки документа',
					width:'25',
					dataIndex:'ПодтверждениеДоставки',
					flex:1,
				},
				{
					text:'Дата последнего сообщения',
					width:'128',
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
						name:'ДатаСоздания',
					},
					{
						name:'ДатаЗакрытия',
					},
					{
						name:'ПервичноеСообщение',
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
			tabBar:{hidden:true},
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
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата получения',
					width:'128',
					dataIndex:'ДатаТранспорта',
					flex:1,
				},
				{
					text:'Отправитель',
					width:'159',
					dataIndex:'ОтКогоАдрес',
					flex:1,
				},
				{
					text:'Тема',
					width:'212',
					dataIndex:'Тема',
					flex:1,
				},
				{
					text:'От кого',
					width:'122',
					dataIndex:'ОтКогоПредставление',
					flex:1,
				},
				{
					text:'Дата отправки',
					width:'128',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Учетная запись',
					width:'153',
					dataIndex:'УчетнаяЗапись',
					flex:1,
				},
				{
					text:'Пометка удаления',
					width:'70',
					dataIndex:'ПометкаУдаления',
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
						name:'Картинка',
					},
					{
						name:'ДатаТранспорта',
					},
					{
						name:'ОтКогоАдрес',
					},
					{
						name:'Тема',
					},
					{
						name:'ОтКогоПредставление',
					},
					{
						name:'Дата',
					},
					{
						name:'УчетнаяЗапись',
					},
					{
						name:'ПометкаУдаления',
					},
				]
			},
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
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:0px;top:14px;width:543px;height:3px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:0px;top:9px;width:543px;height:3px;',
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
					text:'Заявления на подключение',
				},
				'-',
				{
					text:'Учетные записи документооборота',
				},
				{
					text:'Серверы документооборота',
				},
				'-',
				{
					text:'Налоговые органы',
				},
				{
					text:'Органы ПФР',
				},
				{
					text:'Органы ФСГС',
				},
				'-',
				{
					text:'Регламентированные отчеты',
				},
				{
					text:'Виды отправляемых документов',
				},
				{
					text:'Внешние электронные представления отчетов',
				},
				'-',
				{
					text:'Архив документооборота с ФНС',
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