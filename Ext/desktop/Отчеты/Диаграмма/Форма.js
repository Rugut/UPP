Ext.require(['Данные.Отчеты.Диаграмма'], function () 
{
	Ext.define('Отчеты.Диаграмма.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:466px;height:430px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Диаграмма',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:466px;height:25px;',
			width: 466,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Сформировать',
					tooltip:'8ef786c-fd3b-4ff0-98dc-2e22f37113f',
				},
				'-',
				{
					text:'Транспонировать диаграмму',
					tooltip:'1ba3655-3e44-4bd9-ab1f-6be0573bc78',
				},
				'-',
				{
					text:'Печать',
					tooltip:'',
				},
				'-',
				{
					text:'Настройка ...',
					tooltip:'',
				},
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
				},
					]
				},
				{
					text:'Сформировать',
					tooltip:'8ef786c-fd3b-4ff0-98dc-2e22f37113f',
				},
				'-',
				{
					text:'Транспонировать диаграмму',
					tooltip:'1ba3655-3e44-4bd9-ab1f-6be0573bc78',
				},
				'-',
				{
					text:'Печать',
					tooltip:'Напечатать диаграмму',
				},
				'-',
				{
					text:'Настройка ...',
					tooltip:'',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Тип диаграммы:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:98px;top:33px;width:360px;height:19px;',
			width: 360,
			height: 19,
		},
		],
	}],
	dockedItems:
	[
	]
	});
});