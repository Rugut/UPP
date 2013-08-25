Ext.require(['Данные.Справочники.ВидыСчетчиковДляЗначенийРазрядов'], function () 
{
	Ext.define('Справочники.ВидыСчетчиковДляЗначенийРазрядов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:602px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Справочник Виды счетчиков для значений разрядов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:586px;height:259px;',
			height: 259,width: 586,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'63',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'253',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Размер счетчика',
					width:'92',
					dataIndex:'РазмерСчетчика',
					flex:1,
				},
				{
					text:'Начальное значение',
					width:'110',
					dataIndex:'НачальноеЗначение',
					flex:1,
				},
				{
					text:'Конечное значение',
					width:'110',
					dataIndex:'КонечноеЗначение',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ВидыСчетчиковДляЗначенийРазрядов").data,
					fields: ['Ссылка','Картинка','Код','Наименование','РазмерСчетчика','НачальноеЗначение','КонечноеЗначение',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВидыСчетчиковДляЗначенийРазрядов/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'РазмерСчетчика',
					},
					{
						name:'НачальноеЗначение',
					},
					{
						name:'КонечноеЗначение',
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
						Ext.require(['Справочники.ВидыСчетчиковДляЗначенийРазрядов.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВидыСчетчиковДляЗначенийРазрядов.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:602px;height:25px;',
			width: 602,
			height: 25,
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});