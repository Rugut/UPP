Ext.define('Обработки.ТОНастройка.Форма',
	{
	extend: 'Ext.window.Window',
	height: 519,width: 866,
	iconCls: 'bogus',
	title: 'Подключение и настройка торгового оборудования',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:494px;width:866px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ПроверитьОборудование',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:88px;width:850px;height:398px;',
			height: 398,width: 850,
			items:
			[
				{
					title:'СканерыШтрихкода',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:612px;height:25px;',
			items:
			[
				{
					text:'Добавить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Изменить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Параметры',
				},
				{
					text:'Удалить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'Подключено',
				},
				{
					text:'Модель',
				},
			]
		},
					]
				},
				{
					title:'ФискальныеРегистраторы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:612px;height:25px;',
			items:
			[
				{
					text:'Изменить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Параметры',
				},
				{
					text:'Добавить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Удалить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'Подключено',
				},
				{
					text:'Модель',
				},
				{
					text:'КассаККМ',
				},
			]
		},
					]
				},
				{
					title:'ТерминалыСбораДанных',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:612px;height:25px;',
			items:
			[
				{
					text:'Изменить',
				},
				{
					text:'Параметры',
				},
				{
					text:'Добавить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'Подключено',
				},
				{
					text:'Модель',
				},
			]
		},
					]
				},
				{
					title:'ДисплеиПокупателя',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:612px;height:25px;',
			items:
			[
				{
					text:'Скопировать',
				},
				{
					text:'Параметры',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Добавить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Изменить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'Подключено',
				},
				{
					text:'Модель',
				},
				{
					text:'КассаККМ',
				},
			]
		},
					]
				},
				{
					title:'СчитывателиМагнитныхКарт',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:612px;height:25px;',
			items:
			[
				{
					text:'Параметры',
				},
				{
					text:'Изменить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Добавить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Удалить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'Подключено',
				},
				{
					text:'Модель',
				},
			]
		},
					]
				},
				{
					title:'ЭлектронныеВесы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:612px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Изменить',
				},
				{
					text:'Добавить',
				},
				{
					text:'Параметры',
				},
				{
					text:'Удалить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'Подключено',
				},
				{
					text:'Модель',
				},
			]
		},
					]
				},
				{
					title:'ВесыСПечатьюЭтикеток',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:612px;height:25px;',
			items:
			[
				{
					text:'Добавить',
				},
				{
					text:'Параметры',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'Подключено',
				},
				{
					text:'Модель',
				},
			]
		},
					]
				},
				{
					title:'ККМВРежимеOffline',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:612px;height:25px;',
			items:
			[
				{
					text:'Изменить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Добавить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Удалить',
				},
				{
					text:'Параметры',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'Подключено',
				},
				{
					text:'Модель',
				},
				{
					text:'КассаККМ',
				},
			]
		},
					]
				},
				{
					title:'ККМВРежимеOnline',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:612px;height:25px;',
			items:
			[
				{
					text:'Удалить',
				},
				{
					text:'Добавить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Параметры',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Изменить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'Подключено',
				},
				{
					text:'Модель',
				},
				{
					text:'КассаККМ',
				},
			]
		},
					]
				},
				{
					title:'ЭквайринговыеСистемы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:612px;height:25px;',
			items:
			[
				{
					text:'Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Параметры',
				},
				{
					text:'Удалить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'Подключено',
				},
				{
					text:'Модель',
				},
			]
		},
					]
				},
				{
					title:'СчитывателиRFIDМеток',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:612px;height:25px;',
			items:
			[
				{
					text:'Скопировать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Параметры',
				},
				{
					text:'Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:612px;height:359px;',
			height: 359,width: 612,
			columns:
			[
				{
					text:'Подключено',
				},
				{
					text:'Модель',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'ПомощникПодключения',
			text: 'Помощник подключения',
			style: 'position:absolute;left:8px;top:57px;width:154px;height:25px;',
		},
		{
			xtype: 'button',
			name: 'ОбработкиОбслуживания',
			text: 'Обработки обслуживания',
			style: 'position:absolute;left:167px;top:57px;width:153px;height:25px;',
		},
		{
			xtype: 'button',
			name: 'Справка',
			text: 'Справка',
			style: 'position:absolute;left:778px;top:57px;width:80px;height:25px;',
		},
	]
});