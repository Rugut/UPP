Ext.require(['Данные.Справочники.Подразделения'], function () 
{
	Ext.define('Справочники.Подразделения.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:858px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Структура предприятия',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:858px;height:25px;',
			width: 858,
			height: 25,
			items:
			[
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			id: 'Подразделения',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:82px;width:410px;height:490px;',
			height: 490,width: 410,
			columns:
			[
				{
					text:'Наименование',
					width:'181',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Код',
					width:'76',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Подразделения юридических лиц',
					width:'206',
					dataIndex:'ПодразделенияОрганизаций',
					flex:1,
				},
				{
					text:'Порядок',
					width:'100',
					dataIndex:'Порядок',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Подразделения").data,
					fields: ['Ссылка','Родитель.Представление','Наименование','Код','ПодразделенияОрганизаций','Порядок',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Подразделения/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
					},
					{
						name:'Код',
					},
					{
						name:'ПодразделенияОрганизаций',
					},
					{
						name:'Порядок',
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
						var грид = Ext.getCmp('Подразделения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Подразделения.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Подразделения.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСтруктураПредприятия',
			text: ' Структура Предприятия',
			style: 'position:absolute;left:8px;top:33px;width:410px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтруктураПодразделенийОрганизаций',
			text: ' Подразделения организаций (юридических лиц)',
			style: 'position:absolute;left:433px;top:33px;width:417px;height:20px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:433px;top:58px;width:322px;height:24px;',
			width: 322,
			height: 24,
			items:
			[
				{
					text:'Упорядочить по: Код',
					tooltip:'',
				},
				{
					text:'Упорядочить по: Наименование',
					tooltip:'',
				},
				{
					text:'Упорядочить по: Порядок',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:58px;width:410px;height:24px;',
			width: 410,
			height: 24,
			items:
			[
				'-',
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				'-',
				{
					text:'',
					tooltip:'Переместить вверх',
				},
				{
					text:'',
					tooltip:'Переместить вниз',
				},
			]
		},
		{
			id: 'ПодразделенияОрганизаций',
			xtype: 'grid',
			style: 'position:absolute;left:433px;top:82px;width:417px;height:490px;',
			height: 490,width: 417,
			columns:
			[
				{
					text:'Организация',
					width:'137',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Наименование',
					width:'195',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Код',
					width:'65',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Подразделения',
					width:'135',
					dataIndex:'Подразделения',
					flex:1,
				},
				{
					text:'Несколько подразделений',
					width:'100',
					dataIndex:'НесколькоПодразделений',
					flex:1,
				},
				{
					text:'Порядок',
					width:'49',
					dataIndex:'Порядок',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Подразделения").data,
					fields: ['Ссылка','Родитель.Представление','Организация','Наименование','Код','Подразделения','НесколькоПодразделений','Порядок',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Подразделения/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Организация',
					},
					{
						name:'Наименование',
					},
					{
						name:'Код',
					},
					{
						name:'Подразделения',
					},
					{
						name:'НесколькоПодразделений',
					},
					{
						name:'Порядок',
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
						var грид = Ext.getCmp('ПодразделенияОрганизаций');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Подразделения.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Подразделения.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:755px;top:58px;width:95px;height:24px;',
			width: 95,
			height: 24,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Организации...',
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