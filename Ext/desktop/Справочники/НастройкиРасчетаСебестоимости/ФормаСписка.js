Ext.require(['Данные.Справочники.НастройкиРасчетаСебестоимости'], function () 
{
	Ext.define('Справочники.НастройкиРасчетаСебестоимости.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:726px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки расчета себестоимости',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:544px;height:259px;',
			height: 259,width: 544,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'113',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'128',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Настройка закрытия месяца',
					width:'160',
					dataIndex:'НастройкаЗакрытияМесяца',
					flex:1,
				},
				{
					text:'Автоматич.',
					width:'65',
					dataIndex:'ФормироватьДокументыАвтоматически',
					flex:1,
				},
				{
					text:'Упр.',
					width:'32',
					dataIndex:'ОтражатьВУправленческомУчете',
					flex:1,
				},
				{
					text:'Регл.',
					width:'33',
					dataIndex:'ОтражатьВРегламентированномУчете',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'110',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.НастройкиРасчетаСебестоимости").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиРасчетаСебестоимости/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
					{
						name:'Организация',
					},
					{
						name:'НастройкаЗакрытияМесяца',
					},
					{
						name:'ФормироватьДокументыАвтоматически',
					},
					{
						name:'ОтражатьВУправленческомУчете',
					},
					{
						name:'ОтражатьВРегламентированномУчете',
					},
					{
						name:'Комментарий',
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
						Ext.require(['Справочники.НастройкиРасчетаСебестоимости.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиРасчетаСебестоимости.ФормаСпискаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'Дерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:259px;',
			height: 259,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'158',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.НастройкиРасчетаСебестоимости").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиРасчетаСебестоимости/ВыбратьПоСсылке/100', timeout: 3},
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
						var грид = Ext.getCmp('Дерево');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НастройкиРасчетаСебестоимости.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиРасчетаСебестоимости.ФормаСпискаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:726px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
	});
});