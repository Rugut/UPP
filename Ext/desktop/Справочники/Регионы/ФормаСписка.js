Ext.require(['Данные.Справочники.Регионы'], function () 
{
	Ext.define('Справочники.Регионы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:582px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Справочник Регионы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:566px;height:280px;',
			height: 280,width: 566,
			columns:
			[
				{
					text:'Код',
					width:'110',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Код региона',
					width:'72',
					dataIndex:'КодРегиона',
					flex:1,
				},
				{
					text:'Наименование',
					width:'301',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'177',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Код адресного элемента',
					width:'200',
					dataIndex:'КодАдресногоЭлемента',
					flex:1,
				},
				{
					text:'Ж/Д станция назначения',
					width:'309',
					dataIndex:'ЖДСтанцияНазначения',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Регионы").data,
					fields: ['Ссылка','Родитель.Представление','Код','КодРегиона','Наименование','Комментарий','КодАдресногоЭлемента','ЖДСтанцияНазначения',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Регионы/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Код',
					},
					{
						name:'КодРегиона',
					},
					{
						name:'Наименование',
					},
					{
						name:'Комментарий',
					},
					{
						name:'КодАдресногоЭлемента',
					},
					{
						name:'ЖДСтанцияНазначения',
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
						Ext.require(['Справочники.Регионы.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Регионы.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:582px;height:25px;',
			width: 582,
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
				'-',
				{
					text:'',
					tooltip:'',
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