Ext.require(['Данные.Документы.КонтролируемыеЗначенияПоБюджетам'], function () 
{
	Ext.define('Документы.КонтролируемыеЗначенияПоБюджетам.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Контролируемые значения по бюджетам',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДокументСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:380px;',
			height: 380,width: 764,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'132',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Сценарий',
					width:'120',
					dataIndex:'Сценарий',
					flex:1,
				},
				{
					text:'Вид контролируемых значений',
					width:'120',
					dataIndex:'ВидКонтролируемыхЗначений',
					flex:1,
				},
				{
					text:'Использование контролируемых значений',
					width:'120',
					dataIndex:'ИспользованиеКонтролируемыхЗначений',
					flex:1,
				},
				{
					text:'Вид ограничения оборотов',
					width:'120',
					dataIndex:'ВидОграниченияОборотов',
					flex:1,
				},
				{
					text:'Контролирующий сценарий',
					width:'120',
					dataIndex:'КонтролирующийСценарий',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'120',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Состояние',
					width:'100',
					dataIndex:'Состояние',
					flex:1,
				},
				{
					text:'Дата начала контроля оборотов ',
					width:'80',
					dataIndex:'ДатаНачалаКонтролирующегоСценария',
					flex:1,
				},
				{
					text:'Дата конца контроля оборотов ',
					width:'80',
					dataIndex:'ДатаКонцаКонтролирующегоСценария',
					flex:1,
				},
				{
					text:'Вид отклонения контролируемых значений',
					width:'120',
					dataIndex:'ВидОтклоненияКонтролируемыхЗначений',
					flex:1,
				},
				{
					text:'Отклонение',
					width:'80',
					dataIndex:'Отклонение',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'120',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонтролируемыеЗначенияПоБюджетам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'Сценарий',
					},
					{
						name:'ВидКонтролируемыхЗначений',
					},
					{
						name:'ИспользованиеКонтролируемыхЗначений',
					},
					{
						name:'ВидОграниченияОборотов',
					},
					{
						name:'КонтролирующийСценарий',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Состояние',
					},
					{
						name:'ДатаНачалаКонтролирующегоСценария',
					},
					{
						name:'ДатаКонцаКонтролирующегоСценария',
					},
					{
						name:'ВидОтклоненияКонтролируемыхЗначений',
					},
					{
						name:'Отклонение',
					},
					{
						name:'Комментарий',
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
						var грид = Ext.getCmp('ДокументСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.КонтролируемыеЗначенияПоБюджетам.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонтролируемыеЗначенияПоБюджетам.ФормаСпискаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
			]
		},
	]
	});
});