Ext.require(['Данные.Справочники.ГруппыЗаменяемостиРабочихЦентров'], function () 
{
	Ext.define('Справочники.ГруппыЗаменяемостиРабочихЦентров.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:430px;height:353px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Группы заменяемости рабочих центров',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:316px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 64,
			height: 19,
			style: 'position:absolute;left:358px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 220,
			height: 19,
			style: 'position:absolute;left:94px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:430px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:414px;height:260px;',
			height: 260,width: 414,
			items:
			[
				{
					title:'Состав группы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:400px;height:24px;',
			items:
			[
			]
		},
		{
			id: 'Состав',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:400px;height:202px;',
			height: 202,width: 400,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Рабочий центр',
					width:'200',
					dataIndex:'РабочийЦентр',
					flex:1,
				},
				{
					text:'Приоритет применение рабочего центра',
					width:'100',
					dataIndex:'Приоритет',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ГруппыЗаменяемостиРабочихЦентров").data,
					fields: ['Ссылка','НомерСтроки','РабочийЦентр','Приоритет',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГруппыЗаменяемостиРабочихЦентров/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'РабочийЦентр',
					},
					{
						name:'Приоритет',
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
						var грид = Ext.getCmp('Состав');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ГруппыЗаменяемостиРабочихЦентров.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ГруппыЗаменяемостиРабочихЦентров.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Подчиненные рабочие центры',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Требуется загрузка подчиненных рабочих центров',
			style: 'position:absolute;left:6px;top:6px;width:400px;height:15px;',
		},
		{
			id: 'ПодчиненныеРабочиеЦентры',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:53px;width:400px;height:181px;',
			height: 181,width: 400,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Рабочий центр',
					width:'200',
					dataIndex:'РабочийЦентр',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ГруппыЗаменяемостиРабочихЦентров").data,
					fields: ['Ссылка','НомерСтроки','РабочийЦентр',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГруппыЗаменяемостиРабочихЦентров/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'РабочийЦентр',
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
						var грид = Ext.getCmp('ПодчиненныеРабочиеЦентры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ГруппыЗаменяемостиРабочихЦентров.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ГруппыЗаменяемостиРабочихЦентров.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:26px;width:400px;height:24px;',
			items:
			[
			]
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
			style: 'position:absolute;left:0px;top:328px;width:430px;height:25px;',
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
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});