Ext.require(['Данные.Обработки.ПечатьРаскладкиНоменклатурыПоМестамХранения'], function () 
{
	Ext.define('Обработки.ПечатьРаскладкиНоменклатурыПоМестамХранения.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Печать раскладки номенклатуры по местам хранения',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			width: 780,
			height: 25,
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			id: 'Группировки',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:97px;width:379px;height:72px;',
			height: 72,width: 379,
			columns:
			[
				{
					text:'Поле',
					width:'196',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Тип',
					width:'139',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПечатьРаскладкиНоменклатурыПоМестамХранения/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('Группировки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПечатьРаскладкиНоменклатурыПоМестамХранения.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПечатьРаскладкиНоменклатурыПоМестамХранения.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСписокДокументов',
			text: 'Документ:',
			style: 'position:absolute;left:8px;top:33px;width:55px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Документ.Представление',
			width: 176,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:211px;top:33px;width:176px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПечатьРаскладкиНоменклатурыПоМестамХранения.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПечатьРаскладкиНоменклатурыПоМестамХранения.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПечатьРаскладкиНоменклатурыПоМестамХранения.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПечатьРаскладкиНоменклатурыПоМестамХранения.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Группировки',
			style: 'position:absolute;left:8px;top:57px;width:379px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Поля',
			style: 'position:absolute;left:8px;top:179px;width:378px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'Поля',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:219px;width:379px;height:96px;',
			height: 96,width: 379,
			columns:
			[
				{
					text:'Поле',
					width:'224',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПечатьРаскладкиНоменклатурыПоМестамХранения/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('Поля');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПечатьРаскладкиНоменклатурыПоМестамХранения.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПечатьРаскладкиНоменклатурыПоМестамХранения.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Сортировка',
			style: 'position:absolute;left:393px;top:57px;width:379px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'Сортировка',
			xtype: 'grid',
			style: 'position:absolute;left:393px;top:97px;width:379px;height:72px;',
			height: 72,width: 379,
			columns:
			[
				{
					text:'Поле',
					width:'224',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Направление сортировки',
					width:'140',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПечатьРаскладкиНоменклатурыПоМестамХранения/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('Сортировка');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПечатьРаскладкиНоменклатурыПоМестамХранения.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПечатьРаскладкиНоменклатурыПоМестамХранения.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:66px;top:33px;width:140px;height:19px;',
			width: 140,
			height: 19,
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:195px;width:379px;height:24px;',
			width: 379,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:393px;top:72px;width:379px;height:24px;',
			width: 379,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:73px;width:379px;height:24px;',
			width: 379,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'label',
			text: 'Печать',
			style: 'position:absolute;left:393px;top:179px;width:379px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:393px;top:195px;width:379px;height:24px;',
			width: 379,
			height: 24,
			items:
			[
				{
					text:'',
				},
			]
		},
		{
			id: 'ТаблицаНастройкиПолейПечать',
			xtype: 'grid',
			style: 'position:absolute;left:393px;top:219px;width:379px;height:96px;',
			height: 96,width: 379,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'ВыводитьНаПечать',
					flex:1,
				},
				{
					text:'Поле',
					width:'112',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Представление поля',
					width:'112',
					dataIndex:'Псевдоним',
					flex:1,
				},
				{
					text:'Положение',
					width:'64',
					dataIndex:'Положение',
					flex:1,
				},
				{
					text:'Ширина',
					width:'52',
					dataIndex:'Ширина',
					flex:1,
				},
				{
					text:'Выравнивание',
					width:'93',
					dataIndex:'Выравнивание',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПечатьРаскладкиНоменклатурыПоМестамХранения/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ВыводитьНаПечать',
					},
					{
						name:'Поле',
					},
					{
						name:'Псевдоним',
					},
					{
						name:'Положение',
					},
					{
						name:'Ширина',
					},
					{
						name:'Выравнивание',
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
						Ext.require(['Справочники.ПечатьРаскладкиНоменклатурыПоМестамХранения.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПечатьРаскладкиНоменклатурыПоМестамХранения.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСписокСкладов',
			text: 'Дополнительные склады:',
			style: 'position:absolute;left:393px;top:33px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СписокСкладов.Представление',
			width: 242,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:530px;top:33px;width:242px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПечатьРаскладкиНоменклатурыПоМестамХранения.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПечатьРаскладкиНоменклатурыПоМестамХранения.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПечатьРаскладкиНоменклатурыПоМестамХранения.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПечатьРаскладкиНоменклатурыПоМестамХранения.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить заголовок',
			style: 'position:absolute;left:567px;top:362px;width:124px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать форму настройки при печати документов',
			style: 'position:absolute;left:397px;top:385px;width:294px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Рамка',
			style: 'position:absolute;left:393px;top:322px;width:379px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства',
			style: 'position:absolute;left:397px;top:362px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоУровнейМестХранения',
			text: 'Количество уровней мест хранения:',
			style: 'position:absolute;left:397px;top:338px;width:186px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоУровнейМестХранения',
			style: 'position:absolute;left:587px;top:338px;width:104px;height:19px;',
			width: 104,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Рамка',
			style: 'position:absolute;left:8px;top:322px;width:379px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:338px;width:379px;height:24px;',
			width: 379,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'ПредставленияПриоритетовМестХранения',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:362px;width:379px;height:55px;',
			height: 55,width: 379,
			columns:
			[
				{
					text:'Приоритет',
					width:'61',
					dataIndex:'Приоритет',
					flex:1,
				},
				{
					text:'Представление',
					width:'235',
					dataIndex:'Псевдоним',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПечатьРаскладкиНоменклатурыПоМестамХранения/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Приоритет',
					},
					{
						name:'Псевдоним',
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
						var грид = Ext.getCmp('ПредставленияПриоритетовМестХранения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПечатьРаскладкиНоменклатурыПоМестамХранения.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПечатьРаскладкиНоменклатурыПоМестамХранения.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:780px;height:25px;',
			width: 780,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});