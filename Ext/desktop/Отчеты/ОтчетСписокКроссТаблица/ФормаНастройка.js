Ext.require(['Данные.Отчеты.ОтчетСписокКроссТаблица'], function () 
{
	Ext.define('Отчеты.ОтчетСписокКроссТаблица.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:490px;height:359px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: '',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:315px;',
			height: 315,width: 474,
			items:
			[
				{
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:84px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:184px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:270px;top:8px;width:19px;height:19px;',
		},
		{
			id: 'СписокПоказателей',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:183px;width:460px;height:106px;',
			height: 106,width: 460,
			columns:
			[
				{
					text:'',
					width:'23',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Показатель',
					width:'177',
					dataIndex:'Представление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетСписокКроссТаблица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Представление',
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
						var грид = Ext.getCmp('СписокПоказателей');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОтчетСписокКроссТаблица.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтчетСписокКроссТаблица.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:159px;width:280px;height:24px;',
			width: 280,
			height: 24,
			items:
			[
				{
					text:'&Переместить вверх',
					tooltip:'',
				},
				{
					text:'&Переместить вниз',
					tooltip:'',
				},
				{
					text:'Установить все',
					tooltip:'',
				},
				{
					text:'Снять все',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать измерения',
			style: 'position:absolute;left:14px;top:100px;width:160px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить итоги по всем уровням',
			style: 'position:absolute;left:14px;top:120px;width:196px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить в разных колонках',
			style: 'position:absolute;left:290px;top:164px;width:176px;height:15px;',
		},
		{
			xtype: 'label',
			text: 'Показатели',
			style: 'position:absolute;left:6px;top:143px;width:460px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:32px;width:460px;height:24px;',
			height: 24,width: 460,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:78px;top:0px;width:382px;height:19px;',
			width: 382,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьИмяРегистра',
			text: 'Раздел учета:',
			style: 'position:absolute;left:0px;top:0px;width:76px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			text: 'Параметры',
			style: 'position:absolute;left:6px;top:59px;width:460px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:14px;top:75px;width:452px;height:20px;',
			height: 20,width: 452,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:0px;top:5px;width:212px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Период',
			text: 'Период',
			style: 'position:absolute;left:102px;top:8px;width:115px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'ПлюсПериод',
			text: '+',
			style: 'position:absolute;left:216px;top:8px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'МинусПериод',
			text: '-',
			style: 'position:absolute;left:84px;top:8px;width:19px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'ИзмеренияСтроки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:212px;height:265px;',
			height: 265,width: 212,
			columns:
			[
				{
					text:'Группировки строк',
					width:'120',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Тип',
					width:'80',
					dataIndex:'Тип',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетСписокКроссТаблица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Поле',
					},
					{
						name:'Тип',
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
						var грид = Ext.getCmp('ИзмеренияСтроки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОтчетСписокКроссТаблица.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтчетСписокКроссТаблица.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:212px;height:24px;',
			width: 212,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:258px;top:0px;width:208px;height:24px;',
			width: 208,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'ИзмеренияКолонки',
			xtype: 'grid',
			style: 'position:absolute;left:258px;top:24px;width:208px;height:265px;',
			height: 265,width: 208,
			columns:
			[
				{
					text:'Группировки колонок',
					width:'120',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Тип',
					width:'80',
					dataIndex:'Тип',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетСписокКроссТаблица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Поле',
					},
					{
						name:'Тип',
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
						var грид = Ext.getCmp('ИзмеренияКолонки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОтчетСписокКроссТаблица.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтчетСписокКроссТаблица.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:227px;top:117px;width:24px;height:62px;',
			width: 24,
			height: 62,
			items:
			[
				{
					text:' >',
					tooltip:'',
				},
				{
					text:' <',
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
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:8px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Наименование:',
			style: 'position:absolute;left:6px;top:6px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:32px;width:460px;height:24px;',
			width: 460,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'&Скопировать',
					tooltip:'',
				},
				{
					text:'&Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'Закончить редактирование',
					tooltip:'',
				},
			]
		},
		{
			id: 'ОтобранныеИнтервалы',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:56px;width:460px;height:233px;',
			height: 233,width: 460,
			columns:
			[
				{
					text:'Граница интервала',
					width:'120',
					dataIndex:'ВГраница',
					flex:1,
				},
				{
					text:'Название',
					width:'120',
					dataIndex:'Название',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетСписокКроссТаблица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ВГраница',
					},
					{
						name:'Название',
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
						var грид = Ext.getCmp('ОтобранныеИнтервалы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОтчетСписокКроссТаблица.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтчетСписокКроссТаблица.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:97px;top:6px;width:369px;height:19px;',
			width: 369,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:164px;top:8px;width:20px;height:19px;text-align:center;',
		},
		{
			id: 'Отбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:265px;',
			height: 265,width: 460,
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
					width:'120',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'80',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'240',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'120',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'120',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетСписокКроссТаблица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
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
						var грид = Ext.getCmp('Отбор');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОтчетСписокКроссТаблица.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтчетСписокКроссТаблица.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			width: 460,
			height: 24,
			items:
			[
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить дополнительные поля в отдельной колонке',
			style: 'position:absolute;left:6px;top:6px;width:300px;height:15px;',
		},
		{
			id: 'ВыбранныеПоля',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:50px;width:460px;height:239px;',
			height: 239,width: 460,
			columns:
			[
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетСписокКроссТаблица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ВыбранныеПоля');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОтчетСписокКроссТаблица.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтчетСписокКроссТаблица.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:26px;width:460px;height:24px;',
			width: 460,
			height: 24,
			items:
			[
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'Порядок',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:265px;',
			height: 265,width: 460,
			columns:
			[
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Направление сортировки',
					width:'60',
					dataIndex:'НаправлениеСортировки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетСписокКроссТаблица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Имя',
					},
					{
						name:'НаправлениеСортировки',
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
						var грид = Ext.getCmp('Порядок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОтчетСписокКроссТаблица.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтчетСписокКроссТаблица.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			width: 460,
			height: 24,
			items:
			[
			]
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
			style: 'position:absolute;left:0px;top:334px;width:490px;height:25px;',
			width: 490,
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