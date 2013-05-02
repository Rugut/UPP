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
					xtype: 'tbfill'
				},
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
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Валюта из файла',
					width:'205',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Валюта',
					width:'194',
					dataIndex:'НовыйВалюта',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Валюта',
					},
					{
						name:'НовыйВалюта',
					},
				]
			},
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
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Организация из файла',
					width:'156',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'ИНН организации из файла',
					width:'132',
					dataIndex:'ИНН',
					flex:1,
				},
				{
					text:'Организация',
					width:'212',
					dataIndex:'НовыйОрганизация',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Организация',
					},
					{
						name:'ИНН',
					},
					{
						name:'НовыйОрганизация',
					},
				]
			},
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
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Контрагент из файла',
					width:'156',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'ИНН контрагента из файла',
					width:'127',
					dataIndex:'ИНН',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'189',
					dataIndex:'НовыйКонтрагент',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ИНН',
					},
					{
						name:'НовыйКонтрагент',
					},
				]
			},
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
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Наименование из файла',
					width:'180',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'БИК из файла',
					width:'120',
					dataIndex:'Банк',
					flex:1,
				},
				{
					text:'Счет корреспондентский',
					width:'140',
					dataIndex:'СчетКорреспондентский',
					flex:1,
				},
				{
					text:'Адрес',
					width:'100',
					dataIndex:'Адрес',
					flex:1,
				},
				{
					text:'Банк',
					width:'180',
					dataIndex:'НовыйБанк',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Наименование',
					},
					{
						name:'Банк',
					},
					{
						name:'СчетКорреспондентский',
					},
					{
						name:'Адрес',
					},
					{
						name:'НовыйБанк',
					},
				]
			},
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
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номер счета в файле',
					width:'173',
					dataIndex:'НомерСчета',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'120',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Банк',
					width:'100',
					dataIndex:'Банк',
					flex:1,
				},
				{
					text:'Банк не прямых расходов',
					width:'100',
					dataIndex:'БанкНеПрямыхРасходов',
					flex:1,
				},
				{
					text:'Счет',
					width:'192',
					dataIndex:'НовыйНомерСчета',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'НомерСчета',
					},
					{
						name:'Контрагент',
					},
					{
						name:'Банк',
					},
					{
						name:'БанкНеПрямыхРасходов',
					},
					{
						name:'НовыйНомерСчета',
					},
				]
			},
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
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Единица измерения из файла',
					width:'185',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Единица измерения',
					width:'176',
					dataIndex:'НовыйЕдиницаИзмерения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'НовыйЕдиницаИзмерения',
					},
				]
			},
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
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид номенклатуры из файла',
					width:'150',
					dataIndex:'ВидНоменклатуры',
					flex:1,
				},
				{
					text:'Тип номенклатуры из файла',
					width:'150',
					dataIndex:'ТипНоменклатуры',
					flex:1,
				},
				{
					text:'Вид номенклатуры',
					width:'200',
					dataIndex:'НовыйВидНоменклатуры',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидНоменклатуры',
					},
					{
						name:'ТипНоменклатуры',
					},
					{
						name:'НовыйВидНоменклатуры',
					},
				]
			},
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
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатура из файла',
					width:'129',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Артикул из файла',
					width:'74',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Штрихкод из файла',
					width:'83',
					dataIndex:'ШтрихКод',
					flex:1,
				},
				{
					text:'Единица из файла',
					width:'51',
					dataIndex:'БазоваяЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Вид номенклатуры',
					width:'59',
					dataIndex:'ВидНоменклатуры',
					flex:1,
				},
				{
					text:'Ид',
					width:'116',
					dataIndex:'Ид',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'304',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'304',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Ид каталога',
					width:'100',
					dataIndex:'ИдКаталога',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Наименование',
					},
					{
						name:'Артикул',
					},
					{
						name:'ШтрихКод',
					},
					{
						name:'БазоваяЕдиницаИзмерения',
					},
					{
						name:'ВидНоменклатуры',
					},
					{
						name:'Ид',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'ИдКаталога',
					},
				]
			},
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
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Качество из файла',
					width:'232',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Качество',
					width:'236',
					dataIndex:'НовыйКачество',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Качество',
					},
					{
						name:'НовыйКачество',
					},
				]
			},
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
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Тип цены из файла',
					width:'150',
					dataIndex:'ТипЦены',
					flex:1,
				},
				{
					text:'Ид из файла',
					width:'91',
					dataIndex:'Ид',
					flex:1,
				},
				{
					text:'Валюта цены из файла',
					width:'97',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'НДС в сумме',
					width:'37',
					dataIndex:'НДСВСумме',
					flex:1,
				},
				{
					text:'Контрагент из файла',
					width:'190',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Тип цены',
					width:'158',
					dataIndex:'НовыйТипЦены',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ТипЦены',
					},
					{
						name:'Ид',
					},
					{
						name:'Валюта',
					},
					{
						name:'НДСВСумме',
					},
					{
						name:'Контрагент',
					},
					{
						name:'НовыйТипЦены',
					},
				]
			},
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