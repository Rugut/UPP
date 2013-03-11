Ext.define('Отчеты.ПроверкаДостаточностиКлючевыхРесурсов.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	height: 162,width: 349,
	iconCls: 'bogus',
	title: 'Отчет  Проверка достаточности ключевых ресурсов',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПланирования',
			style: 'position:absolute;left:116px;top:60px;width:225px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СценарийПлана',
			style: 'position:absolute;left:116px;top:85px;width:225px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:349px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:137px;width:349px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:116px;top:33px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:229px;top:33px;width:87px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:321px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СценарийРесурсов',
			style: 'position:absolute;left:116px;top:110px;width:225px;height:19px;',
		},
	]
});