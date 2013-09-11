Ext.require(['Данные.Обработки.ПодборНоменклатуры'], function () 
{
	Ext.define('Обработки.ПодборНоменклатуры.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:464px;height:453px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Обработка  Подбор',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:70px;top:8px;width:281px;height:19px;',
			width: 281,
			height: 19,
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновить',
			text: 'Обновить',
			style: 'position:absolute;left:376px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Подбор:',
			style: 'position:absolute;left:8px;top:8px;width:60px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:14px;top:395px;width:82px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:109px;top:395px;width:49px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:14px;top:418px;width:54px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:215px;width:447px;height:161px;',
			height: 161,width: 447,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'НоменклатураДляПодбора',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:1px;width:447px;height:160px;',
			height: 160,width: 447,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Пиктограмма',
					flex:1,
				},
				{
					text:'Код',
					width:'77',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'220',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Артикул',
					width:'100',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Остаток организации',
					width:'60',
					dataIndex:'КоличествоОстатокОрганизации',
					flex:1,
				},
				{
					text:'Свободный остаток',
					width:'60',
					dataIndex:'КоличествоСвободныйОстаток',
					flex:1,
				},
				{
					text:'Заказано',
					width:'82',
					dataIndex:'КоличествоЗаказанное',
					flex:1,
				},
				{
					text:'Цена',
					width:'56',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Лимит',
					width:'56',
					dataIndex:'Лимит',
					flex:1,
				},
				{
					text:'Единица измерения',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Валюта',
					width:'80',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Наименование у контрагента',
					width:'100',
					dataIndex:'НаименованиеНоменклатурыКонтрагента',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'120',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия номенклатуры',
					width:'120',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Склад',
					width:'120',
					dataIndex:'Склад',
					flex:1,
				},
				{
					text:'Качество',
					width:'120',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Артикул у контрагента',
					width:'100',
					dataIndex:'АртикулНоменклатурыКонтрагента',
					flex:1,
				},
				{
					text:'Номенклатура (представление)',
					width:'79',
					dataIndex:'ПредставлениеНоменклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры (представление)',
					width:'47',
					dataIndex:'ПредставлениеХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия номенклатуры (представление)',
					width:'53',
					dataIndex:'ПредставлениеСерияНоменклатуры',
					flex:1,
				},
				{
					text:'Единица измерения (представление)',
					width:'54',
					dataIndex:'ПредставлениеЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Валюта (представление)',
					width:'60',
					dataIndex:'ПредставлениеВалюта',
					flex:1,
				},
				{
					text:'Склад (представление)',
					width:'60',
					dataIndex:'ПредставлениеСклад',
					flex:1,
				},
				{
					text:'Качество (представление)',
					width:'60',
					dataIndex:'ПредставлениеКачество',
					flex:1,
				},
				{
					text:'Запланировано',
					width:'71',
					dataIndex:'Запланировано',
					flex:1,
				},
				{
					text:'Заказано',
					width:'74',
					dataIndex:'Заказано',
					flex:1,
				},
				{
					text:'Резерв',
					width:'78',
					dataIndex:'Резерв',
					flex:1,
				},
				{
					text:'Осталось обеспечить',
					width:'85',
					dataIndex:'ОсталосьОбеспечить',
					flex:1,
				},
				{
					text:'Заказ',
					width:'161',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Заказчик/Контрагент',
					width:'113',
					dataIndex:'ЗаказчикКонтрагент',
					flex:1,
				},
				{
					text:'Состояние заказа',
					width:'93',
					dataIndex:'СостояниеЗаказа',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодборНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Пиктограмма',
					},
					{
						name:'Код',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Артикул',
					},
					{
						name:'КоличествоОстатокОрганизации',
					},
					{
						name:'КоличествоСвободныйОстаток',
					},
					{
						name:'КоличествоЗаказанное',
					},
					{
						name:'Цена',
					},
					{
						name:'Лимит',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Валюта',
					},
					{
						name:'НаименованиеНоменклатурыКонтрагента',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СерияНоменклатуры',
					},
					{
						name:'Склад',
					},
					{
						name:'Качество',
					},
					{
						name:'АртикулНоменклатурыКонтрагента',
					},
					{
						name:'ПредставлениеНоменклатура',
					},
					{
						name:'ПредставлениеХарактеристикаНоменклатуры',
					},
					{
						name:'ПредставлениеСерияНоменклатуры',
					},
					{
						name:'ПредставлениеЕдиницаИзмерения',
					},
					{
						name:'ПредставлениеВалюта',
					},
					{
						name:'ПредставлениеСклад',
					},
					{
						name:'ПредставлениеКачество',
					},
					{
						name:'Запланировано',
					},
					{
						name:'Заказано',
					},
					{
						name:'Резерв',
					},
					{
						name:'ОсталосьОбеспечить',
					},
					{
						name:'Заказ',
					},
					{
						name:'ЗаказчикКонтрагент',
					},
					{
						name:'СостояниеЗаказа',
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
						var грид = Ext.getCmp('НоменклатураДляПодбора');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПодборНоменклатуры.ОсновнаяФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодборНоменклатуры.ОсновнаяФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:73px;top:75px;width:301px;height:25px;',
			width: 301,
			height: 25,
			items:
			[
				{
					text:'Пересчитывать остатки в единицу измерения цены',
					tooltip:'Пересчитывать остатки в единицу измерения цены',
				},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'СправочникНоменклатура',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:447px;height:55px;',
			height: 55,width: 447,
			columns:
			[
				{
					text:' ',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'68',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул ',
					width:'58',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'233',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Единица измерения',
					width:'41',
					dataIndex:'ОсновнаяЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Свободный остаток',
					width:'62',
					dataIndex:'СвободныйОстаток',
					flex:1,
				},
				{
					text:'Остаток организации',
					width:'69',
					dataIndex:'ОстатокОрганизации',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодборНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'ОсновнаяЕдиницаИзмерения',
					},
					{
						name:'СвободныйОстаток',
					},
					{
						name:'ОстатокОрганизации',
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
						var грид = Ext.getCmp('СправочникНоменклатура');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПодборНоменклатуры.ОсновнаяФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодборНоменклатуры.ОсновнаяФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:1px;top:66px;width:445px;height:95px;',
			height: 95,width: 445,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ТабличноеПолеОстаткиТоваров',
			xtype: 'grid',
			style: 'position:absolute;left:108px;top:0px;width:337px;height:69px;',
			height: 69,width: 337,
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
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодборНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.ПодборНоменклатуры.ОсновнаяФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодборНоменклатуры.ОсновнаяФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'СписокЦенОстатков',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:101px;height:94px;',
			height: 94,width: 101,
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
					text:'Базовый тип цен',
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
					text:'Округлять в большую сторону',
					width:'100',
					dataIndex:'ОкруглятьВБольшуюСторону',
					flex:1,
				},
				{
					text:'Процент скидки-наценки',
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
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодборНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.ПодборНоменклатуры.ОсновнаяФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодборНоменклатуры.ОсновнаяФормаСобытия");
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
			width: 101,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:344px;top:73px;width:101px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПодборНоменклатуры.ОсновнаяФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодборНоменклатуры.ОсновнаяФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПодборНоменклатуры.ОсновнаяФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодборНоменклатуры.ОсновнаяФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаЦены',
			text: 'Валюта:',
			style: 'position:absolute;left:298px;top:74px;width:42px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипРасчета',
			text: 'Валюта цены:',
			style: 'position:absolute;left:107px;top:74px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:178px;top:74px;width:116px;height:19px;',
			width: 116,
			height: 19,
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
			id: 'СправочникСпецификации',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:447px;height:161px;',
			height: 161,width: 447,
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
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Версия',
					width:'60',
					dataIndex:'КодВерсии',
					flex:1,
				},
				{
					text:'Наименование',
					width:'124',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Активная',
					width:'80',
					dataIndex:'Активная',
					flex:1,
				},
				{
					text:'Вид',
					width:'78',
					dataIndex:'ВидСпецификации',
					flex:1,
				},
				{
					text:'Состояние',
					width:'108',
					dataIndex:'Состояние',
					flex:1,
				},
				{
					text:'Дата утверждения',
					width:'108',
					dataIndex:'ДатаУтверждения',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'100',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодборНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'КодВерсии',
					},
					{
						name:'Наименование',
					},
					{
						name:'Активная',
					},
					{
						name:'ВидСпецификации',
					},
					{
						name:'Состояние',
					},
					{
						name:'ДатаУтверждения',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Комментарий',
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
						var грид = Ext.getCmp('СправочникСпецификации');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПодборНоменклатуры.ОсновнаяФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодборНоменклатуры.ОсновнаяФормаСобытия");
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
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРасчетов',
			width: 120,
			height: 19,
			style: 'position:absolute;left:336px;top:414px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРасчетов',
			text: 'Остатки и цены на:',
			style: 'position:absolute;left:234px;top:414px;width:100px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:8px;top:379px;width:208px;height:64px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоиск',
			text: 'Искать по:',
			style: 'position:absolute;left:8px;top:57px;width:60px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:70px;top:57px;width:117px;height:19px;',
			width: 117,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеПоиска',
			width: 262,
			height: 19,
			style: 'position:absolute;left:193px;top:57px;width:262px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:109px;top:418px;width:103px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьПараметрыПодбора',
			text: 'Здесь будет отображаться информация о способе подбора',
			style: 'position:absolute;left:97px;top:79px;width:358px;height:24px;text-align:right;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:91px;top:79px;width:364px;height:24px;',
			width: 364,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:108px;width:448px;height:102px;',
			height: 102,width: 448,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ДеревоНоменклатуры',
			xtype: 'grid',
			style: 'position:absolute;left:106px;top:0px;width:342px;height:100px;',
			height: 100,width: 342,
			columns:
			[
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодборНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('ДеревоНоменклатуры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПодборНоменклатуры.ОсновнаяФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодборНоменклатуры.ОсновнаяФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:291px;top:19px;width:157px;height:24px;',
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
					tooltip:'Обновить',
				},
				'-',
				{
					text:'',
					tooltip:'Переместить вверх',
				},
				{
					text:'',
					tooltip:'Переместить вниз',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:100px;height:100px;',
			height: 100,width: 100,
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
				{
					items:
					[
		{
			id: 'ДеревоСпецификаций',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:448px;height:102px;',
			height: 102,width: 448,
			columns:
			[
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодборНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('ДеревоСпецификаций');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПодборНоменклатуры.ОсновнаяФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодборНоменклатуры.ОсновнаяФормаСобытия");
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
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:79px;width:84px;height:24px;',
			width: 84,
			height: 24,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Изображение',
					tooltip:'Изображение',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Номенклат.\r\nгруппа:',
			style: 'position:absolute;left:8px;top:28px;width:60px;height:27px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'НоменклатурнаяГруппа.Представление',
			width: 385,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:70px;top:32px;width:385px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПодборНоменклатуры.ОсновнаяФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодборНоменклатуры.ОсновнаяФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПодборНоменклатуры.ОсновнаяФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПодборНоменклатуры.ОсновнаяФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать остатки',
			style: 'position:absolute;left:322px;top:395px;width:134px;height:15px;',
		},
		{
			xtype: 'button',
			name: 'кнСправка',
			text: '',
			style: 'position:absolute;left:355px;top:8px;width:18px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});