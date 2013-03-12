Ext.define('Отчеты.ОборотноСальдоваяВедомостьМеждународный.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:437px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Оборотно-сальдовая ведомость',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				{
					text:'Восстановить значения...',
				},
				'-',
				'-',
				{
					text:'Справка',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Восстановить значения',
				},
				{
					text:'Справка',
				},
				{
					text:'Заголовок',
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
					text:'Заголовок',
				},
				'-',
				{
					text:'Сохранить значения...',
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
			name: 'Надпись5',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:51px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'по:',
			style: 'position:absolute;left:149px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:258px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:365px;top:33px;width:231px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Организация:',
			style: 'position:absolute;left:286px;top:33px;width:76px;height:19px;',
		},
	]
});