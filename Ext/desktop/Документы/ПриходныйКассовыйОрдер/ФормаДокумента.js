Ext.define('Документы.ПриходныйКассовыйОрдер.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 460,width: 658,
	iconCls: 'bogus',
	title: 'Документ Приходный кассовый ордер',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:100px;top:408px;width:550px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:658px;height:25px;',
			items:
			[
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Разделитель11',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'Разделитель12',
				},
				{
					text:'НастройкаУСН',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Подменю3',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Касса',
			style: 'position:absolute;left:412px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:100px;top:384px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:412px;top:384px;width:238px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:435px;width:658px;height:25px;',
			items:
			[
				{
					text:'РазделительОК',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Записать',
				},
				{
					text:'ОК',
				},
				{
					text:'Чек',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:642px;height:277px;',
			height: 277,width: 642,
			items:
			[
				{
					title:'Основная',
				},
				{
					title:'Печать',
				},
			]
		},
	]
});