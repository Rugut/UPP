Ext.define('Обработки.ОнлайнСервисыРегламентированнойОтчетности.ДополнительнаяИнформацияОВыпуске',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:532px;height:569px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отличия обновления от текущей версии',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:544px;width:532px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ДополнительнаяИнформация',
			style: 'position:absolute;left:8px;top:8px;width:516px;height:528px;',
		},
	]
});