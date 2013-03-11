Ext.define('Обработки.ПолучениеПочты.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 75,width: 248,
	iconCls: 'bogus',
	title: 'Настройка получения почты',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:50px;width:248px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});