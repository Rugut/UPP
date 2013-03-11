Ext.define('Документы.РасчетПоМоделиБюджетирования.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 600,
	iconCls: 'bogus',
	title: 'Расчеты по моделям бюджетирования',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:584px;height:380px;',
			height: 380,width: 584,
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
					text:'ДатаРасчета',
				},
				{
					text:'Сценарий',
				},
				{
					text:'ПересчитыватьРегламентно',
				},
				{
					text:'ИсточникДанныхДляРасчета',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю2',
				},
			]
		},
	]
});