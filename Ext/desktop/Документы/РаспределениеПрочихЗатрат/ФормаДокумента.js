Ext.define('Документы.РаспределениеПрочихЗатрат.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 416,width: 652,
	iconCls: 'bogus',
	title: 'Распределение прочих затрат',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Настройка',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:391px;width:652px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:210px;top:33px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
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
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:353px;width:548px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:135px;width:636px;height:186px;',
			height: 186,width: 636,
			items:
			[
				{
					title:'Продукция',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьПоНормативам',
				},
				{
					text:'Действие9',
				},
				{
					text:'Подбор',
				},
				{
					text:'ЗаполнитьПоВыпускуНаработка',
				},
				{
					text:'Заполнить1',
				},
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:622px;height:130px;',
			height: 130,width: 622,
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
					text:'ВидВыпуска',
				},
				{
					text:'Заказ',
				},
				{
					text:'Спецификация',
				},
				{
					text:'НоменклатурнаяГруппа',
				},
				{
					text:'Количество',
				},
				{
					text:'СчетЗатрат',
				},
				{
					text:'СчетЗатратНУ',
				},
			]
		},
					]
				},
				{
					title:'ПрочиеЗатраты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:622px;height:130px;',
			height: 130,width: 622,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'СтатьяЗатрат',
				},
				{
					text:'СпособРаспределенияЗатратНаВыпуск',
				},
				{
					text:'ВидВыпуска',
				},
				{
					text:'Заказ',
				},
				{
					text:'НоменклатурнаяГруппа',
				},
				{
					text:'Сумма',
				},
				{
					text:'СуммаРегл',
				},
				{
					text:'СуммаНал',
				},
				{
					text:'СчетЗатрат',
				},
				{
					text:'СчетЗатратНУ',
				},
				{
					text:'ПодразделениеНЗП',
				},
				{
					text:'ПодразделениеОрганизацииНЗП',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:25px;',
			items:
			[
				{
					text:'Действие9',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Заполнить',
				},
				{
					text:'ЗаполнитьПоИнвентаризации',
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
					title:'РаспределениеПрочихЗатрат',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:622px;height:130px;',
			height: 130,width: 622,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'СтатьяЗатрат',
				},
				{
					text:'СпособРаспределенияЗатратНаВыпуск',
				},
				{
					text:'НоменклатурнаяГруппаНЗП',
				},
				{
					text:'ЗаказНЗП',
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
					text:'ВидВыпуска',
				},
				{
					text:'НоменклатурнаяГруппа',
				},
				{
					text:'Спецификация',
				},
				{
					text:'Заказ',
				},
				{
					text:'Сумма',
				},
				{
					text:'СуммаРегл',
				},
				{
					text:'СуммаНал',
				},
				{
					text:'СчетЗатрат',
				},
				{
					text:'СчетЗатратНУ',
				},
				{
					text:'ПодразделениеНЗП',
				},
				{
					text:'ПодразделениеОрганизацииНЗП',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:25px;',
			items:
			[
				{
					text:'Действие9',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Заполнить',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаПериода',
			style: 'position:absolute;left:96px;top:57px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:424px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:329px;width:548px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументИнвентаризация',
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПериода',
			style: 'position:absolute;left:210px;top:57px;width:106px;height:19px;',
		},
	]
});