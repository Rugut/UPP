Ext.define('Документы.ИзменениеЗаказаПокупателя.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 773,
	iconCls: 'bogus',
	title: 'Изменение заказа покупателя',
	
	items:
	[
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
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеЗаполнитьИПровести',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Разделитель10',
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
					text:'НомерСтроки',
				},
				{
					text:'Код',
				},
				{
					text:'Артикул',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'ЕдиницаМест',
				},
				{
					text:'КоэффициентМест',
				},
				{
					text:'КоличествоМест',
				},
				{
					text:'Количество',
				},
				{
					text:'Единица',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'Цена',
				},
				{
					text:'СуммаБезСкидок',
				},
				{
					text:'ПроцентСкидкиНаценки',
				},
				{
					text:'ПроцентАвтоматическихСкидок',
				},
				{
					text:'Сумма',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'СуммаНДС',
				},
				{
					text:'Всего',
				},
				{
					text:'Размещение',
				},
				{
					text:'ПлановаяСебестоимость',
				},
				{
					text:'СуммаПлановойСебестоимости',
				},
				{
					text:'СуммаОтклоненияОтСуммыПлановойСебестоимости',
				},
				{
					text:'ПроцентОтклоненияОтСуммыПлановойСебестоимости',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:743px;height:24px;',
			items:
			[
				{
					text:'ДействиеОчиститьРазмещение',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ПоискПоШтрихКоду',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СкопироватьСостав',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьПоОстаткам',
				},
			]
		},
					]
				},
				{
					title:'Тара',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:743px;height:24px;',
			items:
			[
				{
					text:'ДействиеОчиститьРазмещение',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СкопироватьСостав',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ЗаполнитьПоОстаткам',
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
					text:'НомерСтроки',
				},
				{
					text:'Код',
				},
				{
					text:'Артикул',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'Количество',
				},
				{
					text:'Цена',
				},
				{
					text:'Сумма',
				},
				{
					text:'Размещение',
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
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:743px;height:96px;',
			height: 96,width: 743,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'Содержание',
				},
				{
					text:'Количество',
				},
				{
					text:'ПроцентСкидкиНаценки',
				},
				{
					text:'ПроцентАвтоматическихСкидок',
				},
				{
					text:'Цена',
				},
				{
					text:'Сумма',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'СуммаНДС',
				},
				{
					text:'Всего',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:743px;height:24px;',
			items:
			[
				{
					text:'ЗаполнитьПоОстаткам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'СкопироватьСостав',
				},
				{
					text:'Разделитель',
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
					title:'АвтоматическиеСкидки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:743px;height:120px;',
			height: 120,width: 743,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'Качество',
				},
				{
					text:'ПроцентАвтоматическихСкидок',
				},
				{
					text:'УсловиеАвтоматическойСкидки',
				},
				{
					text:'ЗначениеУсловияАвтоматическойСкидки',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:667px;top:265px;width:98px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаказПокупателя',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:668px;top:285px;width:97px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:336px;width:773px;height:25px;',
			items:
			[
				{
					text:'РазделительОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Записать',
				},
				{
					text:'Печать',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'ОК',
				},
			]
		},
	]
});