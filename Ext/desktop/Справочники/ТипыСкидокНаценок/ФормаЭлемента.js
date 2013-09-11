Ext.require(['Данные.Справочники.ТипыСкидокНаценок'], function () 
{
	Ext.define('Справочники.ТипыСкидокНаценок.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:483px;height:320px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Типы скидок и наценок',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:483px;height:25px;',
			width: 483,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:61px;width:467px;height:226px;',
			height: 226,width: 467,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПроцент',
			text: 'Процент:',
			style: 'position:absolute;left:6px;top:85px;width:99px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентСкидкиНаценки',
			style: 'position:absolute;left:115px;top:85px;width:68px;height:19px;',
			width: 68,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьЗначениеУсловия',
			text: 'Значение условия:',
			style: 'position:absolute;left:6px;top:153px;width:99px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеУсловия',
			width: 226,
			height: 19,
			style: 'position:absolute;left:115px;top:153px;width:226px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалюта',
			text: 'Валюта:',
			style: 'position:absolute;left:345px;top:6px;width:41px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Валюта.Представление',
			width: 68,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:391px;top:6px;width:68px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ТипыСкидокНаценок.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ТипыСкидокНаценок.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ТипыСкидокНаценок.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ТипыСкидокНаценок.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОграничение',
			text: 'Ограничение:',
			style: 'position:absolute;left:191px;top:85px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОграничениеСкидки',
			style: 'position:absolute;left:269px;top:85px;width:65px;height:19px;',
			width: 65,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьУсловие',
			text: 'Условие:',
			style: 'position:absolute;left:6px;top:128px;width:99px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'Условие.Представление',
			width: 344,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:115px;top:129px;width:344px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ТипыСкидокНаценок.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ТипыСкидокНаценок.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ТипыСкидокНаценок.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ТипыСкидокНаценок.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Условие скидки',
			style: 'position:absolute;left:6px;top:109px;width:453px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаУсловия',
			text: '<валюта не выбрана>',
			style: 'position:absolute;left:348px;top:153px;width:111px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКачество',
			text: 'Качество:',
			style: 'position:absolute;left:6px;top:61px;width:99px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Качество.Представление',
			width: 344,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:115px;top:61px;width:344px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ТипыСкидокНаценок.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ТипыСкидокНаценок.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ТипыСкидокНаценок.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ТипыСкидокНаценок.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для всей номенклатуры',
			style: 'position:absolute;left:6px;top:36px;width:144px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для всех получателей',
			style: 'position:absolute;left:188px;top:36px;width:131px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По дням недели',
			style: 'position:absolute;left:359px;top:36px;width:100px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидСкидки',
			text: 'Вид скидки:',
			style: 'position:absolute;left:6px;top:6px;width:99px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидСкидки.Представление',
			width: 219,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:115px;top:6px;width:219px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ТипыСкидокНаценок.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ТипыСкидокНаценок.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ТипыСкидокНаценок.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ТипыСкидокНаценок.ФормаЭлементаСобытия");
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
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ОбщееВремяНачало',
			width: 91,
			height: 19,
			style: 'position:absolute;left:250px;top:181px;width:91px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ОбщееВремяОкончание',
			width: 91,
			height: 19,
			style: 'position:absolute;left:368px;top:181px;width:91px;height:19px;',
		},
		{
			id: 'ВремяПоДнямНедели',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:453px;height:146px;',
			height: 146,width: 453,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Выбран',
					flex:1,
				},
				{
					text:'День недели',
					width:'201',
					dataIndex:'ДеньНедели',
					flex:1,
				},
				{
					text:'Начало',
					width:'68',
					dataIndex:'ВремяНачала',
					flex:1,
				},
				{
					text:'Окончание',
					width:'68',
					dataIndex:'ВремяОкончания',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ТипыСкидокНаценок").data,
					fields: ['Ссылка','Выбран','ДеньНедели','ВремяНачала','ВремяОкончания',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТипыСкидокНаценок/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Выбран',
					},
					{
						name:'ДеньНедели',
					},
					{
						name:'ВремяНачала',
					},
					{
						name:'ВремяОкончания',
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
						var грид = Ext.getCmp('ВремяПоДнямНедели');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ТипыСкидокНаценок.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТипыСкидокНаценок.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:453px;height:24px;',
			width: 453,
			height: 24,
			items:
			[
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:407px;top:33px;width:23px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 40,
			height: 19,
			style: 'position:absolute;left:435px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 307,
			height: 19,
			style: 'position:absolute;left:93px;top:33px;width:307px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:295px;width:483px;height:25px;',
			width: 483,
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