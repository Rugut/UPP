Ext.require(['Данные.Обработки.ПолучениеПочты'], function () 
{
	Ext.define('Обработки.ПолучениеПочты.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:248px;height:75px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка получения почты',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'checkbox',
			boxLabel: 'Получать только непрочитанные',
			style: 'position:absolute;left:8px;top:8px;width:187px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Получать письма без вложенных файлов',
			style: 'position:absolute;left:8px;top:27px;width:232px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:50px;width:248px;height:25px;',
			width: 248,
			height: 25,
			dock: 'bottom',
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
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});