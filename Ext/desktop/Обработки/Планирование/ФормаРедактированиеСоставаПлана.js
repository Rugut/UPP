Ext.require(['Данные.Обработки.Планирование'], function () 
{
	Ext.define('Обработки.Планирование.ФормаРедактированиеСоставаПлана',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:350px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Редактирование состава плана',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:684px;height:309px;',
			height: 309,width: 684,
			items:
			[
				{
					title:'Состав плана',
					items:
					[
		{
			id: 'СоставПлана',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:670px;height:253px;',
			height: 253,width: 670,
			columns:
			[
				{
					text:'Номенклатура',
					width:'200',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'200',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Распределяемое количество',
					width:'160',
					dataIndex:'РаспределяемоеКоличество',
					flex:1,
				},
				{
					text:'Количество',
					width:'80',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед.',
					width:'49',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'К.',
					width:'45',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Заказ',
					width:'200',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'200',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор',
					width:'200',
					dataIndex:'Договор',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'200',
					dataIndex:'Спецификация',
					flex:1,
				},
				{
					text:'Вариант распределения',
					width:'200',
					dataIndex:'ВариантРаспределения',
					flex:1,
				},
				{
					text:'Источник',
					width:'200',
					dataIndex:'Источник',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Планирование/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'РаспределяемоеКоличество',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'Заказ',
					},
					{
						name:'Контрагент',
					},
					{
						name:'Договор',
					},
					{
						name:'Спецификация',
					},
					{
						name:'ВариантРаспределения',
					},
					{
						name:'Источник',
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
						var грид = Ext.getCmp('СоставПлана');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Планирование.ФормаРедактированиеСоставаПланаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Планирование.ФормаРедактированиеСоставаПланаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:670px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Производственная программа',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:670px;height:24px;',
			items:
			[
				'-',
			]
		},
		{
			id: 'ПроизводственнаяПрограмма',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:670px;height:253px;',
			height: 253,width: 670,
			columns:
			[
				{
					text:'Период',
					width:'80',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'200',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Рабочий центр',
					width:'200',
					dataIndex:'РабочийЦентр',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'200',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'200',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Заказ',
					width:'200',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Количество',
					width:'80',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Источник',
					width:'200',
					dataIndex:'Источник',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'200',
					dataIndex:'Спецификация',
					flex:1,
				},
				{
					text:'Точка маршрута',
					width:'100',
					dataIndex:'ТочкаМаршрута',
					flex:1,
				},
				{
					text:'Вид воспроизводства',
					width:'200',
					dataIndex:'ВидВоспроизводства',
					flex:1,
				},
				{
					text:'Вариант распределения',
					width:'104',
					dataIndex:'ВариантРаспределения',
					flex:1,
				},
				{
					text:'Идентификатор',
					width:'96',
					dataIndex:'Идентификатор',
					flex:1,
				},
				{
					text:'Идентификатор (источник)',
					width:'100',
					dataIndex:'ИдентификаторИсточник',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Планирование/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Период',
					},
					{
						name:'Подразделение',
					},
					{
						name:'РабочийЦентр',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'Заказ',
					},
					{
						name:'Количество',
					},
					{
						name:'Источник',
					},
					{
						name:'Спецификация',
					},
					{
						name:'ТочкаМаршрута',
					},
					{
						name:'ВидВоспроизводства',
					},
					{
						name:'ВариантРаспределения',
					},
					{
						name:'Идентификатор',
					},
					{
						name:'ИдентификаторИсточник',
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
						var грид = Ext.getCmp('ПроизводственнаяПрограмма');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Планирование.ФормаРедактированиеСоставаПланаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Планирование.ФормаРедактированиеСоставаПланаСобытия");
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
			style: 'position:absolute;left:0px;top:325px;width:700px;height:25px;',
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
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});