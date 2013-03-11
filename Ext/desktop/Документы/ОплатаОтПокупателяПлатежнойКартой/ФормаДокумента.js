Ext.define('Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 460,width: 658,
	iconCls: 'bogus',
	title: 'Оплата от покупателя платежной картой',
	
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
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель12',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель11',
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
					text:'Печать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Записать',
				},
				{
					text:'ОплатитьКартой',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'ОК',
				},
				{
					text:'Чек',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'РазделительЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:642px;height:276px;',
			height: 276,width: 642,
			items:
			[
				{
					title:'Основная',
				},
				{
					title:'Эквайринг',
				},
			]
		},
	]
});