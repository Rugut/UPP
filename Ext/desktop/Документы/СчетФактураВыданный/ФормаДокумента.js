Ext.define('Документы.СчетФактураВыданный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 582,width: 804,
	iconCls: 'bogus',
	title: 'Счет-фактура выданный',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:115px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:804px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLФайлПанель',
				},
				{
					text:'ПодписатьИОтправить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLПанель',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLЭлПочта',
				},
				{
					text:'Действие',
				},
				{
					text:'ВыгрузитьВФорматеCommerceML',
				},
				{
					text:'ЭД',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СписокЭлектронныхДокументов',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Подменю',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLЭлПочтаПанель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СформироватьНовый',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLФайл',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'РазделительЭД',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:557px;width:804px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительЗаписать',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:215px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:461px;top:55px;width:337px;height:85px;',
			height: 85,width: 337,
			items:
			[
				{
					title:'СтраницаКорректировочныйИсправленный',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерИсходногоДокумента',
			style: 'position:absolute;left:133px;top:44px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИсходногоДокумента',
			style: 'position:absolute;left:246px;top:44px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерИсправленияИсходногоДокумента',
			style: 'position:absolute;left:133px;top:66px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИсправленияИсходногоДокумента',
			style: 'position:absolute;left:246px;top:66px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерИсправляемогоКорректировочногоДокумента',
			style: 'position:absolute;left:133px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИсправляемогоКорректировочногоДокумента',
			style: 'position:absolute;left:246px;top:0px;width:91px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаКорректировочный',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерИсходногоДокумента3',
			style: 'position:absolute;left:132px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИсходногоДокумента3',
			style: 'position:absolute;left:246px;top:0px;width:91px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаОбычный',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеКомитент',
			style: 'position:absolute;left:74px;top:66px;width:263px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаИсправленный',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерИсходногоДокументаИсправление',
			style: 'position:absolute;left:132px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИсходногоДокументаИсправление',
			style: 'position:absolute;left:246px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комитент',
			style: 'position:absolute;left:74px;top:66px;width:263px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:461px;top:32px;width:337px;height:19px;',
			height: 19,width: 337,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерИсправления',
			style: 'position:absolute;left:132px;top:0px;width:91px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:55px;width:433px;height:85px;',
			height: 85,width: 433,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:106px;top:0px;width:327px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:106px;top:22px;width:327px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:106px;top:44px;width:327px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСчетаФактуры',
			style: 'position:absolute;left:106px;top:66px;width:327px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:149px;width:790px;height:401px;',
			height: 401,width: 790,
			items:
			[
				{
					title:'Основное',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:776px;height:241px;',
			height: 241,width: 776,
			items:
			[
				{
					title:'НаРеализацию',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:44px;width:776px;height:64px;',
			height: 64,width: 776,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ДокументОснование',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:173px;width:776px;height:62px;',
			height: 62,width: 776,
			columns:
			[
				{
					text:'ДатаПлатежноРасчетногоДокумента',
				},
				{
					text:'НомерПлатежноРасчетногоДокумента',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:20px;width:776px;height:24px;',
			items:
			[
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:149px;width:776px;height:24px;',
			items:
			[
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
					]
				},
				{
					title:'НаАванс',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснованиеНаАванс',
			style: 'position:absolute;left:0px;top:20px;width:494px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:89px;width:776px;height:98px;',
			height: 98,width: 776,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'Содержание',
				},
				{
					text:'Сумма',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'СуммаНДС',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПРДокументаНаАванс',
			style: 'position:absolute;left:167px;top:215px;width:269px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПРДокументаНаАванс',
			style: 'position:absolute;left:40px;top:215px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:65px;width:776px;height:24px;',
			items:
			[
				{
					text:'ПоСчетуНаОплату',
				},
				{
					text:'ПоОснованию',
				},
				{
					text:'ПоЗаказу',
				},
				{
					text:'ПоЗаказуДобавить',
				},
				{
					text:'ПоСчетуНаОплатуДобавить',
				},
				{
					text:'Заполнить',
				},
			]
		},
					]
				},
				{
					title:'НаСуммовуюРазницу',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснованиеНаСуммовуюРазницу',
			style: 'position:absolute;left:0px;top:20px;width:494px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПРДокументаНаСуммовуюРазницу',
			style: 'position:absolute;left:167px;top:118px;width:269px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПРДокументаНаСуммовуюРазницу',
			style: 'position:absolute;left:40px;top:118px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:282px;top:44px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сумма',
			style: 'position:absolute;left:79px;top:44px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДС',
			style: 'position:absolute;left:79px;top:74px;width:120px;height:19px;',
		},
					]
				},
				{
					title:'НалоговыйАгент',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснованиеНалоговыйАгент',
			style: 'position:absolute;left:0px;top:20px;width:494px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:89px;width:776px;height:98px;',
			height: 98,width: 776,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'Содержание',
				},
				{
					text:'Сумма',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'СуммаНДС',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПРДокументаНалоговыйАгент',
			style: 'position:absolute;left:167px;top:218px;width:269px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПРДокументаНалоговыйАгент',
			style: 'position:absolute;left:40px;top:218px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:65px;width:776px;height:24px;',
			items:
			[
				{
					text:'ПоОснованию',
				},
				{
					text:'Заполнить',
				},
			]
		},
					]
				},
				{
					title:'Корректировочный',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:44px;width:776px;height:177px;',
			height: 177,width: 776,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ДокументОснование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:20px;width:776px;height:24px;',
			items:
			[
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:351px;width:776px;height:24px;',
			height: 24,width: 776,
			items:
			[
				{
					title:'СтраницаВсего',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДокумента',
			style: 'position:absolute;left:40px;top:0px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДСДокумента',
			style: 'position:absolute;left:328px;top:0px;width:108px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаУвеличениеУменьшение',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаУвеличение',
			style: 'position:absolute;left:72px;top:0px;width:95px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаУменьшение',
			style: 'position:absolute;left:475px;top:0px;width:95px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДСУменьшение',
			style: 'position:absolute;left:694px;top:0px;width:69px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДСУвеличение',
			style: 'position:absolute;left:291px;top:0px;width:69px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:252px;width:776px;height:92px;',
			height: 92,width: 776,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодВидаОперации',
			style: 'position:absolute;left:113px;top:20px;width:50px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыставления',
			style: 'position:absolute;left:314px;top:47px;width:91px;height:19px;',
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
			name: 'Комментарий',
			style: 'position:absolute;left:97px;top:338px;width:685px;height:37px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:114px;top:6px;width:668px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:114px;top:30px;width:668px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГлавныйБухгалтер',
			style: 'position:absolute;left:114px;top:54px;width:668px;height:19px;',
		},
					]
				},
			]
		},
	]
});