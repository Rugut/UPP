Ext.require(['Данные.Отчеты.РегламентированныйОтчетУСН'], function () 
{
	Ext.define('Отчеты.РегламентированныйОтчетУСН.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:287px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор из списка',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СписокКодов',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:584px;height:246px;',
			height: 246,width: 584,
			columns:
			[
				{
					text:'Код',
					width:'160',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Название',
					width:'220',
					dataIndex:'Название',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегламентированныйОтчетУСН/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Код',
					},
					{
						name:'Название',
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
						var грид = Ext.getCmp('СписокКодов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.РегламентированныйОтчетУСН.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РегламентированныйОтчетУСН.ФормаВыбораСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:262px;width:600px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
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