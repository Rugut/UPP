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
				'-',
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
		{
			xtype: 'radio',
			boxLabel: 'поиск значения',
			style: 'position:absolute;left:57px;top:33px;width:107px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'поиск текста',
			style: 'position:absolute;left:57px;top:50px;width:100px;height:15px;',
		},
	]
});