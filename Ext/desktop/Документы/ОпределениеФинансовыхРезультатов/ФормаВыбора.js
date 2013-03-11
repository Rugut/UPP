Ext.define('Документы.ОпределениеФинансовыхРезультатов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 565,
	iconCls: 'bogus',
	title: 'Определение финансовых результатов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:549px;height:380px;',
			height: 380,width: 549,
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
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:565px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Подменю2',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});