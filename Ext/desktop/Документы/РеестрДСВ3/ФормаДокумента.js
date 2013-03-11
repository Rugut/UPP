Ext.define('Документы.РеестрДСВ3.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 498,width: 765,
	iconCls: 'bogus',
	title: 'Реестр застрахованных лиц (форма ДСВ-3)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:765px;height:25px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Подменю',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:473px;width:765px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'ПроверитьВCheckXML',
				},
				{
					text:'Файл',
				},
				{
					text:'РазделительПечать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'НаДискетку',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:446px;width:663px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:749px;height:41px;',
			height: 41,width: 749,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:749px;height:123px;',
			height: 123,width: 749,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:197px;width:749px;height:244px;',
			height: 244,width: 749,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});