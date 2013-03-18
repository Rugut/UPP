Ext.define('Справочники.ТипыЦенНоменклатуры.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:492px;height:336px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Элемент Типы цен номенклатуры',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:424px;top:33px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:113px;top:33px;width:256px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаЦены',
			text: 'Валюта цены по умолчанию:',
			style: 'position:absolute;left:8px;top:57px;width:100px;height:28px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаЦены',
			style: 'position:absolute;left:113px;top:61px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБазовыйТипЦен',
			text: 'Базовый тип цен:',
			style: 'position:absolute;left:8px;top:201px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовыйТипЦен',
			style: 'position:absolute;left:113px;top:201px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентСкидкиНаценки',
			text: 'Наценка в %:',
			style: 'position:absolute;left:333px;top:201px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокОкругления',
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
			name: 'Комментарий',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:492px;height:25px;',
			items:
			[
			]
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
			name: 'ОкруглятьВБольшуюСторону',
			style: 'position:absolute;left:113px;top:249px;width:220px;height:19px;',
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
			name: 'ВидТипаЦен',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРасчетаЦены',
			style: 'position:absolute;left:113px;top:173px;width:256px;height:19px;',
		},
	]
});