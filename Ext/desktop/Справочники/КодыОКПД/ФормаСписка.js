Ext.require(['Данные.Справочники.КодыОКПД'], function () 
{
	Ext.define('Справочники.КодыОКПД.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:555px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Коды ОКПД',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникДерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:539px;height:226px;',
			height: 226,width: 539,
			columns:
			[
				{
					text:'Код',
					width:'100',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Имя',
					width:'350',
					dataIndex:'Имя',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.КодыОКПД").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КодыОКПД/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Код',
					},
					{
						name:'Имя',
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
						var грид = Ext.getCmp('СправочникДерево');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.КодыОКПД.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КодыОКПД.ФормаСпискаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:555px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Загрузить из файла',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:555px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
	]
	});
});