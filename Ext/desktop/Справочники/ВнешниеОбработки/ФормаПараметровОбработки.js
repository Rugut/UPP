Ext.require(['Данные.Справочники.ВнешниеОбработки'], function () 
{
	Ext.define('Справочники.ВнешниеОбработки.ФормаПараметровОбработки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:341px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Дополнительные параметры обработки',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ПараметрыОбработки',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:384px;height:276px;',
			height: 276,width: 384,
			columns:
			[
				{
					text:'Имя',
					width:'148',
					dataIndex:'ИмяПараметра',
					flex:1,
				},
				{
					text:'Значение',
					width:'152',
					dataIndex:'ЗначениеПараметра',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ВнешниеОбработки").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВнешниеОбработки/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ИмяПараметра',
					},
					{
						name:'ЗначениеПараметра',
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
						var грид = Ext.getCmp('ПараметрыОбработки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ВнешниеОбработки.ФормаПараметровОбработкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВнешниеОбработки.ФормаПараметровОбработкиСобытия");
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
			style: 'position:absolute;left:0px;top:316px;width:400px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Принять',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:24px;',
			dock: 'top',
			items:
			[
			]
		},
	]
	});
});