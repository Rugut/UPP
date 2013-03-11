Ext.define('Документы.СчетФактураПолученный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 489,width: 792,
	iconCls: 'bogus',
	title: 'Счет-фактура полученный',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:116px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:216px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:437px;width:686px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:792px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Действие',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ПерезаполнитьДаннымиИзЭД',
				},
				{
					text:'Подменю2',
				},
				{
					text:'СписокЭлектронныхДокументов',
				},
				{
					text:'РазделительЭД',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЭД',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:464px;width:792px;height:25px;',
			items:
			[
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Записать',
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
			name: 'Ответственный',
			style: 'position:absolute;left:98px;top:413px;width:686px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:175px;width:776px;height:143px;',
			height: 143,width: 776,
			items:
			[
				{
					title:'ОдноОснование',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:76px;top:0px;width:417px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:41px;width:776px;height:97px;',
			height: 97,width: 776,
			items:
			[
				{
					title:'ОписаниеВозможностей',
				},
				{
					title:'ДанныеАванс',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:276px;top:32px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДС',
			style: 'position:absolute;left:79px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаСНДС',
			style: 'position:absolute;left:79px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Увеличение',
			style: 'position:absolute;left:79px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НДСУвеличение',
			style: 'position:absolute;left:276px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Уменьшение',
			style: 'position:absolute;left:79px;top:58px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НДСУменьшение',
			style: 'position:absolute;left:276px;top:58px;width:92px;height:19px;',
		},
					]
				},
				{
					title:'ДанныеАвансНесколько',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:30px;width:776px;height:67px;',
			height: 67,width: 776,
			columns:
			[
				{
					text:'НомерСтроки',
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
					]
				},
			]
		},
					]
				},
				{
					title:'НесколькоОснований',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:776px;height:119px;',
			height: 119,width: 776,
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
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:317px;width:776px;height:67px;',
			height: 67,width: 776,
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
			style: 'position:absolute;left:106px;top:19px;width:50px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:387px;width:776px;height:24px;',
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
			style: 'position:absolute;left:40px;top:1px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДСДокумента',
			style: 'position:absolute;left:336px;top:1px;width:105px;height:19px;',
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
			style: 'position:absolute;left:694px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДСУвеличение',
			style: 'position:absolute;left:291px;top:0px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:364px;height:92px;',
			height: 92,width: 364,
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
			style: 'position:absolute;left:107px;top:0px;width:257px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:107px;top:24px;width:257px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:107px;top:49px;width:257px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСчетаФактуры',
			style: 'position:absolute;left:107px;top:73px;width:257px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:379px;top:82px;width:376px;height:44px;',
			height: 44,width: 376,
			items:
			[
				{
					title:'СтраницаКорректировочный',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерИсходногоДокумента',
			style: 'position:absolute;left:172px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИсходногоДокумента',
			style: 'position:absolute;left:285px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерИсправленияИсходногоДокумента',
			style: 'position:absolute;left:172px;top:25px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИсправленияИсходногоДокумента',
			style: 'position:absolute;left:285px;top:25px;width:91px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаОбычный',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:379px;top:32px;width:376px;height:19px;',
			height: 19,width: 376,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерВходящего',
			style: 'position:absolute;left:172px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВходящего',
			style: 'position:absolute;left:286px;top:0px;width:89px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:379px;top:57px;width:376px;height:19px;',
			height: 19,width: 376,
			items:
			[
				{
					title:'СтраницаИсправление',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерИсправления',
			style: 'position:absolute;left:172px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИсправления',
			style: 'position:absolute;left:285px;top:0px;width:91px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаКорректировка',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерИсходногоДокумента3',
			style: 'position:absolute;left:172px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИсходногоДокумента3',
			style: 'position:absolute;left:285px;top:0px;width:91px;height:19px;',
		},
					]
				},
			]
		},
	]
});