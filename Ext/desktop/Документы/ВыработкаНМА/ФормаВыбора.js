Ext.define('Документы.ВыработкаНМА.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 720,
	iconCls: 'bogus',
	title: 'Выработка НМА',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:704px;height:380px;',
			height: 380,width: 704,
			columns:
			[
				{
					text:'Картинка',
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
					text:'Ответственный',
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
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
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
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю2',
				},
			]
		},
	]
});