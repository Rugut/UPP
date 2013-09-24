Ext.require(['Данные.Справочники.ПрофилиРаспределенияПоПериодам'], function () 
{
	Ext.define('Справочники.ПрофилиРаспределенияПоПериодам.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:682px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Профили распределения по периодам',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:454px;height:280px;',
			height: 280,width: 454,
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
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Период',
					width:'80',
					dataIndex:'Период.Представление',
					flex:1,
				},
				{
					text:'Подпериод',
					width:'80',
					dataIndex:'Подпериод.Представление',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ПрофилиРаспределенияПоПериодам").data,
					fields: ['Ссылка','Картинка','Код','Наименование','Период.Представление','Подпериод.Представление',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПрофилиРаспределенияПоПериодам/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Период',
					},
					{
						name:'Подпериод',
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
						Ext.require(['Справочники.ПрофилиРаспределенияПоПериодам.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПрофилиРаспределенияПоПериодам.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:682px;height:25px;',
			width: 682,
			height: 25,
			items:
			[
				{
					text:'',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'',
					tooltip:'Новая группа',
					iconCls:'x-CreateFolder',
				},
				{
					text:'',
					tooltip:'Скопировать',
					iconCls:'x-copy',
				},
				{
					text:'',
					tooltip:'Изменить',
					iconCls:'x-Change',
				},
				{
					text:'',
					tooltip:'Установить пометку удаления',
					iconCls:'x-Delete',
				},
			]
		},
		{
			id: 'ТабличноеПолеРаспределение',
			xtype: 'grid',
			style: 'position:absolute;left:468px;top:33px;width:206px;height:280px;',
			height: 280,width: 206,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'№ подпериода',
					width:'80',
					dataIndex:'НомерПодпериода',
					flex:1,
				},
				{
					text:'Доля подпериода',
					width:'100',
					dataIndex:'ДоляПодпериода',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ПрофилиРаспределенияПоПериодам").data,
					fields: ['Ссылка','НомерСтроки','НомерПодпериода','ДоляПодпериода',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПрофилиРаспределенияПоПериодам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'НомерПодпериода',
					},
					{
						name:'ДоляПодпериода',
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
						var грид = Ext.getCmp('ТабличноеПолеРаспределение');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПрофилиРаспределенияПоПериодам.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПрофилиРаспределенияПоПериодам.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
	]
	});
});