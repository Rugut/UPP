Ext.define('Документы.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 370,width: 780,
	iconCls: 'bogus',
	title: 'Классификации покупателей по стадиям взаимоотношений',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:329px;',
			height: 329,width: 764,
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
					text:'КоличествоПериодовАнализа',
				},
				{
					text:'РазовыйПокупательНач',
				},
				{
					text:'РазовыйПокупательКон',
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
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});