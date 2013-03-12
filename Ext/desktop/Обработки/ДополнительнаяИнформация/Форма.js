Ext.define('Обработки.ДополнительнаяИнформация.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:730px;height:554px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Информация',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:730px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:529px;width:730px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				'-',
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать при начале работы',
			style: 'position:absolute;left:12px;top:534px;width:191px;height:15px;',
		},
	]
});