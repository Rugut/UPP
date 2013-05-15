Ext.define('Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:254px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ключ аналитики учета затрат',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			style: 'position:absolute;left:141px;top:33px;width:251px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗатрат',
			text: 'Статья затрат:',
			style: 'position:absolute;left:8px;top:57px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтатьяЗатрат',
			style: 'position:absolute;left:141px;top:57px;width:251px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗатрата',
			text: 'Затрата:',
			style: 'position:absolute;left:8px;top:82px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Затрата',
			style: 'position:absolute;left:141px;top:82px;width:251px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьХарактеристикаЗатраты',
			text: 'Характеристика затраты:',
			style: 'position:absolute;left:8px;top:106px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ХарактеристикаЗатраты',
			style: 'position:absolute;left:141px;top:106px;width:251px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияЗатраты',
			text: 'Серия затраты:',
			style: 'position:absolute;left:8px;top:130px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СерияЗатраты',
			style: 'position:absolute;left:141px;top:130px;width:251px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРаспределенияЗатрат',
			text: 'Способ распределения затрат:',
			style: 'position:absolute;left:8px;top:150px;width:133px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СпособРаспределенияЗатрат',
			style: 'position:absolute;left:141px;top:154px;width:251px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьХарактерЗатрат',
			text: 'Характер затрат:',
			style: 'position:absolute;left:8px;top:178px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ХарактерЗатрат',
			style: 'position:absolute;left:141px;top:178px;width:251px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКачество',
			text: 'Качество:',
			style: 'position:absolute;left:8px;top:202px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Качество',
			style: 'position:absolute;left:141px;top:202px;width:251px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:229px;width:400px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});