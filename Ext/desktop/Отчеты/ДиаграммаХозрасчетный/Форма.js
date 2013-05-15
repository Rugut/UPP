Ext.define('Отчеты.ДиаграммаХозрасчетный.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:400px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет Диаграмма',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНач',
			style: 'position:absolute;left:68px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:156px;top:33px;width:28px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаКон',
			style: 'position:absolute;left:188px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:436px;top:33px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:508px;top:33px;width:124px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'НастройкаПериода',
			text: '...',
			style: 'position:absolute;left:276px;top:33px;width:24px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипДиаграммы',
			text: 'Тип диаграммы:',
			style: 'position:absolute;left:420px;top:56px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:508px;top:56px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчет',
			text: 'Счет:',
			style: 'position:absolute;left:308px;top:33px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Счет',
			style: 'position:absolute;left:344px;top:33px;width:80px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:640px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Сформировать',
				},
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});