Ext.define('Документы.КорректировкаРеализации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:672px;height:485px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировка реализации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:178px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:433px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:433px;width:574px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:672px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:428px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:506px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:128px;width:656px;height:257px;',
			height: 257,width: 656,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:642px;height:207px;',
			height: 207,width: 642,
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
					width:'180',
				},
				{
					text:'Характеристика номенклатуры',
					width:'180',
				},
				{
					text:'Серия номенклатуры',
					width:'180',
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
					width:'67',
				},
				{
					text:'Ед.',
					width:'40',
				},
				{
					text:'К.',
					width:'45',
				},
				{
					text:'Количество до корректировки',
					width:'100',
				},
				{
					text:'Количество до изменения',
					width:'100',
				},
				{
					text:'Количество',
					width:'100',
				},
				{
					text:'Цена до корректировки',
					width:'100',
				},
				{
					text:'Цена до изменения',
					width:'100',
				},
				{
					text:'Цена',
					width:'100',
				},
				{
					text:'Сумма до корректировки',
					width:'100',
				},
				{
					text:'Сумма до изменения',
					width:'100',
				},
				{
					text:'Сумма',
					width:'100',
				},
				{
					text:'% НДС до изменения',
					width:'100',
				},
				{
					text:'% НДС',
					width:'100',
				},
				{
					text:'Сумма НДС до корректировки',
					width:'100',
				},
				{
					text:'Сумма НДС до изменения',
					width:'100',
				},
				{
					text:'Сумма НДС',
					width:'100',
				},
				{
					text:'Всего до корректировки',
					width:'100',
				},
				{
					text:'Всего до изменения',
					width:'100',
				},
				{
					text:'Всего',
					width:'100',
				},
				{
					text:'Способ списания',
					width:'100',
				},
				{
					text:'Склад',
					width:'100',
				},
				{
					text:'Заказ покупателя',
					width:'101',
				},
				{
					text:'Принадлежность номенклатуры',
					width:'99',
				},
				{
					text:'Качество',
					width:'100',
				},
				{
					text:'Номер ГТД',
					width:'100',
				},
				{
					text:'Страна происхождения',
					width:'100',
				},
				{
					text:'Собственные, счет учета (БУ)',
					width:'100',
				},
				{
					text:'Принятые, счет учета (БУ)',
					width:'100',
				},
				{
					text:'Переданные, собственные (БУ)',
					width:'100',
				},
				{
					text:'Переданные, принятые (БУ)',
					width:'100',
				},
				{
					text:'Счет учета (НУ)',
					width:'100',
				},
				{
					text:'Принятые счет учета (НУ)',
					width:'100',
				},
				{
					text:'Переданные, собственные (НУ)',
					width:'100',
				},
				{
					text:'Переданные принятые (НУ)',
					width:'100',
				},
				{
					text:'Счет доходов (БУ)',
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
					text:'Счет доходов (НУ)',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:642px;height:24px;',
			items:
			[
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
					text:'Состав набора',
				},
				'-',
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
			style: 'position:absolute;left:6px;top:24px;width:642px;height:207px;',
			height: 207,width: 642,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Номенклатура',
					width:'180',
				},
				{
					text:'Содержание до изменения',
					width:'150',
				},
				{
					text:'Содержание услуги, доп. сведения',
					width:'150',
				},
				{
					text:'Количество до корректировки',
					width:'100',
				},
				{
					text:'Количество до изменения',
					width:'100',
				},
				{
					text:'Количество',
					width:'100',
				},
				{
					text:'Цена до корректировки',
					width:'100',
				},
				{
					text:'Цена до изменения',
					width:'100',
				},
				{
					text:'Цена',
					width:'100',
				},
				{
					text:'Сумма до корректировки',
					width:'100',
				},
				{
					text:'Сумма до изменения',
					width:'100',
				},
				{
					text:'Сумма',
					width:'100',
				},
				{
					text:'% НДС до изменения',
					width:'100',
				},
				{
					text:'% НДС',
					width:'100',
				},
				{
					text:'Сумма НДС до корректировки',
					width:'100',
				},
				{
					text:'Сумма НДС до изменения',
					width:'100',
				},
				{
					text:'Сумма НДС',
					width:'100',
				},
				{
					text:'Всего до корректировки',
					width:'100',
				},
				{
					text:'Всего до изменения',
					width:'100',
				},
				{
					text:'Всего',
					width:'100',
				},
				{
					text:'Заказ покупателя',
					width:'100',
				},
				{
					text:'Счет доходов (БУ)',
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
					text:'Счет доходов (НУ)',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:642px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяПрочихДоходовИРасходов',
			text: 'Статья прочих доходов и расходов:',
			style: 'position:absolute;left:6px;top:6px;width:107px;height:27px;',
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
			name: 'Ответственный',
			style: 'position:absolute;left:114px;top:180px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:99px;top:59px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БанковскийСчетОрганизации',
			style: 'position:absolute;left:114px;top:155px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГрузоотправительДополнительно',
			style: 'position:absolute;left:114px;top:130px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГрузополучательДополнительно',
			style: 'position:absolute;left:430px;top:130px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяПрочихДоходовИРасходов',
			style: 'position:absolute;left:113px;top:6px;width:535px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресДоставки',
			style: 'position:absolute;left:114px;top:105px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнениеКАдресуДоставки',
			style: 'position:absolute;left:430px;top:105px;width:218px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:338px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактура',
			text: 'Счет-фактура:',
			style: 'position:absolute;left:8px;top:388px;width:80px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаСчетФактура',
			text: 'Ввести счет-фактуру',
			style: 'position:absolute;left:90px;top:388px;width:373px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:470px;top:388px;width:72px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:542px;top:388px;width:122px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:470px;top:410px;width:72px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:542px;top:410px;width:122px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:460px;width:672px;height:25px;',
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
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:584px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Упр. и регл. учет',
			style: 'position:absolute;left:428px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Только НДС',
			style: 'position:absolute;left:428px;top:81px;width:236px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Корректировать',
			text: 'Корректировать:',
			style: 'position:absolute;left:338px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументРеализации',
			text: 'Основание:',
			style: 'position:absolute;left:8px;top:82px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументРеализации',
			style: 'position:absolute;left:98px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Бухгалтерский учет прошлого года закрыт для корректировки (отчетность подписана)',
			style: 'position:absolute;left:98px;top:104px;width:566px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаИсправляемыйДокументРеализации',
			text: 'Не указан',
			style: 'position:absolute;left:147px;top:410px;width:316px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'ИсправляемыйДокументРеализацииНадпись',
			text: 'Исправляемый документ:',
			style: 'position:absolute;left:8px;top:410px;width:137px;height:17px;',
		},
	]
});