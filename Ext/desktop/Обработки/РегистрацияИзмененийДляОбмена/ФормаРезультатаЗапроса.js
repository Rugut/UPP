Ext.require(['Данные.Обработки.РегистрацияИзмененийДляОбмена'], function () 
{
	Ext.define('Обработки.РегистрацияИзмененийДляОбмена.ФормаРезультатаЗапроса',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:576px;height:510px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Обработка  Регистрация изменений для обмена',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:576px;height:25px;',
			width: 576,
			height: 25,
			items:
			[
				{
					text:'Выполнить',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'Параметры',
				},
				'-',
				{
					text:'Очистить',
					tooltip:'',
				},
			]
		},
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегистрацияИзмененийДляОбмена/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РегистрацияИзмененийДляОбмена.ФормаРезультатаЗапросаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РегистрацияИзмененийДляОбмена.ФормаРезультатаЗапросаСобытия");
							obj.ПередатьСсылку(стрЗнач);
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
			style: 'position:absolute;left:0px;top:485px;width:576px;height:25px;',
			width: 576,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'ОК',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});