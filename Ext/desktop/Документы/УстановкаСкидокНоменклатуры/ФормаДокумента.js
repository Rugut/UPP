Ext.require(['Данные.Документы.УстановкаСкидокНоменклатуры'], function () 
{
	Ext.define('Документы.УстановкаСкидокНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:638px;height:470px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка скидок номенклатуры',
	
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
			xtype: 'label',
			name: 'НадписьТипСкидки',
			text: 'Тип скидки:',
			style: 'position:absolute;left:334px;top:81px;width:67px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:418px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 536,
			height: 19,
			style: 'position:absolute;left:94px;top:418px;width:536px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:394px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:394px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:445px;width:638px;height:25px;',
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
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ТипСкидкиНаценки.Представление',
			width: 224,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:406px;top:81px;width:224px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПроцент',
			text: 'Процент:',
			style: 'position:absolute;left:294px;top:182px;width:56px;height:19px;text-align:center;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентСкидкиНаценки',
			style: 'position:absolute;left:352px;top:182px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗначениеУсловия',
			text: 'Значение условия (USD):',
			style: 'position:absolute;left:8px;top:103px;width:84px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеУсловия',
			width: 220,
			height: 19,
			style: 'position:absolute;left:94px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалюта',
			text: 'Валюта:',
			style: 'position:absolute;left:334px;top:33px;width:67px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Валюта.Представление',
			width: 224,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:406px;top:33px;width:224px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОграничение',
			text: 'Ограничение (USD):',
			style: 'position:absolute;left:414px;top:182px;width:108px;height:19px;text-align:center;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОграничениеСкидки',
			style: 'position:absolute;left:524px;top:182px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУсловие',
			text: 'Условие:',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'Условие.Представление',
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
					Ext.require(['Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:209px;width:622px;height:180px;',
			height: 180,width: 622,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			id: 'Товары',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:608px;height:130px;',
			height: 130,width: 608,
			columns:
			[
				{
					text:'N',
					width:'22',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код',
					width:'72',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'111',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'212',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'122',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Качество',
					width:'129',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'%',
					width:'50',
					dataIndex:'ПроцентСкидкиНаценки',
					flex:1,
				},
				{
					text:'Огр.',
					width:'50',
					dataIndex:'ОграничениеСкидкиНаценки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаСкидокНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Качество',
					},
					{
						name:'ПроцентСкидкиНаценки',
					},
					{
						name:'ОграничениеСкидкиНаценки',
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
						Ext.require(['Справочники.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Ценовые группы',
					items:
					[
		{
			id: 'ЦеновыеГруппы',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:608px;height:130px;',
			height: 130,width: 608,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Ценовая группа',
					width:'210',
					dataIndex:'ЦеноваяГруппа',
					flex:1,
				},
				{
					text:'Качество',
					width:'180',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'%',
					width:'37',
					dataIndex:'ПроцентСкидкиНаценки',
					flex:1,
				},
				{
					text:'Огр.',
					width:'119',
					dataIndex:'ОграничениеСкидкиНаценки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаСкидокНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ЦеноваяГруппа',
					},
					{
						name:'Качество',
					},
					{
						name:'ПроцентСкидкиНаценки',
					},
					{
						name:'ОграничениеСкидкиНаценки',
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
						var грид = Ext.getCmp('ЦеновыеГруппы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Бонусы',
					items:
					[
		{
			id: 'Бонусы',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:608px;height:130px;',
			height: 130,width: 608,
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
					width:'235',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'235',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Качество',
					width:'127',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Кол-во',
					width:'95',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед.',
					width:'95',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Спец. предложение',
					width:'235',
					dataIndex:'СпецПредложение',
					flex:1,
				},
				{
					text:'Характеристика спец. предложения',
					width:'235',
					dataIndex:'ХарактеристикаСпецПредложения',
					flex:1,
				},
				{
					text:'Кол-во',
					width:'87',
					dataIndex:'КоличествоСпецПредложения',
					flex:1,
				},
				{
					text:'Ед.',
					width:'88',
					dataIndex:'ЕдиницаИзмеренияСпецПредложения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаСкидокНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'СпецПредложение',
					},
					{
						name:'ХарактеристикаСпецПредложения',
					},
					{
						name:'КоличествоСпецПредложения',
					},
					{
						name:'ЕдиницаИзмеренияСпецПредложения',
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
						var грид = Ext.getCmp('Бонусы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Получатели скидки',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДляВсехДней',
			text: 'Для всех дней с:',
			style: 'position:absolute;left:323px;top:135px;width:86px;height:19px;text-align:left;',
		},
		{
			id: 'ПолучателиСкидки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:608px;height:130px;',
			height: 130,width: 608,
			columns:
			[
				{
					text:'N',
					width:'22',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'169',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Получатель',
					width:'207',
					dataIndex:'Получатель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаСкидокНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Контрагент',
					},
					{
						name:'Получатель',
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
						var грид = Ext.getCmp('ПолучателиСкидки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Время действия скидки',
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ОбщееВремяНачало',
			width: 84,
			height: 19,
			style: 'position:absolute;left:416px;top:135px;width:84px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ОбщееВремяОкончание',
			width: 83,
			height: 19,
			style: 'position:absolute;left:531px;top:135px;width:83px;height:19px;',
		},
		{
			id: 'ВремяПоДнямНедели',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:608px;height:106px;',
			height: 106,width: 608,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Выбран',
					flex:1,
				},
				{
					text:'День недели',
					width:'210',
					dataIndex:'ДеньНедели',
					flex:1,
				},
				{
					text:'Начало',
					width:'68',
					dataIndex:'ВремяНачала',
					flex:1,
				},
				{
					text:'Окончание',
					width:'68',
					dataIndex:'ВремяОкончания',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаСкидокНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Выбран',
					},
					{
						name:'ДеньНедели',
					},
					{
						name:'ВремяНачала',
					},
					{
						name:'ВремяОкончания',
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
						var грид = Ext.getCmp('ВремяПоДнямНедели');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия");
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
			name: 'НадписьПериодСкидки',
			text: 'Скидка с:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 80,
			height: 19,
			style: 'position:absolute;left:94px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:176px;top:57px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 120,
			height: 19,
			style: 'position:absolute;left:194px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидСкидки',
			text: 'Вид скидки:',
			style: 'position:absolute;left:334px;top:57px;width:67px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидСкидки.Представление',
			width: 224,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:406px;top:57px;width:224px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для всей номенклатуры',
			style: 'position:absolute;left:14px;top:138px;width:143px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для всех получателей',
			style: 'position:absolute;left:162px;top:138px;width:137px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Значения по умолчанию для таблицы товаров и ценовых групп',
			style: 'position:absolute;left:8px;top:161px;width:622px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По дням недели',
			style: 'position:absolute;left:305px;top:138px;width:100px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКачество',
			text: 'Качество:',
			style: 'position:absolute;left:14px;top:182px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Качество.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:72px;top:182px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.УстановкаСкидокНоменклатуры.ФормаДокументаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:638px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
	});
});