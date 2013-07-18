Ext.require(['Данные.Справочники.КлючиАналитикиУчетаЗатрат'], function () 
{
	Ext.define('Справочники.КлючиАналитикиУчетаЗатрат.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:254px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ключ аналитики учета затрат',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
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
			width: 251,
			height: 19,
			style: 'position:absolute;left:141px;top:33px;width:251px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗатрат',
			text: 'Статья затрат:',
			style: 'position:absolute;left:8px;top:57px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'СтатьяЗатрат',
			width: 251,
			height: 19,
			style: 'position:absolute;left:141px;top:57px;width:251px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗатрата',
			text: 'Затрата:',
			style: 'position:absolute;left:8px;top:82px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Затрата',
			width: 251,
			height: 19,
			style: 'position:absolute;left:141px;top:82px;width:251px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьХарактеристикаЗатраты',
			text: 'Характеристика затраты:',
			style: 'position:absolute;left:8px;top:106px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ХарактеристикаЗатраты',
			width: 251,
			height: 19,
			style: 'position:absolute;left:141px;top:106px;width:251px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияЗатраты',
			text: 'Серия затраты:',
			style: 'position:absolute;left:8px;top:130px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'СерияЗатраты',
			width: 251,
			height: 19,
			style: 'position:absolute;left:141px;top:130px;width:251px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРаспределенияЗатрат',
			text: 'Способ распределения затрат:',
			style: 'position:absolute;left:8px;top:150px;width:133px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'СпособРаспределенияЗатрат',
			width: 251,
			height: 19,
			style: 'position:absolute;left:141px;top:154px;width:251px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьХарактерЗатрат',
			text: 'Характер затрат:',
			style: 'position:absolute;left:8px;top:178px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			name: 'ХарактерЗатрат',
			width: 251,
			height: 19,
			style: 'position:absolute;left:141px;top:178px;width:251px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКачество',
			text: 'Качество:',
			style: 'position:absolute;left:8px;top:202px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Качество',
			width: 251,
			height: 19,
			style: 'position:absolute;left:141px;top:202px;width:251px;height:19px;',
		},
		],
	}],
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
});