Ext.define('Документы.КорректировкаЗаказаПокупателя.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 773,
	iconCls: 'bogus',
	title: 'Корректировка заказа покупателя',
	
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
					text:'Разделитель6',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'Подменю1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ДействиеЗаполнитьИПровести',
				},
				{
					text:'ПересчитатьСкидки',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Разделитель1',
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
					text:'Спецификация',
				},
				{
					text:'Размещение',
				},
				{
					text:'СерияНоменклатуры',
				},
				{
					text:'СчетУчетаБУ',
				},
				{
					text:'ПринятыеСчетУчетаБУ',
				},
				{
					text:'СчетУчетаНУ',
				},
				{
					text:'ПринятыеСчетУчетаНУ',
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
					text:'ДействиеПодбор',
				},
				{
					text:'ПоискПоШтрихКоду',
				},
				{
					text:'СкопироватьСостав',
				},
				{
					text:'ЗаполнитьПоОстаткам',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'РазделительПересчетСкидок',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОчиститьРазмещение',
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
					text:'ДействиеПодбор',
				},
				{
					text:'ДействиеОчиститьРазмещение',
				},
				{
					text:'ЗаполнитьПоОстаткам',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
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
				{
					text:'СчетУчетаБУ',
				},
				{
					text:'СчетУчетаНУ',
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
					text:'СкопироватьСостав',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'Разделитель',
				},
			]
		},
					]
				},
				{
					title:'Материалы',
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
					text:'ЕдиницаИзмерения',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'Цена',
				},
				{
					text:'Сумма',
				},
				{
					text:'ХарактеристикаНоменклатуры',
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
					text:'ЗаполнитьПоСпецификации',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'СкопироватьСостав',
				},
				{
					text:'Подбор',
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
					text:'РазделительЗакрыть',
				},
				{
					text:'Печать',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'Закрыть1',
				},
			]
		},
	]
});