Ext.require(['Данные.Документы.ВосстановлениеНДСпоОбъектамНедвижимости'], function () 
{
	Ext.define('Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаПодбораСчетовФактур',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:577px;height:293px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Подбор счетов-фактур',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СчетаФактуры',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:55px;width:561px;height:204px;',
			height: 204,width: 561,
			columns:
			[
				{
					text:'',
					width:'40',
					dataIndex:'Выбрана',
					flex:1,
				},
				{
					text:'Счет фактура',
					width:'100',
					dataIndex:'СчетФактура',
					flex:1,
				},
				{
					text:'Вид ценности',
					width:'100',
					dataIndex:'ВидЦенности',
					flex:1,
				},
				{
					text:'Код операции (для декларации)',
					width:'100',
					dataIndex:'КодОперацииДляДекларации',
					flex:1,
				},
				{
					text:'Поставщик',
					width:'100',
					dataIndex:'Поставщик',
					flex:1,
				},
				{
					text:'Дата оплаты',
					width:'100',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
				{
					text:'Документ оплаты',
					width:'100',
					dataIndex:'ДокументОплаты',
					flex:1,
				},
				{
					text:'Сумма без НДС',
					width:'100',
					dataIndex:'СуммаБезНДС',
					flex:1,
				},
				{
					text:'% НДС',
					width:'100',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'НДС',
					width:'100',
					dataIndex:'НДС',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВосстановлениеНДСпоОбъектамНедвижимости/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Выбрана',
					},
					{
						name:'СчетФактура',
					},
					{
						name:'ВидЦенности',
					},
					{
						name:'КодОперацииДляДекларации',
					},
					{
						name:'Поставщик',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'ДокументОплаты',
					},
					{
						name:'СуммаБезНДС',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'НДС',
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
						var грид = Ext.getCmp('СчетаФактуры');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаПодбораСчетовФактурСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаПодбораСчетовФактурСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:31px;width:561px;height:24px;',
			items:
			[
				{
					text:'Выделить все',
				},
				{
					text:'Снять выделение всех',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Очистить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОсновноеСредство',
			text: 'Основное средство:',
			style: 'position:absolute;left:8px;top:8px;width:105px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ОсновноеСредство.Представление',
			width: 248,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:118px;top:8px;width:248px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаПодбораСчетовФактурСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаПодбораСчетовФактурСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаПодбораСчетовФактурСобытия'], function ()
					{
						var объект = Ext.create("Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаПодбораСчетовФактурСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:268px;width:577px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сохранить',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
	});
});