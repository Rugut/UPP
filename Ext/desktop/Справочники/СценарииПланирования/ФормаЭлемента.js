Ext.require(['Данные.Справочники.СценарииПланирования'], function () 
{
	Ext.define('Справочники.СценарииПланирования.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:543px;height:291px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Сценарии планирования',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:543px;height:25px;',
			width: 543,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
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
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:529px;height:225px;',
			height: 225,width: 529,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:6px;top:6px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 240,
			height: 19,
			style: 'position:absolute;left:157px;top:6px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Периодичность:',
			style: 'position:absolute;left:6px;top:58px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Периодичность.Представление',
			width: 364,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:157px;top:58px;width:364px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СценарииПланирования.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СценарииПланирования.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СценарииПланирования.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СценарииПланирования.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Детализация планирования:',
			style: 'position:absolute;left:6px;top:32px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ДетализацияПланирования.Представление',
			width: 364,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:157px;top:32px;width:364px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СценарииПланирования.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СценарииПланирования.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СценарииПланирования.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СценарииПланирования.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учет по суммам (планирование продаж, производства, закупок)',
			style: 'position:absolute;left:6px;top:110px;width:350px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учет по количеству (планирование продаж, производства, закупок)',
			style: 'position:absolute;left:6px;top:132px;width:370px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Валюта планирования:',
			style: 'position:absolute;left:6px;top:84px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Валюта.Представление',
			width: 107,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:157px;top:84px;width:107px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СценарииПланирования.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СценарииПланирования.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СценарииПланирования.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СценарииПланирования.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать курсы сценария',
			style: 'position:absolute;left:6px;top:154px;width:180px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:399px;top:6px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 80,
			height: 19,
			style: 'position:absolute;left:441px;top:6px;width:80px;height:19px;',
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
			name: 'ВалютаКурсов.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:58px;top:6px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СценарииПланирования.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СценарииПланирования.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СценарииПланирования.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СценарииПланирования.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'ВалютаТекст',
			text: 'Валюта:',
			style: 'position:absolute;left:6px;top:6px;width:50px;height:19px;',
		},
		{
			id: 'СписокКурсыВалют',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:79px;width:515px;height:120px;',
			height: 120,width: 515,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Период',
					width:'80',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Курс',
					width:'80',
					dataIndex:'Курс',
					flex:1,
				},
				{
					text:'Кратность',
					width:'80',
					dataIndex:'Кратность',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СценарииПланирования").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Период','Курс','Кратность',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СценарииПланирования/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Период',
					},
					{
						name:'Курс',
					},
					{
						name:'Кратность',
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
						var грид = Ext.getCmp('СписокКурсыВалют');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СценарииПланирования.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СценарииПланирования.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:55px;width:515px;height:24px;',
			width: 515,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'label',
			text: 'История курсов',
			style: 'position:absolute;left:6px;top:35px;width:515px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'button',
			name: 'Заполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:144px;top:6px;width:80px;height:19px;',
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
			style: 'position:absolute;left:0px;top:266px;width:543px;height:25px;',
			width: 543,
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