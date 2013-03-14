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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:794px;height:25px;',
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
			items:
			[
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
				},
				{
					text:'Вид отчета',
					width:'120',
				},
				{
					text:'Период',
					width:'120',
				},
				{
					text:'Вид',
					width:'36',
				},
				{
					text:'Дата начала',
					width:'112',
				},
				{
					text:'Дата завершения',
					width:'112',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Первичное сообщение, содержащее файл отчетности',
					width:'25',
				},
				{
					text:'Подтверждение отправки файла отчетности',
					width:'25',
				},
				{
					text:'Переподписанное налогоплательщиком подтверждение отправки файла отчетности',
					width:'25',
				},
				{
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
				},
				{
					text:'Протокол входного контроля документа',
					width:'25',
				},
				{
					text:'Подтверждение на протокол входного контроля документа',
					width:'25',
				},
				{
					text:'Уведомление об уточнении налоговой декларации (отчета)',
					width:'25',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Налоговый орган',
					width:'120',
				},
				{
					text:'Дата последнего сообщения',
					width:'112',
				},
			]
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
			name: 'ОтчетДляОтбора',
			style: 'position:absolute;left:0px;top:0px;width:410px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
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
			xtype: 'radio',
			boxLabel: 'первичный',
			style: 'position:absolute;left:2px;top:2px;width:74px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'корректирующий',
			style: 'position:absolute;left:81px;top:2px;width:106px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:310px;top:0px;width:41px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: '№ корректировки:',
			style: 'position:absolute;left:195px;top:2px;width:111px;height:15px;',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Год',
			style: 'position:absolute;left:93px;top:4px;width:55px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:562px;height:24px;',
			items:
			[
				{
					text:'Выгрузить контейнеры и их содержимое',
				},
				'-',
				{
					text:'Выгрузить контейнеры',
				},
				{
					text:'Выгрузить содержимое',
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
				},
				{
					text:'Дата начала',
					width:'112',
				},
				{
					text:'Дата завершения',
					width:'112',
				},
				{
					text:'Первичное сообщение, содержащее документ налогоплательщика',
					width:'25',
				},
				{
					text:'Подтверждение отправки от почтового сервера',
					width:'25',
				},
				{
					text:'Подтверждение на подтверждение отправки',
					width:'25',
				},
				{
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
				},
				{
					text:'Дата последнего сообщения',
					width:'25',
				},
			]
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
				},
				{
					text:'Дата начала',
					width:'112',
				},
				{
					text:'Дата завершения',
					width:'112',
				},
				{
					text:'Дата последнего сообщения',
					width:'112',
				},
				{
					text:'Первичное сообщение, содержащее документ налогового органа',
					width:'25',
				},
				{
					text:'Ответ на первичное сообщение, содержащее документ налогового органа',
					width:'25',
				},
			]
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
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:563px;height:24px;',
			items:
			[
				{
					text:'Открыть основание',
				},
				'-',
				{
					text:'Журнал запросов на информационное обслуживание',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:55px;width:563px;height:375px;',
			height: 375,width: 563,
			columns:
			[
				{
					text:'Вид услуги',
					width:'100',
				},
				{
					text:'Период запроса',
					width:'120',
				},
				{
					text:'Формат ответа',
					width:'104',
				},
				{
					text:'Дата начала',
					width:'112',
				},
				{
					text:'Дата завершения',
					width:'112',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Первичное сообщение, содержащее запрос на информационное обслуживание',
					width:'25',
				},
				{
					text:'Подтверждение отправки от почтового сервера',
					width:'25',
				},
				{
					text:'Подтверждение на подтверждение отправки',
					width:'25',
				},
				{
					text:'Подтверждение доставки запроса в налоговый орган',
					width:'25',
				},
				{
					text:'Протокол входного контроля запроса',
					width:'25',
				},
				{
					text:'Подтверждение на протокол входного контроля запроса',
					width:'25',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Налоговый орган',
					width:'120',
				},
				{
					text:'Дата последнего сообщения',
					width:'112',
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
				},
				{
					text:'Объект',
					width:'21',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:23px;width:195px;height:24px;',
			items:
			[
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
});