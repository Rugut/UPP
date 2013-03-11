Ext.define('Документы.СписаниеНЗП.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 420,width: 780,
	iconCls: 'bogus',
	title: 'Списания незавершенного производства',
	
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
					text:'Подразделение',
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
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеПечать',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПроводкиДтКтНУ',
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