Ext.require(['Данные.Справочники.ВнешниеОбработки'], function () 
{
	Ext.define('Справочники.ВнешниеОбработки.ФормаВыбораТЧПринадлежности',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:335px;height:245px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Табличная часть',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СписокТабличныхЧастей',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:319px;height:204px;',
			height: 204,width: 319,
			columns:
			[
				{
					text:'',
					width:'0',
					dataIndex:'',
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
						name:'',
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
						var грид = Ext.getCmp('СписокТабличныхЧастей');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ВнешниеОбработки.ФормаВыбораТЧПринадлежностиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВнешниеОбработки.ФормаВыбораТЧПринадлежностиСобытия");
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
			style: 'position:absolute;left:0px;top:220px;width:335px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				{
					text:'Отмена',
				},
			]
		},
	]
	});
});