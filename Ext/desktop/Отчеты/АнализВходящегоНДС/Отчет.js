Ext.define('Отчеты.АнализВходящегоНДС.Отчет',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:447px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Анализ входящего НДС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Организация:',
			style: 'position:absolute;left:288px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:366px;top:33px;width:230px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Сформировать',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Настройка...',
				},
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Сохранить значения...',
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
			style: 'position:absolute;left:248px;top:33px;width:20px;height:19px;',
		},
	]
});