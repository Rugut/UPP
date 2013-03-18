Ext.define('Отчеты.XYZABCАнализПродаж.ФормаНастройкиДиаграммы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:270px;height:394px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка диаграммы (XYZ/ABC-анализ продаж)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:369px;width:270px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
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
					text:'',
					width:'20',
				},
				{
					text:'Имя показателя',
					width:'220',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Тип',
			text: 'Тип:',
			style: 'position:absolute;left:6px;top:6px;width:37px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Диаграмма',
			style: 'position:absolute;left:21px;top:26px;width:153px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Гистограмма',
			style: 'position:absolute;left:21px;top:43px;width:153px;height:15px;',
		},
					]
				},
				{
					title:'Настройка гистограммы',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:240px;height:159px;',
			height: 159,width: 240,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьМаксимальноеЗначение',
			text: 'Максимальное значение:',
			style: 'position:absolute;left:0px;top:0px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МаксимальноеЗначение',
			style: 'position:absolute;left:135px;top:0px;width:105px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнтервал',
			text: 'Интервал:',
			style: 'position:absolute;left:0px;top:24px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Интервал',
			style: 'position:absolute;left:135px;top:24px;width:105px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать распределение по классам',
			style: 'position:absolute;left:0px;top:76px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВысота',
			text: 'Высота:',
			style: 'position:absolute;left:0px;top:48px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВысотаГистрограммы',
			style: 'position:absolute;left:135px;top:48px;width:105px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Выводить',
			text: 'Выводить',
			style: 'position:absolute;left:0px;top:101px;width:130px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'количество объектов',
			style: 'position:absolute;left:19px;top:121px;width:206px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'сумму параметров анализа',
			style: 'position:absolute;left:19px;top:140px;width:206px;height:19px;',
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