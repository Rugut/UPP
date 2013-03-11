Ext.define('Документы.ЗаказПоставщику.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 490,width: 821,
	iconCls: 'bogus',
	title: 'Документ Заказ поставщику',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:113px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:223px;top:33px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:441px;width:719px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:821px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеЗаполнитьИПровести',
				},
				{
					text:'Действие',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLПанель',
				},
				{
					text:'ПодписатьИОтправить',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель13',
				},
				{
					text:'Файлы1',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLЭлПочта',
				},
				{
					text:'Разделитель12',
				},
				{
					text:'Разделитель11',
				},
				{
					text:'СформироватьНовый',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLЭлПочтаПанель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РазделительЭД',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLФайлПанель',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'ПерезаполнитьДаннымиИзЭД',
				},
				{
					text:'ЭД',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ВыгрузитьВФорматеCommerceML',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'СписокЭлектронныхДокументов',
				},
				{
					text:'Подменю3',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLФайл',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:153px;width:807px;height:243px;',
			height: 243,width: 807,
			items:
			[
				{
					title:'Оборудование',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:793px;height:24px;',
			items:
			[
				{
					text:'Подбор',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:793px;height:187px;',
			height: 187,width: 793,
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
					text:'ЕдиницаИзмеренияМест',
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
					]
				},
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:793px;height:187px;',
			height: 187,width: 793,
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
					text:'Заказ',
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
			style: 'position:absolute;left:6px;top:6px;width:793px;height:24px;',
			items:
			[
				{
					text:'ЗаполнитьПоЗаказуПокупателя',
				},
				{
					text:'ДобавитьПоВнутреннемуЗаказу',
				},
				{
					text:'ЗаполнитьПоЗаказуНаПроизводство',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ЗаполнитьПоВнутреннемуЗаказу',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьПоВнутреннемуЗаказуКомплектующие',
				},
				{
					text:'ЗаполнитьПотребностями',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеИзменить',
				},
				{
					text:'ЗаполнитьПоЗаказуПокупателяКомплектующие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ДобавитьПоЗаказуНаПроизводство',
				},
				{
					text:'ДобавитьПоЗаказуПокупателя',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'ДобавитьПоВнутреннемуЗаказуКомплектующие',
				},
				{
					text:'ПоискПоШтрихКоду',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Действие9',
				},
				{
					text:'ДобавитьПоЗаказуПокупателяКомплектующие',
				},
				{
					text:'ДобавитьПотребности',
				},
				{
					text:'Разделитель1',
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
			style: 'position:absolute;left:6px;top:30px;width:793px;height:187px;',
			height: 187,width: 793,
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
					text:'Сумма',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:793px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Подбор',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ЗаполнитьПоСпецификации',
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
			style: 'position:absolute;left:6px;top:30px;width:793px;height:187px;',
			height: 187,width: 793,
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
			style: 'position:absolute;left:6px;top:6px;width:793px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеПодбор',
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
			style: 'position:absolute;left:6px;top:6px;width:793px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДобавитьПоВнутреннемуЗаказу',
				},
				{
					text:'ЗаполнитьПоЗаказуПокупателя',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Действие',
				},
				{
					text:'ЗаполнитьПоВнутреннемуЗаказу',
				},
				{
					text:'ДобавитьПоЗаказуПокупателя',
				},
				{
					text:'ЗаполнитьПотребностями',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДобавитьПотребности',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:793px;height:187px;',
			height: 187,width: 793,
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
					text:'ЕдиницаХранения',
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
					text:'Заказ',
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
			style: 'position:absolute;left:116px;top:64px;width:267px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:522px;top:64px;width:277px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:116px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактноеЛицо',
			style: 'position:absolute;left:116px;top:107px;width:267px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВремяНапоминания',
			style: 'position:absolute;left:522px;top:107px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:116px;top:131px;width:267px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПоДаннымПоставщика',
			style: 'position:absolute;left:522px;top:174px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПоДаннымПоставщика',
			style: 'position:absolute;left:522px;top:198px;width:140px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:530px;top:81px;width:285px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:113px;top:81px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:57px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:113px;top:129px;width:303px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:800px;top:105px;width:15px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:730px;top:399px;width:80px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:730px;top:420px;width:80px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтруктурнаяЕдиница',
			style: 'position:absolute;left:530px;top:129px;width:285px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОплаты',
			style: 'position:absolute;left:266px;top:105px;width:95px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПоступления',
			style: 'position:absolute;left:113px;top:105px;width:95px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:465px;width:821px;height:25px;',
			items:
			[
				{
					text:'РазделительОК',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Печать',
				},
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:465px;width:821px;height:25px;',
			items:
			[
				{
					text:'ЗарегистрироватьИЗакрыть',
				},
				{
					text:'РазделительЗакрыть1',
				},
				{
					text:'Закрыть',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Зарегистрировать',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:821px;height:25px;',
			items:
			[
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'ДействиеПерейти',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель13',
				},
			]
		},
	]
});