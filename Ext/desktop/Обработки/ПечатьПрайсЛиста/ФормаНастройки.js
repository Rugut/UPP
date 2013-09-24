Ext.require(['Данные.Обработки.ПечатьПрайсЛиста'], function () 
{
	Ext.define('Обработки.ПечатьПрайсЛиста.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:624px;height:326px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка прайс-листа',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:8px;width:606px;height:284px;',
			height: 284,width: 606,
			items:
			[
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 377,
			height: 20,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:80px;top:6px;width:377px;height:20px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПечатьПрайсЛиста.ФормаНастройкиСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПечатьПрайсЛиста.ФормаНастройкиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПечатьПрайсЛиста.ФормаНастройкиСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПечатьПрайсЛиста.ФормаНастройкиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:6px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Валюта:',
			style: 'position:absolute;left:249px;top:50px;width:43px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Валюта.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:297px;top:50px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПечатьПрайсЛиста.ФормаНастройкиСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПечатьПрайсЛиста.ФормаНастройкиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПечатьПрайсЛиста.ФормаНастройкиСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПечатьПрайсЛиста.ФормаНастройкиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отсутствующие на складах предприятия',
			style: 'position:absolute;left:6px;top:115px;width:224px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По которым не заданы цены',
			style: 'position:absolute;left:6px;top:92px;width:167px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:524px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'На дату:',
			style: 'position:absolute;left:471px;top:6px;width:48px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			text: 'Не включать в прайс-лист товары',
			style: 'position:absolute;left:6px;top:73px;width:598px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Показать',
			style: 'position:absolute;left:6px;top:31px;width:598px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Параметры',
			style: 'position:absolute;left:6px;top:161px;width:598px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:6px;top:180px;width:205px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Цены которых не изменились с:',
			style: 'position:absolute;left:6px;top:138px;width:182px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаЦеныНеИзменились',
			width: 80,
			height: 19,
			style: 'position:absolute;left:193px;top:138px;width:80px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'В валютах цен',
			style: 'position:absolute;left:6px;top:50px;width:92px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'В выбранной валюте',
			style: 'position:absolute;left:119px;top:50px;width:124px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ИзмеренияСтроки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:598px;height:234px;',
			height: 234,width: 598,
			columns:
			[
				{
					text:'Группировки строк',
					width:'196',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Тип',
					width:'87',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПечатьПрайсЛиста/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.ПечатьПрайсЛиста.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПечатьПрайсЛиста.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:598px;height:24px;',
			width: 598,
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
			id: 'Отбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:598px;height:234px;',
			height: 234,width: 598,
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
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПечатьПрайсЛиста/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.ПечатьПрайсЛиста.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПечатьПрайсЛиста.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:598px;height:24px;',
			width: 598,
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
			id: 'ВыбранныеПоля',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:592px;height:234px;',
			height: 234,width: 592,
			columns:
			[
				{
					text:'Поле',
					width:'237',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПечатьПрайсЛиста/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.ПечатьПрайсЛиста.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПечатьПрайсЛиста.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:592px;height:24px;',
			width: 592,
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
			style: 'position:absolute;left:6px;top:24px;width:592px;height:234px;',
			height: 234,width: 592,
			columns:
			[
				{
					text:'Поле',
					width:'392',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Направление сортировки',
					width:'172',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПечатьПрайсЛиста/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.ПечатьПрайсЛиста.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПечатьПрайсЛиста.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:592px;height:24px;',
			width: 592,
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
			id: 'ТаблицаНастройкиПолейПечать',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:592px;height:210px;',
			height: 210,width: 592,
			columns:
			[
				{
					text:'Поле',
					width:'197',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Представление поля',
					width:'111',
					dataIndex:'Псевдоним',
					flex:1,
				},
				{
					text:'Печать',
					width:'40',
					dataIndex:'ВыводитьНаПечать',
					flex:1,
				},
				{
					text:'Положение',
					width:'210',
					dataIndex:'Положение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПечатьПрайсЛиста/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Поле',
					},
					{
						name:'Псевдоним',
					},
					{
						name:'ВыводитьНаПечать',
					},
					{
						name:'Положение',
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
						var грид = Ext.getCmp('ТаблицаНастройкиПолейПечать');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПечатьПрайсЛиста.ФормаНастройкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПечатьПрайсЛиста.ФормаНастройкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:592px;height:24px;',
			width: 592,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать иерархию групп',
			style: 'position:absolute;left:6px;top:239px;width:175px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать в отчете строку отбора',
			style: 'position:absolute;left:194px;top:239px;width:200px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:300px;width:624px;height:25px;',
			width: 624,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'Сохранить настройки и сформировать печатную форму прайс-листа',
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
		],
	}],
	dockedItems:
	[
	]
	});
});