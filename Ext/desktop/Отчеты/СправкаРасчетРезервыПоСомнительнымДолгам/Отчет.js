Ext.define('Отчеты.СправкаРасчетРезервыПоСомнительнымДолгам.Отчет',
	{
	extend: 'Ext.window.Window',
	height: 416,width: 604,
	iconCls: 'bogus',
	title: 'Резервы по сомнительным долгам',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:250px;top:33px;width:346px;height:19px;',
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
					text:'Подписи',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Подписи',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Настройка',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие',
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
			style: 'position:absolute;left:61px;top:34px;width:109px;height:19px;',
		},
	]
});