Ext.define('Документы.ПоступлениеНМАМеждународный.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 528,
	iconCls: 'bogus',
	title: 'Поступление НМА (международный)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:512px;height:380px;',
			height: 380,width: 512,
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
			style: 'position:absolute;left:0px;top:0px;width:528px;height:25px;',
			items:
			[
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});