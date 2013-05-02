Ext.define('Документы.СчетНаОплатуПоставщика.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:658px;height:455px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документ Счет на оплату поставщика',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:170px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:399px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:399px;width:560px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:658px;height:25px;',
			items:
			[
				{
					text:'Цены и валюта...',
				},
				'-',
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:156px;width:642px;height:197px;',
			height: 197,width: 642,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:628px;height:137px;',
			height: 137,width: 628,
			columns:
			[
				{
					text:'№',
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
					width:'220',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'120',
					dataIndex:'ХарактеристикаНоменклатуры',
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
					width:'59',
					dataIndex:'КоличествоМест',
					flex:1,
				},
				{
					text:'Количество',
					width:'65',
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
					text:'Цена',
					width:'80',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'% НДС',
					width:'40',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'80',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'Всего',
					width:'80',
					dataIndex:'Всего',
					flex:1,
				},
				{
					text:'Себестоимость',
					width:'80',
					dataIndex:'ПлановаяСебестоимость',
					flex:1,
				},
				{
					text:'Сумма себестоимости',
					width:'80',
					dataIndex:'СуммаПлановойСебестоимости',
					flex:1,
				},
				{
					text:'Отклонение',
					width:'80',
					dataIndex:'СуммаОтклоненияОтСуммыПлановойСебестоимости',
					flex:1,
				},
				{
					text:'% отклонения',
					width:'80',
					dataIndex:'ПроцентОтклоненияОтСуммыПлановойСебестоимости',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СчетНаОплатуПоставщика/ВыбратьПоСсылке/100'},
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
						name:'Цена',
					},
					{
						name:'Сумма',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаНДС',
					},
					{
						name:'Всего',
					},
					{
						name:'ПлановаяСебестоимость',
					},
					{
						name:'СуммаПлановойСебестоимости',
					},
					{
						name:'СуммаОтклоненияОтСуммыПлановойСебестоимости',
					},
					{
						name:'ПроцентОтклоненияОтСуммыПлановойСебестоимости',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:628px;height:24px;',
			items:
			[
				{
					text:'Поиск по штрихкоду',
				},
				'-',
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Изменить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:330px;top:99px;width:88px;height:19px;',
		},
					]
				},
				{
					title:'Оборудование',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:628px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:628px;height:137px;',
			height: 137,width: 628,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'220',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Ед. мест',
					width:'50',
					dataIndex:'ЕдиницаИзмеренияМест',
					flex:1,
				},
				{
					text:'К. мест',
					width:'50',
					dataIndex:'КоэффициентМест',
					flex:1,
				},
				{
					text:'Мест',
					width:'59',
					dataIndex:'КоличествоМест',
					flex:1,
				},
				{
					text:'Количество',
					width:'68',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед.',
					width:'45',
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
					text:'Цена',
					width:'80',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Сумма',
					width:'122',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'% НДС',
					width:'50',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'88',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'Всего',
					width:'93',
					dataIndex:'Всего',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'250',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СчетНаОплатуПоставщика/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ЕдиницаИзмеренияМест',
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
						name:'Цена',
					},
					{
						name:'Сумма',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаНДС',
					},
					{
						name:'Всего',
					},
					{
						name:'ХарактеристикаНоменклатуры',
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
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетов',
			text: 'Сумма <нет валюты>:',
			style: 'position:absolute;left:12px;top:27px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:628px;height:137px;',
			height: 137,width: 628,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'120',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Содержание услуги, доп. сведения',
					width:'220',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'Количество',
					width:'60',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Цена',
					width:'57',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Сумма',
					width:'61',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'% НДС',
					width:'58',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'76',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'Всего',
					width:'80',
					dataIndex:'Всего',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СчетНаОплатуПоставщика/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Содержание',
					},
					{
						name:'Количество',
					},
					{
						name:'Цена',
					},
					{
						name:'Сумма',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаНДС',
					},
					{
						name:'Всего',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:628px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
			]
		},
					]
				},
				{
					title:'Возвратная тара',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:628px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:628px;height:137px;',
			height: 137,width: 628,
			columns:
			[
				{
					text:'№',
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
					width:'220',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Ед. хранения',
					width:'52',
					dataIndex:'ЕдиницаХранения',
					flex:1,
				},
				{
					text:'Количество',
					width:'65',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Цена',
					width:'80',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СчетНаОплатуПоставщика/ВыбратьПоСсылке/100'},
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
						name:'ЕдиницаХранения',
					},
					{
						name:'Количество',
					},
					{
						name:'Цена',
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
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:90px;top:99px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:418px;top:99px;width:216px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:98px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:183px;top:27px;width:451px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактноеЛицо',
			style: 'position:absolute;left:90px;top:124px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'напомнить',
			style: 'position:absolute;left:330px;top:124px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВремяНапоминания',
			style: 'position:absolute;left:418px;top:124px;width:164px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВходящегоДокумента',
			text: 'Вх. дата:',
			style: 'position:absolute;left:330px;top:75px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерВходящегоДокумента',
			style: 'position:absolute;left:90px;top:75px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВходящегоДокумента',
			style: 'position:absolute;left:418px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:90px;top:149px;width:220px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:330px;top:82px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:82px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:420px;top:82px;width:230px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:90px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСклад',
			text: 'Склад:',
			style: 'position:absolute;left:8px;top:129px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:90px;top:129px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьТоварыИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:8px;top:355px;width:454px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьДолга',
			text: 'По договору 250 USD, 1 USD = 30 руб.',
			style: 'position:absolute;left:330px;top:105px;width:299px;height:19px;text-align:right;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:635px;top:105px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:472px;top:355px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:547px;top:355px;width:103px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:472px;top:377px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:547px;top:377px;width:103px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтруктурнаяЕдиница',
			style: 'position:absolute;left:420px;top:129px;width:230px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтруктурнойЕдиницы',
			text: 'Б/счет, касса:',
			style: 'position:absolute;left:330px;top:129px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОплаты',
			style: 'position:absolute;left:230px;top:105px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПоступления',
			style: 'position:absolute;left:90px;top:105px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатыОплаты',
			text: 'Оплата:',
			style: 'position:absolute;left:170px;top:105px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатыОтгрузки',
			text: 'Поступление:',
			style: 'position:absolute;left:8px;top:105px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:430px;width:658px;height:25px;',
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
					text:'ОК',
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
			name: 'ИнфНадписьИтоговоеОтклонениеОтПлановойСебестоимости',
			text: 'Отклонение от плановой себестоимости',
			style: 'position:absolute;left:8px;top:377px;width:454px;height:17px;text-align:left;',
		},
	]
});