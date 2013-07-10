Ext.define('Справочники.ТипыЦенНоменклатуры.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:492px;height:336px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Элемент Типы цен номенклатуры',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 60,
			height: 19,
			style: 'position:absolute;left:424px;top:33px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 256,
			height: 19,
			style: 'position:absolute;left:113px;top:33px;width:256px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаЦены',
			text: 'Валюта цены по умолчанию:',
			style: 'position:absolute;left:8px;top:57px;width:100px;height:28px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВалютаЦены',
			width: 80,
			height: 19,
			style: 'position:absolute;left:113px;top:61px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБазовыйТипЦен',
			text: 'Базовый тип цен:',
			style: 'position:absolute;left:8px;top:201px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'БазовыйТипЦен',
			width: 220,
			height: 19,
			style: 'position:absolute;left:113px;top:201px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентСкидкиНаценки',
			text: 'Наценка в %:',
			style: 'position:absolute;left:333px;top:201px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентСкидкиНаценки',
			style: 'position:absolute;left:424px;top:201px;width:60px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Цены включают НДС',
			style: 'position:absolute;left:201px;top:61px;width:128px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокОкругления',
			text: 'Округлять до:',
			style: 'position:absolute;left:333px;top:249px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ПорядокОкругления',
			width: 60,
			height: 19,
			style: 'position:absolute;left:424px;top:249px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:283px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 371,
			height: 19,
			style: 'position:absolute;left:113px;top:283px;width:371px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:371px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьОкруглятьВБольшуюСторону',
			text: 'Метод округления:',
			style: 'position:absolute;left:8px;top:249px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОкруглятьВБольшуюСторону',
			width: 220,
			height: 19,
			style: 'position:absolute;left:113px;top:249px;width:220px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Порядок назначения цен',
			style: 'position:absolute;left:8px;top:89px;width:476px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Порядок округления цен',
			style: 'position:absolute;left:8px;top:229px;width:476px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:310px;width:492px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
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
		{
			xtype: 'label',
			name: 'НадписьВидТипаЦен',
			text: 'Вид типа цен:',
			style: 'position:absolute;left:8px;top:110px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидТипаЦен',
			width: 256,
			height: 19,
			style: 'position:absolute;left:113px;top:110px;width:256px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфРассчитывается',
			text: 'Цены назначаются и хранятся для каждой позиции номенклатуры/Цены рассчитываются автоматически от цен базового типа',
			style: 'position:absolute;left:113px;top:134px;width:371px;height:28px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРасчетаЦены',
			text: 'Способ расчета цены:',
			style: 'position:absolute;left:8px;top:168px;width:100px;height:28px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СпособРасчетаЦены',
			width: 256,
			height: 19,
			style: 'position:absolute;left:113px;top:173px;width:256px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:492px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});