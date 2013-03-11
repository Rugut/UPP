Ext.define('Документы.ПереоценкаТоваровПринятыхНаКомиссию.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 552,
	iconCls: 'bogus',
	title: 'Переоценки товаров принятых на комиссию',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:536px;height:380px;',
			height: 380,width: 536,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ОтражатьВУправленческомУчете',
				},
				{
					text:'ОтражатьВБухгалтерскомУчете',
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
					text:'ДоговорКонтрагента',
				},
				{
					text:'Организация',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:552px;height:25px;',
			items:
			[
				{
					text:'Подменю3',
				},
				{
					text:'Действие',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});