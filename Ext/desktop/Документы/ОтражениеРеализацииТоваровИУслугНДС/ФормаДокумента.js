Ext.require(['Данные.Документы.ОтражениеРеализацииТоваровИУслугНДС'], function () 
{
	Ext.define('Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:672px;height:473px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отражение начисления НДС',
	
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
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:172px;top:33px;width:16px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:81px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Контрагент.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:90px;top:81px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:8px;top:105px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ДоговорКонтрагента.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:90px;top:105px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетныйДокумент',
			text: 'Документ расчетов:',
			style: 'position:absolute;left:8px;top:129px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'РасчетныйДокумент',
			width: 192,
			height: 19,
			style: 'position:absolute;left:118px;top:129px;width:192px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:421px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 574,
			height: 19,
			style: 'position:absolute;left:90px;top:421px;width:574px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:672px;height:25px;',
			width: 672,
			height: 25,
			items:
			[
				{
					text:'Цены и валюта...',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактура',
			text: 'Счет-фактура:',
			style: 'position:absolute;left:8px;top:399px;width:80px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаСчетФактура',
			text: 'Ввести счет-фактуру',
			style: 'position:absolute;left:90px;top:399px;width:376px;height:17px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать как запись книги продаж',
			style: 'position:absolute;left:316px;top:33px;width:287px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:153px;width:656px;height:220px;',
			height: 220,width: 656,
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:642px;height:24px;',
			width: 642,
			height: 24,
			items:
			[
				{
					text:'Заполнить по расчетному документу',
				},
				{
					text:'Добавить из расчетного документа',
				},
			]
		},
		{
			id: 'ТоварыИУслуги',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:642px;height:161px;',
			height: 161,width: 642,
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
					text:'Номенклатура',
					width:'120',
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
					text:'Единица',
					width:'63',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'К.',
					width:'52',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Количество',
					width:'120',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Цена',
					width:'120',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Сумма',
					width:'120',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'% НДС',
					width:'71',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'120',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'Всего',
					width:'120',
					dataIndex:'Всего',
					flex:1,
				},
				{
					text:'Счет учета (БУ)',
					width:'80',
					dataIndex:'СчетУчетаБУ',
					flex:1,
				},
				{
					text:'Счет доходов (БУ)',
					width:'80',
					dataIndex:'СчетДоходовБУ',
					flex:1,
				},
				{
					text:'Счет учета НДС по реализации',
					width:'96',
					dataIndex:'СчетУчетаНДСПоРеализации',
					flex:1,
				},
				{
					text:'Субконто (БУ)',
					width:'120',
					dataIndex:'СубконтоБУ',
					flex:1,
				},
				{
					text:'Сторнирующая запись доп. листа',
					width:'80',
					dataIndex:'СторнирующаяЗаписьДопЛиста',
					flex:1,
				},
				{
					text:'Страна происхождения',
					width:'103',
					dataIndex:'СтранаПроисхождения',
					flex:1,
				},
				{
					text:'Номер ГТД',
					width:'82',
					dataIndex:'НомерГТД',
					flex:1,
				},
				{
					text:'Событие',
					width:'100',
					dataIndex:'Событие',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтражениеРеализацииТоваровИУслугНДС/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СерияНоменклатуры',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'Количество',
					},
					{
						name:'Цена',
					},
					{
						name:'Сумма',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаНДС',
					},
					{
						name:'Всего',
					},
					{
						name:'СчетУчетаБУ',
					},
					{
						name:'СчетДоходовБУ',
					},
					{
						name:'СчетУчетаНДСПоРеализации',
					},
					{
						name:'СубконтоБУ',
					},
					{
						name:'СторнирующаяЗаписьДопЛиста',
					},
					{
						name:'СтранаПроисхождения',
					},
					{
						name:'НомерГТД',
					},
					{
						name:'Событие',
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
						var грид = Ext.getCmp('ТоварыИУслуги');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия");
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
			style: 'position:absolute;left:6px;top:6px;width:642px;height:24px;',
			width: 642,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'ДокументыОплаты',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:642px;height:164px;',
			height: 164,width: 642,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Дата оплаты',
					width:'80',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
				{
					text:'Документ оплаты',
					width:'120',
					dataIndex:'ДокументОплаты',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтражениеРеализацииТоваровИУслугНДС/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'ДокументОплаты',
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
						var грид = Ext.getCmp('ДокументыОплаты');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия");
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
			xtype: 'label',
			name: 'НадписьГрузоотправитель',
			text: 'Грузоотправитель:',
			style: 'position:absolute;left:6px;top:6px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Грузоотправитель.Представление',
			width: 209,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:108px;top:6px;width:209px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьГрузополучатель',
			text: 'Грузополучатель:',
			style: 'position:absolute;left:6px;top:31px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Грузополучатель.Представление',
			width: 209,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:108px;top:31px;width:209px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьТоварыИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:8px;top:377px;width:458px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:470px;top:377px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Всего',
			width: 122,
			height: 17,
			style: 'position:absolute;left:542px;top:377px;width:122px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:470px;top:399px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВсегоНДС',
			width: 122,
			height: 17,
			style: 'position:absolute;left:542px;top:399px;width:122px;height:17px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Запись доп. листа за период:',
			style: 'position:absolute;left:317px;top:57px;width:169px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'КорректируемыйПериод',
			width: 80,
			height: 19,
			style: 'position:absolute;left:490px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать сторнирующие записи доп. листов вручную',
			style: 'position:absolute;left:317px;top:81px;width:347px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать проводки',
			style: 'position:absolute;left:317px;top:105px;width:141px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать документ расчетов как счет-фактуру',
			style: 'position:absolute;left:317px;top:129px;width:347px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:448px;width:672px;height:25px;',
			width: 672,
			height: 25,
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