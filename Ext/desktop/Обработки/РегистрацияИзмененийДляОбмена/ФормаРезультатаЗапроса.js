Ext.define('Обработки.РегистрацияИзмененийДляОбмена.ФормаРезультатаЗапроса',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:576px;height:510px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Регистрация изменений для обмена',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:576px;height:25px;',
			items:
			[
				'-',
				{
					text:'Выполнить',
				},
				{
					text:'Очистить',
				},
				{
					text:'Параметры',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:485px;width:576px;height:25px;',
			items:
			[
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:272px;width:560px;height:205px;',
			height: 205,width: 560,
			columns:
			[
			]
		},
	]
});