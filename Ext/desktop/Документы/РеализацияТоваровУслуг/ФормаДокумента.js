Ext.define('Документы.РеализацияТоваровУслуг.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 488,width: 676,
	iconCls: 'bogus',
	title: 'Реализация товаров и услуг',
	
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
			style: 'position:absolute;left:90px;top:436px;width:574px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:676px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ОткрытьФормуНастройкиБланкаТоварногоНаполнения',
				},
				{
					text:'Разделитель11',
				},
				{
					text:'СписокЭлектронныхДокументов',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLЭлПочта',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеЗаполнитьИПровести',
				},
				{
					text:'Подменю3',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLФайл',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'РазделительЭД',
				},
				{
					text:'ВыгрузитьВФорматеCommerceML',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLЭлПочтаПанель',
				},
				{
					text:'Действие',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель12',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СформироватьНовый',
				},
				{
					text:'ДействиеСоздатьПакетДокументовСОткрытиемФормы',
				},
				{
					text:'ПодписатьИОтправить',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'ЭД',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLПанель',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLФайлПанель',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ОформитьДокументы',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:128px;width:660px;height:262px;',
			height: 262,width: 660,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:646px;height:212px;',
			height: 212,width: 646,
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
					text:'Единица',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'СуммаБезСкидок',
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
					text:'СпособСписанияОстаткаТоваров',
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
				{
					text:'Качество',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:646px;height:24px;',
			items:
			[
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьПоПриходномуОрдеру',
				},
				{
					text:'ДействиеИзменить',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДействиеЗаполнитьПоЗаказу',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Проверить',
				},
				{
					text:'СерийныеНомера',
				},
				{
					text:'ШтрихКоды',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СоставНабора',
				},
				{
					text:'ДействиеОтобратьИЗаполнитьПоЗаказам',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'ИзТерминалаСбораДанных',
				},
				{
					text:'ПоискПоШтрихКоду',
				},
				{
					text:'Разделитель2',
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
			style: 'position:absolute;left:6px;top:0px;width:646px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ДействиеОтобратьИЗаполнитьПоЗаказам',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'ЗаполнитьПоПоступлению',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеЗаполнитьПоЗаказу',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:646px;height:212px;',
			height: 212,width: 646,
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
					text:'СпособСписанияОстаткаТоваров',
				},
				{
					text:'СчетУчетаБУ',
				},
				{
					text:'СчетУчетаНУ',
				},
				{
					text:'Склад',
				},
				{
					text:'ЗаказПокупателя',
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
			style: 'position:absolute;left:6px;top:24px;width:646px;height:212px;',
			height: 212,width: 646,
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
				{
					text:'ЗаказПокупателя',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:646px;height:24px;',
			items:
			[
				{
					text:'ДействиеЗаполнитьПоЗаказу',
				},
				{
					text:'ДействиеОтобратьИЗаполнитьПоЗаказам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеПодбор',
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
			name: 'Подразделение',
			style: 'position:absolute;left:121px;top:48px;width:194px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:433px;top:48px;width:215px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:99px;top:26px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БанковскийСчетОрганизации',
			style: 'position:absolute;left:121px;top:71px;width:194px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДисконтнаяКарта',
			style: 'position:absolute;left:433px;top:25px;width:215px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:433px;top:71px;width:215px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГрузоотправительДополнительно',
			style: 'position:absolute;left:121px;top:94px;width:194px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГрузополучательДополнительно',
			style: 'position:absolute;left:433px;top:94px;width:215px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресДоставки',
			style: 'position:absolute;left:121px;top:117px;width:527px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнениеКАдресуДоставки',
			style: 'position:absolute;left:121px;top:140px;width:527px;height:19px;',
		},
					]
				},
				{
					title:'СчетаУчета',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентом',
			style: 'position:absolute;left:194px;top:7px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоАвансам',
			style: 'position:absolute;left:546px;top:7px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоТаре',
			style: 'position:absolute;left:194px;top:104px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаДоходовПоТареБУ',
			style: 'position:absolute;left:194px;top:57px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасходовПоТареБУ',
			style: 'position:absolute;left:194px;top:81px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаДоходовПоТареНУ',
			style: 'position:absolute;left:546px;top:57px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасходовПоТареНУ',
			style: 'position:absolute;left:546px;top:81px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяПрочихДоходовРасходовПоТаре',
			style: 'position:absolute;left:546px;top:105px;width:100px;height:19px;',
		},
					]
				},
				{
					title:'АвтоматическиеСкидки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:646px;height:230px;',
			height: 230,width: 646,
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
				{
					title:'Печать',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтпускРазрешил',
			style: 'position:absolute;left:107px;top:26px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтпускПроизвел',
			style: 'position:absolute;left:107px;top:74px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверенностьВыдана',
			style: 'position:absolute;left:107px;top:145px;width:541px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверенностьЧерезКого',
			style: 'position:absolute;left:107px;top:169px;width:541px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверенностьНомер',
			style: 'position:absolute;left:107px;top:121px;width:115px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверенностьДата',
			style: 'position:absolute;left:246px;top:121px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаРуководителяПоПриказу',
			style: 'position:absolute;left:107px;top:50px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГлавныйБухгалтер',
			style: 'position:absolute;left:437px;top:26px;width:215px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаГлавногоБухгалтераПоПриказу',
			style: 'position:absolute;left:437px;top:50px;width:215px;height:19px;',
		},
					]
				},
				{
					title:'ДокументыРасчетовСКонтрагентом',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:646px;height:143px;',
			height: 143,width: 646,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Сделка',
				},
				{
					text:'ДокументРасчетовСКонтрагентом',
				},
				{
					text:'ДатаОплаты',
				},
				{
					text:'СуммаВзаиморасчетов',
				},
				{
					text:'СуммаРегл',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:646px;height:24px;',
			items:
			[
				{
					text:'ЗаполнитьТолькоПоЗаказу',
				},
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоДокументуВал',
			style: 'position:absolute;left:120px;top:173px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоДокументуРегл',
			style: 'position:absolute;left:277px;top:173px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредоплатаВал',
			style: 'position:absolute;left:121px;top:196px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредоплатаРегл',
			style: 'position:absolute;left:278px;top:196px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокРегл',
			style: 'position:absolute;left:278px;top:219px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокВал',
			style: 'position:absolute;left:121px;top:219px;width:134px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:428px;top:81px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:98px;top:81px;width:220px;height:19px;',
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
			name: 'Сделка',
			style: 'position:absolute;left:98px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:428px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:649px;top:105px;width:15px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:542px;top:392px;width:122px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:542px;top:414px;width:122px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:463px;width:676px;height:25px;',
			items:
			[
				{
					text:'Закрыть1',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Печать',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительЗаписать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПередачи',
			style: 'position:absolute;left:338px;top:57px;width:88px;height:19px;',
		},
	]
});