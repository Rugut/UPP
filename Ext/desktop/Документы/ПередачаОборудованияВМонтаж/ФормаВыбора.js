Ext.define('Документы.ПередачаОборудованияВМонтаж.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 681,
	iconCls: 'bogus',
	title: 'Передача оборудования в монтаж',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:665px;height:380px;',
			height: 380,width: 665,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ОтражатьВУправленческомУчете',
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
					text:'Организация',
				},
				{
					text:'ОбъектСтроительства',
				},
				{
					text:'Ответственный',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:681px;height:25px;',
			items:
			[
				{
					text:'Подменю2',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
	]
});