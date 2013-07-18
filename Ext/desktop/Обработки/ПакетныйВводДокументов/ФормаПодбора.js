Ext.require(['Данные.Обработки.ПакетныйВводДокументов'], function () 
{
	Ext.define('Обработки.ПакетныйВводДокументов.ФормаПодбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:636px;height:336px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Пакетный ввод документов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:620px;height:295px;',
			height: 295,width: 620,
			items:
			[
				{
					title:'Настройка',
					items:
					[
		{
			id: 'ТабличноеПолеСписокФильтров',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:290px;height:216px;',
			height: 216,width: 290,
			columns:
			[
				{
					text:'Отбор',
					width:'130',
					dataIndex:'ПредставлениеФильтра',
					flex:1,
				},
				{
					text:'Значение отбора',
					width:'155',
					dataIndex:'ПредставлениеЗначения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПакетныйВводДокументов/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ПредставлениеФильтра',
					},
					{
						name:'ПредставлениеЗначения',
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
						var грид = Ext.getCmp('ТабличноеПолеСписокФильтров');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПакетныйВводДокументов.ФормаПодбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПакетныйВводДокументов.ФормаПодбораСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'ТабличноеПолеЗначенияФильтров',
			xtype: 'grid',
			style: 'position:absolute;left:301px;top:30px;width:315px;height:216px;',
			height: 216,width: 315,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПакетныйВводДокументов/ВыбратьПоСсылке/100', timeout: 3},
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
						var грид = Ext.getCmp('ТабличноеПолеЗначенияФильтров');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПакетныйВводДокументов.ФормаПодбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПакетныйВводДокументов.ФормаПодбораСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:493px;top:8px;width:123px;height:20px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:252px;width:290px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:301px;top:252px;width:315px;height:19px;',
		},
					]
				},
				{
					title:'Обработка',
					items:
					[
		{
			id: 'ТабличноеПолеДанных',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:610px;height:244px;',
			height: 244,width: 610,
			columns:
			[
				{
					text:'Пометка',
					width:'26',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'100',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'229',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'262',
					dataIndex:'Характеристика',
					flex:1,
				},
				{
					text:'Остаток',
					width:'100',
					dataIndex:'Остаток',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПакетныйВводДокументов/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Пометка',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Характеристика',
					},
					{
						name:'Остаток',
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
						var грид = Ext.getCmp('ТабличноеПолеДанных');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПакетныйВводДокументов.ФормаПодбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПакетныйВводДокументов.ФормаПодбораСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбратьВсе',
			text: '',
			style: 'position:absolute;left:575px;top:253px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСнятьВсе',
			text: '',
			style: 'position:absolute;left:597px;top:253px;width:19px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:311px;width:636px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});