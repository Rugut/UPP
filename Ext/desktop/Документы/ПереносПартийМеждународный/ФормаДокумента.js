Ext.define('Документы.ПереносПартийМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 402,width: 654,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:350px;width:552px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:426px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:25px;',
			items:
			[
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:377px;width:654px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачало',
			style: 'position:absolute;left:426px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодКонец',
			style: 'position:absolute;left:533px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:625px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:105px;width:638px;height:241px;',
			height: 241,width: 638,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидДвижения',
				},
				{
					text:'Период',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'Склад',
				},
				{
					text:'ДокументОприходования',
				},
				{
					text:'СерияНоменклатуры',
				},
				{
					text:'Заказ',
				},
				{
					text:'Качество',
				},
				{
					text:'СчетУчета',
				},
				{
					text:'Количество',
				},
				{
					text:'Стоимость',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:79px;width:638px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ВыполнитьПеренос',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОтключитьОтбор',
				},
				{
					text:'УстановитьОтборИСортировкуСписка___',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ВывестиСписок',
				},
			]
		},
	]
});