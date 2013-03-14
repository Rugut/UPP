Ext.define('Справочники.КодыОКПД.ФормаВыбораПоиск',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:788px;height:473px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Коды ОКПД',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:451px;height:407px;',
			height: 407,width: 451,
			columns:
			[
				{
					text:'Код',
					width:'100',
				},
				{
					text:'Имя',
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:788px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Иерархический просмотр',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:448px;width:788px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:466px;top:33px;width:314px;height:407px;',
			height: 407,width: 314,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:56px;top:54px;width:220px;height:19px;',
			height: 19,width: 220,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Найдено',
			text: 'Введите строку поиска',
			style: 'position:absolute;left:20px;top:0px;width:142px;height:19px;text-align:center;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:0px;width:308px;height:53px;',
			height: 53,width: 308,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаПоиска',
			style: 'position:absolute;left:6px;top:6px;width:296px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:175px;top:26px;width:127px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:26px;width:113px;height:24px;',
			items:
			[
				{
					text:'Поиск',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'ОбновитьИндекс',
			text: 'Обновить индекс',
			style: 'position:absolute;left:13px;top:384px;width:117px;height:23px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаАктуальностиИндекса',
			text: 'Дата актуальности индекса
Признак актуальности индекса',
			style: 'position:absolute;left:13px;top:343px;width:294px;height:38px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИнформация',
			text: '',
			style: 'position:absolute;left:472px;top:33px;width:308px;height:112px;',
		},
	]
});