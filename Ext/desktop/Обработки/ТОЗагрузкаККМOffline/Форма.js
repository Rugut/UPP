Ext.require(['Данные.Обработки.ТОЗагрузкаККМOffline'], function () 
{
	Ext.define('Обработки.ТОЗагрузкаККМOffline.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:442px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Загрузка ККМ Off-Line',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТекущийСклад',
			width: 404,
			height: 19,
			style: 'position:absolute;left:115px;top:33px;width:404px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСклад',
			text: 'Склад:',
			style: 'position:absolute;left:8px;top:33px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьККМ',
			text: 'ККМ Offline:',
			style: 'position:absolute;left:8px;top:57px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ККМOffline',
			width: 404,
			height: 19,
			style: 'position:absolute;left:115px;top:57px;width:404px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только имеющиеся на складе',
			style: 'position:absolute;left:8px;top:105px;width:188px;height:19px;',
		},
		{
			id: 'Товары',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:157px;width:764px;height:277px;',
			height: 277,width: 764,
			columns:
			[
				{
					text:'Код ККМ',
					width:'56',
					dataIndex:'КодТовараККМ',
					flex:1,
				},
				{
					text:'Код товара',
					width:'120',
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
					text:'Ед.',
					width:'50',
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
					dataIndex:'Серия',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОЗагрузкаККМOffline/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'КодТовараККМ',
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
						name:'Серия',
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
						Ext.require(['Справочники.ТОЗагрузкаККМOffline.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТОЗагрузкаККМOffline.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьТипЦен',
			text: 'Тип цен:',
			style: 'position:absolute;left:8px;top:81px;width:94px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ТипЦен.Представление',
			width: 404,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:115px;top:81px;width:404px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ТОЗагрузкаККМOffline.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ТОЗагрузкаККМOffline.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ТОЗагрузкаККМOffline.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ТОЗагрузкаККМOffline.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьИнформацияОККМ',
			text: 'Информация о ККМ',
			style: 'position:absolute;left:523px;top:33px;width:249px;height:97px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Редактировать список выгрузки',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Загрузить в ККМ',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Справка',
				},
					]
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Редактировать список выгрузки',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Загрузить в ККМ',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:132px;width:764px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
	});
});