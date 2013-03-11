Ext.define('Обработки.Планирование.ФормаРедактированиеСоставаПлана',
	{
	extend: 'Ext.window.Window',
	height: 350,width: 700,
	iconCls: 'bogus',
	title: 'Редактирование состава плана',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:325px;width:700px;height:25px;',
			items:
			[
				{
					text:'РазделительОК',
				},
				{
					text:'РазделительЗаписать',
				},
				{
					text:'ОсновныеДействияОК',
				},
				{
					text:'Записать',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:684px;height:309px;',
			height: 309,width: 684,
			items:
			[
				{
					title:'СоставПлана',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:670px;height:253px;',
			height: 253,width: 670,
			columns:
			[
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'РаспределяемоеКоличество',
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
					text:'Заказ',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Договор',
				},
				{
					text:'Спецификация',
				},
				{
					text:'ВариантРаспределения',
				},
				{
					text:'Источник',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:670px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'ПроизводственнаяПрограмма',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:670px;height:24px;',
			items:
			[
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ЗаполнитьПоСоставуПлана',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:670px;height:253px;',
			height: 253,width: 670,
			columns:
			[
				{
					text:'Период',
				},
				{
					text:'Подразделение',
				},
				{
					text:'РабочийЦентр',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'Заказ',
				},
				{
					text:'Количество',
				},
				{
					text:'Источник',
				},
				{
					text:'Спецификация',
				},
				{
					text:'ТочкаМаршрута',
				},
				{
					text:'ВидВоспроизводства',
				},
				{
					text:'ВариантРаспределения',
				},
				{
					text:'Идентификатор',
				},
				{
					text:'ИдентификаторИсточник',
				},
			]
		},
					]
				},
			]
		},
	]
});