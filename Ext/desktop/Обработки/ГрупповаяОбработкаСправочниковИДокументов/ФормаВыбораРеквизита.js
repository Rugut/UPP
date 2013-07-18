Ext.require(['Данные.Обработки.ГрупповаяОбработкаСправочниковИДокументов'], function () 
{
	Ext.define('Обработки.ГрупповаяОбработкаСправочниковИДокументов.ФормаВыбораРеквизита',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:355px;height:457px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор реквизита',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДеревоРеквизитов',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:12px;width:339px;height:412px;',
			height: 412,width: 339,
			columns:
			[
				{
					text:'Реквизиты',
					width:'145',
					dataIndex:'Реквизиит',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрупповаяОбработкаСправочниковИДокументов/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Реквизиит',
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
						var грид = Ext.getCmp('ДеревоРеквизитов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ГрупповаяОбработкаСправочниковИДокументов.ФормаВыбораРеквизитаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ГрупповаяОбработкаСправочниковИДокументов.ФормаВыбораРеквизитаСобытия");
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
			style: 'position:absolute;left:0px;top:432px;width:355px;height:25px;',
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
				},
			]
		},
	]
	});
});