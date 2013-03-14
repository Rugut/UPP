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
			xtype: 'textfield',
			hideLabel: true,
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
			name: 'Организация',
			style: 'position:absolute;left:84px;top:57px;width:225px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:681px;height:25px;',
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
			items:
			[
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
				},
				{
					text:'Вид задолженности',
					width:'100',
				},
				{
					text:'Контрагент',
					width:'128',
				},
				{
					text:'Договор контрагента',
					width:'132',
				},
				{
					text:'Сделка',
					width:'100',
				},
				{
					text:'Документ расчетов',
					width:'183',
				},
				{
					text:'Сумма взаиморасчетов',
					width:'90',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
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
				},
				{
					text:'Вид задолженности',
					width:'100',
				},
				{
					text:'Контрагент',
					width:'119',
				},
				{
					text:'Договор контрагента',
					width:'119',
				},
				{
					text:'Сделка',
					width:'100',
				},
				{
					text:'Документ расчетов',
					width:'193',
				},
				{
					text:'Сумма взаиморасчетов',
					width:'97',
				},
				{
					text:'в т.ч. ЕНВД',
					width:'97',
				},
				{
					text:'в т.ч. доход комитента',
					width:'97',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
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
				},
				{
					text:'Вид задолженности',
					width:'100',
				},
				{
					text:'Работник',
					width:'182',
				},
				{
					text:'Документ расчетов',
					width:'218',
				},
				{
					text:'Сумма взаиморасчетов',
					width:'111',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
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
				},
				{
					text:'Вид задолженности',
					width:'100',
				},
				{
					text:'Работник',
					width:'357',
				},
				{
					text:'Сумма взаиморасчетов',
					width:'131',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
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
				},
				{
					text:'Вид задолженности',
					width:'109',
				},
				{
					text:'Счет расчетов по налогу',
					width:'123',
				},
				{
					text:'Сумма взаиморасчетов',
					width:'139',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
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
				},
				{
					text:'Номенклатура',
					width:'165',
				},
				{
					text:'Характеристика номенклатуры',
					width:'100',
				},
				{
					text:'Серия номенклатуры',
					width:'100',
				},
				{
					text:'Счет учета',
					width:'67',
				},
				{
					text:'Склад',
					width:'115',
				},
				{
					text:'Партия',
					width:'190',
				},
				{
					text:'Количество',
					width:'75',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:651px;height:24px;',
			items:
			[
			]
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
				},
				{
					text:'Номенклатура',
					width:'143',
				},
				{
					text:'Характеристика номенклатуры',
					width:'100',
				},
				{
					text:'Счет учета',
					width:'74',
				},
				{
					text:'Партия',
					width:'117',
				},
				{
					text:'Контрагент',
					width:'59',
				},
				{
					text:'Договор контрагента',
					width:'114',
				},
				{
					text:'Документ передачи',
					width:'120',
				},
				{
					text:'Количество',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:651px;height:24px;',
			items:
			[
			]
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
				},
				{
					text:'Номенклатура',
					width:'100',
				},
				{
					text:'Партия',
					width:'100',
				},
				{
					text:'Счет учета',
					width:'100',
				},
				{
					text:'Статус партии',
					width:'100',
				},
				{
					text:'Поставщик',
					width:'100',
				},
				{
					text:'Договор поставщика',
					width:'100',
				},
				{
					text:'Документ расчетов',
					width:'199',
				},
				{
					text:'Состояние расхода',
					width:'156',
				},
				{
					text:'Отражение в УСН',
					width:'99',
				},
				{
					text:'Валюта',
					width:'105',
				},
				{
					text:'Количество',
					width:'105',
				},
				{
					text:'Сумма',
					width:'96',
				},
				{
					text:'НДС',
					width:'96',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
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
				},
				{
					text:'НМА',
					width:'100',
				},
				{
					text:'Поставщик',
					width:'100',
				},
				{
					text:'Договор поставщика',
					width:'100',
				},
				{
					text:'Документ расчетов',
					width:'122',
				},
				{
					text:'Отражение в УСН',
					width:'103',
				},
				{
					text:'Валюта',
					width:'75',
				},
				{
					text:'Сумма',
					width:'100',
				},
				{
					text:'НДС',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
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
				},
				{
					text:'Номенклатура',
					width:'100',
				},
				{
					text:'Поставщик',
					width:'100',
				},
				{
					text:'Договор поставщика',
					width:'100',
				},
				{
					text:'Документ расчетов',
					width:'100',
				},
				{
					text:'Отражение в УСН',
					width:'100',
				},
				{
					text:'Валюта',
					width:'100',
				},
				{
					text:'Сумма',
					width:'100',
				},
				{
					text:'НДС',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
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
				},
				{
					text:'РБП',
					width:'100',
				},
				{
					text:'Поставщик',
					width:'100',
				},
				{
					text:'Договор поставщика',
					width:'100',
				},
				{
					text:'Документ расчетов',
					width:'147',
				},
				{
					text:'Состояние расхода',
					width:'147',
				},
				{
					text:'Отражение в УСН',
					width:'102',
				},
				{
					text:'Валюта',
					width:'91',
				},
				{
					text:'Сумма',
					width:'98',
				},
				{
					text:'НДС',
					width:'92',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
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
				},
				{
					text:'Работник',
					width:'287',
				},
				{
					text:'Отражение в УСН',
					width:'106',
				},
				{
					text:'Сумма',
					width:'113',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
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
				},
				{
					text:'Счет расчетов по налогу',
					width:'100',
				},
				{
					text:'Отражение в УСН',
					width:'100',
				},
				{
					text:'Сумма',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
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
				},
				{
					text:'Основное средство',
					width:'120',
				},
				{
					text:'Дата приобретения',
					width:'80',
				},
				{
					text:'Первоначальная стоимость',
					width:'80',
				},
				{
					text:'Сумма начисленной амортизации (при общем режиме)',
					width:'80',
				},
				{
					text:'Срок полезного использования, мес.',
					width:'80',
				},
				{
					text:'Порядок включения стоимости в состав расходов (УСН)',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
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
				},
				{
					text:'Нематериальный актив',
					width:'120',
				},
				{
					text:'Дата приобретения',
					width:'80',
				},
				{
					text:'Первоначальная стоимость',
					width:'80',
				},
				{
					text:'Сумма начисленной амортизации (при общем режиме)',
					width:'80',
				},
				{
					text:'Срок полезного использования, мес.',
					width:'80',
				},
				{
					text:'Порядок включения стоимости в состав расходов (УСН)',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
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
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:377px;width:579px;height:19px;',
		},
	]
});