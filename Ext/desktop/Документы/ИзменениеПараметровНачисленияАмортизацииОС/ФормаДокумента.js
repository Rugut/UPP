Ext.require(['Данные.Документы.ИзменениеПараметровНачисленияАмортизацииОС'], function () 
{
	Ext.define('Документы.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:671px;height:395px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Изменение параметров начисления амортизации ОС',
	
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
			style: 'position:absolute;left:8px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:92px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:174px;top:33px;width:16px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:192px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:154px;width:654px;height:24px;',
			width: 654,
			height: 24,
			items:
			[
				'-',
				'-',
				{
					text:'Подбор',
					tooltip:'',
				},
			]
		},
		{
			id: 'ОС',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:179px;width:654px;height:159px;',
			height: 159,width: 654,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Основное средство',
					width:'200',
					dataIndex:'ОсновноеСредство',
					flex:1,
				},
				{
					text:'Инв. №',
					width:'100',
					dataIndex:'ИнвентарныйНомер',
					flex:1,
				},
				{
					text:'Срок использ. (УУ)',
					width:'120',
					dataIndex:'СрокПолезногоИспользованияУУ',
					flex:1,
				},
				{
					text:'Срок для аморт. (УУ)',
					width:'100',
					dataIndex:'СрокИспользованияДляВычисленияАмортизацииУУ',
					flex:1,
				},
				{
					text:'Объем работ (УУ)',
					width:'124',
					dataIndex:'ОбъемПродукцииРаботУУ',
					flex:1,
				},
				{
					text:'Объем работ для аморт. (УУ)',
					width:'76',
					dataIndex:'ОбъемПродукцииРаботДляВычисленияАмортизацииУУ',
					flex:1,
				},
				{
					text:'Стоимость для вычисления аморт. (УУ)',
					width:'116',
					dataIndex:'СтоимостьДляВычисленияАмортизацииУУ',
					flex:1,
				},
				{
					text:'% год. аморт. (УУ)',
					width:'116',
					dataIndex:'КоэффициентАмортизацииУУ',
					flex:1,
				},
				{
					text:'Коэф. ускорения (УУ)',
					width:'116',
					dataIndex:'КоэффициентУскоренияУУ',
					flex:1,
				},
				{
					text:'Срок использ. (БУ)',
					width:'117',
					dataIndex:'СрокПолезногоИспользованияБУ',
					flex:1,
				},
				{
					text:'Срок для аморт. (БУ)',
					width:'97',
					dataIndex:'СрокИспользованияДляВычисленияАмортизацииБУ',
					flex:1,
				},
				{
					text:'Объем работ (БУ)',
					width:'97',
					dataIndex:'ОбъемПродукцииРаботБУ',
					flex:1,
				},
				{
					text:'Объем работ для аморт. (БУ)',
					width:'97',
					dataIndex:'ОбъемПродукцииРаботДляВычисленияАмортизацииБУ',
					flex:1,
				},
				{
					text:'Стоимость для вычисления аморт. (БУ)',
					width:'116',
					dataIndex:'СтоимостьДляВычисленияАмортизацииБУ',
					flex:1,
				},
				{
					text:'% год. аморт. (БУ)',
					width:'116',
					dataIndex:'КоэффициентАмортизацииБУ',
					flex:1,
				},
				{
					text:'Коэф. ускорения (БУ)',
					width:'116',
					dataIndex:'КоэффициентУскоренияБУ',
					flex:1,
				},
				{
					text:'Срок использ. (НУ)',
					width:'112',
					dataIndex:'СрокПолезногоИспользованияНУ',
					flex:1,
				},
				{
					text:'Изменить начисление по базовой ст. (НУ)',
					width:'220',
					dataIndex:'ИзменятьПараметрыНачисленияПоБазовойСтоимостиНУ',
					flex:1,
				},
				{
					text:'Начислять по базовой ст. (НУ)',
					width:'147',
					dataIndex:'НачислятьПоБазовойСтоимости',
					flex:1,
				},
				{
					text:'Накопленная амортизация (НУ)',
					width:'201',
					dataIndex:'НакопленнаяАмортизацияНУ',
					flex:1,
				},
				{
					text:'Накопленный фактический срок (НУ)',
					width:'201',
					dataIndex:'НакопленныйФактическийСрокИспользованияНУ',
					flex:1,
				},
				{
					text:'Постоянные разницы для вычисления амортизации',
					width:'143',
					dataIndex:'ПРДляВычисленияАмортизации',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИзменениеПараметровНачисленияАмортизацииОС/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ОсновноеСредство',
					},
					{
						name:'ИнвентарныйНомер',
					},
					{
						name:'СрокПолезногоИспользованияУУ',
					},
					{
						name:'СрокИспользованияДляВычисленияАмортизацииУУ',
					},
					{
						name:'ОбъемПродукцииРаботУУ',
					},
					{
						name:'ОбъемПродукцииРаботДляВычисленияАмортизацииУУ',
					},
					{
						name:'СтоимостьДляВычисленияАмортизацииУУ',
					},
					{
						name:'КоэффициентАмортизацииУУ',
					},
					{
						name:'КоэффициентУскоренияУУ',
					},
					{
						name:'СрокПолезногоИспользованияБУ',
					},
					{
						name:'СрокИспользованияДляВычисленияАмортизацииБУ',
					},
					{
						name:'ОбъемПродукцииРаботБУ',
					},
					{
						name:'ОбъемПродукцииРаботДляВычисленияАмортизацииБУ',
					},
					{
						name:'СтоимостьДляВычисленияАмортизацииБУ',
					},
					{
						name:'КоэффициентАмортизацииБУ',
					},
					{
						name:'КоэффициентУскоренияБУ',
					},
					{
						name:'СрокПолезногоИспользованияНУ',
					},
					{
						name:'ИзменятьПараметрыНачисленияПоБазовойСтоимостиНУ',
					},
					{
						name:'НачислятьПоБазовойСтоимости',
					},
					{
						name:'НакопленнаяАмортизацияНУ',
					},
					{
						name:'НакопленныйФактическийСрокИспользованияНУ',
					},
					{
						name:'ПРДляВычисленияАмортизации',
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
						var грид = Ext.getCmp('ОС');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:671px;height:25px;',
			width: 671,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
					tooltip:'',
				},
				{
					text:'Структура подчиненности документа',
					tooltip:'',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
					tooltip:'Открыть свойства',
				},
				{
					text:'',
					tooltip:'Открыть категории',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 240,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:422px;top:57px;width:240px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:343px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 570,
			height: 19,
			style: 'position:absolute;left:92px;top:343px;width:570px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:422px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:496px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражатьВ',
			text: 'Отражать в:',
			style: 'position:absolute;left:336px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Применять параметры в текущем месяце',
			style: 'position:absolute;left:336px;top:84px;width:236px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:82px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:92px;top:57px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:576px;top:33px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Основные средства',
			style: 'position:absolute;left:8px;top:138px;width:654px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьСобытие',
			text: 'Событие:',
			style: 'position:absolute;left:8px;top:83px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Событие.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:83px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСобытиеРегл',
			text: 'Событие регл.:',
			style: 'position:absolute;left:8px;top:108px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СобытиеРегл.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:92px;top:108px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:370px;width:671px;height:25px;',
			width: 671,
			height: 25,
			dock: 'bottom',
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
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
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
	]
	});
});