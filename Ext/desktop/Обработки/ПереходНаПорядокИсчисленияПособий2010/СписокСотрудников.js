Ext.require(['Данные.Обработки.ПереходНаПорядокИсчисленияПособий2010'], function () 
{
	Ext.define('Обработки.ПереходНаПорядокИсчисленияПособий2010.СписокСотрудников',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:251px;height:370px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:235px;height:354px;',
			height: 354,width: 235,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Отставники',
					items:
					[
		{
			id: 'Отставники',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:235px;height:354px;',
			height: 354,width: 235,
			columns:
			[
				{
					text:'Физическое лицо',
					width:'145',
					dataIndex:'ФизЛицо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПереходНаПорядокИсчисленияПособий2010/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ФизЛицо',
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
						var грид = Ext.getCmp('Отставники');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПереходНаПорядокИсчисленияПособий2010.СписокСотрудниковСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПереходНаПорядокИсчисленияПособий2010.СписокСотрудниковСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Облученные',
					items:
					[
		{
			id: 'Облученные',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:235px;height:354px;',
			height: 354,width: 235,
			columns:
			[
				{
					text:'Физическое лицо',
					width:'183',
					dataIndex:'ФизЛицо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПереходНаПорядокИсчисленияПособий2010/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ФизЛицо',
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
						var грид = Ext.getCmp('Облученные');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПереходНаПорядокИсчисленияПособий2010.СписокСотрудниковСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПереходНаПорядокИсчисленияПособий2010.СписокСотрудниковСобытия");
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
	]
	});
});