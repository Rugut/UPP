Ext.require(['Данные.Документы.ГТДИмпорт'], function () 
{
	Ext.define('Документы.ГТДИмпорт.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:667px;height:434px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'ГТД по импорту',
	
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
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:382px;width:80px;height:19px;text-align:left;',
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
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 568,
			height: 19,
			style: 'position:absolute;left:90px;top:382px;width:568px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:667px;height:25px;',
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
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Показать/скрыть счета учета',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:422px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:500px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:116px;width:651px;height:258px;',
			height: 258,width: 651,
			items:
			[
				{
					title:'Основные',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТаможенныйСборВал',
			text: 'Таможенный сбор (USD):',
			style: 'position:absolute;left:18px;top:59px;width:148px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'НомерГТД.Представление',
			width: 210,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:6px;width:210px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТаможенныйСборВал',
			style: 'position:absolute;left:168px;top:59px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерГТД',
			text: 'Номер ГТД:',
			style: 'position:absolute;left:6px;top:6px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьТаможенныйШтрафВал',
			text: 'Таможенный штраф (USD):',
			style: 'position:absolute;left:18px;top:113px;width:148px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТаможенныйШтрафВал',
			style: 'position:absolute;left:168px;top:113px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТаможенныйСбор',
			text: 'Таможенный сбор (руб.):',
			style: 'position:absolute;left:18px;top:86px;width:148px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТаможенныйСбор',
			style: 'position:absolute;left:168px;top:86px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТаможенныйШтраф',
			text: 'Таможенный штраф (руб.):',
			style: 'position:absolute;left:18px;top:137px;width:148px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТаможенныйШтраф',
			style: 'position:absolute;left:168px;top:137px;width:83px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Таможенный сбор',
			style: 'position:absolute;left:6px;top:38px;width:636px;height:16px;',
		},
					]
				},
				{
					title:'Разделы ГТД',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:6px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:107px;width:636px;height:24px;',
			items:
			[
				{
					text:'Поиск по штрихкоду',
				},
				'-',
				'-',
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Распределить',
				},
				'-',
			]
		},
		{
			id: 'Товары',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:131px;width:636px;height:76px;',
			height: 76,width: 636,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'120',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
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
					text:'Ед. мест',
					width:'50',
					dataIndex:'ЕдиницаМест',
					flex:1,
				},
				{
					text:'К. мест',
					width:'45',
					dataIndex:'КоэффициентМест',
					flex:1,
				},
				{
					text:'Мест',
					width:'66',
					dataIndex:'КоличествоМест',
					flex:1,
				},
				{
					text:'Количество',
					width:'100',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед.',
					width:'50',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'К.',
					width:'45',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Фактурная стоимость',
					width:'100',
					dataIndex:'ФактурнаяСтоимость',
					flex:1,
				},
				{
					text:'Сумма пошлины ',
					width:'100',
					dataIndex:'СуммаПошлины',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'100',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'Документ партии',
					width:'100',
					dataIndex:'ДокументПартии',
					flex:1,
				},
				{
					text:'Заказ покупателя',
					width:'100',
					dataIndex:'ЗаказПокупателя',
					flex:1,
				},
				{
					text:'Страна происхождения',
					width:'100',
					dataIndex:'СтранаПроисхождения',
					flex:1,
				},
				{
					text:'Номер раздела',
					width:'103',
					dataIndex:'НомерРаздела',
					flex:1,
				},
				{
					text:'Счет учета (БУ)',
					width:'97',
					dataIndex:'СчетУчетаБУ',
					flex:1,
				},
				{
					text:'Счет учета НДС (БУ)',
					width:'100',
					dataIndex:'СчетУчетаНДС',
					flex:1,
				},
				{
					text:'Счет учета (НУ)',
					width:'100',
					dataIndex:'СчетУчетаНУ',
					flex:1,
				},
				{
					text:'Статья затрат (НУ)',
					width:'100',
					dataIndex:'СтатьяЗатратНУ',
					flex:1,
				},
				{
					text:'Подразделение организации',
					width:'100',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Статус партии',
					width:'100',
					dataIndex:'СтатусПартии',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГТДИмпорт/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
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
						name:'ЕдиницаМест',
					},
					{
						name:'КоэффициентМест',
					},
					{
						name:'КоличествоМест',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'ФактурнаяСтоимость',
					},
					{
						name:'СуммаПошлины',
					},
					{
						name:'СуммаНДС',
					},
					{
						name:'ДокументПартии',
					},
					{
						name:'ЗаказПокупателя',
					},
					{
						name:'СтранаПроисхождения',
					},
					{
						name:'НомерРаздела',
					},
					{
						name:'СчетУчетаБУ',
					},
					{
						name:'СчетУчетаНДС',
					},
					{
						name:'СчетУчетаНУ',
					},
					{
						name:'СтатьяЗатратНУ',
					},
					{
						name:'ПодразделениеОрганизации',
					},
					{
						name:'СтатусПартии',
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
						var грид = Ext.getCmp('Товары');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ГТДИмпорт.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ГТДИмпорт.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Всего',
			width: 91,
			height: 19,
			style: 'position:absolute;left:218px;top:212px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВсегоПошлина',
			width: 83,
			height: 19,
			style: 'position:absolute;left:405px;top:212px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВсегоНДС',
			width: 80,
			height: 19,
			style: 'position:absolute;left:562px;top:212px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:636px;height:88px;',
			height: 88,width: 636,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Несколько разделов',
					items:
					[
		{
			id: 'Разделы',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:636px;height:80px;',
			height: 80,width: 636,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Валюта таможенной стоимости',
					width:'100',
					dataIndex:'ТаможеннаяСтоимостьВВалютеРеглУчета',
					flex:1,
				},
				{
					text:'Таможенная стоимость',
					width:'100',
					dataIndex:'ТаможеннаяСтоимость',
					flex:1,
				},
				{
					text:'Валюта пошлины',
					width:'100',
					dataIndex:'ПошлинаВВалюте',
					flex:1,
				},
				{
					text:'Ставка пошлины',
					width:'117',
					dataIndex:'СтавкаПошлины',
					flex:1,
				},
				{
					text:'Сумма пошлины',
					width:'100',
					dataIndex:'СуммаПошлины',
					flex:1,
				},
				{
					text:'Валюта НДС',
					width:'100',
					dataIndex:'НДСВВалюте',
					flex:1,
				},
				{
					text:'% НДС',
					width:'100',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС ',
					width:'100',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'НДС в валюте',
					width:'0',
					dataIndex:'НДСВВалюте',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГТДИмпорт/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ТаможеннаяСтоимостьВВалютеРеглУчета',
					},
					{
						name:'ТаможеннаяСтоимость',
					},
					{
						name:'ПошлинаВВалюте',
					},
					{
						name:'СтавкаПошлины',
					},
					{
						name:'СуммаПошлины',
					},
					{
						name:'НДСВВалюте',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаНДС',
					},
					{
						name:'НДСВВалюте',
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
						var грид = Ext.getCmp('Разделы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ГТДИмпорт.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ГТДИмпорт.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Один раздел',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'НДС в валюте',
			style: 'position:absolute;left:3px;top:54px;width:96px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Пошлина в валюте',
			style: 'position:absolute;left:3px;top:27px;width:120px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтавкаПошлины',
			style: 'position:absolute;left:241px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТаможеннаяСтоимость',
			style: 'position:absolute;left:445px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СтавкаНДС.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:241px;top:54px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаНДС',
			style: 'position:absolute;left:445px;top:54px;width:120px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаПошлины',
			style: 'position:absolute;left:445px;top:27px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Таможенная стоимость в рублях',
			style: 'position:absolute;left:3px;top:0px;width:191px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:91px;width:636px;height:16px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Подразделение.Представление',
			width: 210,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:6px;width:210px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:328px;top:6px;width:84px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 228,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:414px;top:6px;width:228px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетовСКонтрагентом',
			text: 'Счет учета расчетов с таможней:',
			style: 'position:absolute;left:12px;top:27px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Проект',
			width: 210,
			height: 19,
			style: 'position:absolute;left:92px;top:30px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:6px;top:30px;width:86px;height:19px;',
		},
					]
				},
				{
					title:'Счета учета расчетов',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СчетУчетаРасчетовСКонтрагентом.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:242px;top:27px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
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
			name: 'СтатьяПрочихДоходовРасходов.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:563px;top:75px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
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
			name: 'СчетУчетаРасходовБУ.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:242px;top:51px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
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
			name: 'СчетУчетаРасходовНУ.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:242px;top:75px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'fieldset',
			title: ' Расчеты в валюте регламентированного учета',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: ' Расчеты в иностранной валюте ',
			style: 'position:absolute;left:6px;top:102px;width:637px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Счет учета расчетов с таможней (вал.):',
			style: 'position:absolute;left:12px;top:123px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СчетУчетаРасчетовСКонтрагентомВал.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:242px;top:123px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Счет учета расходов по штрафам (БУ) (вал.):',
			style: 'position:absolute;left:12px;top:147px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СчетУчетаРасходовБУВал.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:242px;top:147px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Счет учета расходов по штрафам (НУ) (вал.):',
			style: 'position:absolute;left:12px;top:171px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СчетУчетаРасходовНУВал.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:242px;top:171px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Статья прочих расходов по штрафам (вал.):',
			style: 'position:absolute;left:337px;top:171px;width:223px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяПрочихДоходовРасходовВал.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:563px;top:171px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
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
			name: 'НадписьДоговор',
			text: 'Валютный депозит (EUR):',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:35px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Таможня:',
			style: 'position:absolute;left:336px;top:57px;width:84px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
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
			trigger2Cls: 'x-form-search-trigger',
			name: 'Контрагент.Представление',
			width: 237,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:422px;top:57px;width:237px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:578px;top:33px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорРегл',
			text: 'Депозит на таможне (руб.):',
			style: 'position:absolute;left:336px;top:81px;width:84px;height:35px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:408px;width:667px;height:25px;',
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
					text:'ОК',
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
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ДоговорКонтрагентаРегл.Представление',
			width: 237,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:422px;top:81px;width:237px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ГТДИмпорт.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ГТДИмпорт.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		],
	}],
	dockedItems:
	[
	]
	});
});