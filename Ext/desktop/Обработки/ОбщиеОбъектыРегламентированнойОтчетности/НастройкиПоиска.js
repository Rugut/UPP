Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.НастройкиПоиска',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:403px;height:98px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Поиск',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:73px;width:403px;height:25px;',
			items:
			[
				{
					text:'Искать',
				},
				{
					text:'Справка',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Искать:',
			style: 'position:absolute;left:8px;top:11px;width:40px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИскомоеЗначение',
			style: 'position:absolute;left:57px;top:9px;width:338px;height:19px;',
		},
	]
});