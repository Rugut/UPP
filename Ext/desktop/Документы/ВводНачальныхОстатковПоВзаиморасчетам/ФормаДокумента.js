Ext.define('Документы.ВводНачальныхОстатковПоВзаиморасчетам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 444,width: 723,
	iconCls: 'bogus',
	title: 'Ввод начальных остатков по взаиморасчетам',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:104px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:206px;top:33px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:392px;width:619px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:104px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:723px;height:25px;',
			items:
			[
				{
					text:'Разделитель4',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:419px;width:723px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:104px;width:707px;height:258px;',
			height: 258,width: 707,
			items:
			[
				{
					title:'ДанныеПоРасчетам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:5px;top:30px;width:695px;height:201px;',
			height: 201,width: 695,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'Сделка',
				},
				{
					text:'ДокументРасчетовСКонтрагентом',
				},
				{
					text:'ВалютаВзаиморасчетов',
				},
				{
					text:'СуммаВзаиморасчетов',
				},
				{
					text:'КурсВзаиморасчетов',
				},
				{
					text:'КратностьВзаиморасчетов',
				},
				{
					text:'СуммаУпр',
				},
				{
					text:'СуммаРегл',
				},
				{
					text:'СуммаРеглСУчетомПереоценки',
				},
				{
					text:'СчетУчетаРасчетовСКонтрагентом',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:5px;top:6px;width:695px;height:24px;',
			items:
			[
				{
					text:'ДействиеЗаполнитьПоВзаиморасчетамУСН',
				},
				{
					text:'ЗаполнитьСуммуСУчетомПереоценки',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьНулевуюСуммуСУчетомПереоценки',
				},
				{
					text:'ЗаполнитьДокументыРасчетов',
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
					title:'ДанныеПоАвансам',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:694px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ЗаполнитьНулевуюСуммуСУчетомПереоценки',
				},
				{
					text:'ЗаполнитьСуммуСУчетомПереоценки',
				},
				{
					text:'ДействиеЗаполнитьПоВзаиморасчетамУСН',
				},
				{
					text:'ЗаполнитьДокументыРасчетов',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:694px;height:201px;',
			height: 201,width: 694,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'Сделка',
				},
				{
					text:'ДокументОплаты',
				},
				{
					text:'ВалютаВзаиморасчетов',
				},
				{
					text:'СуммаВзаиморасчетов',
				},
				{
					text:'КурсВзаиморасчетов',
				},
				{
					text:'КратностьВзаиморасчетов',
				},
				{
					text:'СуммаУпр',
				},
				{
					text:'СуммаРегл',
				},
				{
					text:'СуммаРеглСУчетомПереоценки',
				},
				{
					text:'СчетУчетаРасчетовСКонтрагентом',
				},
			]
		},
					]
				},
				{
					title:'РезервыПоСомнительнымДолгам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:65px;width:693px;height:167px;',
			height: 167,width: 693,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'ДокументРасчетовСКонтрагентом',
				},
				{
					text:'СчетУчетаРасчетовСКонтрагентом',
				},
				{
					text:'СуммаБУ',
				},
				{
					text:'СуммаНУ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:41px;width:693px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ЗаполнитьПоСомнительнойЗадолженности',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:693px;height:36px;',
			height: 36,width: 693,
			items:
			[
				{
					title:'СтраницаНадпись',
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
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:368px;width:619px;height:19px;',
		},
	]
});