Ext.define('Справочники.ТипыЦенНоменклатурыКонтрагентов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:409px;height:238px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Типы цен номенклатуры контрагентов',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:361px;top:61px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:61px;width:219px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:98px;top:33px;width:303px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Тип цены
номенклатуры:',
			style: 'position:absolute;left:8px;top:87px;width:88px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦеныНоменклатуры',
			style: 'position:absolute;left:98px;top:89px;width:303px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Описание :',
			style: 'position:absolute;left:8px;top:141px;width:88px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ОписаниеТипаЦеныНоменклатурыКонтрагента',
			style: 'position:absolute;left:98px;top:141px;width:303px;height:40px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:186px;width:303px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:409px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:213px;width:409px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаЦены',
			text: 'Валюта:',
			style: 'position:absolute;left:8px;top:117px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаЦены',
			style: 'position:absolute;left:98px;top:117px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Цены включают НДС',
			style: 'position:absolute;left:195px;top:117px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:186px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:61px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:319px;top:61px;width:40px;height:19px;',
		},
	]
});