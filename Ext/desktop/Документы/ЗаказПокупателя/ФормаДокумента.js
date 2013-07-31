Ext.require(['Данные.Документы.ЗаказПокупателя'], function () 
{
	Ext.define('Документы.ЗаказПокупателя.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:945px;height:549px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документ Заказ покупателя',
	
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
			style: 'position:absolute;left:13px;top:32px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:232px;top:32px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:498px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 115,
			height: 19,
			style: 'position:absolute;left:113px;top:32px;width:115px;height:19px;',
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
			style: 'position:absolute;left:253px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 847,
			height: 19,
			style: 'position:absolute;left:90px;top:498px;width:847px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:945px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:157px;width:929px;height:291px;',
			height: 291,width: 929,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			id: 'Товары',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:915px;height:241px;',
			height: 241,width: 915,
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
					width:'251',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'250',
					dataIndex:'ХарактеристикаНоменклатуры',
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
					width:'70',
					dataIndex:'КоличествоМест',
					flex:1,
				},
				{
					text:'Количество',
					width:'65',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед.',
					width:'50',
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
					text:'Цена',
					width:'77',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Сумма без скидок',
					width:'100',
					dataIndex:'СуммаБезСкидок',
					flex:1,
				},
				{
					text:'% Руч.ск.',
					width:'53',
					dataIndex:'ПроцентСкидкиНаценки',
					flex:1,
				},
				{
					text:'% Авт.ск.',
					width:'56',
					dataIndex:'ПроцентАвтоматическихСкидок',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'% НДС',
					width:'40',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'80',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'Всего',
					width:'80',
					dataIndex:'Всего',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'166',
					dataIndex:'Спецификация',
					flex:1,
				},
				{
					text:'Размещение',
					width:'184',
					dataIndex:'Размещение',
					flex:1,
				},
				{
					text:'Серия номенклатуры',
					width:'250',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Себестоимость',
					width:'80',
					dataIndex:'ПлановаяСебестоимость',
					flex:1,
				},
				{
					text:'Сумма себестоимости',
					width:'80',
					dataIndex:'СуммаПлановойСебестоимости',
					flex:1,
				},
				{
					text:'Отклонение',
					width:'80',
					dataIndex:'СуммаОтклоненияОтСуммыПлановойСебестоимости',
					flex:1,
				},
				{
					text:'% отклонения',
					width:'80',
					dataIndex:'ПроцентОтклоненияОтСуммыПлановойСебестоимости',
					flex:1,
				},
				{
					text:'Собственные, счет учета (БУ)',
					width:'90',
					dataIndex:'СчетУчетаБУ',
					flex:1,
				},
				{
					text:'Принятые, счет учета (БУ)',
					width:'90',
					dataIndex:'ПринятыеСчетУчетаБУ',
					flex:1,
				},
				{
					text:'Собственные, счет учета (НУ)',
					width:'90',
					dataIndex:'СчетУчетаНУ',
					flex:1,
				},
				{
					text:'Принятые, счет учета (НУ)',
					width:'90',
					dataIndex:'ПринятыеСчетУчетаНУ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаказПокупателя/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Единица',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'Цена',
					},
					{
						name:'СуммаБезСкидок',
					},
					{
						name:'ПроцентСкидкиНаценки',
					},
					{
						name:'ПроцентАвтоматическихСкидок',
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
						name:'Спецификация',
					},
					{
						name:'Размещение',
					},
					{
						name:'СерияНоменклатуры',
					},
					{
						name:'ПлановаяСебестоимость',
					},
					{
						name:'СуммаПлановойСебестоимости',
					},
					{
						name:'СуммаОтклоненияОтСуммыПлановойСебестоимости',
					},
					{
						name:'ПроцентОтклоненияОтСуммыПлановойСебестоимости',
					},
					{
						name:'СчетУчетаБУ',
					},
					{
						name:'ПринятыеСчетУчетаБУ',
					},
					{
						name:'СчетУчетаНУ',
					},
					{
						name:'ПринятыеСчетУчетаНУ',
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
						Ext.require(['Справочники.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗаказПокупателя.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:800px;height:24px;',
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
					text:'Изменить',
				},
				'-',
				{
					text:'Состав набора',
				},
				'-',
				{
					text:'Параметры',
				},
			]
		},
					]
				},
				{
					title:'Материалы',
					items:
					[
		{
			id: 'Материалы',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:915px;height:241px;',
			height: 241,width: 915,
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
					width:'100',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Материал',
					width:'197',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика материала',
					width:'156',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Ед. мест',
					width:'50',
					dataIndex:'ЕдиницаМест',
					flex:1,
				},
				{
					text:'К.мест',
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
					text:'Количество',
					width:'67',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед.',
					width:'50',
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
					text:'Цена',
					width:'57',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Сумма',
					width:'69',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаказПокупателя/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Единица',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'Цена',
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
						var грид = Ext.getCmp('Материалы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗаказПокупателя.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:627px;height:24px;',
			items:
			[
				{
					text:'Заполнить по спецификации',
				},
			]
		},
					]
				},
				{
					title:'Возвратная тара',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетов',
			text: 'Сумма <нет валюты>:',
			style: 'position:absolute;left:6px;top:25px;width:115px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:627px;height:24px;',
			items:
			[
				{
					text:'Очистить размещение',
				},
			]
		},
		{
			id: 'ВозвратнаяТара',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:915px;height:241px;',
			height: 241,width: 915,
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
					width:'250',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Количество',
					width:'65',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Цена',
					width:'80',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Ед. хранения',
					width:'52',
					dataIndex:'ЕдиницаХранения',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Размещение',
					width:'250',
					dataIndex:'Размещение',
					flex:1,
				},
				{
					text:'Счет учета (БУ)',
					width:'100',
					dataIndex:'СчетУчетаБУ',
					flex:1,
				},
				{
					text:'Счет учета (НУ)',
					width:'100',
					dataIndex:'СчетУчетаНУ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаказПокупателя/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Количество',
					},
					{
						name:'Цена',
					},
					{
						name:'ЕдиницаХранения',
					},
					{
						name:'Сумма',
					},
					{
						name:'Размещение',
					},
					{
						name:'СчетУчетаБУ',
					},
					{
						name:'СчетУчетаНУ',
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
						var грид = Ext.getCmp('ВозвратнаяТара');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗаказПокупателя.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Услуги',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:494px;top:67px;width:119px;height:19px;',
		},
		{
			id: 'Услуги',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:915px;height:241px;',
			height: 241,width: 915,
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
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Содержание услуги, доп. сведения',
					width:'100',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'Количество',
					width:'100',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Цена',
					width:'98',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'% Руч.ск.',
					width:'62',
					dataIndex:'ПроцентСкидкиНаценки',
					flex:1,
				},
				{
					text:'% Авт.ск.',
					width:'56',
					dataIndex:'ПроцентАвтоматическихСкидок',
					flex:1,
				},
				{
					text:'Сумма',
					width:'102',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'% НДС',
					width:'66',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'100',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'Всего',
					width:'80',
					dataIndex:'Всего',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаказПокупателя/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Содержание',
					},
					{
						name:'Количество',
					},
					{
						name:'Цена',
					},
					{
						name:'ПроцентСкидкиНаценки',
					},
					{
						name:'ПроцентАвтоматическихСкидок',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗаказПокупателя.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:627px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
				'-',
			]
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
			name: 'ПодразделениеКомпании.Представление',
			width: 316,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:121px;top:67px;width:316px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаказПокупателя.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаказПокупателя.ФормаДокументаСобытия");
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
			name: 'Ответственный.Представление',
			width: 303,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:613px;top:67px;width:303px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаказПокупателя.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаказПокупателя.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:6px;width:915px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:48px;width:915px;height:16px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:121px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:315px;top:25px;width:122px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'КонтактноеЛицо.Представление',
			width: 316,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:121px;top:112px;width:316px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаказПокупателя.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаказПокупателя.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'напомнить',
			style: 'position:absolute;left:494px;top:112px;width:119px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ВремяНапоминания',
			width: 164,
			height: 19,
			style: 'position:absolute;left:613px;top:112px;width:164px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:92px;width:915px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ДисконтнаяКарта.Представление',
			width: 303,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:613px;top:25px;width:303px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаказПокупателя.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаказПокупателя.ФормаДокументаСобытия");
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
			name: 'Грузополучатель.Представление',
			width: 303,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:613px;top:135px;width:303px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаказПокупателя.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаказПокупателя.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресДоставки',
			width: 316,
			height: 19,
			style: 'position:absolute;left:121px;top:158px;width:316px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДополнениеКАдресуДоставки',
			width: 303,
			height: 19,
			style: 'position:absolute;left:613px;top:158px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументОснование',
			width: 316,
			height: 19,
			style: 'position:absolute;left:121px;top:181px;width:316px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Грузоотправитель.Представление',
			width: 316,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:121px;top:135px;width:316px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаказПокупателя.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаказПокупателя.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:204px;width:915px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПоДаннымПокупателя',
			width: 140,
			height: 19,
			style: 'position:absolute;left:613px;top:223px;width:140px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПоДаннымПокупателя',
			width: 140,
			height: 19,
			style: 'position:absolute;left:613px;top:246px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПоДаннымПокупателя',
			text: 'Номер покупателя:',
			style: 'position:absolute;left:494px;top:223px;width:119px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПоДаннымПокупателя',
			text: 'Дата покупателя:',
			style: 'position:absolute;left:494px;top:246px;width:119px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ТекстСостоянияЭД',
			text: 'ТекстСостоянияЭД',
			style: 'position:absolute;left:123px;top:223px;width:314px;height:19px;',
		},
					]
				},
				{
					title:'Автоматические скидки',
					items:
					[
		{
			id: 'ТаблицаАвтоСкидок',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:915px;height:259px;',
			height: 259,width: 915,
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
					text:'Характеристика номенклатуры',
					width:'100',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Качество',
					width:'100',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Процент автоматических скидок',
					width:'100',
					dataIndex:'ПроцентАвтоматическихСкидок',
					flex:1,
				},
				{
					text:'Условие автоматической скидки',
					width:'100',
					dataIndex:'УсловиеАвтоматическойСкидки',
					flex:1,
				},
				{
					text:'Значение условия автоматической скидки',
					width:'100',
					dataIndex:'ЗначениеУсловияАвтоматическойСкидки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаказПокупателя/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Качество',
					},
					{
						name:'ПроцентАвтоматическихСкидок',
					},
					{
						name:'УсловиеАвтоматическойСкидки',
					},
					{
						name:'ЗначениеУсловияАвтоматическойСкидки',
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
						var грид = Ext.getCmp('ТаблицаАвтоСкидок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗаказПокупателя.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
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
			xtype: 'label',
			name: 'НадписьДоговорКонтрагента',
			text: 'Договор:',
			style: 'position:absolute;left:503px;top:80px;width:91px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:13px;top:80px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ДоговорКонтрагента.Представление',
			width: 340,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:597px;top:80px;width:340px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаказПокупателя.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаказПокупателя.ФормаДокументаСобытия");
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
			width: 347,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:113px;top:80px;width:347px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаказПокупателя.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаказПокупателя.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:13px;top:56px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 347,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:113px;top:56px;width:347px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаказПокупателя.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаказПокупателя.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаказПокупателя.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСклад',
			text: 'Склад/группа:',
			style: 'position:absolute;left:13px;top:128px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Склад',
			width: 347,
			height: 19,
			style: 'position:absolute;left:113px;top:128px;width:347px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьТоварыИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:8px;top:454px;width:743px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьДолга',
			text: 'По договору 250 USD, 1 USD = 30 руб.',
			style: 'position:absolute;left:503px;top:104px;width:411px;height:19px;text-align:right;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:922px;top:104px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:762px;top:454px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Всего',
			style: 'position:absolute;left:835px;top:454px;width:102px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:762px;top:476px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:835px;top:476px;width:102px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОтгрузки',
			text: 'Отгрузка:',
			style: 'position:absolute;left:13px;top:104px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОплаты',
			text: 'Оплата:',
			style: 'position:absolute;left:216px;top:104px;width:55px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОплаты',
			width: 99,
			height: 19,
			style: 'position:absolute;left:274px;top:104px;width:99px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОтгрузки',
			width: 99,
			height: 19,
			style: 'position:absolute;left:113px;top:104px;width:99px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтруктурнаяЕдиница',
			text: 'Б/счет, касса:',
			style: 'position:absolute;left:503px;top:128px;width:91px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтруктурнаяЕдиница',
			width: 340,
			height: 19,
			style: 'position:absolute;left:597px;top:128px;width:340px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:524px;width:945px;height:25px;',
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
			xtype: 'label',
			name: 'ИнфНадписьИтоговоеОтклонениеОтПлановойСебестоимости',
			text: 'Отклонение от плановой себестоимости',
			style: 'position:absolute;left:8px;top:476px;width:743px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражать',
			text: 'Отразить в:',
			style: 'position:absolute;left:503px;top:32px;width:91px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:597px;top:32px;width:70px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:675px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:97px;width:212px;height:33px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});