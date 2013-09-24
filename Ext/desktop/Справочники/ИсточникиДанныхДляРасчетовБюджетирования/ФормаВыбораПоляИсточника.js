Ext.require(['Данные.Справочники.ИсточникиДанныхДляРасчетовБюджетирования'], function () 
{
	Ext.define('Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаВыбораПоляИсточника',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:236px;height:385px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Поля запроса',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ВыбранныеПоля',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:220px;height:320px;',
			height: 320,width: 220,
			columns:
			[
				{
					text:'Поле',
					width:'220',
					dataIndex:'Поле',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ИсточникиДанныхДляРасчетовБюджетирования").data,
					fields: ['Ссылка','Родитель.Представление','Поле',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИсточникиДанныхДляРасчетовБюджетирования/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Поле',
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
						var грид = Ext.getCmp('ВыбранныеПоля');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаВыбораПоляИсточникаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаВыбораПоляИсточникаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:220px;height:24px;',
			width: 220,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:360px;width:236px;height:25px;',
			width: 236,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'ОК',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
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