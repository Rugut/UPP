Ext.require(['Данные.Справочники.СпецификацииНоменклатуры'], function () 
{
	Ext.define('Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораНоменклатуры',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:262px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Автоподбор номенклатуры',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьВариантАвтоподбора',
			text: 'Вариант автоподбора:',
			style: 'position:absolute;left:8px;top:6px;width:142px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВариантАвтоподбора.Представление',
			width: 342,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:150px;top:6px;width:342px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораНоменклатурыСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораНоменклатурыСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораНоменклатурыСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораНоменклатурыСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСвойство',
			text: 'Свойство характеристики выходного изделия:',
			style: 'position:absolute;left:8px;top:28px;width:142px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Свойство.Представление',
			width: 342,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:150px;top:30px;width:342px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораНоменклатурыСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораНоменклатурыСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораНоменклатурыСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораНоменклатурыСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:60px;width:484px;height:169px;',
			height: 169,width: 484,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:484px;height:24px;',
			width: 484,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'АвтоподборНоменклатуры',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:484px;height:129px;',
			height: 129,width: 484,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Значение',
					width:'196',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'120',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Количество',
					width:'100',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Единица',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СпецификацииНоменклатуры").data,
					fields: ['Ссылка','Родитель.Представление','НомерСтроки','Значение','Номенклатура','Количество','ЕдиницаИзмерения',]
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
						name:'НомерСтроки',
					},
					{
						name:'Значение',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
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
						var грид = Ext.getCmp('АвтоподборНоменклатуры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораНоменклатурыСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораНоменклатурыСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Значения свойства',
			style: 'position:absolute;left:0px;top:0px;width:484px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Значения свойства',
			style: 'position:absolute;left:0px;top:0px;width:484px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:484px;height:24px;',
			width: 484,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'АвтоподборНоменклатурыОтходы',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:484px;height:129px;',
			height: 129,width: 484,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Значение',
					width:'197',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'120',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Количество',
					width:'100',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Единица',
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СпецификацииНоменклатуры").data,
					fields: ['Ссылка','Родитель.Представление','НомерСтроки','Значение','Номенклатура','Количество','ЕдиницаИзмерения',]
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
						name:'НомерСтроки',
					},
					{
						name:'Значение',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
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
						var грид = Ext.getCmp('АвтоподборНоменклатурыОтходы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораНоменклатурыСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СпецификацииНоменклатуры.ФормаАвтоподбораНоменклатурыСобытия");
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
			style: 'position:absolute;left:0px;top:237px;width:500px;height:25px;',
			width: 500,
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