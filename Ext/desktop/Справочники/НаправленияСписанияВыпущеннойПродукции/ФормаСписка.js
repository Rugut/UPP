Ext.require(['Данные.Справочники.НаправленияСписанияВыпущеннойПродукции'], function () 
{
	Ext.define('Справочники.НаправленияСписанияВыпущеннойПродукции.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:281px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Направления списания выпущенной продукции (услуг)',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:588px;height:240px;',
			height: 240,width: 588,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'72',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'200',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'154',
					dataIndex:'Организация',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.НаправленияСписанияВыпущеннойПродукции").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НаправленияСписанияВыпущеннойПродукции/ВыбратьПоСсылке/100', timeout: 3},
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
						name:'Организация',
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
						Ext.require(['Справочники.НаправленияСписанияВыпущеннойПродукции.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НаправленияСписанияВыпущеннойПродукции.ФормаСпискаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
	});
});