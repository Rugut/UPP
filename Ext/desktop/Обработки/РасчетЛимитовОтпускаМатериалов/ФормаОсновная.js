Ext.require(['Данные.Обработки.РасчетЛимитовОтпускаМатериалов'], function () 
{
	Ext.define('Обработки.РасчетЛимитовОтпускаМатериалов.ФормаОсновная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:769px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Расчет лимитов отпуска материалов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:769px;height:25px;',
			width: 769,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:753px;height:384px;',
			height: 384,width: 753,
			items:
			[
				{
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Планы производства в размере (%)',
			style: 'position:absolute;left:13px;top:26px;width:215px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Планы продаж в размере (%)',
			style: 'position:absolute;left:13px;top:50px;width:215px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПланыПроизводстваПроцент',
			style: 'position:absolute;left:228px;top:26px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПланыПродажПроцент',
			style: 'position:absolute;left:228px;top:50px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПланыПроизводстваДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:398px;top:26px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПланыПроизводстваДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:498px;top:26px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПланыПроизводстваНаПериодС',
			text: 'на период с',
			style: 'position:absolute;left:318px;top:26px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьПланыПроизводстваПо',
			text: 'по',
			style: 'position:absolute;left:478px;top:26px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПланыПроизводства',
			text: '...',
			style: 'position:absolute;left:583px;top:26px;width:20px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПланыПродажДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:398px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПланыПродажДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:498px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПланыПродажНаПериодС',
			text: 'на период с',
			style: 'position:absolute;left:318px;top:50px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьПланыПродажПо',
			text: 'по',
			style: 'position:absolute;left:478px;top:50px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПланыПродаж',
			text: '...',
			style: 'position:absolute;left:583px;top:50px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Производство',
			style: 'position:absolute;left:6px;top:6px;width:739px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Исключить',
			style: 'position:absolute;left:618px;top:26px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Исключить',
			style: 'position:absolute;left:618px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заказы покупателей в размере (%)',
			style: 'position:absolute;left:13px;top:97px;width:215px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЗаказыПокупателейПроцент',
			style: 'position:absolute;left:228px;top:97px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ЗаказыПокупателейДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:398px;top:97px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ЗаказыПокупателейДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:498px;top:97px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказыПокупателейНаПериодС',
			text: 'на период с',
			style: 'position:absolute;left:318px;top:97px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказыПокупателейПо',
			text: 'по',
			style: 'position:absolute;left:478px;top:97px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаЗаказыПокупателей',
			text: '...',
			style: 'position:absolute;left:583px;top:97px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Заказы',
			style: 'position:absolute;left:6px;top:76px;width:739px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Исключить',
			style: 'position:absolute;left:618px;top:97px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Внутренние заказы в размере (%)',
			style: 'position:absolute;left:13px;top:121px;width:215px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВнутренниеЗаказыПроцент',
			style: 'position:absolute;left:228px;top:121px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ВнутренниеЗаказыДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:398px;top:121px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ВнутренниеЗаказыДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:498px;top:121px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВнутренниеЗаказыНаПериодС',
			text: 'на период с',
			style: 'position:absolute;left:318px;top:121px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьВнутренниеЗаказыПо',
			text: 'по',
			style: 'position:absolute;left:478px;top:121px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаВнутренниеЗаказы',
			text: '...',
			style: 'position:absolute;left:583px;top:121px;width:20px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Исключить',
			style: 'position:absolute;left:618px;top:121px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Расход со склада в размере (%)',
			style: 'position:absolute;left:13px;top:167px;width:215px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Расход на выпуск в размере (%)',
			style: 'position:absolute;left:13px;top:191px;width:215px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'РасходСоСкладаПроцент',
			style: 'position:absolute;left:228px;top:167px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'РасходНаВыпускПроцент',
			style: 'position:absolute;left:228px;top:191px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'РасходСоСкладаДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:398px;top:167px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'РасходСоСкладаДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:498px;top:167px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасходСоСкладаНаПериодС',
			text: 'на период с',
			style: 'position:absolute;left:318px;top:167px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасходСоСкладаПо',
			text: 'по',
			style: 'position:absolute;left:478px;top:167px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаРасходСоСклада',
			text: '...',
			style: 'position:absolute;left:583px;top:167px;width:20px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'РасходНаВыпускДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:398px;top:191px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'РасходНаВыпускДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:498px;top:191px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасходНаВыпускНаПериодС',
			text: 'на период с',
			style: 'position:absolute;left:318px;top:191px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасходНаВыпускПо',
			text: 'по',
			style: 'position:absolute;left:478px;top:191px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаРасходНаВыпуск',
			text: '...',
			style: 'position:absolute;left:583px;top:191px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Фактический расход',
			style: 'position:absolute;left:6px;top:146px;width:739px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Исключить',
			style: 'position:absolute;left:618px;top:167px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Исключить',
			style: 'position:absolute;left:618px;top:191px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Дополнительно',
			style: 'position:absolute;left:6px;top:217px;width:739px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить результат расчета (%)',
			style: 'position:absolute;left:13px;top:238px;width:195px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИзменитьРезультатРасчетаПроцент',
			style: 'position:absolute;left:228px;top:238px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатРасчетаОкруглитьДо',
			text: 'округлить до:',
			style: 'position:absolute;left:318px;top:238px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:398px;top:238px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:483px;top:238px;width:262px;height:19px;',
			width: 262,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			id: 'Отбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:94px;width:739px;height:243px;',
			height: 243,width: 739,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'120',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'80',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'240',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетЛимитовОтпускаМатериалов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
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
						var грид = Ext.getCmp('Отбор');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетЛимитовОтпускаМатериалов.ФормаОсновнаяСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетЛимитовОтпускаМатериалов.ФормаОсновнаяСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:70px;width:739px;height:24px;',
			width: 739,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:6px;top:339px;width:739px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:6px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Подразделение.Представление',
			width: 650,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:95px;top:6px;width:650px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РасчетЛимитовОтпускаМатериалов.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетЛимитовОтпускаМатериалов.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РасчетЛимитовОтпускаМатериалов.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетЛимитовОтпускаМатериалов.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСклад',
			text: 'Склад:',
			style: 'position:absolute;left:6px;top:30px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Склад.Представление',
			width: 650,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:95px;top:30px;width:650px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РасчетЛимитовОтпускаМатериалов.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетЛимитовОтпускаМатериалов.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РасчетЛимитовОтпускаМатериалов.ФормаОсновнаяСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РасчетЛимитовОтпускаМатериалов.ФормаОсновнаяСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Отбор',
			style: 'position:absolute;left:6px;top:54px;width:739px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:733px;height:24px;',
			width: 733,
			height: 24,
			items:
			[
				'-',
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Изменить...',
					tooltip:'',
				},
			]
		},
		{
			id: 'Лимиты',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:733px;height:328px;',
			height: 328,width: 733,
			columns:
			[
				{
					text:'N',
					width:'39',
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
					text:'Периодичность',
					width:'100',
					dataIndex:'Периодичность',
					flex:1,
				},
				{
					text:'Лимит отпуска',
					width:'100',
					dataIndex:'ЛимитОтпуска',
					flex:1,
				},
				{
					text:'Ед.',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'К.',
					width:'45',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Контролировать лимит',
					width:'68',
					dataIndex:'КонтролироватьЛимит',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетЛимитовОтпускаМатериалов/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Периодичность',
					},
					{
						name:'ЛимитОтпуска',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'КонтролироватьЛимит',
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
						var грид = Ext.getCmp('Лимиты');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.РасчетЛимитовОтпускаМатериалов.ФормаОсновнаяСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетЛимитовОтпускаМатериалов.ФормаОсновнаяСобытия");
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
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:769px;height:25px;',
			width: 769,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'<Назад',
					tooltip:'',
				},
				'-',
				{
					text:'Далее>',
					tooltip:'',
				},
				'-',
				{
					text:'',
					tooltip:'',
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