Ext.require(['Данные.Обработки.ТОВыгрузкаВВесыСПечатьюЭтикеток'], function () 
{
	Ext.define('Обработки.ТОВыгрузкаВВесыСПечатьюЭтикеток.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:400px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выгрузка данных в весы с печатью этикеток',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'fieldset',
			title: 'Настройки',
			style: 'position:absolute;left:8px;top:33px;width:684px;height:17px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:52px;width:684px;height:21px;',
			height: 21,width: 684,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:40px;top:1px;width:286px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ТипЦен.Представление',
			width: 293,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:391px;top:1px;width:293px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ТОВыгрузкаВВесыСПечатьюЭтикеток.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ТОВыгрузкаВВесыСПечатьюЭтикеток.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ТОВыгрузкаВВесыСПечатьюЭтикеток.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ТОВыгрузкаВВесыСПечатьюЭтикеток.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Отбор',
			style: 'position:absolute;left:8px;top:78px;width:684px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:97px;width:684px;height:108px;',
			height: 108,width: 684,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			id: 'Отборы',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:39px;width:684px;height:69px;',
			height: 69,width: 684,
			columns:
			[
				{
					text:'',
					width:'20',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОВыгрузкаВВесыСПечатьюЭтикеток/ВыбратьПоСсылке/100', timeout: 200},
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
						var грид = Ext.getCmp('Отборы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ТОВыгрузкаВВесыСПечатьюЭтикеток.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТОВыгрузкаВВесыСПечатьюЭтикеток.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только имеющиеся в наличии',
			style: 'position:absolute;left:0px;top:0px;width:233px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:211px;width:684px;height:24px;',
			items:
			[
				'-',
				{
					text:'Выделить все',
				},
				{
					text:'Очистить выделение',
				},
			]
		},
		{
			id: 'Товары',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:235px;width:684px;height:158px;',
			height: 158,width: 684,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Выгружать',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Артикул',
					width:'120',
					dataIndex:'Артикул',
					flex:1,
				},
				{
					text:'Код товара',
					width:'60',
					dataIndex:'КодТовара',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'250',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Ед. изм',
					width:'76',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'250',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия номенклатуры',
					width:'250',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Качество',
					width:'100',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Цена',
					width:'80',
					dataIndex:'Цена',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОВыгрузкаВВесыСПечатьюЭтикеток/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Выгружать',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
					},
					{
						name:'КодТовара',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СерияНоменклатуры',
					},
					{
						name:'Качество',
					},
					{
						name:'Цена',
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
						var грид = Ext.getCmp('Товары');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ТОВыгрузкаВВесыСПечатьюЭтикеток.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТОВыгрузкаВВесыСПечатьюЭтикеток.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Заполнить',
				},
				{
					text:'Выгрузить в весы',
				},
				'-',
				{
					text:'Справка',
				},
				'-',
					]
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Выгрузить в весы',
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