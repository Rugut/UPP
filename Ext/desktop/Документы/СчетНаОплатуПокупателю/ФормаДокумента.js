Ext.define('Документы.СчетНаОплатуПокупателю.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:657px;height:508px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документ Счет на оплату покупателю',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:457px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:457px;width:553px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
				{
					text:'В файл',
				},
				{
					text:'Отправить по эл. почте',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:154px;width:641px;height:242px;',
			height: 242,width: 641,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:4px;top:24px;width:631px;height:191px;',
			height: 191,width: 631,
			columns:
			[
				{
					text:'№',
					width:'29',
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
					width:'251',
				},
				{
					text:'Характеристика номенклатуры',
					width:'250',
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
					width:'70',
				},
				{
					text:'Количество',
					width:'65',
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
					text:'Сумма без скидок',
					width:'78',
				},
				{
					text:'% Руч.ск.',
					width:'59',
				},
				{
					text:'% Авт.ск.',
					width:'57',
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
					text:'Себестоимость',
					width:'80',
				},
				{
					text:'Сумма себестоимости',
					width:'80',
				},
				{
					text:'Отклонение',
					width:'80',
				},
				{
					text:'% отклонения',
					width:'80',
				},
				{
					text:'Заказ покупателя',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:4px;top:0px;width:631px;height:24px;',
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
			style: 'position:absolute;left:4px;top:0px;width:630px;height:24px;',
			items:
			[
				{
					text:'Заполнить по заказу покупателя',
				},
				{
					text:'Отобрать заказы, заполнить по заказам',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:4px;top:24px;width:631px;height:191px;',
			height: 191,width: 631,
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
					text:'Заказ покупателя',
					width:'100',
				},
			]
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
			style: 'position:absolute;left:3px;top:27px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:4px;top:24px;width:631px;height:191px;',
			height: 191,width: 631,
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
					text:'Содержание услуги, доп. сведения',
					width:'100',
				},
				{
					text:'Количество',
					width:'100',
				},
				{
					text:'Цена',
					width:'98',
				},
				{
					text:'% Руч.ск.',
					width:'61',
				},
				{
					text:'% Авт.ск.',
					width:'57',
				},
				{
					text:'Сумма',
					width:'102',
				},
				{
					text:'% НДС',
					width:'40',
				},
				{
					text:'Сумма НДС',
					width:'100',
				},
				{
					text:'Всего',
					width:'80',
				},
				{
					text:'Заказ покупателя',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:4px;top:0px;width:631px;height:24px;',
			items:
			[
				'-',
				'-',
				{
					text:'Подбор',
				},
			]
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
			style: 'position:absolute;left:101px;top:69px;width:206px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:327px;top:69px;width:103px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:430px;top:69px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:87px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:178px;top:27px;width:129px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактноеЛицо',
			style: 'position:absolute;left:101px;top:113px;width:206px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'напомнить',
			style: 'position:absolute;left:327px;top:113px;width:103px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВремяНапоминания',
			style: 'position:absolute;left:430px;top:113px;width:126px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаказПокупателя',
			style: 'position:absolute;left:101px;top:190px;width:206px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДисконтнаяКарта',
			style: 'position:absolute;left:430px;top:27px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Грузополучатель',
			style: 'position:absolute;left:430px;top:142px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресДоставки',
			style: 'position:absolute;left:101px;top:166px;width:206px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнениеКАдресуДоставки',
			style: 'position:absolute;left:430px;top:166px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Грузоотправитель',
			style: 'position:absolute;left:101px;top:142px;width:206px;height:19px;',
		},
					]
				},
				{
					title:'Автоматические скидки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:627px;height:208px;',
			height: 208,width: 627,
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
					text:'Характеристика номенклатуры',
					width:'100',
				},
				{
					text:'Качество',
					width:'100',
				},
				{
					text:'Процент автоматических скидок',
					width:'100',
				},
				{
					text:'Условие автоматической скидки',
					width:'100',
				},
				{
					text:'Значение условия автоматической скидки',
					width:'100',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорКонтрагента',
			text: 'Договор:',
			style: 'position:absolute;left:334px;top:81px;width:91px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:429px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСклад',
			text: 'Склад:',
			style: 'position:absolute;left:8px;top:129px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:96px;top:129px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьТоварыИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:8px;top:409px;width:460px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьДолга',
			text: 'По договору 250 USD, 1 USD = 30 руб.',
			style: 'position:absolute;left:336px;top:105px;width:293px;height:19px;text-align:right;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:634px;top:105px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:473px;top:409px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:546px;top:409px;width:99px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:473px;top:433px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:546px;top:433px;width:99px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОтгрузки',
			text: 'Отгрузка:',
			style: 'position:absolute;left:8px;top:105px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОплаты',
			text: 'Оплата:',
			style: 'position:absolute;left:176px;top:105px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОплаты',
			style: 'position:absolute;left:236px;top:105px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОтгрузки',
			style: 'position:absolute;left:96px;top:105px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтруктурнаяЕдиница',
			text: 'Б/счет, касса:',
			style: 'position:absolute;left:336px;top:129px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтруктурнаяЕдиница',
			style: 'position:absolute;left:429px;top:129px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:483px;width:657px;height:25px;',
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
			text: 'Отклонение от плановой себест��имости',
			style: 'position:absolute;left:8px;top:433px;width:460px;height:17px;text-align:left;',
		},
	]
});