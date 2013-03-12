Ext.define('Обработки.РасшифровкаРегламентированнойОтчетности.РасшифровкаЗначенияПоказателя',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:408px;height:543px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Расшифровка значений показателей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:518px;width:408px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Печать',
				},
				{
					text:'Сохранить',
				},
				'-',
				{
					text:'Активизировать родительский отчет',
				},
				'-',
			]
		},
	]
});