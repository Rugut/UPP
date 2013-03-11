Ext.define('Документы.ЧекККМ.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 438,width: 652,
	iconCls: 'bogus',
	title: 'Чек ККМ',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Разделитель12',
				},
				{
					text:'ПодменюВидаОперации',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:413px;width:652px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'ОК',
				},
				{
					text:'ЧекККМ',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'РазделительЗаписать',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:110px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:210px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КассаККМ',
			style: 'position:absolute;left:402px;top:32px;width:242px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:110px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЧекККМПродажа',
			style: 'position:absolute;left:402px;top:56px;width:242px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:89px;top:386px;width:555px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:563px;top:340px;width:81px;height:17px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:109px;width:636px;height:225px;',
			height: 225,width: 636,
			items:
			[
				{
					title:'Товары',
				},
				{
					title:'Дополнительно',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДисконтнаяКарта',
			style: 'position:absolute;left:110px;top:80px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сдача',
			style: 'position:absolute;left:276px;top:362px;width:72px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОплаты',
			style: 'position:absolute;left:418px;top:80px;width:159px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаОплаты',
			style: 'position:absolute;left:110px;top:362px;width:91px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОплатаБезСдачи',
			text: '',
			style: 'position:absolute;left:89px;top:362px;width:20px;height:19px;',
		},
	]
});