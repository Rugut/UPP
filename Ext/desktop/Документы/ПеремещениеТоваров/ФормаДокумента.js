Ext.define('Документы.ПеремещениеТоваров.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 416,width: 652,
	iconCls: 'bogus',
	title: 'Перемещение товаров',
	
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
			style: 'position:absolute;left:87px;top:365px;width:557px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'ОткрытьФормуНастройкиБланкаТоварногоНаполнения',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'ДействиеЗаполнитьИПровести',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель7',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:636px;height:233px;',
			height: 233,width: 636,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:177px;',
			height: 177,width: 622,
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
					text:'ДокументРезерва',
				},
				{
					text:'ВнутреннийЗаказ',
				},
				{
					text:'СчетУчетаБУ',
				},
				{
					text:'НовыйСчетУчетаБУ',
				},
				{
					text:'СчетУчетаНУ',
				},
				{
					text:'НовыйСчетУчетаНУ',
				},
				{
					text:'ПринятыеСчетУчетаБУ',
				},
				{
					text:'ПринятыеСчетУчетаНУ',
				},
				{
					text:'НовыйПринятыеСчетУчетаБУ',
				},
				{
					text:'НовыйПринятыеСчетУчетаНУ',
				},
				{
					text:'Качество',
				},
				{
					text:'ПринадлежностьНоменклатуры',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'ПоискПоШтрихКоду',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ШтрихКоды',
				},
				{
					text:'Проверить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ЗаполнитПоОстаткамПриРаспределенииПоСкладам',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьОстаткамиПоСкладуОтправителю',
				},
				{
					text:'ДобавитьПоВнутреннемуЗаказу',
				},
				{
					text:'ИзТерминалаСбораДанных',
				},
				{
					text:'Переоценка',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
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
					text:'ЗаполнитьЦенуНТТ',
				},
				{
					text:'ДействиеИзменить',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ЗаполнитьПоВнутреннемуЗаказу',
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
					text:'ЗаполнитьПоВнутреннемуЗаказу',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДобавитьПоВнутреннемуЗаказу',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:177px;',
			height: 177,width: 622,
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
					text:'ДокументРезерва',
				},
				{
					text:'ВнутреннийЗаказ',
				},
				{
					text:'СчетУчетаБУ',
				},
				{
					text:'НовыйСчетУчетаБУ',
				},
				{
					text:'СчетУчетаНУ',
				},
				{
					text:'НовыйСчетУчетаНУ',
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
			name: 'НДСвСтоимостиТоваров',
			style: 'position:absolute;left:100px;top:6px;width:209px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:107px;width:304px;height:100px;',
			height: 100,width: 304,
			items:
			[
				{
					title:'Счет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияНДС',
			style: 'position:absolute;left:94px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС1',
			style: 'position:absolute;left:94px;top:24px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС2',
			style: 'position:absolute;left:94px;top:48px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС3',
			style: 'position:absolute;left:94px;top:71px;width:210px;height:19px;',
		},
					]
				},
				{
					title:'Надпись',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:324px;top:107px;width:304px;height:100px;',
			height: 100,width: 304,
			items:
			[
				{
					title:'Счет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияНДСНУ',
			style: 'position:absolute;left:93px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ1',
			style: 'position:absolute;left:93px;top:24px;width:211px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ2',
			style: 'position:absolute;left:93px;top:48px;width:211px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ3',
			style: 'position:absolute;left:93px;top:71px;width:211px;height:19px;',
		},
					]
				},
				{
					title:'Надпись',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяЗатратСписанияНДС',
			style: 'position:absolute;left:100px;top:82px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатурнаяГруппа',
			style: 'position:absolute;left:416px;top:82px;width:212px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:100px;top:57px;width:210px;height:19px;',
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
			style: 'position:absolute;left:98px;top:50px;width:209px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:415px;top:50px;width:213px;height:19px;',
		},
					]
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
			name: 'СкладОтправитель',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СкладПолучатель',
			style: 'position:absolute;left:406px;top:81px;width:238px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:391px;width:652px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВнутреннийЗаказ',
			style: 'position:absolute;left:406px;top:57px;width:238px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:564px;top:342px;width:80px;height:17px;',
		},
	]
});