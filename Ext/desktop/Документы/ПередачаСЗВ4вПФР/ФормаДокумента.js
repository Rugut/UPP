Ext.require(['Данные.Документы.ПередачаСЗВ4вПФР'], function () 
{
	Ext.define('Документы.ПередачаСЗВ4вПФР.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:891px;height:554px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Опись сведений, передаваемых страхователем в ПФР',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:502px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 670,
			height: 19,
			style: 'position:absolute;left:96px;top:502px;width:670px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:891px;height:25px;',
			width: 891,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Принято в ПФР',
			style: 'position:absolute;left:775px;top:502px;width:106px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:149px;width:875px;height:347px;',
			height: 347,width: 875,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:27px;width:875px;height:24px;',
			width: 875,
			height: 24,
			items:
			[
				{
					text:'Заполнить расчетами с ПФР',
					tooltip:'Заполнить расчетами с ПФР',
				},
			]
		},
		{
			id: 'СведенияОЗадолженности1',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:55px;width:875px;height:292px;',
			height: 292,width: 875,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Тип строки',
					width:'240',
					dataIndex:'ТипСтроки',
					flex:1,
				},
				{
					text:'Год',
					width:'60',
					dataIndex:'Год',
					flex:1,
				},
				{
					text:'Страховая часть',
					width:'100',
					dataIndex:'СтраховаяЧасть',
					flex:1,
				},
				{
					text:'Накопительная часть',
					width:'119',
					dataIndex:'НакопительнаяЧасть',
					flex:1,
				},
				{
					text:'Дополнительный тариф',
					width:'128',
					dataIndex:'ДополнительныйТариф',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПередачаСЗВ4вПФР/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ТипСтроки',
					},
					{
						name:'Год',
					},
					{
						name:'СтраховаяЧасть',
					},
					{
						name:'НакопительнаяЧасть',
					},
					{
						name:'ДополнительныйТариф',
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
						var грид = Ext.getCmp('СведенияОЗадолженности1');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПередачаСЗВ4вПФР.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПередачаСЗВ4вПФР.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Расчеты с ПФР за 2002 - 2009 годы',
			style: 'position:absolute;left:0px;top:6px;width:875px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:84px;width:514px;height:24px;',
			width: 514,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				'-',
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Провести пачку',
					tooltip:'Провести пачку',
				},
				{
					text:'Отменить проведение пачки',
					tooltip:'Отменить проведение пачки',
				},
				'-',
				{
					text:'Провести все пачки',
					tooltip:'',
				},
				'-',
			]
		},
		{
			id: 'ПачкиДокументов1',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:108px;width:514px;height:239px;',
			height: 239,width: 514,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Документ',
					width:'120',
					dataIndex:'ДокументПачка',
					flex:1,
				},
				{
					text:'№ пачки',
					width:'49',
					dataIndex:'НомерПачки',
					flex:1,
				},
				{
					text:'Форма',
					width:'64',
					dataIndex:'ТипФормДокументов',
					flex:1,
				},
				{
					text:'Категория ЗЛ',
					width:'79',
					dataIndex:'КатегорияЗастрахованныхЛиц',
					flex:1,
				},
				{
					text:'Тип сведений',
					width:'76',
					dataIndex:'ТипСведенийСЗВ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПередачаСЗВ4вПФР/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ДокументПачка',
					},
					{
						name:'НомерПачки',
					},
					{
						name:'ТипФормДокументов',
					},
					{
						name:'КатегорияЗастрахованныхЛиц',
					},
					{
						name:'ТипСведенийСЗВ',
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
						var грид = Ext.getCmp('ПачкиДокументов1');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПередачаСЗВ4вПФР.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПередачаСЗВ4вПФР.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'ФизлицаПачек1',
			xtype: 'grid',
			style: 'position:absolute;left:523px;top:108px;width:352px;height:239px;',
			height: 239,width: 352,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Застрахованное лицо',
					width:'120',
					dataIndex:'ФизЛицо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПередачаСЗВ4вПФР/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
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
						var грид = Ext.getCmp('ФизлицаПачек1');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПередачаСЗВ4вПФР.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПередачаСЗВ4вПФР.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Состав пачки (реестра)',
			style: 'position:absolute;left:523px;top:68px;width:352px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Пачки СЗВ-6-1 и Реестры СЗВ-6-2',
			style: 'position:absolute;left:0px;top:68px;width:514px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:523px;top:84px;width:352px;height:24px;',
			width: 352,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
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
				{
					text:'Конструктор настроек...',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'',
					tooltip:'Перенести в другую пачку СЗВ-6',
				},
				'-',
				{
					text:'Открыть данные о стаже',
					tooltip:'Открыть данные о стаже',
				},
				'-',
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:875px;height:68px;',
			height: 68,width: 875,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСостояниеПачекДокументов',
			text: 'Распределение сумм уплаченных взносов производится по коэффициентам текущего периода без учета переданных ранее в ПФР сведений. ',
			style: 'position:absolute;left:29px;top:22px;width:845px;height:27px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПерейтиПодготовкаДанныхПФР',
			text: 'Перейти в рабочее место Подготовка данных ПФР',
			style: 'position:absolute;left:29px;top:49px;width:267px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетСтраховыхВзносов',
			text: 'Расчет по страховым взносам РСВ-1:',
			style: 'position:absolute;left:0px;top:0px;width:195px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'РасчетСтраховыхВзносов.Представление',
			width: 212,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:200px;top:0px;width:212px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПередачаСЗВ4вПФР.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПередачаСЗВ4вПФР.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПередачаСЗВ4вПФР.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПередачаСЗВ4вПФР.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
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
			style: 'position:absolute;left:0px;top:33px;width:875px;height:314px;',
			height: 314,width: 875,
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:503px;height:24px;',
			width: 503,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				'-',
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Провести пачку',
					tooltip:'Провести пачку',
				},
				{
					text:'Отменить проведение пачки',
					tooltip:'Отменить проведение пачки',
				},
				'-',
				'-',
				{
					text:'Сформировать',
					tooltip:'Сформировать сведения о стаже и пачки сведений СЗВ-4',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
			]
		},
		{
			id: 'ПачкиДокументов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:503px;height:242px;',
			height: 242,width: 503,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'№ пачки',
					width:'49',
					dataIndex:'НомерПачки',
					flex:1,
				},
				{
					text:'Документ',
					width:'120',
					dataIndex:'ДокументПачка',
					flex:1,
				},
				{
					text:'Тип форм документов',
					width:'60',
					dataIndex:'ТипФормДокументов',
					flex:1,
				},
				{
					text:'Территориальные условия',
					width:'60',
					dataIndex:'ТерриториальныеУсловия',
					flex:1,
				},
				{
					text:'Вид корректировки',
					width:'60',
					dataIndex:'ВидКорректировки',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'105',
					dataIndex:'КомментарийПачки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПередачаСЗВ4вПФР/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'НомерПачки',
					},
					{
						name:'ДокументПачка',
					},
					{
						name:'ТипФормДокументов',
					},
					{
						name:'ТерриториальныеУсловия',
					},
					{
						name:'ВидКорректировки',
					},
					{
						name:'КомментарийПачки',
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
						var грид = Ext.getCmp('ПачкиДокументов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПередачаСЗВ4вПФР.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПередачаСЗВ4вПФР.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'ФизлицаПачек',
			xtype: 'grid',
			style: 'position:absolute;left:515px;top:46px;width:352px;height:242px;',
			height: 242,width: 352,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Физическое лицо',
					width:'120',
					dataIndex:'ФизЛицо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПередачаСЗВ4вПФР/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
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
						var грид = Ext.getCmp('ФизлицаПачек');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПередачаСЗВ4вПФР.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПередачаСЗВ4вПФР.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Состав пачки',
			style: 'position:absolute;left:515px;top:6px;width:352px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Пачки СЗВ-4',
			style: 'position:absolute;left:6px;top:6px;width:503px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:515px;top:22px;width:352px;height:24px;',
			width: 352,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
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
				{
					text:'Конструктор настроек...',
					tooltip:'Открыть конструктор настроек',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'',
					tooltip:'Перенести в другую пачку СЗВ-4',
				},
				'-',
				{
					text:'Открыть СЗВ-4',
					tooltip:'Редактировать форму СЗВ-4',
				},
				'-',
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
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
			style: 'position:absolute;left:6px;top:0px;width:861px;height:24px;',
			width: 861,
			height: 24,
			items:
			[
				{
					text:'Заполнить расчетами с ПФР',
					tooltip:'Заполнить расчетами с ПФР',
				},
			]
		},
		{
			id: 'СведенияОЗадолженности',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:861px;height:264px;',
			height: 264,width: 861,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Тип строки',
					width:'220',
					dataIndex:'ТипСтроки',
					flex:1,
				},
				{
					text:'Год',
					width:'74',
					dataIndex:'Год',
					flex:1,
				},
				{
					text:'Страховая часть',
					width:'100',
					dataIndex:'СтраховаяЧасть',
					flex:1,
				},
				{
					text:'Накопительная часть',
					width:'99',
					dataIndex:'НакопительнаяЧасть',
					flex:1,
				},
				{
					text:'Дополнительный тариф',
					width:'100',
					dataIndex:'ДополнительныйТариф',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПередачаСЗВ4вПФР/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ТипСтроки',
					},
					{
						name:'Год',
					},
					{
						name:'СтраховаяЧасть',
					},
					{
						name:'НакопительнаяЧасть',
					},
					{
						name:'ДополнительныйТариф',
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
						var грид = Ext.getCmp('СведенияОЗадолженности');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПередачаСЗВ4вПФР.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПередачаСЗВ4вПФР.ФормаДокументаСобытия");
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
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:875px;height:25px;',
			height: 25,width: 875,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаДействия',
			text: 'Дата действия:',
			style: 'position:absolute;left:206px;top:0px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаДействия',
			width: 80,
			height: 19,
			style: 'position:absolute;left:288px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Тип сведений:',
			style: 'position:absolute;left:0px;top:0px;width:83px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'ИСХД',
			style: 'position:absolute;left:89px;top:0px;width:53px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'ПЕНС',
			style: 'position:absolute;left:146px;top:0px;width:53px;height:19px;',
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
			name: 'НадписьСпециальногоДокумента',
			text: 'Эта пачка пенсионных форм была сформирована до утверждения документов СЗВ-6. Сейчас эти формы можно только распечатать.',
			style: 'position:absolute;left:27px;top:0px;width:848px;height:25px;',
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
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:875px;height:41px;',
			height: 41,width: 875,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:875px;height:35px;',
			height: 35,width: 875,
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
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:74px;width:875px;height:75px;',
			height: 75,width: 875,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:443px;top:0px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:529px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:611px;top:0px;width:16px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:629px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 318,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:0px;width:318px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПередачаСЗВ4вПФР.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПередачаСЗВ4вПФР.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПередачаСЗВ4вПФР.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПередачаСЗВ4вПФР.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:443px;top:24px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Исполнитель.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:529px;top:24px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПередачаСЗВ4вПФР.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПередачаСЗВ4вПФР.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПередачаСЗВ4вПФР.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПередачаСЗВ4вПФР.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:0px;top:48px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Руководитель.Представление',
			width: 120,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:48px;width:120px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПередачаСЗВ4вПФР.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПередачаСЗВ4вПФР.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПередачаСЗВ4вПФР.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПередачаСЗВ4вПФР.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя',
			text: 'Должность:',
			style: 'position:absolute;left:218px;top:48px;width:65px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ДолжностьРуководителя.Представление',
			width: 126,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:286px;top:48px;width:126px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПередачаСЗВ4вПФР.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПередачаСЗВ4вПФР.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПередачаСЗВ4вПФР.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПередачаСЗВ4вПФР.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Отчетный период:',
			style: 'position:absolute;left:0px;top:24px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтчетныйПериод',
			width: 318,
			height: 19,
			style: 'position:absolute;left:94px;top:24px;width:318px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПачки',
			text: 'Номер пачки:',
			style: 'position:absolute;left:443px;top:48px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПачки',
			width: 80,
			height: 19,
			style: 'position:absolute;left:529px;top:48px;width:80px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:611px;top:48px;width:243px;height:19px;',
			height: 19,width: 243,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Содержит:',
			style: 'position:absolute;left:6px;top:0px;width:55px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Сведения СЗВ-6',
			style: 'position:absolute;left:66px;top:0px;width:106px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'АДВ-11',
			style: 'position:absolute;left:178px;top:0px;width:59px;height:19px;',
		},
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
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:529px;width:891px;height:25px;',
			width: 891,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Проверить в CheckXML',
					tooltip:'Проверить файл программой CheckXML',
				},
				'-',
				'-',
				'-',
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