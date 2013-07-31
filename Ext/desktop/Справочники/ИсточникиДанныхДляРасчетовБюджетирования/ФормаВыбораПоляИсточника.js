Ext.require(['Данные.Справочники.ИсточникиДанныхДляРасчетовБюджетирования'], function () 
{
	Ext.define('Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаВыбораПоляИсточника',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:236px;height:385px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					fields: ['Поле',]
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаВыбораПоляИсточникаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаВыбораПоляИсточникаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:360px;width:236px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:220px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
	]
	});
});