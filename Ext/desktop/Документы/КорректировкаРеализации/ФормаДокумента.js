Ext.define('Документы.КорректировкаРеализации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 485,width: 672,
	iconCls: 'bogus',
	title: 'Корректировка реализации',
	
	items:
	[
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
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Подменю3',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
			]
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
					text:'СерияНоменклатуры',
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
					text:'Единица',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'КоличествоДоКорректировки',
				},
				{
					text:'КоличествоДоИзменения',
				},
				{
					text:'Количество',
				},
				{
					text:'ЦенаДоКорректировки',
				},
				{
					text:'ЦенаДоИзменения',
				},
				{
					text:'Цена',
				},
				{
					text:'СуммаДоКорректировки',
				},
				{
					text:'СуммаДоИзменения',
				},
				{
					text:'Сумма',
				},
				{
					text:'СтавкаНДСДоИзменения',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'СуммаНДСДоКорректировки',
				},
				{
					text:'СуммаНДСДоИзменения',
				},
				{
					text:'СуммаНДС',
				},
				{
					text:'ВсегоДоКорректировки',
				},
				{
					text:'ВсегоДоИзменения',
				},
				{
					text:'Всего',
				},
				{
					text:'СпособСписанияОстаткаТоваров',
				},
				{
					text:'Склад',
				},
				{
					text:'ЗаказПокупателя',
				},
				{
					text:'ПринадлежностьНоменклатуры',
				},
				{
					text:'Качество',
				},
				{
					text:'НомерГТД',
				},
				{
					text:'СтранаПроисхождения',
				},
				{
					text:'СчетУчетаБУ',
				},
				{
					text:'ПринятыеСчетУчетаБУ',
				},
				{
					text:'ПереданныеСобственныеБУ',
				},
				{
					text:'ПереданныеПринятыеБУ',
				},
				{
					text:'СчетУчетаНУ',
				},
				{
					text:'ПринятыеСчетУчетаНУ',
				},
				{
					text:'ПереданныеСобственныеНУ',
				},
				{
					text:'ПереданныеПринятыеНУ',
				},
				{
					text:'СчетДоходовБУ',
				},
				{
					text:'СубконтоБУ',
				},
				{
					text:'СчетРасходовБУ',
				},
				{
					text:'СчетДоходовНУ',
				},
				{
					text:'СубконтоНУ',
				},
				{
					text:'СчетРасходовНУ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:642px;height:24px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'СерийныеНомера',
				},
				{
					text:'СоставНабора',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'Разделитель5',
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
			style: 'position:absolute;left:6px;top:24px;width:642px;height:207px;',
			height: 207,width: 642,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'СодержаниеДоИзменения',
				},
				{
					text:'Содержание',
				},
				{
					text:'КоличествоДоКорректировки',
				},
				{
					text:'КоличествоДоИзменения',
				},
				{
					text:'Количество',
				},
				{
					text:'ЦенаДоКорректировки',
				},
				{
					text:'ЦенаДоИзменения',
				},
				{
					text:'Цена',
				},
				{
					text:'СуммаДоКорректировки',
				},
				{
					text:'СуммаДоИзменения',
				},
				{
					text:'Сумма',
				},
				{
					text:'СтавкаНДСДоИзменения',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'СуммаНДСДоКорректировки',
				},
				{
					text:'СуммаНДСДоИзменения',
				},
				{
					text:'СуммаНДС',
				},
				{
					text:'ВсегоДоКорректировки',
				},
				{
					text:'ВсегоДоИзменения',
				},
				{
					text:'Всего',
				},
				{
					text:'ЗаказПокупателя',
				},
				{
					text:'СчетДоходовБУ',
				},
				{
					text:'СубконтоБУ',
				},
				{
					text:'СчетРасходовБУ',
				},
				{
					text:'СчетДоходовНУ',
				},
				{
					text:'СубконтоНУ',
				},
				{
					text:'СчетРасходовНУ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:642px;height:24px;',
			items:
			[
				{
					text:'ДействиеПодбор',
				},
				{
					text:'Разделитель1',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:542px;top:388px;width:122px;height:17px;',
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
				{
					text:'Записать',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'РазделительЗаписать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументРеализации',
			style: 'position:absolute;left:98px;top:82px;width:220px;height:19px;',
		},
	]
});