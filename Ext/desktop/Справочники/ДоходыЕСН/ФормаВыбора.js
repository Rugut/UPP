Ext.require(['Данные.Справочники.ДоходыЕСН'], function () 
{
	Ext.define('Справочники.ДоходыЕСН.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:487px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Способы отражения доходов в учете ЕСН',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:471px;height:280px;',
			height: 280,width: 471,
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
				{
					text:'ФБ, взносы в ПФР',
					width:'107',
					dataIndex:'ВходитВБазуФедеральныйБюджет',
					flex:1,
				},
				{
					text:'ФОМС',
					width:'40',
					dataIndex:'ВходитВБазуФОМС',
					flex:1,
				},
				{
					text:'ФСС',
					width:'40',
					dataIndex:'ВходитВБазуФСС',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ДоходыЕСН").data,
					fields: ['Картинка','Наименование','ВходитВБазуФедеральныйБюджет','ВходитВБазуФОМС','ВходитВБазуФСС',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДоходыЕСН/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
					{
						name:'ВходитВБазуФедеральныйБюджет',
					},
					{
						name:'ВходитВБазуФОМС',
					},
					{
						name:'ВходитВБазуФСС',
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
						Ext.require(['Справочники.ДоходыЕСН.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДоходыЕСН.ФормаВыбораСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:487px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
	});
});