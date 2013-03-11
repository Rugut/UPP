Ext.define('Документы.КорректировкаЗаказаНаПроизводство.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 395,width: 657,
	iconCls: 'bogus',
	title: 'Документ Корректировка заказа на производство',
	
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
			style: 'position:absolute;left:90px;top:344px;width:559px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель13',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДействиеЗаполнитьИПровести',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель14',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:109px;width:641px;height:227px;',
			height: 227,width: 641,
			items:
			[
				{
					title:'Продукция',
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
			name: 'Подразделение',
			style: 'position:absolute;left:450px;top:56px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:370px;width:657px;height:25px;',
			items:
			[
				{
					text:'Закрыть1',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Печать',
				},
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаказНаПроизводство',
			style: 'position:absolute;left:90px;top:80px;width:220px;height:19px;',
		},
	]
});