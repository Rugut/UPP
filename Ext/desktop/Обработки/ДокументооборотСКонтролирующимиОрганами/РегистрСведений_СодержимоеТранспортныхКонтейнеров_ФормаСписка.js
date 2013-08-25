Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_СодержимоеТранспортныхКонтейнеров_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:696px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Список Содержимое транспортных контейнеров',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'РегистрСведенийСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:680px;height:259px;',
			height: 259,width: 680,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Транспортное сообщение',
					width:'158',
					dataIndex:'ТранспортноеСообщение',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'229',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Тип',
					width:'100',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Размер (в байтах)',
					width:'144',
					dataIndex:'Размер',
					flex:1,
				},
				{
					text:'Тип файла отчетности ПФР',
					width:'100',
					dataIndex:'ТипФайлаОтчетностиПФР',
					flex:1,
				},
				{
					text:'Статус проверки ЭЦП',
					width:'140',
					dataIndex:'ЭЦПСтатусПроверки',
					flex:1,
				},
				{
					text:'Сертификат ключа подписи',
					width:'198',
					dataIndex:'ЭЦПСертификат',
					flex:1,
				},
				{
					text:'Имя подписанного файла',
					width:'200',
					dataIndex:'ЭЦПИмяПодписанногоФайла',
					flex:1,
				},
				{
					text:'Признак подписи абонента',
					width:'21',
					dataIndex:'ЭЦПЭтоПодписьАбонента',
					flex:1,
				},
				{
					text:'Идентификатор',
					width:'224',
					dataIndex:'Идентификатор',
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
						name:'ТранспортноеСообщение',
					},
					{
						name:'ИмяФайла',
					},
					{
						name:'Тип',
					},
					{
						name:'Размер',
					},
					{
						name:'ТипФайлаОтчетностиПФР',
					},
					{
						name:'ЭЦПСтатусПроверки',
					},
					{
						name:'ЭЦПСертификат',
					},
					{
						name:'ЭЦПИмяПодписанногоФайла',
					},
					{
						name:'ЭЦПЭтоПодписьАбонента',
					},
					{
						name:'Идентификатор',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_СодержимоеТранспортныхКонтейнеров_ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_СодержимоеТранспортныхКонтейнеров_ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:696px;height:25px;',
			width: 696,
			height: 25,
			items:
			[
				'-',
				{
					text:'Выгрузить',
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