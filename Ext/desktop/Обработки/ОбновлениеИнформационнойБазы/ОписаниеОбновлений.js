Ext.define('Обработки.ОбновлениеИнформационнойБазы.ОписаниеОбновлений',
	{
	extend: 'Ext.window.Window',
	height: 400,width: 696,
	iconCls: 'bogus',
	title: 'Обновление информационной базы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:696px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});