Ext.require(['Данные.Справочники.СпособыОтраженияЗарплатыВРеглУчете'], function () 
{
	Ext.define('Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:748px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Способы отражения зарплаты в регламентированном учете',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:183px;top:33px;width:556px;height:280px;',
			height: 280,width: 556,
			columns:
			[
				{
					text:'',
					width:'32',
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
					text:'Счет Дт',
					width:'80',
					dataIndex:'СчетДт.Представление',
					flex:1,
				},
				{
					text:'Субконто',
					width:'120',
					dataIndex:'СубконтоДт1.Представление',
					flex:1,
				},
				{
					text:'',
					width:'120',
					dataIndex:'СубконтоДт2.Представление',
					flex:1,
				},
				{
					text:'',
					width:'120',
					dataIndex:'СубконтоДт3.Представление',
					flex:1,
				},
				{
					text:'Способ распределения затрат',
					width:'100',
					dataIndex:'СпособРаспределенияЗатрат.Представление',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'80',
					dataIndex:'СчетКт.Представление',
					flex:1,
				},
				{
					text:'Субконто',
					width:'120',
					dataIndex:'СубконтоКт1.Представление',
					flex:1,
				},
				{
					text:'',
					width:'120',
					dataIndex:'СубконтоКт2.Представление',
					flex:1,
				},
				{
					text:'',
					width:'120',
					dataIndex:'СубконтоКт3.Представление',
					flex:1,
				},
				{
					text:'Счет НУ',
					width:'80',
					dataIndex:'СчетНУ',
					flex:1,
				},
				{
					text:'Субконто Дт НУ',
					width:'100',
					dataIndex:'СубконтоДтНУ1.Представление',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоДтНУ2.Представление',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоДтНУ3.Представление',
					flex:1,
				},
				{
					text:'Счет Кт НУ',
					width:'77',
					dataIndex:'СчетКтНУ.Представление',
					flex:1,
				},
				{
					text:'Субконто Кт НУ ',
					width:'90',
					dataIndex:'СубконтоКтНУ1.Представление',
					flex:1,
				},
				{
					text:'',
					width:'87',
					dataIndex:'СубконтоКтНУ2.Представление',
					flex:1,
				},
				{
					text:'',
					width:'100',
					dataIndex:'СубконтоКтНУ3.Представление',
					flex:1,
				},
				{
					text:'Отражение в УСН',
					width:'90',
					dataIndex:'ОтражениеВУСН.Представление',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СпособыОтраженияЗарплатыВРеглУчете").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Наименование','СчетДт.Представление','СубконтоДт1.Представление','СубконтоДт2.Представление','СубконтоДт3.Представление','СпособРаспределенияЗатрат.Представление','СчетКт.Представление','СубконтоКт1.Представление','СубконтоКт2.Представление','СубконтоКт3.Представление','СчетНУ','СубконтоДтНУ1.Представление','СубконтоДтНУ2.Представление','СубконтоДтНУ3.Представление','СчетКтНУ.Представление','СубконтоКтНУ1.Представление','СубконтоКтНУ2.Представление','СубконтоКтНУ3.Представление','ОтражениеВУСН.Представление',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпособыОтраженияЗарплатыВРеглУчете/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'СчетДт',
					},
					{
						name:'СубконтоДт1',
					},
					{
						name:'СубконтоДт2',
					},
					{
						name:'СубконтоДт3',
					},
					{
						name:'СпособРаспределенияЗатрат',
					},
					{
						name:'СчетКт',
					},
					{
						name:'СубконтоКт1',
					},
					{
						name:'СубконтоКт2',
					},
					{
						name:'СубконтоКт3',
					},
					{
						name:'СчетНУ',
					},
					{
						name:'СубконтоДтНУ1',
					},
					{
						name:'СубконтоДтНУ2',
					},
					{
						name:'СубконтоДтНУ3',
					},
					{
						name:'СчетКтНУ',
					},
					{
						name:'СубконтоКтНУ1',
					},
					{
						name:'СубконтоКтНУ2',
					},
					{
						name:'СубконтоКтНУ3',
					},
					{
						name:'ОтражениеВУСН',
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
						Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:748px;height:25px;',
			width: 748,
			height: 25,
			items:
			[
			]
		},
		{
			id: 'СправочникДерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:169px;height:280px;',
			height: 280,width: 169,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СпособыОтраженияЗарплатыВРеглУчете").data,
					fields: ['Ссылка','Родитель.Представление','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпособыОтраженияЗарплатыВРеглУчете/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаСпискаСобытия");
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