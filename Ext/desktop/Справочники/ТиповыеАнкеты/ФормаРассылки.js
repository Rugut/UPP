Ext.require(['Данные.Справочники.ТиповыеАнкеты'], function () 
{
	Ext.define('Справочники.ТиповыеАнкеты.ФормаРассылки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:473px;height:392px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Рассылка анкеты',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:473px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:367px;width:473px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Отправить',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:457px;height:254px;',
			height: 254,width: 457,
			items:
			[
				{
					title:'Письмо',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ТекстПисьма',
			style: 'position:absolute;left:6px;top:6px;width:443px;height:222px;',
		},
					]
				},
				{
					title:'Получатели',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:443px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
			]
		},
		{
			id: 'Получатели',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:443px;height:204px;',
			height: 204,width: 443,
			columns:
			[
				{
					text:'Получатель',
					width:'220',
					dataIndex:'Объект',
					flex:1,
				},
				{
					text:'e-mail',
					width:'120',
					dataIndex:'Получатель',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ТиповыеАнкеты").data,
					fields: ['Ссылка','Родитель.Представление','Объект','Получатель',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТиповыеАнкеты/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Объект',
					},
					{
						name:'Получатель',
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
						var грид = Ext.getCmp('Получатели');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ТиповыеАнкеты.ФормаРассылкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТиповыеАнкеты.ФормаРассылкиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Вложения',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:443px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
			]
		},
		{
			id: 'Вложения',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:443px;height:204px;',
			height: 204,width: 443,
			columns:
			[
				{
					text:'Имя файла',
					width:'320',
					dataIndex:'ИмяФайла',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ТиповыеАнкеты").data,
					fields: ['Ссылка','Родитель.Представление','ИмяФайла',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТиповыеАнкеты/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ИмяФайла',
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
						var грид = Ext.getCmp('Вложения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ТиповыеАнкеты.ФормаРассылкиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТиповыеАнкеты.ФормаРассылкиСобытия");
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
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Анкета.Представление',
			width: 375,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:90px;top:33px;width:375px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ТиповыеАнкеты.ФормаРассылкиСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ТиповыеАнкеты.ФормаРассылкиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ТиповыеАнкеты.ФормаРассылкиСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ТиповыеАнкеты.ФормаРассылкиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьАнкета',
			text: 'Анкета:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:457px;height:43px;',
			height: 43,width: 457,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'ВнешнийПочтовыйКлиент',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Уведомлять о получении',
			style: 'position:absolute;left:0px;top:24px;width:149px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЭлектронныйАдресОтветов',
			width: 375,
			height: 19,
			style: 'position:absolute;left:82px;top:0px;width:375px;height:19px;',
		},
					]
				},
				{
					title:'ВстроенныйПочтовыйКлиент',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЭлектронныйАдресОтветов',
			text: 'E-mail ответов:',
			style: 'position:absolute;left:0px;top:0px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'E-mail отправки:',
			style: 'position:absolute;left:0px;top:0px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЭлектронныйАдресОтветовВстроенныйПочтовыйКлиент',
			width: 368,
			height: 19,
			style: 'position:absolute;left:89px;top:24px;width:368px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'E-mail ответов:',
			style: 'position:absolute;left:0px;top:24px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:89px;top:0px;width:368px;height:19px;',
			width: 368,
			height: 19,
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});