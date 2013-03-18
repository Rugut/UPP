Ext.define('Обработки.КонсольОтчетов.ФормаРедактированияМакета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Редактирование макета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:400px;height:25px;',
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
					text:'Отмена',
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
					text:'Получить макет',
				},
				'-',
				{
					text:'Получить макет с оформлением',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
					]
				},
				{
					title:'Параметры',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Установленный заголовок',
			style: 'position:absolute;left:15px;top:14px;width:171px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Макет с оформлением',
			style: 'position:absolute;left:15px;top:34px;width:171px;height:15px;',
		},
					]
				},
			]
		},
	]
});