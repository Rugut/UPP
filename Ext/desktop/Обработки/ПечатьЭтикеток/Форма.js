Ext.require(['Данные.Обработки.ПечатьЭтикеток'], function () 
{
	Ext.define('Обработки.ПечатьЭтикеток.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:501px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Обработка  Печать этикеток',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Печатать',
				},
				{
					text:'Отбор',
				},
				{
					text:'Заполнить',
				},
				'-',
					]
				},
				'-',
				{
					text:'Печатать',
				},
				'-',
				{
					text:'Отбор',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Перезаполнить цены',
				},
			]
		},
		{
			id: 'ТабличноеПолеТовары',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:253px;width:764px;height:242px;',
			height: 242,width: 764,
			columns:
			[
				{
					text:'Тип штрихкода',
					width:'93',
					dataIndex:'ТипШтрихкода',
					flex:1,
				},
				{
					text:'Штрихкод',
					width:'145',
					dataIndex:'Штрихкод',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'249',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Количество',
					width:'100',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Единица',
					width:'53',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'151',
					dataIndex:'Характеристика',
					flex:1,
				},
				{
					text:'Серия',
					width:'131',
					dataIndex:'Серия',
					flex:1,
				},
				{
					text:'Качество',
					width:'132',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Цена',
					width:'93',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Валюта',
					width:'49',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Ед.',
					width:'60',
					dataIndex:'ЦеныЕдиница',
					flex:1,
				},
				{
					text:'ПроцентСкидкиНаценки',
					width:'100',
					dataIndex:'ПроцентСкидкиНаценки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПечатьЭтикеток/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ТипШтрихкода',
					},
					{
						name:'Штрихкод',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Характеристика',
					},
					{
						name:'Серия',
					},
					{
						name:'Качество',
					},
					{
						name:'Цена',
					},
					{
						name:'Валюта',
					},
					{
						name:'ЦеныЕдиница',
					},
					{
						name:'ПроцентСкидкиНаценки',
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
						var грид = Ext.getCmp('ТабличноеПолеТовары');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПечатьЭтикеток.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПечатьЭтикеток.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Параметры печати',
			style: 'position:absolute;left:8px;top:168px;width:764px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФорматЭтикетки',
			width: 201,
			height: 19,
			style: 'position:absolute;left:64px;top:206px;width:201px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФормат',
			text: 'Формат:',
			style: 'position:absolute;left:8px;top:207px;width:56px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печатать цену',
			style: 'position:absolute;left:8px;top:185px;width:92px;height:18px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ШиринаЭтикетки',
			style: 'position:absolute;left:349px;top:206px;width:21px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьШирина',
			text: 'Ширина (мм):',
			style: 'position:absolute;left:271px;top:206px;width:71px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВысотаЭтикетки',
			style: 'position:absolute;left:449px;top:206px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВысота',
			text: 'Высота (мм):',
			style: 'position:absolute;left:375px;top:206px;width:68px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Без предварительного просмотра',
			style: 'position:absolute;left:104px;top:185px;width:220px;height:18px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:130px;',
			height: 130,width: 764,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номенклатура',
			width: 250,
			height: 19,
			style: 'position:absolute;left:213px;top:13px;width:250px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номенклатура:',
			style: 'position:absolute;left:6px;top:13px;width:81px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Единица.Представление',
			width: 113,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:90px;top:37px;width:113px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПечатьЭтикеток.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПечатьЭтикеток.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПечатьЭтикеток.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПечатьЭтикеток.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Ед. изм.:',
			style: 'position:absolute;left:6px;top:37px;width:47px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Качество.Представление',
			width: 173,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:290px;top:37px;width:173px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПечатьЭтикеток.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПечатьЭтикеток.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПечатьЭтикеток.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПечатьЭтикеток.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Качество:',
			style: 'position:absolute;left:213px;top:37px;width:71px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Серии:',
			style: 'position:absolute;left:473px;top:37px;width:107px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Характеристики:',
			style: 'position:absolute;left:472px;top:13px;width:107px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТипШтрихкода',
			width: 113,
			height: 19,
			style: 'position:absolute;left:90px;top:61px;width:113px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Тип штрихкода:',
			style: 'position:absolute;left:6px;top:61px;width:83px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ТипЦены.Представление',
			width: 373,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:90px;top:105px;width:373px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПечатьЭтикеток.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПечатьЭтикеток.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПечатьЭтикеток.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПечатьЭтикеток.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'fieldset',
			title: 'Параметры отбора',
			style: 'position:absolute;left:0px;top:0px;width:764px;height:130px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:90px;top:13px;width:113px;height:19px;',
			width: 113,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Валюта.Представление',
			width: 126,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:631px;top:105px;width:126px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ПечатьЭтикеток.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПечатьЭтикеток.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ПечатьЭтикеток.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ПечатьЭтикеток.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Тип цены:',
			style: 'position:absolute;left:6px;top:105px;width:81px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Параметры расчета цены',
			style: 'position:absolute;left:6px;top:85px;width:752px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбирать только внутренние штрихкоды',
			style: 'position:absolute;left:473px;top:60px;width:254px;height:20px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'заполненные',
			style: 'position:absolute;left:584px;top:13px;width:85px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'пустые',
			style: 'position:absolute;left:675px;top:13px;width:55px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'заполненные',
			style: 'position:absolute;left:584px;top:37px;width:87px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'пустые',
			style: 'position:absolute;left:675px;top:37px;width:57px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'В валютах цен',
			style: 'position:absolute;left:469px;top:105px;width:96px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Валюта:',
			style: 'position:absolute;left:570px;top:105px;width:60px;height:19px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Строки для этикеток',
			style: 'position:absolute;left:8px;top:231px;width:764px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоКопий',
			text: 'Количество копий:',
			style: 'position:absolute;left:474px;top:206px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоКопий',
			style: 'position:absolute;left:576px;top:206px;width:51px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});