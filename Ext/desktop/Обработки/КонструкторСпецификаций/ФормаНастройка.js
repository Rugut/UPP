Ext.define('Обработки.КонструкторСпецификаций.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:490px;height:359px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:315px;',
			height: 315,width: 474,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			id: 'СписокПоказателей',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:124px;width:460px;height:165px;',
			height: 165,width: 460,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:100px;width:280px;height:24px;',
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Установить все',
				},
				{
					text:'Снять все',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать измерения',
			style: 'position:absolute;left:14px;top:46px;width:160px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить итоги по всем уровням',
			style: 'position:absolute;left:14px;top:65px;width:196px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить в разных колонках',
			style: 'position:absolute;left:290px;top:105px;width:176px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Показатели',
			style: 'position:absolute;left:6px;top:84px;width:460px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Параметры',
			style: 'position:absolute;left:6px;top:6px;width:460px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:14px;top:22px;width:452px;height:20px;',
			height: 20,width: 452,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
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
					]
				},
				{
					title:'Группировки',
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
					width:'1200',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
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
					width:'1200',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:227px;top:117px;width:24px;height:62px;',
			items:
			[
				{
					text:' >',
				},
				{
					text:' <',
				},
			]
		},
					]
				},
				{
					title:'Интервалы группировок',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Наименование:',
			style: 'position:absolute;left:6px;top:6px;width:86px;height:19px;text-align:left;',
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
					width:'1200',
					dataIndex:'ВГраница',
					flex:1,
				},
				{
					text:'Название',
					width:'1200',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:97px;top:6px;width:369px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
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
					width:'1200',
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
					width:'2400',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'1200',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'1200',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Поля',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Сортировка',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:334px;width:490px;height:25px;',
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
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
});