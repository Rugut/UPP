Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ВыборСертификатаОтветственногоЛица',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:810px;height:437px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор сертификата ответственного лица для подписания',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'Сертификаты',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:794px;height:396px;',
			height: 396,width: 794,
			columns:
			[
				{
					text:'Владелец',
					width:'215',
					dataIndex:'ОтветственноеЛицо',
					flex:1,
				},
				{
					text:'Сертификат',
					width:'545',
					dataIndex:'Сертификат',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ОтветственноеЛицо',
					},
					{
						name:'Сертификат',
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
						var грид = Ext.getCmp('Сертификаты');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.ВыборСертификатаОтветственногоЛицаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.ВыборСертификатаОтветственногоЛицаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:810px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Открыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});