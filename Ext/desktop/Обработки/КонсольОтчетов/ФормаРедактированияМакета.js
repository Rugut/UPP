Ext.require(['Данные.Обработки.КонсольОтчетов'], function () 
{
	Ext.define('Обработки.КонсольОтчетов.ФормаРедактированияМакета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Редактирование макета',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:267px;',
			height: 267,width: 400,
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:398px;height:25px;',
			width: 398,
			height: 25,
			items:
			[
				{
					text:'Получить макет',
					tooltip:'Получить макет по умолчанию',
				},
				'-',
				{
					text:'Получить макет с оформлением',
					tooltip:'Получить макет с оформлением',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
					]
				},
				{
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
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:400px;height:25px;',
			width: 400,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'',
				},
				'-',
				{
					text:'Отмена',
					tooltip:'Закрыть',
				},
			]
		},
	]
	});
});