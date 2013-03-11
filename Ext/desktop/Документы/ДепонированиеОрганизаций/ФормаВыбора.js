Ext.define('Документы.ДепонированиеОрганизаций.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 597,
	iconCls: 'bogus',
	title: 'Депонирование организаций',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:581px;height:259px;',
			height: 259,width: 581,
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
					text:'Организация',
				},
				{
					text:'КраткийСоставДокумента',
				},
				{
					text:'СуммаДокумента',
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
			style: 'position:absolute;left:0px;top:0px;width:597px;height:25px;',
			items:
			[
				{
					text:'Разделитель7',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'ДействияФормыВыбрать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
	]
});