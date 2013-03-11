Ext.define('Справочники.Номенклатура.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 349,width: 733,
	iconCls: 'bogus',
	title: 'Номенклатура',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:733px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие13',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие',
				},
				{
					text:'ОстаткиТоваровНаСкладах',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'ПоискПоШтрихКоду',
				},
				{
					text:'НоменклатураКонтрагента',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Изображение',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие10',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:717px;height:306px;',
			height: 306,width: 717,
			items:
			[
				{
					title:'ВыборНоменклатуры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:166px;top:25px;width:551px;height:130px;',
			height: 130,width: 551,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Артикул',
				},
				{
					text:'Наименование',
				},
				{
					text:'ВидНоменклатуры',
				},
				{
					text:'БазоваяЕдиницаИзмерения',
				},
				{
					text:'ЕдиницаХраненияОстатков',
				},
				{
					text:'СтавкаНДС',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:25px;width:160px;height:130px;',
			height: 130,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:161px;width:160px;height:144px;',
			height: 144,width: 160,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:166px;top:161px;width:551px;height:144px;',
			height: 144,width: 551,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:152px;top:21px;width:399px;height:99px;',
			height: 99,width: 399,
			columns:
			[
				{
					text:'ХарактеристикаСклад',
				},
				{
					text:'МестоХранения',
				},
				{
					text:'Общий',
				},
				{
					text:'Свободный',
				},
				{
					text:'СвободныйОжидаемый',
				},
				{
					text:'ВРезерве',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:147px;height:123px;',
			height: 123,width: 147,
			columns:
			[
				{
					text:'Наименование',
				},
				{
					text:'Ссылка',
				},
				{
					text:'БазовыйТипЦен',
				},
				{
					text:'Рассчитывается',
				},
				{
					text:'ОкруглятьВБольшуюСторону',
				},
				{
					text:'ПроцентСкидкиНаценки',
				},
				{
					text:'Префикс',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаЦены',
			style: 'position:absolute;left:418px;top:125px;width:133px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораСпискаНоменклатуры',
			style: 'position:absolute;left:228px;top:0px;width:489px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:292px;top:64px;width:157px;height:24px;',
			items:
			[
				{
					text:'Обновить',
				},
				{
					text:'Переместитьвверх',
				},
				{
					text:'ПереместитьВниз',
				},
				{
					text:'Действие',
				},
				{
					text:'ОтменитьВсе',
				},
				{
					text:'Разделитель',
				},
			]
		},
					]
				},
				{
					title:'ВыборНоменклатурыКонтрагента',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:186px;top:0px;width:531px;height:305px;',
			height: 305,width: 531,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'АртикулНоменклатурыКонтрагента',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'НаименованиеНоменклатурыКонтрагента',
				},
				{
					text:'КодНоменклатурыКонтрагента',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:180px;height:305px;',
			height: 305,width: 180,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
	]
});