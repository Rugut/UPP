Ext.define('Обработки.ПодборМатериаловИАналогов.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	height: 441,width: 722,
	iconCls: 'bogus',
	title: 'Подбор материалов и аналогов для выпуска продукции',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:54px;width:706px;height:255px;',
			height: 255,width: 706,
			columns:
			[
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'Спецификация',
				},
				{
					text:'НомерОперацииМаршрута',
				},
				{
					text:'Используется',
				},
				{
					text:'Количество',
				},
				{
					text:'КоличествоВыпуск',
				},
				{
					text:'КоличествоВсего',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'Приоритет',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'СтатьяЗатрат',
				},
				{
					text:'ВидВыпуска',
				},
				{
					text:'Заказ',
				},
				{
					text:'ЗаказВыпуска',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:417px;width:722px;height:24px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:30px;width:706px;height:24px;',
			items:
			[
				{
					text:'Автозамена',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СкладОстатков',
			style: 'position:absolute;left:101px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:315px;width:706px;height:95px;',
			height: 95,width: 706,
			columns:
			[
				{
					text:'Материал',
				},
				{
					text:'ХарактеристикаМатериала',
				},
				{
					text:'Остаток',
				},
				{
					text:'ЕдиницаИзмерения',
				},
			]
		},
	]
});