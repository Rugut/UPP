Ext.define('Отчеты.СправкаРасчетПересчетСтоимостиОтложенныхНалоговыхАктивовИОбязательств.Отчет',
	{
	extend: 'Ext.window.Window',
	height: 416,width: 604,
	iconCls: 'bogus',
	title: 'Пересчет стоимости отложенных налоговых активов и обязательств',
	
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
					text:'Разделитель2',
				},
				{
					text:'Подписи',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подписи',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель3',
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