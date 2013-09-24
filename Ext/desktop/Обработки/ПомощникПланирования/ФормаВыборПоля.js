Ext.require(['Данные.Обработки.ПомощникПланирования'], function () 
{
	Ext.define('Обработки.ПомощникПланирования.ФормаВыборПоля',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:437px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Выбор поля',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ТабличноеПолеДоступныеПоля',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:396px;',
			height: 396,width: 384,
			columns:
			[
				{
					text:'Доступные поля',
					width:'100',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Путь к данным',
					width:'100',
					dataIndex:'ПутьКДанным',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'Детальная запись',
					width:'100',
					dataIndex:'ДетальнаяЗапись',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'Тип',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПомощникПланирования/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Представление',
					},
					{
						name:'ПутьКДанным',
					},
					{
						name:'Значение',
					},
					{
						name:'ДетальнаяЗапись',
					},
					{
						name:'Поле',
					},
					{
						name:'Тип',
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
						var грид = Ext.getCmp('ТабличноеПолеДоступныеПоля');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПомощникПланирования.ФормаВыборПоляСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПомощникПланирования.ФормаВыборПоляСобытия");
							obj.ПередатьСсылку(стрЗнач);
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
			style: 'position:absolute;left:0px;top:412px;width:400px;height:25px;',
			width: 400,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'ОК',
				},
				'-',
				{
					text:'Отмена',
					tooltip:'Закрыть',
					iconCls:'x-Close',
				},
			]
		},
	]
	});
});