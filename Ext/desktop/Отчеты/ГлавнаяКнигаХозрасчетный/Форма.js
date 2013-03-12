Ext.define('Отчеты.ГлавнаяКнигаХозрасчетный.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:728px;height:452px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Главная книга',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:728px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Настройка...',
				},
				{
					text:'Настройка...',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Заголовок',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:276px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:352px;top:33px;width:368px;height:19px;',
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
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:56px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
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