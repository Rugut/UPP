Ext.require(['Данные.Справочники.ВнешниеОбработки'], function () 
{
	Ext.define('Справочники.ВнешниеОбработки.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Дополнительные печатные формы, обработки, заполнение табличных частей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			width: 608,
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
				{
					text:'Доступ к текущему элементу',
					tooltip:'Открыть форму настройки прав доступа к текущему элементу¶',
				},
				{
					text:'Доступ к справочнику в целом',
					tooltip:'Открыть форму настройки прав доступа ко всему справочнику',
				},
			]
		},
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:167px;top:33px;width:433px;height:280px;',
			height: 280,width: 433,
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
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Вид обработки',
					width:'120',
					dataIndex:'ВидОбработки.Представление',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'120',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Комментарий к файлу источнику',
					width:'120',
					dataIndex:'КомментарийКФайлуИсточнику',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ВнешниеОбработки").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Наименование','ВидОбработки.Представление','Код','Комментарий','КомментарийКФайлуИсточнику',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВнешниеОбработки/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
					{
						name:'ВидОбработки',
					},
					{
						name:'Код',
					},
					{
						name:'Комментарий',
					},
					{
						name:'КомментарийКФайлуИсточнику',
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
						Ext.require(['Справочники.ВнешниеОбработки.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВнешниеОбработки.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'Дерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:153px;height:280px;',
			height: 280,width: 153,
			columns:
			[
				{
					text:'Наименование',
					width:'143',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ВнешниеОбработки").data,
					fields: ['Ссылка','Родитель.Представление','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВнешниеОбработки/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('Дерево');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВнешниеОбработки.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВнешниеОбработки.ФормаСпискаСобытия");
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