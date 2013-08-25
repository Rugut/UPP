Ext.require(['Данные.Обработки.ВыпискаБанка'], function () 
{
	Ext.define('Обработки.ВыпискаБанка.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:676px;height:432px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Обработка  Выписка банка',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:32px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:106px;top:32px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ВыпискаБанка.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ВыпискаБанка.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ВыпискаБанка.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ВыпискаБанка.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Банковский счет:',
			style: 'position:absolute;left:8px;top:56px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетОрганизации.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:106px;top:56px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ВыпискаБанка.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ВыпискаБанка.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ВыпискаБанка.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ВыпискаБанка.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОплаты',
			width: 96,
			height: 19,
			style: 'position:absolute;left:106px;top:8px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата оплаты:',
			style: 'position:absolute;left:8px;top:8px;width:96px;height:19px;',
		},
		{
			id: 'СписокДокументов',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:123px;width:660px;height:180px;',
			height: 180,width: 660,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'ФлагОплачено',
					flex:1,
				},
				{
					text:'Документ',
					width:'280',
					dataIndex:'Документ',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'120',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Сумма прихода',
					width:'120',
					dataIndex:'СуммаПриход',
					flex:1,
				},
				{
					text:'Сумма расхода',
					width:'120',
					dataIndex:'СуммаРасход',
					flex:1,
				},
				{
					text:'ЧастичнаяОплата',
					width:'100',
					dataIndex:'ЧастичнаяОплата',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВыпискаБанка/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ФлагОплачено',
					},
					{
						name:'Документ',
					},
					{
						name:'Контрагент',
					},
					{
						name:'СуммаПриход',
					},
					{
						name:'СуммаРасход',
					},
					{
						name:'ЧастичнаяОплата',
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
						var грид = Ext.getCmp('СписокДокументов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВыпискаБанка.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВыпискаБанка.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:99px;width:660px;height:24px;',
			width: 660,
			height: 24,
			items:
			[
				{
					text:'Установить пометки',
				},
				{
					text:'Снять пометки',
				},
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОстатокНаНачалоДня',
			style: 'position:absolute;left:548px;top:308px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить только оплаченные',
			style: 'position:absolute;left:208px;top:8px;width:176px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Остаток на начало дня:',
			style: 'position:absolute;left:422px;top:308px;width:124px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаПриходИтого',
			style: 'position:absolute;left:548px;top:332px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Приход:',
			style: 'position:absolute;left:422px;top:332px;width:124px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаРасходИтого',
			style: 'position:absolute;left:548px;top:356px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Расход:',
			style: 'position:absolute;left:422px;top:356px;width:124px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОстатокНаКонецДня',
			style: 'position:absolute;left:548px;top:380px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Остаток на конец дня:',
			style: 'position:absolute;left:422px;top:380px;width:124px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:303px;width:124px;height:24px;',
			width: 124,
			height: 24,
			items:
			[
				{
					text:'Частичная оплата',
				},
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Банковские расчетные документы',
			style: 'position:absolute;left:8px;top:83px;width:660px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:407px;width:676px;height:25px;',
			width: 676,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
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