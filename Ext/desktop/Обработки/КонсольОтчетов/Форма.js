Ext.define('Обработки.КонсольОтчетов.Форма',
	{
	extend: 'Ext.window.Window',
	height: 484,width: 713,
	iconCls: 'bogus',
	title: 'Консоль отчетов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:713px;height:24px;',
			items:
			[
				{
					text:'Сохранить',
				},
				{
					text:'ВывестиВСводнуюДиаграмму',
				},
				{
					text:'ВывестиВТаблицу',
				},
				{
					text:'ОткрытьФайл',
				},
				{
					text:'Файл',
				},
				{
					text:'НовыйФайл',
				},
				{
					text:'ОтображатьНастройки',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'СохранитьКак',
				},
				{
					text:'Вперед',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Копия',
				},
				{
					text:'Справка',
				},
				{
					text:'ВывестиВДиаграмму',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ВывестиВСводнуюТаблицу',
				},
				{
					text:'ЗагрузитьНастройкиОтчета',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Назад',
				},
				{
					text:'СохранитьНастройкиОтчета',
				},
				{
					text:'Отчет',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:160px;width:701px;height:320px;',
			height: 320,width: 701,
			items:
			[
				{
					title:'Таблица',
				},
				{
					title:'Диаграмма',
					items:
					[
					]
				},
				{
					title:'СводнаяТаблица',
				},
				{
					title:'СводнаяДиаграмма',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:25px;width:713px;height:130px;',
			height: 130,width: 713,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:17px;top:26px;width:146px;height:26px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие6',
				},
				{
					text:'ВыполнитьЗапрос',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'МенюСпискаЗапросов',
				},
				{
					text:'Действие4',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:7px;width:179px;height:122px;',
			height: 122,width: 179,
			columns:
			[
				{
					text:'Отчет',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:190px;top:6px;width:517px;height:123px;',
			height: 123,width: 517,
			items:
			[
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:487px;height:97px;',
			height: 97,width: 487,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:491px;top:6px;width:24px;height:97px;',
			items:
			[
				{
					text:'ВключитьВсе1',
				},
				{
					text:'ВключитьВсе',
				},
				{
					text:'Добавить',
				},
				{
					text:'Удалить',
				},
			]
		},
					]
				},
				{
					title:'Группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:236px;height:97px;',
			height: 97,width: 236,
			columns:
			[
				{
					text:'Поле',
				},
				{
					text:'Тип',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:265px;top:6px;width:222px;height:97px;',
			height: 97,width: 222,
			columns:
			[
				{
					text:'Поле',
				},
				{
					text:'Тип',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:239px;top:12px;width:32px;height:24px;',
			items:
			[
				{
					text:'ПеренестиВКолонки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:239px;top:44px;width:32px;height:24px;',
			items:
			[
				{
					text:'ПеренестиВСтроки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:491px;top:6px;width:24px;height:97px;',
			items:
			[
				{
					text:'Добавить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Действие2',
				},
				{
					text:'ГруппировкиПоУмолчанию',
				},
				{
					text:'Действие3',
				},
			]
		},
					]
				},
				{
					title:'Порядок',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:236px;height:97px;',
			height: 97,width: 236,
			columns:
			[
				{
					text:'Поле',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:265px;top:6px;width:222px;height:97px;',
			height: 97,width: 222,
			columns:
			[
				{
					text:'Имя',
				},
				{
					text:'НаправлениеСортировки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:239px;top:12px;width:32px;height:24px;',
			items:
			[
				{
					text:'ДобавитьВПорядок',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:239px;top:44px;width:32px;height:24px;',
			items:
			[
				{
					text:'Удалить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:491px;top:6px;width:24px;height:97px;',
			items:
			[
				{
					text:'Удалить',
				},
				{
					text:'Действие3',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие2',
				},
				{
					text:'ПоУмолчанию',
				},
			]
		},
					]
				},
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:6px;width:236px;height:97px;',
			height: 97,width: 236,
			columns:
			[
				{
					text:'Поле',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:265px;top:6px;width:222px;height:97px;',
			height: 97,width: 222,
			columns:
			[
				{
					text:'Поле',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:239px;top:12px;width:32px;height:24px;',
			items:
			[
				{
					text:'ДобавитьВПорядок',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:239px;top:44px;width:32px;height:24px;',
			items:
			[
				{
					text:'Удалить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:491px;top:6px;width:24px;height:97px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'ПоУмолчанию',
				},
				{
					text:'Удалить',
				},
				{
					text:'Действие3',
				},
			]
		},
					]
				},
				{
					title:'Оформление',
					items:
					[
		{
			xtype: 'button',
			name: 'Макет',
			text: 'Макет',
			style: 'position:absolute;left:397px;top:50px;width:108px;height:19px;',
		},
					]
				},
				{
					title:'НовыйОтчет',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:23px;top:57px;width:144px;height:24px;',
			items:
			[
				{
					text:'Расшифровка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:199px;top:13px;width:34px;height:24px;',
			items:
			[
				{
					text:'ВыполнитьЗапрос1',
				},
			]
		},
					]
				},
			]
		},
	]
});