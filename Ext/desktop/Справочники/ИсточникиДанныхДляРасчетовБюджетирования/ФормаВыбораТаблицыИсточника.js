Ext.require(['Данные.Справочники.ИсточникиДанныхДляРасчетовБюджетирования'], function () 
{
	Ext.define('Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаВыбораТаблицыИсточника',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:236px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Таблицы источника',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'Дерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:220px;height:320px;',
			height: 320,width: 220,
			columns:
			[
				{
					text:'Описание поля',
					width:'220',
					dataIndex:'ОписаниеПоля',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ИсточникиДанныхДляРасчетовБюджетирования").data,
					fields: ['Ссылка','Родитель.Представление','ОписаниеПоля',]
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
						name:'ОписаниеПоля',
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
						Ext.require(['Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаВыбораТаблицыИсточникаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаВыбораТаблицыИсточникаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:336px;width:236px;height:25px;',
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