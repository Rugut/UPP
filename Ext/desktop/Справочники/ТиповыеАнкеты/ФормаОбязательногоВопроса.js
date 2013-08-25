Ext.require(['Данные.Справочники.ТиповыеАнкеты'], function () 
{
	Ext.define('Справочники.ТиповыеАнкеты.ФормаОбязательногоВопроса',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:294px;height:303px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка обязательности ответа на вопрос',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Надпись1',
			style: 'position:absolute;left:25px;top:109px;width:261px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВопросУсловия.Представление',
			width: 261,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:25px;top:140px;width:261px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ТиповыеАнкеты.ФормаОбязательногоВопросаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ТиповыеАнкеты.ФормаОбязательногоВопросаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ТиповыеАнкеты.ФормаОбязательногоВопросаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ТиповыеАнкеты.ФормаОбязательногоВопросаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'получен ответ',
			style: 'position:absolute;left:25px;top:163px;width:80px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответ.Представление',
			width: 126,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:160px;top:183px;width:126px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ТиповыеАнкеты.ФормаОбязательногоВопросаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ТиповыеАнкеты.ФормаОбязательногоВопросаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ТиповыеАнкеты.ФормаОбязательногоВопросаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ТиповыеАнкеты.ФормаОбязательногоВопросаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Надпись3',
			style: 'position:absolute;left:8px;top:8px;width:278px;height:16px;',
		},
		{
			id: 'СписокЗначенийОтвета',
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:182px;width:127px;height:88px;',
			height: 88,width: 127,
			columns:
			[
				{
					text:'Значение списка',
					width:'100',
					dataIndex:'ЗначениеСписка',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ТиповыеАнкеты").data,
					fields: ['Ссылка','Родитель.Представление','ЗначениеСписка',]
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
						name:'ЗначениеСписка',
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
						var грид = Ext.getCmp('СписокЗначенийОтвета');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ТиповыеАнкеты.ФормаОбязательногоВопросаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТиповыеАнкеты.ФормаОбязательногоВопросаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'УсловиеОтвета.Представление',
			width: 129,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:25px;top:183px;width:129px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ТиповыеАнкеты.ФормаОбязательногоВопросаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ТиповыеАнкеты.ФормаОбязательногоВопросаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ТиповыеАнкеты.ФормаОбязательногоВопросаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ТиповыеАнкеты.ФормаОбязательногоВопросаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Не обязателен к заполнению',
			style: 'position:absolute;left:8px;top:28px;width:168px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Всегда обязателен к заполнению',
			style: 'position:absolute;left:8px;top:47px;width:189px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Обязателен к заполнению при условии...',
			style: 'position:absolute;left:8px;top:66px;width:229px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Не заполнять при условии...',
			style: 'position:absolute;left:8px;top:86px;width:229px;height:15px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:278px;width:294px;height:25px;',
			width: 294,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});