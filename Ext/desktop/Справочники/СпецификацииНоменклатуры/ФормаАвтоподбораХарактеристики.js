Ext.require(['Данные.Справочники.СпецификацииНоменклатуры'], function () 
{
	Ext.define('Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораХарактеристики',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:192px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Автоподбор характеристики номенклатуры',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:6px;width:484px;height:153px;',
			height: 153,width: 484,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Исходные комплектующие',
					items:
					[
		{
			id: 'АвтоподборХарактеристики',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:484px;height:129px;',
			height: 129,width: 484,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Свойство',
					width:'305',
					dataIndex:'Свойство',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.СпецификацииНоменклатуры").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпецификацииНоменклатуры/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Свойство',
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
						var грид = Ext.getCmp('АвтоподборХарактеристики');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораХарактеристикиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораХарактеристикиСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Возвратные отходы',
					items:
					[
		{
			id: 'АвтоподборХарактеристикиОтходы',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:484px;height:129px;',
			height: 129,width: 484,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Свойство',
					width:'306',
					dataIndex:'Свойство',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.СпецификацииНоменклатуры").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпецификацииНоменклатуры/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Свойство',
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
						var грид = Ext.getCmp('АвтоподборХарактеристикиОтходы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораХарактеристикиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораХарактеристикиСобытия");
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
			style: 'position:absolute;left:0px;top:167px;width:500px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
	});
});