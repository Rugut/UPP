Ext.define('Отчеты.СправкаРасчетНалогаНаПрибыль.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:413px;height:203px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:399px;height:162px;',
			height: 162,width: 399,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:32px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 306,
			height: 19,
			style: 'position:absolute;left:84px;top:30px;width:306px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Выводить данные',
			style: 'position:absolute;left:6px;top:59px;width:384px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'За период:',
			style: 'position:absolute;left:6px;top:6px;width:65px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставлениеПериодаРегистрации',
			width: 150,
			height: 19,
			style: 'position:absolute;left:84px;top:6px;width:150px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Бухгалтерского учета',
			style: 'position:absolute;left:6px;top:80px;width:384px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Налогового учета',
			style: 'position:absolute;left:6px;top:99px;width:384px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Бухгалтерского учета с постоянными и временными разницами',
			style: 'position:absolute;left:7px;top:118px;width:384px;height:16px;',
		},
			]
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
			style: 'position:absolute;left:0px;top:178px;width:413px;height:25px;',
			dock: 'bottom',
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
					text:'Закрыть',
				},
			]
		},
	]
});