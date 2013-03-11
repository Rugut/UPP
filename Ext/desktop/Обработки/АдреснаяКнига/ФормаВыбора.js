Ext.define('Обработки.АдреснаяКнига.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 466,
	iconCls: 'bogus',
	title: 'Адресная книга (выбор)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:466px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:9px;width:450px;height:408px;',
			height: 408,width: 450,
			items:
			[
				{
					title:'КонтрагентыКонтактныеЛица',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:143px;',
			height: 143,width: 436,
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
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:230px;width:436px;height:128px;',
			height: 128,width: 436,
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
					text:'Должность',
				},
				{
					text:'РольКонтактногоЛица',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
				{
					text:'КонтрагентыКонтактныеЛица',
				},
				{
					text:'ВыбратьОбъект',
				},
				{
					text:'ФизическиеЛица',
				},
				{
					text:'Подменю3',
				},
				{
					text:'ПрочиеКонтактныеЛица',
				},
				{
					text:'Организации',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:206px;width:436px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'ФизическиеЛица',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:328px;',
			height: 328,width: 436,
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
				{
					text:'ВыбратьОбъект',
				},
				{
					text:'КонтрагентыКонтактныеЛица',
				},
				{
					text:'ФизическиеЛица',
				},
				{
					text:'ПрочиеКонтактныеЛица',
				},
				{
					text:'Подменю',
				},
				{
					text:'Организации',
				},
			]
		},
					]
				},
				{
					title:'ПрочиеКонтактныеЛица',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:328px;',
			height: 328,width: 436,
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
				{
					text:'ФизическиеЛица',
				},
				{
					text:'Организации',
				},
				{
					text:'Подменю',
				},
				{
					text:'ВыбратьОбъект',
				},
				{
					text:'ПрочиеКонтактныеЛица',
				},
				{
					text:'КонтрагентыКонтактныеЛица',
				},
			]
		},
					]
				},
				{
					title:'Организации',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:328px;',
			height: 328,width: 436,
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
				{
					text:'КонтрагентыКонтактныеЛица',
				},
				{
					text:'ПрочиеКонтактныеЛица',
				},
				{
					text:'Организации',
				},
				{
					text:'Подменю',
				},
				{
					text:'ФизическиеЛица',
				},
				{
					text:'ВыбратьОбъект',
				},
			]
		},
					]
				},
				{
					title:'Личные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:328px;',
			height: 328,width: 436,
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Пользователи',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:328px;',
			height: 328,width: 436,
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'ГруппыОбъектов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:435px;height:178px;',
			height: 178,width: 435,
			columns:
			[
				{
					text:'ПометкаУдаления',
				},
				{
					text:'ГруппаРассылки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:435px;height:24px;',
			items:
			[
				{
					text:'Обновить',
				},
				{
					text:'Действие9',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:212px;width:435px;height:146px;',
			height: 146,width: 435,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ОбъектРассылки',
				},
			]
		},
					]
				},
				{
					title:'Поиск',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтрокаПоиска',
			style: 'position:absolute;left:6px;top:30px;width:361px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:78px;width:436px;height:280px;',
			height: 280,width: 436,
			columns:
			[
				{
					text:'Объект',
				},
				{
					text:'ПредставлениеЗначенияПоУмолчанию',
				},
				{
					text:'ТипОбъекта',
				},
				{
					text:'ДоступныеАдреса',
				},
				{
					text:'ЗначениеПоУмолчанию',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:54px;width:436px;height:24px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'АдресЭлектроннойПочтыВНовыйОбъект',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'АдресЭлектроннойПочтыВОбъектТекущейСтроки',
				},
				{
					text:'Добавить',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаНайти',
			text: 'Найти',
			style: 'position:absolute;left:372px;top:30px;width:70px;height:19px;',
		},
					]
				},
			]
		},
	]
});