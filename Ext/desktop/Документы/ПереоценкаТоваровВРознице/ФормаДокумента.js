Ext.define('Документы.ПереоценкаТоваровВРознице.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 320,width: 652,
	iconCls: 'bogus',
	title: 'Переоценка товаров в рознице',
	
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
			style: 'position:absolute;left:96px;top:268px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Подменю2',
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
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:105px;width:636px;height:134px;',
			height: 134,width: 636,
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
					text:'Количество',
				},
				{
					text:'ЕдиницаХранения',
				},
				{
					text:'ЦенаВРозницеСтарая',
				},
				{
					text:'ЦенаВРознице',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:81px;width:636px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ЗаполнитьПоЦенам',
				},
				{
					text:'ЗаполнитьПоОстаткам',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ПоискПоШтрихКоду',
				},
				{
					text:'ЗаполнитьИзУстановкиЦен',
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
			name: 'Склад',
			style: 'position:absolute;left:408px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:244px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:424px;top:244px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:295px;width:652px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть1',
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
			name: 'ДокументУстановкаЦен',
			style: 'position:absolute;left:408px;top:33px;width:236px;height:19px;',
		},
	]
});