Ext.define('Обработки.СоставНабора.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:340px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатура',
			text: 'Набор :',
			style: 'position:absolute;left:8px;top:33px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:77px;top:33px;width:515px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличество',
			text: 'Количество:',
			style: 'position:absolute;left:8px;top:57px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Количество',
			style: 'position:absolute;left:77px;top:57px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмерения',
			text: 'Единица измерения:',
			style: 'position:absolute;left:175px;top:57px;width:110px;height:19px;',
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
					text:'№',
					width:'28',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'220',
				},
				{
					text:'Характеристика номенклатуры',
					width:'220',
				},
				{
					text:'Серия номенклатуры',
					width:'220',
				},
				{
					text:'Количество',
					width:'64',
				},
				{
					text:'Всего',
					width:'64',
				},
				{
					text:'Ед.',
					width:'50',
				},
				{
					text:'Себестоимость ',
					width:'80',
				},
				{
					text:'Качество',
					width:'65',
				},
				{
					text:'Склад',
					width:'100',
				},
				{
					text:'Способ списания',
					width:'100',
				},
				{
					text:'Цена',
					width:'100',
				},
				{
					text:'Собственные, счет учета (БУ)',
					width:'100',
				},
				{
					text:'Принятые, счет учета (БУ)',
					width:'100',
				},
				{
					text:'Собственные, счет учета (НУ)',
					width:'100',
				},
				{
					text:'Принятые счет учета (НУ)',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:584px;height:24px;',
			items:
			[
				'-',
				{
					text:'Серийные номера',
				},
			]
		},
	]
});