Ext.require(['Данные.Обработки.Обозреватель'], function () 
{
	Ext.define('Обработки.Обозреватель.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Web-страница конфигурации',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			width: 780,
			height: 25,
			items:
			[
				{
					text:'Назад',
					tooltip:'',
				},
				{
					text:'Вперед',
					tooltip:'',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
				'-',
				{
					text:'Показать главную страницу',
					tooltip:'11a0757-6397-4d56-8b15-61ca46732cb',
				},
				'-',
				{
					text:'Справка',
					tooltip:'7c81c62-d6ad-4eae-9cea-0e203182db6',
					iconCls:'x-Help',
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});