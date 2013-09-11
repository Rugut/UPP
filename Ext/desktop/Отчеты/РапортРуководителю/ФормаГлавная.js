Ext.require(['Данные.Отчеты.РапортРуководителю'], function () 
{
	Ext.define('Отчеты.РапортРуководителю.ФормаГлавная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:656px;height:437px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Рапорт руководителю',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:656px;height:25px;',
			width: 656,
			height: 25,
			items:
			[
				'-',
				{
					text:'Сформировать',
					tooltip:'Обновить данные рапорта',
				},
				'-',
				{
					text:'Опубликовать',
					tooltip:'Рассылка рапорта адресатам по электронной почте и сохранение в файле (если установлены соответствующие опции настройки)',
				},
				'-',
				{
					text:'Настройка',
					tooltip:'Настройка',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});