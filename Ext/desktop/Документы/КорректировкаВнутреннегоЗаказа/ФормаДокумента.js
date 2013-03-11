Ext.define('Документы.КорректировкаВнутреннегоЗаказа.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 370,width: 657,
	iconCls: 'bogus',
	title: 'Корректировка внутреннего заказа',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:319px;width:559px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
				{
					text:'Разделитель14',
				},
				{
					text:'ДействиеЗаполнитьИПровести',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
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
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'Разделитель13',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Подменю1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:641px;height:227px;',
			height: 227,width: 641,
			items:
			[
				{
					title:'Товары',
				},
				{
					title:'Тара',
				},
				{
					title:'Дополнительно',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:345px;width:657px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
				{
					text:'Печать',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Закрыть1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВнутреннийЗаказ',
			style: 'position:absolute;left:90px;top:56px;width:220px;height:19px;',
		},
	]
});