Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РасширенныеНастройкиУчетнойЗаписи',
	{
	extend: 'Ext.window.Window',
	height: 473,width: 468,
	iconCls: 'bogus',
	title: 'Расширенные настройки учетной записи',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:448px;width:468px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Справка',
				},
				{
					text:'Отмена',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПоУмолчанию',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:216px;width:452px;height:37px;',
			height: 37,width: 452,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:154px;width:452px;height:31px;',
			height: 31,width: 452,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификаторСистемыОтправителяПФР',
			style: 'position:absolute;left:372px;top:0px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:30px;top:96px;width:430px;height:50px;',
			height: 50,width: 430,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолноеНаименованиеУполномоченногоПредставителя',
			style: 'position:absolute;left:184px;top:6px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИННУполномоченногоПредставителя',
			style: 'position:absolute;left:184px;top:31px;width:130px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КППУполномоченногоПредставителя',
			style: 'position:absolute;left:329px;top:31px;width:101px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:185px;width:452px;height:31px;',
			height: 31,width: 452,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификаторСистемыОтправителяФСГС',
			style: 'position:absolute;left:372px;top:0px;width:80px;height:19px;',
		},
					]
				},
			]
		},
	]
});