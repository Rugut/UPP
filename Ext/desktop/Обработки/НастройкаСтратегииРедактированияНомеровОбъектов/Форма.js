Ext.require(['Данные.Обработки.НастройкаСтратегииРедактированияНомеровОбъектов'], function () 
{
	Ext.define('Обработки.НастройкаСтратегииРедактированияНомеровОбъектов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:554px;height:376px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка стратегии редактирования номеров (кодов) объектов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДеревоОбъектов',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:538px;height:311px;',
			height: 311,width: 538,
			columns:
			[
				{
					text:'Объект нумерации',
					width:'350',
					dataIndex:'Объект',
					flex:1,
				},
				{
					text:'Редактирования номера',
					width:'133',
					dataIndex:'СтратегияРедактирования',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкаСтратегииРедактированияНомеровОбъектов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Объект',
					},
					{
						name:'СтратегияРедактирования',
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
						var грид = Ext.getCmp('ДеревоОбъектов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкаСтратегииРедактированияНомеровОбъектов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкаСтратегииРедактированияНомеровОбъектов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:538px;height:24px;',
			items:
			[
				{
					text:'Заполнить по умолчанию',
				},
				'-',
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:351px;width:554px;height:25px;',
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
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});