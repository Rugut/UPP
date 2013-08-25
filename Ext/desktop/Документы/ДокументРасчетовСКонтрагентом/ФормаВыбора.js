Ext.require(['Данные.Документы.ДокументРасчетовСКонтрагентом'], function () 
{
	Ext.define('Документы.ДокументРасчетовСКонтрагентом.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:609px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Документы расчетов с контрагентом (ручной учет)',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:192px;width:593px;height:25px;',
			width: 593,
			height: 25,
			items:
			[
				{
					text:'&Просмотр',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Новый документ расчетов (ручной учет)',
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			id: 'ТаблицаДокументов',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:217px;width:593px;height:225px;',
			height: 225,width: 593,
			columns:
			[
				{
					text:'Документ расчетов',
					width:'444',
					dataIndex:'РасчетныйДокумент',
					flex:1,
				},
				{
					text:'Остаток (сумма)',
					width:'123',
					dataIndex:'Остаток',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументРасчетовСКонтрагентом/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'РасчетныйДокумент',
					},
					{
						name:'Остаток',
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
						var грид = Ext.getCmp('ТаблицаДокументов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНачалоПериода',
			text: 'Период:',
			style: 'position:absolute;left:8px;top:8px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'НачПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:94px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонецПериода',
			text: 'по:',
			style: 'position:absolute;left:176px;top:8px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'КонПериода',
			width: 120,
			height: 19,
			style: 'position:absolute;left:194px;top:8px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРежимОтбораДокументов',
			text: 'Режим отбора:',
			style: 'position:absolute;left:14px;top:53px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'РежимОтбораДокументов.Представление',
			width: 150,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:53px;width:150px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия'], function ()
					{
						var объект = Ext.create("Документы.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия'], function ()
					{
						var объект = Ext.create("Документы.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:14px;top:77px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Организация.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:77px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия'], function ()
					{
						var объект = Ext.create("Документы.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия'], function ()
					{
						var объект = Ext.create("Документы.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСчет',
			text: 'Счет учета:',
			style: 'position:absolute;left:14px;top:149px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Счет.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:149px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия'], function ()
					{
						var объект = Ext.create("Документы.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия'], function ()
					{
						var объект = Ext.create("Документы.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:316px;top:8px;width:20px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Контрагент.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:101px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия'], function ()
					{
						var объект = Ext.create("Документы.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия'], function ()
					{
						var объект = Ext.create("Документы.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:14px;top:101px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ДоговорКонтрагента.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:125px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия'], function ()
					{
						var объект = Ext.create("Документы.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия'], function ()
					{
						var объект = Ext.create("Документы.ДокументРасчетовСКонтрагентом.ФормаВыбораСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорКонтрагента',
			text: 'Договор:',
			style: 'position:absolute;left:14px;top:125px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОстаткиОбороты',
			text: 'Остатки:',
			style: 'position:absolute;left:194px;top:149px;width:54px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Документы расчетов с контрагентами',
			style: 'position:absolute;left:8px;top:176px;width:593px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сохранять режим отбора документов',
			style: 'position:absolute;left:250px;top:53px;width:217px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать список при открытии',
			style: 'position:absolute;left:342px;top:8px;width:204px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Отбор',
			style: 'position:absolute;left:8px;top:32px;width:593px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'по дебету',
			style: 'position:absolute;left:250px;top:149px;width:80px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'по кредиту',
			style: 'position:absolute;left:336px;top:149px;width:79px;height:19px;',
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