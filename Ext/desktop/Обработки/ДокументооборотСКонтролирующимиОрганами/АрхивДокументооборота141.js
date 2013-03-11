Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.АрхивДокументооборота141',
	{
	extend: 'Ext.window.Window',
	height: 520,width: 794,
	iconCls: 'bogus',
	title: 'Архив документооборота по отчетности с ФНС в формате приказа от 26 марта 2009 г. № ММ-7-6/141@ и более ранних',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:794px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Перейти',
				},
				{
					text:'ОднаУчетнаяЗапись',
				},
				{
					text:'РежимОтображения',
				},
				{
					text:'НесколькоУчетныхЗаписей',
				},
				{
					text:'ЗапросыНаИнформационноеОбслуживание',
				},
				{
					text:'ИсходящиеДокументы',
				},
				{
					text:'ВходящиеДокументы',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:561px;top:0px;width:233px;height:24px;',
			items:
			[
				{
					text:'ПредыдущаяНеделя',
				},
				{
					text:'ТекущаяНеделя',
				},
				{
					text:'Вчера',
				},
				{
					text:'Разделитель',
				},
				{
					text:'БезОграничений',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПредыдущийКвартал',
				},
				{
					text:'ТекущийМесяц',
				},
				{
					text:'ПроизвольныйПериод',
				},
				{
					text:'ПредыдущийГод',
				},
				{
					text:'ТекущийГод',
				},
				{
					text:'ПредыдущийМесяц',
				},
				{
					text:'Сегодня',
				},
				{
					text:'Период',
				},
				{
					text:'ТекущийКвартал',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:778px;height:23px;',
			height: 23,width: 778,
			items:
			[
				{
					title:'Страница1',
					items:
					[
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
					text:'Пометка',
				},
				{
					text:'Отчет',
				},
				{
					text:'Период',
				},
				{
					text:'Вид',
				},
				{
					text:'ДатаСоздания',
				},
				{
					text:'ДатаЗакрытия',
				},
				{
					text:'Наименование',
				},
				{
					text:'ПервичноеСообщение',
				},
				{
					text:'ПодтверждениеОтправки',
				},
				{
					text:'ОтветНаПодтверждениеОтправки',
				},
				{
					text:'ПодтверждениеДоставки',
				},
				{
					text:'ПротоколПроверки',
				},
				{
					text:'ПодтверждениеНаПротоколПроверки',
				},
				{
					text:'ОтветНаЗапрос',
				},
				{
					text:'Организация',
				},
				{
					text:'НалоговыйОрган',
				},
				{
					text:'ДатаПоследнегоСообщения',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:562px;height:22px;',
			height: 22,width: 562,
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
			items:
			[
				{
					title:'ПоОтчету',
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
					title:'ПоВидуОтчета',
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
					title:'ПоПериодуОтчета',
				},
				{
					title:'ПоВидуДокумента',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:310px;top:0px;width:41px;height:19px;',
		},
					]
				},
				{
					title:'ПоЭлектронномуПредставлению',
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
					text:'РегламентированныйОтчет',
				},
				{
					text:'УстановитьФлажкиУВсех',
				},
				{
					text:'ПоказатьОтчетОСостоянии',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'ВыгрузитьСодержимое',
				},
				{
					text:'ВыгрузитьКонтейнеры',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Перейти',
				},
				{
					text:'Отобрать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ОсновныеДействияФормыСформировать',
				},
				{
					text:'ВывестиВОкно',
				},
				{
					text:'НайтиОтчетВСписке',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'СнятьФлажкиУВсех',
				},
			]
		},
					]
				},
				{
					title:'ИсходящиеДокументы',
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
				},
				{
					text:'ДатаСоздания',
				},
				{
					text:'ДатаЗакрытия',
				},
				{
					text:'ПервичноеСообщение',
				},
				{
					text:'ПодтверждениеОтправки',
				},
				{
					text:'ОтветНаПодтверждениеОтправки',
				},
				{
					text:'ПодтверждениеДоставки',
				},
				{
					text:'ДатаПоследнегоСообщения',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:563px;height:24px;',
			items:
			[
				{
					text:'ОткрытьОснование',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Отобрать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Перейти',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Журнал',
				},
				{
					text:'Новый',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:563px;height:22px;',
			height: 22,width: 563,
			items:
			[
				{
					title:'Страница1',
					items:
					[
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
					title:'ВходящиеДокументы',
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
				},
				{
					text:'ДатаСоздания',
				},
				{
					text:'ДатаЗакрытия',
				},
				{
					text:'ДатаПоследнегоСообщения',
				},
				{
					text:'ОтветНаЗапрос',
				},
				{
					text:'ОтветНаОтветНаЗапрос',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:563px;height:24px;',
			items:
			[
				{
					text:'Перейти',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Отобрать',
				},
				{
					text:'ОткрытьОснование',
				},
				{
					text:'Журнал',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:563px;height:22px;',
			height: 22,width: 563,
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
					text:'Новый',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Отобрать',
				},
				{
					text:'Перейти',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОткрытьОснование',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Журнал',
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
					text:'ВидУслуги',
				},
				{
					text:'Период',
				},
				{
					text:'ФорматОтвета',
				},
				{
					text:'ДатаСоздания',
				},
				{
					text:'ДатаЗакрытия',
				},
				{
					text:'Наименование',
				},
				{
					text:'ПервичноеСообщение',
				},
				{
					text:'ПодтверждениеОтправки',
				},
				{
					text:'ОтветНаПодтверждениеОтправки',
				},
				{
					text:'ПодтверждениеДоставки',
				},
				{
					text:'ПротоколПроверки',
				},
				{
					text:'ПодтверждениеНаПротоколПроверки',
				},
				{
					text:'ОтветНаЗапрос',
				},
				{
					text:'ОтветНаОтветНаЗапрос',
				},
				{
					text:'Организация',
				},
				{
					text:'НалоговыйОрган',
				},
				{
					text:'ДатаПоследнегоСообщения',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:563px;height:22px;',
			height: 22,width: 563,
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
			items:
			[
				{
					title:'ПоЗапросу',
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
					title:'ПоВидуУслуги',
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
					text:'Пометка',
				},
				{
					text:'Объект',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:23px;width:195px;height:24px;',
			items:
			[
				{
					text:'УстановитьФлажки',
				},
				{
					text:'СнятьФлажки',
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
});