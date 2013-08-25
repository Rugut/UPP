Ext.require(['Данные.Справочники.ВнешниеОбработки'], function () 
{
	Ext.define('Справочники.ВнешниеОбработки.ФормаПараметровОбработки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:341px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Дополнительные параметры обработки',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ПараметрыОбработки',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:384px;height:276px;',
			height: 276,width: 384,
			columns:
			[
				{
					text:'Имя',
					width:'148',
					dataIndex:'ИмяПараметра',
					flex:1,
				},
				{
					text:'Значение',
					width:'152',
					dataIndex:'ЗначениеПараметра',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ВнешниеОбработки").data,
					fields: ['Ссылка','Родитель.Представление','ИмяПараметра','ЗначениеПараметра',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВнешниеОбработки/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ИмяПараметра',
					},
					{
						name:'ЗначениеПараметра',
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
						var грид = Ext.getCmp('ПараметрыОбработки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВнешниеОбработки.ФормаПараметровОбработкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВнешниеОбработки.ФормаПараметровОбработкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:24px;',
			width: 384,
			height: 24,
			items:
			[
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:316px;width:400px;height:25px;',
			width: 400,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Принять',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
	});
});