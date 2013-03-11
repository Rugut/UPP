Ext.define('Документы.ПереоценкаВалютныхСредств.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 680,
	iconCls: 'bogus',
	title: 'Переоценка валютных средств',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:664px;height:380px;',
			height: 380,width: 664,
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
					text:'Подразделение',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:680px;height:25px;',
			items:
			[
				{
					text:'Подменю2',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПроводкиДтКт',
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
				{
					text:'Действие',
				},
				{
					text:'Разделитель7',
				},
			]
		},
	]
});