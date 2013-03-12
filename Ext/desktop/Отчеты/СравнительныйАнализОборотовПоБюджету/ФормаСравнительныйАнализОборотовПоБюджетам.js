Ext.define('Отчеты.СравнительныйАнализОборотовПоБюджету.ФормаСравнительныйАнализОборотовПоБюджетам',
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
					text:'Настройка...',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Отбор',
				},
				{
					text:'Справка',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Восстановить значения',
				},
				'-',
				'-',
				{
					text:'Справка',
				},
				{
					text:'Настройка...',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Заголовок',
				},
				'-',
				'-',
				{
					text:'Сформировать',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
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
			name: 'ПолеНастройкиПроект',
			style: 'position:absolute;left:292px;top:0px;width:296px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проект:',
			style: 'position:absolute;left:0px;top:0px;width:108px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Бюджет',
			style: 'position:absolute;left:98px;top:33px;width:498px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Бюджет:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
	]
});