Ext.define('Обработки.МенеджерКонтактов.ФормаНастройкиКалендаря',
	{
	extend: 'Ext.window.Window',
	height: 471,width: 357,
	iconCls: 'bogus',
	title: 'Настройка параметров календаря',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:446px;width:357px;height:25px;',
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
			style: 'position:absolute;left:9px;top:7px;width:340px;height:431px;',
			height: 431,width: 340,
			items:
			[
				{
					title:'Общее',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничитьВремяС',
			style: 'position:absolute;left:142px;top:72px;width:38px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничитьВремяПо',
			style: 'position:absolute;left:202px;top:72px;width:38px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственные',
			style: 'position:absolute;left:6px;top:27px;width:326px;height:19px;',
		},
					]
				},
				{
					title:'Заказы',
					items:
					[
					]
				},
			]
		},
	]
});