Ext.require(['Данные.Документы.ЧекККМ'], function () 
{
	Ext.define('Документы.ЧекККМ.ФормаОплатЧека',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:480px;height:228px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Оплата чека',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:203px;width:480px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Оплатить картой',
				},
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИтого',
			text: 'Итого (руб.):',
			style: 'position:absolute;left:8px;top:7px;width:111px;height:22px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВидОплаты.Представление',
			width: 237,
			height: 22,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:143px;top:33px;width:237px;height:22px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ЧекККМ.ФормаОплатЧекаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЧекККМ.ФормаОплатЧекаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ЧекККМ.ФормаОплатЧекаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ЧекККМ.ФормаОплатЧекаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОплата',
			text: 'Оплата:',
			style: 'position:absolute;left:8px;top:33px;width:111px;height:22px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Всего',
			style: 'position:absolute;left:362px;top:7px;width:110px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаОплаты',
			text: 'Сумма оплаты:',
			style: 'position:absolute;left:8px;top:175px;width:111px;height:22px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаОплаты',
			style: 'position:absolute;left:143px;top:175px;width:110px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОплатаБезСдачи',
			text: '',
			style: 'position:absolute;left:121px;top:175px;width:20px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСдача',
			text: 'Сдача (руб.):',
			style: 'position:absolute;left:263px;top:175px;width:96px;height:22px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Сдача',
			style: 'position:absolute;left:362px;top:175px;width:110px;height:22px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:59px;width:464px;height:116px;',
			height: 116,width: 464,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			id: 'Оплата',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:464px;height:86px;',
			height: 86,width: 464,
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
					width:'100',
					dataIndex:'ВидОплаты',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЧекККМ/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Сумма',
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
						var грид = Ext.getCmp('Оплата');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЧекККМ.ФормаОплатЧекаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЧекККМ.ФормаОплатЧекаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:464px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: '',
			style: 'position:absolute;left:121px;top:33px;width:20px;height:22px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Списком',
			style: 'position:absolute;left:390px;top:33px;width:82px;height:22px;',
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