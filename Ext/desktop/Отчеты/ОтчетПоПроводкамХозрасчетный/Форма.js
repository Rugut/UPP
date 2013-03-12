Ext.define('Отчеты.ОтчетПоПроводкамХозрасчетный.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:452px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет по проводкам',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:68px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:156px;top:33px;width:24px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:184px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:320px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:392px;top:33px;width:380px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				'-',
				{
					text:'Сформировать',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Настройка...',
				},
				'-',
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Справка',
				},
				'-',
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Заголовок',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:272px;top:33px;width:20px;height:19px;',
		},
	]
});