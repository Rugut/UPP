Ext.define('Документы.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 720,
	iconCls: 'bogus',
	title: 'Классификации покупателей по стадиям взаимоотношений',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:704px;height:259px;',
			height: 259,width: 704,
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
					text:'ДатаОкончания',
				},
				{
					text:'Периодичность',
				},
				{
					text:'XКлассНач',
				},
				{
					text:'XКлассКон',
				},
				{
					text:'YКлассНач',
				},
				{
					text:'YКлассКон',
				},
				{
					text:'ZКлассНач',
				},
				{
					text:'ZКлассКон',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			items:
			[
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});