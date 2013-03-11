Ext.define('Отчеты.XYZABCАнализПродаж.ФормаНастройкиДиаграммы',
	{
	extend: 'Ext.window.Window',
	height: 394,width: 270,
	iconCls: 'bogus',
	title: 'Настройка диаграммы (XYZ/ABC-анализ продаж)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:369px;width:270px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:254px;height:353px;',
			height: 353,width: 254,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:92px;width:240px;height:235px;',
			height: 235,width: 240,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Представление',
				},
			]
		},
					]
				},
				{
					title:'НастройкаГистограммы',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:240px;height:159px;',
			height: 159,width: 240,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МаксимальноеЗначение',
			style: 'position:absolute;left:135px;top:0px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Интервал',
			style: 'position:absolute;left:135px;top:24px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВысотаГистрограммы',
			style: 'position:absolute;left:135px;top:48px;width:105px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
	]
});