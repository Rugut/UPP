Ext.require(['Данные.Справочники.РегламентированныеОтчеты'], function () 
{
	Ext.define('Справочники.РегламентированныеОтчеты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:677px;height:390px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Регламентированные отчеты',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:200px;top:33px;width:469px;height:280px;',
			height: 280,width: 469,
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
					width:'48',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.РегламентированныеОтчеты").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Код','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегламентированныеОтчеты/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.РегламентированныеОтчеты.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РегламентированныеОтчеты.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'СправочникДерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:186px;height:280px;',
			height: 280,width: 186,
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
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.РегламентированныеОтчеты").data,
					fields: ['Ссылка','Родитель.Представление','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегламентированныеОтчеты/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.РегламентированныеОтчеты.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РегламентированныеОтчеты.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:677px;height:25px;',
			items:
			[
				{
					text:'Добавить',
				},
				'-',
				{
					text:'Новая группа',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Иерархический просмотр',
				},
				{
					text:'Переместить в группу',
				},
				{
					text:'Найти в дереве',
				},
				'-',
				{
					text:'Переместить вверх',
				},
				{
					text:'Переместить вниз',
				},
				'-',
				{
					text:'Скрыть',
				},
				{
					text:'Восстановить',
				},
				'-',
				{
					text:'Новый',
				},
				'-',
				{
					text:'Подробнее',
				},
				'-',
				{
					text:'Журнал',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОписаниеОтчета',
			text: 'НадписьОписаниеОтчета',
			style: 'position:absolute;left:8px;top:342px;width:661px;height:40px;',
		},
		{
			xtype: 'fieldset',
			title: 'Описание',
			style: 'position:absolute;left:8px;top:321px;width:661px;height:16px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});