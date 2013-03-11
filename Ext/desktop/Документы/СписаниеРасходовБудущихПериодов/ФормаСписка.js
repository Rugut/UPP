Ext.define('Документы.СписаниеРасходовБудущихПериодов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 444,
	iconCls: 'bogus',
	title: 'Списание расходов будущих периодов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:428px;height:259px;',
			height: 259,width: 428,
			columns:
			[
				{
					text:'Картинка',
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
					text:'ПериодРегистрации',
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
			style: 'position:absolute;left:0px;top:0px;width:444px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеПечать',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель6',
				},
			]
		},
	]
});