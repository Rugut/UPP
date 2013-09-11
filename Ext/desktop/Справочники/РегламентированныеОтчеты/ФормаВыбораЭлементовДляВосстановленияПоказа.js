Ext.require(['Данные.Справочники.РегламентированныеОтчеты'], function () 
{
	Ext.define('Справочники.РегламентированныеОтчеты.ФормаВыбораЭлементовДляВосстановленияПоказа',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:550px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Скрытые отчеты',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'РегламентированныеОтчеты',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:36px;width:534px;height:292px;',
			height: 292,width: 534,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Код',
					width:'98',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.РегламентированныеОтчеты").data,
					fields: ['Ссылка','Родитель.Представление','Пометка','Код','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегламентированныеОтчеты/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Пометка',
					},
					{
						name:'Код',
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
						var грид = Ext.getCmp('РегламентированныеОтчеты');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РегламентированныеОтчеты.ФормаВыбораЭлементовДляВосстановленияПоказаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РегламентированныеОтчеты.ФормаВыбораЭлементовДляВосстановленияПоказаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:10px;width:534px;height:25px;',
			width: 534,
			height: 25,
			items:
			[
				{
					text:'Установить флажки',
					tooltip:'',
				},
				{
					text:'Снять флажки',
					tooltip:'',
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:336px;width:550px;height:25px;',
			width: 550,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
	]
	});
});