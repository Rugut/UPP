Ext.define('Документы.ABCКлассификацияПокупателей.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 600,
	iconCls: 'bogus',
	title: 'ABC-классификации покупателей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:584px;height:380px;',
			height: 380,width: 584,
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
					text:'ДатаНачала',
				},
				{
					text:'ДатаОкончания',
				},
				{
					text:'ПроцентAКласса',
				},
				{
					text:'ПроцентBКласса',
				},
				{
					text:'ПроцентCКласса',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю2',
				},
			]
		},
	]
});