Ext.define('Документы.УстановкаЗначенийТочкиЗаказа.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 341,width: 652,
	iconCls: 'bogus',
	title: 'Установка значений точки заказа',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:83px;width:636px;height:24px;',
			items:
			[
				{
					text:'ДействиеПодбор',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:107px;width:636px;height:175px;',
			height: 175,width: 636,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'СпособОпределенияЗначенияТочкиЗаказа',
				},
				{
					text:'ЗначениеТочкиЗаказа',
				},
				{
					text:'МинимальныйСтраховойЗапас',
				},
				{
					text:'ПроцентнаяСтавкаЗначенияТочкиЗаказа',
				},
				{
					text:'ПроцентнаяСтавкаМинимальногоСтраховогоЗапаса',
				},
				{
					text:'ДатаНач',
				},
				{
					text:'ДатаКон',
				},
				{
					text:'Склад',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель5',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:316px;width:652px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
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
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:289px;width:548px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
	]
});