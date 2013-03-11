Ext.define('Документы.ОтчетОРозничныхПродажах.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 457,width: 672,
	iconCls: 'bogus',
	title: 'Отчет о розничных продажах',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:405px;width:570px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:672px;height:25px;',
			items:
			[
				{
					text:'ВыгрузитьВФорматеCommerceMLФайл',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеЗаполнитьИПровести',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLПанель',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLЭлПочтаПанель',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLЭлПочта',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLФайлПанель',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель12',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'ВыгрузитьВФорматеCommerceML',
				},
				{
					text:'Подменю1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:94px;top:357px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:381px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КассаККМ',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:428px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнвентаризацияТоваровНаСкладе',
			style: 'position:absolute;left:428px;top:81px;width:236px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:432px;width:672px;height:25px;',
			items:
			[
				{
					text:'Закрыть1',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств',
			style: 'position:absolute;left:428px;top:381px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:428px;top:356px;width:236px;height:20px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:108px;width:656px;height:244px;',
			height: 244,width: 656,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:642px;height:144px;',
			height: 144,width: 642,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Склад',
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
					text:'СчетДоходовБУ',
				},
				{
					text:'СубконтоБУ',
				},
				{
					text:'СчетРасходовБУ',
				},
				{
					text:'СчетУчетаНУ',
				},
				{
					text:'ПринятыеСчетУчетаНУ',
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
				{
					text:'УсловиеАвтоматическойСкидки',
				},
				{
					text:'ЗначениеУсловияАвтоматическойСкидки',
				},
				{
					text:'ПринадлежностьНоменклатуры',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:642px;height:24px;',
			items:
			[
				{
					text:'СерийныеНомера',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'ШтрихКоды',
				},
				{
					text:'ЗаполнитьПоИнвентаризации',
				},
				{
					text:'ИзТерминалаСбораДанных',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'СоставНабора',
				},
				{
					text:'ДействиеИзменить',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Проверить',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ПоискПоШтрихКоду',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:553px;top:180px;width:95px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:552px;top:201px;width:96px;height:17px;',
		},
					]
				},
				{
					title:'ОплатаПлатежнымиКартами',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:72px;width:642px;height:102px;',
			height: 102,width: 642,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидОплаты',
				},
				{
					text:'Сумма',
				},
				{
					text:'ПроцентТорговойУступки',
				},
				{
					text:'СуммаТорговойУступки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:48px;width:642px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоОплатаПлатежнымиКартами',
			style: 'position:absolute;left:568px;top:180px;width:80px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоТорговаяУступка',
			style: 'position:absolute;left:568px;top:201px;width:80px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорЭквайринга',
			style: 'position:absolute;left:121px;top:6px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСЭквайрером',
			style: 'position:absolute;left:566px;top:6px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'ОплатаБанковскимиКредитами',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:642px;height:144px;',
			height: 144,width: 642,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидОплаты',
				},
				{
					text:'Сумма',
				},
				{
					text:'ПроцентБанковскойКомиссии',
				},
				{
					text:'СуммаБанковскойКомиссии',
				},
				{
					text:'БанкКредитор',
				},
				{
					text:'ДоговорВзаиморасчетовБанкаКредитора',
				},
				{
					text:'СчетУчетаРасчетовСКонтрагентом',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:642px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоОплатаБанковскимиКредитами',
			style: 'position:absolute;left:568px;top:180px;width:80px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоСуммаКомиссии',
			style: 'position:absolute;left:568px;top:201px;width:80px;height:17px;',
		},
					]
				},
				{
					title:'ПродажиПоДисконтнымКартам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:642px;height:188px;',
			height: 188,width: 642,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ДисконтнаяКарта',
				},
				{
					text:'ВладелецДисконтнойКарты',
				},
				{
					text:'Сумма',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:642px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
	]
});