Ext.require(['Данные.Справочники.НастройкиФормированияДокументовВыпускаПродукции'], function () 
{
	Ext.define('Справочники.НастройкиФормированияДокументовВыпускаПродукции.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:754px;height:385px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройки формирования документов выпуска продукции',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:258px;top:33px;width:488px;height:344px;',
			height: 344,width: 488,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Выполнено по',
					width:'88',
					dataIndex:'ГраницаФормирования',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'120',
					dataIndex:'Подразделение.Представление',
					flex:1,
				},
				{
					text:'Вид документов',
					width:'160',
					dataIndex:'ВидРегулярногоДокумента',
					flex:1,
				},
				{
					text:'Детализация',
					width:'120',
					dataIndex:'ПериодДетализации.Представление',
					flex:1,
				},
				{
					text:'УУ',
					width:'21',
					dataIndex:'ОтражатьВУправленческомУчете',
					flex:1,
				},
				{
					text:'БУ',
					width:'21',
					dataIndex:'ОтражатьВБухгалтерскомУчете',
					flex:1,
				},
				{
					text:'НУ',
					width:'21',
					dataIndex:'ОтражатьВНалоговомУчете',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация.Представление',
					flex:1,
				},
				{
					text:'Подразделение организации',
					width:'160',
					dataIndex:'ПодразделениеОрганизации.Представление',
					flex:1,
				},
				{
					text:'Склад',
					width:'120',
					dataIndex:'Склад.Представление',
					flex:1,
				},
				{
					text:'Выпуск',
					width:'60',
					dataIndex:'ОтразитьВыпуск',
					flex:1,
				},
				{
					text:'Материалы',
					width:'60',
					dataIndex:'ОтразитьМатериалы',
					flex:1,
				},
				{
					text:'Автоматич.',
					width:'60',
					dataIndex:'ФормироватьДокументыАвтоматически',
					flex:1,
				},
				{
					text:'Регламентное задание',
					width:'120',
					dataIndex:'РегламентноеЗадание',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'120',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НастройкиФормированияДокументовВыпускаПродукции").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Наименование','ГраницаФормирования','Подразделение.Представление','ВидРегулярногоДокумента','ПериодДетализации.Представление','ОтражатьВУправленческомУчете','ОтражатьВБухгалтерскомУчете','ОтражатьВНалоговомУчете','Организация.Представление','ПодразделениеОрганизации.Представление','Склад.Представление','ОтразитьВыпуск','ОтразитьМатериалы','ФормироватьДокументыАвтоматически','РегламентноеЗадание','Комментарий',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиФормированияДокументовВыпускаПродукции/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
					{
						name:'ГраницаФормирования',
					},
					{
						name:'Подразделение',
					},
					{
						name:'ВидРегулярногоДокумента',
					},
					{
						name:'ПериодДетализации',
					},
					{
						name:'ОтражатьВУправленческомУчете',
					},
					{
						name:'ОтражатьВБухгалтерскомУчете',
					},
					{
						name:'ОтражатьВНалоговомУчете',
					},
					{
						name:'Организация',
					},
					{
						name:'ПодразделениеОрганизации',
					},
					{
						name:'Склад',
					},
					{
						name:'ОтразитьВыпуск',
					},
					{
						name:'ОтразитьМатериалы',
					},
					{
						name:'ФормироватьДокументыАвтоматически',
					},
					{
						name:'РегламентноеЗадание',
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
						Ext.require(['Справочники.НастройкиФормированияДокументовВыпускаПродукции.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиФормированияДокументовВыпускаПродукции.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:754px;height:25px;',
			width: 754,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
				{
					text:'Настройка списка...',
					tooltip:'Настройка списка',
					iconCls:'x-ListSettings',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Ввести на основании)',
					tooltip:'Ввести на основании',
					iconCls:'x-InputOnBasis',
				},
					]
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			id: 'СправочникДерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:244px;height:344px;',
			height: 344,width: 244,
			columns:
			[
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НастройкиФормированияДокументовВыпускаПродукции").data,
					fields: ['Ссылка','Родитель.Представление','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиФормированияДокументовВыпускаПродукции/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.НастройкиФормированияДокументовВыпускаПродукции.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиФормированияДокументовВыпускаПродукции.ФормаСпискаСобытия");
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
	]
	});
});