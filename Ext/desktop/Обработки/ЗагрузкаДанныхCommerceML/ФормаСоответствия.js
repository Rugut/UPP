Ext.require(['Данные.Обработки.ЗагрузкаДанныхCommerceML'], function () 
{
	Ext.define('Обработки.ЗагрузкаДанныхCommerceML.ФормаСоответствия',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:664px;height:425px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Сопоставление объектов из файла и информационной базы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:67px;width:648px;height:326px;',
			height: 326,width: 648,
			items:
			[
				{
					items:
					[
		{
			id: 'СоответствияВалют',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:634px;height:268px;',
			height: 268,width: 634,
			columns:
			[
				{
					text:'',
					width:'35',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Валюта из файла',
					width:'205',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Валюта',
					width:'193',
					dataIndex:'НовыйВалюта',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Валюта',
					},
					{
						name:'НовыйВалюта',
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
						var грид = Ext.getCmp('СоответствияВалют');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗагрузкаДанныхCommerceML.ФормаСоответствияСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаДанныхCommerceML.ФормаСоответствияСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			width: 634,
			height: 24,
			items:
			[
				{
					text:'Сортировать по возрастанию',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'',
				},
				'-',
				{
					text:'Показать несопоставленные',
					tooltip:'Показать только несопоставленные объекты файла и информационной базы',
				},
				'-',
				{
					text:'Создать по данным из файла',
					tooltip:'Создать валюту по данным из файла',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'СоответствияОрганизаций',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:34px;width:634px;height:266px;',
			height: 266,width: 634,
			columns:
			[
				{
					text:'',
					width:'35',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Организация из файла',
					width:'156',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'ИНН организации из файла',
					width:'132',
					dataIndex:'ИНН',
					flex:1,
				},
				{
					text:'Организация',
					width:'211',
					dataIndex:'НовыйОрганизация',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Организация',
					},
					{
						name:'ИНН',
					},
					{
						name:'НовыйОрганизация',
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
						var грид = Ext.getCmp('СоответствияОрганизаций');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗагрузкаДанныхCommerceML.ФормаСоответствияСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаДанныхCommerceML.ФормаСоответствияСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			width: 634,
			height: 24,
			items:
			[
				{
					text:'Сортировать по возрастанию',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'',
				},
				'-',
				{
					text:'Показать несопоставленные',
					tooltip:'Показать только несопоставленные объекты файла и информационной базы',
				},
				'-',
				{
					text:'Создать по данным из файла',
					tooltip:'Создать организацию по данным из файла',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'СоответствияКонтрагентов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:634px;height:268px;',
			height: 268,width: 634,
			columns:
			[
				{
					text:'',
					width:'35',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Контрагент из файла',
					width:'155',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'ИНН контрагента из файла',
					width:'127',
					dataIndex:'ИНН',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'188',
					dataIndex:'НовыйКонтрагент',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ИНН',
					},
					{
						name:'НовыйКонтрагент',
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
						var грид = Ext.getCmp('СоответствияКонтрагентов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗагрузкаДанныхCommerceML.ФормаСоответствияСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаДанныхCommerceML.ФормаСоответствияСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			width: 634,
			height: 24,
			items:
			[
				{
					text:'Сортировать по возрастанию',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'',
				},
				'-',
				{
					text:'Показать несопоставленные',
					tooltip:'Показать только несопоставленные объекты файла и информационной базы',
				},
				'-',
				{
					text:'Создать по данным из файла',
					tooltip:'Создать контрагента по данным из файла',
				},
				{
					text:'Создать все',
					tooltip:'Создать контрагентов по всем данным из файла',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'СоответствияБанков',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:34px;width:634px;height:266px;',
			height: 266,width: 634,
			columns:
			[
				{
					text:'',
					width:'35',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Наименование из файла',
					width:'180',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'БИК из файла',
					width:'120',
					dataIndex:'Банк',
					flex:1,
				},
				{
					text:'Счет корреспондентский',
					width:'140',
					dataIndex:'СчетКорреспондентский',
					flex:1,
				},
				{
					text:'Адрес',
					width:'100',
					dataIndex:'Адрес',
					flex:1,
				},
				{
					text:'Банк',
					width:'180',
					dataIndex:'НовыйБанк',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Наименование',
					},
					{
						name:'Банк',
					},
					{
						name:'СчетКорреспондентский',
					},
					{
						name:'Адрес',
					},
					{
						name:'НовыйБанк',
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
						var грид = Ext.getCmp('СоответствияБанков');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗагрузкаДанныхCommerceML.ФормаСоответствияСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаДанныхCommerceML.ФормаСоответствияСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			width: 634,
			height: 24,
			items:
			[
				{
					text:'Сортировать по возрастанию',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'',
				},
				'-',
				{
					text:'Показать несопоставленные',
					tooltip:'Показать только несопоставленные объекты файла и информационной базы',
				},
				'-',
				{
					text:'Создать по данным из файла',
					tooltip:'Создать банк по данным из файла',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'СоответствияБанковскихСчетов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:34px;width:634px;height:266px;',
			height: 266,width: 634,
			columns:
			[
				{
					text:'',
					width:'35',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номер счета в файле',
					width:'172',
					dataIndex:'НомерСчета',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'120',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Банк',
					width:'100',
					dataIndex:'Банк',
					flex:1,
				},
				{
					text:'Банк не прямых расходов',
					width:'100',
					dataIndex:'БанкНеПрямыхРасходов',
					flex:1,
				},
				{
					text:'Счет',
					width:'192',
					dataIndex:'НовыйНомерСчета',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'НомерСчета',
					},
					{
						name:'Контрагент',
					},
					{
						name:'Банк',
					},
					{
						name:'БанкНеПрямыхРасходов',
					},
					{
						name:'НовыйНомерСчета',
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
						var грид = Ext.getCmp('СоответствияБанковскихСчетов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗагрузкаДанныхCommerceML.ФормаСоответствияСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаДанныхCommerceML.ФормаСоответствияСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			width: 634,
			height: 24,
			items:
			[
				{
					text:'Сортировать по возрастанию',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'',
				},
				'-',
				{
					text:'Показать несопоставленные',
					tooltip:'Показать только несопоставленные объекты файла и информационной базы',
				},
				'-',
				{
					text:'Создать по данным из файла',
					tooltip:'Создать банковский счет по данным из файла',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'СоответствияЕдиницИзмерения',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:634px;height:268px;',
			height: 268,width: 634,
			columns:
			[
				{
					text:'',
					width:'35',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Единица измерения из файла',
					width:'184',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Единица измерения',
					width:'175',
					dataIndex:'НовыйЕдиницаИзмерения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'НовыйЕдиницаИзмерения',
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
						var грид = Ext.getCmp('СоответствияЕдиницИзмерения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗагрузкаДанныхCommerceML.ФормаСоответствияСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаДанныхCommerceML.ФормаСоответствияСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			width: 634,
			height: 24,
			items:
			[
				{
					text:'Сортировать по возрастанию',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'',
				},
				'-',
				{
					text:'Показать несопоставленные',
					tooltip:'Показать только несопоставленные объекты файла и информационной базы',
				},
				'-',
				{
					text:'Создать по данным из файла',
					tooltip:'Создать единицу измерения по данным из файла',
				},
				{
					text:'Создать все',
					tooltip:'Создать единицы измерения по всем данным из файла',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'СоответствиеВидовНоменклатуры',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:34px;width:634px;height:270px;',
			height: 270,width: 634,
			columns:
			[
				{
					text:'',
					width:'35',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид номенклатуры из файла',
					width:'150',
					dataIndex:'ВидНоменклатуры',
					flex:1,
				},
				{
					text:'Тип номенклатуры из файла',
					width:'150',
					dataIndex:'ТипНоменклатуры',
					flex:1,
				},
				{
					text:'Вид номенклатуры',
					width:'200',
					dataIndex:'НовыйВидНоменклатуры',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидНоменклатуры',
					},
					{
						name:'ТипНоменклатуры',
					},
					{
						name:'НовыйВидНоменклатуры',
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
						var грид = Ext.getCmp('СоответствиеВидовНоменклатуры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗагрузкаДанныхCommerceML.ФормаСоответствияСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаДанныхCommerceML.ФормаСоответствияСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			width: 634,
			height: 24,
			items:
			[
				{
					text:'Сортировать по возрастанию',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'',
				},
				'-',
				{
					text:'Показать несопоставленные',
					tooltip:'Показать только несопоставленные объекты файла и информационной базы',
				},
				'-',
				{
					text:'Создать по данным из файла',
					tooltip:'Создать вид номенклатуры по данным из файла',
				},
				{
					text:'Создать все',
					tooltip:'Создать виды номенкалтур по всем данным из файла',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			width: 634,
			height: 24,
			items:
			[
				{
					text:'Сортировать по возрастанию',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'',
				},
				'-',
				{
					text:'Показать несопоставленные',
					tooltip:'Показать только несопоставленные объекты файла и информационной базы',
				},
				'-',
				{
					text:'Создать по данным из файла',
					tooltip:'Создать номенклатуру по данным из файла',
				},
				{
					text:'Создать все',
					tooltip:'Создать номенклатуру по всем данным из файла',
				},
			]
		},
		{
			id: 'СоответствияТоваров',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:634px;height:272px;',
			height: 272,width: 634,
			columns:
			[
				{
					text:'',
					width:'35',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатура из файла',
					width:'128',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Артикул из файла',
					width:'73',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Штрихкод из файла',
					width:'83',
					dataIndex:'ШтрихКод',
					flex:1,
				},
				{
					text:'Единица из файла',
					width:'51',
					dataIndex:'БазоваяЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Вид номенклатуры',
					width:'59',
					dataIndex:'ВидНоменклатуры',
					flex:1,
				},
				{
					text:'Ид',
					width:'115',
					dataIndex:'Ид',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'303',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'303',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Ид каталога',
					width:'100',
					dataIndex:'ИдКаталога',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Наименование',
					},
					{
						name:'Артикул',
					},
					{
						name:'ШтрихКод',
					},
					{
						name:'БазоваяЕдиницаИзмерения',
					},
					{
						name:'ВидНоменклатуры',
					},
					{
						name:'Ид',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'ИдКаталога',
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
						var грид = Ext.getCmp('СоответствияТоваров');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗагрузкаДанныхCommerceML.ФормаСоответствияСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаДанныхCommerceML.ФормаСоответствияСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			id: 'СоответствияКачества',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:634px;height:269px;',
			height: 269,width: 634,
			columns:
			[
				{
					text:'',
					width:'35',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Качество из файла',
					width:'231',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Качество',
					width:'236',
					dataIndex:'НовыйКачество',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Качество',
					},
					{
						name:'НовыйКачество',
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
						var грид = Ext.getCmp('СоответствияКачества');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗагрузкаДанныхCommerceML.ФормаСоответствияСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаДанныхCommerceML.ФормаСоответствияСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			width: 634,
			height: 24,
			items:
			[
				{
					text:'Сортировать по возрастанию',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'',
				},
				'-',
				{
					text:'Показать несопоставленные',
					tooltip:'Показать только несопоставленные объекты файла и информационной базы',
				},
				'-',
				{
					text:'Создать по данным из файла',
					tooltip:'Создать качество по данным из файла',
				},
				{
					text:'Создать все',
					tooltip:'Создать качество по всем данным из файла',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'СоответствияТиповЦен',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:634px;height:268px;',
			height: 268,width: 634,
			columns:
			[
				{
					text:'',
					width:'35',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Тип цены из файла',
					width:'149',
					dataIndex:'ТипЦены',
					flex:1,
				},
				{
					text:'Ид из файла',
					width:'90',
					dataIndex:'Ид',
					flex:1,
				},
				{
					text:'Валюта цены из файла',
					width:'96',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'НДС в сумме',
					width:'37',
					dataIndex:'НДСВСумме',
					flex:1,
				},
				{
					text:'Контрагент из файла',
					width:'189',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Тип цены',
					width:'158',
					dataIndex:'НовыйТипЦены',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗагрузкаДанныхCommerceML/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ТипЦены',
					},
					{
						name:'Ид',
					},
					{
						name:'Валюта',
					},
					{
						name:'НДСВСумме',
					},
					{
						name:'Контрагент',
					},
					{
						name:'НовыйТипЦены',
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
						var грид = Ext.getCmp('СоответствияТиповЦен');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЗагрузкаДанныхCommerceML.ФормаСоответствияСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗагрузкаДанныхCommerceML.ФормаСоответствияСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
			width: 634,
			height: 24,
			items:
			[
				{
					text:'Сортировать по возрастанию',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'Сортировать по убыванию',
					tooltip:'',
				},
				'-',
				{
					text:'Показать несопоставленные',
					tooltip:'Показать только несопоставленные объекты файла и информационной базы',
				},
				'-',
				{
					text:'Создать по данным из файла',
					tooltip:'Создать тип цен по данным из файла',
				},
				{
					text:'Создать все',
					tooltip:'Создать типы цен по всем данным из файла',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:6px;width:648px;height:60px;',
			height: 60,width: 648,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
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
			style: 'position:absolute;left:0px;top:400px;width:664px;height:25px;',
			width: 664,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Помощь',
					tooltip:'Помощь',
				},
				'-',
				{
					text:'Применить соответствия',
					tooltip:'Применить соответствия объектов из файла и информационной базы',
				},
				'-',
				{
					text:'ОК',
					tooltip:'Применить указанные соответствия и закрыть форму',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});