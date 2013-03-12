Ext.define('Отчеты.СравнительныйАнализДвиженияДенежныхСредств.ФормаПланФактныйАнализДвиженияДенежныхСредств',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:436px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Отбор',
				},
				{
					text:'Справка',
				},
				'-',
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Восстановить значения',
				},
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Настройка...',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Сохранить значения...',
				},
				{
					text:'Настройка...',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Восстановить значения...',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:588px;height:48px;',
			height: 48,width: 588,
			items:
			[
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиЦФО',
			style: 'position:absolute;left:292px;top:24px;width:296px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подразделение:',
			style: 'position:absolute;left:0px;top:24px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиВидДенежныхСредств',
			style: 'position:absolute;left:292px;top:0px;width:296px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Форма оплаты:',
			style: 'position:absolute;left:0px;top:0px;width:108px;height:19px;',
		},
					]
				},
			]
		},
	]
});