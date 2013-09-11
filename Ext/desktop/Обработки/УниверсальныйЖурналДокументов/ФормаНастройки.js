Ext.require(['Данные.Обработки.УниверсальныйЖурналДокументов'], function () 
{
	Ext.define('Обработки.УниверсальныйЖурналДокументов.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:681px;height:399px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Общий журнал документов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:196px;width:255px;height:24px;',
			width: 255,
			height: 24,
			items:
			[
				{
					text:'Заполнить автоматически все общие графы',
					tooltip:'Заполнить автоматически все общие графы',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Рамка',
			style: 'position:absolute;left:8px;top:7px;width:609px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Рамка',
			style: 'position:absolute;left:8px;top:180px;width:665px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'РеквизитыДокументов',
			xtype: 'grid',
			style: 'position:absolute;left:269px;top:220px;width:404px;height:146px;',
			height: 146,width: 404,
			columns:
			[
				{
					text:'Представление',
					width:'146',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Имя',
					width:'150',
					dataIndex:'Имя',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйЖурналДокументов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Представление',
					},
					{
						name:'Имя',
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
						var грид = Ext.getCmp('РеквизитыДокументов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйЖурналДокументов.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйЖурналДокументов.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'СписокГраф',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:220px;width:255px;height:146px;',
			height: 146,width: 255,
			columns:
			[
				{
					text:'',
					width:'0',
					dataIndex:'',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйЖурналДокументов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'',
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
						var грид = Ext.getCmp('СписокГраф');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйЖурналДокументов.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйЖурналДокументов.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:618px;top:5px;width:55px;height:24px;',
			width: 55,
			height: 24,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Изменить',
					tooltip:'Изменить состав документов журнала',
				},
				{
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:614px;top:196px;width:59px;height:24px;',
			width: 59,
			height: 24,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Отметить для всех документов по имени текущего реквизита',
					tooltip:'Отметить для всех документов по имени текущего реквизита',
				},
			]
		},
		{
			id: 'СписокОбрабатываемыхДокументов',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:29px;width:665px;height:146px;',
			height: 146,width: 665,
			columns:
			[
				{
					text:'',
					width:'0',
					dataIndex:'',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйЖурналДокументов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'',
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
						var грид = Ext.getCmp('СписокОбрабатываемыхДокументов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.УниверсальныйЖурналДокументов.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйЖурналДокументов.ФормаНастройкиСобытия");
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
			style: 'position:absolute;left:0px;top:374px;width:681px;height:25px;',
			width: 681,
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
					text:'Отмена',
					tooltip:'Закрыть',
				},
			]
		},
	]
	});
});