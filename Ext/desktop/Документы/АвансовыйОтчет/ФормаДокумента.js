Ext.define('Документы.АвансовыйОтчет.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 434,width: 692,
	iconCls: 'bogus',
	title: 'Авансовый отчет',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:110px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:210px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:692px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ВедомостьПоВзаиморасчетам',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель11',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Разделитель13',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Файлы1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:110px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СкладОрдер',
			style: 'position:absolute;left:443px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:109px;width:676px;height:224px;',
			height: 224,width: 676,
			items:
			[
				{
					title:'Авансы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:662px;height:174px;',
			height: 174,width: 662,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ДокументАванса',
				},
				{
					text:'СуммаДокументаАванса',
				},
				{
					text:'ВалютаДокументаАванса',
				},
				{
					text:'Выдано',
				},
				{
					text:'Сумма',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:662px;height:24px;',
			items:
			[
				{
					text:'РаспределитьСуммуПоДокументамАванса',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьПоОстаткам',
				},
				{
					text:'ПодменюЗаполнить',
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
			style: 'position:absolute;left:6px;top:24px;width:662px;height:132px;',
			height: 132,width: 662,
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
					text:'Заказ',
				},
				{
					text:'ВидДокВходящий',
				},
				{
					text:'ДатаВходящегоДокумента',
				},
				{
					text:'НомерВходящегоДокумента',
				},
				{
					text:'ПредъявленСФ',
				},
				{
					text:'Поставщик',
				},
				{
					text:'ДатаСФ',
				},
				{
					text:'НомерСФ',
				},
				{
					text:'СчетФактура',
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
					text:'ОтражениеВУСН',
				},
				{
					text:'СчетУчетаНДС',
				},
				{
					text:'СчетУчетаНУ',
				},
				{
					text:'ПриходныйОрдер',
				},
				{
					text:'Склад',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:662px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДобавитьПоПриходномуОрдеру',
				},
				{
					text:'Проверить',
				},
				{
					text:'ШтрихКоды',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ИзТерминалаСбораДанных',
				},
				{
					text:'ЗаполнитьСчетФактуру',
				},
				{
					text:'СерийныеНомера',
				},
				{
					text:'ЗаполнитьПоПриходномуОрдеру',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:564px;top:161px;width:80px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:564px;top:181px;width:80px;height:17px;',
		},
					]
				},
				{
					title:'Тара',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:662px;height:174px;',
			height: 174,width: 662,
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
					text:'ЕдиницаХранения',
				},
				{
					text:'Сумма',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'Сделка',
				},
				{
					text:'Заказ',
				},
				{
					text:'ВидДокВходящий',
				},
				{
					text:'ДатаВходящегоДокумента',
				},
				{
					text:'НомерВходящегоДокумента',
				},
				{
					text:'СчетУчетаБУ',
				},
				{
					text:'СчетУчетаНУ',
				},
				{
					text:'СчетУчетаТары',
				},
				{
					text:'ПриходныйОрдер',
				},
				{
					text:'Склад',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:656px;height:24px;',
			items:
			[
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
					title:'ОплатаПоставщикам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:662px;height:174px;',
			height: 174,width: 662,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'Сделка',
				},
				{
					text:'ДокументРасчетовСКонтрагентом',
				},
				{
					text:'Проект',
				},
				{
					text:'Сумма',
				},
				{
					text:'КурсВзаиморасчетов',
				},
				{
					text:'КратностьВзаиморасчетов',
				},
				{
					text:'СуммаВзаиморасчетов',
				},
				{
					text:'ВидДокВходящий',
				},
				{
					text:'ДатаВходящегоДокумента',
				},
				{
					text:'НомерВходящегоДокумента',
				},
				{
					text:'Содержание',
				},
				{
					text:'СчетУчетаРасчетовСКонтрагентом',
				},
				{
					text:'СчетУчетаРасчетовПоАвансам',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:662px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Прочее',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:662px;height:174px;',
			height: 174,width: 662,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидДокВходящий',
				},
				{
					text:'ДатаВходящегоДокумента',
				},
				{
					text:'НомерВходящегоДокумента',
				},
				{
					text:'ПредъявленСФ',
				},
				{
					text:'БланкСтрогойОтчетности',
				},
				{
					text:'Поставщик',
				},
				{
					text:'ДатаСФ',
				},
				{
					text:'НомерСФ',
				},
				{
					text:'СчетФактура',
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
					text:'СчетУчетаНДС',
				},
				{
					text:'Подразделение',
				},
				{
					text:'ПодразделениеОрганизации',
				},
				{
					text:'СтатьяЗатрат',
				},
				{
					text:'Заказ',
				},
				{
					text:'СчетЗатрат',
				},
				{
					text:'СчетЗатратНУ',
				},
				{
					text:'ХарактерЗатрат',
				},
				{
					text:'ВидАналитики',
				},
				{
					text:'ВидАналитикиДоп',
				},
				{
					text:'ВидСубконто1',
				},
				{
					text:'ВидСубконто2',
				},
				{
					text:'ВидСубконто3',
				},
				{
					text:'ВидСубконтоНУ1',
				},
				{
					text:'ВидСубконтоНУ2',
				},
				{
					text:'ВидСубконтоНУ3',
				},
				{
					text:'Аналитика',
				},
				{
					text:'НоменклатурнаяГруппа',
				},
				{
					text:'НоменклатурнаяГруппаДоп',
				},
				{
					text:'СпособРаспределенияЗатратНаВыпуск',
				},
				{
					text:'Субконто1',
				},
				{
					text:'Субконто2',
				},
				{
					text:'Субконто3',
				},
				{
					text:'СубконтоНУ1',
				},
				{
					text:'СубконтоНУ2',
				},
				{
					text:'СубконтоНУ3',
				},
				{
					text:'Продукция',
				},
				{
					text:'ХарактеристикаПродукции',
				},
				{
					text:'СерияПродукции',
				},
				{
					text:'ОбъектСтроительства',
				},
				{
					text:'СпособСтроительства',
				},
				{
					text:'ОтражениеВУСН',
				},
				{
					text:'Проект',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:662px;height:24px;',
			items:
			[
				{
					text:'ЗаполнитьСчетФактуру',
				},
				{
					text:'ПодменюЗаполнить',
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
			style: 'position:absolute;left:435px;top:6px;width:228px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:101px;top:31px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:102px;top:6px;width:218px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФизЛицо',
			style: 'position:absolute;left:110px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:382px;width:588px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоПоОтчету',
			style: 'position:absolute;left:575px;top:359px;width:103px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоАвансов',
			style: 'position:absolute;left:575px;top:339px;width:104px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:407px;width:692px;height:27px;',
			items:
			[
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПоступления',
			style: 'position:absolute;left:354px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НазначениеАванса',
			style: 'position:absolute;left:443px;top:81px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоДокументов',
			style: 'position:absolute;left:96px;top:339px;width:50px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЛистов',
			style: 'position:absolute;left:231px;top:339px;width:40px;height:19px;',
		},
	]
});