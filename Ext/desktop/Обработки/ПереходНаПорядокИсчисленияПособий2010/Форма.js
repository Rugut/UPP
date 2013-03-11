Ext.define('Обработки.ПереходНаПорядокИсчисленияПособий2010.Форма',
	{
	extend: 'Ext.window.Window',
	height: 565,width: 800,
	iconCls: 'bogus',
	title: 'Переход - 2010',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:611px;top:116px;width:181px;height:56px;',
			height: 56,width: 181,
			items:
			[
				{
					title:'ИнформацияНеВведена',
					items:
					[
					]
				},
				{
					title:'ИнформацияВведена',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:611px;top:218px;width:181px;height:56px;',
			height: 56,width: 181,
			items:
			[
				{
					title:'ИнформацияНеВведена',
					items:
					[
					]
				},
				{
					title:'ИнформацияВведена',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:611px;top:284px;width:181px;height:40px;',
			height: 40,width: 181,
			items:
			[
				{
					title:'ДокументыНеОбнаружены',
					items:
					[
					]
				},
				{
					title:'ДокументыОбнаружены',
				},
				{
					title:'ДокументыОбработаны',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:329px;width:784px;height:85px;',
			height: 85,width: 784,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:38px;top:16px;width:532px;height:69px;',
			height: 69,width: 532,
			columns:
			[
				{
					text:'Сотрудник',
				},
				{
					text:'РасчетныйДокумент',
				},
				{
					text:'Действие',
				},
				{
					text:'Выполнено',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:472px;width:784px;height:85px;',
			height: 85,width: 784,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:38px;top:16px;width:532px;height:69px;',
			height: 69,width: 532,
			columns:
			[
				{
					text:'Сотрудник',
				},
				{
					text:'РасчетныйДокумент',
				},
				{
					text:'Действие',
				},
				{
					text:'Выполнено',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:426px;width:784px;height:40px;',
			height: 40,width: 784,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:603px;top:0px;width:181px;height:40px;',
			height: 40,width: 181,
			items:
			[
				{
					title:'ДокументыНеОбнаружены',
					items:
					[
					]
				},
				{
					title:'ДокументыОбнаружены',
				},
				{
					title:'ДокументыОбработаны',
				},
			]
		},
					]
				},
			]
		},
	]
});