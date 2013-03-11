Ext.define('Документы.ЗаявлениеОбОбменеДубликатеСтраховогоСвидетельства.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 464,width: 644,
	iconCls: 'bogus',
	title: 'Заявление об обмене, дубликате страхового свидетельства',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:644px;height:25px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Подменю',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:439px;width:644px;height:25px;',
			items:
			[
				{
					text:'Проверить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Записать',
				},
				{
					text:'Файл',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'НаДискетку',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Закрыть',
				},
				{
					text:'РазделительПечать',
				},
				{
					text:'ПроверитьВCheckUFA',
				},
				{
					text:'ОК',
				},
				{
					text:'ПроверитьВCheckXML',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:412px;width:546px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:628px;height:115px;',
			height: 115,width: 628,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:189px;width:628px;height:197px;',
			height: 197,width: 628,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:628px;height:41px;',
			height: 41,width: 628,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});