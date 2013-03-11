Ext.define('Обработки.ЗагрузкаДанныхCommerceML.Форма',
	{
	extend: 'Ext.window.Window',
	height: 491,width: 664,
	iconCls: 'bogus',
	title: 'Загрузка данных в формате CommerceML',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
			items:
			[
				{
					text:'Настройки',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ПрочитатьДанные',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ОткрытьСоответствияОбъектов',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:210px;width:648px;height:250px;',
			height: 250,width: 648,
			items:
			[
				{
					title:'Каталог',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:648px;height:226px;',
			height: 226,width: 648,
			columns:
			[
				{
					text:'Номенклатура',
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
					text:'Ид',
				},
				{
					text:'ИдДокумента',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:648px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
			]
		},
					]
				},
				{
					title:'Прайс',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:648px;height:226px;',
			height: 226,width: 648,
			columns:
			[
				{
					text:'Номенклатура',
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
					text:'Ид',
				},
				{
					text:'ТипЦены',
				},
				{
					text:'Цена',
				},
				{
					text:'Валюта',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'ИдДокумента',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:648px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
			]
		},
					]
				},
				{
					title:'Документ',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:648px;height:226px;',
			height: 226,width: 648,
			columns:
			[
				{
					text:'Номенклатура',
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
					text:'Ид',
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
					text:'Цена',
				},
				{
					text:'Сумма',
				},
				{
					text:'ИдДокумента',
				},
				{
					text:'СуммаСтарая',
				},
				{
					text:'ЦенаПоступления',
				},
				{
					text:'СуммаПоступления',
				},
				{
					text:'СуммаВознаграждения',
				},
				{
					text:'СуммаНДСВознаграждения',
				},
				{
					text:'Качество',
				},
				{
					text:'СтавкаНДС',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:648px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
			]
		},
					]
				},
				{
					title:'СчетФактура',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:29px;width:636px;height:215px;',
			height: 215,width: 636,
			columns:
			[
				{
					text:'НомерОснования',
				},
				{
					text:'ДатаОснования',
				},
				{
					text:'ДокументОснования',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:636px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:105px;width:648px;height:96px;',
			height: 96,width: 648,
			columns:
			[
				{
					text:'ВидДокумента',
				},
				{
					text:'Документ',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Организация',
				},
				{
					text:'Валюта',
				},
				{
					text:'Ид',
				},
				{
					text:'УникальныйИдентификаторДокумента',
				},
				{
					text:'СрокПлатежа',
				},
				{
					text:'НомерСчета',
				},
				{
					text:'Банк',
				},
				{
					text:'БанкСчетКорреспондентский',
				},
				{
					text:'БанкНаименование',
				},
				{
					text:'БанкАдрес',
				},
				{
					text:'БанкНЕПрямыхРасходов',
				},
				{
					text:'БанкНЕПрямыхРасходовСчетКорреспондентский',
				},
				{
					text:'БанкНЕПрямыхРасходовНаименование',
				},
				{
					text:'БанкНЕПрямыхРасходовАдрес',
				},
				{
					text:'Комментарий',
				},
				{
					text:'НомерДокументаОснования',
				},
				{
					text:'ДатаДокументаОснования',
				},
				{
					text:'ДокументОснования',
				},
				{
					text:'СпособРасчетаКомиссионногоВознаграждения',
				},
				{
					text:'УдержатьКомиссионноеВознаграждение',
				},
				{
					text:'СуммаВознаграждения',
				},
				{
					text:'СтавкаНДСВознаграждения',
				},
				{
					text:'ПроцентКомиссионногоВознаграждения',
				},
				{
					text:'КонтрагентПокупатель',
				},
				{
					text:'КонтрагентПоставщик',
				},
				{
					text:'РольКонтрагента',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:81px;width:648px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'УстановитьФлажки1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие8',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Действие7',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:648px;height:19px;',
			height: 19,width: 648,
			items:
			[
				{
					title:'СтраницаФайла',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаДанных',
			style: 'position:absolute;left:114px;top:0px;width:534px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаПериода',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:190px;top:0px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:334px;top:0px;width:110px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:451px;top:0px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ПометитьОбработанныеПисьмаКакПрочтенные',
			text: 'Пометить прочтение',
			style: 'position:absolute;left:508px;top:0px;width:140px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:466px;width:664px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'СохранитьДанные',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});