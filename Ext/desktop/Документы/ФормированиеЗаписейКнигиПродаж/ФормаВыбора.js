Ext.define('Документы.ФормированиеЗаписейКнигиПродаж.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 540,
	iconCls: 'bogus',
	title: 'Формирования записей книги продаж',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:524px;height:280px;',
			height: 280,width: 524,
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
					text:'ПоРеализации0',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:540px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Действие',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Подменю2',
				},
			]
		},
	]
});