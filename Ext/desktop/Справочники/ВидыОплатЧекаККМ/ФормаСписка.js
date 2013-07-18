Ext.require(['Данные.Справочники.ВидыОплатЧекаККМ'], function () 
{
	Ext.define('Справочники.ВидыОплатЧекаККМ.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:601px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Виды оплат чека ККМ',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:434px;height:280px;',
			height: 280,width: 434,
			columns:
			[
				{
					text:'',
					width:'33',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Тип оплаты',
					width:'114',
					dataIndex:'ТипОплаты',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ВидыОплатЧекаККМ").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВидыОплатЧекаККМ/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						name:'ТипОплаты',
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
						Ext.require(['Справочники.ВидыОплатЧекаККМ.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВидыОплатЧекаККМ.ФормаСпискаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'СправочникДерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:280px;',
			height: 280,width: 145,
			columns:
			[
				{
					text:'Наименование',
					width:'140',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ВидыОплатЧекаККМ").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВидыОплатЧекаККМ/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var грид = Ext.getCmp('СправочникДерево');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ВидыОплатЧекаККМ.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВидыОплатЧекаККМ.ФормаСпискаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:601px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
	});
});