Ext.require(['Данные.Справочники.НастройкиВыполненияОбмена'], function () 
{
	Ext.define('Справочники.НастройкиВыполненияОбмена.ВыборДействий',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:256px;height:266px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор действий',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ТаблицаДействий',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:240px;height:225px;',
			height: 225,width: 240,
			columns:
			[
				{
					text:'Действие',
					width:'240',
					dataIndex:'Действие',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.НастройкиВыполненияОбмена").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиВыполненияОбмена/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Действие',
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
						var грид = Ext.getCmp('ТаблицаДействий');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НастройкиВыполненияОбмена.ВыборДействийСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиВыполненияОбмена.ВыборДействийСобытия");
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
			style: 'position:absolute;left:0px;top:241px;width:256px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Отмена',
				},
				{
					text:'ОК',
				},
			]
		},
	]
	});
});