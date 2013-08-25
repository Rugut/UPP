Ext.require(['Данные.Документы.ВыгрузкаРегламентированныхОтчетов'], function () 
{
	Ext.define('Документы.ВыгрузкаРегламентированныхОтчетов.ФормаНавигацииПоОшибкам',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:649px;height:148px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Навигация по ошибкам',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ТаблицаСообщений',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:649px;height:124px;',
			height: 124,width: 649,
			columns:
			[
				{
					text:'Отчет',
					width:'100',
					dataIndex:'Отчет',
					flex:1,
				},
				{
					text:'Описание',
					width:'102',
					dataIndex:'Описание',
					flex:1,
				},
				{
					text:'Страница',
					width:'97',
					dataIndex:'Страница',
					flex:1,
				},
				{
					text:'Строка',
					width:'100',
					dataIndex:'Строка',
					flex:1,
				},
				{
					text:'Графа',
					width:'100',
					dataIndex:'Графа',
					flex:1,
				},
				{
					text:'Имя ячейки',
					width:'100',
					dataIndex:'ИмяЯчейки',
					flex:1,
				},
				{
					text:'Строка п/п',
					width:'100',
					dataIndex:'СтрокаПП',
					flex:1,
				},
				{
					text:'Документ-отчет',
					width:'100',
					dataIndex:'ОтчетДок',
					flex:1,
				},
				{
					text:'Раздел',
					width:'100',
					dataIndex:'Раздел',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВыгрузкаРегламентированныхОтчетов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Отчет',
					},
					{
						name:'Описание',
					},
					{
						name:'Страница',
					},
					{
						name:'Строка',
					},
					{
						name:'Графа',
					},
					{
						name:'ИмяЯчейки',
					},
					{
						name:'СтрокаПП',
					},
					{
						name:'ОтчетДок',
					},
					{
						name:'Раздел',
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
						var грид = Ext.getCmp('ТаблицаСообщений');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВыгрузкаРегламентированныхОтчетов.ФормаНавигацииПоОшибкамСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВыгрузкаРегламентированныхОтчетов.ФормаНавигацииПоОшибкамСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:24px;',
			width: 82,
			height: 24,
			items:
			[
				{
					text:'Назад',
				},
				{
					text:'Вперед',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоОшибок',
			text: 'НадписьВсегоОшибок',
			style: 'position:absolute;left:193px;top:5px;width:450px;height:15px;text-align:right;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});