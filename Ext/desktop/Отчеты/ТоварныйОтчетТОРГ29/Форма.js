Ext.define('Отчеты.ТоварныйОтчетТОРГ29.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Товарный отчет (ТОРГ-29)',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:437px;top:33px;width:335px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:362px;top:33px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНач',
			style: 'position:absolute;left:88px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаКон',
			style: 'position:absolute;left:188px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'по:',
			style: 'position:absolute;left:170px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:270px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерОтчета',
			style: 'position:absolute;left:88px;top:56px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерОтчета',
			text: 'Номер отчета:',
			style: 'position:absolute;left:8px;top:56px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Склад',
			style: 'position:absolute;left:437px;top:56px;width:335px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСклад',
			text: 'Склад:',
			style: 'position:absolute;left:362px;top:56px;width:70px;height:19px;text-align:left;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Сформировать',
				},
			]
		},
	]
});