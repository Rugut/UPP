Ext.define('Документы.ЗаданиеНаПроизводство.ФормаВыбора',
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
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});