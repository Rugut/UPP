Ext.require(['Данные.Обработки.ПоискДанных'], function () 
{
	Ext.define('Обработки.ПоискДанных.ФормаВыбораМетаданных',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:365px;height:410px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Выбор объектов поиска',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ТаблицаОМД',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:349px;height:369px;',
			height: 369,width: 349,
			columns:
			[
				{
					text:'Колонка1',
					width:'21',
					dataIndex:'Колонка1',
					flex:1,
				},
				{
					text:'Тип метаданного',
					width:'21',
					dataIndex:'КолонкаКартинки',
					flex:1,
				},
				{
					text:'Колонка2',
					width:'402',
					dataIndex:'Колонка2',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоискДанных/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Колонка1',
					},
					{
						name:'КолонкаКартинки',
					},
					{
						name:'Колонка2',
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
						var грид = Ext.getCmp('ТаблицаОМД');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПоискДанных.ФормаВыбораМетаданныхСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПоискДанных.ФормаВыбораМетаданныхСобытия");
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:385px;width:365px;height:25px;',
			width: 365,
			height: 25,
			dock: 'bottom',
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
					text:'Отмена',
				},
			]
		},
	]
	});
});