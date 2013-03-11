Ext.define('Документы.ПодготовкаКПередачеОС.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 560,
	iconCls: 'bogus',
	title: 'Подготовка к передаче ОС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:544px;height:380px;',
			height: 380,width: 544,
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
					text:'Ответственный',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:560px;height:25px;',
			items:
			[
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Подменю2',
				},
			]
		},
	]
});