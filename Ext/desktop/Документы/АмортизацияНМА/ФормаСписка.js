Ext.define('Документы.АмортизацияНМА.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 680,
	iconCls: 'bogus',
	title: 'Амортизация НМА',
	
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
			style: 'position:absolute;left:0px;top:0px;width:680px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ПроводкиДтКт',
				},
			]
		},
	]
});