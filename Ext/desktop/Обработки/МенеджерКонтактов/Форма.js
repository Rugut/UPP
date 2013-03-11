Ext.define('Обработки.МенеджерКонтактов.Форма',
	{
	extend: 'Ext.window.Window',
	height: 496,width: 837,
	iconCls: 'bogus',
	title: 'Менеджер контактов',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:25px;width:837px;height:471px;',
			height: 471,width: 837,
			items:
			[
				{
					title:'Календарь',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:804px;height:457px;',
			height: 457,width: 804,
			items:
			[
				{
					title:'Список',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВыбКонтрагент',
			style: 'position:absolute;left:89px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:24px;width:804px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОтборПоТекущемуЗначению',
				},
				{
					text:'СписокСобытий',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СписокДокументов',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ВывестиСписок',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ОтборПоВидуДокументаСобытие',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ОтборПоВидуДокументаЗаказПокупателя',
				},
				{
					text:'Подменю',
				},
				{
					text:'ОтборДокументовПоКонтрагенту',
				},
				{
					text:'ОтборПоВидуДокументаЗаказПоставщику',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ИсторияОтборов',
				},
				{
					text:'ОтборПоВидуДокументаЗаказПокупателя',
				},
				{
					text:'Интервал',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие3',
				},
				{
					text:'ДокументыПоЗаказу',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Отбор',
				},
				{
					text:'ОтчетПоСобытиям',
				},
				{
					text:'Действие3',
				},
				{
					text:'СнятьОтбор',
				},
				{
					text:'НастройкаСписка___',
				},
				{
					text:'СнятьОтбор',
				},
				{
					text:'Взаиморасчеты',
				},
				{
					text:'ВводНаОсновании',
				},
				{
					text:'ОтборПоВидуДокументаВсеДокументы',
				},
				{
					text:'ОтборПоВидуДокумента',
				},
				{
					text:'Действие2',
				},
				{
					text:'Интервал',
				},
				{
					text:'Действие1',
				},
				{
					text:'ОтборДокументовПоКонтрагенту',
				},
				{
					text:'ОтборПоВидуДокументаЗаказПоставщику',
				},
				{
					text:'ВводНаОсновании',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ОтборПоВидуДокумента',
				},
				{
					text:'Отбор',
				},
				{
					text:'ОтборПоВидуДокументаСобытие',
				},
				{
					text:'ОтборПоТекущемуЗначению',
				},
				{
					text:'Разделитель',
				},
				{
					text:'АнализЗаказа',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ИсторияОтборов',
				},
				{
					text:'Действие',
				},
				{
					text:'ОтборПоВидуДокументаВсеДокументы',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:48px;width:804px;height:409px;',
			height: 409,width: 804,
			columns:
			[
				{
					text:'Состояние',
				},
				{
					text:'Важность',
				},
				{
					text:'ДатаДокумента',
				},
				{
					text:'ДатаСобытия',
				},
				{
					text:'Номер',
				},
				{
					text:'ВидДокумента',
				},
				{
					text:'ВидОперации',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Информация',
				},
			]
		},
					]
				},
				{
					title:'День',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДеньНазад',
			text: '< Пред. день',
			style: 'position:absolute;left:651px;top:0px;width:75px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДеньВперед',
			text: 'След. день >',
			style: 'position:absolute;left:730px;top:0px;width:74px;height:22px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:30px;width:671px;height:427px;',
			height: 427,width: 671,
			items:
			[
				{
					title:'Грид',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:339px;top:0px;width:332px;height:427px;',
			height: 427,width: 332,
			columns:
			[
				{
					text:'КартинкаДокумента',
				},
				{
					text:'ВидДокументаЗаказа',
				},
				{
					text:'ВидОперации',
				},
				{
					text:'Контрагент',
				},
			]
		},
					]
				},
				{
					title:'Моксель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:671px;top:420px;width:133px;height:26px;',
			items:
			[
				{
					text:'ИзменитьВремя',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПометитьКакОтменено',
				},
				{
					text:'ИзменитьСобытие',
				},
				{
					text:'ПометитьКакЗавершено',
				},
				{
					text:'СоздатьСобытие',
				},
			]
		},
					]
				},
				{
					title:'Неделя',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаНеделяНазад',
			text: '< Пред. неделя',
			style: 'position:absolute;left:627px;top:0px;width:87px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНеделяВперед',
			text: 'След. неделя >',
			style: 'position:absolute;left:718px;top:0px;width:86px;height:22px;',
		},
					]
				},
				{
					title:'Месяц',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаМесяцНазад',
			text: '< Пред. месяц',
			style: 'position:absolute;left:517px;top:0px;width:87px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаМесяцВперед',
			text: 'След. месяц >',
			style: 'position:absolute;left:607px;top:0px;width:86px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбратьМесяц',
			text: 'Выбрать месяц',
			style: 'position:absolute;left:697px;top:0px;width:107px;height:22px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Почта',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:231px;top:30px;width:578px;height:161px;',
			height: 161,width: 578,
			columns:
			[
				{
					text:'НеРассмотрено',
				},
				{
					text:'СостояниеПотомкаПисьма',
				},
				{
					text:'ЕстьВложения',
				},
				{
					text:'СтатусПисьма',
				},
				{
					text:'Объекты',
				},
				{
					text:'ОтправительИмя',
				},
				{
					text:'КомуПредставление',
				},
				{
					text:'Тема',
				},
				{
					text:'ДатаОтправления',
				},
				{
					text:'ДатаТранспорта',
				},
				{
					text:'ГраницаКонтроляОтветаНаПисьмо',
				},
				{
					text:'Дата',
				},
				{
					text:'Ответственный',
				},
				{
					text:'Предмет',
				},
				{
					text:'ГруппаУчетнойЗаписи',
				},
				{
					text:'Основание',
				},
				{
					text:'Номер',
				},
				{
					text:'УчетнаяЗапись',
				},
				{
					text:'КопииПредставление',
				},
				{
					text:'Комментарий',
				},
				{
					text:'ТекстПисьма',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:283px;top:373px;width:473px;height:24px;',
			items:
			[
				{
					text:'Снять',
				},
				{
					text:'ПрименитьКПисьмамФильтры',
				},
				{
					text:'Изменить',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'СоздатьФильтрПоПисьму',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Скопировать',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'УстановитьПометкуУдаления',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Действие',
				},
				{
					text:'УстановитьНеРассмотрено',
				},
				{
					text:'НовоеПисьмоВТекущейГруппе',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ВыделитьВидимыеСтроки',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ВвестиСобытие',
				},
				{
					text:'ПоказатьЗаголовокПисьма',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Отметка',
				},
				{
					text:'ОтветитьВсем',
				},
				{
					text:'НовоеПисьмо',
				},
				{
					text:'Настроить',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'УстановитьРассмотрено',
				},
				{
					text:'ОтправитьВыбранныеПисьма',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Переслать',
				},
				{
					text:'Ответить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:650px;top:439px;width:106px;height:24px;',
			items:
			[
				{
					text:'НайтиДобавить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:650px;top:439px;width:106px;height:24px;',
			items:
			[
				{
					text:'НайтиДобавить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:650px;top:439px;width:106px;height:24px;',
			items:
			[
				{
					text:'НайтиДобавить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:652px;top:439px;width:104px;height:24px;',
			items:
			[
				{
					text:'ОткрытьСсылку',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:310px;top:330px;width:200px;height:24px;',
			items:
			[
				{
					text:'СоздатьОпрос',
				},
				{
					text:'СнятьОтборПоПредметам',
				},
				{
					text:'ОтображатьСкрытыеПредметы',
				},
				{
					text:'ИзменитьНазваниеПредмета',
				},
				{
					text:'Разделитель',
				},
				{
					text:'УстановитьУбратьСкрытостьПредмета',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:765px;top:439px;width:44px;height:24px;',
			items:
			[
				{
					text:'СнятьОтборПоГруппе',
				},
				{
					text:'УстановитьРассмотрено',
				},
				{
					text:'ПереместитьВниз',
				},
				{
					text:'ПрименитьКПисьмамПапкиФильтры',
				},
				{
					text:'Действие',
				},
				{
					text:'ПереместитьВверх',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:231px;top:197px;width:578px;height:49px;',
			height: 49,width: 578,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеОтправитель',
			style: 'position:absolute;left:64px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеТема',
			style: 'position:absolute;left:64px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеКому',
			style: 'position:absolute;left:336px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеКопии',
			style: 'position:absolute;left:336px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВложения',
			text: '',
			style: 'position:absolute;left:556px;top:0px;width:22px;height:43px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:220px;height:433px;',
			height: 433,width: 220,
			items:
			[
				{
					title:'СписокПредметов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:220px;height:210px;',
			height: 210,width: 220,
			columns:
			[
				{
					text:'Наименование',
				},
				{
					text:'Владелец',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:216px;width:220px;height:217px;',
			height: 217,width: 220,
			columns:
			[
				{
					text:'Предмет',
				},
			]
		},
					]
				},
				{
					title:'ДеревоГрупп',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:220px;height:433px;',
			height: 433,width: 220,
			columns:
			[
				{
					text:'Наименование',
				},
				{
					text:'Владелец',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:705px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Неделя',
				},
				{
					text:'Список',
				},
				{
					text:'Месяц',
				},
				{
					text:'День',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:705px;top:0px;width:132px;height:25px;',
			items:
			[
				{
					text:'Настройка',
				},
				{
					text:'Справка',
				},
				{
					text:'Обновить',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:755px;height:25px;',
			items:
			[
				{
					text:'Изменить',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'Действие11',
				},
				{
					text:'УстановитьПометкуУдаления',
				},
				{
					text:'ВвестиСобытие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ПрименитьКПисьмамФильтры',
				},
				{
					text:'Обновить',
				},
				{
					text:'Отправить',
				},
				{
					text:'Действие7',
				},
				{
					text:'АдреснаяКнига',
				},
				{
					text:'ПодменюПолучитьОтправить',
				},
				{
					text:'ПоискПисемПоОбъектам',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'АвтополучениеПисем',
				},
				{
					text:'ОтветитьВсем',
				},
				{
					text:'НовоеПисьмо',
				},
				{
					text:'Действие4',
				},
				{
					text:'Получить',
				},
				{
					text:'УстановитьНеРассмотрено',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Отправить',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				{
					text:'Получить',
				},
				{
					text:'Переслать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ЗагрузкаПочтовыхсообщений',
				},
				{
					text:'ПодменюПолучитьОтправить',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Разделитель',
				},
				{
					text:'УстановитьРассмотрено',
				},
				{
					text:'АдреснаяКнига',
				},
				{
					text:'УчетныеЗаписи',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОтветитьВсем',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'РассмотренностиПоТекущемуПользователю',
				},
				{
					text:'Действие1',
				},
				{
					text:'УчетныеЗаписи',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Переслать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЭкспортИмпортКонтактнойИнформации',
				},
				{
					text:'АдреснаяКнига',
				},
				{
					text:'Действие6',
				},
				{
					text:'ОбновитьСписокДоступныхУчетныхЗаписей',
				},
				{
					text:'ПредметыПисем',
				},
				{
					text:'Действие10',
				},
				{
					text:'Разделитель12',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие1',
				},
				{
					text:'НовоеПисьмо',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие',
				},
				{
					text:'Ответить',
				},
				{
					text:'НовоеПисьмоВТекущейГруппе',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'УстановитьСнятьПометкуУдаления',
				},
				{
					text:'Письмо',
				},
				{
					text:'Действие7',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Действие5',
				},
				{
					text:'Подменю',
				},
				{
					text:'Ответить',
				},
				{
					text:'Подменю',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:755px;top:0px;width:82px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Обновить',
				},
			]
		},
	]
});