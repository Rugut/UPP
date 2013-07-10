Ext.define('Обработки.Обозреватель.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Web-страница конфигурации',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Назад',
				},
				{
					text:'Вперед',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Показать главную страницу',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});