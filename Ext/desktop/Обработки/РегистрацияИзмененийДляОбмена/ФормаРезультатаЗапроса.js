Ext.define('Обработки.РегистрацияИзмененийДляОбмена.ФормаРезультатаЗапроса',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:576px;height:510px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Регистрация изменений для обмена',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ТаблицаРезультата',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегистрацияИзмененийДляОбмена/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ТаблицаРезультата');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:576px;height:25px;',
			dock: 'top',
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
			dock: 'bottom',
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
	]
});