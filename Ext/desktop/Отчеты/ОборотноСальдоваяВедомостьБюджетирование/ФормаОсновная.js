Ext.define('Отчеты.ОборотноСальдоваяВедомостьБюджетирование.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:448px;',
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
				'-',
				{
					text:'Сформировать',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Сохранить значения...',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Восстановить значения',
				},
				{
					text:'Справка',
				},
				'-',
				{
					text:'Справка',
				},
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Настройка...',
				},
				{
					text:'Настройка...',
				},
				'-',
				'-',
				{
					text:'Восстановить значения...',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:66px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:166px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'по:',
			style: 'position:absolute;left:148px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:350px;top:33px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Сценарий:',
			style: 'position:absolute;left:288px;top:33px;width:60px;height:19px;',
		},
	]
});