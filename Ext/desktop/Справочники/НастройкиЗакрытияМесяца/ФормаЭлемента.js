Ext.require(['Данные.Справочники.НастройкиЗакрытияМесяца'], function () 
{
	Ext.define('Справочники.НастройкиЗакрытияМесяца.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:850px;height:587px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка закрытия месяца',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:850px;height:25px;',
			width: 850,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
					tooltip:'Найти в списке',
					iconCls:'x-FindInList',
				},
				'-',
				{
					text:'Перечитать',
					tooltip:'Перечитать данные объекта',
					iconCls:'x-Reread',
				},
				{
					text:'Скопировать',
					tooltip:'Создать новый копированием',
				},
				{
					text:'Документы регламентных операций',
					tooltip:'b87ad1b-d8cc-43c1-b5c4-dc43613c518',
				},
				{
					text:'Отчеты регламентных операций',
					tooltip:'b87ad1b-d8cc-43c1-b5c4-dc43613c518',
				},
				{
					text:'Переключить видимость справки формы',
					tooltip:'f5b2958-2b60-4b7b-9357-9683d512666',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:834px;height:521px;',
			height: 521,width: 834,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:2px;top:3px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 442,
			height: 19,
			style: 'position:absolute;left:93px;top:4px;width:442px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачалаДействияНастройки',
			text: 'Действует с:',
			style: 'position:absolute;left:2px;top:27px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаДействияНастройки',
			width: 120,
			height: 19,
			style: 'position:absolute;left:93px;top:28px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:294px;top:28px;width:73px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:372px;top:28px;width:73px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:450px;top:28px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражениеВУчетах',
			text: 'Отражать в:',
			style: 'position:absolute;left:223px;top:28px;width:66px;height:19px;text-align:left;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:55px;width:834px;height:464px;',
			height: 464,width: 834,
			items:
			[
				{
					items:
					[
		{
			id: 'РегламентныеОперации',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:820px;height:430px;',
			height: 430,width: 820,
			columns:
			[
				{
					text:'N',
					width:'27',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Регламентная операция',
					width:'173',
					dataIndex:'РегламентнаяОперация',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'100',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'УУ',
					width:'37',
					dataIndex:'ОтражатьВУправленческомУчете',
					flex:1,
				},
				{
					text:'БУ',
					width:'31',
					dataIndex:'ОтражатьВБухгалтерскомУчете',
					flex:1,
				},
				{
					text:'НУ',
					width:'31',
					dataIndex:'ОтражатьВНалоговомУчете',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НастройкиЗакрытияМесяца").data,
					fields: ['Ссылка','Родитель.Представление','НомерСтроки','РегламентнаяОперация','Ответственный','ОтражатьВУправленческомУчете','ОтражатьВБухгалтерскомУчете','ОтражатьВНалоговомУчете',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиЗакрытияМесяца/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'РегламентнаяОперация',
					},
					{
						name:'Ответственный',
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
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('РегламентныеОперации');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкиЗакрытияМесяца.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиЗакрытияМесяца.ФормаЭлементаСобытия");
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
			xtype: 'toolbar',
			style: 'position:absolute;left:20px;top:20px;width:229px;height:27px;',
			width: 229,
			height: 27,
			items:
			[
				{
					text:'Изменить ответственного',
					tooltip:'',
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
			style: 'position:absolute;left:26px;top:29px;width:229px;height:27px;',
			width: 229,
			height: 27,
			items:
			[
				{
					text:'Изменить ответственного',
					tooltip:'',
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
			style: 'position:absolute;left:526px;top:6px;width:300px;height:430px;',
			height: 430,width: 300,
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:286px;height:24px;',
			width: 286,
			height: 24,
			items:
			[
				{
					text:'Иерархический просмотр',
					tooltip:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
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
			]
		},
		{
			id: 'СписокПользователей',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:286px;height:374px;',
			height: 374,width: 286,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Пользователь',
					width:'100',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НастройкиЗакрытияМесяца").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиЗакрытияМесяца/ВыбратьПоСсылке/100', timeout: 200},
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
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('СписокПользователей');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкиЗакрытияМесяца.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиЗакрытияМесяца.ФормаЭлементаСобытия");
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
			id: 'СписокГруппыПользователей',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:286px;height:372px;',
			height: 372,width: 286,
			columns:
			[
				{
					text:'Группа пользователей',
					width:'205',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НастройкиЗакрытияМесяца").data,
					fields: ['Ссылка','Родитель.Представление','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиЗакрытияМесяца/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('СписокГруппыПользователей');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкиЗакрытияМесяца.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиЗакрытияМесяца.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:286px;height:24px;',
			width: 286,
			height: 24,
			items:
			[
				{
					text:'Иерархический просмотр',
					tooltip:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
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
			]
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'ПереместитьВлево',
			text: '<',
			style: 'position:absolute;left:498px;top:99px;width:21px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'ПереместитьВправо',
			text: '>',
			style: 'position:absolute;left:498px;top:124px;width:21px;height:17px;',
		},
		{
			id: 'ОтветственныеПоРегламентнымОперациям',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:487px;height:430px;',
			height: 430,width: 487,
			columns:
			[
				{
					text:'Регламентная операция',
					width:'173',
					dataIndex:'РегламентнаяОперация',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'100',
					dataIndex:'Ответственный',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НастройкиЗакрытияМесяца").data,
					fields: ['Ссылка','Родитель.Представление','РегламентнаяОперация','Ответственный',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиЗакрытияМесяца/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'РегламентнаяОперация',
					},
					{
						name:'Ответственный',
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
						var грид = Ext.getCmp('ОтветственныеПоРегламентнымОперациям');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкиЗакрытияМесяца.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиЗакрытияМесяца.ФормаЭлементаСобытия");
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
			id: 'СпособыРаспределения',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:820px;height:408px;',
			height: 408,width: 820,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Характер затрат',
					width:'125',
					dataIndex:'ХарактерЗатрат',
					flex:1,
				},
				{
					text:'Вид подразделения',
					width:'139',
					dataIndex:'ВидПодразделения',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'140',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'126',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'100',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Способ распределения',
					width:'136',
					dataIndex:'СпособРаспределения',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НастройкиЗакрытияМесяца").data,
					fields: ['Ссылка','Родитель.Представление','НомерСтроки','ХарактерЗатрат','ВидПодразделения','Подразделение','СтатьяЗатрат','НоменклатурнаяГруппа','СпособРаспределения',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиЗакрытияМесяца/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ХарактерЗатрат',
					},
					{
						name:'ВидПодразделения',
					},
					{
						name:'Подразделение',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'НоменклатурнаяГруппа',
					},
					{
						name:'СпособРаспределения',
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
						var грид = Ext.getCmp('СпособыРаспределения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкиЗакрытияМесяца.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиЗакрытияМесяца.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:820px;height:24px;',
			width: 820,
			height: 24,
			items:
			[
				'-',
				{
					text:'Проверить',
					tooltip:'Проверить настройку распределение затрат',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВариант',
			text: 'Вариант:',
			style: 'position:absolute;left:545px;top:3px;width:49px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:598px;top:4px;width:236px;height:19px;',
			width: 236,
			height: 19,
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
			style: 'position:absolute;left:0px;top:562px;width:850px;height:25px;',
			width: 850,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});