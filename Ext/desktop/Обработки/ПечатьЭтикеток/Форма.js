Ext.define('Обработки.ПечатьЭтикеток.Форма',
	{
	extend: 'Ext.window.Window',
	height: 501,width: 780,
	iconCls: 'bogus',
	title: 'Обработка  Печать этикеток',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Отбор',
				},
				{
					text:'ПерезаполнитьЦены',
				},
				{
					text:'Отбор',
				},
				{
					text:'Печатать',
				},
				{
					text:'Печатать',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:253px;width:764px;height:242px;',
			height: 242,width: 764,
			columns:
			[
				{
					text:'ТипШтрихкода',
				},
				{
					text:'Штрихкод',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'Количество',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'Характеристика',
				},
				{
					text:'Серия',
				},
				{
					text:'Качество',
				},
				{
					text:'Цена',
				},
				{
					text:'Валюта',
				},
				{
					text:'ЦеныЕдиница',
				},
				{
					text:'ПроцентСкидкиНаценки',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФорматЭтикетки',
			style: 'position:absolute;left:64px;top:206px;width:201px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ШиринаЭтикетки',
			style: 'position:absolute;left:349px;top:206px;width:21px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВысотаЭтикетки',
			style: 'position:absolute;left:449px;top:206px;width:20px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:130px;',
			height: 130,width: 764,
			items:
			[
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:213px;top:13px;width:250px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Единица',
			style: 'position:absolute;left:90px;top:37px;width:113px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Качество',
			style: 'position:absolute;left:290px;top:37px;width:173px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипШтрихкода',
			style: 'position:absolute;left:90px;top:61px;width:113px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦены',
			style: 'position:absolute;left:90px;top:105px;width:373px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:631px;top:105px;width:126px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоКопий',
			style: 'position:absolute;left:576px;top:206px;width:51px;height:19px;',
		},
	]
});