Ext.define('Документы.КорректировкаСерийИХарактеристикТоваров.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 301,width: 652,
	iconCls: 'bogus',
	title: 'Корректировка Серий и Характеристик товаров',
	
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
			style: 'position:absolute;left:96px;top:249px;width:548px;height:19px;',
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
					text:'ДействиеЗаполнитьИПровести',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Разделитель9',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:109px;width:636px;height:108px;',
			height: 108,width: 636,
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
					text:'ХарактеристикаНоменклатурыСтарая',
				},
				{
					text:'СерияНоменклатурыСтарая',
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
					text:'ХарактеристикаНоменклатурыНовая',
				},
				{
					text:'СерияНоменклатурыНовая',
				},
				{
					text:'НомерГТДСтарый',
				},
				{
					text:'СтранаПроисхожденияСтарая',
				},
				{
					text:'СчетУчетаБУ',
				},
				{
					text:'СчетУчетаНУ',
				},
				{
					text:'Качество',
				},
				{
					text:'НомерГТДНовый',
				},
				{
					text:'СтранаПроисхожденияНовая',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:85px;width:636px;height:24px;',
			items:
			[
				{
					text:'ДобавитьИзПриходногоОрдера',
				},
				{
					text:'ДобавитьИзПоступления',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьПоПриходномуОрдеру',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ЗаполнитьПоПоступлению',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПоискПоШтрихКоду',
				},
				{
					text:'ДействиеПодбор',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:96px;top:225px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:424px;top:225px;width:220px;height:19px;',
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
			style: 'position:absolute;left:408px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:276px;width:652px;height:25px;',
			items:
			[
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Записать',
				},
				{
					text:'Печать',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительОК',
				},
			]
		},
	]
});