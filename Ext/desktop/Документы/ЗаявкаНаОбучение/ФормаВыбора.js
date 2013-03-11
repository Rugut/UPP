Ext.define('Документы.ЗаявкаНаОбучение.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 721,
	iconCls: 'bogus',
	title: 'Заявка на обучение',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:705px;height:380px;',
			height: 380,width: 705,
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
					text:'КурсОбучения',
				},
				{
					text:'ДатаЗавершенияКурса',
				},
				{
					text:'КраткийСоставДокумента',
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
			style: 'position:absolute;left:0px;top:0px;width:721px;height:25px;',
			items:
			[
				{
					text:'ДействияФормыВыбрать',
				},
				{
					text:'Подменю3',
				},
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
			]
		},
	]
});