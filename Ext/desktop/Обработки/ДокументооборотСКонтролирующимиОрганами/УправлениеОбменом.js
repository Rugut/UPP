Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.УправлениеОбменом',
	{
	extend: 'Ext.window.Window',
	height: 524,width: 794,
	iconCls: 'bogus',
	title: 'Документооборот с контролирующими органами',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:794px;height:25px;',
			items:
			[
				{
					text:'РежимОднойУчетнойЗаписи',
				},
				{
					text:'ЭлектронныеПредставленияОтчетов',
				},
				{
					text:'ОрганыПФР',
				},
				{
					text:'НалоговыеОрганы',
				},
				{
					text:'Перейти',
				},
				{
					text:'ПолучитьПочту',
				},
				{
					text:'Обменяться',
				},
				{
					text:'ВидыОтправляемыхДокументов',
				},
				{
					text:'РегламентированныеОтчеты',
				},
				{
					text:'АрхивДокументооборотаСФНС',
				},
				{
					text:'ОтправитьПочту',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаявленияНаПодключение',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'УчетныеЗаписиДокументооборота',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'СерверыДокументооборота',
				},
				{
					text:'ОрганыФСГС',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:561px;top:0px;width:233px;height:24px;',
			items:
			[
				{
					text:'ПредыдущийГод',
				},
				{
					text:'ПредыдущаяНеделя',
				},
				{
					text:'ПроизвольныйПериод',
				},
				{
					text:'ТекущийМесяц',
				},
				{
					text:'БезОграничений',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ТекущийГод',
				},
				{
					text:'ПредыдущийКвартал',
				},
				{
					text:'ПредыдущийМесяц',
				},
				{
					text:'Сегодня',
				},
				{
					text:'ТекущийКвартал',
				},
				{
					text:'ТекущаяНеделя',
				},
				{
					text:'Вчера',
				},
				{
					text:'Период',
				},
				{
					text:'Разделитель',
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
			style: 'position:absolute;left:8px;top:60px;width:778px;height:456px;',
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
			style: 'position:absolute;left:6px;top:30px;width:529px;height:22px;',
			height: 22,width: 529,
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
			style: 'position:absolute;left:153px;top:0px;width:376px;height:21px;',
			height: 21,width: 376,
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
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетДляОтбораСтрока',
			style: 'position:absolute;left:0px;top:0px;width:331px;height:19px;',
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
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
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
			style: 'position:absolute;left:6px;top:6px;width:529px;height:24px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Зашифровать',
				},
				{
					text:'Расшифровать',
				},
				{
					text:'Подписать',
				},
				{
					text:'СнятьФлажкиУВсех',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ВывестиВОкно',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Перейти',
				},
				{
					text:'ПоказатьОтчетОСостоянии',
				},
				{
					text:'ВыгрузитьКонтейнеры',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СформироватьПодтверждения',
				},
				{
					text:'ВыгрузитьСодержимое',
				},
				{
					text:'РегламентированныйОтчет',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'ПошаговыеОперации',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'УстановитьФлажкиУВсех',
				},
				{
					text:'ОсновныеДействияФормыСформировать',
				},
				{
					text:'НайтиОтчетВСписке',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Отобрать',
				},
			]
		},
					]
				},
				{
					title:'Заявление',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:85px;width:529px;height:331px;',
			height: 331,width: 529,
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
					text:'Возврат',
				},
				{
					text:'ПодтверждениеВозврата',
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
			style: 'position:absolute;left:6px;top:30px;width:529px;height:22px;',
			height: 22,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОтбораЦикловОбменаЗаявление',
			style: 'position:absolute;left:0px;top:0px;width:148px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:153px;top:0px;width:376px;height:21px;',
			height: 21,width: 376,
			items:
			[
				{
					title:'ПоОтчету',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетДляОтбораЗаявление',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетДляОтбораЗаявлениеСтрока',
			style: 'position:absolute;left:0px;top:0px;width:331px;height:19px;',
		},
					]
				},
				{
					title:'ПоПериодуОтчета',
				},
				{
					title:'ПоЭлектронномуПредставлению',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЭлектронноеПредставлениеДляОтбораЗаявление',
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
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГодЗаявление',
			style: 'position:absolute;left:93px;top:4px;width:55px;height:20px;',
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
					text:'РегламентированныйОтчет',
				},
				{
					text:'СнятьФлажкиУВсех',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСформировать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'НайтиОтчетВСписке',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'УстановитьФлажкиУВсех',
				},
				{
					text:'ВывестиВОкно',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Отобрать',
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
					text:'ПоказатьОтчетОСостоянии',
				},
				{
					text:'Перейти',
				},
				{
					text:'Разделитель2',
				},
			]
		},
					]
				},
				{
					title:'Требования',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
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
					text:'Статус',
				},
				{
					text:'ДатаДокумента',
				},
				{
					text:'НомерДокумента',
				},
				{
					text:'ВидДокумента',
				},
				{
					text:'НалоговыйОрган',
				},
				{
					text:'Организация',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие7',
				},
				{
					text:'ОтображатьСписокЦикловОбмена',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Открыть',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
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
					text:'ДатаСоздания',
				},
				{
					text:'ДатаЗакрытия',
				},
				{
					text:'ПервичноеСообщение',
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
					text:'ДатаПоследнегоСообщения',
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
					title:'ИсходящиеДокументы',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
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
					text:'Статус',
				},
				{
					text:'ДатаСообщения',
				},
				{
					text:'Получатель',
				},
				{
					text:'Наименование',
				},
				{
					text:'Организация',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'ОтображатьСписокЦикловОбмена',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель6',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
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
					text:'ПротоколПроверки',
				},
				{
					text:'ПодтверждениеНаПротоколПроверки',
				},
				{
					text:'ДатаПоследнегоСообщения',
				},
				{
					text:'Наименование',
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
					title:'ВходящиеДокументы',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
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
					text:'Статус',
				},
				{
					text:'ДатаСообщения',
				},
				{
					text:'Отправитель',
				},
				{
					text:'Наименование',
				},
				{
					text:'Организация',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ОтображатьСписокЦикловОбмена',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Открыть',
				},
				{
					text:'Действие',
				},
				{
					text:'Ответить',
				},
				{
					text:'Разделитель1',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
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
					text:'ДатаСоздания',
				},
				{
					text:'ДатаЗакрытия',
				},
				{
					text:'ПервичноеСообщение',
				},
				{
					text:'ПодтверждениеДоставки',
				},
				{
					text:'ДатаПоследнегоСообщения',
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
					title:'Запросы',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
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
					text:'ДатаПоследнегоСообщения',
				},
				{
					text:'Наименование',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
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
					text:'Действие7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'ОтображатьСписокЦикловОбмена',
				},
				{
					text:'Действие4',
				},
				{
					text:'Подменю1',
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
					text:'Статус',
				},
				{
					text:'Дата',
				},
				{
					text:'ДатаНачалаПериода',
				},
				{
					text:'ДатаОкончанияПериода',
				},
				{
					text:'ВидУслуги',
				},
				{
					text:'Организация',
				},
				{
					text:'Ответ',
				},
				{
					text:'ФорматОтвета',
				},
				{
					text:'Номер',
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
					text:'Пометка',
				},
				{
					text:'Отчет',
				},
				{
					text:'Период',
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
					text:'ПодтверждениеДоставки',
				},
				{
					text:'ПротоколПроверки',
				},
				{
					text:'ПодтверждениеНаПротоколПроверки',
				},
				{
					text:'ВидОтчета',
				},
				{
					text:'Наименование',
				},
				{
					text:'Организация',
				},
				{
					text:'ОрганПФР',
				},
				{
					text:'ДатаПоследнегоСообщения',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:22px;',
			height: 22,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОтбораЦикловОбменаПФР',
			style: 'position:absolute;left:0px;top:0px;width:148px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:153px;top:0px;width:376px;height:21px;',
			height: 21,width: 376,
			items:
			[
				{
					title:'ПоОтчету',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетДляОтбораПФР',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетДляОтбораСтрокаПФР',
			style: 'position:absolute;left:0px;top:0px;width:331px;height:19px;',
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
			name: 'ВидОтчетаПФР',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
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
			name: 'ЭлектронноеПредставлениеДляОтбораПФР',
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
					text:'ПоказатьОтчетОСостоянии',
				},
				{
					text:'ВыгрузитьКонтейнеры',
				},
				{
					text:'УстановитьФлажкиУВсех',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'ДокументыПерсонифицированногоУчета',
				},
				{
					text:'Перейти',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РегламентированныйОтчет',
				},
				{
					text:'СнятьФлажкиУВсех',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ВывестиВОкно',
				},
				{
					text:'ВыгрузитьСодержимое',
				},
				{
					text:'Отобрать',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'ОсновныеДействияФормыСформировать',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
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
					text:'Статус',
				},
				{
					text:'ДатаСообщения',
				},
				{
					text:'Получатель',
				},
				{
					text:'Наименование',
				},
				{
					text:'Организация',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				{
					text:'ОтображатьСписокЦикловОбмена',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Подменю1',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
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
					text:'ДатаСоздания',
				},
				{
					text:'ДатаЗакрытия',
				},
				{
					text:'ПервичноеСообщение',
				},
				{
					text:'ПодтверждениеДоставки',
				},
				{
					text:'ДатаПоследнегоСообщения',
				},
				{
					text:'Наименование',
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
					title:'ВходящиеДокументы',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
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
					text:'Статус',
				},
				{
					text:'Отправитель',
				},
				{
					text:'ДатаСообщения',
				},
				{
					text:'Наименование',
				},
				{
					text:'Организация',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ОтображатьСписокЦикловОбмена',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Открыть',
				},
				{
					text:'Действие1',
				},
				{
					text:'Ответить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие6',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
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
					text:'ДатаСоздания',
				},
				{
					text:'ДатаЗакрытия',
				},
				{
					text:'ПервичноеСообщение',
				},
				{
					text:'ПодтверждениеДоставки',
				},
				{
					text:'ДатаПоследнегоСообщения',
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
					title:'ФСГС',
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
					text:'Пометка',
				},
				{
					text:'Отчет',
				},
				{
					text:'Период',
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
					text:'ПротоколПроверки',
				},
				{
					text:'ПодтверждениеНаПротоколПроверки',
				},
				{
					text:'ВидОтчета',
				},
				{
					text:'Наименование',
				},
				{
					text:'Организация',
				},
				{
					text:'ОрганФСГС',
				},
				{
					text:'ДатаПоследнегоСообщения',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:529px;height:22px;',
			height: 22,width: 529,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОтбораЦикловОбменаФСГС',
			style: 'position:absolute;left:0px;top:0px;width:148px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:153px;top:0px;width:376px;height:21px;',
			height: 21,width: 376,
			items:
			[
				{
					title:'ПоОтчету',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетДляОтбораФСГС',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетДляОтбораСтрокаФСГС',
			style: 'position:absolute;left:0px;top:0px;width:331px;height:19px;',
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
			name: 'ВидОтчетаФСГС',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:19px;',
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
			name: 'ЭлектронноеПредставлениеДляОтбораФСГС',
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
					text:'Разделитель',
				},
				{
					text:'Перейти',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПоказатьОтчетОСостоянии',
				},
				{
					text:'УстановитьФлажкиУВсех',
				},
				{
					text:'ВыгрузитьСодержимое',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ОсновныеДействияФормыСформировать',
				},
				{
					text:'РегламентированныйОтчет',
				},
				{
					text:'Отобрать',
				},
				{
					text:'ВыгрузитьКонтейнеры',
				},
				{
					text:'СнятьФлажкиУВсех',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ВывестиВОкно',
				},
				{
					text:'Выгрузить',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
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
					text:'Статус',
				},
				{
					text:'ДатаСообщения',
				},
				{
					text:'Получатель',
				},
				{
					text:'Наименование',
				},
				{
					text:'Организация',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
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
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'ОтображатьСписокЦикловОбмена',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'Подменю1',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
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
				{
					text:'Наименование',
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
					title:'ВходящиеДокументы',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:529px;height:276px;',
			height: 276,width: 529,
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
					text:'Статус',
				},
				{
					text:'Отправитель',
				},
				{
					text:'ДатаСообщения',
				},
				{
					text:'Наименование',
				},
				{
					text:'Организация',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Открыть',
				},
				{
					text:'ОтображатьСписокЦикловОбмена',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Ответить',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Действие1',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:288px;width:529px;height:128px;',
			height: 128,width: 529,
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
					text:'ДатаСоздания',
				},
				{
					text:'ДатаЗакрытия',
				},
				{
					text:'ПервичноеСообщение',
				},
				{
					text:'ПодтверждениеДоставки',
				},
				{
					text:'ДатаПоследнегоСообщения',
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
					title:'Прочее',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:543px;height:442px;',
			height: 442,width: 543,
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
					text:'Картинка',
				},
				{
					text:'ДатаТранспорта',
				},
				{
					text:'ОтКогоАдрес',
				},
				{
					text:'Тема',
				},
				{
					text:'ОтКогоПредставление',
				},
				{
					text:'Дата',
				},
				{
					text:'УчетнаяЗапись',
				},
				{
					text:'ПометкаУдаления',
				},
			]
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