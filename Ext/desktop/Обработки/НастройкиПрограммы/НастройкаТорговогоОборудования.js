Ext.define('Обработки.НастройкиПрограммы.НастройкаТорговогоОборудования',
	{
	extend: 'Ext.window.Window',
	height: 327,width: 650,
	iconCls: 'bogus',
	title: 'Настройка торгового оборудования',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:302px;width:650px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Действие',
				},
				{
					text:'ДействиеЗаписать',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:166px;height:286px;',
			height: 286,width: 166,
			columns:
			[
				{
					text:'Представление',
				},
				{
					text:'ИмяРаздела',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:180px;top:8px;width:462px;height:286px;',
			height: 286,width: 462,
			items:
			[
				{
					title:'ТорговоеОборудование',
					items:
					[
					]
				},
				{
					title:'ВыгрузкаТоваров',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокНазначенияPLU',
			style: 'position:absolute;left:237px;top:48px;width:219px;height:20px;',
		},
					]
				},
				{
					title:'Штрихкоды',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'EAN13ПрефиксШтучногоТовара',
			style: 'position:absolute;left:213px;top:48px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'EAN13ПрефиксВесовогоТовара',
			style: 'position:absolute;left:213px;top:108px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'EAN13ДлинаКодаВесовогоТовара',
			style: 'position:absolute;left:213px;top:165px;width:52px;height:19px;',
		},
					]
				},
			]
		},
	]
});