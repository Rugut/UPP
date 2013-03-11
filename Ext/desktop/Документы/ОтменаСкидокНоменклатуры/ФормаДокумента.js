Ext.define('Документы.ОтменаСкидокНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 739,
	iconCls: 'bogus',
	title: 'Отмена скидок номенклатуры',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:51px;top:33px;width:127px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:204px;top:33px;width:163px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:62px;width:384px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:86px;width:722px;height:152px;',
			height: 152,width: 722,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'УстановкаСкидокНоменклатуры',
				},
				{
					text:'ВидОперации',
				},
				{
					text:'ВидСкидки',
				},
				{
					text:'ДатаНачала',
				},
				{
					text:'ДатаОкончания',
				},
				{
					text:'Условие',
				},
				{
					text:'ЗначениеУсловия',
				},
				{
					text:'ТипСкидкиНаценки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:739px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:296px;width:739px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:95px;top:244px;width:636px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:95px;top:269px;width:636px;height:19px;',
		},
	]
});