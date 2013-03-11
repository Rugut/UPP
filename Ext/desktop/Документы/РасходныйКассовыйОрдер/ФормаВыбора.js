Ext.define('Документы.РасходныйКассовыйОрдер.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 780,
	iconCls: 'bogus',
	title: 'Расходные кассовые ордера',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:380px;',
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
					text:'СуммаДокумента',
				},
				{
					text:'ВалютаДокумента',
				},
				{
					text:'Касса',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Организация',
				},
				{
					text:'Подразделение',
				},
				{
					text:'Комментарий',
				},
				{
					text:'Оплачено',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Разделитель8',
				},
				{
					text:'Подменю3',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});