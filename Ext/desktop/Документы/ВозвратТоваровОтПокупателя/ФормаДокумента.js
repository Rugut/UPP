Ext.define('Документы.ВозвратТоваровОтПокупателя.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 440,width: 661,
	iconCls: 'bogus',
	title: 'Возврат товаров от покупателя',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:388px;width:563px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:661px;height:25px;',
			items:
			[
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'Разделитель13',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'ПараметрыЭлектронногоОбменаДокументами',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОткрытьФормуНастройкиБланкаТоварногоНаполнения',
				},
				{
					text:'Подменю3',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПроводкиДтКт',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:136px;width:645px;height:204px;',
			height: 204,width: 645,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:631px;height:154px;',
			height: 154,width: 631,
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
					text:'Цена',
				},
				{
					text:'ПроцентСкидкиНаценки',
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
					text:'ДокументПартии',
				},
				{
					text:'Себестоимость',
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
					text:'ПереданныеСобственныеБУ',
				},
				{
					text:'ПринятыеСчетУчетаБУ',
				},
				{
					text:'ПереданныеПринятыеБУ',
				},
				{
					text:'СчетУчетаНУ',
				},
				{
					text:'ПереданныеСобственныеНУ',
				},
				{
					text:'ПринятыеСчетУчетаНУ',
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
					text:'ПроцентАвтоматическихСкидок',
				},
				{
					text:'УсловиеАвтоматическойСкидки',
				},
				{
					text:'ЗначениеУсловияАвтоматическойСкидки',
				},
				{
					text:'ПриходныйОрдер',
				},
				{
					text:'Склад',
				},
				{
					text:'ОтражениеВУСН',
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
			style: 'position:absolute;left:6px;top:0px;width:631px;height:24px;',
			items:
			[
				{
					text:'ИзТерминалаСбораДанных',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ПоискПоШтрихКоду',
				},
				{
					text:'ЗаполнитьПоЗаказуПокупателя',
				},
				{
					text:'ДействиеИзменить',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьНереализованнымиТоварамиПоДоговору',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ЗаполнитьПоПриходномуОрдеру',
				},
				{
					text:'ЗаполнитьНереализованнымиТоварамиПоДокументу',
				},
				{
					text:'ДобавитьПоЗаказуПокупателя',
				},
				{
					text:'Проверить',
				},
				{
					text:'ДобавитьИзРеализации',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'ШтрихКоды',
				},
				{
					text:'ЗаполнитьПоРеализации',
				},
				{
					text:'СоставНабора',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'СерийныеНомера',
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
			style: 'position:absolute;left:6px;top:0px;width:631px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ЗаполнитьПоРеализации',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ДобавитьПоЗаказуПокупателя',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'ЗаполнитьПоЗаказуПокупателя',
				},
				{
					text:'ЗаполнитьПоПриходномуОрдеру',
				},
				{
					text:'ДобавитьИзРеализации',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:631px;height:154px;',
			height: 154,width: 631,
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
					text:'СчетУчетаБУ',
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
				{
					text:'ЗаказПокупателя',
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
			style: 'position:absolute;left:95px;top:75px;width:208px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:431px;top:75px;width:206px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:91px;top:29px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:95px;top:99px;width:208px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДисконтнаяКарта',
			style: 'position:absolute;left:431px;top:29px;width:206px;height:19px;',
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
			style: 'position:absolute;left:198px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоАвансам',
			style: 'position:absolute;left:198px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоТаре',
			style: 'position:absolute;left:198px;top:52px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'ДокументыРасчетовСКонтрагентом',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:7px;top:27px;width:630px;height:151px;',
			height: 151,width: 630,
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
			style: 'position:absolute;left:8px;top:1px;width:628px;height:26px;',
			items:
			[
				{
					text:'ДействиеЗаполнитьДокументыРасчетовСКонтрагентом',
				},
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
					]
				},
				{
					title:'НДС',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтразитьВКнигеПокупок',
			style: 'position:absolute;left:108px;top:30px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаНДС',
			style: 'position:absolute;left:108px;top:55px;width:96px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:418px;top:81px;width:235px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:90px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:90px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СкладОрдер',
			style: 'position:absolute;left:418px;top:57px;width:235px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:638px;top:105px;width:15px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:550px;top:344px;width:99px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:549px;top:366px;width:100px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:415px;width:661px;height:25px;',
			items:
			[
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
					text:'ОК',
				},
				{
					text:'РазделительОК',
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
			name: 'ВидПоступления',
			style: 'position:absolute;left:330px;top:57px;width:86px;height:19px;',
		},
	]
});