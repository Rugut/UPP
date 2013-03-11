Ext.define('Обработки.ФормированиеЦен.Форма',
	{
	extend: 'Ext.window.Window',
	height: 331,width: 670,
	iconCls: 'bogus',
	title: 'Обработка  Формирование цен',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:34px;width:484px;height:24px;',
			items:
			[
				{
					text:'ДействиеУстановитьФлажки',
				},
				{
					text:'ДействиеСнятьФлажки',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:58px;width:656px;height:220px;',
			height: 220,width: 656,
			columns:
			[
				{
					text:'Номер строки',
				},
				{
					text:'Пометка',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'ЦенаБазовая',
				},
				{
					text:'ВалютаБазовая',
				},
				{
					text:'СпособРасчетаЦены',
				},
				{
					text:'ПроцентСкидкиНаценки',
				},
				{
					text:'Цена',
				},
				{
					text:'Валюта',
				},
				{
					text:'ЕдиницаИзмерения',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаВеличиныИзменения',
			style: 'position:absolute;left:464px;top:6px;width:48px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыполнить',
			text: 'Выполнить',
			style: 'position:absolute;left:582px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаВариантаЗачения',
			style: 'position:absolute;left:228px;top:6px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаЦен',
			style: 'position:absolute;left:582px;top:37px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:306px;width:670px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});