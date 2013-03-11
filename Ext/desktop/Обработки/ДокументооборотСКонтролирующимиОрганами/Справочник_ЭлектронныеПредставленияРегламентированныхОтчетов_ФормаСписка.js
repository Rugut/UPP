Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЭлектронныеПредставленияРегламентированныхОтчетов_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 443,width: 848,
	iconCls: 'bogus',
	title: 'Справочник Электронные представления регламентированных отчетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:111px;width:832px;height:192px;',
			height: 192,width: 832,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'ВидОтчета',
				},
				{
					text:'Период',
				},
				{
					text:'Организация',
				},
				{
					text:'ТипПолучателя',
				},
				{
					text:'Получатель',
				},
				{
					text:'Версия',
				},
				{
					text:'Комментарий',
				},
				{
					text:'ДатаИмпорта',
				},
				{
					text:'Периодичность',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:848px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЖурналОбмена',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие9',
				},
				{
					text:'ДополнительныйОтбор',
				},
				{
					text:'ОтображатьСписокЦикловОбмена',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Загрузить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:56px;width:832px;height:25px;',
			height: 25,width: 832,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:236px;top:1px;width:596px;height:21px;',
			height: 21,width: 596,
			items:
			[
				{
					title:'ПоВидуОтчета',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОтчета',
			style: 'position:absolute;left:0px;top:1px;width:596px;height:19px;',
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
			style: 'position:absolute;left:310px;top:1px;width:41px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДополнительногоОтбора',
			style: 'position:absolute;left:82px;top:2px;width:147px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:832px;height:30px;',
			height: 30,width: 832,
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
			style: 'position:absolute;left:174px;top:4px;width:55px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:832px;height:20px;',
			height: 20,width: 832,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Получатель',
			style: 'position:absolute;left:732px;top:1px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:82px;top:1px;width:488px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипПолучателя',
			style: 'position:absolute;left:646px;top:1px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:309px;width:832px;height:126px;',
			height: 126,width: 832,
			items:
			[
				{
					title:'СтраницаФНС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:832px;height:126px;',
			height: 126,width: 832,
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
			style: 'position:absolute;left:0px;top:0px;width:832px;height:126px;',
			height: 126,width: 832,
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
			style: 'position:absolute;left:0px;top:0px;width:832px;height:126px;',
			height: 126,width: 832,
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
					text:'ПодтверждениеДоставки',
				},
				{
					text:'ПротоколПроверки',
				},
				{
					text:'ПодтверждениеНаПротоколПроверки',
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
			style: 'position:absolute;left:0px;top:0px;width:832px;height:126px;',
			height: 126,width: 832,
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
					title:'СтраницаФСГС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:832px;height:126px;',
			height: 126,width: 832,
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
					text:'ПротоколПроверки',
				},
				{
					text:'ПодтверждениеНаПротоколПроверки',
				},
			]
		},
					]
				},
			]
		},
	]
});