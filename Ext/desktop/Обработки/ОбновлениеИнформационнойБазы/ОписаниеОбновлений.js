Ext.require(['Данные.Обработки.ОбновлениеИнформационнойБазы'], function () 
{
	Ext.define('Обработки.ОбновлениеИнформационнойБазы.ОписаниеОбновлений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:696px;height:400px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Обновление информационной базы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:696px;height:25px;',
			width: 696,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Справка',
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