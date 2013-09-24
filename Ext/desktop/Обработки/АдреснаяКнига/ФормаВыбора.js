Ext.require(['Данные.Обработки.АдреснаяКнига'], function () 
{
	Ext.define('Обработки.АдреснаяКнига.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:466px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Адресная книга (выбор)',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:9px;width:450px;height:408px;',
			height: 408,width: 450,
			items:
			[
				{
					items:
					[
		{
			id: 'КонтрагентыСписок',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:143px;',
			height: 143,width: 436,
			columns:
			[
				{
					text:'',
					width:'33',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдреснаяКнига/ВыбратьПоСсылке/100', timeout: 200},
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
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('КонтрагентыСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АдреснаяКнига.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'КонтактныеЛицаКонтрагентовСписок',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:230px;width:436px;height:128px;',
			height: 128,width: 436,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Контактное лицо контрагента',
					width:'180',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Должность',
					width:'120',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Роль',
					width:'120',
					dataIndex:'РольКонтактногоЛица',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдреснаяКнига/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Должность',
					},
					{
						name:'РольКонтактногоЛица',
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
						var грид = Ext.getCmp('КонтактныеЛицаКонтрагентовСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АдреснаяКнига.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			width: 436,
			height: 24,
			items:
			[
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:206px;width:436px;height:24px;',
			width: 436,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:292px;top:178px;width:150px;height:19px;',
			width: 150,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:292px;top:363px;width:150px;height:19px;',
			width: 150,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Фрагмент имени или адреса поиска (разделитель для поиска по И - "&&"):',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:19px;',
		},
		{
			id: 'ФизЛицаСписок',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:328px;',
			height: 328,width: 436,
			columns:
			[
				{
					text:'',
					width:'33',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдреснаяКнига/ВыбратьПоСсылке/100', timeout: 200},
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
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ФизЛицаСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АдреснаяКнига.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			width: 436,
			height: 24,
			items:
			[
				{
					text:'Контрагенты (Контактные лица)',
					tooltip:'Контрагенты (Контактные лица)',
				},
				{
					text:'Физические лица',
					tooltip:'Физические лица',
				},
				{
					text:'Прочие контактные лица',
					tooltip:'Прочие контактные лица',
				},
				{
					text:'Организации',
					tooltip:'Организации',
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:292px;top:363px;width:150px;height:19px;',
			width: 150,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			id: 'ПрочиеКонтактныеЛицаСписок',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:328px;',
			height: 328,width: 436,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдреснаяКнига/ВыбратьПоСсылке/100', timeout: 200},
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
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ПрочиеКонтактныеЛицаСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АдреснаяКнига.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			width: 436,
			height: 24,
			items:
			[
				{
					text:'Контрагенты (Контактные лица)',
					tooltip:'Контрагенты (Контактные лица)',
				},
				{
					text:'Физические лица',
					tooltip:'Физические лица',
				},
				{
					text:'Прочие контактные лица',
					tooltip:'Прочие контактные лица',
				},
				{
					text:'Организации',
					tooltip:'Организации',
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:292px;top:363px;width:150px;height:19px;',
			width: 150,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			id: 'ОрганизацииСписок',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:328px;',
			height: 328,width: 436,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдреснаяКнига/ВыбратьПоСсылке/100', timeout: 200},
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
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ОрганизацииСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АдреснаяКнига.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			width: 436,
			height: 24,
			items:
			[
				{
					text:'Контрагенты (Контактные лица)',
					tooltip:'Контрагенты (Контактные лица)',
				},
				{
					text:'Физические лица',
					tooltip:'Физические лица',
				},
				{
					text:'Прочие контактные лица',
					tooltip:'Прочие контактные лица',
				},
				{
					text:'Организации',
					tooltip:'Организации',
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:292px;top:363px;width:150px;height:19px;',
			width: 150,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			id: 'ЛичныеКонтактыСписок',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:328px;',
			height: 328,width: 436,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдреснаяКнига/ВыбратьПоСсылке/100', timeout: 200},
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
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ЛичныеКонтактыСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АдреснаяКнига.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			width: 436,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:292px;top:363px;width:150px;height:19px;',
			width: 150,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			id: 'ПользователиСписок',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:328px;',
			height: 328,width: 436,
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
					width:'66',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'280',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдреснаяКнига/ВыбратьПоСсылке/100', timeout: 200},
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
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ПользователиСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АдреснаяКнига.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			width: 436,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:292px;top:363px;width:150px;height:19px;',
			width: 150,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			id: 'ГруппыРассылкиСписок',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:435px;height:178px;',
			height: 178,width: 435,
			columns:
			[
				{
					text:'',
					width:'19',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Группа рассылки',
					width:'288',
					dataIndex:'ГруппаРассылки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдреснаяКнига/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПометкаУдаления',
					},
					{
						name:'ГруппаРассылки',
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
						var грид = Ext.getCmp('ГруппыРассылкиСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АдреснаяКнига.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:435px;height:24px;',
			width: 435,
			height: 24,
			items:
			[
				'-',
				{
					text:'',
					tooltip:'',
				},
			]
		},
		{
			id: 'СоставГруппыРассылки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:212px;width:435px;height:146px;',
			height: 146,width: 435,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Состав группы',
					width:'410',
					dataIndex:'ОбъектРассылки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдреснаяКнига/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ОбъектРассылки',
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
						var грид = Ext.getCmp('СоставГруппыРассылки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АдреснаяКнига.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:291px;top:363px;width:150px;height:19px;',
			width: 150,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтрокаПоиска',
			width: 361,
			height: 19,
			style: 'position:absolute;left:6px;top:30px;width:361px;height:19px;',
		},
		{
			id: 'РезультатыПоиска',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:78px;width:436px;height:280px;',
			height: 280,width: 436,
			columns:
			[
				{
					text:'Объект',
					width:'197',
					dataIndex:'Объект',
					flex:1,
				},
				{
					text:'E-Mail по умолчанию',
					width:'108',
					dataIndex:'ПредставлениеЗначенияПоУмолчанию',
					flex:1,
				},
				{
					text:'Тип объекта',
					width:'106',
					dataIndex:'ТипОбъекта',
					flex:1,
				},
				{
					text:'ДоступныеАдреса',
					width:'20',
					dataIndex:'ДоступныеАдреса',
					flex:1,
				},
				{
					text:'ЗначениеПоУмолчанию',
					width:'22',
					dataIndex:'ЗначениеПоУмолчанию',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдреснаяКнига/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Объект',
					},
					{
						name:'ПредставлениеЗначенияПоУмолчанию',
					},
					{
						name:'ТипОбъекта',
					},
					{
						name:'ДоступныеАдреса',
					},
					{
						name:'ЗначениеПоУмолчанию',
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
						var грид = Ext.getCmp('РезультатыПоиска');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АдреснаяКнига.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:292px;top:363px;width:150px;height:19px;',
			width: 150,
			height: 19,
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:54px;width:436px;height:24px;',
			width: 436,
			height: 24,
			items:
			[
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
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
					text:'Конструктор настроек...',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаНайти',
			text: 'Найти',
			style: 'position:absolute;left:372px;top:30px;width:70px;height:19px;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:466px;height:25px;',
			width: 466,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'ОК',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
	]
	});
});