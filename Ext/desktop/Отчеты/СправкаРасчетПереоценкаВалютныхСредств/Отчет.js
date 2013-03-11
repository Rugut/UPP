Ext.define('Отчеты.СправкаРасчетПереоценкаВалютныхСредств.Отчет',
	{
	extend: 'Ext.window.Window',
	height: 416,width: 604,
	iconCls: 'bogus',
	title: 'Переоценка валютных средств',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:254px;top:33px;width:342px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				{
					text:'Заголовок',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Подписи',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Настройка',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Подписи',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеПериодаРегистрации',
			style: 'position:absolute;left:61px;top:33px;width:109px;height:19px;',
		},
	]
});