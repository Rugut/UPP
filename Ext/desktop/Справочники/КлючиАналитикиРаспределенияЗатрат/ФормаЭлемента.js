Ext.require(['Данные.Справочники.КлючиАналитикиРаспределенияЗатрат'], function () 
{
	Ext.define('Справочники.КлючиАналитикиРаспределенияЗатрат.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:230px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ключ аналитики распределения затрат',
	
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
			style: 'position:absolute;left:8px;top:33px;width:151px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 233,
			height: 19,
			style: 'position:absolute;left:159px;top:33px;width:233px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатурнаяГруппа',
			text: 'Номенклатурная группа:',
			style: 'position:absolute;left:8px;top:57px;width:151px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'НоменклатурнаяГруппа',
			width: 233,
			height: 19,
			style: 'position:absolute;left:159px;top:57px;width:233px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПродукция',
			text: 'Продукция:',
			style: 'position:absolute;left:8px;top:81px;width:151px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Продукция',
			width: 233,
			height: 19,
			style: 'position:absolute;left:159px;top:81px;width:233px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьХарактеристикаПродукции',
			text: 'Характеристика продукции:',
			style: 'position:absolute;left:8px;top:105px;width:151px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ХарактеристикаПродукции',
			width: 233,
			height: 19,
			style: 'position:absolute;left:159px;top:105px;width:233px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияПродукции',
			text: 'Серия продукции:',
			style: 'position:absolute;left:8px;top:129px;width:151px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'СерияПродукции',
			width: 233,
			height: 19,
			style: 'position:absolute;left:159px;top:129px;width:233px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпецификация',
			text: 'Спецификация:',
			style: 'position:absolute;left:8px;top:153px;width:151px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Спецификация',
			width: 233,
			height: 19,
			style: 'position:absolute;left:159px;top:153px;width:233px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВариантВыпускаПродукции',
			text: 'Вариант выпуска продукции:',
			style: 'position:absolute;left:8px;top:178px;width:151px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			name: 'ВариантВыпускаПродукции',
			width: 233,
			height: 19,
			style: 'position:absolute;left:159px;top:178px;width:233px;height:19px;',
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
			style: 'position:absolute;left:0px;top:205px;width:400px;height:25px;',
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