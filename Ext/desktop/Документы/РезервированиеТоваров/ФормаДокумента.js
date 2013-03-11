Ext.define('Документы.РезервированиеТоваров.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 345,width: 652,
	iconCls: 'bogus',
	title: 'Документ Резервирование товаров',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:293px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'ДействиеЗаполнитьИПровести',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Подменю3',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:108px;width:636px;height:175px;',
			height: 175,width: 636,
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
			style: 'position:absolute;left:0px;top:320px;width:652px;height:25px;',
			items:
			[
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'Записать',
				},
				{
					text:'Печать',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Заказ',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
	]
});