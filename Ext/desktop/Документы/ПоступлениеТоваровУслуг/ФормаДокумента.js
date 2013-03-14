Ext.define('Документы.ПоступлениеТоваровУслуг.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:671px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Поступление товаров и услуг',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:32px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:174px;top:32px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:428px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:428px;width:562px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:671px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:420px;top:32px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:498px;top:32px;width:72px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:131px;width:655px;height:250px;',
			height: 250,width: 655,
			items:
			[
				{
					title:'Оборудование',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомерВходящегоДокумента',
			text: 'Вх. номер:',
			style: 'position:absolute;left:12px;top:68px;width:84px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:634px;height:24px;',
			items:
			[
				{
					text:'Заполнить по заказу поставщику',
				},
				{
					text:'Отобрать заказы, заполнить по заказам',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:634px;height:200px;',
			height: 200,width: 634,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Номенклатура',
					width:'220',
				},
				{
					text:'Характеристика',
					width:'120',
				},
				{
					text:'Серия',
					width:'120',
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
					width:'60',
				},
				{
					text:'Количество',
					width:'64',
				},
				{
					text:'Ед.',
					width:'50',
				},
				{
					text:'К.',
					width:'40',
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
					text:'% НДС',
					width:'48',
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
					text:'Заказ поставщику',
					width:'100',
				},
				{
					text:'Счет учета (БУ)',
					width:'80',
				},
				{
					text:'Счет НДС',
					width:'80',
				},
				{
					text:'Счет учета (НУ)',
					width:'80',
				},
				{
					text:'Приходный ордер',
					width:'100',
				},
				{
					text:'Склад',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:12px;top:164px;width:86px;height:19px;',
		},
					]
				},
				{
					title:'Объекты строительства',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаВходящегоДокумента',
			text: 'Вх. дата:',
			style: 'position:absolute;left:326px;top:68px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетовСКонтрагентом',
			text: 'Счет учета расчетов с контрагентом:',
			style: 'position:absolute;left:6px;top:6px;width:192px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:634px;height:200px;',
			height: 200,width: 634,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Объект строительства',
					width:'220',
				},
				{
					text:'Способ строительства',
					width:'126',
				},
				{
					text:'Статья затрат',
					width:'126',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'% НДС',
					width:'48',
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
					text:'Счет учета (БУ)',
					width:'80',
				},
				{
					text:'Счет НДС',
					width:'80',
				},
				{
					text:'Счет учета (НУ)',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:634px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:634px;height:200px;',
			height: 200,width: 634,
			columns:
			[
				{
					text:'№',
					width:'28',
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
					text:'Характеристика',
					width:'120',
				},
				{
					text:'Серия ',
					width:'120',
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
					width:'60',
				},
				{
					text:'Количество',
					width:'64',
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
					text:'Сумма',
					width:'80',
				},
				{
					text:'% НДС',
					width:'48',
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
					text:'Заказ поставщику',
					width:'100',
				},
				{
					text:'Заказ',
					width:'120',
				},
				{
					text:'Страна происхождения',
					width:'120',
				},
				{
					text:'Номер ГТД',
					width:'120',
				},
				{
					text:'Счет учета (БУ)',
					width:'80',
				},
				{
					text:'Расходы в НУ',
					width:'100',
				},
				{
					text:'Счет НДС',
					width:'80',
				},
				{
					text:'Счет учета (НУ)',
					width:'80',
				},
				{
					text:'Склад',
					width:'100',
				},
				{
					text:'Приходный ордер',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:634px;height:24px;',
			items:
			[
				{
					text:'Поиск по штрихкоду',
				},
				'-',
				'-',
				'-',
				{
					text:'Изменить',
				},
				'-',
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Серийные номера',
				},
				'-',
				{
					text:'Переоценка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетов',
			text: 'Сумма <нет валюты>:',
			style: 'position:absolute;left:12px;top:25px;width:84px;height:19px;',
		},
					]
				},
				{
					title:'Услуги',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:12px;top:92px;width:84px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:634px;height:200px;',
			height: 200,width: 634,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Номенклатура',
					width:'120',
				},
				{
					text:'Содержание услуги, доп. сведения',
					width:'221',
				},
				{
					text:'Количество',
					width:'64',
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
					text:'% НДС',
					width:'48',
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
					text:'Подразделение',
					width:'120',
				},
				{
					text:'Подразделение организации',
					width:'120',
				},
				{
					text:'Заказ поставщику',
					width:'100',
				},
				{
					text:'Заказ',
					width:'120',
				},
				{
					text:'Статья затрат',
					width:'120',
				},
				{
					text:'Счет затрат (БУ)',
					width:'88',
				},
				{
					text:'Счет затрат (НУ)',
					width:'88',
				},
				{
					text:'Характер затрат',
					width:'120',
				},
				{
					text:'Вид аналитики',
					width:'221',
				},
				{
					text:'Вид аналитики (доп)',
					width:'221',
				},
				{
					text:'Вид субконто 1',
					width:'74',
				},
				{
					text:'Вид субконто 2',
					width:'74',
				},
				{
					text:'Вид субконто 3',
					width:'74',
				},
				{
					text:'Вид субконто 1 (НУ )',
					width:'92',
				},
				{
					text:'Вид субконто 2 (НУ)',
					width:'92',
				},
				{
					text:'Вид субконто 3 (НУ)',
					width:'92',
				},
				{
					text:'Аналитика',
					width:'70',
				},
				{
					text:'Номенклатурная группа',
					width:'77',
				},
				{
					text:'Номенклатурная группа (доп)',
					width:'73',
				},
				{
					text:'Способ распределения затрат',
					width:'74',
				},
				{
					text:'Субконто 1',
					width:'93',
				},
				{
					text:'Субконто 2',
					width:'93',
				},
				{
					text:'Субконто 3',
					width:'93',
				},
				{
					text:'Субконто 1 (НУ)',
					width:'93',
				},
				{
					text:'Субконто 2 (НУ)',
					width:'93',
				},
				{
					text:'Субконто 3 (НУ)',
					width:'93',
				},
				{
					text:'Продукция',
					width:'93',
				},
				{
					text:'Характеристика продукции',
					width:'93',
				},
				{
					text:'Серия продукции',
					width:'93',
				},
				{
					text:'Объект строительства',
					width:'180',
				},
				{
					text:'Способ строительства',
					width:'178',
				},
				{
					text:'Расходы в НУ',
					width:'100',
				},
				{
					text:'Счет учета НДС',
					width:'88',
				},
				{
					text:'Проект',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:634px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетовПоАвансам',
			text: 'Счет учета расчетов по авансам:',
			style: 'position:absolute;left:6px;top:30px;width:192px;height:19px;',
		},
					]
				},
				{
					title:'Возвратная тара',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:634px;height:24px;',
			items:
			[
				{
					text:'Заполнить по заказу поставщику (счету на оплату)',
				},
				{
					text:'Отобрать заказы, заполнить по заказам',
				},
				{
					text:'Заполнить по приходному ордеру',
				},
				{
					text:'Добавить по приходному ордеру',
				},
			]
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:183px;top:25px;width:457px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:634px;height:200px;',
			height: 200,width: 634,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'100',
				},
				{
					text:'Номенклатура',
					width:'250',
				},
				{
					text:'Количество',
					width:'65',
				},
				{
					text:'Цена',
					width:'80',
				},
				{
					text:'Ед. хранения',
					width:'52',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Заказ поставщику',
					width:'175',
				},
				{
					text:'Заказ',
					width:'183',
				},
				{
					text:'Счет учета (БУ)',
					width:'90',
				},
				{
					text:'Счет учета (НУ)',
					width:'90',
				},
				{
					text:'Склад',
					width:'100',
				},
				{
					text:'Приходный ордер',
					width:'100',
				},
			]
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
			style: 'position:absolute;left:200px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоАвансам',
			style: 'position:absolute;left:200px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетовПоТаре',
			text: 'Счет учета расчетов по таре:',
			style: 'position:absolute;left:6px;top:54px;width:192px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоТаре',
			style: 'position:absolute;left:200px;top:54px;width:80px;height:19px;',
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
			name: 'Подразделение',
			style: 'position:absolute;left:98px;top:92px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:12px;top:140px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:98px;top:140px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерВходящегоДокумента',
			style: 'position:absolute;left:98px;top:68px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВходящегоДокумента',
			style: 'position:absolute;left:435px;top:68px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:98px;top:27px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:12px;top:114px;width:84px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:98px;top:116px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БанковскийСчетКонтрагента',
			style: 'position:absolute;left:435px;top:92px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:98px;top:164px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрузоотправитель',
			text: 'Грузоотправитель:',
			style: 'position:absolute;left:326px;top:116px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Грузоотправитель',
			style: 'position:absolute;left:435px;top:116px;width:205px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрузополучатель',
			text: 'Грузополучатель:',
			style: 'position:absolute;left:326px;top:140px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Грузополучатель',
			style: 'position:absolute;left:435px;top:140px;width:205px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ТекстСостоянияЭД',
			text: '',
			style: 'position:absolute;left:98px;top:205px;width:542px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеЭД',
			text: 'Состояние:',
			style: 'position:absolute;left:12px;top:205px;width:84px;height:19px;',
		},
					]
				},
				{
					title:'Предоплата',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:634px;height:131px;',
			height: 131,width: 634,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Заказ поставщику',
					width:'154',
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'183',
				},
				{
					text:'Дата оплаты',
					width:'100',
				},
				{
					text:'Сумма взаиморасчетов',
					width:'73',
				},
				{
					text:'Сумма регл',
					width:'76',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Заполнить по заказам документа',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПоДокументу',
			text: 'Всего по документу:',
			style: 'position:absolute;left:6px;top:165px;width:105px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредоплата',
			text: 'Всего предоплата:',
			style: 'position:absolute;left:6px;top:185px;width:105px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОсталось',
			text: 'Осталось оплатить:',
			style: 'position:absolute;left:6px;top:204px;width:105px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоДокументуВал',
			style: 'position:absolute;left:161px;top:165px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоДокументуРегл',
			style: 'position:absolute;left:323px;top:165px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредоплатаВал',
			style: 'position:absolute;left:161px;top:186px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредоплатаРегл',
			style: 'position:absolute;left:323px;top:186px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокРегл',
			style: 'position:absolute;left:323px;top:207px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокВал',
			style: 'position:absolute;left:161px;top:207px;width:134px;height:17px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:334px;top:80px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:80px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:420px;top:80px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:94px;top:80px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:94px;top:104px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Сделка:
',
			style: 'position:absolute;left:8px;top:100px;width:84px;height:28px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СкладОрдер',
			style: 'position:absolute;left:420px;top:56px;width:236px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьТоварыИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:8px;top:384px;width:451px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражатьВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:334px;top:32px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактура',
			text: 'Счет-фактура:',
			style: 'position:absolute;left:8px;top:406px;width:84px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьДолга',
			text: 'По договору 250 USD, 1 USD = 30 руб.',
			style: 'position:absolute;left:334px;top:104px;width:305px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаСчетФактура',
			text: 'Ввести счет-фактуру',
			style: 'position:absolute;left:94px;top:406px;width:366px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:641px;top:104px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:467px;top:384px;width:72px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:540px;top:384px;width:116px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:467px;top:406px;width:72px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:540px;top:406px;width:116px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:671px;height:25px;',
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
			style: 'position:absolute;left:334px;top:56px;width:84px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:576px;top:32px;width:80px;height:19px;',
		},
	]
});