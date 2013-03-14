Ext.define('Обработки.ЗагрузкаДанныхCommerceML.ФормаСоответствия',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:664px;height:425px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сопоставление объектов из файла и информационной базы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:400px;width:664px;height:25px;',
			items:
			[
				{
					text:'Помощь',
				},
				'-',
				{
					text:'Применить соответствия',
				},
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:67px;width:648px;height:326px;',
			height: 326,width: 648,
			items:
			[
				{
					title:'Валюты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:634px;height:268px;',
			height: 268,width: 634,
			columns:
			[
				{
					text:'',
					width:'35',
				},
				{
					text:'Валюта из файла',
					width:'205',
				},
				{
					text:'Валюта',
					width:'194',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Показать несопоставленные',
				},
				'-',
				{
					text:'Создать по данным из файла',
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
			style: 'position:absolute;left:6px;top:34px;width:634px;height:266px;',
			height: 266,width: 634,
			columns:
			[
				{
					text:'',
					width:'35',
				},
				{
					text:'Организация из файла',
					width:'156',
				},
				{
					text:'ИНН организации из файла',
					width:'132',
				},
				{
					text:'Организация',
					width:'212',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Показать несопоставленные',
				},
				'-',
				{
					text:'Создать по данным из файла',
				},
			]
		},
					]
				},
				{
					title:'Контрагенты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:634px;height:268px;',
			height: 268,width: 634,
			columns:
			[
				{
					text:'',
					width:'35',
				},
				{
					text:'Контрагент из файла',
					width:'156',
				},
				{
					text:'ИНН контрагента из файла',
					width:'127',
				},
				{
					text:'Контрагент',
					width:'189',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Показать несопоставленные',
				},
				'-',
				{
					text:'Создать по данным из файла',
				},
				{
					text:'Создать все',
				},
			]
		},
					]
				},
				{
					title:'Банки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:34px;width:634px;height:266px;',
			height: 266,width: 634,
			columns:
			[
				{
					text:'',
					width:'35',
				},
				{
					text:'Наименование из файла',
					width:'180',
				},
				{
					text:'БИК из файла',
					width:'120',
				},
				{
					text:'Счет корреспондентский',
					width:'140',
				},
				{
					text:'Адрес',
					width:'100',
				},
				{
					text:'Банк',
					width:'180',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Показать несопоставленные',
				},
				'-',
				{
					text:'Создать по данным из файла',
				},
			]
		},
					]
				},
				{
					title:'Банковские счета',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:34px;width:634px;height:266px;',
			height: 266,width: 634,
			columns:
			[
				{
					text:'',
					width:'35',
				},
				{
					text:'Номер счета в файле',
					width:'173',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Банк',
					width:'100',
				},
				{
					text:'Банк не прямых расходов',
					width:'100',
				},
				{
					text:'Счет',
					width:'192',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Показать несопоставленные',
				},
				'-',
				{
					text:'Создать по данным из файла',
				},
			]
		},
					]
				},
				{
					title:'Единицы измерения',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:634px;height:268px;',
			height: 268,width: 634,
			columns:
			[
				{
					text:'',
					width:'35',
				},
				{
					text:'Единица измерения из файла',
					width:'185',
				},
				{
					text:'Единица измерения',
					width:'176',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Показать несопоставленные',
				},
				'-',
				{
					text:'Создать по данным из файла',
				},
				{
					text:'Создать все',
				},
			]
		},
					]
				},
				{
					title:'Виды номенклатуры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:34px;width:634px;height:270px;',
			height: 270,width: 634,
			columns:
			[
				{
					text:'',
					width:'35',
				},
				{
					text:'Вид номенклатуры из файла',
					width:'150',
				},
				{
					text:'Тип номенклатуры из файла',
					width:'150',
				},
				{
					text:'Вид номенклатуры',
					width:'200',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Показать несопоставленные',
				},
				'-',
				{
					text:'Создать по данным из файла',
				},
				{
					text:'Создать все',
				},
			]
		},
					]
				},
				{
					title:'Номенклатура',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Показать несопоставленные',
				},
				'-',
				{
					text:'Создать по данным из файла',
				},
				{
					text:'Создать все',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:634px;height:272px;',
			height: 272,width: 634,
			columns:
			[
				{
					text:'',
					width:'35',
				},
				{
					text:'Номенклатура из файла',
					width:'129',
				},
				{
					text:'Артикул из файла',
					width:'74',
				},
				{
					text:'Штрихкод из файла',
					width:'83',
				},
				{
					text:'Единица из файла',
					width:'51',
				},
				{
					text:'Вид номенклатуры',
					width:'59',
				},
				{
					text:'Ид',
					width:'116',
				},
				{
					text:'Номенклатура',
					width:'304',
				},
				{
					text:'Характеристика номенклатуры',
					width:'304',
				},
				{
					text:'Ид каталога',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Качество',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:634px;height:269px;',
			height: 269,width: 634,
			columns:
			[
				{
					text:'',
					width:'35',
				},
				{
					text:'Качество из файла',
					width:'232',
				},
				{
					text:'Качество',
					width:'236',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Показать несопоставленные',
				},
				'-',
				{
					text:'Создать по данным из файла',
				},
				{
					text:'Создать все',
				},
			]
		},
					]
				},
				{
					title:'Типы цен',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:634px;height:268px;',
			height: 268,width: 634,
			columns:
			[
				{
					text:'',
					width:'35',
				},
				{
					text:'Тип цены из файла',
					width:'150',
				},
				{
					text:'Ид из файла',
					width:'91',
				},
				{
					text:'Валюта цены из файла',
					width:'97',
				},
				{
					text:'НДС в сумме',
					width:'37',
				},
				{
					text:'Контрагент из файла',
					width:'190',
				},
				{
					text:'Тип цены',
					width:'158',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Показать несопоставленные',
				},
				'-',
				{
					text:'Создать по данным из файла',
				},
				{
					text:'Создать все',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:6px;width:648px;height:60px;',
			height: 60,width: 648,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница основная',
					items:
					[
					]
				},
			]
		},
	]
});