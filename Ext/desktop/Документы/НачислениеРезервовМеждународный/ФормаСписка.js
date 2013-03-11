Ext.define('Документы.НачислениеРезервовМеждународный.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 440,
	iconCls: 'bogus',
	title: 'Начисление резервов (международный)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:424px;height:380px;',
			height: 380,width: 424,
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
			style: 'position:absolute;left:0px;top:0px;width:440px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю2',
				},
			]
		},
	]
});