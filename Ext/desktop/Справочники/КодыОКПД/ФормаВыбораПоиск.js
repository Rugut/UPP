Ext.require(['Данные.Справочники.КодыОКПД'], function () 
{
	Ext.define('Справочники.КодыОКПД.ФормаВыбораПоиск',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:788px;height:473px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Коды ОКПД',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникДерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:451px;height:407px;',
			height: 407,width: 451,
			columns:
			[
				{
					text:'Код',
					width:'100',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Имя',
					width:'350',
					dataIndex:'Имя',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.КодыОКПД").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КодыОКПД/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Код',
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
						var грид = Ext.getCmp('СправочникДерево');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.КодыОКПД.ФормаВыбораПоискСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КодыОКПД.ФормаВыбораПоискСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:466px;top:33px;width:314px;height:407px;',
			height: 407,width: 314,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:56px;top:54px;width:220px;height:19px;',
			height: 19,width: 220,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Найдено',
			text: 'Введите строку поиска',
			style: 'position:absolute;left:20px;top:0px;width:142px;height:19px;text-align:center;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:0px;width:308px;height:53px;',
			height: 53,width: 308,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаПоиска',
			width: 296,
			height: 19,
			style: 'position:absolute;left:6px;top:6px;width:296px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'ОбновитьИндекс',
			text: 'Обновить индекс',
			style: 'position:absolute;left:13px;top:384px;width:117px;height:23px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаАктуальностиИндекса',
			text: 'Дата актуальности индекса\r\nПризнак актуальности индекса',
			style: 'position:absolute;left:13px;top:343px;width:294px;height:38px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИнформация',
			text: '',
			style: 'position:absolute;left:472px;top:33px;width:308px;height:112px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:788px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Иерархический просмотр',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:448px;width:788px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
	]
	});
});