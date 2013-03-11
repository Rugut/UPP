Ext.define('Обработки.ОбработкаТабличнойЧастиТовары.Форма',
	{
	extend: 'Ext.window.Window',
	height: 405,width: 728,
	iconCls: 'bogus',
	title: 'Обработка табличной части',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:107px;width:712px;height:24px;',
			items:
			[
				{
					text:'ДействиеСнятьФлажки',
				},
				{
					text:'ДействиеИнвертироватьФлажки',
				},
				{
					text:'ДействиеУстановитьФлажки',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:133px;width:712px;height:215px;',
			height: 215,width: 712,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'Код',
				},
				{
					text:'Артикул',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'СерияНоменклатуры',
				},
				{
					text:'ЕдиницаМест',
				},
				{
					text:'КоэффициентМест',
				},
				{
					text:'КоличествоМест',
				},
				{
					text:'Количество',
				},
				{
					text:'Единица',
				},
				{
					text:'Коэффициент',
				},
				{
					text:'Цена',
				},
				{
					text:'ЕдиницаХранения',
				},
				{
					text:'ПроцентСкидкиНаценки',
				},
				{
					text:'ПроцентАвтоматическихСкидок',
				},
				{
					text:'ПроцентРозничнойНаценки',
				},
				{
					text:'ЦенаВРознице',
				},
				{
					text:'Сумма',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'СуммаНДС',
				},
				{
					text:'Всего',
				},
				{
					text:'СуммаРегл',
				},
				{
					text:'ЗаказПокупателя',
				},
				{
					text:'Качество',
				},
				{
					text:'Склад',
				},
				{
					text:'ОграничениеСкидкиНаценки',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаВыполнить',
			text: 'Выполнить',
			style: 'position:absolute;left:640px;top:4px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаВариантаЗачения',
			style: 'position:absolute;left:234px;top:4px;width:400px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:640px;top:353px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:448px;top:353px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:380px;width:728px;height:25px;',
			items:
			[
				{
					text:'КнопкаОКНажатие',
				},
				{
					text:'Справка',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:25px;width:712px;height:60px;',
			height: 60,width: 712,
			items:
			[
				{
					title:'УстановитьСериюПоГТД',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтранаПроисхождения',
			style: 'position:absolute;left:226px;top:0px;width:400px;height:19px;',
		},
					]
				},
				{
					title:'УпорядочитьСтроки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:712px;height:60px;',
			height: 60,width: 712,
			columns:
			[
				{
					text:'Имя',
				},
				{
					text:'НаправлениеСортировки',
				},
			]
		},
					]
				},
			]
		},
	]
});