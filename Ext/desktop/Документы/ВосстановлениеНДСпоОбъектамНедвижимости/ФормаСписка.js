Ext.define('Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 606,
	iconCls: 'bogus',
	title: 'Восстановления НДС по объектам недвижимости',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:590px;height:259px;',
			height: 259,width: 590,
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
					text:'ОтражатьВосстановлениеВКнигеПродаж',
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
			style: 'position:absolute;left:0px;top:0px;width:606px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Подменю2',
				},
			]
		},
	]
});