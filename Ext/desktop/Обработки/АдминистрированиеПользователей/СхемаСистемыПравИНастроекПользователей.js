Ext.require(['Данные.Обработки.АдминистрированиеПользователей'], function () 
{
	Ext.define('Обработки.АдминистрированиеПользователей.СхемаСистемыПравИНастроекПользователей',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:844px;height:389px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Схема системы прав и настроек пользователей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:364px;width:844px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
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