Ext.require(['Данные.Справочники.ХарактеристикиНоменклатуры'], function () 
{
	Ext.define('Справочники.ХарактеристикиНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:416px;height:260px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Характеристики номенклатуры',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СписокХарактеристикиНоменклатуры',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:400px;height:219px;',
			height: 219,width: 400,
			columns:
			[
				{
					text:' ',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Владелец',
					width:'120',
					dataIndex:'Владелец',
					flex:1,
				},
				{
					text:'Наименование',
					width:'320',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'ОКП',
					width:'128',
					dataIndex:'ОКП.Представление',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ХарактеристикиНоменклатуры").data,
					fields: ['Картинка','Владелец','Наименование','ОКП.Представление',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ХарактеристикиНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Владелец',
					},
					{
						name:'Наименование',
					},
					{
						name:'ОКП',
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
						var грид = Ext.getCmp('СписокХарактеристикиНоменклатуры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ХарактеристикиНоменклатуры.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ХарактеристикиНоменклатуры.ФормаСпискаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:416px;height:25px;',
			items:
			[
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});