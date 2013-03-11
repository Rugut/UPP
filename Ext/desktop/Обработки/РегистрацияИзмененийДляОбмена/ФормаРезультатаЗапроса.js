Ext.define('Обработки.РегистрацияИзмененийДляОбмена.ФормаРезультатаЗапроса',
	{
	extend: 'Ext.window.Window',
	height: 510,width: 576,
	iconCls: 'bogus',
	title: 'Обработка  Регистрация изменений для обмена',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:576px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
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
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
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