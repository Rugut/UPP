Ext.define('Обработки.ТОНастройка.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:866px;height:519px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подключение и настройка торгового оборудования',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:494px;width:866px;height:25px;',
			items:
			[
				{
					text:'Проверить все подключенное оборудование',
				},
				'-',
				{
					text:'Закрыть',
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
					title:'Сканеры штрихкода',
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
					text:'Удалить',
				},
				{
					text:'Изменить',
				},
				'-',
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
					text:'',
					width:'21',
				},
				{
					text:'Модель',
					width:'571',
				},
			]
		},
					]
				},
				{
					title:'Фискальные регистраторы',
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
					text:'Удалить',
				},
				{
					text:'Изменить',
				},
				'-',
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
					text:'',
					width:'21',
				},
				{
					text:'Модель',
					width:'346',
				},
				{
					text:'Касса ККМ',
					width:'225',
				},
			]
		},
					]
				},
				{
					title:'Терминалы сбора данных',
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
					text:'Удалить',
				},
				{
					text:'Изменить',
				},
				'-',
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
					text:'',
					width:'21',
				},
				{
					text:'Модель',
					width:'571',
				},
			]
		},
					]
				},
				{
					title:'Дисплеи покупателя',
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
					text:'Удалить',
				},
				{
					text:'Изменить',
				},
				'-',
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
					text:'',
					width:'21',
				},
				{
					text:'Модель',
					width:'346',
				},
				{
					text:'Касса ККМ',
					width:'225',
				},
			]
		},
					]
				},
				{
					title:'Считыватели магнитных карт',
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
					text:'Удалить',
				},
				{
					text:'Изменить',
				},
				'-',
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
					text:'',
					width:'21',
				},
				{
					text:'Модель',
					width:'571',
				},
			]
		},
					]
				},
				{
					title:'Электронные весы',
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
					text:'Удалить',
				},
				{
					text:'Изменить',
				},
				'-',
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
					text:'',
					width:'21',
				},
				{
					text:'Модель',
					width:'571',
				},
			]
		},
					]
				},
				{
					title:'Весы с печатью этикеток',
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
					text:'Удалить',
				},
				{
					text:'Изменить',
				},
				'-',
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
					text:'',
					width:'21',
				},
				{
					text:'Модель',
					width:'571',
				},
			]
		},
					]
				},
				{
					title:'ККМ в режиме Offline',
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
					text:'Удалить',
				},
				{
					text:'Изменить',
				},
				'-',
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
					text:'',
					width:'21',
				},
				{
					text:'Модель',
					width:'346',
				},
				{
					text:'Касса ККМ',
					width:'225',
				},
			]
		},
					]
				},
				{
					title:'ККМ в режиме Online',
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
					text:'Удалить',
				},
				{
					text:'Изменить',
				},
				'-',
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
					text:'',
					width:'21',
				},
				{
					text:'Модель',
					width:'346',
				},
				{
					text:'Касса ККМ',
					width:'225',
				},
			]
		},
					]
				},
				{
					title:'Эквайринговые системы',
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
					text:'Удалить',
				},
				{
					text:'Изменить',
				},
				'-',
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
					text:'',
					width:'21',
				},
				{
					text:'Модель',
					width:'571',
				},
			]
		},
					]
				},
				{
					title:'Считыватели RFID меток',
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
					text:'Удалить',
				},
				{
					text:'Изменить',
				},
				'-',
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
					text:'',
					width:'21',
				},
				{
					text:'Модель',
					width:'571',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодключениеИНастройкаТорговогоОборудования',
			text: 'Подключение и настройка торгового оборудования',
			style: 'position:absolute;left:8px;top:6px;width:850px;height:26px;',
		},
		{
			xtype: 'label',
			name: 'ДляКомпьютера',
			text: 'для компьютера ""',
			style: 'position:absolute;left:8px;top:32px;width:850px;height:19px;',
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