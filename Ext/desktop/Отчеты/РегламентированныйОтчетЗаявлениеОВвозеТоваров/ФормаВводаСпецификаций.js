Ext.require(['Данные.Отчеты.РегламентированныйОтчетЗаявлениеОВвозеТоваров'], function () 
{
	Ext.define('Отчеты.РегламентированныйОтчетЗаявлениеОВвозеТоваров.ФормаВводаСпецификаций',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:247px;height:217px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Спецификации',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ТЗСпецификаций',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:231px;height:154px;',
			height: 154,width: 231,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегламентированныйОтчетЗаявлениеОВвозеТоваров/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ТЗСпецификаций');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.РегламентированныйОтчетЗаявлениеОВвозеТоваров.ФормаВводаСпецификацийСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РегламентированныйОтчетЗаявлениеОВвозеТоваров.ФормаВводаСпецификацийСобытия");
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
			style: 'position:absolute;left:0px;top:192px;width:247px;height:25px;',
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
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:0px;width:231px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
	});
});