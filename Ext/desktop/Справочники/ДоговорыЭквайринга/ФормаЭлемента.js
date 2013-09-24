Ext.require(['Данные.Справочники.ДоговорыЭквайринга'], function () 
{
	Ext.define('Справочники.ДоговорыЭквайринга.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:439px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Договор эквайринга',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:340px;top:33px;width:25px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 60,
			height: 19,
			style: 'position:absolute;left:369px;top:33px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 184,
			height: 19,
			style: 'position:absolute;left:148px;top:33px;width:184px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЭквайрер',
			text: 'Эквайрер:',
			style: 'position:absolute;left:8px;top:56px;width:53px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Эквайрер.Представление',
			width: 281,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:148px;top:56px;width:281px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ДоговорыЭквайринга.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ДоговорыЭквайринга.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ДоговорыЭквайринга.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ДоговорыЭквайринга.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорВзаиморасчетов',
			text: 'Договор взаиморасчетов:',
			style: 'position:absolute;left:8px;top:79px;width:135px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Договор.Представление',
			width: 281,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:148px;top:79px;width:281px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ДоговорыЭквайринга.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ДоговорыЭквайринга.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ДоговорыЭквайринга.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ДоговорыЭквайринга.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:121px;width:421px;height:24px;',
			width: 421,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'ТарифыЗаРасчетноеОбслуживание',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:145px;width:421px;height:114px;',
			height: 114,width: 421,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид оплаты',
					width:'274',
					dataIndex:'ВидОплаты',
					flex:1,
				},
				{
					text:'% торговой уступки',
					width:'104',
					dataIndex:'ПроцентТорговойУступки',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ДоговорыЭквайринга").data,
					fields: ['Ссылка','НомерСтроки','ВидОплаты','ПроцентТорговойУступки',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДоговорыЭквайринга/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидОплаты',
					},
					{
						name:'ПроцентТорговойУступки',
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
						var грид = Ext.getCmp('ТарифыЗаРасчетноеОбслуживание');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДоговорыЭквайринга.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДоговорыЭквайринга.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:439px;height:25px;',
			width: 439,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			text: 'Тарифы за расчетное обслуживание',
			style: 'position:absolute;left:8px;top:102px;width:421px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:439px;height:25px;',
			width: 439,
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