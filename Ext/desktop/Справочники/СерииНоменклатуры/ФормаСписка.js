Ext.require(['Данные.Справочники.СерииНоменклатуры'], function () 
{
	Ext.define('Справочники.СерииНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Серии номенклатуры',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:320px;',
			height: 320,width: 764,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Владелец',
					width:'76',
					dataIndex:'Владелец',
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
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Номер серии',
					width:'100',
					dataIndex:'СерийныйНомер',
					flex:1,
				},
				{
					text:'Номер и дата сертификата',
					width:'180',
					dataIndex:'НомерИДатаСертификата',
					flex:1,
				},
				{
					text:'Срок годности',
					width:'80',
					dataIndex:'СрокГодности',
					flex:1,
				},
				{
					text:'Номер ГТД',
					width:'220',
					dataIndex:'НомерГТД.Представление',
					flex:1,
				},
				{
					text:'Страна происхождения',
					width:'220',
					dataIndex:'СтранаПроисхождения.Представление',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'253',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СерииНоменклатуры").data,
					fields: ['Ссылка','Картинка','Владелец','Код','Наименование','СерийныйНомер','НомерИДатаСертификата','СрокГодности','НомерГТД.Представление','СтранаПроисхождения.Представление','Комментарий',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СерииНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Владелец',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'СерийныйНомер',
					},
					{
						name:'НомерИДатаСертификата',
					},
					{
						name:'СрокГодности',
					},
					{
						name:'НомерГТД',
					},
					{
						name:'СтранаПроисхождения',
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
						Ext.require(['Справочники.СерииНоменклатуры.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СерииНоменклатуры.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			width: 780,
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
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'',
					tooltip:'',
				},
					]
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				'-',
				{
					text:'',
					tooltip:'20cc664-4c6f-4539-b2e2-a25b6657662',
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