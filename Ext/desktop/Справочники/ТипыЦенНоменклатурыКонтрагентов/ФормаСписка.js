Ext.require(['Данные.Справочники.ТипыЦенНоменклатурыКонтрагентов'], function () 
{
	Ext.define('Справочники.ТипыЦенНоменклатурыКонтрагентов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:550px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Типы цен номенклатуры контрагентов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:534px;height:280px;',
			height: 280,width: 534,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'176',
					dataIndex:'Владелец',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Валюта',
					width:'60',
					dataIndex:'ВалютаЦены.Представление',
					flex:1,
				},
				{
					text:'Тип цены номенклатуры',
					width:'180',
					dataIndex:'ТипЦеныНоменклатуры.Представление',
					flex:1,
				},
				{
					text:'Включает НДС',
					width:'80',
					dataIndex:'ЦенаВключаетНДС',
					flex:1,
				},
				{
					text:'Описание',
					width:'220',
					dataIndex:'ОписаниеТипаЦеныНоменклатурыКонтрагента',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'220',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ТипыЦенНоменклатурыКонтрагентов").data,
					fields: ['Ссылка','Картинка','Код','Владелец','Наименование','ВалютаЦены.Представление','ТипЦеныНоменклатуры.Представление','ЦенаВключаетНДС','ОписаниеТипаЦеныНоменклатурыКонтрагента','Комментарий',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТипыЦенНоменклатурыКонтрагентов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Владелец',
					},
					{
						name:'Наименование',
					},
					{
						name:'ВалютаЦены',
					},
					{
						name:'ТипЦеныНоменклатуры',
					},
					{
						name:'ЦенаВключаетНДС',
					},
					{
						name:'ОписаниеТипаЦеныНоменклатурыКонтрагента',
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
						var грид = Ext.getCmp('СправочникСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ТипыЦенНоменклатурыКонтрагентов.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТипыЦенНоменклатурыКонтрагентов.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:550px;height:25px;',
			width: 550,
			height: 25,
			items:
			[
				{
					text:'',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				{
					text:'',
					tooltip:'Новая группа',
					iconCls:'x-CreateFolder',
				},
				{
					text:'',
					tooltip:'Скопировать',
					iconCls:'x-copy',
				},
				{
					text:'',
					tooltip:'Изменить',
					iconCls:'x-Change',
				},
				{
					text:'',
					tooltip:'Установить пометку удаления',
					iconCls:'x-MarkToDelete',
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