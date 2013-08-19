Ext.require(['Данные.Обработки.АдреснаяКнига'], function () 
{
	Ext.define('Обработки.АдреснаяКнига.ФормаПодбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:779px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Адресная книга (подбор)',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:9px;width:483px;height:408px;',
			height: 408,width: 483,
			items:
			[
				{
					title:'Контрагенты (контактные лица)',
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
						Ext.require(['Справочники.АдреснаяКнига.ФормаПодбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаПодбораСобытия");
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
						Ext.require(['Справочники.АдреснаяКнига.ФормаПодбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаПодбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:206px;width:436px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьКонтрагенты',
			text: '>',
			style: 'position:absolute;left:447px;top:79px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьКонтрагентыВсе',
			text: '>>',
			style: 'position:absolute;left:447px;top:101px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьКонтактныеЛицаКонтрагентов',
			text: '>',
			style: 'position:absolute;left:447px;top:272px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьКонтактныеЛицаКонтрагентовВсе',
			text: '>>',
			style: 'position:absolute;left:447px;top:294px;width:28px;height:17px;',
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
					title:'Физические лица',
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
						Ext.require(['Справочники.АдреснаяКнига.ФормаПодбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаПодбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
				{
					text:'Контрагенты (Контактные лица)',
				},
				{
					text:'Физические лица',
				},
				{
					text:'Прочие контактные лица',
				},
				{
					text:'Организации',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьФизЛица',
			text: '>',
			style: 'position:absolute;left:447px;top:171px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьФизЛицаВсе',
			text: '>>',
			style: 'position:absolute;left:447px;top:193px;width:28px;height:17px;',
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
					title:'Прочие контактные лица',
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
					text:'Контактное лицо',
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
						Ext.require(['Справочники.АдреснаяКнига.ФормаПодбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаПодбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
				{
					text:'Контрагенты (Контактные лица)',
				},
				{
					text:'Физические лица',
				},
				{
					text:'Прочие контактные лица',
				},
				{
					text:'Организации',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьПрочиеКонтактныеЛица',
			text: '>',
			style: 'position:absolute;left:447px;top:171px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьПрочиеКонтактныеЛицаВсе',
			text: '>>',
			style: 'position:absolute;left:447px;top:193px;width:28px;height:17px;',
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
					title:'Организации',
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
						Ext.require(['Справочники.АдреснаяКнига.ФормаПодбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаПодбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
				{
					text:'Контрагенты (Контактные лица)',
				},
				{
					text:'Физические лица',
				},
				{
					text:'Прочие контактные лица',
				},
				{
					text:'Организации',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьОрганизации',
			text: '>',
			style: 'position:absolute;left:447px;top:171px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьОрганизацииВсе',
			text: '>>',
			style: 'position:absolute;left:447px;top:193px;width:28px;height:17px;',
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
					title:'Личные',
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
						Ext.require(['Справочники.АдреснаяКнига.ФормаПодбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаПодбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьЛичныеКонтакты',
			text: '>',
			style: 'position:absolute;left:447px;top:171px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьЛичныеКонтактыВсе',
			text: '>>',
			style: 'position:absolute;left:447px;top:193px;width:28px;height:17px;',
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
					title:'Пользователи',
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
						Ext.require(['Справочники.АдреснаяКнига.ФормаПодбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаПодбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьПользователи',
			text: '>',
			style: 'position:absolute;left:447px;top:171px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьПользователиВсе',
			text: '>>',
			style: 'position:absolute;left:447px;top:193px;width:28px;height:17px;',
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
					title:'Группы объектов',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьГруппыОбъектов',
			text: '>',
			style: 'position:absolute;left:447px;top:104px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьГруппыОбъектовВсе',
			text: '>>',
			style: 'position:absolute;left:447px;top:126px;width:28px;height:17px;',
		},
		{
			id: 'ГруппыРассылкиСписок',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:436px;height:178px;',
			height: 178,width: 436,
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
					width:'317',
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
						Ext.require(['Справочники.АдреснаяКнига.ФормаПодбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаПодбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:436px;height:24px;',
			items:
			[
				'-',
				{
					text:'',
				},
			]
		},
		{
			id: 'СоставГруппыРассылки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:212px;width:436px;height:146px;',
			height: 146,width: 436,
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
						Ext.require(['Справочники.АдреснаяКнига.ФормаПодбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаПодбораСобытия");
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
			xtype: 'button',
			name: 'КнопкаДобавитьЭлементГруппыОбъектов',
			text: '>',
			style: 'position:absolute;left:447px;top:264px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьЭлементГруппыОбъектовВсе',
			text: '>>',
			style: 'position:absolute;left:447px;top:286px;width:28px;height:17px;',
		},
					]
				},
				{
					title:'Поиск',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьПоиск',
			text: '>',
			style: 'position:absolute;left:447px;top:171px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьПоискВсе',
			text: '>>',
			style: 'position:absolute;left:447px;top:193px;width:28px;height:17px;',
		},
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
						Ext.require(['Справочники.АдреснаяКнига.ФормаПодбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаПодбораСобытия");
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
			items:
			[
				{
					text:'Изменить',
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
					text:'Конструктор настроек...',
				},
				{
					text:'',
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
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:495px;top:9px;width:276px;height:408px;',
			height: 408,width: 276,
			items:
			[
				{
					title:'Кому',
					items:
					[
		{
			id: 'Кому',
			xtype: 'grid',
			style: 'position:absolute;left:40px;top:30px;width:228px;height:352px;',
			height: 352,width: 228,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Объект',
					width:'197',
					dataIndex:'Объект',
					flex:1,
				},
				{
					text:'E-mail',
					width:'100',
					dataIndex:'АдресЭлектроннойПочты',
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
						name:'НомерСтроки',
					},
					{
						name:'Объект',
					},
					{
						name:'АдресЭлектроннойПочты',
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
						var грид = Ext.getCmp('Кому');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АдреснаяКнига.ФормаПодбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаПодбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:40px;top:6px;width:228px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьКому',
			text: '<',
			style: 'position:absolute;left:6px;top:160px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьКомуВсе',
			text: '<<',
			style: 'position:absolute;left:6px;top:182px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьВсе',
			text: '<<<',
			style: 'position:absolute;left:6px;top:204px;width:28px;height:17px;',
		},
					]
				},
				{
					title:'Копии',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:40px;top:6px;width:228px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
			]
		},
		{
			id: 'Копии',
			xtype: 'grid',
			style: 'position:absolute;left:40px;top:30px;width:228px;height:352px;',
			height: 352,width: 228,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Объект',
					width:'198',
					dataIndex:'Объект',
					flex:1,
				},
				{
					text:'E-mail',
					width:'100',
					dataIndex:'АдресЭлектроннойПочты',
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
						name:'НомерСтроки',
					},
					{
						name:'Объект',
					},
					{
						name:'АдресЭлектроннойПочты',
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
						var грид = Ext.getCmp('Копии');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АдреснаяКнига.ФормаПодбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаПодбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьКопии',
			text: '<',
			style: 'position:absolute;left:6px;top:160px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьКопииВсе',
			text: '<<',
			style: 'position:absolute;left:6px;top:182px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьВсе2',
			text: '<<<',
			style: 'position:absolute;left:6px;top:204px;width:28px;height:17px;',
		},
					]
				},
				{
					title:'Скрытые копии',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:40px;top:6px;width:228px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
			]
		},
		{
			id: 'СкрытыеКопии',
			xtype: 'grid',
			style: 'position:absolute;left:40px;top:30px;width:228px;height:352px;',
			height: 352,width: 228,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Объект',
					width:'197',
					dataIndex:'Объект',
					flex:1,
				},
				{
					text:'E-mail',
					width:'107',
					dataIndex:'АдресЭлектроннойПочты',
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
						name:'НомерСтроки',
					},
					{
						name:'Объект',
					},
					{
						name:'АдресЭлектроннойПочты',
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
						var грид = Ext.getCmp('СкрытыеКопии');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АдреснаяКнига.ФормаПодбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаПодбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьСкрытыеКопии',
			text: '<',
			style: 'position:absolute;left:6px;top:160px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьСкрытыеКопииВсе',
			text: '<<',
			style: 'position:absolute;left:6px;top:182px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьВсе3',
			text: '<<<',
			style: 'position:absolute;left:6px;top:204px;width:28px;height:17px;',
		},
					]
				},
				{
					title:'Объекты',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:40px;top:6px;width:228px;height:24px;',
			items:
			[
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
			]
		},
		{
			id: 'Объекты',
			xtype: 'grid',
			style: 'position:absolute;left:40px;top:30px;width:228px;height:352px;',
			height: 352,width: 228,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Объект',
					width:'196',
					dataIndex:'Объект',
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
						name:'НомерСтроки',
					},
					{
						name:'Объект',
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
						var грид = Ext.getCmp('Объекты');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.АдреснаяКнига.ФормаПодбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АдреснаяКнига.ФормаПодбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьОбъекты',
			text: '<',
			style: 'position:absolute;left:6px;top:171px;width:28px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьОбъектыВсе',
			text: '<<',
			style: 'position:absolute;left:6px;top:193px;width:28px;height:17px;',
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
			style: 'position:absolute;left:0px;top:425px;width:779px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});