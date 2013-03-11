Ext.define('Обработки.КонсольОтчетов.ФормаРедактированияМакета',
	{
	extend: 'Ext.window.Window',
	height: 292,width: 400,
	iconCls: 'bogus',
	title: 'Редактирование макета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:400px;height:25px;',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:267px;',
			height: 267,width: 400,
			items:
			[
				{
					title:'Макет',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:398px;height:25px;',
			items:
			[
				{
					text:'Справка',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'МакетПоУмолчанию',
				},
				{
					text:'Разделитель',
				},
				{
					text:'МакетСОформлением',
				},
			]
		},
					]
				},
				{
					title:'Параметры',
					items:
					[
					]
				},
			]
		},
	]
});