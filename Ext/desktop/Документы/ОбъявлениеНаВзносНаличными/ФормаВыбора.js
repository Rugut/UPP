Ext.define('Документы.ОбъявлениеНаВзносНаличными.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 556,
	iconCls: 'bogus',
	title: 'Объявления на взнос наличными',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:540px;height:380px;',
			height: 380,width: 540,
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
					text:'СуммаДокумента',
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
			style: 'position:absolute;left:0px;top:0px;width:556px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю3',
				},
			]
		},
	]
});