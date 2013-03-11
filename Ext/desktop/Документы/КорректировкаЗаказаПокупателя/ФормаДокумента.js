Ext.define('Документы.КорректировкаЗаказаПокупателя.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 773,
	iconCls: 'bogus',
	title: 'Корректировка заказа покупателя',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:309px;width:669px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:773px;height:25px;',
			items:
			[
				{
					text:'Разделитель6',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'Подменю1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ДействиеЗаполнитьИПровести',
				},
				{
					text:'ПересчитатьСкидки',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:109px;width:757px;height:152px;',
			height: 152,width: 757,
			items:
			[
				{
					title:'Товары',
				},
				{
					title:'Тара',
				},
				{
					title:'Услуги',
				},
				{
					title:'Материалы',
				},
				{
					title:'Дополнительно',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:667px;top:265px;width:98px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаказПокупателя',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:668px;top:285px;width:97px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:336px;width:773px;height:25px;',
			items:
			[
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Печать',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'Закрыть1',
				},
			]
		},
	]
});