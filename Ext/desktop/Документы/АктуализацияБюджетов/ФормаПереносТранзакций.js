Ext.require(['Данные.Документы.АктуализацияБюджетов'], function () 
{
	Ext.define('Документы.АктуализацияБюджетов.ФормаПереносТранзакций',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:626px;height:370px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Перенос транзакций на следующие периоды',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:626px;height:25px;',
			width: 626,
			height: 25,
			items:
			[
			]
		},
		{
			id: 'НастройкаПереносаТранзакций',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:58px;width:610px;height:279px;',
			height: 279,width: 610,
			columns:
			[
				{
					text:'N',
					width:'21',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Переносить транзакцию',
					width:'28',
					dataIndex:'ПереноситьТранзакцию',
					flex:1,
				},
				{
					text:'Установка периода',
					width:'114',
					dataIndex:'УстановкаПериода',
					flex:1,
				},
				{
					text:'Период',
					width:'117',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Статья оборотов',
					width:'146',
					dataIndex:'СтатьяОборотов',
					flex:1,
				},
				{
					text:'Валюта',
					width:'100',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'ЦФО',
					width:'100',
					dataIndex:'ЦФО',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'100',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Количество',
					width:'89',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Сумма в валюте',
					width:'89',
					dataIndex:'СуммаВал',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АктуализацияБюджетов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ПереноситьТранзакцию',
					},
					{
						name:'УстановкаПериода',
					},
					{
						name:'Период',
					},
					{
						name:'СтатьяОборотов',
					},
					{
						name:'Валюта',
					},
					{
						name:'ЦФО',
					},
					{
						name:'Проект',
					},
					{
						name:'Контрагент',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Количество',
					},
					{
						name:'СуммаВал',
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
						var грид = Ext.getCmp('НастройкаПереносаТранзакций');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АктуализацияБюджетов.ФормаПереносТранзакцийСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АктуализацияБюджетов.ФормаПереносТранзакцийСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:33px;width:610px;height:25px;',
			width: 610,
			height: 25,
			items:
			[
				{
					text:'Установить все',
				},
				{
					text:'Снять все',
				},
				{
					text:'Заполнить',
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:345px;width:626px;height:25px;',
			width: 626,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});