Ext.require(['Данные.Справочники.ПрофилиИзмененияПлановПоИзмерениям'], function () 
{
	Ext.define('Справочники.ПрофилиИзмененияПлановПоИзмерениям.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:629px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Профили изменения планов по измерениям',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:447px;height:280px;',
			height: 280,width: 447,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'80',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'161',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Измерение',
					width:'100',
					dataIndex:'ИзмерениеБюджетирования.Представление',
					flex:1,
				},
				{
					text:'Источник данных',
					width:'205',
					dataIndex:'ИсточникДанных.Представление',
					flex:1,
				},
				{
					text:'Показатель источника',
					width:'124',
					dataIndex:'ПоказательИсточника',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ПрофилиИзмененияПлановПоИзмерениям").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Код','Наименование','ИзмерениеБюджетирования.Представление','ИсточникДанных.Представление','ПоказательИсточника',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПрофилиИзмененияПлановПоИзмерениям/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
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
						name:'ИзмерениеБюджетирования',
					},
					{
						name:'ИсточникДанных',
					},
					{
						name:'ПоказательИсточника',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПрофилиИзмененияПлановПоИзмерениям.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПрофилиИзмененияПлановПоИзмерениям.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
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
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ПрофилиИзмененияПлановПоИзмерениям").data,
					fields: ['Ссылка','Родитель.Представление','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПрофилиИзмененияПлановПоИзмерениям/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПрофилиИзмененияПлановПоИзмерениям.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПрофилиИзмененияПлановПоИзмерениям.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:629px;height:25px;',
			width: 629,
			height: 25,
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
});