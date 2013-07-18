Ext.require(['Данные.Справочники.ПрочиеДоходыИРасходы'], function () 
{
	Ext.define('Справочники.ПрочиеДоходыИРасходы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Прочие доходы и расходы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:599px;height:280px;',
			height: 280,width: 599,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'64',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'250',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Вид прочих дох. и расх.',
					width:'250',
					dataIndex:'ВидПрочихДоходовИРасходов',
					flex:1,
				},
				{
					text:'Принятие к налоговому учету',
					width:'60',
					dataIndex:'ПринятиеКналоговомуУчету',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ПрочиеДоходыИРасходы").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПрочиеДоходыИРасходы/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'ВидПрочихДоходовИРасходов',
					},
					{
						name:'ПринятиеКналоговомуУчету',
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
						var грид = Ext.getCmp('СправочникСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПрочиеДоходыИРасходы.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПрочиеДоходыИРасходы.ФормаСпискаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'СправочникДерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:280px;',
			height: 280,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'160',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ПрочиеДоходыИРасходы").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПрочиеДоходыИРасходы/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Наименование',
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
						Ext.require(['Справочники.ПрочиеДоходыИРасходы.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПрочиеДоходыИРасходы.ФормаСпискаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
	});
});