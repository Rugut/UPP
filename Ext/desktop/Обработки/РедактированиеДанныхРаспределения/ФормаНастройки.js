Ext.define('Обработки.РедактированиеДанныхРаспределения.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:790px;height:510px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки отображения данных',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:7px;width:749px;height:225px;',
			height: 225,width: 749,
			columns:
			[
				{
					text:'Заголовок',
					width:'100',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:759px;top:7px;width:24px;height:225px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНастройки',
			text: 'Настройки : ',
			style: 'position:absolute;left:8px;top:237px;width:70px;height:24px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:78px;top:237px;width:704px;height:24px;',
			items:
			[
				{
					text:'Текущий отчет',
				},
				{
					text:'Текущий элемент структуры настроек',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:262px;width:774px;height:219px;',
			height: 219,width: 774,
			items:
			[
				{
					title:'Параметры данных',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:735px;height:187px;',
			height: 187,width: 735,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Параметр',
					width:'100',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'Параметр',
					width:'100',
				},
				{
					text:'Значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Дата начала',
					width:'100',
				},
				{
					text:'Дата окончания',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:743px;top:6px;width:24px;height:187px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Поля группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:262px;height:187px;',
			height: 187,width: 262,
			columns:
			[
				{
					text:'Доступные поля',
					width:'100',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:275px;top:6px;width:466px;height:187px;',
			height: 187,width: 466,
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
					text:'Тип группировки',
					width:'100',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип дополнения',
					width:'100',
				},
				{
					text:'Начальная дата периода',
					width:'100',
				},
				{
					text:'Конечная дата периода',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:743px;top:6px;width:24px;height:187px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Выбранные поля',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:262px;height:187px;',
			height: 187,width: 262,
			columns:
			[
				{
					text:'Доступные поля',
					width:'100',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:275px;top:6px;width:466px;height:187px;',
			height: 187,width: 466,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Заголовок',
					width:'100',
				},
				{
					text:'Расположение',
					width:'100',
				},
				{
					text:'Поле',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:743px;top:6px;width:24px;height:187px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:262px;height:187px;',
			height: 187,width: 262,
			columns:
			[
				{
					text:'Доступные поля',
					width:'100',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:275px;top:6px;width:466px;height:187px;',
			height: 187,width: 466,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Режим отображения',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Режим отображения',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Режим отображения',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:743px;top:6px;width:24px;height:187px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Сортировка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:262px;height:187px;',
			height: 187,width: 262,
			columns:
			[
				{
					text:'Доступные поля',
					width:'100',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:275px;top:6px;width:466px;height:187px;',
			height: 187,width: 466,
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
					text:'Направление сортировки',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:743px;top:6px;width:24px;height:187px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Условное оформление',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:735px;height:187px;',
			height: 187,width: 735,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Область',
					width:'100',
				},
				{
					text:'Отбор',
					width:'100',
				},
				{
					text:'Оформление',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Область',
					width:'100',
				},
				{
					text:'Отбор',
					width:'100',
				},
				{
					text:'Оформление',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:743px;top:6px;width:24px;height:187px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Пользовательские поля',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:735px;height:187px;',
			height: 187,width: 735,
			columns:
			[
				{
					text:'Пользовательские поля',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:743px;top:6px;width:24px;height:187px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Другие настройки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:735px;height:187px;',
			height: 187,width: 735,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Параметр',
					width:'100',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'Параметр',
					width:'100',
				},
				{
					text:'Значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Дата начала',
					width:'100',
				},
				{
					text:'Дата окончания',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:743px;top:6px;width:24px;height:187px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:485px;width:790px;height:25px;',
			items:
			[
				{
					text:'Отмена',
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Справка',
				},
				'-',
			]
		},
	]
});