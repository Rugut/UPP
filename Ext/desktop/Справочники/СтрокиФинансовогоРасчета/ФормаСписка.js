Ext.require(['Данные.Справочники.СтрокиФинансовогоРасчета'], function () 
{
	Ext.define('Справочники.СтрокиФинансовогоРасчета.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:616px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Строки финансового расчета',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:600px;height:320px;',
			height: 320,width: 600,
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
					width:'81',
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
					text:'Вид строки',
					width:'120',
					dataIndex:'ВидСтроки.Представление',
					flex:1,
				},
				{
					text:'Измерение',
					width:'120',
					dataIndex:'Измерение',
					flex:1,
				},
				{
					text:'Формула',
					width:'220',
					dataIndex:'Формула',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СтрокиФинансовогоРасчета").data,
					fields: ['Ссылка','Картинка','Код','Наименование','ВидСтроки.Представление','Измерение','Формула',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СтрокиФинансовогоРасчета/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'ВидСтроки',
					},
					{
						name:'Измерение',
					},
					{
						name:'Формула',
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
						Ext.require(['Справочники.СтрокиФинансовогоРасчета.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СтрокиФинансовогоРасчета.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:616px;height:25px;',
			width: 616,
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
					text:'Переместить вверх',
					tooltip:'Переместить вверх',
				},
				{
					text:'Переместить вниз',
					tooltip:'Переместить вниз',
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