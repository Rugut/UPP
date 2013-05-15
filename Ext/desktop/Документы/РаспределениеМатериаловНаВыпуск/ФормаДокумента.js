Ext.define('Документы.РаспределениеМатериаловНаВыпуск.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:408px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Распределение материалов на выпуск',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:383px;width:652px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
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
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:178px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:424px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:497px;top:33px;width:69px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:105px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказ',
			text: 'Заказ:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Заказ',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:356px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:356px;width:548px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:137px;width:636px;height:187px;',
			height: 187,width: 636,
			items:
			[
				{
					title:'Продукция',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:131px;',
			height: 131,width: 622,
			columns:
			[
				{
					text:'N',
					width:'21',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'120',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Продукция',
					width:'164',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика продукции',
					width:'167',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия продукции',
					width:'167',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Вид выпуска',
					width:'100',
					dataIndex:'ВидВыпуска',
					flex:1,
				},
				{
					text:'Ед. мест',
					width:'50',
					dataIndex:'ЕдиницаМест',
					flex:1,
				},
				{
					text:'К.мест',
					width:'45',
					dataIndex:'КоэффициентМест',
					flex:1,
				},
				{
					text:'Мест',
					width:'67',
					dataIndex:'КоличествоМест',
					flex:1,
				},
				{
					text:'Количество',
					width:'80',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед.',
					width:'50',
					dataIndex:'Единица',
					flex:1,
				},
				{
					text:'К.',
					width:'45',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'159',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'159',
					dataIndex:'Спецификация',
					flex:1,
				},
				{
					text:'Заказ',
					width:'100',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Счет затрат (БУ)',
					width:'100',
					dataIndex:'СчетЗатрат',
					flex:1,
				},
				{
					text:'Счет затрат (НУ)',
					width:'100',
					dataIndex:'СчетЗатратНУ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РаспределениеМатериаловНаВыпуск/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
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
						name:'ВидВыпуска',
					},
					{
						name:'ЕдиницаМест',
					},
					{
						name:'КоэффициентМест',
					},
					{
						name:'КоличествоМест',
					},
					{
						name:'Количество',
					},
					{
						name:'Единица',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'НоменклатурнаяГруппа',
					},
					{
						name:'Спецификация',
					},
					{
						name:'Заказ',
					},
					{
						name:'СчетЗатрат',
					},
					{
						name:'СчетЗатратНУ',
					},
				]
			},
		},
					]
				},
				{
					title:'Материалы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:131px;',
			height: 131,width: 622,
			columns:
			[
				{
					text:'N',
					width:'21',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'120',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Материал',
					width:'142',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика материала',
					width:'118',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия материала',
					width:'118',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Ед. мест',
					width:'50',
					dataIndex:'ЕдиницаМест',
					flex:1,
				},
				{
					text:'К. мест',
					width:'45',
					dataIndex:'КоэффициентМест',
					flex:1,
				},
				{
					text:'Мест',
					width:'70',
					dataIndex:'КоличествоМест',
					flex:1,
				},
				{
					text:'Количество',
					width:'66',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед.',
					width:'50',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'К.',
					width:'45',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'80',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Вид выпуска',
					width:'100',
					dataIndex:'ВидВыпуска',
					flex:1,
				},
				{
					text:'Заказ',
					width:'122',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'122',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Счет затрат (БУ)',
					width:'91',
					dataIndex:'СчетЗатрат',
					flex:1,
				},
				{
					text:'Счет затрат (НУ)',
					width:'91',
					dataIndex:'СчетЗатратНУ',
					flex:1,
				},
				{
					text:'Подразделение НЗП',
					width:'130',
					dataIndex:'ПодразделениеНЗП',
					flex:1,
				},
				{
					text:'Подразделение организации НЗП',
					width:'130',
					dataIndex:'ПодразделениеОрганизацииНЗП',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РаспределениеМатериаловНаВыпуск/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
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
						name:'ЕдиницаМест',
					},
					{
						name:'КоэффициентМест',
					},
					{
						name:'КоличествоМест',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'ВидВыпуска',
					},
					{
						name:'Заказ',
					},
					{
						name:'НоменклатурнаяГруппа',
					},
					{
						name:'СчетЗатрат',
					},
					{
						name:'СчетЗатратНУ',
					},
					{
						name:'ПодразделениеНЗП',
					},
					{
						name:'ПодразделениеОрганизацииНЗП',
					},
				]
			},
		},
					]
				},
				{
					title:'Распределение материалов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:131px;',
			height: 131,width: 622,
			columns:
			[
				{
					text:'N',
					width:'21',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'120',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Материал',
					width:'119',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика материала',
					width:'100',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия материала',
					width:'100',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Количество',
					width:'53',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед.',
					width:'50',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'К.',
					width:'45',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'141',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Номенклатурная группа НЗП',
					width:'100',
					dataIndex:'НоменклатурнаяГруппаНЗП',
					flex:1,
				},
				{
					text:'Заказ НЗП',
					width:'100',
					dataIndex:'ЗаказНЗП',
					flex:1,
				},
				{
					text:'Продукция',
					width:'125',
					dataIndex:'Продукция',
					flex:1,
				},
				{
					text:'Характеристика продукции',
					width:'131',
					dataIndex:'ХарактеристикаПродукции',
					flex:1,
				},
				{
					text:'Серия продукции',
					width:'131',
					dataIndex:'СерияПродукции',
					flex:1,
				},
				{
					text:'Вид выпуска',
					width:'100',
					dataIndex:'ВидВыпуска',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'141',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'141',
					dataIndex:'Спецификация',
					flex:1,
				},
				{
					text:'Заказ',
					width:'141',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Счет затрат (БУ)',
					width:'89',
					dataIndex:'СчетЗатрат',
					flex:1,
				},
				{
					text:'Счет затрат (НУ)',
					width:'89',
					dataIndex:'СчетЗатратНУ',
					flex:1,
				},
				{
					text:'Подразделение НЗП',
					width:'130',
					dataIndex:'ПодразделениеНЗП',
					flex:1,
				},
				{
					text:'Подразделение организации НЗП',
					width:'130',
					dataIndex:'ПодразделениеОрганизацииНЗП',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РаспределениеМатериаловНаВыпуск/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
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
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'НоменклатурнаяГруппаНЗП',
					},
					{
						name:'ЗаказНЗП',
					},
					{
						name:'Продукция',
					},
					{
						name:'ХарактеристикаПродукции',
					},
					{
						name:'СерияПродукции',
					},
					{
						name:'ВидВыпуска',
					},
					{
						name:'НоменклатурнаяГруппа',
					},
					{
						name:'Спецификация',
					},
					{
						name:'Заказ',
					},
					{
						name:'СчетЗатрат',
					},
					{
						name:'СчетЗатратНУ',
					},
					{
						name:'ПодразделениеНЗП',
					},
					{
						name:'ПодразделениеОрганизацииНЗП',
					},
				]
			},
		},
					]
				},
				{
					title:'Возвратные отходы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:131px;',
			height: 131,width: 622,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'120',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
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
					text:'Вид выпуска',
					width:'100',
					dataIndex:'ВидВыпуска',
					flex:1,
				},
				{
					text:'Ед. мест',
					width:'50',
					dataIndex:'ЕдиницаМест',
					flex:1,
				},
				{
					text:'К. мест',
					width:'45',
					dataIndex:'КоэффициентМест',
					flex:1,
				},
				{
					text:'Мест',
					width:'67',
					dataIndex:'КоличествоМест',
					flex:1,
				},
				{
					text:'Количество',
					width:'72',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед.',
					width:'50',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'К.',
					width:'45',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Заказ',
					width:'100',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'112',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'103',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Счет затрат (БУ)',
					width:'100',
					dataIndex:'СчетЗатрат',
					flex:1,
				},
				{
					text:'Счет затрат (НУ)',
					width:'100',
					dataIndex:'СчетЗатратНУ',
					flex:1,
				},
				{
					text:'Подразделение НЗП',
					width:'130',
					dataIndex:'ПодразделениеНЗП',
					flex:1,
				},
				{
					text:'Подразделение организации НЗП',
					width:'130',
					dataIndex:'ПодразделениеОрганизацииНЗП',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РаспределениеМатериаловНаВыпуск/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
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
						name:'ВидВыпуска',
					},
					{
						name:'ЕдиницаМест',
					},
					{
						name:'КоэффициентМест',
					},
					{
						name:'КоличествоМест',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'Заказ',
					},
					{
						name:'НоменклатурнаяГруппа',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'СчетЗатрат',
					},
					{
						name:'СчетЗатратНУ',
					},
					{
						name:'ПодразделениеНЗП',
					},
					{
						name:'ПодразделениеОрганизацииНЗП',
					},
				]
			},
		},
					]
				},
				{
					title:'Распределение возвратных отходов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:131px;',
			height: 131,width: 622,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'120',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
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
					text:'Количество',
					width:'67',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед.',
					width:'50',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'К.',
					width:'45',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'100',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Вид выпуска',
					width:'100',
					dataIndex:'ВидВыпуска',
					flex:1,
				},
				{
					text:'Номенклатурная группа НЗП',
					width:'100',
					dataIndex:'НоменклатурнаяГруппаНЗП',
					flex:1,
				},
				{
					text:'Заказ НЗП',
					width:'100',
					dataIndex:'ЗаказНЗП',
					flex:1,
				},
				{
					text:'Продукция',
					width:'100',
					dataIndex:'Продукция',
					flex:1,
				},
				{
					text:'Характеристика продукции',
					width:'100',
					dataIndex:'ХарактеристикаПродукции',
					flex:1,
				},
				{
					text:'Серия продукции',
					width:'100',
					dataIndex:'СерияПродукции',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'100',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'100',
					dataIndex:'Спецификация',
					flex:1,
				},
				{
					text:'Заказ',
					width:'100',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Счет затрат (БУ)',
					width:'100',
					dataIndex:'СчетЗатрат',
					flex:1,
				},
				{
					text:'Счет затрат (НУ)',
					width:'100',
					dataIndex:'СчетЗатратНУ',
					flex:1,
				},
				{
					text:'Подразделение НЗП',
					width:'130',
					dataIndex:'ПодразделениеНЗП',
					flex:1,
				},
				{
					text:'Подразделение организации НЗП',
					width:'130',
					dataIndex:'ПодразделениеОрганизацииНЗП',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РаспределениеМатериаловНаВыпуск/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
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
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'ВидВыпуска',
					},
					{
						name:'НоменклатурнаяГруппаНЗП',
					},
					{
						name:'ЗаказНЗП',
					},
					{
						name:'Продукция',
					},
					{
						name:'ХарактеристикаПродукции',
					},
					{
						name:'СерияПродукции',
					},
					{
						name:'НоменклатурнаяГруппа',
					},
					{
						name:'Спецификация',
					},
					{
						name:'Заказ',
					},
					{
						name:'СчетЗатрат',
					},
					{
						name:'СчетЗатратНУ',
					},
					{
						name:'ПодразделениеНЗП',
					},
					{
						name:'ПодразделениеОрганизацииНЗП',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:336px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНачалаПериода',
			style: 'position:absolute;left:96px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодПо',
			text: 'по:',
			style: 'position:absolute;left:178px;top:57px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:336px;top:103px;width:88px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:424px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал учете',
			style: 'position:absolute;left:569px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:332px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:332px;width:548px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокИнвентаризация',
			text: 'Инвентаризация:',
			style: 'position:absolute;left:336px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокИнвентаризация',
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаОкончанияПериода',
			style: 'position:absolute;left:196px;top:57px;width:120px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Настройка',
				},
				'-',
				{
					text:'Показать/скрыть счета учета',
				},
			]
		},
	]
});