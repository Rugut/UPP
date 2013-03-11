Ext.define('Обработки.СоставНабора.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	height: 340,width: 600,
	iconCls: 'bogus',
	title: 'Состав набора',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:315px;width:600px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:77px;top:33px;width:515px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Количество',
			style: 'position:absolute;left:77px;top:57px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмерения',
			style: 'position:absolute;left:290px;top:57px;width:69px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:124px;width:584px;height:183px;',
			height: 183,width: 584,
			columns:
			[
				{
					text:'НомерСтроки',
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
					text:'Количество',
				},
				{
					text:'Всего',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'Себестоимость',
				},
				{
					text:'Качество',
				},
				{
					text:'Склад',
				},
				{
					text:'СпособСписанияОстаткаТоваров',
				},
				{
					text:'Цена',
				},
				{
					text:'СчетУчетаБУ',
				},
				{
					text:'ПринятыеСчетУчетаБУ',
				},
				{
					text:'СчетУчетаНУ',
				},
				{
					text:'ПринятыеСчетУчетаНУ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:584px;height:24px;',
			items:
			[
				{
					text:'СерийныеНомера',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});