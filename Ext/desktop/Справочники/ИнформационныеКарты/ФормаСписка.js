Ext.require(['Данные.Справочники.ИнформационныеКарты'], function () 
{
	Ext.define('Справочники.ИнформационныеКарты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:680px;height:352px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Справочник Информационные карты',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:513px;height:311px;',
			height: 311,width: 513,
			columns:
			[
				{
					text:'',
					width:'34',
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
					width:'224',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Код карты',
					width:'147',
					dataIndex:'КодКарты',
					flex:1,
				},
				{
					text:'Владелец карты',
					width:'151',
					dataIndex:'ВладелецКарты',
					flex:1,
				},
				{
					text:'Вид дисконтной карты',
					width:'152',
					dataIndex:'ВидДисконтнойКарты.Представление',
					flex:1,
				},
				{
					text:'Вид карты',
					width:'120',
					dataIndex:'ВидКарты.Представление',
					flex:1,
				},
				{
					text:'Тип карты',
					width:'120',
					dataIndex:'ТипКарты.Представление',
					flex:1,
				},
				{
					text:'Тип штрих кода',
					width:'120',
					dataIndex:'ТипШтрихКода.Представление',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ИнформационныеКарты").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Код','Наименование','КодКарты','ВладелецКарты','ВидДисконтнойКарты.Представление','ВидКарты.Представление','ТипКарты.Представление','ТипШтрихКода.Представление',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИнформационныеКарты/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'КодКарты',
					},
					{
						name:'ВладелецКарты',
					},
					{
						name:'ВидДисконтнойКарты',
					},
					{
						name:'ВидКарты',
					},
					{
						name:'ТипКарты',
					},
					{
						name:'ТипШтрихКода',
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
						Ext.require(['Справочники.ИнформационныеКарты.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИнформационныеКарты.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'СправочникДерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:311px;',
			height: 311,width: 145,
			columns:
			[
				{
					text:'Наименование',
					width:'119',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ИнформационныеКарты").data,
					fields: ['Ссылка','Родитель.Представление','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИнформационныеКарты/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
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
						var грид = Ext.getCmp('СправочникДерево');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИнформационныеКарты.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИнформационныеКарты.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:680px;height:25px;',
			width: 680,
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