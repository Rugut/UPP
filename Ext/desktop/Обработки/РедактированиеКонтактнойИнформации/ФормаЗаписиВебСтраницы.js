Ext.define('Обработки.РедактированиеКонтактнойИнформации.ФормаЗаписиВебСтраницы',
	{
	extend: 'Ext.window.Window',
	height: 189,width: 334,
	iconCls: 'bogus',
	title: 'Веб-страница',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Представление',
			style: 'position:absolute;left:106px;top:109px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:106px;top:137px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:334px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:164px;width:334px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Объект',
			style: 'position:absolute;left:106px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Вид',
			style: 'position:absolute;left:106px;top:61px;width:220px;height:19px;',
		},
	]
});