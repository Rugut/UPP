Ext.require(['Данные.Обработки.ПакетныйВводДокументов'], function () 
{
	Ext.define('Обработки.ПакетныйВводДокументов.ФормаГлавная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:699px;height:474px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Пакетный ввод документов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:684px;height:433px;',
			height: 433,width: 684,
			items:
			[
				{
					title:'Параметры',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата документов:',
			style: 'position:absolute;left:417px;top:6px;width:92px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаДатаАктуальности',
			width: 85,
			height: 19,
			style: 'position:absolute;left:545px;top:6px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Организация:',
			style: 'position:absolute;left:11px;top:110px;width:70px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ПолеВводаОрганизация.Представление',
			width: 294,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:113px;top:110px;width:294px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПакетныйВводДокументов.ФормаГлавнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПакетныйВводДокументов.ФормаГлавнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПакетныйВводДокументов.ФормаГлавнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПакетныйВводДокументов.ФормаГлавнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отразить в упр. учете',
			style: 'position:absolute;left:417px;top:86px;width:145px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отразить в бух. учете',
			style: 'position:absolute;left:417px;top:110px;width:145px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Склад:',
			style: 'position:absolute;left:11px;top:86px;width:70px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ПолеВводаСклад.Представление',
			width: 294,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:113px;top:86px;width:294px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПакетныйВводДокументов.ФормаГлавнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПакетныйВводДокументов.ФормаГлавнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПакетныйВводДокументов.ФормаГлавнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПакетныйВводДокументов.ФормаГлавнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Распределить:',
			style: 'position:absolute;left:6px;top:6px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:113px;top:6px;width:294px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Параметры цен',
			style: 'position:absolute;left:6px;top:155px;width:669px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Тип цен:',
			style: 'position:absolute;left:11px;top:199px;width:61px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ПолеВводаТипЦен.Представление',
			width: 294,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:113px;top:199px;width:294px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПакетныйВводДокументов.ФормаГлавнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПакетныйВводДокументов.ФормаГлавнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПакетныйВводДокументов.ФормаГлавнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПакетныйВводДокументов.ФормаГлавнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать НДС',
			style: 'position:absolute;left:417px;top:201px;width:106px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Оформлять :',
			style: 'position:absolute;left:11px;top:62px;width:70px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Цена включает НДС',
			style: 'position:absolute;left:535px;top:201px;width:128px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Дополнительно',
			style: 'position:absolute;left:6px;top:252px;width:669px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПолеВводаПодразделение.Представление',
			width: 294,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:113px;top:272px;width:294px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПакетныйВводДокументов.ФормаГлавнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПакетныйВводДокументов.ФормаГлавнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПакетныйВводДокументов.ФормаГлавнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПакетныйВводДокументов.ФормаГлавнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Подразделение:',
			style: 'position:absolute;left:11px;top:272px;width:83px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПолеВводаОтветственный.Представление',
			width: 171,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:504px;top:272px;width:171px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПакетныйВводДокументов.ФормаГлавнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПакетныйВводДокументов.ФормаГлавнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПакетныйВводДокументов.ФормаГлавнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПакетныйВводДокументов.ФормаГлавнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'fieldset',
			title: 'Параметры документов',
			style: 'position:absolute;left:6px;top:42px;width:669px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Расчет цен:',
			style: 'position:absolute;left:11px;top:175px;width:61px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Ответственный:',
			style: 'position:absolute;left:417px;top:272px;width:82px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Действия с документами',
			style: 'position:absolute;left:6px;top:330px;width:669px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Провести',
			style: 'position:absolute;left:11px;top:350px;width:73px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печать реестра сформированных документов',
			style: 'position:absolute;left:113px;top:394px;width:259px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формирование печатных форм документов в количестве',
			style: 'position:absolute;left:113px;top:350px;width:315px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По значениям по умолчанию из договора',
			style: 'position:absolute;left:113px;top:175px;width:233px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Процент скидки:',
			style: 'position:absolute;left:11px;top:223px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаПроцентСкидкиНаценки',
			style: 'position:absolute;left:113px;top:223px;width:101px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаКоличествоЭкземпляров',
			style: 'position:absolute;left:431px;top:350px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Банк / Касса:',
			style: 'position:absolute;left:11px;top:134px;width:70px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаСтруктурнаяЕдиница',
			width: 294,
			height: 19,
			style: 'position:absolute;left:113px;top:134px;width:294px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выписывать счет-фактуру',
			style: 'position:absolute;left:417px;top:62px;width:155px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПоступления',
			text: 'Дата поступления:',
			style: 'position:absolute;left:11px;top:296px;width:100px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПоступления',
			width: 101,
			height: 19,
			style: 'position:absolute;left:113px;top:296px;width:101px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отразить в налог. учете',
			style: 'position:absolute;left:417px;top:134px;width:145px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:113px;top:62px;width:294px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРасчетаОстатков',
			text: 'Дата расчета остатков:',
			style: 'position:absolute;left:417px;top:30px;width:122px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: true,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаДатаРасчетаОстатков',
			width: 85,
			height: 19,
			style: 'position:absolute;left:545px;top:30px;width:85px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Без просмотра',
			style: 'position:absolute;left:229px;top:374px;width:101px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'С просмотром',
			style: 'position:absolute;left:113px;top:374px;width:101px;height:15px;',
		},
			]
		},
					]
				},
				{
					title:'Таблица',
					items:
					[
		{
			id: 'ТабличноеПолеДанных',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:670px;height:377px;',
			height: 377,width: 670,
			columns:
			[
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
					text:'Номенклатура',
					width:'180',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'180',
					dataIndex:'Характеристика',
					flex:1,
				},
				{
					text:'Серия номенклатуры',
					width:'110',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Ед.',
					width:'44',
					dataIndex:'Единица',
					flex:1,
				},
				{
					text:'К.',
					width:'36',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Товар / тара',
					width:'81',
					dataIndex:'ТоварТара',
					flex:1,
				},
				{
					text:'Остаток',
					width:'81',
					dataIndex:'Остаток',
					flex:1,
				},
				{
					text:'Не распределено',
					width:'92',
					dataIndex:'Нераспределено',
					flex:1,
				},
				{
					text:'Заказ покупателя',
					width:'241',
					dataIndex:'Заказ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПакетныйВводДокументов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						name:'Характеристика',
					},
					{
						name:'СерияНоменклатуры',
					},
					{
						name:'Единица',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'ТоварТара',
					},
					{
						name:'Остаток',
					},
					{
						name:'Нераспределено',
					},
					{
						name:'Заказ',
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
						var грид = Ext.getCmp('ТабличноеПолеДанных');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПакетныйВводДокументов.ФормаГлавнаяСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПакетныйВводДокументов.ФормаГлавнаяСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:670px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'Добавить...',
				},
				{
					text:'Удалить колонку',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:449px;width:698px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
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