Ext.define('Документы.ФормированиеПотребностей.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 650,
	iconCls: 'bogus',
	title: 'Формирование потребностей',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:88px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:188px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'РежимВыбораДатПериодом',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:650px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:59px;width:634px;height:332px;',
			height: 332,width: 634,
			items:
			[
				{
					title:'ПланыПродаж',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Сценарий',
				},
				{
					text:'Проект',
				},
				{
					text:'Подразделение',
				},
				{
					text:'ДатаНач',
				},
				{
					text:'ДатаКон',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'ПланыПроизводства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Сценарий',
				},
				{
					text:'Проект',
				},
				{
					text:'Подразделение',
				},
				{
					text:'ДатаНач',
				},
				{
					text:'ДатаКон',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'ПланыЗакупок',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Сценарий',
				},
				{
					text:'Проект',
				},
				{
					text:'Подразделение',
				},
				{
					text:'ДатаНач',
				},
				{
					text:'ДатаКон',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'ВнутренниеЗаказы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Заказ',
				},
				{
					text:'ДатаПотребности',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:24px;',
			items:
			[
				{
					text:'ЗаполнитьВнутреннимиЗаказами',
				},
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
			]
		},
					]
				},
				{
					title:'ЗаказыПокупателей',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Заказ',
				},
				{
					text:'ДатаПотребности',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:24px;',
			items:
			[
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Подбор',
				},
				{
					text:'ЗаполнитьЗаказамиПокупателей',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
					]
				},
				{
					title:'ЗаказыНаПроизводство',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Заказ',
				},
				{
					text:'ДатаПотребности',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьЗаказамиНаПроизводство',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Подбор',
				},
				{
					text:'Разделитель1',
				},
			]
		},
					]
				},
				{
					title:'ПланыПосменные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Проект',
				},
				{
					text:'Заказ',
				},
				{
					text:'ДатаНач',
				},
				{
					text:'ДатаКон',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Потребности',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:620px;height:276px;',
			height: 276,width: 620,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ДатаПотребности',
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
					text:'Количество',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'ТоварТара',
				},
				{
					text:'КонечнаяПродукция',
				},
				{
					text:'Заказ',
				},
				{
					text:'Проект',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:620px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие11',
				},
				{
					text:'ЗаполнитьПотребности',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
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
			style: 'position:absolute;left:86px;top:74px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:407px;top:74px;width:219px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:95px;top:398px;width:547px;height:19px;',
		},
	]
});