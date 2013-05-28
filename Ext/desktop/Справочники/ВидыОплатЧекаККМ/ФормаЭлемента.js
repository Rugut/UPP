Ext.define('Справочники.ВидыОплатЧекаККМ.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:454px;height:180px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Вид оплаты чека ККМ',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:358px;top:33px;width:23px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 60,
			height: 19,
			style: 'position:absolute;left:386px;top:33px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 204,
			height: 19,
			style: 'position:absolute;left:148px;top:33px;width:204px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипОплаты',
			text: 'Тип оплаты:',
			style: 'position:absolute;left:8px;top:57px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ТипОплаты',
			width: 298,
			height: 19,
			style: 'position:absolute;left:148px;top:57px;width:298px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:80px;width:438px;height:67px;',
			height: 67,width: 438,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьБанкКредитор',
			text: 'Банк-кредитор:',
			style: 'position:absolute;left:0px;top:0px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'БанкКредитор',
			width: 298,
			height: 19,
			style: 'position:absolute;left:140px;top:0px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорВзаиморасчетовБанкаКредитора',
			text: 'Договор взаиморасчетов:',
			style: 'position:absolute;left:0px;top:24px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ДоговорВзаиморасчетовБанкаКредитора',
			width: 298,
			height: 19,
			style: 'position:absolute;left:140px;top:24px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентБанковскойКомиссии',
			text: '% банковской комиссии:',
			style: 'position:absolute;left:0px;top:48px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентБанковскойКомиссии',
			style: 'position:absolute;left:140px;top:48px;width:92px;height:19px;',
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:454px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:155px;width:454px;height:25px;',
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