Ext.define('Документы.ОприходованиеТоваров.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 520,
	iconCls: 'bogus',
	title: 'Оприходования товаров',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:504px;height:380px;',
			height: 380,width: 504,
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
					text:'СкладКомпании',
				},
				{
					text:'СуммаДокумента',
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
			style: 'position:absolute;left:0px;top:0px;width:520px;height:25px;',
			items:
			[
				{
					text:'Разделитель7',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
	]
});