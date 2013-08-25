Ext.require(['Данные.Обработки.СписокПользователейИБ'], function () 
{
	Ext.define('Обработки.СписокПользователейИБ.ФормаОтбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:530px;height:319px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отбор',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Аутентификация Windows:',
			style: 'position:absolute;left:8px;top:267px;width:178px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:186px;top:267px;width:336px;height:19px;',
			width: 336,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Аутентификация 1С:Предприятия:',
			style: 'position:absolute;left:8px;top:243px;width:178px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:186px;top:243px;width:336px;height:19px;',
			width: 336,
			height: 19,
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:216px;top:21px;width:49px;height:24px;',
			width: 49,
			height: 24,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
				{
					text:'СнятьФлажки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:473px;top:147px;width:49px;height:24px;',
			width: 49,
			height: 24,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
				{
					text:'СнятьФлажки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:473px;top:21px;width:49px;height:24px;',
			width: 49,
			height: 24,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
				{
					text:'СнятьФлажки',
				},
			]
		},
		{
			id: 'РолиСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:45px;width:257px;height:193px;',
			height: 193,width: 257,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СписокПользователейИБ/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('РолиСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СписокПользователейИБ.ФормаОтбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СписокПользователейИБ.ФормаОтбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'ИнтерфейсыСписок',
			xtype: 'grid',
			style: 'position:absolute;left:270px;top:45px;width:252px;height:81px;',
			height: 81,width: 252,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СписокПользователейИБ/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('ИнтерфейсыСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СписокПользователейИБ.ФормаОтбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СписокПользователейИБ.ФормаОтбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'ЯзыкиСписок',
			xtype: 'grid',
			style: 'position:absolute;left:270px;top:171px;width:252px;height:67px;',
			height: 67,width: 252,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СписокПользователейИБ/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('ЯзыкиСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СписокПользователейИБ.ФормаОтбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СписокПользователейИБ.ФормаОтбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Роли',
			style: 'position:absolute;left:8px;top:5px;width:257px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:8px;top:23px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Интерфейсы',
			style: 'position:absolute;left:270px;top:5px;width:252px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Языки',
			style: 'position:absolute;left:270px;top:131px;width:252px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:294px;width:530px;height:25px;',
			width: 530,
			height: 25,
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
	]
	});
});