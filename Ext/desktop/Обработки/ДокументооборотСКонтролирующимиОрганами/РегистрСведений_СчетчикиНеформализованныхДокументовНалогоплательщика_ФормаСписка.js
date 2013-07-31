Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_СчетчикиНеформализованныхДокументовНалогоплательщика_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:689px;height:359px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Счетчики неформализованных документов налогоплательщика',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'РегистрСведенийСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:673px;height:318px;',
			height: 318,width: 673,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Период',
					width:'139',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Организация',
					width:'338',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'ИФНС',
					width:'76',
					dataIndex:'ИФНС',
					flex:1,
				},
				{
					text:'Счетчик',
					width:'74',
					dataIndex:'Счетчик',
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
						name:'Картинка',
					},
					{
						name:'Период',
					},
					{
						name:'Организация',
					},
					{
						name:'ИФНС',
					},
					{
						name:'Счетчик',
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
						var грид = Ext.getCmp('РегистрСведенийСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_СчетчикиНеформализованныхДокументовНалогоплательщика_ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_СчетчикиНеформализованныхДокументовНалогоплательщика_ФормаСпискаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:689px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
	});
});