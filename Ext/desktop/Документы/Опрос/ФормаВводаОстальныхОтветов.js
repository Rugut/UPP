Ext.require(['Данные.Документы.Опрос'], function () 
{
	Ext.define('Документы.Опрос.ФормаВводаОстальныхОтветов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:915px;height:290px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Ответ',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:10px;width:899px;height:249px;',
			height: 249,width: 899,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'НесколькоВариантовОтветов',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:899px;height:249px;',
			height: 249,width: 899,
			columns:
			[
				{
					text:'',
					width:'25',
					dataIndex:'Выбор',
					flex:1,
				},
				{
					text:'№',
					width:'35',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Составной ответ',
					width:'204',
					dataIndex:'ВариантОтвета',
					flex:1,
				},
				{
					text:'Развернутый ответ',
					width:'200',
					dataIndex:'Ответ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Опрос/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Выбор',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ВариантОтвета',
					},
					{
						name:'Ответ',
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
						var грид = Ext.getCmp('НесколькоВариантовОтветов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Опрос.ФормаВводаОстальныхОтветовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Опрос.ФормаВводаОстальныхОтветовСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			id: 'ТабличноеПолеСоставногоОтвета',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:899px;height:249px;',
			height: 249,width: 899,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Опрос/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('ТабличноеПолеСоставногоОтвета');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Опрос.ФормаВводаОстальныхОтветовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Опрос.ФормаВводаОстальныхОтветовСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:265px;width:915px;height:25px;',
			width: 915,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'',
				},
				'-',
				{
					text:'Отмена',
					tooltip:'Закрыть',
					iconCls:'x-Close',
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