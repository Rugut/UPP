Ext.require(['Данные.Справочники.ХарактеристикиНоменклатуры'], function () 
{
	Ext.define('Справочники.ХарактеристикиНоменклатуры.ФормаВыбораБезОтбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:488px;height:406px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор характеристики номенклатуры',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СвойстваИЗначения',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:225px;width:472px;height:172px;',
			height: 172,width: 472,
			columns:
			[
				{
					text:'Свойство',
					width:'221',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'132',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ХарактеристикиНоменклатуры").data,
					fields: ['Свойство','Значение',]
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
						name:'Свойство',
					},
					{
						name:'Значение',
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
						var грид = Ext.getCmp('СвойстваИЗначения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ХарактеристикиНоменклатуры.ФормаВыбораБезОтбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ХарактеристикиНоменклатуры.ФормаВыбораБезОтбораСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'СписокХарактеристики',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:29px;width:472px;height:172px;',
			height: 172,width: 472,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'245',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'ОКП',
					width:'85',
					dataIndex:'ОКП.Представление',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'198',
					dataIndex:'Владелец',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ХарактеристикиНоменклатуры").data,
					fields: ['Картинка','Наименование','ОКП.Представление','Владелец',]
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
						name:'Наименование',
					},
					{
						name:'ОКП',
					},
					{
						name:'Владелец',
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
						var грид = Ext.getCmp('СписокХарактеристики');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ХарактеристикиНоменклатуры.ФормаВыбораБезОтбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ХарактеристикиНоменклатуры.ФормаВыбораБезОтбораСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:488px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьЗначенияСвойствТекущейХарактеристикиНоменклатуры',
			text: 'Значения свойств текущей характеристики номенклатуры',
			style: 'position:absolute;left:8px;top:209px;width:472px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});