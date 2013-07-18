Ext.require(['Данные.Обработки.УниверсальныйЖурналДокументов'], function () 
{
	Ext.define('Обработки.УниверсальныйЖурналДокументов.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:681px;height:399px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
			items:
			[
				{
					text:'Заполнить автоматически все общие графы',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:8px;top:7px;width:609px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:8px;top:180px;width:665px;height:16px;',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйЖурналДокументов/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.УниверсальныйЖурналДокументов.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйЖурналДокументов.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(ссылка);
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйЖурналДокументов/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.УниверсальныйЖурналДокументов.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйЖурналДокументов.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:614px;top:196px;width:59px;height:24px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Отметить для всех документов по имени текущего реквизита',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйЖурналДокументов/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.УниверсальныйЖурналДокументов.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйЖурналДокументов.ФормаНастройкиСобытия");
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
			style: 'position:absolute;left:0px;top:374px;width:681px;height:25px;',
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
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:618px;top:5px;width:55px;height:24px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Изменить',
				},
				{
					text:'&Удалить',
				},
			]
		},
	]
	});
});