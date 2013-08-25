Ext.require(['Данные.Документы.ВводНачальныхОстатковУСН'], function () 
{
	Ext.define('Документы.ВводНачальныхОстатковУСН.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:681px;height:453px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Ввод начальных остатков УСН',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:84px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:169px;top:33px;width:15px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:189px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Организация.Представление',
			width: 225,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:84px;top:57px;width:225px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВводНачальныхОстатковУСН.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВводНачальныхОстатковУСН.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВводНачальныхОстатковУСН.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВводНачальныхОстатковУСН.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:681px;height:25px;',
			width: 681,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:86px;width:665px;height:286px;',
			height: 286,width: 665,
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:651px;height:254px;',
			height: 254,width: 651,
			items:
			[
				{
					items:
					[
		{
			id: 'ВзаиморасчетыСПоставщиками',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид задолженности',
					width:'100',
					dataIndex:'ВидЗадолженности',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'128',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'132',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'100',
					dataIndex:'Сделка',
					flex:1,
				},
				{
					text:'Документ расчетов',
					width:'183',
					dataIndex:'РасчетныйДокумент',
					flex:1,
				},
				{
					text:'Сумма взаиморасчетов',
					width:'89',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидЗадолженности',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'Сделка',
					},
					{
						name:'РасчетныйДокумент',
					},
					{
						name:'СуммаВзаиморасчетов',
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
						var грид = Ext.getCmp('ВзаиморасчетыСПоставщиками');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			width: 637,
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
			id: 'ВзаиморасчетыСПокупателями',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид задолженности',
					width:'100',
					dataIndex:'ВидЗадолженности',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'118',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'118',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'100',
					dataIndex:'Сделка',
					flex:1,
				},
				{
					text:'Документ расчетов',
					width:'193',
					dataIndex:'РасчетныйДокумент',
					flex:1,
				},
				{
					text:'Сумма взаиморасчетов',
					width:'96',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
				{
					text:'в т.ч. ЕНВД',
					width:'96',
					dataIndex:'ДоходЕНВД',
					flex:1,
				},
				{
					text:'в т.ч. доход комитента',
					width:'96',
					dataIndex:'ДоходКомитента',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидЗадолженности',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'Сделка',
					},
					{
						name:'РасчетныйДокумент',
					},
					{
						name:'СуммаВзаиморасчетов',
					},
					{
						name:'ДоходЕНВД',
					},
					{
						name:'ДоходКомитента',
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
						var грид = Ext.getCmp('ВзаиморасчетыСПокупателями');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			width: 637,
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
			id: 'ВзаиморасчетыСПодотчетниками',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид задолженности',
					width:'100',
					dataIndex:'ВидЗадолженности',
					flex:1,
				},
				{
					text:'Работник',
					width:'182',
					dataIndex:'Подотчетник',
					flex:1,
				},
				{
					text:'Документ расчетов',
					width:'218',
					dataIndex:'РасчетныйДокумент',
					flex:1,
				},
				{
					text:'Сумма взаиморасчетов',
					width:'110',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидЗадолженности',
					},
					{
						name:'Подотчетник',
					},
					{
						name:'РасчетныйДокумент',
					},
					{
						name:'СуммаВзаиморасчетов',
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
						var грид = Ext.getCmp('ВзаиморасчетыСПодотчетниками');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			width: 637,
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
			id: 'ВзаиморасчетыССотрудниками',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид задолженности',
					width:'100',
					dataIndex:'ВидЗадолженности',
					flex:1,
				},
				{
					text:'Работник',
					width:'356',
					dataIndex:'Работник',
					flex:1,
				},
				{
					text:'Сумма взаиморасчетов',
					width:'130',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидЗадолженности',
					},
					{
						name:'Работник',
					},
					{
						name:'СуммаВзаиморасчетов',
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
						var грид = Ext.getCmp('ВзаиморасчетыССотрудниками');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			width: 637,
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
			id: 'ВзаиморвасчетыПоНалогам',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид задолженности',
					width:'108',
					dataIndex:'ВидЗадолженности',
					flex:1,
				},
				{
					text:'Счет расчетов по налогу',
					width:'122',
					dataIndex:'СчетРасчетовПоНалогу',
					flex:1,
				},
				{
					text:'Сумма взаиморасчетов',
					width:'139',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидЗадолженности',
					},
					{
						name:'СчетРасчетовПоНалогу',
					},
					{
						name:'СуммаВзаиморасчетов',
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
						var грид = Ext.getCmp('ВзаиморвасчетыПоНалогам');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			width: 637,
			height: 24,
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
				{
					items:
					[
		{
			id: 'ПартииТоваровНаСкладах',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:651px;height:228px;',
			height: 228,width: 651,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'165',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'100',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия номенклатуры',
					width:'100',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Счет учета',
					width:'66',
					dataIndex:'СчетУчета',
					flex:1,
				},
				{
					text:'Склад',
					width:'115',
					dataIndex:'Склад',
					flex:1,
				},
				{
					text:'Партия',
					width:'190',
					dataIndex:'ДокументОприходования',
					flex:1,
				},
				{
					text:'Количество',
					width:'74',
					dataIndex:'Количество',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СерияНоменклатуры',
					},
					{
						name:'СчетУчета',
					},
					{
						name:'Склад',
					},
					{
						name:'ДокументОприходования',
					},
					{
						name:'Количество',
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
						var грид = Ext.getCmp('ПартииТоваровНаСкладах');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:651px;height:24px;',
			width: 651,
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
			id: 'ПартииТоваровПереданные',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:651px;height:228px;',
			height: 228,width: 651,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'142',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'100',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Счет учета',
					width:'74',
					dataIndex:'СчетУчета',
					flex:1,
				},
				{
					text:'Партия',
					width:'117',
					dataIndex:'ДокументОприходования',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'59',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'114',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Документ передачи',
					width:'120',
					dataIndex:'ДокументПередачи',
					flex:1,
				},
				{
					text:'Количество',
					width:'79',
					dataIndex:'Количество',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СчетУчета',
					},
					{
						name:'ДокументОприходования',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'ДокументПередачи',
					},
					{
						name:'Количество',
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
						var грид = Ext.getCmp('ПартииТоваровПереданные');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:651px;height:24px;',
			width: 651,
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
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:651px;height:254px;',
			height: 254,width: 651,
			items:
			[
				{
					items:
					[
		{
			id: 'РасходыНоменклатура',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Партия',
					width:'100',
					dataIndex:'ДокументОприходования',
					flex:1,
				},
				{
					text:'Счет учета',
					width:'100',
					dataIndex:'СчетУчета',
					flex:1,
				},
				{
					text:'Статус партии',
					width:'100',
					dataIndex:'СтатусыПартийУСН',
					flex:1,
				},
				{
					text:'Поставщик',
					width:'100',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор поставщика',
					width:'100',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Документ расчетов',
					width:'198',
					dataIndex:'РасчетныйДокумент',
					flex:1,
				},
				{
					text:'Состояние расхода',
					width:'156',
					dataIndex:'СтатусыОплатыРасходовУСН',
					flex:1,
				},
				{
					text:'Отражение в УСН',
					width:'98',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
				{
					text:'Валюта',
					width:'104',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Количество',
					width:'104',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Сумма',
					width:'95',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'НДС',
					width:'95',
					dataIndex:'НДС',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ДокументОприходования',
					},
					{
						name:'СчетУчета',
					},
					{
						name:'СтатусыПартийУСН',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'РасчетныйДокумент',
					},
					{
						name:'СтатусыОплатыРасходовУСН',
					},
					{
						name:'ОтражениеВУСН',
					},
					{
						name:'Валюта',
					},
					{
						name:'Количество',
					},
					{
						name:'Сумма',
					},
					{
						name:'НДС',
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
						var грид = Ext.getCmp('РасходыНоменклатура');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			width: 637,
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
			id: 'РасходыНМА',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'НМА',
					width:'100',
					dataIndex:'НМА',
					flex:1,
				},
				{
					text:'Поставщик',
					width:'100',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор поставщика',
					width:'100',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Документ расчетов',
					width:'122',
					dataIndex:'РасчетныйДокумент',
					flex:1,
				},
				{
					text:'Отражение в УСН',
					width:'103',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
				{
					text:'Валюта',
					width:'75',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'НДС',
					width:'100',
					dataIndex:'НДС',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'НМА',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'РасчетныйДокумент',
					},
					{
						name:'ОтражениеВУСН',
					},
					{
						name:'Валюта',
					},
					{
						name:'Сумма',
					},
					{
						name:'НДС',
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
						var грид = Ext.getCmp('РасходыНМА');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			width: 637,
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
			id: 'РасходыУслуги',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Поставщик',
					width:'100',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор поставщика',
					width:'100',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Документ расчетов',
					width:'100',
					dataIndex:'РасчетныйДокумент',
					flex:1,
				},
				{
					text:'Отражение в УСН',
					width:'100',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
				{
					text:'Валюта',
					width:'100',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'НДС',
					width:'100',
					dataIndex:'НДС',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'РасчетныйДокумент',
					},
					{
						name:'ОтражениеВУСН',
					},
					{
						name:'Валюта',
					},
					{
						name:'Сумма',
					},
					{
						name:'НДС',
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
						var грид = Ext.getCmp('РасходыУслуги');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			width: 637,
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
			id: 'РасходыРБП',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'РБП',
					width:'100',
					dataIndex:'РБП',
					flex:1,
				},
				{
					text:'Поставщик',
					width:'100',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор поставщика',
					width:'100',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Документ расчетов',
					width:'147',
					dataIndex:'РасчетныйДокумент',
					flex:1,
				},
				{
					text:'Состояние расхода',
					width:'147',
					dataIndex:'СтатусыОплатыРасходовУСН',
					flex:1,
				},
				{
					text:'Отражение в УСН',
					width:'102',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
				{
					text:'Валюта',
					width:'91',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Сумма',
					width:'97',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'НДС',
					width:'92',
					dataIndex:'НДС',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'РБП',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'РасчетныйДокумент',
					},
					{
						name:'СтатусыОплатыРасходовУСН',
					},
					{
						name:'ОтражениеВУСН',
					},
					{
						name:'Валюта',
					},
					{
						name:'Сумма',
					},
					{
						name:'НДС',
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
						var грид = Ext.getCmp('РасходыРБП');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			width: 637,
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
			id: 'РасходыЗарплата',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Работник',
					width:'286',
					dataIndex:'Работник',
					flex:1,
				},
				{
					text:'Отражение в УСН',
					width:'106',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
				{
					text:'Сумма',
					width:'113',
					dataIndex:'Сумма',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Работник',
					},
					{
						name:'ОтражениеВУСН',
					},
					{
						name:'Сумма',
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
						var грид = Ext.getCmp('РасходыЗарплата');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			width: 637,
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
			id: 'РасходыНалоги',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Счет расчетов по налогу',
					width:'100',
					dataIndex:'СчетРасчетовПоНалогу',
					flex:1,
				},
				{
					text:'Отражение в УСН',
					width:'100',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'СчетРасчетовПоНалогу',
					},
					{
						name:'ОтражениеВУСН',
					},
					{
						name:'Сумма',
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
						var грид = Ext.getCmp('РасходыНалоги');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			width: 637,
			height: 24,
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
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:6px;width:651px;height:254px;',
			height: 254,width: 651,
			items:
			[
				{
					items:
					[
		{
			id: 'ПервоначальныеСведенияОС',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Основное средство',
					width:'120',
					dataIndex:'ОсновноеСредство',
					flex:1,
				},
				{
					text:'Дата приобретения',
					width:'80',
					dataIndex:'ДатаПриобретения',
					flex:1,
				},
				{
					text:'Первоначальная стоимость',
					width:'80',
					dataIndex:'ПервоначальнаяСтоимостьУСН',
					flex:1,
				},
				{
					text:'Сумма начисленной амортизации (при общем режиме)',
					width:'80',
					dataIndex:'СуммаНачисленнойАмортизации',
					flex:1,
				},
				{
					text:'Срок полезного использования, мес.',
					width:'80',
					dataIndex:'СрокПолезногоИспользования',
					flex:1,
				},
				{
					text:'Порядок включения стоимости в состав расходов (УСН)',
					width:'120',
					dataIndex:'ПорядокВключенияСтоимостиВСоставРасходовУСН',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ОсновноеСредство',
					},
					{
						name:'ДатаПриобретения',
					},
					{
						name:'ПервоначальнаяСтоимостьУСН',
					},
					{
						name:'СуммаНачисленнойАмортизации',
					},
					{
						name:'СрокПолезногоИспользования',
					},
					{
						name:'ПорядокВключенияСтоимостиВСоставРасходовУСН',
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
						var грид = Ext.getCmp('ПервоначальныеСведенияОС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			width: 637,
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
			id: 'ПервоначальныеСведенияНМА',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Нематериальный актив',
					width:'120',
					dataIndex:'НематериальныйАктив',
					flex:1,
				},
				{
					text:'Дата приобретения',
					width:'80',
					dataIndex:'ДатаПриобретения',
					flex:1,
				},
				{
					text:'Первоначальная стоимость',
					width:'80',
					dataIndex:'ПервоначальнаяСтоимостьУСН',
					flex:1,
				},
				{
					text:'Сумма начисленной амортизации (при общем режиме)',
					width:'80',
					dataIndex:'СуммаНачисленнойАмортизации',
					flex:1,
				},
				{
					text:'Срок полезного использования, мес.',
					width:'80',
					dataIndex:'СрокПолезногоИспользования',
					flex:1,
				},
				{
					text:'Порядок включения стоимости в состав расходов (УСН)',
					width:'120',
					dataIndex:'ПорядокВключенияСтоимостиВСоставРасходовУСН',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковУСН/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'НематериальныйАктив',
					},
					{
						name:'ДатаПриобретения',
					},
					{
						name:'ПервоначальнаяСтоимостьУСН',
					},
					{
						name:'СуммаНачисленнойАмортизации',
					},
					{
						name:'СрокПолезногоИспользования',
					},
					{
						name:'ПорядокВключенияСтоимостиВСоставРасходовУСН',
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
						var грид = Ext.getCmp('ПервоначальныеСведенияНМА');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВводНачальныхОстатковУСН.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			width: 637,
			height: 24,
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
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:401px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 579,
			height: 19,
			style: 'position:absolute;left:94px;top:401px;width:579px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Подсказка',
			text: 'Подсказка',
			style: 'position:absolute;left:324px;top:33px;width:349px;height:43px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:377px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответственный.Представление',
			width: 579,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:377px;width:579px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВводНачальныхОстатковУСН.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВводНачальныхОстатковУСН.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВводНачальныхОстатковУСН.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВводНачальныхОстатковУСН.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:428px;width:681px;height:25px;',
			width: 681,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
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