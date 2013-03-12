Ext.define('Отчеты.ВзаиморасчетыСКомитентами.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:437px;',
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
					text:'Справка',
				},
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Сформировать',
				},
				{
					text:'Восстановить значения',
				},
				{
					text:'Восстановить значения...',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Сформировать',
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
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Настройка...',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:64px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:173px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:51px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:149px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:258px;top:33px;width:19px;height:19px;',
		},
	]
});