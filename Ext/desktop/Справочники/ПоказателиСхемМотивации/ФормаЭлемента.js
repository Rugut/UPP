Ext.require(['Данные.Справочники.ПоказателиСхемМотивации'], function () 
{
	Ext.define('Справочники.ПоказателиСхемМотивации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:413px;height:393px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Показатели схем мотивации',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:39px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 309,
			height: 19,
			style: 'position:absolute;left:96px;top:39px;width:309px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Вид показателя:',
			style: 'position:absolute;left:16px;top:104px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ТипПоказателя.Представление',
			width: 230,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:166px;top:104px;width:230px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокВводаПоказателя',
			text: 'Порядок ввода показателя:',
			style: 'position:absolute;left:16px;top:161px;width:143px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВозможностьИзменения.Представление',
			width: 230,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:166px;top:161px;width:230px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:413px;height:25px;',
			width: 413,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Найти в списке',
					tooltip:'Найти в списке',
					iconCls:'x-FindInList',
				},
				'-',
				{
					text:'Перечитать',
					tooltip:'Перечитать данные объекта',
					iconCls:'x-Reread',
				},
				{
					text:'Скопировать',
					tooltip:'Создать новый копированием',
				},
				{
					text:'Записать',
					tooltip:'Записать объект',
				},
				{
					text:'Записать и закрыть',
					tooltip:'Записать объект и закрыть форму',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
					tooltip:'Найти в списке',
					iconCls:'x-FindInList',
				},
				'-',
				{
					text:'Перечитать',
					tooltip:'Перечитать данные объекта',
					iconCls:'x-Reread',
				},
				{
					text:'Скопировать',
					tooltip:'Создать новый копированием',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Основное',
			style: 'position:absolute;left:8px;top:88px;width:397px;height:99px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидПоказателя.Представление',
			width: 230,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:166px;top:132px;width:230px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВидПоказателя',
			text: 'Назначение показателя:',
			style: 'position:absolute;left:16px;top:132px;width:143px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Идентификатор',
			width: 309,
			height: 19,
			style: 'position:absolute;left:96px;top:65px;width:309px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИдентификатор',
			text: 'Идентификатор:',
			style: 'position:absolute;left:8px;top:65px;width:83px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:193px;width:397px;height:167px;',
			height: 167,width: 397,
			items:
			[
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Является показателем эффективности',
			style: 'position:absolute;left:6px;top:6px;width:230px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ФактическийПоказатель.Представление',
			width: 336,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:28px;top:122px;width:336px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьРасшифровкаПоказательЭффективности',
			text: 'НадписьРасшифровкаПоказательЭффективности',
			style: 'position:absolute;left:34px;top:30px;width:355px;height:21px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасшифровкаТарифнаяСтавка',
			text: 'НадписьРасшифровкаТарифнаяСтавка',
			style: 'position:absolute;left:33px;top:31px;width:356px;height:110px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'В отчёте "Анализ показателей" отражается как:',
			style: 'position:absolute;left:6px;top:55px;width:253px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'фактический показатель',
			style: 'position:absolute;left:12px;top:77px;width:231px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'плановый показатель, соответствует фактическому показателю:',
			style: 'position:absolute;left:12px;top:99px;width:352px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Является тарифной ставкой',
			style: 'position:absolute;left:6px;top:6px;width:186px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасшифровкаТарифнаяСтавкаВалюта',
			text: 'НадписьРасшифровкаТарифнаяСтавкаВалюта',
			style: 'position:absolute;left:33px;top:50px;width:356px;height:91px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'СоставШкалы',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:383px;height:110px;',
			height: 110,width: 383,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'С',
					width:'57',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'67',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
				{
					text:'Размер',
					width:'126',
					dataIndex:'Размер',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ПоказателиСхемМотивации").data,
					fields: ['Ссылка','Картинка','ЗначениеС','ЗначениеПо','Размер',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоказателиСхемМотивации/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
					},
					{
						name:'Размер',
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
						var грид = Ext.getCmp('СоставШкалы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:383px;height:24px;',
			width: 383,
			height: 24,
			items:
			[
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПояснение',
			text: 'НадписьПояснение',
			style: 'position:absolute;left:33px;top:6px;width:356px;height:135px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Является тарифной ставкой',
			style: 'position:absolute;left:6px;top:28px;width:186px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалюта',
			text: 'Валюта:',
			style: 'position:absolute;left:6px;top:6px;width:41px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Валюта.Представление',
			width: 333,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:56px;top:6px;width:333px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРасшифровкаСтажа',
			text: 'НадписьРасшифровкаСтажа',
			style: 'position:absolute;left:33px;top:6px;width:356px;height:135px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРасчетаСуммы',
			text: 'Способ расчета суммы:',
			style: 'position:absolute;left:16px;top:132px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СпособРасчетаСуммы.Представление',
			width: 230,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:166px;top:132px;width:230px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСуммируемыйПоказатель',
			text: 'Суммируемый показатель :',
			style: 'position:absolute;left:16px;top:161px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СуммируемыйПоказатель.Представление',
			width: 230,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:166px;top:161px;width:230px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВидСтажа',
			text: 'Вид стажа:',
			style: 'position:absolute;left:16px;top:161px;width:143px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидСтажа.Представление',
			width: 230,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:166px;top:161px;width:230px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ПоказателиСхемМотивации.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСтажРаботы',
			text: 'Стаж работы с момента приема на работу',
			style: 'position:absolute;left:166px;top:161px;width:230px;height:19px;text-align:left;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:368px;width:413px;height:25px;',
			width: 413,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});