Ext.define('Документы.ПланДвиженияДенежныхСредств.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 411,width: 652,
	iconCls: 'bogus',
	title: 'План движения денежных средств',
	
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
			style: 'position:absolute;left:96px;top:359px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'Разделитель10',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПланирования',
			style: 'position:absolute;left:549px;top:57px;width:95px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:150px;width:636px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Заполнить',
				},
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:174px;width:636px;height:108px;',
			height: 108,width: 636,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ПриходРасход',
				},
				{
					text:'СтатьяДвиженияДенежныхСредств',
				},
				{
					text:'Проект',
				},
				{
					text:'Сумма',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ВидОперации',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'Сделка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:386px;width:652px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:424px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДокумента',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДенежныхСредств',
			style: 'position:absolute;left:549px;top:81px;width:95px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИтогоПлатежи',
			style: 'position:absolute;left:556px;top:311px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЧДП',
			style: 'position:absolute;left:556px;top:335px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИтогоПоступления',
			style: 'position:absolute;left:556px;top:287px;width:88px;height:19px;',
		},
	]
});