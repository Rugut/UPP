Ext.define('Документы.ОпределениеФинансовыхРезультатов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 503,
	iconCls: 'bogus',
	title: 'Определение финансовых результатов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:481px;height:380px;',
			height: 380,width: 481,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ОтражатьВБухгалтерскомУчете',
				},
				{
					text:'ОтражатьВНалоговомУчете',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'ПериодРегистрации',
				},
				{
					text:'Организация',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:503px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеПечать',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
	]
});