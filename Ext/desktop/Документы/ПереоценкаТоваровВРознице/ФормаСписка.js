Ext.define('Документы.ПереоценкаТоваровВРознице.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 780,
	iconCls: 'bogus',
	title: 'Переоценки товаров в рознице',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'ДействиеПечать',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель13',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель',
				},
			]
		},
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
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'ПометкаУдаления',
				},
				{
					text:'ОтражатьВУправленческомУчете',
				},
				{
					text:'ВидОперации',
				},
				{
					text:'Подразделение',
				},
				{
					text:'СкладКомпании',
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
	]
});