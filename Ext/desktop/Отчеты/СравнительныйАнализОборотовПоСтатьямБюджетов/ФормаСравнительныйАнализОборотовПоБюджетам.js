Ext.define('Отчеты.СравнительныйАнализОборотовПоСтатьямБюджетов.ФормаСравнительныйАнализОборотовПоБюджетам',
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
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Настройка...',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Справка',
				},
				'-',
				{
					text:'Сформировать',
				},
				{
					text:'Справка',
				},
				{
					text:'Отбор',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Закрыть',
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
				'-',
				{
					text:'Восстановить значения',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:588px;height:48px;',
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
			boxLabel: 'ЦФО:',
			style: 'position:absolute;left:0px;top:24px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиСтатьяОборотов',
			style: 'position:absolute;left:292px;top:0px;width:296px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Статья оборотов:',
			style: 'position:absolute;left:0px;top:0px;width:108px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяБаланса',
			style: 'position:absolute;left:98px;top:33px;width:498px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Статья баланса:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
	]
});