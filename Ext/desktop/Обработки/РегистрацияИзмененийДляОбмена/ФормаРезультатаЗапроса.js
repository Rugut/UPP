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
				{
					text:'Выполнить',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Очистить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:485px;width:576px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:272px;width:560px;height:205px;',
			height: 205,width: 560,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегистрацияИзмененийДляОбмена/ВыбратьПоСсылке/100'},
				fields:
				[
				]
			},
		},
	]
});