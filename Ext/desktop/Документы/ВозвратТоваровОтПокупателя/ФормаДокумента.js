Ext.define('Документы.ВозвратТоваровОтПокупателя.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:661px;height:440px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Возврат товаров от покупателя',
	
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
			style: 'position:absolute;left:8px;top:388px;width:80px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:90px;top:388px;width:563px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:661px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:418px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:496px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:136px;width:645px;height:204px;',
			height: 204,width: 645,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:631px;height:154px;',
			height: 154,width: 631,
			columns:
			[
				{
					text:'№',
					width:'30',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'220',
				},
				{
					text:'Характеристика номенклатуры',
					width:'137',
				},
				{
					text:'Серия номенклатуры',
					width:'103',
				},
				{
					text:'Ед. мест',
					width:'50',
				},
				{
					text:'К. мест',
					width:'45',
				},
				{
					text:'Мест',
					width:'65',
				},
				{
					text:'Количество',
					width:'68',
				},
				{
					text:'Ед.',
					width:'50',
				},
				{
					text:'К.',
					width:'45',
				},
				{
					text:'Цена',
					width:'80',
				},
				{
					text:'% скидки или наценки',
					width:'50',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'% НДС',
					width:'40',
				},
				{
					text:'Сумма НДС',
					width:'80',
				},
				{
					text:'Всего',
					width:'80',
				},
				{
					text:'Документ партии',
					width:'250',
				},
				{
					text:'Себестоимость партии',
					width:'80',
				},
				{
					text:'Номер ГТД',
					width:'200',
				},
				{
					text:'Страна происхождения',
					width:'100',
				},
				{
					text:'Счет учета (БУ)',
					width:'100',
				},
				{
					text:'Переданные (БУ)',
					width:'100',
				},
				{
					text:'Принятые счет учета (БУ)',
					width:'100',
				},
				{
					text:'Переданные принятые (БУ)',
					width:'100',
				},
				{
					text:'Счет учета (НУ)',
					width:'100',
				},
				{
					text:'Переданные (НУ)',
					width:'100',
				},
				{
					text:'Принятые счет учета (НУ)',
					width:'100',
				},
				{
					text:'Переданные принятые (НУ)',
					width:'100',
				},
				{
					text:'Счет доходов от реализации (БУ)',
					width:'100',
				},
				{
					text:'Субконто (БУ)',
					width:'100',
				},
				{
					text:'Счет расходов (БУ)',
					width:'100',
				},
				{
					text:'Счет доходов от реализации (НУ)',
					width:'100',
				},
				{
					text:'Субконто (НУ)',
					width:'100',
				},
				{
					text:'Счет расходов (НУ)',
					width:'100',
				},
				{
					text:'Качество',
					width:'100',
				},
				{
					text:'% Авт.ск.',
					width:'69',
				},
				{
					text:'Условие автоматической скидки',
					width:'100',
				},
				{
					text:'Значение условия автоматической скидки',
					width:'100',
				},
				{
					text:'Приходный ордер',
					width:'100',
				},
				{
					text:'Склад',
					width:'100',
				},
				{
					text:'Отражение в НУ',
					width:'100',
				},
				{
					text:'Заказ покупателя',
					width:'100',
				},
				{
					text:'Принадлежность номенклатуры',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:631px;height:24px;',
			items:
			[
				{
					text:'Поиск по штрихкоду',
				},
				'-',
				'-',
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Изменить',
				},
				'-',
				{
					text:'Состав набора',
				},
				'-',
				{
					text:'Серийные номера',
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
			style: 'position:absolute;left:6px;top:0px;width:631px;height:24px;',
			items:
			[
				{
					text:'Заполнить по заказу покупателя (счету на оплату)',
				},
				{
					text:'Добавить по заказу покупателя ',
				},
				{
					text:'Заполнить по Реализации',
				},
				{
					text:'Добавить из Реализации',
				},
				{
					text:'Заполнить по приходному ордеру',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:631px;height:154px;',
			height: 154,width: 631,
			columns:
			[
				{
					text:'№',
					width:'30',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'220',
				},
				{
					text:'Количество',
					width:'54',
				},
				{
					text:'Цена',
					width:'80',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Счет учета (БУ)',
					width:'100',
				},
				{
					text:'Счет учета (НУ)',
					width:'100',
				},
				{
					text:'Приходный ордер',
					width:'100',
				},
				{
					text:'Склад',
					width:'100',
				},
				{
					text:'Заказ покупателя',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСчетРасчетов',
			text: 'Счет учета расчетов с контрагентом:',
			style: 'position:absolute;left:6px;top:6px;width:190px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетов',
			text: 'Сумма <нет валюты>:',
			style: 'position:absolute;left:11px;top:29px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:95px;top:75px;width:208px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:431px;top:75px;width:206px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:91px;top:29px;width:78px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:182px;top:29px;width:121px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:95px;top:99px;width:208px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДисконтнаяКарта',
			style: 'position:absolute;left:431px;top:29px;width:206px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтразитьВКнигеПокупок',
			text: 'Отразить возврат:',
			style: 'position:absolute;left:6px;top:30px;width:98px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Счета учета расчетов',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентом',
			style: 'position:absolute;left:198px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетАвансов',
			text: 'Счет учета расчетов по авансам:',
			style: 'position:absolute;left:6px;top:29px;width:190px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоАвансам',
			style: 'position:absolute;left:198px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоТаре',
			style: 'position:absolute;left:198px;top:52px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Документы реализации',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:7px;top:27px;width:630px;height:151px;',
			height: 151,width: 630,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Заказ покупателя',
					width:'180',
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'180',
				},
				{
					text:'Дата оплаты',
					width:'86',
				},
				{
					text:'Сумма взаиморасчетов',
					width:'120',
				},
				{
					text:'Сумма регл',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:1px;width:628px;height:26px;',
			items:
			[
				{
					text:'Заполнить документы расчетов с контрагентом',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаНДС',
			text: 'Счет учета НДС:',
			style: 'position:absolute;left:6px;top:55px;width:98px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'НДС',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетовПоТаре',
			text: 'Счет учета расчетов по таре:',
			style: 'position:absolute;left:6px;top:52px;width:190px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтразитьВКнигеПокупок',
			style: 'position:absolute;left:108px;top:30px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаНДС',
			style: 'position:absolute;left:108px;top:55px;width:96px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Покупателем выставляется счет-фактура на возврат',
			style: 'position:absolute;left:6px;top:6px;width:321px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:330px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:81px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:418px;top:81px;width:235px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:90px;top:81px;width:220px;height:19px;',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:90px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Сделка:
',
			style: 'position:absolute;left:8px;top:105px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СкладОрдер',
			style: 'position:absolute;left:418px;top:57px;width:235px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьТоварыИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:8px;top:344px;width:463px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:330px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьДолга',
			text: 'По договору 250 USD, 1 USD = 30 руб.',
			style: 'position:absolute;left:330px;top:105px;width:306px;height:19px;text-align:right;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:638px;top:105px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:476px;top:344px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:550px;top:344px;width:99px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:476px;top:366px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:549px;top:366px;width:100px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:415px;width:661px;height:25px;',
			items:
			[
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПоступления',
			style: 'position:absolute;left:330px;top:57px;width:86px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:574px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактура',
			text: 'Счет-фактура:',
			style: 'position:absolute;left:8px;top:366px;width:76px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаСчетФактура',
			text: 'Ввести счет-фактуру',
			style: 'position:absolute;left:90px;top:366px;width:381px;height:17px;',
		},
	]
});