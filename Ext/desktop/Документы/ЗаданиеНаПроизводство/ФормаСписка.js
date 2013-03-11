Ext.define('Документы.ЗаданиеНаПроизводство.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 700,
	iconCls: 'bogus',
	title: 'Задания на производство',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:684px;height:380px;',
			height: 380,width: 684,
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
					text:'ВидЗадания',
				},
				{
					text:'ДатаЗадания',
				},
				{
					text:'Подразделение',
				},
				{
					text:'Смена',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			items:
			[
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеПечать',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель13',
				},
				{
					text:'Подменю3',
				},
			]
		},
	]
});