Ext.define('Обработки.КонсольОтчетов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:713px;height:484px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Консоль отчетов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:713px;height:24px;',
			items:
			[
				'-',
				{
					text:'Назад',
				},
				{
					text:'Вперед',
				},
				'-',
				{
					text:'Вывести в таблицу',
				},
				{
					text:'Диаграмма',
				},
				{
					text:'Сводная таблица',
				},
				{
					text:'Сводная диаграмма',
				},
				'-',
				{
					text:'Копия результата',
				},
				'-',
				{
					text:'Настройки',
				},
				{
					text:'Сохранить настройки отчета',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:160px;width:701px;height:320px;',
			height: 320,width: 701,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Таблица',
				},
				{
					title:'Диаграмма',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Вид:',
			style: 'position:absolute;left:4px;top:0px;width:24px;height:20px;text-align:left;',
		},
					]
				},
				{
					title:'Сводная таблица',
				},
				{
					title:'Сводная диаграмма',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Вид:',
			style: 'position:absolute;left:4px;top:0px;width:24px;height:20px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:25px;width:713px;height:130px;',
			height: 130,width: 713,
			tabBar:{hidden:true},
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
					width:'150',
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
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'60',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:491px;top:6px;width:24px;height:97px;',
			items:
			[
				{
					text:'Включить все',
				},
				{
					text:'Выключить все',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Добавить',
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
					text:'Строки',
					width:'100',
				},
				{
					text:'Тип',
					width:'40',
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
					text:'Колонки',
					width:'100',
				},
				{
					text:'Тип',
					width:'40',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Для создания нового отчета необходимо нажать правой клавишей мыши на списке отчетов и выбрать в появившемся меню пункт "Добавить".',
			style: 'position:absolute;left:8px;top:4px;width:499px;height:69px;text-align:center;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:239px;top:12px;width:32px;height:24px;',
			items:
			[
				{
					text:' > ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:239px;top:44px;width:32px;height:24px;',
			items:
			[
				{
					text:' < ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:491px;top:6px;width:24px;height:97px;',
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Добавить',
				},
				{
					text:'По умолчанию',
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
					width:'100',
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
					text:'Порядок',
					width:'100',
				},
				{
					text:'Направление сортировки',
					width:'60',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:239px;top:12px;width:32px;height:24px;',
			items:
			[
				{
					text:' > ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:239px;top:44px;width:32px;height:24px;',
			items:
			[
				{
					text:' < ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:491px;top:6px;width:24px;height:97px;',
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Добавить',
				},
				{
					text:'По умолчанию',
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
					width:'100',
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
					text:'Выбранное поле',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:239px;top:12px;width:32px;height:24px;',
			items:
			[
				{
					text:' > ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:239px;top:44px;width:32px;height:24px;',
			items:
			[
				{
					text:' < ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:491px;top:6px;width:24px;height:97px;',
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Удалить',
				},
				{
					text:'По умолчанию',
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
			xtype: 'label',
			name: 'Надпись1',
			text: 'Размещение группировок',
			style: 'position:absolute;left:7px;top:29px;width:198px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Размещение реквизитов группировок',
			style: 'position:absolute;left:7px;top:50px;width:198px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Вариант оформления',
			style: 'position:absolute;left:7px;top:8px;width:198px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Фиксированный макет',
			style: 'position:absolute;left:397px;top:8px;width:108px;height:28px;',
		},
		{
			xtype: 'button',
			name: 'Макет',
			text: 'Макет',
			style: 'position:absolute;left:397px;top:50px;width:108px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Размещение итогов',
			style: 'position:absolute;left:7px;top:71px;width:107px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:23px;top:57px;width:144px;height:24px;',
			items:
			[
				{
					text:'Расшифровка...',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:199px;top:13px;width:34px;height:24px;',
			items:
			[
				{
					text:'Выполнить отчет',
				},
			]
		},
					]
				},
			]
		},
	]
});