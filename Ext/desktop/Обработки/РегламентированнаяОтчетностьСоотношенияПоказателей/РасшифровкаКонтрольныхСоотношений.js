Ext.define('Обработки.РегламентированнаяОтчетностьСоотношенияПоказателей.РасшифровкаКонтрольныхСоотношений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:408px;height:543px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Расшифровка соотношений показателей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:518px;width:408px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Активизировать родительский отчет',
				},
				'-',
				{
					text:'Сохранить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});