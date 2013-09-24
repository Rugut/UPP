Ext.require(['Данные.Справочники.Номенклатура'], function () 
{
	Ext.define('Справочники.Номенклатура.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:733px;height:349px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Номенклатура',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:733px;height:25px;',
			width: 733,
			height: 25,
			items:
			[
				{
					text:'Выбрать',
					tooltip:'Выбрать значение',
					iconCls:'x-Select',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'Новая группа',
					tooltip:'',
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
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				'-',
				{
					text:'Иерархический просмотр',
					tooltip:'',
				},
				{
					text:'Переместить в группу',
					tooltip:'',
				},
				{
					text:'Уровень вверх',
					tooltip:'',
				},
				{
					text:'Уровень вниз',
					tooltip:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
					iconCls:'x-FilterByCurrentValue',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
				{
					text:'(Список отборов)',
					tooltip:'',
				},
				'-',
				{
					text:'(История отборов)',
					tooltip:'',
					iconCls:'x-FilterHistory',
				},
				'-',
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				{
					xtype: 'splitbutton',
					text:'Сортировка',
					menu: [
				{
					text:'(Поля сортировки)',
					tooltip:'',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
				{
					text:'Настройка списка...',
					tooltip:'Настройка списка',
					iconCls:'x-ListSettings',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
				'-',
				{
					text:'Номенклатура контрагента',
					tooltip:'Номенклатура контрагента',
				},
				{
					text:'Остатки товаров на складах',
					tooltip:'',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					text:'Новая группа',
					tooltip:'',
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
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				'-',
				{
					text:'Иерархический просмотр',
					tooltip:'',
				},
				{
					text:'Переместить в группу',
					tooltip:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
					iconCls:'x-FilterByCurrentValue',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
					menu: [
					]
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
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
					]
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
				'-',
				{
					text:'Поиск по штрихкоду',
					tooltip:'Поиск по штрихкоду',
				},
				'-',
				{
					text:'Изображение',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:717px;height:306px;',
			height: 306,width: 717,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:166px;top:25px;width:551px;height:130px;',
			height: 130,width: 551,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул ',
					width:'60',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Вид номенклатуры',
					width:'110',
					dataIndex:'ВидНоменклатуры.Представление',
					flex:1,
				},
				{
					text:'Базовая',
					width:'54',
					dataIndex:'БазоваяЕдиницаИзмерения.Представление',
					flex:1,
				},
				{
					text:'Единица',
					width:'54',
					dataIndex:'ЕдиницаХраненияОстатков.Представление',
					flex:1,
				},
				{
					text:'Ставка НДС',
					width:'80',
					dataIndex:'СтавкаНДС.Представление',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Код','Артикул','Наименование','ВидНоменклатуры.Представление','БазоваяЕдиницаИзмерения.Представление','ЕдиницаХраненияОстатков.Представление','СтавкаНДС.Представление',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Артикул',
					},
					{
						name:'Наименование',
					},
					{
						name:'ВидНоменклатуры',
					},
					{
						name:'БазоваяЕдиницаИзмерения',
					},
					{
						name:'ЕдиницаХраненияОстатков',
					},
					{
						name:'СтавкаНДС',
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
						var грид = Ext.getCmp('СправочникСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'СправочникДерево',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:25px;width:160px;height:130px;',
			height: 130,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'80',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('СправочникДерево');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:161px;width:160px;height:144px;',
			height: 144,width: 160,
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
		{
			xtype: 'panel',
			style: 'position:absolute;left:166px;top:161px;width:551px;height:144px;',
			height: 144,width: 551,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Остатки товаров на складах',
			style: 'position:absolute;left:0px;top:0px;width:551px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТабличноеПолеОстаткиТоваров',
			xtype: 'grid',
			style: 'position:absolute;left:152px;top:21px;width:399px;height:99px;',
			height: 99,width: 399,
			columns:
			[
				{
					text:'Характеристика/Склад',
					width:'151',
					dataIndex:'ХарактеристикаСклад',
					flex:1,
				},
				{
					text:'Ячейка склада',
					width:'87',
					dataIndex:'МестоХранения',
					flex:1,
				},
				{
					text:'Общий',
					width:'60',
					dataIndex:'Общий',
					flex:1,
				},
				{
					text:'Свободный',
					width:'71',
					dataIndex:'Свободный',
					flex:1,
				},
				{
					text:'Своб.ожид.',
					width:'67',
					dataIndex:'СвободныйОжидаемый',
					flex:1,
				},
				{
					text:'В резерве',
					width:'74',
					dataIndex:'ВРезерве',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','ХарактеристикаСклад','МестоХранения','Общий','Свободный','СвободныйОжидаемый','ВРезерве',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ХарактеристикаСклад',
					},
					{
						name:'МестоХранения',
					},
					{
						name:'Общий',
					},
					{
						name:'Свободный',
					},
					{
						name:'СвободныйОжидаемый',
					},
					{
						name:'ВРезерве',
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
						var грид = Ext.getCmp('ТабличноеПолеОстаткиТоваров');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'СписокЦенОстатков',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:147px;height:123px;',
			height: 123,width: 147,
			columns:
			[
				{
					text:'Типы цен',
					width:'132',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Ссылка',
					width:'81',
					dataIndex:'Ссылка',
					flex:1,
				},
				{
					text:'БазовыйТипЦен',
					width:'100',
					dataIndex:'БазовыйТипЦен',
					flex:1,
				},
				{
					text:'Рассчитывается',
					width:'100',
					dataIndex:'Рассчитывается',
					flex:1,
				},
				{
					text:'ОкруглятьВБольшуюСторону',
					width:'100',
					dataIndex:'ОкруглятьВБольшуюСторону',
					flex:1,
				},
				{
					text:'ПроцентСкидкиНаценки',
					width:'100',
					dataIndex:'ПроцентСкидкиНаценки',
					flex:1,
				},
				{
					text:'Префикс',
					width:'100',
					dataIndex:'Префикс',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','Наименование','Ссылка','БазовыйТипЦен','Рассчитывается','ОкруглятьВБольшуюСторону','ПроцентСкидкиНаценки','Префикс',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
					},
					{
						name:'Ссылка',
					},
					{
						name:'БазовыйТипЦен',
					},
					{
						name:'Рассчитывается',
					},
					{
						name:'ОкруглятьВБольшуюСторону',
					},
					{
						name:'ПроцентСкидкиНаценки',
					},
					{
						name:'Префикс',
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
						var грид = Ext.getCmp('СписокЦенОстатков');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВалютаЦены.Представление',
			width: 133,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:418px;top:125px;width:133px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаВыбораСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаВыбораСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Номенклатура.ФормаВыбораСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Номенклатура.ФормаВыбораСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаЦены',
			text: 'Валюта:',
			style: 'position:absolute;left:370px;top:125px;width:46px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипРасчета',
			text: 'Валюта цены:',
			style: 'position:absolute;left:154px;top:125px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:230px;top:125px;width:137px;height:19px;',
			width: 137,
			height: 19,
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеОтбораСпискаНоменклатуры',
			width: 489,
			height: 19,
			style: 'position:absolute;left:228px;top:0px;width:489px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:292px;top:64px;width:157px;height:24px;',
			width: 157,
			height: 24,
			items:
			[
				{
					text:'Пометить все типы цен',
					tooltip:'Пометить все типы цен',
				},
				{
					text:'Отменить пометку всех типов цен',
					tooltip:'',
				},
				{
					text:'Обновить',
					tooltip:'c4f29e0-d168-4fe0-8e64-e982fabf259',
					iconCls:'x-Refresh',
				},
				'-',
				{
					text:'&Переместить вверх',
					tooltip:'Переместить вверх',
				},
				{
					text:'Переместить вниз',
					tooltip:'Переместить вниз',
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:0px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			id: 'СписокНоменклатурыКонтрагента',
			xtype: 'grid',
			style: 'position:absolute;left:186px;top:0px;width:531px;height:305px;',
			height: 305,width: 531,
			columns:
			[
				{
					text:'',
					width:'28',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Артикул',
					width:'86',
					dataIndex:'АртикулНоменклатурыКонтрагента',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'242',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Наименование номенклатуры контрагента',
					width:'138',
					dataIndex:'НаименованиеНоменклатурыКонтрагента',
					flex:1,
				},
				{
					text:'Код номенклатуры контрагента',
					width:'156',
					dataIndex:'КодНоменклатурыКонтрагента',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Номенклатура").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','АртикулНоменклатурыКонтрагента','Номенклатура','НаименованиеНоменклатурыКонтрагента','КодНоменклатурыКонтрагента',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Номенклатура/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'АртикулНоменклатурыКонтрагента',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'НаименованиеНоменклатурыКонтрагента',
					},
					{
						name:'КодНоменклатурыКонтрагента',
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
						var грид = Ext.getCmp('СписокНоменклатурыКонтрагента');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Номенклатура.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Номенклатура.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:180px;height:305px;',
			height: 305,width: 180,
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
					]
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