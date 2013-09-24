Ext.require(['Данные.Справочники.СпецификацииНоменклатуры'], function () 
{
	Ext.define('Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратам',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:337px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Спецификации номенклатуры',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Номенклатура.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:89px;top:32px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Продукция:',
			style: 'position:absolute;left:8px;top:32px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Характеристика продукции:',
			style: 'position:absolute;left:325px;top:28px;width:140px;height:27px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ХарактеристикаНоменклатуры.Представление',
			width: 227,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:465px;top:32px;width:227px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			id: 'ФактЗатраты',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:138px;width:684px;height:166px;',
			height: 166,width: 684,
			columns:
			[
				{
					text:'Материал',
					width:'119',
					dataIndex:'Материал',
					flex:1,
				},
				{
					text:'Характеристика материала',
					width:'131',
					dataIndex:'ХарактеристикаМатериала',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'121',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Ед.',
					width:'50',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Количество',
					width:'73',
					dataIndex:'Количество',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СпецификацииНоменклатуры").data,
					fields: ['Ссылка','Родитель.Представление','Материал','ХарактеристикаМатериала','СтатьяЗатрат','ЕдиницаИзмерения','Количество',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпецификацииНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Материал',
					},
					{
						name:'ХарактеристикаМатериала',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Количество',
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
						var грид = Ext.getCmp('ФактЗатраты');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:112px;width:684px;height:24px;',
			width: 684,
			height: 24,
			items:
			[
				'-',
				{
					text:'Заполнить',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Фактический расход материалов за месяц',
			style: 'position:absolute;left:8px;top:90px;width:684px;height:17px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Спецификация:',
			style: 'position:absolute;left:8px;top:56px;width:81px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Спецификация.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:89px;top:56px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Подразделение:',
			style: 'position:absolute;left:325px;top:8px;width:140px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Подразделение.Представление',
			width: 227,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:465px;top:8px;width:227px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:8px;width:81px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:89px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодПо',
			text: 'по:',
			style: 'position:absolute;left:179px;top:8px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончанияПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:203px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Количество',
			style: 'position:absolute;left:325px;top:56px;width:80px;height:19px;',
			width: 80,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмерения',
			text: 'Единица:',
			style: 'position:absolute;left:409px;top:56px;width:56px;height:19px;text-align:center;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ЕдиницаИзмерения.Представление',
			width: 80,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:465px;top:56px;width:80px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаЗаполненияПоФактическимЗатратамСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:290px;top:8px;width:19px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:312px;width:700px;height:25px;',
			width: 700,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
					tooltip:'',
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