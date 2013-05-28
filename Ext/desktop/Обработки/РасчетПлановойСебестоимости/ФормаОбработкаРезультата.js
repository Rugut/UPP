Ext.define('Обработки.РасчетПлановойСебестоимости.ФормаОбработкаРезультата',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:362px;height:118px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка результата',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:93px;width:362px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:89px;top:6px;width:265px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Статья затрат:',
			style: 'position:absolute;left:8px;top:31px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СтатьяЗатрат',
			width: 265,
			height: 19,
			style: 'position:absolute;left:89px;top:31px;width:265px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Действие:',
			style: 'position:absolute;left:8px;top:6px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:58px;width:346px;height:28px;',
			height: 28,width: 346,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Сумма',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Сумма:',
			style: 'position:absolute;left:0px;top:0px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Сумма',
			style: 'position:absolute;left:82px;top:0px;width:102px;height:19px;',
		},
					]
				},
				{
					title:'СтатьяЗатрат',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Новая статья:',
			style: 'position:absolute;left:0px;top:0px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'НоваяСтатьяЗатрат',
			width: 265,
			height: 19,
			style: 'position:absolute;left:81px;top:0px;width:265px;height:19px;',
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
	]
});