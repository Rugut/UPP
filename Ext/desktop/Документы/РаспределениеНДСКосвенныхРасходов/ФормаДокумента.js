Ext.require(['Данные.Документы.РаспределениеНДСКосвенныхРасходов'], function () 
{
	Ext.define('Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:715px;height:470px;',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:715px;height:25px;',
			items:
			[
				{
					text:'Заполнить документ',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:418px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 613,
			height: 19,
			style: 'position:absolute;left:94px;top:418px;width:613px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:56px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:56px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 281,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:426px;top:56px;width:281px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НалоговыйПериод',
			text: 'Налоговый период',
			style: 'position:absolute;left:336px;top:33px;width:261px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:85px;width:699px;height:328px;',
			height: 328,width: 699,
			items:
			[
				{
					title:'Выручка от реализации',
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВыручкаБезНДС',
			style: 'position:absolute;left:164px;top:58px;width:120px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВыручкаНДС0',
			style: 'position:absolute;left:164px;top:106px;width:120px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВыручкаНДС',
			style: 'position:absolute;left:164px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:6px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ТекстВыручкаЕНВД',
			text: 'Сумма реализации с ЕНВД:',
			style: 'position:absolute;left:6px;top:82px;width:156px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВыручкаЕНВД',
			style: 'position:absolute;left:164px;top:82px;width:120px;height:19px;',
		},
					]
				},
				{
					title:'Косвенные расходы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:1px;width:685px;height:24px;',
			items:
			[
				{
					text:'Заполнить',
				},
			]
		},
		{
			id: 'СоставКосвенныхРасходов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:685px;height:148px;',
			height: 148,width: 685,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид ценности',
					width:'120',
					dataIndex:'ВидЦенности',
					flex:1,
				},
				{
					text:'Поставщик',
					width:'120',
					dataIndex:'Поставщик',
					flex:1,
				},
				{
					text:'Счет-фактура',
					width:'120',
					dataIndex:'СчетФактура',
					flex:1,
				},
				{
					text:'% НДС',
					width:'56',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Распр. с учетом выручки по ЕНВД',
					width:'98',
					dataIndex:'БазисРаспределенияВключаетЕНВД',
					flex:1,
				},
				{
					text:'НДС включен в стоимость',
					width:'85',
					dataIndex:'НДСВключенВСтоимость',
					flex:1,
				},
				{
					text:'Счет учета НДС',
					width:'80',
					dataIndex:'СчетУчетаНДС',
					flex:1,
				},
				{
					text:'Сумма по счету',
					width:'120',
					dataIndex:'СуммаВсего',
					flex:1,
				},
				{
					text:'НДС по счету',
					width:'120',
					dataIndex:'НДСВсего',
					flex:1,
				},
				{
					text:'Сумма (НДС)',
					width:'120',
					dataIndex:'НДССумма',
					flex:1,
				},
				{
					text:'НДС (НДС)',
					width:'120',
					dataIndex:'НДС18',
					flex:1,
				},
				{
					text:'Сумма (Без НДС)',
					width:'120',
					dataIndex:'БезНДССумма',
					flex:1,
				},
				{
					text:'НДС (Без НДС)',
					width:'120',
					dataIndex:'БезНДС',
					flex:1,
				},
				{
					text:'Сумма (ЕНВД)',
					width:'120',
					dataIndex:'ЕНВДСумма',
					flex:1,
				},
				{
					text:'НДС (ЕНВД)',
					width:'120',
					dataIndex:'ЕНВДНДС',
					flex:1,
				},
				{
					text:'0% (Сумма)',
					width:'120',
					dataIndex:'СуммаБезНДС0',
					flex:1,
				},
				{
					text:'0% (НДС)',
					width:'120',
					dataIndex:'НДС0',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РаспределениеНДСКосвенныхРасходов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидЦенности',
					},
					{
						name:'Поставщик',
					},
					{
						name:'СчетФактура',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'БазисРаспределенияВключаетЕНВД',
					},
					{
						name:'НДСВключенВСтоимость',
					},
					{
						name:'СчетУчетаНДС',
					},
					{
						name:'СуммаВсего',
					},
					{
						name:'НДСВсего',
					},
					{
						name:'НДССумма',
					},
					{
						name:'НДС18',
					},
					{
						name:'БезНДССумма',
					},
					{
						name:'БезНДС',
					},
					{
						name:'ЕНВДСумма',
					},
					{
						name:'ЕНВДНДС',
					},
					{
						name:'СуммаБезНДС0',
					},
					{
						name:'НДС0',
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
						var грид = Ext.getCmp('СоставКосвенныхРасходов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'ТекстВыручкаНДС',
			text: 'Сумма реализации с НДС:',
			style: 'position:absolute;left:6px;top:33px;width:156px;height:19px;text-align:left;',
		},
		{
			id: 'СчетаУчетаРасходов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:179px;width:685px;height:123px;',
			height: 123,width: 685,
			columns:
			[
				{
					text:'НУ',
					width:'20',
					dataIndex:'ОтражатьВНалоговомУчете',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'100',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Хар-р затрат',
					width:'100',
					dataIndex:'ХарактерЗатрат',
					flex:1,
				},
				{
					text:'Счет затрат',
					width:'120',
					dataIndex:'СчетЗатрат',
					flex:1,
				},
				{
					text:'Счет затрат (НУ)',
					width:'120',
					dataIndex:'СчетЗатратНУ',
					flex:1,
				},
				{
					text:'Счет затрат ЕНВД',
					width:'100',
					dataIndex:'СчетЗатратЕНВД',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'100',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Вид аналитики',
					width:'100',
					dataIndex:'ВидАналитики',
					flex:1,
				},
				{
					text:'Вид аналитики (доп)',
					width:'100',
					dataIndex:'ВидАналитикиДоп',
					flex:1,
				},
				{
					text:'Вид субконто 1',
					width:'100',
					dataIndex:'ВидСубконто1',
					flex:1,
				},
				{
					text:'Вид субконто 2',
					width:'100',
					dataIndex:'ВидСубконто2',
					flex:1,
				},
				{
					text:'Вид субконто 3',
					width:'100',
					dataIndex:'ВидСубконто3',
					flex:1,
				},
				{
					text:'Вид субконто 1 (НУ)',
					width:'100',
					dataIndex:'ВидСубконтоНУ1',
					flex:1,
				},
				{
					text:'Вид субконто 2 (НУ)',
					width:'100',
					dataIndex:'ВидСубконтоНУ2',
					flex:1,
				},
				{
					text:'Вид субконто 3 (НУ)',
					width:'100',
					dataIndex:'ВидСубконтоНУ3',
					flex:1,
				},
				{
					text:'Аналитика',
					width:'100',
					dataIndex:'Аналитика',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'100',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Субконто1',
					width:'120',
					dataIndex:'Субконто1',
					flex:1,
				},
				{
					text:'Субконто2',
					width:'120',
					dataIndex:'Субконто2',
					flex:1,
				},
				{
					text:'Субконто3',
					width:'120',
					dataIndex:'Субконто3',
					flex:1,
				},
				{
					text:'Субконто1 (НУ)',
					width:'120',
					dataIndex:'СубконтоНУ1',
					flex:1,
				},
				{
					text:'Субконто2 (НУ)',
					width:'120',
					dataIndex:'СубконтоНУ2',
					flex:1,
				},
				{
					text:'Субконто3 (НУ)',
					width:'120',
					dataIndex:'СубконтоНУ3',
					flex:1,
				},
				{
					text:'Сумма',
					width:'120',
					dataIndex:'СуммаБезНДС',
					flex:1,
				},
				{
					text:'НДС',
					width:'120',
					dataIndex:'НДС',
					flex:1,
				},
				{
					text:'Заказ',
					width:'100',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Затрата',
					width:'100',
					dataIndex:'Затрата',
					flex:1,
				},
				{
					text:'Характеристика затраты',
					width:'100',
					dataIndex:'ХарактеристикаЗатраты',
					flex:1,
				},
				{
					text:'Серия затраты',
					width:'100',
					dataIndex:'СерияЗатраты',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РаспределениеНДСКосвенныхРасходов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ОтражатьВНалоговомУчете',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'ХарактерЗатрат',
					},
					{
						name:'СчетЗатрат',
					},
					{
						name:'СчетЗатратНУ',
					},
					{
						name:'СчетЗатратЕНВД',
					},
					{
						name:'Подразделение',
					},
					{
						name:'ВидАналитики',
					},
					{
						name:'ВидАналитикиДоп',
					},
					{
						name:'ВидСубконто1',
					},
					{
						name:'ВидСубконто2',
					},
					{
						name:'ВидСубконто3',
					},
					{
						name:'ВидСубконтоНУ1',
					},
					{
						name:'ВидСубконтоНУ2',
					},
					{
						name:'ВидСубконтоНУ3',
					},
					{
						name:'Аналитика',
					},
					{
						name:'НоменклатурнаяГруппа',
					},
					{
						name:'Субконто1',
					},
					{
						name:'Субконто2',
					},
					{
						name:'Субконто3',
					},
					{
						name:'СубконтоНУ1',
					},
					{
						name:'СубконтоНУ2',
					},
					{
						name:'СубконтоНУ3',
					},
					{
						name:'СуммаБезНДС',
					},
					{
						name:'НДС',
					},
					{
						name:'Заказ',
					},
					{
						name:'Затрата',
					},
					{
						name:'ХарактеристикаЗатраты',
					},
					{
						name:'СерияЗатраты',
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
						var грид = Ext.getCmp('СчетаУчетаРасходов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Счета списания НДС',
					items:
					[
		{
			xtype: 'label',
			name: 'ТекстВыручкаБезНДС',
			text: 'Сумма реализации без НДС:',
			style: 'position:absolute;left:6px;top:58px;width:156px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для списания НДС использовать счет и аналитику затрат',
			style: 'position:absolute;left:6px;top:6px;width:320px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗатратСписанияНДС',
			text: 'Статья затрат:',
			style: 'position:absolute;left:6px;top:80px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяЗатратСписанияНДС.Представление',
			width: 241,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:80px;width:241px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатурнаяГруппа',
			text: 'Ном. группа:',
			style: 'position:absolute;left:6px;top:104px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'НоменклатурнаяГруппа.Представление',
			width: 241,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:104px;width:241px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:128px;width:333px;height:91px;',
			height: 91,width: 333,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Счет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДС',
			text: 'Счет:',
			style: 'position:absolute;left:0px;top:0px;width:92px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СчетСписанияНДС.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:0px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:0px;top:24px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:0px;top:48px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:0px;top:72px;width:92px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоСписанияНДС1.Представление',
			width: 240,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:24px;width:240px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоСписанияНДС2.Представление',
			width: 240,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:48px;width:240px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоСписанияНДС3.Представление',
			width: 240,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:72px;width:240px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДСНеТребуется',
			text: 'В соответствии с настройкой учетной политики по налоговому учету указание счета списания НДС в бухгалтерском учете не требуется - НДС включается в стоимость, а не списывается на затраты',
			style: 'position:absolute;left:0px;top:0px;width:304px;height:54px;',
		},
					]
				},
				{
					title:'Надпись',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Счет и аналитика списания НДС',
			style: 'position:absolute;left:6px;top:33px;width:685px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:359px;top:128px;width:332px;height:91px;',
			height: 91,width: 332,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Счет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетДтНУ',
			text: 'Счет (НУ):',
			style: 'position:absolute;left:0px;top:0px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СчетСписанияНДСНУ.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:0px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ1',
			text: 'Субконто 1 (НУ):',
			style: 'position:absolute;left:0px;top:24px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоСписанияНДСНУ1.Представление',
			width: 240,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:24px;width:240px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ2',
			text: 'Субконто 2 (НУ):',
			style: 'position:absolute;left:0px;top:48px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоСписанияНДСНУ2.Представление',
			width: 240,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:48px;width:240px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ3',
			text: 'Субконто 3 (НУ):',
			style: 'position:absolute;left:0px;top:72px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоСписанияНДСНУ3.Представление',
			width: 240,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:72px;width:240px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДСНУНеТребуется',
			text: 'Указание счета списания НДС в налоговом учете не требуется - НДС включается в стоимость, а не списывается на затраты',
			style: 'position:absolute;left:0px;top:0px;width:304px;height:51px;',
		},
					]
				},
				{
					title:'Надпись',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:6px;top:51px;width:92px;height:27px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПодразделениеОрганизации.Представление',
			width: 241,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:98px;top:56px;width:241px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
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
			style: 'position:absolute;left:0px;top:445px;width:715px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
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