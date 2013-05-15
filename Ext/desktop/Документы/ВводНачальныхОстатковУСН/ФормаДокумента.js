Ext.define('Документы.ВводНачальныхОстатковУСН.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:681px;height:453px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод начальных остатков УСН',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:84px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:169px;top:33px;width:15px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:189px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:57px;width:225px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:86px;width:665px;height:286px;',
			height: 286,width: 665,
			items:
			[
				{
					title:'Взаиморасчеты',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:651px;height:254px;',
			height: 254,width: 651,
			items:
			[
				{
					title:'С поставщиками',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид задолженности',
					width:'100',
					dataIndex:'ВидЗадолженности',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'128',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'132',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'100',
					dataIndex:'Сделка',
					flex:1,
				},
				{
					text:'Документ расчетов',
					width:'183',
					dataIndex:'РасчетныйДокумент',
					flex:1,
				},
				{
					text:'Сумма взаиморасчетов',
					width:'90',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидЗадолженности',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'Сделка',
					},
					{
						name:'РасчетныйДокумент',
					},
					{
						name:'СуммаВзаиморасчетов',
					},
				]
			},
		},
					]
				},
				{
					title:'С покупателями',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид задолженности',
					width:'100',
					dataIndex:'ВидЗадолженности',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'119',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'119',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'100',
					dataIndex:'Сделка',
					flex:1,
				},
				{
					text:'Документ расчетов',
					width:'193',
					dataIndex:'РасчетныйДокумент',
					flex:1,
				},
				{
					text:'Сумма взаиморасчетов',
					width:'97',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
				{
					text:'в т.ч. ЕНВД',
					width:'97',
					dataIndex:'ДоходЕНВД',
					flex:1,
				},
				{
					text:'в т.ч. доход комитента',
					width:'97',
					dataIndex:'ДоходКомитента',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидЗадолженности',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'Сделка',
					},
					{
						name:'РасчетныйДокумент',
					},
					{
						name:'СуммаВзаиморасчетов',
					},
					{
						name:'ДоходЕНВД',
					},
					{
						name:'ДоходКомитента',
					},
				]
			},
		},
					]
				},
				{
					title:'С подотчетниками',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид задолженности',
					width:'100',
					dataIndex:'ВидЗадолженности',
					flex:1,
				},
				{
					text:'Работник',
					width:'182',
					dataIndex:'Подотчетник',
					flex:1,
				},
				{
					text:'Документ расчетов',
					width:'218',
					dataIndex:'РасчетныйДокумент',
					flex:1,
				},
				{
					text:'Сумма взаиморасчетов',
					width:'111',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидЗадолженности',
					},
					{
						name:'Подотчетник',
					},
					{
						name:'РасчетныйДокумент',
					},
					{
						name:'СуммаВзаиморасчетов',
					},
				]
			},
		},
					]
				},
				{
					title:'С сотрудниками',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид задолженности',
					width:'100',
					dataIndex:'ВидЗадолженности',
					flex:1,
				},
				{
					text:'Работник',
					width:'357',
					dataIndex:'Работник',
					flex:1,
				},
				{
					text:'Сумма взаиморасчетов',
					width:'131',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидЗадолженности',
					},
					{
						name:'Работник',
					},
					{
						name:'СуммаВзаиморасчетов',
					},
				]
			},
		},
					]
				},
				{
					title:'По налогам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид задолженности',
					width:'109',
					dataIndex:'ВидЗадолженности',
					flex:1,
				},
				{
					text:'Счет расчетов по налогу',
					width:'123',
					dataIndex:'СчетРасчетовПоНалогу',
					flex:1,
				},
				{
					text:'Сумма взаиморасчетов',
					width:'139',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидЗадолженности',
					},
					{
						name:'СчетРасчетовПоНалогу',
					},
					{
						name:'СуммаВзаиморасчетов',
					},
				]
			},
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Партии товаров на складах',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:651px;height:228px;',
			height: 228,width: 651,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'165',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'100',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия номенклатуры',
					width:'100',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Счет учета',
					width:'67',
					dataIndex:'СчетУчета',
					flex:1,
				},
				{
					text:'Склад',
					width:'115',
					dataIndex:'Склад',
					flex:1,
				},
				{
					text:'Партия',
					width:'190',
					dataIndex:'ДокументОприходования',
					flex:1,
				},
				{
					text:'Количество',
					width:'75',
					dataIndex:'Количество',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СерияНоменклатуры',
					},
					{
						name:'СчетУчета',
					},
					{
						name:'Склад',
					},
					{
						name:'ДокументОприходования',
					},
					{
						name:'Количество',
					},
				]
			},
		},
					]
				},
				{
					title:'Партии товаров переданные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:651px;height:228px;',
			height: 228,width: 651,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'143',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'100',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Счет учета',
					width:'74',
					dataIndex:'СчетУчета',
					flex:1,
				},
				{
					text:'Партия',
					width:'117',
					dataIndex:'ДокументОприходования',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'59',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'114',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Документ передачи',
					width:'120',
					dataIndex:'ДокументПередачи',
					flex:1,
				},
				{
					text:'Количество',
					width:'80',
					dataIndex:'Количество',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СчетУчета',
					},
					{
						name:'ДокументОприходования',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'ДокументПередачи',
					},
					{
						name:'Количество',
					},
				]
			},
		},
					]
				},
				{
					title:'Расходы УСН',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:651px;height:254px;',
			height: 254,width: 651,
			items:
			[
				{
					title:'Номенклатура',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Партия',
					width:'100',
					dataIndex:'ДокументОприходования',
					flex:1,
				},
				{
					text:'Счет учета',
					width:'100',
					dataIndex:'СчетУчета',
					flex:1,
				},
				{
					text:'Статус партии',
					width:'100',
					dataIndex:'СтатусыПартийУСН',
					flex:1,
				},
				{
					text:'Поставщик',
					width:'100',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор поставщика',
					width:'100',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Документ расчетов',
					width:'199',
					dataIndex:'РасчетныйДокумент',
					flex:1,
				},
				{
					text:'Состояние расхода',
					width:'156',
					dataIndex:'СтатусыОплатыРасходовУСН',
					flex:1,
				},
				{
					text:'Отражение в УСН',
					width:'99',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
				{
					text:'Валюта',
					width:'105',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Количество',
					width:'105',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Сумма',
					width:'96',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'НДС',
					width:'96',
					dataIndex:'НДС',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ДокументОприходования',
					},
					{
						name:'СчетУчета',
					},
					{
						name:'СтатусыПартийУСН',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'РасчетныйДокумент',
					},
					{
						name:'СтатусыОплатыРасходовУСН',
					},
					{
						name:'ОтражениеВУСН',
					},
					{
						name:'Валюта',
					},
					{
						name:'Количество',
					},
					{
						name:'Сумма',
					},
					{
						name:'НДС',
					},
				]
			},
		},
					]
				},
				{
					title:'Нематериальные активы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'НМА',
					width:'100',
					dataIndex:'НМА',
					flex:1,
				},
				{
					text:'Поставщик',
					width:'100',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор поставщика',
					width:'100',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Документ расчетов',
					width:'122',
					dataIndex:'РасчетныйДокумент',
					flex:1,
				},
				{
					text:'Отражение в УСН',
					width:'103',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
				{
					text:'Валюта',
					width:'75',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'НДС',
					width:'100',
					dataIndex:'НДС',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'НМА',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'РасчетныйДокумент',
					},
					{
						name:'ОтражениеВУСН',
					},
					{
						name:'Валюта',
					},
					{
						name:'Сумма',
					},
					{
						name:'НДС',
					},
				]
			},
		},
					]
				},
				{
					title:'Услуги',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Поставщик',
					width:'100',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор поставщика',
					width:'100',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Документ расчетов',
					width:'100',
					dataIndex:'РасчетныйДокумент',
					flex:1,
				},
				{
					text:'Отражение в УСН',
					width:'100',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
				{
					text:'Валюта',
					width:'100',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'НДС',
					width:'100',
					dataIndex:'НДС',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'РасчетныйДокумент',
					},
					{
						name:'ОтражениеВУСН',
					},
					{
						name:'Валюта',
					},
					{
						name:'Сумма',
					},
					{
						name:'НДС',
					},
				]
			},
		},
					]
				},
				{
					title:'РБП',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'РБП',
					width:'100',
					dataIndex:'РБП',
					flex:1,
				},
				{
					text:'Поставщик',
					width:'100',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор поставщика',
					width:'100',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Документ расчетов',
					width:'147',
					dataIndex:'РасчетныйДокумент',
					flex:1,
				},
				{
					text:'Состояние расхода',
					width:'147',
					dataIndex:'СтатусыОплатыРасходовУСН',
					flex:1,
				},
				{
					text:'Отражение в УСН',
					width:'102',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
				{
					text:'Валюта',
					width:'91',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Сумма',
					width:'98',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'НДС',
					width:'92',
					dataIndex:'НДС',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'РБП',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'РасчетныйДокумент',
					},
					{
						name:'СтатусыОплатыРасходовУСН',
					},
					{
						name:'ОтражениеВУСН',
					},
					{
						name:'Валюта',
					},
					{
						name:'Сумма',
					},
					{
						name:'НДС',
					},
				]
			},
		},
					]
				},
				{
					title:'Расходы на оплату труда',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Работник',
					width:'287',
					dataIndex:'Работник',
					flex:1,
				},
				{
					text:'Отражение в УСН',
					width:'106',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
				{
					text:'Сумма',
					width:'113',
					dataIndex:'Сумма',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Работник',
					},
					{
						name:'ОтражениеВУСН',
					},
					{
						name:'Сумма',
					},
				]
			},
		},
					]
				},
				{
					title:'Налоги и взносы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Счет расчетов по налогу',
					width:'100',
					dataIndex:'СчетРасчетовПоНалогу',
					flex:1,
				},
				{
					text:'Отражение в УСН',
					width:'100',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'СчетРасчетовПоНалогу',
					},
					{
						name:'ОтражениеВУСН',
					},
					{
						name:'Сумма',
					},
				]
			},
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Корректировка сведений',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:651px;height:254px;',
			height: 254,width: 651,
			items:
			[
				{
					title:'Основные средства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Основное средство',
					width:'120',
					dataIndex:'ОсновноеСредство',
					flex:1,
				},
				{
					text:'Дата приобретения',
					width:'80',
					dataIndex:'ДатаПриобретения',
					flex:1,
				},
				{
					text:'Первоначальная стоимость',
					width:'80',
					dataIndex:'ПервоначальнаяСтоимостьУСН',
					flex:1,
				},
				{
					text:'Сумма начисленной амортизации (при общем режиме)',
					width:'80',
					dataIndex:'СуммаНачисленнойАмортизации',
					flex:1,
				},
				{
					text:'Срок полезного использования, мес.',
					width:'80',
					dataIndex:'СрокПолезногоИспользования',
					flex:1,
				},
				{
					text:'Порядок включения стоимости в состав расходов (УСН)',
					width:'120',
					dataIndex:'ПорядокВключенияСтоимостиВСоставРасходовУСН',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ОсновноеСредство',
					},
					{
						name:'ДатаПриобретения',
					},
					{
						name:'ПервоначальнаяСтоимостьУСН',
					},
					{
						name:'СуммаНачисленнойАмортизации',
					},
					{
						name:'СрокПолезногоИспользования',
					},
					{
						name:'ПорядокВключенияСтоимостиВСоставРасходовУСН',
					},
				]
			},
		},
					]
				},
				{
					title:'Нематериальные активы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Нематериальный актив',
					width:'120',
					dataIndex:'НематериальныйАктив',
					flex:1,
				},
				{
					text:'Дата приобретения',
					width:'80',
					dataIndex:'ДатаПриобретения',
					flex:1,
				},
				{
					text:'Первоначальная стоимость',
					width:'80',
					dataIndex:'ПервоначальнаяСтоимостьУСН',
					flex:1,
				},
				{
					text:'Сумма начисленной амортизации (при общем режиме)',
					width:'80',
					dataIndex:'СуммаНачисленнойАмортизации',
					flex:1,
				},
				{
					text:'Срок полезного использования, мес.',
					width:'80',
					dataIndex:'СрокПолезногоИспользования',
					flex:1,
				},
				{
					text:'Порядок включения стоимости в состав расходов (УСН)',
					width:'120',
					dataIndex:'ПорядокВключенияСтоимостиВСоставРасходовУСН',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'НематериальныйАктив',
					},
					{
						name:'ДатаПриобретения',
					},
					{
						name:'ПервоначальнаяСтоимостьУСН',
					},
					{
						name:'СуммаНачисленнойАмортизации',
					},
					{
						name:'СрокПолезногоИспользования',
					},
					{
						name:'ПорядокВключенияСтоимостиВСоставРасходовУСН',
					},
				]
			},
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
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:401px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:401px;width:579px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Подсказка',
			text: '',
			style: 'position:absolute;left:324px;top:33px;width:349px;height:43px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:377px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:377px;width:579px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:681px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:428px;width:681px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});