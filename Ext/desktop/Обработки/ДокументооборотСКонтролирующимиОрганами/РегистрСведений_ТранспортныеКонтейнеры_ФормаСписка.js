Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ТранспортныеКонтейнеры_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:697px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Список Транспортные контейнеры',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'РегистрСведенийСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:681px;height:259px;',
			height: 259,width: 681,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Транспортное сообщение',
					width:'224',
					dataIndex:'ТранспортноеСообщение',
					flex:1,
				},
				{
					text:'Имя',
					width:'222',
					dataIndex:'ИмяФайла1',
					flex:1,
				},
				{
					text:'Размер (в байтах)',
					width:'149',
					dataIndex:'Размер',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ТранспортноеСообщение',
					},
					{
						name:'ИмяФайла1',
					},
					{
						name:'Размер',
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
						var грид = Ext.getCmp('РегистрСведенийСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ТранспортныеКонтейнеры_ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ТранспортныеКонтейнеры_ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:697px;height:25px;',
			width: 697,
			height: 25,
			items:
			[
				'-',
				{
					text:'Выгрузить',
					tooltip:'18ab7d0-4654-4542-bd5e-fd9d1352b5a',
					iconCls:'x-SaveFile',
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