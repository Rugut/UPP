Ext.require(['Данные.Отчеты.РегламентированныйОтчетСтатистикаФормаП1'], function () 
{
	Ext.define('Отчеты.РегламентированныйОтчетСтатистикаФормаП1.ФормаВыбораПриложения3',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:657px;height:164px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выберите сохраненную форму ""П-1 Приложение 3"" для выгрузки',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СписокФормП1Пр3',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:641px;height:125px;',
			height: 125,width: 641,
			columns:
			[
				{
					text:'Представление',
					width:'320',
					dataIndex:'ПредставлениеФормы',
					flex:1,
				},
				{
					text:'Периодичность',
					width:'85',
					dataIndex:'Периодичность',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'265',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Период',
					width:'120',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'90',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'90',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'Текущий документ',
					width:'142',
					dataIndex:'ТекДок',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегламентированныйОтчетСтатистикаФормаП1/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПредставлениеФормы',
					},
					{
						name:'Периодичность',
					},
					{
						name:'Комментарий',
					},
					{
						name:'Период',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
					},
					{
						name:'ТекДок',
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
						var грид = Ext.getCmp('СписокФормП1Пр3');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.РегламентированныйОтчетСтатистикаФормаП1.ФормаВыбораПриложения3События'], function ()
						{
							var obj = Ext.create("Справочники.РегламентированныйОтчетСтатистикаФормаП1.ФормаВыбораПриложения3События");
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
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
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
			]
		},
	]
	});
});