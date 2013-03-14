Ext.define('Документы.ВводНачальныхОстатковНДС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:520px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод начальных остатков НДС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:180px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:468px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:468px;width:676px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:362px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:455px;top:33px;width:317px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:495px;width:780px;height:25px;',
			items:
			[
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:59px;width:764px;height:382px;',
			height: 382,width: 764,
			items:
			[
				{
					title:'Данные по НДС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:748px;height:124px;',
			height: 124,width: 748,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Контрагент',
					width:'115',
				},
				{
					text:'Договор',
					width:'115',
				},
				{
					text:'Счет-фактура',
					width:'25',
				},
				{
					text:'Дата счета-фактуры',
					width:'80',
				},
				{
					text:'Номер счета-фактуры',
					width:'186',
				},
				{
					text:'Дата расчетного документа',
					width:'80',
				},
				{
					text:'Номер расчетного документа',
					width:'186',
				},
				{
					text:'Исправление',
					width:'100',
				},
				{
					text:'Номер исправления',
					width:'100',
				},
				{
					text:'Дата исправления',
					width:'100',
				},
				{
					text:'Корректировочный счет-фактура',
					width:'100',
				},
				{
					text:'Номер корректируемого счета-фактуры',
					width:'100',
				},
				{
					text:'Дата корректируемого счета-фактуры',
					width:'100',
				},
				{
					text:'Учитывать исправление исходного документа',
					width:'100',
				},
				{
					text:'Номер исправления исходного документа',
					width:'100',
				},
				{
					text:'Дата исправления исходного документа',
					width:'100',
				},
				{
					text:'Документ-основание (поступление и др.)',
					width:'124',
				},
				{
					text:'Сумма без НДС',
					width:'116',
				},
				{
					text:'НДС',
					width:'116',
				},
				{
					text:'Валюта аванса',
					width:'60',
				},
				{
					text:'Валютная сумма аванса с НДС',
					width:'60',
				},
				{
					text:'Сумма без НДС оплачено',
					width:'120',
				},
				{
					text:'НДС оплачено',
					width:'120',
				},
				{
					text:'Сумма без НДС по строительству',
					width:'120',
				},
				{
					text:'НДС по строительству',
					width:'120',
				},
				{
					text:'Сумма без НДС по ОС, введенному в эксплуатацию',
					width:'120',
				},
				{
					text:'НДС по ОС, введенному в эксплуатацию',
					width:'120',
				},
				{
					text:'Сумма без НДС включено в стоимость',
					width:'120',
				},
				{
					text:'НДС включено в стоимость',
					width:'120',
				},
				{
					text:'Сумма без НДС предъявлено к вычету',
					width:'120',
				},
				{
					text:'НДС предъявлено к вычету',
					width:'120',
				},
				{
					text:'Сумма без НДС по ставке 0%',
					width:'120',
				},
				{
					text:'НДС по ставке 0%',
					width:'120',
				},
				{
					text:'Сумма без НДС подтверждена ставка 0%',
					width:'120',
				},
				{
					text:'НДС подтверждена ставка 0%',
					width:'120',
				},
				{
					text:'Сумма без НДС не подтверждена ставка 0%',
					width:'120',
				},
				{
					text:'НДС не подтверждена ставка 0%',
					width:'120',
				},
				{
					text:'Сумма без НДС предъявлено к вычету по ставке 0%',
					width:'120',
				},
				{
					text:'НДС предъявлено к вычету по ставке 0%',
					width:'120',
				},
				{
					text:'Сумма без НДС предъявлено к вычету (не подтверждена ставка 0%)',
					width:'120',
				},
				{
					text:'НДС предъявлено к вычету (не подтверждена ставка 0%)',
					width:'120',
				},
				{
					text:'Валюта расчетов',
					width:'60',
				},
				{
					text:'Курс',
					width:'80',
				},
				{
					text:'Счет расчетов',
					width:'80',
				},
				{
					text:'Кратность',
					width:'80',
				},
				{
					text:'Сумма, руб.',
					width:'120',
				},
				{
					text:'Сумма, вал.',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:748px;height:24px;',
			items:
			[
				{
					text:'Сформировать счета-фактуры',
				},
				{
					text:'Сформировать счета-фактуры и заполнить расчеты с контрагентами',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:216px;width:748px;height:139px;',
			height: 139,width: 748,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Вид ценности',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'120',
				},
				{
					text:'% НДС',
					width:'100',
				},
				{
					text:'Счет НДС',
					width:'80',
				},
				{
					text:'Счет учета',
					width:'80',
				},
				{
					text:'Сумма без НДС',
					width:'120',
				},
				{
					text:'НДС',
					width:'120',
				},
				{
					text:'Валютная сумма аванса с НДС',
					width:'120',
				},
				{
					text:'Субконто 1',
					width:'120',
				},
				{
					text:'Субконто 2',
					width:'120',
				},
				{
					text:'Субконто 3',
					width:'120',
				},
				{
					text:'Страна происхождения',
					width:'100',
				},
				{
					text:'Номер ГТД',
					width:'100',
				},
				{
					text:'Документ оплаты',
					width:'120',
				},
				{
					text:'Документ отгрузки',
					width:'120',
				},
				{
					text:'Сумма без НДС оплачено',
					width:'120',
				},
				{
					text:'НДС оплачено',
					width:'120',
				},
				{
					text:'Не влияет на вычет',
					width:'50',
				},
				{
					text:'Вид внеобротного актива',
					width:'120',
				},
				{
					text:'Объект Вн.А.',
					width:'120',
				},
				{
					text:'Сумма без НДС передано на Вн.А.',
					width:'120',
				},
				{
					text:'Сумма без НДС по Вн.А., принятому к учету',
					width:'120',
				},
				{
					text:'НДС передан на Вн.А.',
					width:'120',
				},
				{
					text:'НДС по Вн.А. принятому к учету',
					width:'120',
				},
				{
					text:'Сумма без НДС включено в стоимость',
					width:'120',
				},
				{
					text:'НДС включено в стоимость',
					width:'120',
				},
				{
					text:'Сумма без НДС предъявлено к вычету',
					width:'120',
				},
				{
					text:'НДС предъявлено к вычету',
					width:'120',
				},
				{
					text:'Сумма без НДС по ставке 0%',
					width:'120',
				},
				{
					text:'НДС по ставке 0%',
					width:'120',
				},
				{
					text:'Сумма без НДС подтверждена ставка 0%',
					width:'120',
				},
				{
					text:'НДС подтверждена ставка 0%',
					width:'120',
				},
				{
					text:'Сумма без НДС не подтверждена ставка 0%',
					width:'120',
				},
				{
					text:'НДС не подтверждена ставка 0%',
					width:'120',
				},
				{
					text:'Сумма без НДС предъявлено к вычету по ставке 0%',
					width:'120',
				},
				{
					text:'НДС предъявлено к вычету по ставке 0%',
					width:'120',
				},
				{
					text:'Сумма без НДС предъявлено к вычету (не подтверждена ставка 0%)',
					width:'120',
				},
				{
					text:'НДС предъявлено к вычету (не подтверждена ставка 0%)',
					width:'120',
				},
				{
					text:'% НДС (не подтверждена ставка 0%)',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:192px;width:748px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Расчеты с контрагентами',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:746px;height:325px;',
			height: 325,width: 746,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Договор контрагента',
					width:'120',
				},
				{
					text:'Сделка',
					width:'100',
				},
				{
					text:'Счет-фактура',
					width:'120',
				},
				{
					text:'Валюта',
					width:'60',
				},
				{
					text:'Курс взаиморасчетов',
					width:'120',
				},
				{
					text:'Кратность взаиморасчетов',
					width:'120',
				},
				{
					text:'Сумма расчетов, руб.',
					width:'120',
				},
				{
					text:'Сумма расчетов, вал.',
					width:'120',
				},
				{
					text:'Счет учета расчетов с контрагентом',
					width:'80',
				},
				{
					text:'Расчеты с бюджетом',
					width:'60',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:6px;width:746px;height:24px;',
			items:
			[
				'-',
			]
		},
					]
				},
				{
					title:'Авансы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:6px;width:746px;height:24px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:746px;height:325px;',
			height: 325,width: 746,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Договор контрагента',
					width:'120',
				},
				{
					text:'Сделка',
					width:'119',
				},
				{
					text:'Документ оплаты',
					width:'120',
				},
				{
					text:'Валюта',
					width:'60',
				},
				{
					text:'Курс взаиморасчетов',
					width:'120',
				},
				{
					text:'Кратность взаиморасчетов',
					width:'120',
				},
				{
					text:'Сумма расчетов, руб.',
					width:'120',
				},
				{
					text:'Сумма расчетов, вал.',
					width:'120',
				},
				{
					text:'Счет учета расчетов с контрагентом',
					width:'80',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отразить расчеты с контрагентами',
			style: 'position:absolute;left:455px;top:58px;width:200px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:444px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:444px;width:676px;height:19px;',
		},
	]
});