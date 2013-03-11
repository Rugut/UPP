Ext.define('Обработки.ПодборПараметровРасшифровкиПлатежа.ФормаПодбораЗадолженностей',
	{
	extend: 'Ext.window.Window',
	height: 354,width: 780,
	iconCls: 'bogus',
	title: 'Обработка  Подбор задолженности для платежа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:51px;width:764px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:75px;width:764px;height:220px;',
			height: 220,width: 764,
			columns:
			[
				{
					text:'ВидВзаиморасчетов',
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
					text:'КурсВзаиморасчетов',
				},
				{
					text:'СуммаВзаиморасчетов',
				},
				{
					text:'СуммаПлатежа',
				},
				{
					text:'ДатаВозникновения',
				},
			]
		},
	]
});