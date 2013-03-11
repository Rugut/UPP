Ext.define('Документы.ОбесценениеАктивовМеждународный.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 448,
	iconCls: 'bogus',
	title: 'Обесценение активов (международный)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:432px;height:380px;',
			height: 380,width: 432,
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
			style: 'position:absolute;left:0px;top:0px;width:448px;height:25px;',
			items:
			[
				{
					text:'Подменю2',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
	]
});