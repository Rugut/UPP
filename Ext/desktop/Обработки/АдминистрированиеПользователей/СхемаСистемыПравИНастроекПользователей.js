Ext.require(['Данные.Обработки.АдминистрированиеПользователей'], function () 
{
	Ext.define('Обработки.АдминистрированиеПользователей.СхемаСистемыПравИНастроекПользователей',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:844px;height:389px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Схема системы прав и настроек пользователей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:364px;width:844px;height:25px;',
			width: 844,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});