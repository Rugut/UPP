Ext.require(['Данные.Справочники.НастройкиВыполненияОбмена'], function () 
{
	Ext.define('Справочники.НастройкиВыполненияОбмена.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:715px;height:425px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Справочник Настройки выполнения обмена',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:699px;height:384px;',
			height: 384,width: 699,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'69',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'351',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'168',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НастройкиВыполненияОбмена").data,
					fields: ['Ссылка','Картинка','Код','Наименование','Комментарий',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиВыполненияОбмена/ВыбратьПоСсылке/100', timeout: 200},
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкиВыполненияОбмена.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиВыполненияОбмена.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:715px;height:25px;',
			width: 715,
			height: 25,
			items:
			[
				{
					text:'',
					tooltip:'Добавить',
					iconCls:'x-add',
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
					iconCls:'x-MarkToDelete',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Выполнить обмен',
					tooltip:'Выполнить обмен данными',
				},
				{
					text:'Настройка обновления конфигурации',
					tooltip:'Настройка параметров обновления конфигурации',
				},
					]
				},
				'-',
				{
					text:'Выполнить обмен',
					tooltip:'Выполнить обмен данными',
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