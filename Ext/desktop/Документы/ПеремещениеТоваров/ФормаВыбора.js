Ext.define('Документы.ПеремещениеТоваров.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 560,
	iconCls: 'bogus',
	title: 'Перемещения товаров',
	
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
					text:'СкладОтправитель',
				},
				{
					text:'СкладПолучатель',
				},
				{
					text:'СуммаДокументаРозничная',
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
			style: 'position:absolute;left:0px;top:0px;width:560px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю3',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ПроводкиДтКт',
				},
			]
		},
	]
});