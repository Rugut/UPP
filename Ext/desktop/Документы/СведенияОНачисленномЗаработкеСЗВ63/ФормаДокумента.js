Ext.define('Документы.СведенияОНачисленномЗаработкеСЗВ63.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 480,width: 846,
	iconCls: 'bogus',
	title: 'Сведения о сумме выплат и иных вознаграждений СЗВ-6-3',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:97px;top:428px;width:621px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:846px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие5',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие3',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие7',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:846px;height:25px;',
			items:
			[
				{
					text:'ПроверитьВCheckXML',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'РазделительПечать1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'НаДискетку',
				},
				{
					text:'Файл',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:830px;height:41px;',
			height: 41,width: 830,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:830px;height:96px;',
			height: 96,width: 830,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:170px;width:830px;height:251px;',
			height: 251,width: 830,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});