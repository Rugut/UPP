Ext.require(['Данные.Документы.ЗаявкаНаРасходованиеСредств'], function () 
{
	Ext.define('Документы.ЗаявкаНаРасходованиеСредств.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:657px;height:372px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документ Заявка на расходование средств',
	
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
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:85px;width:641px;height:159px;',
			height: 159,width: 641,
			items:
			[
				{
					title:'Расчеты с контрагентами',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Контрагент.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:87px;top:6px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетовПодотчетник',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:30px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетовПодотчетник',
			text: 'Курс:',
			style: 'position:absolute;left:6px;top:54px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:633px;height:103px;',
			height: 103,width: 633,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'ПлатежПоОднойСделке',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетов',
			text: 'Сумма <нет валюты>:',
			style: 'position:absolute;left:0px;top:24px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетов',
			text: 'Курс:',
			style: 'position:absolute;left:0px;top:48px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:0px;top:0px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Сделка:\r\n',
			style: 'position:absolute;left:319px;top:0px;width:90px;height:27px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ДоговорКонтрагента.Представление',
			width: 167,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:81px;top:0px;width:167px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
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
			width: 216,
			height: 19,
			style: 'position:absolute;left:409px;top:0px;width:216px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:81px;top:24px;width:100px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КурсВзаиморасчетов',
			style: 'position:absolute;left:81px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПодбор',
			text: 'Подбор',
			style: 'position:absolute;left:255px;top:0px;width:48px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись30',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:319px;top:72px;width:87px;height:31px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяДвиженияДенежныхСредств.Представление',
			width: 216,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:409px;top:72px;width:216px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
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
			name: 'СуммаПлатежа',
			style: 'position:absolute;left:409px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сумма платежа:',
			style: 'position:absolute;left:319px;top:48px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Проект',
			width: 220,
			height: 19,
			style: 'position:absolute;left:81px;top:72px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:0px;top:72px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумент',
			text: 'USD',
			style: 'position:absolute;left:513px;top:48px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументРасчетовСКонтрагентом',
			width: 216,
			height: 19,
			style: 'position:absolute;left:409px;top:24px;width:216px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументРасчетовСКонтрагентом',
			text: 'Док. расчетов:',
			style: 'position:absolute;left:319px;top:27px;width:88px;height:15px;',
		},
					]
				},
				{
					title:'ПлатежПоНесколькимСделкам',
					items:
					[
		{
			id: 'РасшифровкаПлатежа',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:633px;height:79px;',
			height: 79,width: 633,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'141',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'150',
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
					width:'88',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Курс взаиморасчетов',
					width:'99',
					dataIndex:'КурсВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма платежа',
					width:'101',
					dataIndex:'СуммаПлатежа',
					flex:1,
				},
				{
					text:'Статья движения денежных средств',
					width:'200',
					dataIndex:'СтатьяДвиженияДенежныхСредств',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаявкаНаРасходованиеСредств/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'СтатьяДвиженияДенежныхСредств',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьИтогоСписок',
			text: 'Итого платежей по списку:',
			style: 'position:absolute;left:322px;top:0px;width:301px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:325px;top:78px;width:88px;height:31px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись32',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:325px;top:30px;width:82px;height:31px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись33',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:325px;top:30px;width:82px;height:31px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьРедактировать',
			text: 'Редактировать:',
			style: 'position:absolute;left:326px;top:6px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Сумма платежа:',
			style: 'position:absolute;left:327px;top:54px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент2',
			text: 'Контрагент:',
			style: 'position:absolute;left:325px;top:6px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Без разбиения',
			style: 'position:absolute;left:415px;top:6px;width:100px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Списком',
			style: 'position:absolute;left:520px;top:6px;width:108px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Выдача подотчетнику',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:6px;top:6px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВалютаВзаиморасчетовПодотчетника.Представление',
			width: 100,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:415px;top:6px;width:100px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаВзаиморасчетовПодотчетника',
			text: 'Валюта:',
			style: 'position:absolute;left:325px;top:6px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФизЛицо',
			width: 220,
			height: 19,
			style: 'position:absolute;left:87px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФизЛицо',
			text: 'Подотчетник:',
			style: 'position:absolute;left:6px;top:6px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'РасчетныйДокумент',
			width: 218,
			height: 19,
			style: 'position:absolute;left:415px;top:30px;width:218px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокумент',
			text: 'Документ:',
			style: 'position:absolute;left:325px;top:30px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПогашенияАванса',
			width: 100,
			height: 19,
			style: 'position:absolute;left:87px;top:102px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПогашенияАванса',
			text: 'Погасить до:',
			style: 'position:absolute;left:6px;top:102px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КурсВзаиморасчетовПодотчетника',
			style: 'position:absolute;left:87px;top:54px;width:100px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаВзаиморасчетовПодотчетника',
			style: 'position:absolute;left:87px;top:30px;width:100px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяДвиженияДенежныхСредств1.Представление',
			width: 218,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:415px;top:78px;width:218px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса1',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:188px;top:54px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаПлатежаПодотчет',
			style: 'position:absolute;left:415px;top:54px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Проект1',
			width: 220,
			height: 19,
			style: 'position:absolute;left:87px;top:78px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект1',
			text: 'Проект:',
			style: 'position:absolute;left:6px;top:78px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумент1',
			text: 'USD',
			style: 'position:absolute;left:519px;top:54px;width:40px;height:19px;',
		},
					]
				},
				{
					title:'Выдача кассе ККМ',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КассаККМ',
			width: 218,
			height: 19,
			style: 'position:absolute;left:415px;top:6px;width:218px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяДвиженияДенежныхСредств2.Представление',
			width: 218,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:415px;top:30px;width:218px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетовПодотчетник1',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:6px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаВзаиморасчетовККМ',
			style: 'position:absolute;left:87px;top:6px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Проект2',
			width: 220,
			height: 19,
			style: 'position:absolute;left:87px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект2',
			text: 'Проект:',
			style: 'position:absolute;left:6px;top:30px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумент2',
			text: 'USD',
			style: 'position:absolute;left:191px;top:6px;width:40px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидВыдачиДенежныхСредств.Представление',
			width: 82,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:325px;top:6px;width:82px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
				{
					title:'Прочие расходы',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяДвиженияДенежныхСредств3.Представление',
			width: 218,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:415px;top:30px;width:218px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетовПодотчетник2',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:6px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаВзаиморасчетовПрочие',
			style: 'position:absolute;left:87px;top:6px;width:100px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'КонтрагентПрочие.Представление',
			width: 218,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:415px;top:6px;width:218px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Проект3',
			width: 220,
			height: 19,
			style: 'position:absolute;left:87px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект3',
			text: 'Проект:',
			style: 'position:absolute;left:6px;top:30px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумент3',
			text: 'USD',
			style: 'position:absolute;left:191px;top:6px;width:40px;height:19px;',
		},
					]
				},
				{
					title:'Описание',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Описание',
			style: 'position:absolute;left:6px;top:6px;width:628px;height:127px;',
		},
					]
				},
				{
					title:'Размещение',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:96px;top:6px;width:104px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:205px;top:6px;width:87px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАвтоматическое',
			text: 'Автоматическое:',
			style: 'position:absolute;left:6px;top:6px;width:88px;height:19px;',
		},
		{
			id: 'РазмещениеЗаявки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:54px;width:627px;height:79px;',
			height: 79,width: 627,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Место размещения',
					width:'458',
					dataIndex:'МестоРазмещения',
					flex:1,
				},
				{
					text:'Сумма',
					width:'137',
					dataIndex:'СуммаПлатежа',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаявкаНаРасходованиеСредств/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'МестоРазмещения',
					},
					{
						name:'СуммаПлатежа',
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
						var грид = Ext.getCmp('РазмещениеЗаявки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьИтогоРазмещено',
			text: 'Итого размещено:',
			style: 'position:absolute;left:371px;top:30px;width:262px;height:19px;',
		},
					]
				},
				{
					title:'Бюджетирование',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Сценарий:',
			style: 'position:absolute;left:6px;top:6px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Сценарий.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:87px;top:6px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Статья оборотов:',
			style: 'position:absolute;left:326px;top:6px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СтатьяОборотов.Представление',
			width: 218,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:415px;top:6px;width:218px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Номенклатура:',
			style: 'position:absolute;left:326px;top:30px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номенклатура',
			width: 218,
			height: 19,
			style: 'position:absolute;left:415px;top:30px;width:218px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'КонтрагентОперации.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:87px;top:30px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент1',
			text: 'Контрагент:',
			style: 'position:absolute;left:6px;top:30px;width:81px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСчетКасса',
			text: 'Счет / Касса:',
			style: 'position:absolute;left:334px;top:249px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'БанковскийСчетКасса',
			width: 225,
			height: 19,
			style: 'position:absolute;left:424px;top:249px;width:225px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВалютаДокумента.Представление',
			width: 100,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:56px;width:100px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумента',
			text: 'Валюта:',
			style: 'position:absolute;left:8px;top:56px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:347px;width:657px;height:25px;',
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
			name: 'ФормаОплаты.Представление',
			width: 225,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:424px;top:57px;width:225px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьФормаОплаты',
			text: 'Форма оплаты:',
			style: 'position:absolute;left:334px;top:57px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРасхода',
			text: 'Дата расхода:',
			style: 'position:absolute;left:334px;top:33px;width:90px;height:17px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРасхода',
			width: 88,
			height: 19,
			style: 'position:absolute;left:424px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Ответственный:',
			style: 'position:absolute;left:334px;top:296px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 225,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:424px;top:296px;width:225px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Состояние:',
			style: 'position:absolute;left:8px;top:320px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Состояние.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:320px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:249px;width:88px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:96px;top:249px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: 'Курс:',
			style: 'position:absolute;left:200px;top:56px;width:33px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КурсДокумента',
			style: 'position:absolute;left:233px;top:57px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от',
			style: 'position:absolute;left:177px;top:33px;width:16px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Включать в платежный календарь',
			style: 'position:absolute;left:334px;top:273px;width:198px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаДокумента',
			text: 'Итого по заявке: 150 000 USD',
			style: 'position:absolute;left:8px;top:273px;width:308px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ЦФО.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:296px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЗаявкаНаРасходованиеСредств.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:296px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 225,
			height: 19,
			style: 'position:absolute;left:424px;top:320px;width:225px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись41',
			text: 'Комментарий:',
			style: 'position:absolute;left:334px;top:320px;width:90px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});