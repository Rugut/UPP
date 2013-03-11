Ext.define('Отчеты.СправкаРасчетСписаниеРБП.Отчет',
	{
	extend: 'Ext.window.Window',
	height: 416,width: 604,
	iconCls: 'bogus',
	title: 'Списание расходов будущих периодов',
	
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
					text:'Подменю',
				},
				{
					text:'Действие1',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Подписи',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подписи',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Заголовок',
				},
				{
					text:'Действие2',
				},
				{
					text:'Настройка',
				},
				{
					text:'Действие',
				},
				{
					text:'Сформировать',
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