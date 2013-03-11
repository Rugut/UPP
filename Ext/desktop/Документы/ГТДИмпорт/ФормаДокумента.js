Ext.define('Документы.ГТДИмпорт.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 434,width: 667,
	iconCls: 'bogus',
	title: 'ГТД по импорту',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:382px;width:568px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:667px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель12',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:116px;width:651px;height:258px;',
			height: 258,width: 651,
			items:
			[
				{
					title:'Основные',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерГТД',
			style: 'position:absolute;left:92px;top:6px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТаможенныйСборВал',
			style: 'position:absolute;left:168px;top:59px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТаможенныйШтрафВал',
			style: 'position:absolute;left:168px;top:113px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТаможенныйСбор',
			style: 'position:absolute;left:168px;top:86px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТаможенныйШтраф',
			style: 'position:absolute;left:168px;top:137px;width:83px;height:19px;',
		},
					]
				},
				{
					title:'РазделыГТД',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:107px;width:636px;height:24px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'ПодменюРазделы',
				},
				{
					text:'ПоискПоШтрихКоду',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Распределить',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'УдалитьРаздел',
				},
				{
					text:'ДобавитьИзПоступления',
				},
				{
					text:'ДобавитьИзПоступленияНТТ',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДобавитьРаздел',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:131px;width:636px;height:76px;',
			height: 76,width: 636,
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
					text:'ЕдиницаИзмерения',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'ФактурнаяСтоимость',
				},
				{
					text:'СуммаПошлины',
				},
				{
					text:'СуммаНДС',
				},
				{
					text:'ДокументПартии',
				},
				{
					text:'ЗаказПокупателя',
				},
				{
					text:'СтранаПроисхождения',
				},
				{
					text:'НомерРаздела',
				},
				{
					text:'СчетУчетаБУ',
				},
				{
					text:'СчетУчетаНДС',
				},
				{
					text:'СчетУчетаНУ',
				},
				{
					text:'СтатьяЗатратНУ',
				},
				{
					text:'ПодразделениеОрганизации',
				},
				{
					text:'СтатусПартии',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:218px;top:212px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоПошлина',
			style: 'position:absolute;left:405px;top:212px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:562px;top:212px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:636px;height:88px;',
			height: 88,width: 636,
			items:
			[
				{
					title:'НесколькоРазделов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:636px;height:80px;',
			height: 80,width: 636,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТаможеннаяСтоимостьВВалютеРеглУчета',
				},
				{
					text:'ТаможеннаяСтоимость',
				},
				{
					text:'ПошлинаВВалюте',
				},
				{
					text:'СтавкаПошлины',
				},
				{
					text:'СуммаПошлины',
				},
				{
					text:'НДСВВалюте',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'СуммаНДС',
				},
				{
					text:'НДСВВалюте',
				},
			]
		},
					]
				},
				{
					title:'ОдинРаздел',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаПошлины',
			style: 'position:absolute;left:241px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТаможеннаяСтоимость',
			style: 'position:absolute;left:445px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:241px;top:54px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДС',
			style: 'position:absolute;left:445px;top:54px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПошлины',
			style: 'position:absolute;left:445px;top:27px;width:120px;height:19px;',
		},
					]
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
			style: 'position:absolute;left:92px;top:6px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:414px;top:6px;width:228px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:92px;top:30px;width:210px;height:19px;',
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
			style: 'position:absolute;left:242px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяПрочихДоходовРасходов',
			style: 'position:absolute;left:563px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасходовБУ',
			style: 'position:absolute;left:242px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасходовНУ',
			style: 'position:absolute;left:242px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентомВал',
			style: 'position:absolute;left:242px;top:123px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасходовБУВал',
			style: 'position:absolute;left:242px;top:147px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасходовНУВал',
			style: 'position:absolute;left:242px;top:171px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяПрочихДоходовРасходовВал',
			style: 'position:absolute;left:563px;top:171px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:422px;top:57px;width:237px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:408px;width:667px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Закрыть1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагентаРегл',
			style: 'position:absolute;left:422px;top:81px;width:237px;height:19px;',
		},
	]
});