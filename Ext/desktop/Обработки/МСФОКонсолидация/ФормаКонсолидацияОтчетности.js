Ext.require(['Данные.Обработки.МСФОКонсолидация'], function () 
{
	Ext.define('Обработки.МСФОКонсолидация.ФормаКонсолидацияОтчетности',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:778px;height:455px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Консолидация отчетности по МСФО',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:8px;width:762px;height:414px;',
			height: 414,width: 762,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период консолидации отчетности:',
			style: 'position:absolute;left:0px;top:21px;width:180px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Период',
			width: 120,
			height: 19,
			style: 'position:absolute;left:182px;top:21px;width:120px;height:19px;',
		},
		{
			id: 'ТабличноеПоле',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:762px;height:120px;',
			height: 120,width: 762,
			columns:
			[
				{
					text:'Фирма',
					width:'220',
					dataIndex:'Фирма',
					flex:1,
				},
				{
					text:'Баланс',
					width:'60',
					dataIndex:'Баланс',
					flex:1,
				},
				{
					text:'Пр.и уб.',
					width:'60',
					dataIndex:'ПрибылиИУбытки',
					flex:1,
				},
				{
					text:'ДДС',
					width:'60',
					dataIndex:'ДДС',
					flex:1,
				},
				{
					text:'Дв.кап.',
					width:'60',
					dataIndex:'ДвижениеКапитала',
					flex:1,
				},
				{
					text:'Уч.пол.',
					width:'60',
					dataIndex:'УчетнаяПолитика',
					flex:1,
				},
				{
					text:'Прим.',
					width:'60',
					dataIndex:'Примечания',
					flex:1,
				},
				{
					text:'Вкл.',
					width:'60',
					dataIndex:'Включать',
					flex:1,
				},
				{
					text:'Способ конс.',
					width:'120',
					dataIndex:'СпособКонсолидации',
					flex:1,
				},
				{
					text:'БалансСсылка',
					width:'21',
					dataIndex:'БалансСсылка',
					flex:1,
				},
				{
					text:'ПрибылиИУбыткиСсылка',
					width:'21',
					dataIndex:'ПрибылиИУбыткиСсылка',
					flex:1,
				},
				{
					text:'ДДССсылка',
					width:'21',
					dataIndex:'ДДССсылка',
					flex:1,
				},
				{
					text:'ДвижениеКапиталаСсылка',
					width:'21',
					dataIndex:'ДвижениеКапиталаСсылка',
					flex:1,
				},
				{
					text:'УчетнаяПолитикаСсылка',
					width:'21',
					dataIndex:'УчетнаяПолитикаСсылка',
					flex:1,
				},
				{
					text:'ПримечанияСсылка',
					width:'21',
					dataIndex:'ПримечанияСсылка',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МСФОКонсолидация/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Фирма',
					},
					{
						name:'Баланс',
					},
					{
						name:'ПрибылиИУбытки',
					},
					{
						name:'ДДС',
					},
					{
						name:'ДвижениеКапитала',
					},
					{
						name:'УчетнаяПолитика',
					},
					{
						name:'Примечания',
					},
					{
						name:'Включать',
					},
					{
						name:'СпособКонсолидации',
					},
					{
						name:'БалансСсылка',
					},
					{
						name:'ПрибылиИУбыткиСсылка',
					},
					{
						name:'ДДССсылка',
					},
					{
						name:'ДвижениеКапиталаСсылка',
					},
					{
						name:'УчетнаяПолитикаСсылка',
					},
					{
						name:'ПримечанияСсылка',
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
						var грид = Ext.getCmp('ТабличноеПоле');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'button',
			name: 'Обновить',
			text: 'Обновить',
			style: 'position:absolute;left:309px;top:21px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Выбор отчетов для консолидации',
			style: 'position:absolute;left:0px;top:0px;width:762px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТабличноеПолеОрганизации',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:214px;width:762px;height:200px;',
			height: 200,width: 762,
			columns:
			[
				{
					text:'Фирма',
					width:'220',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Головная',
					width:'60',
					dataIndex:'Головная',
					flex:1,
				},
				{
					text:'Товары (на начало)',
					width:'104',
					dataIndex:'ТоварыПрибыльНаНачало',
					flex:1,
				},
				{
					text:'Товары (оборот)',
					width:'104',
					dataIndex:'ТоварыПрибыльВТеченииГода',
					flex:1,
				},
				{
					text:'Материалы (на начало)',
					width:'100',
					dataIndex:'СырьеИМатериалыПрибыльНаНачало',
					flex:1,
				},
				{
					text:'Материалы (оборот)',
					width:'100',
					dataIndex:'СырьеИМатериалыПрибыльВТеченииГода',
					flex:1,
				},
				{
					text:'НЗП (на начало)',
					width:'100',
					dataIndex:'НезавершенноеПроизводствоПрибыльНаНачало',
					flex:1,
				},
				{
					text:'НЗП (оборот)',
					width:'100',
					dataIndex:'НезавершенноеПроизводствоПрибыльВТеченииГода',
					flex:1,
				},
				{
					text:'Полуфабрикаты (на начало)',
					width:'100',
					dataIndex:'КомплектующиеИПолуфабрикатыПрибыльНаНачало',
					flex:1,
				},
				{
					text:'Полуфабрикаты (оборот)',
					width:'100',
					dataIndex:'КомплектующиеИПолуфабрикатыПрибыльВТеченииГода',
					flex:1,
				},
				{
					text:'ГП (на начало)',
					width:'100',
					dataIndex:'ГотоваяПродукцияПрибыльНаНачало',
					flex:1,
				},
				{
					text:'ГП (оборот)',
					width:'100',
					dataIndex:'ГотоваяПродукцияПрибыльВТеченииГода',
					flex:1,
				},
				{
					text:'Товары отгр. (на начало)',
					width:'100',
					dataIndex:'ТоварыОтгруженныеПрибыльНаНачало',
					flex:1,
				},
				{
					text:'Товары отгр. (оборот)',
					width:'100',
					dataIndex:'ТоварыОтгруженныеПрибыльВТеченииГода',
					flex:1,
				},
				{
					text:'ОС (на начало)',
					width:'100',
					dataIndex:'ОСПрибыльНаНачало',
					flex:1,
				},
				{
					text:'ОС (оборот)',
					width:'100',
					dataIndex:'ОСПрибыльВТеченииГода',
					flex:1,
				},
				{
					text:'НМА (на начало)',
					width:'100',
					dataIndex:'НМАПрибыльНаНачало',
					flex:1,
				},
				{
					text:'НМА (оборот)',
					width:'100',
					dataIndex:'НМАПрибыльВТеченииГода',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МСФОКонсолидация/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Организация',
					},
					{
						name:'Головная',
					},
					{
						name:'ТоварыПрибыльНаНачало',
					},
					{
						name:'ТоварыПрибыльВТеченииГода',
					},
					{
						name:'СырьеИМатериалыПрибыльНаНачало',
					},
					{
						name:'СырьеИМатериалыПрибыльВТеченииГода',
					},
					{
						name:'НезавершенноеПроизводствоПрибыльНаНачало',
					},
					{
						name:'НезавершенноеПроизводствоПрибыльВТеченииГода',
					},
					{
						name:'КомплектующиеИПолуфабрикатыПрибыльНаНачало',
					},
					{
						name:'КомплектующиеИПолуфабрикатыПрибыльВТеченииГода',
					},
					{
						name:'ГотоваяПродукцияПрибыльНаНачало',
					},
					{
						name:'ГотоваяПродукцияПрибыльВТеченииГода',
					},
					{
						name:'ТоварыОтгруженныеПрибыльНаНачало',
					},
					{
						name:'ТоварыОтгруженныеПрибыльВТеченииГода',
					},
					{
						name:'ОСПрибыльНаНачало',
					},
					{
						name:'ОСПрибыльВТеченииГода',
					},
					{
						name:'НМАПрибыльНаНачало',
					},
					{
						name:'НМАПрибыльВТеченииГода',
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
						var грид = Ext.getCmp('ТабличноеПолеОрганизации');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'При двойном щелчке мышью по ячейке, отмеченной "флажком" откроется форма соответствующего отчета.',
			style: 'position:absolute;left:0px;top:171px;width:762px;height:15px;',
		},
		{
			xtype: 'label',
			text: 'Прибыль от внутригрупповых операций в разрезе указанных активов',
			style: 'position:absolute;left:0px;top:193px;width:762px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Стыковка записей по долгосрочным займам (полученным и выданным) за ',
			style: 'position:absolute;left:0px;top:0px;width:762px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТЗКон5',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МСФОКонсолидация/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ТЗКон5');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'В таблицах указаны организации, которые выдали или получили долгосрочные займы друг от друга.',
			style: 'position:absolute;left:0px;top:399px;width:762px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИтогоКон5',
			text: 'Итого сумма взаимных займов за :',
			style: 'position:absolute;left:0px;top:186px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СумКон5',
			style: 'position:absolute;left:222px;top:186px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Стыковка записей по долгосрочным займам (полученным и выданным) за ',
			style: 'position:absolute;left:0px;top:211px;width:762px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТЗПред5',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:232px;width:762px;height:138px;',
			height: 138,width: 762,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МСФОКонсолидация/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ТЗПред5');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'ИтогоПред5',
			text: 'Итого сумма взаимных займов за :',
			style: 'position:absolute;left:0px;top:375px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Пред5',
			style: 'position:absolute;left:222px;top:375px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Стыковка записей по текущим займам (полученным и выданным) за ',
			style: 'position:absolute;left:0px;top:0px;width:762px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТЗКон6',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МСФОКонсолидация/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ТЗКон6');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'В таблицах указаны организации, которые выдали или получили краткосрочные займы друг от друга.',
			style: 'position:absolute;left:0px;top:399px;width:762px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИтогоКон6',
			text: 'Итого сумма взаимных займов за ',
			style: 'position:absolute;left:0px;top:186px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СумКон6',
			style: 'position:absolute;left:222px;top:186px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Стыковка записей по текущим займам (полученным и выданным) за ',
			style: 'position:absolute;left:0px;top:211px;width:762px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТЗПред6',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:232px;width:762px;height:138px;',
			height: 138,width: 762,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МСФОКонсолидация/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ТЗПред6');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'ИтогоПред6',
			text: 'Итого сумма взаимных займов за ',
			style: 'position:absolute;left:0px;top:375px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Пред6',
			style: 'position:absolute;left:222px;top:375px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'В таблицах указаны организации, которые выдали или получили долгосрочные авансы друг от друга.',
			style: 'position:absolute;left:0px;top:399px;width:762px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'В таблицах указаны организации, которые выдали или получили краткосрочные авансы друг от друга.',
			style: 'position:absolute;left:0px;top:399px;width:762px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Стыковка записей по авансам выданным и доходами буд.периодов (долгосрочные) за ',
			style: 'position:absolute;left:0px;top:0px;width:762px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТЗКон7',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МСФОКонсолидация/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ТЗКон7');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'ИтогоКон7',
			text: 'Итого сумма взаимных авансов за ',
			style: 'position:absolute;left:0px;top:186px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СумКон7',
			style: 'position:absolute;left:222px;top:186px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Стыковка записей по авансам выданным и доходами буд.периодов (долгосрочные) за ',
			style: 'position:absolute;left:0px;top:211px;width:762px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТЗПред7',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:232px;width:762px;height:138px;',
			height: 138,width: 762,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МСФОКонсолидация/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ТЗПред7');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'ИтогоПред7',
			text: 'Итого сумма взаимных авансов за ',
			style: 'position:absolute;left:0px;top:375px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Пред7',
			style: 'position:absolute;left:222px;top:375px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Стыковка записей по авансам выданным и доходами буд.периодов (текущие) за ',
			style: 'position:absolute;left:0px;top:0px;width:762px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТЗКон8',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МСФОКонсолидация/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ТЗКон8');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'ИтогоКон8',
			text: 'Итого сумма взаимных авансов за ',
			style: 'position:absolute;left:0px;top:186px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СумКон8',
			style: 'position:absolute;left:222px;top:186px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Стыковка записей по авансам выданным и доходами буд.периодов (текущие) за ',
			style: 'position:absolute;left:0px;top:211px;width:762px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТЗПред8',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:232px;width:762px;height:138px;',
			height: 138,width: 762,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МСФОКонсолидация/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ТЗПред8');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'ИтогоПред8',
			text: 'Итого сумма взаимных авансов за ',
			style: 'position:absolute;left:0px;top:375px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Пред8',
			style: 'position:absolute;left:222px;top:375px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Стыковка записей по выручке от реализации за ',
			style: 'position:absolute;left:0px;top:0px;width:762px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТЗКон11',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МСФОКонсолидация/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ТЗКон11');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'В таблицах указаны организации, которые выдали или получили выручку друг от друга.',
			style: 'position:absolute;left:0px;top:399px;width:762px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИтогоКон11',
			text: 'Итого сумма взаимной выручки за ',
			style: 'position:absolute;left:0px;top:197px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СумКон11',
			style: 'position:absolute;left:222px;top:197px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Стыковка записей по выручке от реализации за ',
			style: 'position:absolute;left:0px;top:222px;width:762px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТЗПред11',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:243px;width:762px;height:127px;',
			height: 127,width: 762,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МСФОКонсолидация/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ТЗПред11');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'ИтогоПред11',
			text: 'Итого сумма взаимной выручки за ',
			style: 'position:absolute;left:0px;top:375px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Пред11',
			style: 'position:absolute;left:222px;top:375px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Стыковка записей по себестоимости реализации за ',
			style: 'position:absolute;left:0px;top:0px;width:762px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТЗКон12',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МСФОКонсолидация/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ТЗКон12');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'В таблицах указаны организации, которые выдали или получили себестоимость друг от друга.',
			style: 'position:absolute;left:0px;top:399px;width:762px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИтогоКон12',
			text: 'Итого сумма взаимной себест. за ',
			style: 'position:absolute;left:0px;top:186px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СумКон12',
			style: 'position:absolute;left:222px;top:186px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Стыковка записей по себестоимости реализации за ',
			style: 'position:absolute;left:0px;top:211px;width:762px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТЗПред12',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:232px;width:762px;height:138px;',
			height: 138,width: 762,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МСФОКонсолидация/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ТЗПред12');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'ИтогоПред12',
			text: 'Итого сумма взаимной себест. за ',
			style: 'position:absolute;left:0px;top:375px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Пред12',
			style: 'position:absolute;left:222px;top:375px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Стыковка записей по дивидендам к выплате за ',
			style: 'position:absolute;left:0px;top:0px;width:762px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТЗКон21',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МСФОКонсолидация/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ТЗКон21');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'В таблицах указаны организации, которые выдали или получили дивиденды друг от друга.',
			style: 'position:absolute;left:0px;top:399px;width:762px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИтогоКон21',
			text: 'Итого сумма взаимных дивидендов за ',
			style: 'position:absolute;left:0px;top:186px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СумКон21',
			style: 'position:absolute;left:222px;top:186px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Стыковка записей по дивидендам к выплате за ',
			style: 'position:absolute;left:0px;top:211px;width:762px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТЗПред21',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:232px;width:762px;height:137px;',
			height: 137,width: 762,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МСФОКонсолидация/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ТЗПред21');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'ИтогоПред21',
			text: 'Итого сумма взаимных дивидендов за ',
			style: 'position:absolute;left:0px;top:374px;width:220px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Пред21',
			style: 'position:absolute;left:222px;top:374px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Текущая и долгосрочная дебиторская и кредиторская задолженность за ',
			style: 'position:absolute;left:0px;top:0px;width:762px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Текущая и долгосрочная дебиторская и кредиторская задолженность за ',
			style: 'position:absolute;left:0px;top:151px;width:762px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'ИтогоКон41',
			text: 'Текущая дебиторская задолженность:',
			style: 'position:absolute;left:0px;top:22px;width:237px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СумКон40',
			style: 'position:absolute;left:245px;top:22px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'ИтогоКон42',
			text: 'Текущая кредиторская задолженность:',
			style: 'position:absolute;left:0px;top:46px;width:237px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СумКон41',
			style: 'position:absolute;left:245px;top:46px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'ИтогоКон43',
			text: 'Долгосрочная дебиторская задолженность:',
			style: 'position:absolute;left:0px;top:70px;width:237px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СумКон42',
			style: 'position:absolute;left:245px;top:70px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'ИтогоКон44',
			text: 'Долгосрочная кредиторская задолженность:',
			style: 'position:absolute;left:0px;top:94px;width:237px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СумКон43',
			style: 'position:absolute;left:245px;top:94px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'ИтогоКон45',
			text: 'Текущая дебиторская задолженность:',
			style: 'position:absolute;left:0px;top:174px;width:237px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СумПред40',
			style: 'position:absolute;left:245px;top:174px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'ИтогоКон46',
			text: 'Текущая кредиторская задолженность:',
			style: 'position:absolute;left:0px;top:198px;width:237px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СумПред41',
			style: 'position:absolute;left:245px;top:198px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'ИтогоКон47',
			text: 'Долгосрочная дебиторская задолженность:',
			style: 'position:absolute;left:0px;top:222px;width:237px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СумПред42',
			style: 'position:absolute;left:245px;top:222px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'ИтогоКон48',
			text: 'Долгосрочная кредиторская задолженность:',
			style: 'position:absolute;left:0px;top:246px;width:237px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СумПред43',
			style: 'position:absolute;left:245px;top:246px;width:124px;height:19px;',
			width: 124,
			height: 19,
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Сформированная консолидированная отчетность',
			style: 'position:absolute;left:0px;top:0px;width:762px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ТабличноеПолеРезультат',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:393px;',
			height: 393,width: 762,
			columns:
			[
				{
					text:'Отчет',
					width:'524',
					dataIndex:'Отчет',
					flex:1,
				},
				{
					text:'Ссылка',
					width:'21',
					dataIndex:'Ссылка',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МСФОКонсолидация/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Отчет',
					},
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('ТабличноеПолеРезультат');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МСФОКонсолидация.ФормаКонсолидацияОтчетностиСобытия");
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
			style: 'position:absolute;left:0px;top:430px;width:778px;height:25px;',
			width: 778,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'<< Назад',
					tooltip:'Назад',
				},
				'-',
				{
					text:'Далее >>',
					tooltip:'Далее',
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