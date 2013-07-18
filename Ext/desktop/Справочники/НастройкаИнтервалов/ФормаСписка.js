Ext.require(['Данные.Справочники.НастройкаИнтервалов'], function () 
{
	Ext.define('Справочники.НастройкаИнтервалов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:384px;height:387px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки временных интервалов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:368px;height:100px;',
			height: 100,width: 368,
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
			],
			store:
			{
				data: Ext.create("Данные.Справочники.НастройкаИнтервалов").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаИнтервалов/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
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
						var грид = Ext.getCmp('СправочникСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НастройкаИнтервалов.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкаИнтервалов.ФормаСпискаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'ТабличноеПоле',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:139px;width:368px;height:240px;',
			height: 240,width: 368,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Граница интервала',
					width:'120',
					dataIndex:'НачалоИнтервала',
					flex:1,
				},
				{
					text:'Подпись',
					width:'220',
					dataIndex:'Подпись',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.НастройкаИнтервалов").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаИнтервалов/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'НачалоИнтервала',
					},
					{
						name:'Подпись',
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
						var грид = Ext.getCmp('ТабличноеПоле');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НастройкаИнтервалов.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкаИнтервалов.ФормаСпискаСобытия");
							obj.ПередатьСсылку(ссылка);
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
			style: 'position:absolute;left:0px;top:0px;width:384px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
	});
});