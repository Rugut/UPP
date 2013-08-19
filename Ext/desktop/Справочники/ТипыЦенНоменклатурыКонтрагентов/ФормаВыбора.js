Ext.require(['Данные.Справочники.ТипыЦенНоменклатурыКонтрагентов'], function () 
{
	Ext.define('Справочники.ТипыЦенНоменклатурыКонтрагентов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:321px;',
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
			style: 'position:absolute;left:8px;top:33px;width:592px;height:280px;',
			height: 280,width: 592,
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
					text:'Наименование',
					width:'180',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Валюта',
					width:'80',
					dataIndex:'ВалютаЦены.Представление',
					flex:1,
				},
				{
					text:'Включает НДС',
					width:'80',
					dataIndex:'ЦенаВключаетНДС',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'180',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Тип цены номенклатуры',
					width:'175',
					dataIndex:'ТипЦеныНоменклатуры.Представление',
					flex:1,
				},
				{
					text:'Описание типа цены номенклатуры контрагента',
					width:'100',
					dataIndex:'ОписаниеТипаЦеныНоменклатурыКонтрагента',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ТипыЦенНоменклатурыКонтрагентов").data,
					fields: ['Ссылка','Картинка','Код','Наименование','ВалютаЦены.Представление','ЦенаВключаетНДС','Комментарий','ТипЦеныНоменклатуры.Представление','ОписаниеТипаЦеныНоменклатурыКонтрагента',]
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
						name:'Наименование',
					},
					{
						name:'ВалютаЦены',
					},
					{
						name:'ЦенаВключаетНДС',
					},
					{
						name:'Комментарий',
					},
					{
						name:'ТипЦеныНоменклатуры',
					},
					{
						name:'ОписаниеТипаЦеныНоменклатурыКонтрагента',
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
						Ext.require(['Справочники.ТипыЦенНоменклатурыКонтрагентов.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТипыЦенНоменклатурыКонтрагентов.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});