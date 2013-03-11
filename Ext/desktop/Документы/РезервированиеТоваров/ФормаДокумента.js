Ext.define('Документы.РезервированиеТоваров.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 345,width: 652,
	iconCls: 'bogus',
	title: 'Документ Резервирование товаров',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:293px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'ДействиеЗаполнитьИПровести',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Подменю3',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:108px;width:636px;height:175px;',
			height: 175,width: 636,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:622px;height:118px;',
			height: 118,width: 622,
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
					text:'ИсходноеРазмещение',
				},
				{
					text:'НовоеРазмещение',
				},
				{
					text:'СерияНоменклатуры',
				},
				{
					text:'ИсходныйСчетУчетаБУ',
				},
				{
					text:'ПринятыеИсходныйСчетУчетаБУ',
				},
				{
					text:'ИсходныйСчетУчетаНУ',
				},
				{
					text:'ПринятыеИсходныйСчетУчетаНУ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ЗаполнитьПоОстаткам',
				},
				{
					text:'РазместитьПоКомплектующим',
				},
				{
					text:'ПоискПоШтрихКоду',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОчиститьРазмещение',
				},
				{
					text:'ПодменюЗаполнить',
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
					title:'Тара',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				{
					text:'ПодменюЗаполнить',
				},
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
					text:'ЗаполнитьПоОстаткам',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеПодбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:622px;height:117px;',
			height: 117,width: 622,
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
					text:'ЕдиницаХранения',
				},
				{
					text:'ИсходноеРазмещение',
				},
				{
					text:'НовоеРазмещение',
				},
				{
					text:'ИсходныйСчетУчетаБУ',
				},
				{
					text:'ИсходныйСчетУчетаНУ',
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
			style: 'position:absolute;left:91px;top:29px;width:214px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:396px;top:29px;width:232px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:320px;width:652px;height:25px;',
			items:
			[
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'Записать',
				},
				{
					text:'Печать',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Заказ',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
	]
});