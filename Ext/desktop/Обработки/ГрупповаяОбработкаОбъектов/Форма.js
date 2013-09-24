Ext.require(['Данные.Обработки.ГрупповаяОбработкаОбъектов'], function () 
{
	Ext.define('Обработки.ГрупповаяОбработкаОбъектов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:328px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Групповая обработка объектов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			width: 500,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:32px;width:484px;height:264px;',
			height: 264,width: 484,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОписаниеТипаОбъектов',
			text: 'Тип объектов:',
			style: 'position:absolute;left:8px;top:8px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ОписаниеТипаОбъектов.Представление',
			width: 386,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:88px;top:8px;width:386px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ГрупповаяОбработкаОбъектов.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ГрупповаяОбработкаОбъектов.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ГрупповаяОбработкаОбъектов.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ГрупповаяОбработкаОбъектов.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выполнять обработку в одной транзакции',
			style: 'position:absolute;left:88px;top:32px;width:386px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Снимать пометку с обработанных объектов',
			style: 'position:absolute;left:88px;top:56px;width:386px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить сообщения об обработанных объектах',
			style: 'position:absolute;left:88px;top:80px;width:386px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:466px;height:24px;',
			width: 466,
			height: 24,
			items:
			[
				'-',
				{
					text:'Установить все пометки',
					tooltip:'Установить все пометки',
				},
				{
					text:'Снять все пометки',
					tooltip:'Снять все пометки',
				},
				{
					text:'Инвертировать пометки',
					tooltip:'Инвертировать пометки',
				},
				'-',
				{
					text:'Подбор',
					tooltip:'Подбор объектов',
				},
			]
		},
		{
			id: 'ОбрабатываемыеОбъекты',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:466px;height:176px;',
			height: 176,width: 466,
			columns:
			[
				{
					text:'№',
					width:'30',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Объект',
					width:'400',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрупповаяОбработкаОбъектов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Пометка',
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
						var грид = Ext.getCmp('ОбрабатываемыеОбъекты');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ГрупповаяОбработкаОбъектов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ГрупповаяОбработкаОбъектов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Обрабатывать элементы выбранных групп',
			style: 'position:absolute;left:8px;top:220px;width:252px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:466px;height:24px;',
			width: 466,
			height: 24,
			items:
			[
				'-',
				{
					text:'Установить все пометки',
					tooltip:'Установить все пометки',
				},
				{
					text:'Снять все пометки',
					tooltip:'Снять все пометки',
				},
				{
					text:'Инвертировать пометки',
					tooltip:'Инвертировать пометки',
				},
			]
		},
		{
			id: 'УстанавливаемыеСвойства',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:466px;height:204px;',
			height: 204,width: 466,
			columns:
			[
				{
					text:'№',
					width:'30',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Свойство',
					width:'200',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'',
					width:'20',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Значение',
					width:'200',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрупповаяОбработкаОбъектов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Свойство',
					},
					{
						name:'Пометка',
					},
					{
						name:'Значение',
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
						var грид = Ext.getCmp('УстанавливаемыеСвойства');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ГрупповаяОбработкаОбъектов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ГрупповаяОбработкаОбъектов.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
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
			style: 'position:absolute;left:0px;top:303px;width:500px;height:25px;',
			width: 500,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
					tooltip:'Кнопка выполнить нажатие',
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