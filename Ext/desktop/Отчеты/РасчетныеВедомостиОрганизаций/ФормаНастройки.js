Ext.require(['Данные.Отчеты.РасчетныеВедомостиОрганизаций'], function () 
{
	Ext.define('Отчеты.РасчетныеВедомостиОрганизаций.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:645px;height:462px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройки отчета',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:437px;width:645px;height:25px;',
			width: 645,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Справка',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			id: 'НастройкиСкрытыеЭлемент',
			xtype: 'grid',
			style: 'position:absolute;left:34px;top:62px;width:182px;height:82px;',
			height: 82,width: 182,
			columns:
			[
				{
					text:'Заголовок',
					width:'100',
					dataIndex:'Заголовок',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Выбор',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Отбор',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Порядок',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'УсловноеОформление',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'ПараметрыВывода',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетныеВедомостиОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Заголовок',
					},
					{
						name:'Выбор',
					},
					{
						name:'Отбор',
					},
					{
						name:'Порядок',
					},
					{
						name:'УсловноеОформление',
					},
					{
						name:'ПараметрыВывода',
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
						var грид = Ext.getCmp('НастройкиСкрытыеЭлемент');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетныеВедомостиОрганизаций.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетныеВедомостиОрганизаций.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'НастройкиСкрытыеГруппировкиСтрок',
			xtype: 'grid',
			style: 'position:absolute;left:34px;top:149px;width:182px;height:96px;',
			height: 96,width: 182,
			columns:
			[
				{
					text:'Заголовок',
					width:'100',
					dataIndex:'Заголовок',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Выбор',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Отбор',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Порядок',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'УсловноеОформление',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'ПараметрыВывода',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетныеВедомостиОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Заголовок',
					},
					{
						name:'Выбор',
					},
					{
						name:'Отбор',
					},
					{
						name:'Порядок',
					},
					{
						name:'УсловноеОформление',
					},
					{
						name:'ПараметрыВывода',
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
						var грид = Ext.getCmp('НастройкиСкрытыеГруппировкиСтрок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетныеВедомостиОрганизаций.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетныеВедомостиОрганизаций.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'НастройкиСкрытыеГруппировкиКолонок',
			xtype: 'grid',
			style: 'position:absolute;left:38px;top:254px;width:178px;height:80px;',
			height: 80,width: 178,
			columns:
			[
				{
					text:'Заголовок',
					width:'100',
					dataIndex:'Заголовок',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Выбор',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Отбор',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Порядок',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'УсловноеОформление',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'ПараметрыВывода',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетныеВедомостиОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Заголовок',
					},
					{
						name:'Выбор',
					},
					{
						name:'Отбор',
					},
					{
						name:'Порядок',
					},
					{
						name:'УсловноеОформление',
					},
					{
						name:'ПараметрыВывода',
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
						var грид = Ext.getCmp('НастройкиСкрытыеГруппировкиКолонок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетныеВедомостиОрганизаций.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетныеВедомостиОрганизаций.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'ТабличноеПолеНастройкиСкрытые',
			xtype: 'grid',
			style: 'position:absolute;left:34px;top:347px;width:182px;height:74px;',
			height: 74,width: 182,
			columns:
			[
				{
					text:'Заголовок',
					width:'100',
					dataIndex:'Заголовок',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Выбор',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Отбор',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Порядок',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'УсловноеОформление',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'ПараметрыВывода',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетныеВедомостиОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Заголовок',
					},
					{
						name:'Выбор',
					},
					{
						name:'Отбор',
					},
					{
						name:'Порядок',
					},
					{
						name:'УсловноеОформление',
					},
					{
						name:'ПараметрыВывода',
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
						var грид = Ext.getCmp('ТабличноеПолеНастройкиСкрытые');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетныеВедомостиОрганизаций.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетныеВедомостиОрганизаций.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'ТабличноеПолеДоступныеПоля',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:23px;width:222px;height:406px;',
			height: 406,width: 222,
			columns:
			[
				{
					text:'Доступные поля',
					width:'100',
					dataIndex:'Заголовок',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетныеВедомостиОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Заголовок',
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
						Ext.require(['Справочники.РасчетныеВедомостиОрганизаций.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетныеВедомостиОрганизаций.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Доступные поля',
			style: 'position:absolute;left:8px;top:6px;width:222px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:258px;top:9px;width:379px;height:420px;',
			height: 420,width: 379,
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:365px;height:384px;',
			height: 384,width: 365,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ВыбранныеПоляСтраницаНеТаблица',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:193px;width:365px;height:191px;',
			height: 191,width: 365,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Заголовок',
					width:'100',
					dataIndex:'Заголовок',
					flex:1,
				},
				{
					text:'Расположение',
					width:'100',
					dataIndex:'Расположение',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетныеВедомостиОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Заголовок',
					},
					{
						name:'Расположение',
					},
					{
						name:'Поле',
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
						var грид = Ext.getCmp('ВыбранныеПоляСтраницаНеТаблица');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетныеВедомостиОрганизаций.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетныеВедомостиОрганизаций.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Строки',
			style: 'position:absolute;left:0px;top:0px;width:365px;height:17px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:18px;width:365px;height:24px;',
			width: 365,
			height: 24,
			items:
			[
				{
					text:'Добавить поле',
				},
				'-',
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			id: 'ТабличноеПолеГруппировкиСтрокСтраницаНеТаблица',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:44px;width:365px;height:95px;',
			height: 95,width: 365,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Тип группировки',
					width:'100',
					dataIndex:'ТипГруппировки',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'ПолеДляДаты',
					flex:1,
				},
				{
					text:'Тип дополнения',
					width:'100',
					dataIndex:'ТипДополнения',
					flex:1,
				},
				{
					text:'Начальная дата периода',
					width:'100',
					dataIndex:'НачалоПериода',
					flex:1,
				},
				{
					text:'Конечная дата периода',
					width:'100',
					dataIndex:'КонецПериода',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетныеВедомостиОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Поле',
					},
					{
						name:'ТипГруппировки',
					},
					{
						name:'ПолеДляДаты',
					},
					{
						name:'ТипДополнения',
					},
					{
						name:'НачалоПериода',
					},
					{
						name:'КонецПериода',
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
						var грид = Ext.getCmp('ТабличноеПолеГруппировкиСтрокСтраницаНеТаблица');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетныеВедомостиОрганизаций.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетныеВедомостиОрганизаций.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:169px;width:365px;height:24px;',
			width: 365,
			height: 24,
			items:
			[
				{
					text:'Добавить поле',
				},
				'-',
				{
					text:'Добавить группу',
				},
				'-',
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			text: 'Показатели и дополнительные поля',
			style: 'position:absolute;left:0px;top:147px;width:365px;height:17px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:9px;top:275px;width:348px;height:24px;',
			width: 348,
			height: 24,
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:365px;height:384px;',
			height: 384,width: 365,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Отбор',
			style: 'position:absolute;left:0px;top:0px;width:365px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТабличноеПолеОтборСтраницаБезПараметров',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:44px;width:365px;height:144px;',
			height: 144,width: 365,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'ЛевоеЗначениеДляПодробногоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'75',
					dataIndex:'ВидыСравненияДляПодробногоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'ПравоеЗначениеДляПодробногоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Представление',
					width:'100',
					dataIndex:'ПредставлениеДляПодробногоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Представление',
					width:'100',
					dataIndex:'ПредставлениеДляКраткогоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'ЛевоеЗначениеДляКраткогоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'75',
					dataIndex:'ВидыСравненияДляКраткогоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'ПравоеЗначениеДляКраткогоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Тип группы',
					width:'100',
					dataIndex:'ТипДляПодробногоОтображенияГруппы',
					flex:1,
				},
				{
					text:'Представление',
					width:'100',
					dataIndex:'ПредставлениеДляПодробногоОтображенияГруппы',
					flex:1,
				},
				{
					text:'Тип группы',
					width:'100',
					dataIndex:'ТипДляКраткогоОтображенияГруппы',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетныеВедомостиОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'ЛевоеЗначениеДляПодробногоОтображенияЭлемента',
					},
					{
						name:'ВидыСравненияДляПодробногоОтображенияЭлемента',
					},
					{
						name:'ПравоеЗначениеДляПодробногоОтображенияЭлемента',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияЭлемента',
					},
					{
						name:'ПредставлениеДляКраткогоОтображенияЭлемента',
					},
					{
						name:'ЛевоеЗначениеДляКраткогоОтображенияЭлемента',
					},
					{
						name:'ВидыСравненияДляКраткогоОтображенияЭлемента',
					},
					{
						name:'ПравоеЗначениеДляКраткогоОтображенияЭлемента',
					},
					{
						name:'ТипДляПодробногоОтображенияГруппы',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияГруппы',
					},
					{
						name:'ТипДляКраткогоОтображенияГруппы',
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
						var грид = Ext.getCmp('ТабличноеПолеОтборСтраницаБезПараметров');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетныеВедомостиОрганизаций.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетныеВедомостиОрганизаций.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:18px;width:365px;height:24px;',
			width: 365,
			height: 24,
			items:
			[
				{
					text:'Добавить поле',
				},
				'-',
				{
					text:'Добавить группу',
				},
				'-',
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Упорядочивание',
			style: 'position:absolute;left:0px;top:194px;width:365px;height:17px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТабличноеПолеСортировкаСтраницаБезПараметров',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:240px;width:365px;height:144px;',
			height: 144,width: 365,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Направление упорядочивания',
					width:'100',
					dataIndex:'ТипУпорядочивания',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетныеВедомостиОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Поле',
					},
					{
						name:'ТипУпорядочивания',
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
						var грид = Ext.getCmp('ТабличноеПолеСортировкаСтраницаБезПараметров');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетныеВедомостиОрганизаций.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетныеВедомостиОрганизаций.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:214px;width:365px;height:24px;',
			width: 365,
			height: 24,
			items:
			[
				{
					text:'Добавить поле',
				},
				'-',
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
			]
		},
					]
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:365px;height:385px;',
			height: 385,width: 365,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Отрицательное красным',
			style: 'position:absolute;left:0px;top:44px;width:145px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать заголовок',
			style: 'position:absolute;left:0px;top:22px;width:135px;height:19px;',
		},
		{
			id: 'УсловноеОформлениеСтраницаОформление',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:114px;width:365px;height:271px;',
			height: 271,width: 365,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Оформление',
					width:'100',
					dataIndex:'ОформлениеДляКраткогоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Условие',
					width:'100',
					dataIndex:'ОтборДляКраткогоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Область',
					width:'100',
					dataIndex:'ОбластиДляКраткогоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Представление',
					width:'100',
					dataIndex:'ПредставлениеДляКраткогоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Оформление',
					width:'100',
					dataIndex:'ОформлениеДляПодробногоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Условие',
					width:'100',
					dataIndex:'ОтборДляПодробногоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Область',
					width:'100',
					dataIndex:'ОбластиДляПодробногоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Представление',
					width:'100',
					dataIndex:'ПредставлениеДляПодробногоОтображенияЭлемента',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетныеВедомостиОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'ОформлениеДляКраткогоОтображенияЭлемента',
					},
					{
						name:'ОтборДляКраткогоОтображенияЭлемента',
					},
					{
						name:'ОбластиДляКраткогоОтображенияЭлемента',
					},
					{
						name:'ПредставлениеДляКраткогоОтображенияЭлемента',
					},
					{
						name:'ОформлениеДляПодробногоОтображенияЭлемента',
					},
					{
						name:'ОтборДляПодробногоОтображенияЭлемента',
					},
					{
						name:'ОбластиДляПодробногоОтображенияЭлемента',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияЭлемента',
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
						var грид = Ext.getCmp('УсловноеОформлениеСтраницаОформление');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетныеВедомостиОрганизаций.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетныеВедомостиОрганизаций.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Условное оформление',
			style: 'position:absolute;left:0px;top:68px;width:365px;height:17px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Общее',
			style: 'position:absolute;left:0px;top:0px;width:365px;height:17px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:86px;width:365px;height:24px;',
			width: 365,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
			]
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:235px;top:8px;width:16px;height:420px;',
			height: 420,width: 16,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'button',
			name: 'Вправо31',
			text: '>',
			style: 'position:absolute;left:0px;top:96px;width:16px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Влево31',
			text: '<',
			style: 'position:absolute;left:0px;top:119px;width:16px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Вправо33',
			text: '>',
			style: 'position:absolute;left:0px;top:270px;width:16px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'Влево33',
			text: '<',
			style: 'position:absolute;left:0px;top:296px;width:16px;height:21px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'button',
			name: 'Вправо21',
			text: '>',
			style: 'position:absolute;left:0px;top:107px;width:16px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Влево21',
			text: '<',
			style: 'position:absolute;left:0px;top:130px;width:16px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Вправо22',
			text: '>',
			style: 'position:absolute;left:0px;top:312px;width:16px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Влево22',
			text: '<',
			style: 'position:absolute;left:0px;top:335px;width:16px;height:21px;',
		},
					]
				},
				{
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:21px;top:110px;width:203px;height:24px;',
			width: 203,
			height: 24,
			items:
			[
				{
					text:'Вывести список...',
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