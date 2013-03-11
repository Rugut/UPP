Ext.define('Документы.ПередачаДСВвПФР.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 449,width: 778,
	iconCls: 'bogus',
	title: 'Передача в ПФР Заявлений о добровольном вступлении в правоотношения (ДСВ-1)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:778px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Подменю',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:424px;width:778px;height:25px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'НаДискетку',
				},
				{
					text:'РазделительПечать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ПроверитьВCheckXML',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
				{
					text:'Файл',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:397px;width:676px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:762px;height:41px;',
			height: 41,width: 762,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:762px;height:74px;',
			height: 74,width: 762,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:148px;width:762px;height:244px;',
			height: 244,width: 762,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});