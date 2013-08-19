Ext.require(['Данные.Документы.КорректировкаРеализации'], function () 
{
	Ext.define('Документы.КорректировкаРеализации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:672px;height:485px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Корректировка реализации',
	
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
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:178px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:433px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
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
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 574,
			height: 19,
			style: 'position:absolute;left:90px;top:433px;width:574px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:672px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:428px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:506px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:128px;width:656px;height:257px;',
			height: 257,width: 656,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			id: 'Товары',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:642px;height:207px;',
			height: 207,width: 642,
			columns:
			[
				{
					text:'№',
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
					width:'180',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'180',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия номенклатуры',
					width:'180',
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
					width:'67',
					dataIndex:'КоличествоМест',
					flex:1,
				},
				{
					text:'Ед.',
					width:'40',
					dataIndex:'Единица',
					flex:1,
				},
				{
					text:'К.',
					width:'45',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Количество до корректировки',
					width:'100',
					dataIndex:'КоличествоДоКорректировки',
					flex:1,
				},
				{
					text:'Количество до изменения',
					width:'100',
					dataIndex:'КоличествоДоИзменения',
					flex:1,
				},
				{
					text:'Количество',
					width:'100',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Цена до корректировки',
					width:'100',
					dataIndex:'ЦенаДоКорректировки',
					flex:1,
				},
				{
					text:'Цена до изменения',
					width:'100',
					dataIndex:'ЦенаДоИзменения',
					flex:1,
				},
				{
					text:'Цена',
					width:'100',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Сумма до корректировки',
					width:'100',
					dataIndex:'СуммаДоКорректировки',
					flex:1,
				},
				{
					text:'Сумма до изменения',
					width:'100',
					dataIndex:'СуммаДоИзменения',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'% НДС до изменения',
					width:'100',
					dataIndex:'СтавкаНДСДоИзменения',
					flex:1,
				},
				{
					text:'% НДС',
					width:'100',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС до корректировки',
					width:'100',
					dataIndex:'СуммаНДСДоКорректировки',
					flex:1,
				},
				{
					text:'Сумма НДС до изменения',
					width:'100',
					dataIndex:'СуммаНДСДоИзменения',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'100',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'Всего до корректировки',
					width:'100',
					dataIndex:'ВсегоДоКорректировки',
					flex:1,
				},
				{
					text:'Всего до изменения',
					width:'100',
					dataIndex:'ВсегоДоИзменения',
					flex:1,
				},
				{
					text:'Всего',
					width:'100',
					dataIndex:'Всего',
					flex:1,
				},
				{
					text:'Способ списания',
					width:'100',
					dataIndex:'СпособСписанияОстаткаТоваров',
					flex:1,
				},
				{
					text:'Склад',
					width:'100',
					dataIndex:'Склад',
					flex:1,
				},
				{
					text:'Заказ покупателя',
					width:'101',
					dataIndex:'ЗаказПокупателя',
					flex:1,
				},
				{
					text:'Принадлежность номенклатуры',
					width:'99',
					dataIndex:'ПринадлежностьНоменклатуры',
					flex:1,
				},
				{
					text:'Качество',
					width:'100',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Номер ГТД',
					width:'100',
					dataIndex:'НомерГТД',
					flex:1,
				},
				{
					text:'Страна происхождения',
					width:'100',
					dataIndex:'СтранаПроисхождения',
					flex:1,
				},
				{
					text:'Собственные, счет учета (БУ)',
					width:'100',
					dataIndex:'СчетУчетаБУ',
					flex:1,
				},
				{
					text:'Принятые, счет учета (БУ)',
					width:'100',
					dataIndex:'ПринятыеСчетУчетаБУ',
					flex:1,
				},
				{
					text:'Переданные, собственные (БУ)',
					width:'100',
					dataIndex:'ПереданныеСобственныеБУ',
					flex:1,
				},
				{
					text:'Переданные, принятые (БУ)',
					width:'100',
					dataIndex:'ПереданныеПринятыеБУ',
					flex:1,
				},
				{
					text:'Счет учета (НУ)',
					width:'100',
					dataIndex:'СчетУчетаНУ',
					flex:1,
				},
				{
					text:'Принятые счет учета (НУ)',
					width:'100',
					dataIndex:'ПринятыеСчетУчетаНУ',
					flex:1,
				},
				{
					text:'Переданные, собственные (НУ)',
					width:'100',
					dataIndex:'ПереданныеСобственныеНУ',
					flex:1,
				},
				{
					text:'Переданные принятые (НУ)',
					width:'100',
					dataIndex:'ПереданныеПринятыеНУ',
					flex:1,
				},
				{
					text:'Счет доходов (БУ)',
					width:'100',
					dataIndex:'СчетДоходовБУ',
					flex:1,
				},
				{
					text:'Субконто (БУ)',
					width:'100',
					dataIndex:'СубконтоБУ',
					flex:1,
				},
				{
					text:'Счет расходов (БУ)',
					width:'100',
					dataIndex:'СчетРасходовБУ',
					flex:1,
				},
				{
					text:'Счет доходов (НУ)',
					width:'100',
					dataIndex:'СчетДоходовНУ',
					flex:1,
				},
				{
					text:'Субконто (НУ)',
					width:'100',
					dataIndex:'СубконтоНУ',
					flex:1,
				},
				{
					text:'Счет расходов (НУ)',
					width:'100',
					dataIndex:'СчетРасходовНУ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаРеализации/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Единица',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'КоличествоДоКорректировки',
					},
					{
						name:'КоличествоДоИзменения',
					},
					{
						name:'Количество',
					},
					{
						name:'ЦенаДоКорректировки',
					},
					{
						name:'ЦенаДоИзменения',
					},
					{
						name:'Цена',
					},
					{
						name:'СуммаДоКорректировки',
					},
					{
						name:'СуммаДоИзменения',
					},
					{
						name:'Сумма',
					},
					{
						name:'СтавкаНДСДоИзменения',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаНДСДоКорректировки',
					},
					{
						name:'СуммаНДСДоИзменения',
					},
					{
						name:'СуммаНДС',
					},
					{
						name:'ВсегоДоКорректировки',
					},
					{
						name:'ВсегоДоИзменения',
					},
					{
						name:'Всего',
					},
					{
						name:'СпособСписанияОстаткаТоваров',
					},
					{
						name:'Склад',
					},
					{
						name:'ЗаказПокупателя',
					},
					{
						name:'ПринадлежностьНоменклатуры',
					},
					{
						name:'Качество',
					},
					{
						name:'НомерГТД',
					},
					{
						name:'СтранаПроисхождения',
					},
					{
						name:'СчетУчетаБУ',
					},
					{
						name:'ПринятыеСчетУчетаБУ',
					},
					{
						name:'ПереданныеСобственныеБУ',
					},
					{
						name:'ПереданныеПринятыеБУ',
					},
					{
						name:'СчетУчетаНУ',
					},
					{
						name:'ПринятыеСчетУчетаНУ',
					},
					{
						name:'ПереданныеСобственныеНУ',
					},
					{
						name:'ПереданныеПринятыеНУ',
					},
					{
						name:'СчетДоходовБУ',
					},
					{
						name:'СубконтоБУ',
					},
					{
						name:'СчетРасходовБУ',
					},
					{
						name:'СчетДоходовНУ',
					},
					{
						name:'СубконтоНУ',
					},
					{
						name:'СчетРасходовНУ',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КорректировкаРеализации.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КорректировкаРеализации.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:642px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Серийные номера',
				},
				'-',
				{
					text:'Состав набора',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Услуги',
					items:
					[
		{
			id: 'Услуги',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:642px;height:207px;',
			height: 207,width: 642,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'180',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Содержание до изменения',
					width:'150',
					dataIndex:'СодержаниеДоИзменения',
					flex:1,
				},
				{
					text:'Содержание услуги, доп. сведения',
					width:'150',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'Количество до корректировки',
					width:'100',
					dataIndex:'КоличествоДоКорректировки',
					flex:1,
				},
				{
					text:'Количество до изменения',
					width:'100',
					dataIndex:'КоличествоДоИзменения',
					flex:1,
				},
				{
					text:'Количество',
					width:'100',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Цена до корректировки',
					width:'100',
					dataIndex:'ЦенаДоКорректировки',
					flex:1,
				},
				{
					text:'Цена до изменения',
					width:'100',
					dataIndex:'ЦенаДоИзменения',
					flex:1,
				},
				{
					text:'Цена',
					width:'100',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Сумма до корректировки',
					width:'100',
					dataIndex:'СуммаДоКорректировки',
					flex:1,
				},
				{
					text:'Сумма до изменения',
					width:'100',
					dataIndex:'СуммаДоИзменения',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'% НДС до изменения',
					width:'100',
					dataIndex:'СтавкаНДСДоИзменения',
					flex:1,
				},
				{
					text:'% НДС',
					width:'100',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС до корректировки',
					width:'100',
					dataIndex:'СуммаНДСДоКорректировки',
					flex:1,
				},
				{
					text:'Сумма НДС до изменения',
					width:'100',
					dataIndex:'СуммаНДСДоИзменения',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'100',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'Всего до корректировки',
					width:'100',
					dataIndex:'ВсегоДоКорректировки',
					flex:1,
				},
				{
					text:'Всего до изменения',
					width:'100',
					dataIndex:'ВсегоДоИзменения',
					flex:1,
				},
				{
					text:'Всего',
					width:'100',
					dataIndex:'Всего',
					flex:1,
				},
				{
					text:'Заказ покупателя',
					width:'100',
					dataIndex:'ЗаказПокупателя',
					flex:1,
				},
				{
					text:'Счет доходов (БУ)',
					width:'100',
					dataIndex:'СчетДоходовБУ',
					flex:1,
				},
				{
					text:'Субконто (БУ)',
					width:'100',
					dataIndex:'СубконтоБУ',
					flex:1,
				},
				{
					text:'Счет расходов (БУ)',
					width:'100',
					dataIndex:'СчетРасходовБУ',
					flex:1,
				},
				{
					text:'Счет доходов (НУ)',
					width:'100',
					dataIndex:'СчетДоходовНУ',
					flex:1,
				},
				{
					text:'Субконто (НУ)',
					width:'100',
					dataIndex:'СубконтоНУ',
					flex:1,
				},
				{
					text:'Счет расходов (НУ)',
					width:'100',
					dataIndex:'СчетРасходовНУ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаРеализации/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'СодержаниеДоИзменения',
					},
					{
						name:'Содержание',
					},
					{
						name:'КоличествоДоКорректировки',
					},
					{
						name:'КоличествоДоИзменения',
					},
					{
						name:'Количество',
					},
					{
						name:'ЦенаДоКорректировки',
					},
					{
						name:'ЦенаДоИзменения',
					},
					{
						name:'Цена',
					},
					{
						name:'СуммаДоКорректировки',
					},
					{
						name:'СуммаДоИзменения',
					},
					{
						name:'Сумма',
					},
					{
						name:'СтавкаНДСДоИзменения',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаНДСДоКорректировки',
					},
					{
						name:'СуммаНДСДоИзменения',
					},
					{
						name:'СуммаНДС',
					},
					{
						name:'ВсегоДоКорректировки',
					},
					{
						name:'ВсегоДоИзменения',
					},
					{
						name:'Всего',
					},
					{
						name:'ЗаказПокупателя',
					},
					{
						name:'СчетДоходовБУ',
					},
					{
						name:'СубконтоБУ',
					},
					{
						name:'СчетРасходовБУ',
					},
					{
						name:'СчетДоходовНУ',
					},
					{
						name:'СубконтоНУ',
					},
					{
						name:'СчетРасходовНУ',
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
						var грид = Ext.getCmp('Услуги');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КорректировкаРеализации.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КорректировкаРеализации.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:642px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяПрочихДоходовИРасходов',
			text: 'Статья прочих доходов и расходов:',
			style: 'position:absolute;left:6px;top:6px;width:107px;height:27px;text-align:left;',
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
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 218,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:114px;top:180px;width:218px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КорректировкаРеализации.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаРеализации.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КорректировкаРеализации.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаРеализации.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:39px;width:642px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СуммаВзаиморасчетов',
			width: 80,
			height: 19,
			style: 'position:absolute;left:99px;top:59px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'БанковскийСчетОрганизации.Представление',
			width: 218,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:114px;top:155px;width:218px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КорректировкаРеализации.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаРеализации.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КорректировкаРеализации.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаРеализации.ФормаДокументаСобытия");
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
			trigger3Cls: 'x-form-search-trigger',
			name: 'ГрузоотправительДополнительно.Представление',
			width: 218,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:114px;top:130px;width:218px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КорректировкаРеализации.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаРеализации.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КорректировкаРеализации.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаРеализации.ФормаДокументаСобытия");
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
			trigger3Cls: 'x-form-search-trigger',
			name: 'ГрузополучательДополнительно.Представление',
			width: 218,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:430px;top:130px;width:218px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КорректировкаРеализации.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаРеализации.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КорректировкаРеализации.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаРеализации.ФормаДокументаСобытия");
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
			trigger3Cls: 'x-form-search-trigger',
			name: 'СтатьяПрочихДоходовИРасходов.Представление',
			width: 535,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:113px;top:6px;width:535px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КорректировкаРеализации.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаРеализации.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КорректировкаРеализации.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаРеализации.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:82px;width:642px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресДоставки',
			width: 218,
			height: 19,
			style: 'position:absolute;left:114px;top:105px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДополнениеКАдресуДоставки',
			width: 218,
			height: 19,
			style: 'position:absolute;left:430px;top:105px;width:218px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КорректировкаРеализации.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаРеализации.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КорректировкаРеализации.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаРеализации.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:338px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактура',
			text: 'Счет-фактура:',
			style: 'position:absolute;left:8px;top:388px;width:80px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаСчетФактура',
			text: 'Ввести счет-фактуру',
			style: 'position:absolute;left:90px;top:388px;width:373px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:470px;top:388px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Всего',
			width: 122,
			height: 17,
			style: 'position:absolute;left:542px;top:388px;width:122px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:470px;top:410px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВсегоНДС',
			width: 122,
			height: 17,
			style: 'position:absolute;left:542px;top:410px;width:122px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:460px;width:672px;height:25px;',
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
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:584px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Корректировать',
			text: 'Корректировать:',
			style: 'position:absolute;left:338px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументРеализации',
			text: 'Основание:',
			style: 'position:absolute;left:8px;top:82px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументРеализации',
			width: 220,
			height: 19,
			style: 'position:absolute;left:98px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Бухгалтерский учет прошлого года закрыт для корректировки (отчетность подписана)',
			style: 'position:absolute;left:98px;top:104px;width:566px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаИсправляемыйДокументРеализации',
			text: 'Не указан',
			style: 'position:absolute;left:147px;top:410px;width:316px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'ИсправляемыйДокументРеализацииНадпись',
			text: 'Исправляемый документ:',
			style: 'position:absolute;left:8px;top:410px;width:137px;height:17px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Упр. и регл. учет',
			style: 'position:absolute;left:428px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Только НДС',
			style: 'position:absolute;left:428px;top:81px;width:236px;height:19px;',
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