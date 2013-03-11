Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.УправлениеОтчетностью',
	{
	extend: 'Ext.window.Window',
	height: 443,width: 780,
	iconCls: 'bogus',
	title: 'Регламентированная и финансовая отчетность',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:32px;width:219px;height:403px;',
			height: 403,width: 219,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:1px;width:219px;height:318px;',
			height: 318,width: 219,
			items:
			[
				{
					title:'СтраницаВидыОтчетов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:44px;width:219px;height:268px;',
			height: 268,width: 219,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'Наименование',
				},
				{
					text:'ПометкаУдаления',
				},
				{
					text:'ЭтоГруппа',
				},
				{
					text:'Ссылка',
				},
				{
					text:'ИсточникОтчета',
				},
				{
					text:'Описание',
				},
				{
					text:'Внешний',
				},
				{
					text:'Периоды',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:18px;width:219px;height:24px;',
			items:
			[
				{
					text:'СвернутьВсе',
				},
				{
					text:'ПометитьВсе',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПодробнееОбОтчете',
				},
				{
					text:'РазвернутьВсе',
				},
				{
					text:'Обновить',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Добавить',
				},
				{
					text:'СнятьПометкиУВсех',
				},
				{
					text:'ИерархическийПросмотр',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель4',
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
			style: 'position:absolute;left:232px;top:32px;width:540px;height:404px;',
			height: 404,width: 540,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:2px;top:313px;width:538px;height:90px;',
			height: 90,width: 538,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:5px;width:328px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИФНС',
			style: 'position:absolute;left:479px;top:5px;width:56px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:84px;top:27px;width:454px;height:62px;',
			height: 62,width: 454,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:452px;height:60px;',
			height: 60,width: 452,
			items:
			[
				{
					title:'ПроизвольныйПериод',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:304px;top:23px;width:20px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаПериодаОтчета',
			style: 'position:absolute;left:123px;top:23px;width:76px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонцаПериодаОтчета',
			style: 'position:absolute;left:223px;top:23px;width:76px;height:20px;',
		},
					]
				},
				{
					title:'СтандартныйПериод',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Год',
			style: 'position:absolute;left:29px;top:4px;width:60px;height:20px;',
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
			style: 'position:absolute;left:0px;top:0px;width:540px;height:313px;',
			height: 313,width: 540,
			items:
			[
				{
					title:'ЖурналОтчетов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:5px;top:26px;width:526px;height:129px;',
			height: 129,width: 526,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'Статус',
				},
				{
					text:'Картинка',
				},
				{
					text:'НаименованиеОтчета',
				},
				{
					text:'Период',
				},
				{
					text:'Организация',
				},
				{
					text:'КодИМНС',
				},
				{
					text:'Вид',
				},
				{
					text:'Комментарий',
				},
				{
					text:'Дата',
				},
				{
					text:'ДатаНачала',
				},
				{
					text:'ДатаОкончания',
				},
				{
					text:'Периодичность',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:5px;top:1px;width:526px;height:24px;',
			items:
			[
				{
					text:'ПечататьСразу',
				},
				{
					text:'НеПринят',
				},
				{
					text:'Отправлен',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ПодготовитьИПодписать',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ПоказатьБланк',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Статусы',
				},
				{
					text:'Действие9',
				},
				{
					text:'Доставлен',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ВсеСтатусы',
				},
				{
					text:'Отправить',
				},
				{
					text:'РазделительПодменюОтправка',
				},
				{
					text:'Проверить',
				},
				{
					text:'ПодменюОтправка',
				},
				{
					text:'ГрупповойРежим',
				},
				{
					text:'ОтображатьСписокЦикловОбмена',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Печать',
				},
				{
					text:'ИсторияВыгрузки',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ВРаботе',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Выгрузка',
				},
				{
					text:'Добавить',
				},
				{
					text:'Подготовлен',
				},
				{
					text:'Подготовить',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ВКонверте',
				},
				{
					text:'Сдан',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:5px;top:161px;width:526px;height:126px;',
			height: 126,width: 526,
			items:
			[
				{
					title:'СтраницаФНС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:526px;height:102px;',
			height: 102,width: 526,
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
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:526px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПоказатьОтчетОСостоянии',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ВыгрузитьСодержимое',
				},
				{
					text:'ВывестиВОкно',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'ВыгрузитьКонтейнеры',
				},
				{
					text:'Обменяться',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ОсновныеДействияФормыСформировать',
				},
			]
		},
					]
				},
				{
					title:'СтраницаПФР',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:526px;height:102px;',
			height: 102,width: 526,
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
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:526px;height:24px;',
			items:
			[
				{
					text:'Обменяться',
				},
				{
					text:'Разделитель2',
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
					text:'ОсновныеДействияФормыСформировать',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'ПоказатьОтчетОСостоянии',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ВыгрузитьКонтейнеры',
				},
				{
					text:'ВыгрузитьСодержимое',
				},
			]
		},
					]
				},
				{
					title:'СтраницаФСС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:526px;height:126px;',
			height: 126,width: 526,
			columns:
			[
				{
					text:'ДатаОтправки',
				},
				{
					text:'ДатаПолученияРезультата',
				},
				{
					text:'ПервичноеСообщение',
				},
				{
					text:'Результат',
				},
				{
					text:'ИдентификаторОтправкиНаСервере',
				},
			]
		},
					]
				},
				{
					title:'СтраницаЗаявление',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:526px;height:102px;',
			height: 102,width: 526,
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
					text:'Возврат',
				},
				{
					text:'ПодтверждениеВозврата',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:526px;height:24px;',
			items:
			[
				{
					text:'ПоказатьОтчетОСостоянии',
				},
				{
					text:'ВывестиВОкно',
				},
				{
					text:'ОсновныеДействияФормыСформировать',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Обменяться',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ВыгрузитьКонтейнеры',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ВыгрузитьСодержимое',
				},
			]
		},
					]
				},
				{
					title:'СтраницаФСГС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:526px;height:102px;',
			height: 102,width: 526,
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
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:526px;height:24px;',
			items:
			[
				{
					text:'ПоказатьОтчетОСостоянии',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ОсновныеДействияФормыСформировать',
				},
				{
					text:'ВыгрузитьКонтейнеры',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Обменяться',
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
					text:'Разделитель',
				},
				{
					text:'Выгрузить',
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
					title:'ЖурналВыгрузки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:5px;top:26px;width:526px;height:261px;',
			height: 261,width: 526,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Номер',
				},
				{
					text:'Дата',
				},
				{
					text:'Период',
				},
				{
					text:'Организация',
				},
				{
					text:'КодИМНС',
				},
				{
					text:'Комментарий',
				},
				{
					text:'ПериодПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:5px;top:1px;width:231px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Обновить',
				},
				{
					text:'Сохранить',
				},
				{
					text:'Разделитель1',
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
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаОткрытьДокументОтбор',
			text: '',
			style: 'position:absolute;left:512px;top:4px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОчиститьДокументОтбор',
			text: 'Х',
			style: 'position:absolute;left:490px;top:4px;width:19px;height:19px;',
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
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'ЗаявленияНаПодключение',
				},
				{
					text:'Выбрать',
				},
				{
					text:'ЭлектронныеПредставленияОтчетов',
				},
				{
					text:'Календарь',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ЖурналОбмена',
				},
				{
					text:'Справка',
				},
				{
					text:'УчетныеЗаписиДокументооборота',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'РазделительКалендарь',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ОткрытьСправочник',
				},
				{
					text:'ДоступныеОбновления',
				},
				{
					text:'Перейти',
				},
				{
					text:'Настройки',
				},
				{
					text:'ЗапросыНаИнформационноеОбслуживание',
				},
				{
					text:'РазделительДоступныеОбновления',
				},
				{
					text:'ИнформацияДляПользователей',
				},
			]
		},
	]
});