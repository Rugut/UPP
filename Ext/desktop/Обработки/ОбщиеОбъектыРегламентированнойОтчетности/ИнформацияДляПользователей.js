Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ИнформацияДляПользователей',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:720px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Особенности текущей версии подсистемы ""Регламентированная отчетность""',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:720px;height:25px;',
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
			xtype: 'checkbox',
			boxLabel: 'Не открывать это окно автоматически',
			style: 'position:absolute;left:5px;top:430px;width:220px;height:15px;',
		},
	]
});