Ext.define('Справочники.ХарактеристикиНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:416px;height:260px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Характеристики номенклатуры',
	
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
					width:'1200',
					dataIndex:'Владелец',
					flex:1,
				},
				{
					text:'Наименование',
					width:'3200',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'ОКП',
					width:'128',
					dataIndex:'ОКП',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ХарактеристикиНоменклатуры").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ХарактеристикиНоменклатуры/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
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