Ext.define('Обработки.ОбновлениеИнформационнойБазы.ОписаниеОбновлений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:696px;height:400px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обновление информационной базы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:696px;height:25px;',
			items:
			[
				'-',
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
			]
		},
	]
});