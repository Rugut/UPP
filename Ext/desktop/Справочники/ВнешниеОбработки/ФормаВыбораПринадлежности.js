Ext.define('Справочники.ВнешниеОбработки.ФормаВыбораПринадлежности',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:425px;height:435px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Принадлежность печатной формы',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:409px;height:394px;',
			height: 394,width: 409,
			items:
			[
				{
					title:'Документы',
					items:
					[
		{
			id: 'СписокДокументов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:395px;height:362px;',
			height: 362,width: 395,
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
				data: Ext.create("Данные.Справочники.ВнешниеОбработки").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВнешниеОбработки/ВыбратьПоСсылке/100', timeout: 3},
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
						var грид = Ext.getCmp('СписокДокументов');
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
					]
				},
				{
					title:'Справочники',
					items:
					[
		{
			id: 'СписокСправочников',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:395px;height:362px;',
			height: 362,width: 395,
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
				data: Ext.create("Данные.Справочники.ВнешниеОбработки").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВнешниеОбработки/ВыбратьПоСсылке/100', timeout: 3},
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
						var грид = Ext.getCmp('СписокСправочников');
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
					]
				},
				{
					title:'Отчеты',
					items:
					[
		{
			id: 'СписокОтчетов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:395px;height:362px;',
			height: 362,width: 395,
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
				data: Ext.create("Данные.Справочники.ВнешниеОбработки").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВнешниеОбработки/ВыбратьПоСсылке/100', timeout: 3},
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
						var грид = Ext.getCmp('СписокОтчетов');
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
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:410px;width:425px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				{
					text:'Отмена',
				},
			]
		},
	]
});