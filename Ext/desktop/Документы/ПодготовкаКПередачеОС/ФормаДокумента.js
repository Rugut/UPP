Ext.require(['Данные.Документы.ПодготовкаКПередачеОС'], function () 
{
	Ext.define('Документы.ПодготовкаКПередачеОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:723px;height:423px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Подготовка к передаче ОС',
	
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
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:178px;top:33px;width:20px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:200px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:346px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 619,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:346px;width:619px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПодготовкаКПередачеОС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПодготовкаКПередачеОС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПодготовкаКПередачеОС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПодготовкаКПередачеОС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:371px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 619,
			height: 19,
			style: 'position:absolute;left:96px;top:371px;width:619px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 225,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:56px;width:225px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПодготовкаКПередачеОС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПодготовкаКПередачеОС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПодготовкаКПередачеОС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПодготовкаКПередачеОС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСобытие',
			text: 'Событие:',
			style: 'position:absolute;left:8px;top:80px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Событие.Представление',
			width: 225,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:80px;width:225px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПодготовкаКПередачеОС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПодготовкаКПередачеОС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПодготовкаКПередачеОС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПодготовкаКПередачеОС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:432px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:506px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:123px;width:707px;height:24px;',
			items:
			[
				{
					text:'Для списка ОС',
				},
				{
					text:'По наименованию',
				},
			]
		},
		{
			id: 'ОС',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:147px;width:707px;height:194px;',
			height: 194,width: 707,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Основное средство',
					width:'215',
					dataIndex:'ОсновноеСредство',
					flex:1,
				},
				{
					text:'Инв. №',
					width:'63',
					dataIndex:'ИнвентарныйНомер',
					flex:1,
				},
				{
					text:'Стоимость',
					width:'102',
					dataIndex:'Стоимость',
					flex:1,
				},
				{
					text:'Ост. стоимость',
					width:'102',
					dataIndex:'ОстСтоимость',
					flex:1,
				},
				{
					text:'Амортизация',
					width:'90',
					dataIndex:'Амортизация',
					flex:1,
				},
				{
					text:'Аморт. за месяц',
					width:'99',
					dataIndex:'АмортизацияЗаМесяц',
					flex:1,
				},
				{
					text:'Стоимость (БУ)',
					width:'110',
					dataIndex:'СтоимостьБУ',
					flex:1,
				},
				{
					text:'Ост. стоимость (БУ)',
					width:'115',
					dataIndex:'ОстСтоимостьБУ',
					flex:1,
				},
				{
					text:'Амортизация (БУ)',
					width:'119',
					dataIndex:'АмортизацияБУ',
					flex:1,
				},
				{
					text:'Аморт. за месяц (БУ)',
					width:'122',
					dataIndex:'АмортизацияЗаМесяцБУ',
					flex:1,
				},
				{
					text:'Стоимость (НУ)',
					width:'111',
					dataIndex:'СтоимостьНУ',
					flex:1,
				},
				{
					text:'Ост. стоимость (НУ)',
					width:'101',
					dataIndex:'ОстСтоимостьНУ',
					flex:1,
				},
				{
					text:'Амортизация (НУ)',
					width:'118',
					dataIndex:'АмортизацияНУ',
					flex:1,
				},
				{
					text:'Аморт. за месяц (НУ)',
					width:'103',
					dataIndex:'АмортизацияЗаМесяцНУ',
					flex:1,
				},
				{
					text:'Сумма аморт. премии, вкл. в расходы (НУ)',
					width:'120',
					dataIndex:'СуммаКапитальныхВложенийВключаемыхВРасходыНУ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаКПередачеОС/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Стоимость',
					},
					{
						name:'ОстСтоимость',
					},
					{
						name:'Амортизация',
					},
					{
						name:'АмортизацияЗаМесяц',
					},
					{
						name:'СтоимостьБУ',
					},
					{
						name:'ОстСтоимостьБУ',
					},
					{
						name:'АмортизацияБУ',
					},
					{
						name:'АмортизацияЗаМесяцБУ',
					},
					{
						name:'СтоимостьНУ',
					},
					{
						name:'ОстСтоимостьНУ',
					},
					{
						name:'АмортизацияНУ',
					},
					{
						name:'АмортизацияЗаМесяцНУ',
					},
					{
						name:'СуммаКапитальныхВложенийВключаемыхВРасходыНУ',
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
						Ext.require(['Справочники.ПодготовкаКПередачеОС.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодготовкаКПередачеОС.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:723px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтражать',
			text: 'Отражать:',
			style: 'position:absolute;left:346px;top:33px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:580px;top:33px;width:69px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСобытиеРегл',
			text: 'Событие (регл.):',
			style: 'position:absolute;left:344px;top:80px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СобытиеРегл.Представление',
			width: 283,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:432px;top:80px;width:283px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПодготовкаКПередачеОС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПодготовкаКПередачеОС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПодготовкаКПередачеОС.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПодготовкаКПередачеОС.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'fieldset',
			title: 'Основные средства',
			style: 'position:absolute;left:8px;top:107px;width:707px;height:16px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:398px;width:723px;height:25px;',
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