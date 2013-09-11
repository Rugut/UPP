Ext.require(['Данные.Обработки.РедактированиеДанныхРаспределения'], function () 
{
	Ext.define('Обработки.РедактированиеДанныхРаспределения.Редактирование',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:400px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: '',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			width: 500,
			height: 25,
			items:
			[
				{
					text:'Сохранить настройку',
					tooltip:'Сохранить текущую настройку',
				},
				{
					text:'Сохранить настройку как...',
					tooltip:'Сохранить текущую настройку как...',
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:375px;width:500px;height:25px;',
			width: 500,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'Закрыть, сохранив изменения',
				},
				{
					text:'Отмена',
					tooltip:'Закрыть форму, не сохраняя изменений',
				},
			]
		},
	]
	});
});