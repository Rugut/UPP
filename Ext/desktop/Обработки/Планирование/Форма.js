Ext.require(['Данные.Обработки.Планирование'], function () 
{
	Ext.define('Обработки.Планирование.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Планирование',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаДатаНач',
			width: 80,
			height: 19,
			style: 'position:absolute;left:790px;top:2px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаДатаКон',
			width: 80,
			height: 19,
			style: 'position:absolute;left:890px;top:2px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:972px;top:2px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПлановыйПериодС',
			text: 'Плановый период с:',
			style: 'position:absolute;left:678px;top:2px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по',
			style: 'position:absolute;left:872px;top:2px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:984px;height:539px;',
			height: 539,width: 984,
			items:
			[
				{
					title:'Планы',
					items:
					[
		{
			id: 'ДеревоПланов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:230px;height:467px;',
			height: 467,width: 230,
			columns:
			[
				{
					text:' План',
					width:'100',
					dataIndex:'План',
					flex:1,
				},
				{
					text:' Подразделение',
					width:'100',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:' Представление',
					width:'100',
					dataIndex:'Представление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Планирование/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'План',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Представление',
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
						var грид = Ext.getCmp('ДеревоПланов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Планирование.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Планирование.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'СоставПлана',
			xtype: 'grid',
			style: 'position:absolute;left:242px;top:46px;width:734px;height:189px;',
			height: 189,width: 734,
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
					text:'Источники обеспечения',
					width:'100',
					dataIndex:'ИсточникОбеспечения',
					flex:1,
				},
				{
					text:'Количество',
					width:'68',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед.',
					width:'50',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Планирование/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'ИсточникОбеспечения',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Планирование.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Планирование.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
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
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПолеВводаПериодичность',
			width: 92,
			height: 19,
			style: 'position:absolute;left:882px;top:24px;width:92px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Состав плана',
			style: 'position:absolute;left:242px;top:6px;width:734px;height:16px;',
		},
		{
			id: 'Потребности',
			xtype: 'grid',
			style: 'position:absolute;left:242px;top:281px;width:734px;height:232px;',
			height: 232,width: 734,
			columns:
			[
				{
					text:'Период',
					width:'80',
					dataIndex:'Период',
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
					text:'Количество',
					width:'68',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед.',
					width:'50',
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
					text:'Мин. партия',
					width:'68',
					dataIndex:'МинимальнаяПартия',
					flex:1,
				},
				{
					text:'Кратность',
					width:'68',
					dataIndex:'Кратность',
					flex:1,
				},
				{
					text:'Вид воспр.',
					width:'100',
					dataIndex:'ВидВоспроизводства',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'200',
					dataIndex:'Спецификация',
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
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Планирование/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Период',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
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
						name:'МинимальнаяПартия',
					},
					{
						name:'Кратность',
					},
					{
						name:'ВидВоспроизводства',
					},
					{
						name:'Спецификация',
					},
					{
						name:'Подразделение',
					},
					{
						name:'РабочийЦентр',
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
						var грид = Ext.getCmp('Потребности');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Планирование.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Планирование.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:242px;top:257px;width:734px;height:24px;',
			items:
			[
				{
					text:'&Изменить',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Потребности',
			style: 'position:absolute;left:242px;top:241px;width:734px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Планы',
			style: 'position:absolute;left:6px;top:6px;width:230px;height:16px;',
		},
					]
				},
				{
					title:'Производственная программа',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:970px;height:507px;',
			height: 507,width: 970,
			items:
			[
				{
					title:'Плановые задания',
					items:
					[
		{
			id: 'ПроизводственнаяПрограмма',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:956px;height:451px;',
			height: 451,width: 956,
			columns:
			[
				{
					text:'№',
					width:'30',
					dataIndex:'НомерСтроки',
					flex:1,
				},
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
					text:'Источник',
					width:'200',
					dataIndex:'Источник',
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
					width:'135',
					dataIndex:'ВариантРаспределения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Планирование/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
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
						name:'Спецификация',
					},
					{
						name:'ТочкаМаршрута',
					},
					{
						name:'Источник',
					},
					{
						name:'ВидВоспроизводства',
					},
					{
						name:'ВариантРаспределения',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Планирование.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Планирование.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Диаграмма Ганта',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЗагрузкаОписание',
			text: '- загрузка',
			style: 'position:absolute;left:38px;top:462px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрафикОписание',
			text: '- график',
			style: 'position:absolute;left:150px;top:462px;width:50px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПревышениеЗагрузкиОписание',
			text: '- превышение загрузки',
			style: 'position:absolute;left:252px;top:462px;width:130px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗагрузка',
			text: '',
			style: 'position:absolute;left:6px;top:461px;width:30px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрафик',
			text: '',
			style: 'position:absolute;left:118px;top:461px;width:30px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПревышениеЗагрузки',
			text: '',
			style: 'position:absolute;left:220px;top:461px;width:30px;height:20px;',
		},
					]
				},
			]
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
			name: 'ПолеВводаСценарий',
			width: 200,
			height: 19,
			style: 'position:absolute;left:458px;top:2px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСценарий',
			text: 'Сценарий:',
			style: 'position:absolute;left:401px;top:2px;width:55px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Восстановить настройку...',
				},
				{
					text:'Сохранить настройку...',
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