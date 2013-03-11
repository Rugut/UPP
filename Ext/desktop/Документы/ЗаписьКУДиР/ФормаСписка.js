Ext.define('Документы.ЗаписьКУДиР.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 444,
	iconCls: 'bogus',
	title: 'Запись книги учета доходов и расходов УСН (ручной учет)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:428px;height:280px;',
			height: 280,width: 428,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
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
			style: 'position:absolute;left:0px;top:0px;width:444px;height:25px;',
			items:
			[
				{
					text:'Подменю2',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});