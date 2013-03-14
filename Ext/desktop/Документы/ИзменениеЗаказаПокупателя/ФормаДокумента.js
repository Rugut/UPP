Ext.define('Документы.ИзменениеЗаказаПокупателя.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:773px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменение заказа покупателя',
	
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
			style: 'position:absolute;left:8px;top:309px;width:88px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:96px;top:309px;width:669px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:773px;height:25px;',
			items:
			[
				{
					text:'Цены и валюта...',
				},
				'-',
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
					text:'Заполнить и провести',
				},
				'-',
				{
					text:'Анализ',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:109px;width:757px;height:152px;',
			height: 152,width: 757,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:743px;height:96px;',
			height: 96,width: 743,
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
					width:'100',
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
					width:'82',
				},
				{
					text:'Сумма без скидок',
					width:'88',
				},
				{
					text:'% Руч.ск.',
					width:'64',
				},
				{
					text:'% Авт.ск.',
					width:'56',
				},
				{
					text:'Сумма',
					width:'114',
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
					text:'Размещение',
					width:'250',
				},
				{
					text:'Себестоимость',
					width:'80',
				},
				{
					text:'Всего себестоимость',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:743px;height:24px;',
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
			style: 'position:absolute;left:6px;top:6px;width:743px;height:24px;',
			items:
			[
				{
					text:'Заполнить по остаткам',
				},
				{
					text:'Скопировать состав заказа',
				},
				'-',
				{
					text:'Очистить размещение',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:743px;height:96px;',
			height: 96,width: 743,
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
					text:'Сумма',
					width:'80',
				},
				{
					text:'Размещение',
					width:'250',
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
			text: 'Сумма:',
			style: 'position:absolute;left:12px;top:30px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:743px;height:96px;',
			height: 96,width: 743,
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
					width:'132',
				},
				{
					text:'Количество',
					width:'64',
				},
				{
					text:'% Руч.ск.',
					width:'72',
				},
				{
					text:'% Авт.ск.',
					width:'100',
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
					width:'60',
				},
				{
					text:'Сумма НДС',
					width:'80',
				},
				{
					text:'Всего',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:743px;height:24px;',
			items:
			[
				{
					text:'Заполнить по остаткам',
				},
				{
					text:'Скопировать состав заказа',
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
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:86px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:412px;top:102px;width:337px;height:19px;',
		},
					]
				},
				{
					title:'Автоматические скидки',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетов',
			text: 'Курс:',
			style: 'position:absolute;left:167px;top:30px;width:57px;height:19px;text-align:center;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:743px;height:120px;',
			height: 120,width: 743,
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
			name: 'ИнфНадписьТоварыИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:8px;top:265px;width:574px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:594px;top:265px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:667px;top:265px;width:98px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказПокупателя',
			text: 'Заказ:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаказПокупателя',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтруктурнаяЕдиница',
			text: 'Б/счет, касса:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:594px;top:285px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:668px;top:285px;width:97px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:336px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаКонтрагента',
			text: 'Контрагент из заказа',
			style: 'position:absolute;left:424px;top:57px;width:341px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:336px;width:773px;height:25px;',
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
			xtype: 'label',
			name: 'ИнфНадписьИтоговоеОтклонениеОтПлановойСебестоимости',
			text: 'Отклонение от плановой себестоимости',
			style: 'position:absolute;left:8px;top:285px;width:575px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражать',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:424px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:500px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:336px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаОрганизации',
			text: 'Организация из заказа',
			style: 'position:absolute;left:424px;top:81px;width:341px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаСтруктурнаяЕдиница',
			text: 'Б/счет, касса из заказа',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
	]
});