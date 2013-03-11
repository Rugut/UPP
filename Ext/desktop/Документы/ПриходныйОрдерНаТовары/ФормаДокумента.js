Ext.define('Документы.ПриходныйОрдерНаТовары.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 375,width: 652,
	iconCls: 'bogus',
	title: 'Приходный ордер на товары',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:108px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:208px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:323px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'ОткрытьФормуНастройкиБланкаТоварногоНаполнения',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Подменю3',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:132px;width:636px;height:185px;',
			height: 185,width: 636,
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:108px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:424px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:350px;width:652px;height:25px;',
			items:
			[
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:76px;width:320px;height:27px;',
			height: 27,width: 320,
			items:
			[
				{
					title:'Перемещение',
				},
				{
					title:'Контрагент',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:104px;width:320px;height:20px;',
			height: 20,width: 320,
			items:
			[
				{
					title:'ФизЛицо',
				},
				{
					title:'Заказ',
				},
			]
		},
	]
});