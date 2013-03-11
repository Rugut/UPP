Ext.define('Документы.СведенияОТрудовомСтажеЗастрахованногоЛицаСЗВК.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 413,width: 583,
	iconCls: 'bogus',
	title: 'Сведения о трудовом стаже застрахованного лица (СЗВ-К)',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:361px;width:479px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:583px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'Подменю',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:388px;width:583px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ПроверитьВCheckXML',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Файл',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'НаДискетку',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:567px;height:41px;',
			height: 41,width: 567,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:567px;height:97px;',
			height: 97,width: 567,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:171px;width:567px;height:185px;',
			height: 185,width: 567,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});