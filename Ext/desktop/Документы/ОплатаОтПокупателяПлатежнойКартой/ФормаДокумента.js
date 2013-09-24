Ext.require(['Данные.Документы.ОплатаОтПокупателяПлатежнойКартой'], function () 
{
	Ext.define('Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:658px;height:460px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Оплата от покупателя платежной картой',
	
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
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:172px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:14px;top:408px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
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
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 550,
			height: 19,
			style: 'position:absolute;left:100px;top:408px;width:550px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:658px;height:25px;',
			width: 658,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:14px;top:384px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПодразделениеКомпании.Представление',
			width: 210,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:100px;top:384px;width:210px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:328px;top:384px;width:84px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 238,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:412px;top:384px;width:238px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Рамка',
			style: 'position:absolute;left:8px;top:363px;width:642px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:435px;width:658px;height:25px;',
			width: 658,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
					tooltip:'Печать',
				},
				'-',
				{
					text:'Оплатить картой',
					tooltip:'',
				},
				'-',
				{
					text:'Чек',
					tooltip:'Печать чека на фискальном регистраторе',
				},
				'-',
				{
					text:'ОК',
					tooltip:'ОК',
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать',
					iconCls:'x-SaveFile',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:412px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:490px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись32',
			text: 'Отразить в:',
			style: 'position:absolute;left:330px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:568px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:81px;width:642px;height:276px;',
			height: 276,width: 642,
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:6px;top:31px;width:628px;height:220px;',
			height: 220,width: 628,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:0px;top:0px;width:80px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:82px;top:0px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:23px;width:628px;height:197px;',
			height: 197,width: 628,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетов',
			text: 'Сумма:',
			style: 'position:absolute;left:322px;top:48px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Заказ покупателя:\r\n',
			style: 'position:absolute;left:322px;top:0px;width:86px;height:27px;',
		},
		{
			id: 'РасшифровкаПлатежа',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:628px;height:152px;',
			height: 152,width: 628,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'110',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'99',
					dataIndex:'Сделка',
					flex:1,
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'100',
					dataIndex:'ДокументРасчетовСКонтрагентом',
					flex:1,
				},
				{
					text:'Сумма взаиморасчетов',
					width:'100',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Курс взаиморасчетов',
					width:'100',
					dataIndex:'КурсВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма платежа',
					width:'90',
					dataIndex:'СуммаПлатежа',
					flex:1,
				},
				{
					text:'% НДС',
					width:'41',
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
					text:'Счет учета расчетов с контрагентом',
					width:'100',
					dataIndex:'СчетУчетаРасчетовСКонтрагентом',
					flex:1,
				},
				{
					text:'Счет учета расчетов по авансам',
					width:'100',
					dataIndex:'СчетУчетаРасчетовПоАвансам',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОплатаОтПокупателяПлатежнойКартой/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'Сделка',
					},
					{
						name:'ДокументРасчетовСКонтрагентом',
					},
					{
						name:'СуммаВзаиморасчетов',
					},
					{
						name:'КурсВзаиморасчетов',
					},
					{
						name:'СуммаПлатежа',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаНДС',
					},
					{
						name:'СчетУчетаРасчетовСКонтрагентом',
					},
					{
						name:'СчетУчетаРасчетовПоАвансам',
					},
					{
						name:'Проект',
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
						var грид = Ext.getCmp('РасшифровкаПлатежа');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:21px;width:308px;height:24px;',
			width: 308,
			height: 24,
			items:
			[
				{
					text:'По задолженностям',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИтогоСписок',
			text: 'Итого платежей по списку:',
			style: 'position:absolute;left:314px;top:21px;width:307px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Расшифровка платежа',
			style: 'position:absolute;left:0px;top:0px;width:628px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСчетРасчетов',
			text: 'Счет расчетов:',
			style: 'position:absolute;left:322px;top:72px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетАвансов',
			text: 'Счет авансов:',
			style: 'position:absolute;left:322px;top:96px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументРасчетовСКонтрагентом',
			text: 'Док. расчетов:',
			style: 'position:absolute;left:322px;top:28px;width:80px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ДоговорКонтрагента.Представление',
			width: 167,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:82px;top:0px;width:167px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Сделка',
			width: 220,
			height: 19,
			style: 'position:absolute;left:408px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаДокументаРасчеты',
			style: 'position:absolute;left:408px;top:48px;width:100px;height:19px;',
			width: 100,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КурсВзаиморасчетов',
			style: 'position:absolute;left:82px;top:24px;width:90px;height:19px;',
			width: 90,
			height: 19,
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтавкаНДС.Представление',
			width: 90,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:82px;top:48px;width:90px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
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
			style: 'position:absolute;left:82px;top:72px;width:90px;height:19px;',
			width: 90,
			height: 19,
		},
		{
			xtype: 'button',
			name: 'КнопкаПодбор',
			text: 'Подбор',
			style: 'position:absolute;left:254px;top:0px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Проект',
			width: 220,
			height: 19,
			style: 'position:absolute;left:82px;top:96px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:0px;top:96px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаВзаиморасчетов',
			text: 'USD',
			style: 'position:absolute;left:512px;top:48px;width:40px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СчетУчетаРасчетовСКонтрагентом.Представление',
			width: 100,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:408px;top:72px;width:100px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
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
			name: 'СчетУчетаРасчетовПоАвансам.Представление',
			width: 100,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:408px;top:96px;width:100px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументРасчетовСКонтрагентом',
			width: 220,
			height: 19,
			style: 'position:absolute;left:408px;top:24px;width:220px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРедактировать',
			text: 'Редактировать:',
			style: 'position:absolute;left:322px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Без разбиения',
			style: 'position:absolute;left:408px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Списком',
			style: 'position:absolute;left:518px;top:0px;width:64px;height:19px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаДокумента',
			style: 'position:absolute;left:88px;top:6px;width:92px;height:19px;',
			width: 92,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаДокумент',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:6px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумент',
			text: 'USD',
			style: 'position:absolute;left:185px;top:6px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Эквайрер',
			text: 'Эквайрер',
			style: 'position:absolute;left:121px;top:29px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорВзаиморасчетовЭквайрера',
			text: 'Договор взаиморасчетов:',
			style: 'position:absolute;left:286px;top:29px;width:134px;height:19px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДоговорЭквайринга',
			text: 'Договор эквайринга:',
			style: 'position:absolute;left:6px;top:6px;width:110px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ДоговорЭквайринга.Представление',
			width: 514,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:120px;top:6px;width:514px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетовСЭквайрером',
			text: 'Счет расчетов:',
			style: 'position:absolute;left:6px;top:105px;width:110px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'СчетУчетаРасчетовСЭквайером.Представление',
			width: 120,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:120px;top:105px;width:120px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьЭквайрер',
			text: 'Эквайрер:',
			style: 'position:absolute;left:6px;top:29px;width:110px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ДоговорЭквайрера',
			text: 'Договор эквайрера',
			style: 'position:absolute;left:425px;top:29px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентТорговойУступки',
			text: '% торговой уступки:',
			style: 'position:absolute;left:6px;top:75px;width:110px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентТорговойУступки',
			style: 'position:absolute;left:120px;top:75px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаТорговойУступки',
			style: 'position:absolute;left:425px;top:75px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьВидОплаты',
			text: 'Вид оплаты:',
			style: 'position:absolute;left:6px;top:52px;width:110px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВидОплаты.Представление',
			width: 514,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:120px;top:52px;width:514px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
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