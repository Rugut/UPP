Ext.define('Документы.НачислениеРасходовМеждународный.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 444,
	iconCls: 'bogus',
	title: 'Начисление расходов (международный)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:428px;height:380px;',
			height: 380,width: 428,
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
			style: 'position:absolute;left:0px;top:0px;width:444px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю2',
				},
			]
		},
	]
});