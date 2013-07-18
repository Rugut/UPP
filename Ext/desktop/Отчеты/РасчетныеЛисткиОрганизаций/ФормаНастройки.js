Ext.require(['Данные.Отчеты.РасчетныеЛисткиОрганизаций'], function () 
{
	Ext.define('Отчеты.РасчетныеЛисткиОрганизаций.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:645px;height:461px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки отчета',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:436px;width:645px;height:25px;',
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
				},
			]
		},
		{
			id: 'НастройкиСкрытыеЭлемент',
			xtype: 'grid',
			style: 'position:absolute;left:34px;top:59px;width:182px;height:82px;',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетныеЛисткиОрганизаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.РасчетныеЛисткиОрганизаций.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетныеЛисткиОрганизаций.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'НастройкиСкрытыеГруппировкиСтрок',
			xtype: 'grid',
			style: 'position:absolute;left:34px;top:146px;width:182px;height:96px;',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетныеЛисткиОрганизаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.РасчетныеЛисткиОрганизаций.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетныеЛисткиОрганизаций.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'НастройкиСкрытыеГруппировкиКолонок',
			xtype: 'grid',
			style: 'position:absolute;left:38px;top:251px;width:178px;height:80px;',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетныеЛисткиОрганизаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.РасчетныеЛисткиОрганизаций.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетныеЛисткиОрганизаций.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'ТабличноеПолеНастройкиСкрытые',
			xtype: 'grid',
			style: 'position:absolute;left:34px;top:344px;width:182px;height:74px;',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетныеЛисткиОрганизаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.РасчетныеЛисткиОрганизаций.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетныеЛисткиОрганизаций.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'ТабличноеПолеДоступныеПоля',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:22px;width:222px;height:406px;',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетныеЛисткиОрганизаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.РасчетныеЛисткиОрганизаций.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетныеЛисткиОрганизаций.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Доступные поля',
			style: 'position:absolute;left:8px;top:6px;width:222px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:258px;top:6px;width:379px;height:420px;',
			height: 420,width: 379,
			items:
			[
				{
					title:'Группировки',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:365px;height:384px;',
			height: 384,width: 365,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница таблица',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Строки',
			style: 'position:absolute;left:0px;top:0px;width:365px;height:17px;',
		},
		{
			id: 'ТабличноеПолеГруппировкиСтрокСтраницаТаблица',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:44px;width:365px;height:340px;',
			height: 340,width: 365,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетныеЛисткиОрганизаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var грид = Ext.getCmp('ТабличноеПолеГруппировкиСтрокСтраницаТаблица');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.РасчетныеЛисткиОрганизаций.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетныеЛисткиОрганизаций.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Отбор и упорядочивание',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:365px;height:384px;',
			height: 384,width: 365,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница без параметров',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Отбор',
			style: 'position:absolute;left:0px;top:0px;width:365px;height:16px;',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетныеЛисткиОрганизаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.РасчетныеЛисткиОрганизаций.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетныеЛисткиОрганизаций.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Упорядочивание',
			style: 'position:absolute;left:0px;top:194px;width:365px;height:17px;',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетныеЛисткиОрганизаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.РасчетныеЛисткиОрганизаций.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетныеЛисткиОрганизаций.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:214px;width:365px;height:24px;',
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
					title:'Оформление',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:365px;height:385px;',
			height: 385,width: 365,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Оформление',
					items:
					[
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетныеЛисткиОрганизаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.РасчетныеЛисткиОрганизаций.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетныеЛисткиОрганизаций.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Условное оформление',
			style: 'position:absolute;left:0px;top:68px;width:365px;height:17px;',
		},
		{
			xtype: 'fieldset',
			title: 'Общее',
			style: 'position:absolute;left:0px;top:0px;width:365px;height:17px;',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:235px;top:6px;width:16px;height:420px;',
			height: 420,width: 16,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница3',
					items:
					[
		{
			xtype: 'button',
			name: 'Вправо31',
			text: '>',
			style: 'position:absolute;left:0px;top:209px;width:16px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Влево31',
			text: '<',
			style: 'position:absolute;left:0px;top:238px;width:16px;height:21px;',
		},
					]
				},
				{
					title:'Страница2',
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
					title:'Страница0',
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:21px;top:107px;width:203px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Вывести список...',
				},
				'-',
			]
		},
	]
	});
});