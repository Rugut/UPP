Ext.require(['Данные.Обработки.РабочееМестоМенеджераПоПродажам'], function () 
{
	Ext.define('Обработки.РабочееМестоМенеджераПоПродажам.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:405px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Рабочее место менеджера по продажам',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			width: 780,
			height: 25,
			items:
			[
				'-',
				{
					text:'Оформить новый заказ (F11)',
				},
				'-',
				{
					text:'Оформить счет на оплату (F12)',
				},
				'-',
				{
					text:'Оформить реализацию (Ctrl+F12)',
				},
				'-',
				{
					text:'Изображение',
				},
			]
		},
		{
			id: 'Номенклатура',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:80px;width:328px;height:181px;',
			height: 181,width: 328,
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
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул ',
					width:'105',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Наименование',
					width:'405',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Полное наименование',
					width:'364',
					dataIndex:'НаименованиеПолное',
					flex:1,
				},
				{
					text:'Ед.хран.ост.',
					width:'68',
					dataIndex:'ЕдиницаХраненияОстатков',
					flex:1,
				},
				{
					text:'Баз.ед.измер.',
					width:'79',
					dataIndex:'БазоваяЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Ставка НДС',
					width:'72',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'132',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Ответственный за покупки',
					width:'151',
					dataIndex:'ОтветственныйМенеджерЗаПокупки',
					flex:1,
				},
				{
					text:'Основной поставщик',
					width:'157',
					dataIndex:'ОсновнойПоставщик',
					flex:1,
				},
				{
					text:'Страна происхождения',
					width:'144',
					dataIndex:'СтранаПроисхождения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РабочееМестоМенеджераПоПродажам/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'НаименованиеПолное',
					},
					{
						name:'ЕдиницаХраненияОстатков',
					},
					{
						name:'БазоваяЕдиницаИзмерения',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'НоменклатурнаяГруппа',
					},
					{
						name:'ОтветственныйМенеджерЗаПокупки',
					},
					{
						name:'ОсновнойПоставщик',
					},
					{
						name:'СтранаПроисхождения',
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
						var грид = Ext.getCmp('Номенклатура');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РабочееМестоМенеджераПоПродажам.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РабочееМестоМенеджераПоПродажам.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеОтбораСпискаНоменклатуры',
			width: 128,
			height: 19,
			style: 'position:absolute;left:208px;top:56px;width:128px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:341px;top:56px;width:431px;height:341px;',
			height: 341,width: 431,
			items:
			[
				{
					items:
					[
		{
			id: 'НоменклатураДерево',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:417px;height:309px;',
			height: 309,width: 417,
			columns:
			[
				{
					text:'Группа номенклатуры',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РабочееМестоМенеджераПоПродажам/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('НоменклатураДерево');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РабочееМестоМенеджераПоПродажам.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РабочееМестоМенеджераПоПродажам.ФормаСобытия");
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
			name: 'Надпись2',
			text: 'Полное наименование:',
			style: 'position:absolute;left:6px;top:6px;width:144px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НаименованиеПолное',
			text: 'Полное наименование',
			style: 'position:absolute;left:155px;top:6px;width:268px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'АртикулНадпись',
			text: 'Артикул:',
			style: 'position:absolute;left:6px;top:26px;width:144px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Артикул',
			text: 'Артикул',
			style: 'position:absolute;left:155px;top:26px;width:268px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ВидНадпись',
			text: 'Вид:',
			style: 'position:absolute;left:6px;top:46px;width:144px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Вид',
			text: 'Вид',
			style: 'position:absolute;left:155px;top:46px;width:268px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ВидНадпись1',
			text: 'Единицы измерения:',
			style: 'position:absolute;left:6px;top:66px;width:144px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ВидНадпись2',
			text: 'Базовая:',
			style: 'position:absolute;left:99px;top:87px;width:51px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ВидНадпись3',
			text: 'Остатков:',
			style: 'position:absolute;left:232px;top:87px;width:57px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ЕдиницаБазовая',
			text: 'Единица базовая',
			style: 'position:absolute;left:155px;top:87px;width:49px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ЕдиницаОстатков',
			text: 'Единица остатков',
			style: 'position:absolute;left:295px;top:87px;width:49px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ВидНадпись4',
			text: 'Ответственный за закупки:',
			style: 'position:absolute;left:6px;top:107px;width:144px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ОтветственныйЗаЗакупки',
			text: 'Ответственный менеджер за закупки',
			style: 'position:absolute;left:155px;top:107px;width:268px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ВидНадпись5',
			text: 'Основной поставщик:',
			style: 'position:absolute;left:6px;top:127px;width:144px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ОсновнойПоставщик',
			text: 'Основной поставщик',
			style: 'position:absolute;left:155px;top:127px;width:268px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ВидНадпись6',
			text: 'Номенклатурная группа:',
			style: 'position:absolute;left:6px;top:147px;width:144px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НоменклатурнаяГруппа',
			text: 'Номенклатурная группа',
			style: 'position:absolute;left:155px;top:147px;width:268px;height:15px;',
		},
		{
			id: 'СвойстваИЗначения',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:167px;width:229px;height:148px;',
			height: 148,width: 229,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Свойство',
					width:'89',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'114',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РабочееМестоМенеджераПоПродажам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Свойство',
					},
					{
						name:'Значение',
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
						var грид = Ext.getCmp('СвойстваИЗначения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РабочееМестоМенеджераПоПродажам.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РабочееМестоМенеджераПоПродажам.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			id: 'Категории',
			xtype: 'grid',
			style: 'position:absolute;left:240px;top:167px;width:183px;height:148px;',
			height: 148,width: 183,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'Принадлежность',
					flex:1,
				},
				{
					text:'Категория',
					width:'136',
					dataIndex:'Категория',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РабочееМестоМенеджераПоПродажам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Принадлежность',
					},
					{
						name:'Категория',
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
						var грид = Ext.getCmp('Категории');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РабочееМестоМенеджераПоПродажам.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РабочееМестоМенеджераПоПродажам.ФормаСобытия");
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
			id: 'ОстаткиДляНовогоКлиента',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:417px;height:204px;',
			height: 204,width: 417,
			columns:
			[
				{
					text:'Характеристика/Склад',
					width:'125',
					dataIndex:'ХарактеристикаСклад',
					flex:1,
				},
				{
					text:'Общий',
					width:'53',
					dataIndex:'Общий',
					flex:1,
				},
				{
					text:'Свободный',
					width:'62',
					dataIndex:'Свободный',
					flex:1,
				},
				{
					text:'Своб.ожид.',
					width:'64',
					dataIndex:'СвободныйОжидаемый',
					flex:1,
				},
				{
					text:'В резерве',
					width:'62',
					dataIndex:'ВРезерве',
					flex:1,
				},
				{
					text:'Ячейка склада',
					width:'86',
					dataIndex:'МестоХранения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РабочееМестоМенеджераПоПродажам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ХарактеристикаСклад',
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
					{
						name:'МестоХранения',
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
						var грид = Ext.getCmp('ОстаткиДляНовогоКлиента');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РабочееМестоМенеджераПоПродажам.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РабочееМестоМенеджераПоПродажам.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:417px;height:27px;',
			width: 417,
			height: 27,
			items:
			[
				{
					text:'Отображать склады',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаЦены',
			text: 'Валюта:',
			style: 'position:absolute;left:212px;top:296px;width:46px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипРасчета',
			text: 'Валюта цены:',
			style: 'position:absolute;left:6px;top:296px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:82px;top:296px;width:125px;height:19px;',
			width: 125,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВалютаЦены.Представление',
			width: 164,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:259px;top:296px;width:164px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РабочееМестоМенеджераПоПродажам.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РабочееМестоМенеджераПоПродажам.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РабочееМестоМенеджераПоПродажам.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РабочееМестоМенеджераПоПродажам.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			id: 'СписокЦенОстатков',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:215px;width:417px;height:76px;',
			height: 76,width: 417,
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
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РабочееМестоМенеджераПоПродажам/ВыбратьПоСсылке/100', timeout: 200},
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
						Ext.require(['Справочники.РабочееМестоМенеджераПоПродажам.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РабочееМестоМенеджераПоПродажам.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:66px;top:54px;width:157px;height:24px;',
			width: 157,
			height: 24,
			items:
			[
				{
					text:'Пометить все типы цен',
				},
				{
					text:'Отменить пометку всех типов цен',
				},
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Переместить вверх',
				},
				{
					text:'Переместить вниз',
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
			text: 'Остатки неотгруженного товара по заказам покупателя',
			style: 'position:absolute;left:6px;top:6px;width:417px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ЗаказыТекущегоПокупателя',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:27px;width:417px;height:129px;',
			height: 129,width: 417,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Заказ покупателя',
					width:'166',
					dataIndex:'ЗаказПокупателя',
					flex:1,
				},
				{
					text:'Дата отгрузки',
					width:'83',
					dataIndex:'ДатаОтгрузки',
					flex:1,
				},
				{
					text:'В заказе',
					width:'60',
					dataIndex:'ОстатокПоЗаказу',
					flex:1,
				},
				{
					text:'В резерве',
					width:'61',
					dataIndex:'ОстатокРезерваПоЗаказу',
					flex:1,
				},
				{
					text:'Проведен',
					width:'50',
					dataIndex:'Проведен',
					flex:1,
				},
				{
					text:'Пометка удаления',
					width:'54',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РабочееМестоМенеджераПоПродажам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ЗаказПокупателя',
					},
					{
						name:'ДатаОтгрузки',
					},
					{
						name:'ОстатокПоЗаказу',
					},
					{
						name:'ОстатокРезерваПоЗаказу',
					},
					{
						name:'Проведен',
					},
					{
						name:'ПометкаУдаления',
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
						var грид = Ext.getCmp('ЗаказыТекущегоПокупателя');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РабочееМестоМенеджераПоПродажам.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РабочееМестоМенеджераПоПродажам.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Товар текущего покупателя размещенный в заказах поставщикам',
			style: 'position:absolute;left:6px;top:161px;width:417px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ЗакзаыТекущегоПокупателяВЗаказахПоставщикам',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:182px;width:417px;height:133px;',
			height: 133,width: 417,
			columns:
			[
				{
					text:'Заказ покупателя',
					width:'104',
					dataIndex:'ЗаказПокупателя',
					flex:1,
				},
				{
					text:'Дата отгрузки',
					width:'82',
					dataIndex:'ДатаОтгрузки',
					flex:1,
				},
				{
					text:'Заказ поставщику',
					width:'104',
					dataIndex:'ЗаказПоставщику',
					flex:1,
				},
				{
					text:'Дата поступления',
					width:'102',
					dataIndex:'ДатаПоступления',
					flex:1,
				},
				{
					text:'Количество',
					width:'57',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РабочееМестоМенеджераПоПродажам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ЗаказПокупателя',
					},
					{
						name:'ДатаОтгрузки',
					},
					{
						name:'ЗаказПоставщику',
					},
					{
						name:'ДатаПоступления',
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
						var грид = Ext.getCmp('ЗакзаыТекущегоПокупателяВЗаказахПоставщикам');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РабочееМестоМенеджераПоПродажам.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РабочееМестоМенеджераПоПродажам.ФормаСобытия");
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
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Контрагент',
			width: 360,
			height: 19,
			style: 'position:absolute;left:412px;top:33px;width:360px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Покупатель:',
			style: 'position:absolute;left:341px;top:33px;width:66px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Номенклатура',
			style: 'position:absolute;left:8px;top:33px;width:328px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:266px;width:328px;height:131px;',
			height: 131,width: 328,
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
			xtype: 'label',
			name: 'Надпись5',
			text: 'содержит:',
			style: 'position:absolute;left:151px;top:56px;width:54px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:8px;top:56px;width:140px;height:19px;',
			width: 140,
			height: 19,
		},
		],
	}],
	dockedItems:
	[
	]
	});
});