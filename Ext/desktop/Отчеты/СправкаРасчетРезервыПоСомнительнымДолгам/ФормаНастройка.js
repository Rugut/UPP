Ext.require(['Данные.Отчеты.СправкаРасчетРезервыПоСомнительнымДолгам'], function () 
{
	Ext.define('Отчеты.СправкаРасчетРезервыПоСомнительнымДолгам.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:413px;height:210px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:8px;width:399px;height:172px;',
			height: 172,width: 399,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:32px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 306,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:84px;top:30px;width:306px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.СправкаРасчетРезервыПоСомнительнымДолгам.ФормаНастройкаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.СправкаРасчетРезервыПоСомнительнымДолгам.ФормаНастройкаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.СправкаРасчетРезервыПоСомнительнымДолгам.ФормаНастройкаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.СправкаРасчетРезервыПоСомнительнымДолгам.ФормаНастройкаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период',
			style: 'position:absolute;left:6px;top:6px;width:57px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			text: 'Выводить данные',
			style: 'position:absolute;left:6px;top:57px;width:384px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредставлениеПериодаРегистрации',
			width: 126,
			height: 19,
			style: 'position:absolute;left:84px;top:6px;width:126px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Бухгалтерского учета',
			style: 'position:absolute;left:6px;top:78px;width:384px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Налогового учета',
			style: 'position:absolute;left:6px;top:97px;width:384px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Бухгалтерского учета с постоянными разницами',
			style: 'position:absolute;left:6px;top:117px;width:384px;height:16px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'Отбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:385px;height:109px;',
			height: 109,width: 385,
			columns:
			[
				{
					text:'',
					width:'22',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СправкаРасчетРезервыПоСомнительнымДолгам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
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
						var грид = Ext.getCmp('Отбор');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СправкаРасчетРезервыПоСомнительнымДолгам.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СправкаРасчетРезервыПоСомнительнымДолгам.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:385px;height:24px;',
			width: 385,
			height: 24,
			items:
			[
			]
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
			style: 'position:absolute;left:0px;top:185px;width:413px;height:25px;',
			width: 413,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
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