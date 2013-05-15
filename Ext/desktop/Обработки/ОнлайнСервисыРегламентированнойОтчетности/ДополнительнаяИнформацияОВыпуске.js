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
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ДополнительнаяИнформация',
			style: 'position:absolute;left:8px;top:8px;width:516px;height:528px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:544px;width:532px;height:25px;',
			dock: 'bottom',
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
	]
});