Ext.require(['Данные.Справочники.ОтправкиФСС'], function () 
{
	Ext.define('Справочники.ОтправкиФСС.ФормаСпискаОбщая',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Справочник Отправки в ФСС',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:259px;',
			height: 259,width: 384,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата отправки',
					width:'115',
					dataIndex:'ДатаОтправки',
					flex:1,
				},
				{
					text:'Статус отправки',
					width:'94',
					dataIndex:'СтатусОтправки.Представление',
					flex:1,
				},
				{
					text:'Организация',
					width:'126',
					dataIndex:'Организация.Представление',
					flex:1,
				},
				{
					text:'Отчет',
					width:'100',
					dataIndex:'ОтчетСсылка',
					flex:1,
				},
				{
					text:'Идентификатор',
					width:'99',
					dataIndex:'ИдентификаторОтправкиНаСервере',
					flex:1,
				},
				{
					text:'Дата получения результата',
					width:'147',
					dataIndex:'ДатаПолученияРезультата',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ОтправкиФСС").data,
					fields: ['Ссылка','Картинка','ДатаОтправки','СтатусОтправки.Представление','Организация.Представление','ОтчетСсылка','ИдентификаторОтправкиНаСервере','ДатаПолученияРезультата',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтправкиФСС/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ДатаОтправки',
					},
					{
						name:'СтатусОтправки',
					},
					{
						name:'Организация',
					},
					{
						name:'ОтчетСсылка',
					},
					{
						name:'ИдентификаторОтправкиНаСервере',
					},
					{
						name:'ДатаПолученияРезультата',
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
						Ext.require(['Справочники.ОтправкиФСС.ФормаСпискаОбщаяСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтправкиФСС.ФормаСпискаОбщаяСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			width: 400,
			height: 25,
			items:
			[
				{
					text:'',
					tooltip:'Добавить',
					iconCls:'x-copy',
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
					iconCls:'x-Delete',
				},
				{
					text:'Выбрать',
					tooltip:'Выбрать значение',
					iconCls:'x-Select',
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