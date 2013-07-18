Ext.require(['Данные.Обработки.СписокПользователейИБ'], function () 
{
	Ext.define('Обработки.СписокПользователейИБ.ФормаОтбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:530px;height:319px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:473px;top:147px;width:49px;height:24px;',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СписокПользователейИБ/ВыбратьПоСсылке/100', timeout: 3},
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
						var грид = Ext.getCmp('РолиСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.СписокПользователейИБ.ФормаОтбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СписокПользователейИБ.ФормаОтбораСобытия");
							obj.ПередатьСсылку(ссылка);
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СписокПользователейИБ/ВыбратьПоСсылке/100', timeout: 3},
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
						var грид = Ext.getCmp('ИнтерфейсыСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.СписокПользователейИБ.ФормаОтбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СписокПользователейИБ.ФормаОтбораСобытия");
							obj.ПередатьСсылку(ссылка);
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СписокПользователейИБ/ВыбратьПоСсылке/100', timeout: 3},
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
						var грид = Ext.getCmp('ЯзыкиСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.СписокПользователейИБ.ФормаОтбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СписокПользователейИБ.ФормаОтбораСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Роли',
			style: 'position:absolute;left:8px;top:5px;width:257px;height:16px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:8px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Интерфейсы',
			style: 'position:absolute;left:270px;top:5px;width:252px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Языки',
			style: 'position:absolute;left:270px;top:131px;width:252px;height:16px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:294px;width:530px;height:25px;',
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
			style: 'position:absolute;left:216px;top:21px;width:49px;height:24px;',
			dock: 'top',
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
			dock: 'top',
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
	]
	});
});