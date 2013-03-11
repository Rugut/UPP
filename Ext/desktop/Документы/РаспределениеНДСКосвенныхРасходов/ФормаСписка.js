Ext.define('Документы.РаспределениеНДСКосвенныхРасходов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 536,
	iconCls: 'bogus',
	title: 'Распределения НДС косвенных расходов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:520px;height:280px;',
			height: 280,width: 520,
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:536px;height:25px;',
			items:
			[
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеПечать',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель7',
				},
			]
		},
	]
});