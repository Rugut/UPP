Ext.define('Обработки.ПодборПараметровРасшифровкиПлатежа.ФормаПодбораПланируемыхДвижений',
	{
	extend: 'Ext.window.Window',
	height: 281,width: 780,
	iconCls: 'bogus',
	title: 'Подбор документов планирования движения денежных средств',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:29px;width:306px;height:24px;',
			items:
			[
				{
					text:'Выбрать',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:53px;width:764px;height:220px;',
			height: 220,width: 764,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ДокументПланирования',
				},
				{
					text:'СуммаДокумента',
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
					text:'ДатаДвижения',
				},
				{
					text:'СуммаПлатежа',
				},
				{
					text:'ВалютаВзаиморасчетов',
				},
				{
					text:'КурсВзаиморасчетов',
				},
				{
					text:'СуммаВзаиморасчетов',
				},
				{
					text:'Проект',
				},
				{
					text:'СтатьяДвиженияДенежныхСредств',
				},
				{
					text:'КурсВзаиморасчетовПлан',
				},
			]
		},
	]
});