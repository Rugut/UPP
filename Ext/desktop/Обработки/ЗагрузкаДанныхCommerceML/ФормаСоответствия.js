Ext.define('Обработки.ЗагрузкаДанныхCommerceML.ФормаСоответствия',
	{
	extend: 'Ext.window.Window',
	height: 425,width: 664,
	iconCls: 'bogus',
	title: 'Сопоставление объектов из файла и информационной базы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:400px;width:664px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
				},
				{
					text:'Помощь',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ПрименитьСоответствия',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:67px;width:648px;height:326px;',
			height: 326,width: 648,
			items:
			[
				{
					title:'Валюты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:634px;height:268px;',
			height: 268,width: 634,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Валюта',
				},
				{
					text:'НовыйВалюта',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'ПоказатьТолькоНеопределенные',
				},
				{
					text:'СоздатьПоТекущейСтроке',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
					]
				},
				{
					title:'Организации',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:34px;width:634px;height:266px;',
			height: 266,width: 634,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Организация',
				},
				{
					text:'ИНН',
				},
				{
					text:'НовыйОрганизация',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'СоздатьПоТекущейСтроке',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'ПоказатьТолькоНеопределенные',
				},
			]
		},
					]
				},
				{
					title:'Контрагенты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:634px;height:268px;',
			height: 268,width: 634,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ИНН',
				},
				{
					text:'НовыйКонтрагент',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'СоздатьВсе',
				},
				{
					text:'Действие5',
				},
				{
					text:'СоздатьПоТекущейСтроке',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПоказатьТолькоНеопределенные',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель1',
				},
			]
		},
					]
				},
				{
					title:'Банки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:34px;width:634px;height:266px;',
			height: 266,width: 634,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Наименование',
				},
				{
					text:'Банк',
				},
				{
					text:'СчетКорреспондентский',
				},
				{
					text:'Адрес',
				},
				{
					text:'НовыйБанк',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'ПоказатьТолькоНеопределенные',
				},
				{
					text:'Действие4',
				},
				{
					text:'СоздатьПоТекущейСтроке',
				},
				{
					text:'Разделитель1',
				},
			]
		},
					]
				},
				{
					title:'БанковскиеСчета',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:34px;width:634px;height:266px;',
			height: 266,width: 634,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'НомерСчета',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Банк',
				},
				{
					text:'БанкНеПрямыхРасходов',
				},
				{
					text:'НовыйНомерСчета',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'СоздатьПоТекущейСтроке',
				},
				{
					text:'Действие4',
				},
				{
					text:'ПоказатьТолькоНеопределенные',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
					]
				},
				{
					title:'ЕдиницыИзмерения',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:634px;height:268px;',
			height: 268,width: 634,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'НовыйЕдиницаИзмерения',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
				{
					text:'СоздатьВсе',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПоказатьТолькоНеопределенные',
				},
				{
					text:'СоздатьПоТекущейСтроке',
				},
			]
		},
					]
				},
				{
					title:'ВидыНоменклатуры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:34px;width:634px;height:270px;',
			height: 270,width: 634,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидНоменклатуры',
				},
				{
					text:'ТипНоменклатуры',
				},
				{
					text:'НовыйВидНоменклатуры',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПоказатьТолькоНеопределенные',
				},
				{
					text:'СоздатьВсе',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СоздатьПоТекущейСтроке',
				},
			]
		},
					]
				},
				{
					title:'Номенклатура',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ПоказатьТолькоНеопределенные',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СоздатьВсе',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'СоздатьПоТекущейСтроке',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:634px;height:272px;',
			height: 272,width: 634,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Наименование',
				},
				{
					text:'Артикул',
				},
				{
					text:'ШтрихКод',
				},
				{
					text:'БазоваяЕдиницаИзмерения',
				},
				{
					text:'ВидНоменклатуры',
				},
				{
					text:'Ид',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'ИдКаталога',
				},
			]
		},
					]
				},
				{
					title:'Качество',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:634px;height:269px;',
			height: 269,width: 634,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Качество',
				},
				{
					text:'НовыйКачество',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'СоздатьВсе',
				},
				{
					text:'Действие4',
				},
				{
					text:'СоздатьПоТекущейСтроке',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПоказатьТолькоНеопределенные',
				},
			]
		},
					]
				},
				{
					title:'ТипыЦенКонтрагентов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:634px;height:268px;',
			height: 268,width: 634,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТипЦены',
				},
				{
					text:'Ид',
				},
				{
					text:'Валюта',
				},
				{
					text:'НДСВСумме',
				},
				{
					text:'Контрагент',
				},
				{
					text:'НовыйТипЦены',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПоказатьТолькоНеопределенные',
				},
				{
					text:'Действие5',
				},
				{
					text:'СоздатьВсе',
				},
				{
					text:'Действие4',
				},
				{
					text:'СоздатьПоТекущейСтроке',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:6px;width:648px;height:60px;',
			height: 60,width: 648,
			items:
			[
				{
					title:'СтраницаОсновная',
					items:
					[
					]
				},
			]
		},
	]
});