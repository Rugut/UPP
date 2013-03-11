Ext.define('Документы.ПередачаТоваров.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 420,width: 780,
	iconCls: 'bogus',
	title: 'Передачи товаров',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:764px;height:380px;',
			height: 380,width: 764,
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
					text:'ВидОперации',
				},
				{
					text:'ВидПередачи',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Заказ',
				},
				{
					text:'Склад',
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
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Подменю3',
				},
				{
					text:'ДействиеПечать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
			]
		},
	]
});