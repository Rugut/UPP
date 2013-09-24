Ext.require(['Данные.Справочники.ВычетыНДФЛ'], function () 
{
	Ext.define('Справочники.ВычетыНДФЛ.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:717px;height:320px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Вычеты по НДФЛ',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:701px;height:280px;',
			height: 280,width: 701,
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
					width:'60',
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
					text:'Коды в отчетности',
					width:'144',
					dataIndex:'КолонкаКодов',
					flex:1,
				},
				{
					text:'с 2011 г.',
					width:'48',
					dataIndex:'КодДляОтчетности2011',
					flex:1,
				},
				{
					text:'2010 г.',
					width:'48',
					dataIndex:'КодДляОтчетности2010',
					flex:1,
				},
				{
					text:'2009 г.',
					width:'48',
					dataIndex:'КодДляОтчетности2009',
					flex:1,
				},
				{
					text:'2008 г.',
					width:'40',
					dataIndex:'КодДляОтчетности2008',
					flex:1,
				},
				{
					text:'2007 г.',
					width:'40',
					dataIndex:'КодДляОтчетности2007',
					flex:1,
				},
				{
					text:'Наименования прошлых лет',
					width:'200',
					dataIndex:'КолонкаНаименований',
					flex:1,
				},
				{
					text:'2009 - 2010 гг.',
					width:'100',
					dataIndex:'Наименование2010',
					flex:1,
				},
				{
					text:'2008 г.',
					width:'100',
					dataIndex:'Наименование2008',
					flex:1,
				},
				{
					text:'2005 - 2007 гг.',
					width:'100',
					dataIndex:'Наименование2007',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ВычетыНДФЛ").data,
					fields: ['Ссылка','Картинка','Код','Наименование','КолонкаКодов','КодДляОтчетности2011','КодДляОтчетности2010','КодДляОтчетности2009','КодДляОтчетности2008','КодДляОтчетности2007','КолонкаНаименований','Наименование2010','Наименование2008','Наименование2007',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВычетыНДФЛ/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'КолонкаКодов',
					},
					{
						name:'КодДляОтчетности2011',
					},
					{
						name:'КодДляОтчетности2010',
					},
					{
						name:'КодДляОтчетности2009',
					},
					{
						name:'КодДляОтчетности2008',
					},
					{
						name:'КодДляОтчетности2007',
					},
					{
						name:'КолонкаНаименований',
					},
					{
						name:'Наименование2010',
					},
					{
						name:'Наименование2008',
					},
					{
						name:'Наименование2007',
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
						Ext.require(['Справочники.ВычетыНДФЛ.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВычетыНДФЛ.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:717px;height:24px;',
			width: 717,
			height: 24,
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
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
					iconCls:'x-FilterByCurrentValue',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Поля сортировки)',
					tooltip:'',
				},
					]
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
				'-',
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
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
					iconCls:'x-FilterByCurrentValue',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
					tooltip:'',
				},
				'-',
				{
					text:'(История отборов)',
					tooltip:'',
					iconCls:'x-FilterHistory',
				},
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
					tooltip:'',
				},
					]
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
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