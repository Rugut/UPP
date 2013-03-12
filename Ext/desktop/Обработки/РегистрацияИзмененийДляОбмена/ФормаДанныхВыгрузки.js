Ext.define('Обработки.РегистрацияИзмененийДляОбмена.ФормаДанныхВыгрузки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:536px;height:466px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Форма просмотра текста',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:441px;width:536px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
	]
});