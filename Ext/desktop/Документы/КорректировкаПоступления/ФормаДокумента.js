Ext.define('Документы.КорректировкаПоступления.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 478,width: 671,
	iconCls: 'bogus',
	title: 'Корректировка поступления',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:426px;width:569px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:671px;height:25px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие4',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие7',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель11',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:655px;height:250px;',
			height: 250,width: 655,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:641px;height:200px;',
			height: 200,width: 641,
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
					text:'КоличествоДоКорректировки',
				},
				{
					text:'КоличествоДоИзменения',
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
					text:'ЗаказПоставщику',
				},
				{
					text:'Заказ',
				},
				{
					text:'СтранаПроисхождения',
				},
				{
					text:'НомерГТД',
				},
				{
					text:'Склад',
				},
				{
					text:'РеализованоВПрошлыеМесяцы',
				},
				{
					text:'РеализованоВПрошлыеГоды',
				},
				{
					text:'ДокументПартии',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:641px;height:24px;',
			items:
			[
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'СерийныеНомера',
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
			style: 'position:absolute;left:6px;top:24px;width:641px;height:200px;',
			height: 200,width: 641,
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
					text:'Подразделение',
				},
				{
					text:'ПодразделениеОрганизации',
				},
				{
					text:'ЗаказПоставщику',
				},
				{
					text:'Заказ',
				},
				{
					text:'СтатьяЗатрат',
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
					text:'СчетУчетаНДС',
				},
				{
					text:'Проект',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:641px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
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
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:119px;top:184px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерВходящегоДокумента',
			style: 'position:absolute;left:119px;top:112px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВходящегоДокумента',
			style: 'position:absolute;left:450px;top:112px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Грузоотправитель',
			style: 'position:absolute;left:119px;top:136px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Грузополучатель',
			style: 'position:absolute;left:119px;top:160px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяПрочихДоходовИРасходов',
			style: 'position:absolute;left:119px;top:7px;width:528px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:119px;top:63px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БанковскийСчетКонтрагента',
			style: 'position:absolute;left:450px;top:136px;width:197px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:540px;top:359px;width:116px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:540px;top:380px;width:116px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:453px;width:671px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Закрыть1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПоступления',
			style: 'position:absolute;left:94px;top:80px;width:220px;height:19px;',
		},
	]
});