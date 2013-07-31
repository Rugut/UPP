Ext.require(['Данные.Документы.АктСверкиВзаиморасчетов'], function () 
{
	Ext.define('Документы.АктСверкиВзаиморасчетов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:657px;height:441px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Акт сверки взаиморасчетов',
	
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
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
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
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:328px;top:82px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:82px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ДоговорКонтрагента.Представление',
			width: 236,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:413px;top:82px;width:236px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия");
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
			trigger2Cls: 'x-form-search-trigger',
			name: 'Контрагент.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:82px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:58px;width:80px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:96px;top:58px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия");
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
			style: 'position:absolute;left:96px;top:106px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Сделка:\r\n',
			style: 'position:absolute;left:8px;top:106px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаПериод',
			text: 'За период с ',
			style: 'position:absolute;left:328px;top:33px;width:83px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 96,
			height: 19,
			style: 'position:absolute;left:413px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по',
			style: 'position:absolute;left:513px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:13px;top:389px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 553,
			height: 19,
			style: 'position:absolute;left:96px;top:389px;width:553px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 96,
			height: 19,
			style: 'position:absolute;left:530px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:132px;width:641px;height:250px;',
			height: 250,width: 641,
			items:
			[
				{
					title:'По данным организации',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:4px;top:0px;width:630px;height:24px;',
			items:
			[
				{
					text:'Заполнить по данным управленческого учета',
				},
				{
					text:'Заполнить по данным бухгалтерского учета',
				},
			]
		},
		{
			id: 'ПоДаннымОрганизации',
			xtype: 'grid',
			style: 'position:absolute;left:4px;top:24px;width:631px;height:176px;',
			height: 176,width: 631,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Дата',
					width:'100',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'100',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'100',
					dataIndex:'Сделка',
					flex:1,
				},
				{
					text:'Документ',
					width:'100',
					dataIndex:'Документ',
					flex:1,
				},
				{
					text:'Представление',
					width:'100',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Дебет',
					width:'100',
					dataIndex:'Дебет',
					flex:1,
				},
				{
					text:'Кредит',
					width:'100',
					dataIndex:'Кредит',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АктСверкиВзаиморасчетов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Дата',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'Сделка',
					},
					{
						name:'Документ',
					},
					{
						name:'Представление',
					},
					{
						name:'Дебет',
					},
					{
						name:'Кредит',
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
						var грид = Ext.getCmp('ПоДаннымОрганизации');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.АктСверкиВзаиморасчетов.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АктСверкиВзаиморасчетов.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОстатокНаНачало',
			style: 'position:absolute;left:146px;top:207px;width:77px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: true,
			value: 0,
			name: 'ОстатокНаКонец',
			style: 'position:absolute;left:280px;top:207px;width:87px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: true,
			value: 0,
			name: 'Расхождение',
			style: 'position:absolute;left:569px;top:207px;width:66px;height:19px;',
		},
					]
				},
				{
					title:'По данным контрагента',
					items:
					[
		{
			id: 'ПоДаннымКонтрагента',
			xtype: 'grid',
			style: 'position:absolute;left:4px;top:24px;width:631px;height:176px;',
			height: 176,width: 631,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Дата',
					width:'72',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'92',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'21',
					dataIndex:'Сделка',
					flex:1,
				},
				{
					text:'Документ',
					width:'100',
					dataIndex:'Документ',
					flex:1,
				},
				{
					text:'Представление',
					width:'251',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Дебет',
					width:'62',
					dataIndex:'Дебет',
					flex:1,
				},
				{
					text:'Кредит',
					width:'100',
					dataIndex:'Кредит',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АктСверкиВзаиморасчетов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Дата',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'Сделка',
					},
					{
						name:'Документ',
					},
					{
						name:'Представление',
					},
					{
						name:'Дебет',
					},
					{
						name:'Кредит',
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
						var грид = Ext.getCmp('ПоДаннымКонтрагента');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.АктСверкиВзаиморасчетов.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АктСверкиВзаиморасчетов.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:4px;top:0px;width:631px;height:24px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:6px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: true,
			value: 0,
			name: 'ОстатокНаНачалоКонтрагент',
			style: 'position:absolute;left:148px;top:207px;width:77px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: true,
			value: 0,
			name: 'ОстатокНаКонецКонтрагент',
			style: 'position:absolute;left:282px;top:207px;width:87px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: true,
			value: 0,
			name: 'РасхождениеКонтрагент',
			style: 'position:absolute;left:568px;top:207px;width:67px;height:19px;',
		},
					]
				},
				{
					title:'Счета учета расчетов',
					items:
					[
		{
			id: 'СписокСчетов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:627px;height:178px;',
			height: 178,width: 627,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'УчаствуетВРасчетах',
					flex:1,
				},
				{
					text:'Счет',
					width:'75',
					dataIndex:'Счет',
					flex:1,
				},
				{
					text:'Наименование',
					width:'296',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АктСверкиВзаиморасчетов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'УчаствуетВРасчетах',
					},
					{
						name:'Счет',
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
						var грид = Ext.getCmp('СписокСчетов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.АктСверкиВзаиморасчетов.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.АктСверкиВзаиморасчетов.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:6px;width:627px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:627px;height:24px;',
			items:
			[
				'-',
			]
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:32px;width:627px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 215,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:97px;top:6px;width:215px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия");
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
			name: 'ПредставительОрганизаци.Представление',
			width: 472,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:161px;top:53px;width:472px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия");
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
			name: 'ПредставительКонтрагента.Представление',
			width: 472,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:161px;top:77px;width:472px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОстатки',
			text: 'Остатки ():',
			style: 'position:absolute;left:4px;top:207px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОстаткиКонтрагент',
			text: 'Остатки ():',
			style: 'position:absolute;left:5px;top:207px;width:76px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:630px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВалютаДокумента.Представление',
			width: 96,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:413px;top:58px;width:96px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.АктСверкиВзаиморасчетов.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумента',
			text: 'Валюта сверки:',
			style: 'position:absolute;left:328px;top:58px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сверка согласована',
			style: 'position:absolute;left:328px;top:106px;width:143px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:416px;width:657px;height:25px;',
			dock: 'bottom',
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
					text:'OK',
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
	]
	});
});