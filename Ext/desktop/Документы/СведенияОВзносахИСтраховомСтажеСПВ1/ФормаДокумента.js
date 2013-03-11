Ext.define('Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 480,width: 846,
	iconCls: 'bogus',
	title: 'Сведения о взносах и страховом стаже для установления трудовой пенсии (СПВ-1)',
	
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
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие6',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Действие1',
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
					text:'РазделительПечать1',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
				{
					text:'ПроверитьВCheckUFA',
				},
				{
					text:'НаДискетку',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Файл',
				},
				{
					text:'Проверить',
				},
				{
					text:'Разделитель1',
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
			style: 'position:absolute;left:8px;top:74px;width:830px;height:130px;',
			height: 130,width: 830,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:204px;width:830px;height:217px;',
			height: 217,width: 830,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});