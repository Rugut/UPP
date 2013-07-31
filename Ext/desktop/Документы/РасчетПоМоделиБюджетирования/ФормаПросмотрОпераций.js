Ext.require(['Данные.Документы.РасчетПоМоделиБюджетирования'], function () 
{
	Ext.define('Документы.РасчетПоМоделиБюджетирования.ФормаПросмотрОпераций',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:653px;height:371px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сформированные бюджетные операции',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'БюджетныеОперации',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:58px;width:637px;height:280px;',
			height: 280,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Период',
					width:'100',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Статья оборотов',
					width:'100',
					dataIndex:'СтатьяОборотов',
					flex:1,
				},
				{
					text:'Валюта',
					width:'100',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'ЦФО',
					width:'100',
					dataIndex:'ЦФО',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'100',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Количество',
					width:'100',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Влияющая операция',
					width:'109',
					dataIndex:'ВлияющаяОперация',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетПоМоделиБюджетирования/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Период',
					},
					{
						name:'СтатьяОборотов',
					},
					{
						name:'Валюта',
					},
					{
						name:'ЦФО',
					},
					{
						name:'Проект',
					},
					{
						name:'Контрагент',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Количество',
					},
					{
						name:'Сумма',
					},
					{
						name:'ВлияющаяОперация',
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
						var грид = Ext.getCmp('БюджетныеОперации');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.РасчетПоМоделиБюджетирования.ФормаПросмотрОперацийСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетПоМоделиБюджетирования.ФормаПросмотрОперацийСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:637px;height:25px;',
			height: 25,width: 637,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:653px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Включить возможность изменения',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:346px;width:653px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});