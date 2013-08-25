Ext.require(['Данные.Документы.ПланПроизводстваПоСменам'], function () 
{
	Ext.define('Документы.ПланПроизводстваПоСменам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'План производства по сменам',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНомера',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДаты',
			text: 'от',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:368px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 568,
			height: 19,
			style: 'position:absolute;left:94px;top:368px;width:568px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			width: 670,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'Действие открыть свойства',
				},
				{
					text:'Действие открыть категории',
				},
				'-',
				{
					text:'Выполнить планирование',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:58px;width:654px;height:303px;',
			height: 303,width: 654,
			items:
			[
				{
					items:
					[
		{
			id: 'ПланыПроизводства',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:640px;height:247px;',
			height: 247,width: 640,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сценарий',
					width:'167',
					dataIndex:'Сценарий',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'137',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Проект',
					width:'123',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Дата нач',
					width:'79',
					dataIndex:'ДатаНач',
					flex:1,
				},
				{
					text:'Дата кон',
					width:'80',
					dataIndex:'ДатаКон',
					flex:1,
				},
				{
					text:'Дата запуска',
					width:'80',
					dataIndex:'ДатаЗапуска',
					flex:1,
				},
				{
					text:'Дата выпуска',
					width:'80',
					dataIndex:'ДатаВыпуска',
					flex:1,
				},
				{
					text:'Вариант распределения',
					width:'200',
					dataIndex:'ВариантРаспределенияВыпусков',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланПроизводстваПоСменам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Сценарий',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Проект',
					},
					{
						name:'ДатаНач',
					},
					{
						name:'ДатаКон',
					},
					{
						name:'ДатаЗапуска',
					},
					{
						name:'ДатаВыпуска',
					},
					{
						name:'ВариантРаспределенияВыпусков',
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
						var грид = Ext.getCmp('ПланыПроизводства');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПланПроизводстваПоСменам.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПланПроизводстваПоСменам.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:24px;',
			width: 640,
			height: 24,
			items:
			[
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ДанныеЗаказов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:640px;height:247px;',
			height: 247,width: 640,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Заказ',
					width:'220',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Дата запуска',
					width:'80',
					dataIndex:'ДатаЗапуска',
					flex:1,
				},
				{
					text:'Дата выпуска',
					width:'80',
					dataIndex:'ДатаВыпуска',
					flex:1,
				},
				{
					text:'Вариант распределения',
					width:'200',
					dataIndex:'ВариантРаспределенияВыпусков',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланПроизводстваПоСменам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Заказ',
					},
					{
						name:'Проект',
					},
					{
						name:'ДатаЗапуска',
					},
					{
						name:'ДатаВыпуска',
					},
					{
						name:'ВариантРаспределенияВыпусков',
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
						var грид = Ext.getCmp('ДанныеЗаказов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПланПроизводстваПоСменам.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПланПроизводстваПоСменам.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:24px;',
			width: 640,
			height: 24,
			items:
			[
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:24px;',
			width: 640,
			height: 24,
			items:
			[
				'-',
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Параметры',
				},
			]
		},
		{
			id: 'Товары',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:640px;height:247px;',
			height: 247,width: 640,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код',
					width:'100',
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
					width:'45',
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
					text:'Дата запуска',
					width:'80',
					dataIndex:'ДатаЗапуска',
					flex:1,
				},
				{
					text:'Дата выпуска',
					width:'80',
					dataIndex:'ДатаВыпуска',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'200',
					dataIndex:'Спецификация',
					flex:1,
				},
				{
					text:'Заказ',
					width:'200',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Вариант распределения',
					width:'200',
					dataIndex:'ВариантРаспределенияВыпусков',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланПроизводстваПоСменам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Код',
					},
					{
						name:'Артикул',
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
						name:'ДатаЗапуска',
					},
					{
						name:'ДатаВыпуска',
					},
					{
						name:'Спецификация',
					},
					{
						name:'Заказ',
					},
					{
						name:'Проект',
					},
					{
						name:'ВариантРаспределенияВыпусков',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПланПроизводстваПоСменам.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПланПроизводстваПоСменам.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:24px;',
			width: 640,
			height: 24,
			items:
			[
				'-',
				{
					text:'Свернуть дерево',
				},
				{
					text:'Раскрыть дерево',
				},
				'-',
				{
					text:'Получить данные',
				},
				'-',
				{
					text:'Свернуть',
				},
			]
		},
		{
			id: 'ДеревоПланов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:640px;height:200px;',
			height: 200,width: 640,
			columns:
			[
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'100',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Вид воспроизводства',
					width:'100',
					dataIndex:'ВидВоспроизводства',
					flex:1,
				},
				{
					text:'Количество',
					width:'100',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'100',
					dataIndex:'Спецификация',
					flex:1,
				},
				{
					text:'Заказ',
					width:'100',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Дата запуска',
					width:'100',
					dataIndex:'ДатаЗапуска',
					flex:1,
				},
				{
					text:'Дата выпуска',
					width:'100',
					dataIndex:'ДатаВыпуска',
					flex:1,
				},
				{
					text:'Вариант распределения выпусков',
					width:'100',
					dataIndex:'ВариантРаспределенияВыпусков',
					flex:1,
				},
				{
					text:'В рамках плана',
					width:'100',
					dataIndex:'ВРамкахПлана',
					flex:1,
				},
				{
					text:'По данным планов',
					width:'100',
					dataIndex:'ПоДаннымПланов',
					flex:1,
				},
				{
					text:'Конечная продукция',
					width:'100',
					dataIndex:'КонечнаяПродукция',
					flex:1,
				},
				{
					text:'Количество по спецификации',
					width:'88',
					dataIndex:'КоличествоПоСпецификации',
					flex:1,
				},
				{
					text:'Ключ строки',
					width:'111',
					dataIndex:'КлючСтроки',
					flex:1,
				},
				{
					text:'Номер операции',
					width:'100',
					dataIndex:'НомерОперацииМаршрута',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланПроизводстваПоСменам/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'ВидВоспроизводства',
					},
					{
						name:'Количество',
					},
					{
						name:'Спецификация',
					},
					{
						name:'Заказ',
					},
					{
						name:'Проект',
					},
					{
						name:'ДатаЗапуска',
					},
					{
						name:'ДатаВыпуска',
					},
					{
						name:'ВариантРаспределенияВыпусков',
					},
					{
						name:'ВРамкахПлана',
					},
					{
						name:'ПоДаннымПланов',
					},
					{
						name:'КонечнаяПродукция',
					},
					{
						name:'КоличествоПоСпецификации',
					},
					{
						name:'КлючСтроки',
					},
					{
						name:'НомерОперацииМаршрута',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПланПроизводстваПоСменам.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПланПроизводстваПоСменам.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать детальное планирование',
			style: 'position:absolute;left:6px;top:235px;width:225px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Разузловывать данные при получении',
			style: 'position:absolute;left:6px;top:255px;width:225px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автоматически сворачивать данные при получении',
			style: 'position:absolute;left:333px;top:235px;width:285px;height:15px;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'ЗанятостьРабочихЦентров',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:640px;height:247px;',
			height: 247,width: 640,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'120',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'120',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'Рабочий центр',
					width:'100',
					dataIndex:'РабочийЦентр',
					flex:1,
				},
				{
					text:'Смена',
					width:'100',
					dataIndex:'Смена',
					flex:1,
				},
				{
					text:'Тех операция',
					width:'100',
					dataIndex:'ТехОперация',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'100',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'100',
					dataIndex:'Спецификация',
					flex:1,
				},
				{
					text:'Конечная продукция',
					width:'100',
					dataIndex:'КонечнаяПродукция',
					flex:1,
				},
				{
					text:'Заказ',
					width:'100',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Количество',
					width:'100',
					dataIndex:'Количество',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланПроизводстваПоСменам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Период',
					},
					{
						name:'ДатаОкончания',
					},
					{
						name:'РабочийЦентр',
					},
					{
						name:'Смена',
					},
					{
						name:'ТехОперация',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'Спецификация',
					},
					{
						name:'КонечнаяПродукция',
					},
					{
						name:'Заказ',
					},
					{
						name:'Проект',
					},
					{
						name:'Количество',
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
						var грид = Ext.getCmp('ЗанятостьРабочихЦентров');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПланПроизводстваПоСменам.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПланПроизводстваПоСменам.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:24px;',
			width: 640,
			height: 24,
			items:
			[
			]
		},
					]
				},
				{
					items:
					[
		{
			id: 'ПотребностиПроизводства',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:640px;height:247px;',
			height: 247,width: 640,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Дата потребности',
					width:'120',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Смена',
					width:'100',
					dataIndex:'Смена',
					flex:1,
				},
				{
					text:'Рабочий центр',
					width:'100',
					dataIndex:'РабочийЦентр',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'100',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'100',
					dataIndex:'Спецификация',
					flex:1,
				},
				{
					text:'Конечная продукция',
					width:'100',
					dataIndex:'КонечнаяПродукция',
					flex:1,
				},
				{
					text:'Количество извне',
					width:'100',
					dataIndex:'КоличествоИзвне',
					flex:1,
				},
				{
					text:'Количество внутри',
					width:'100',
					dataIndex:'КоличествоВнутри',
					flex:1,
				},
				{
					text:'Заказ',
					width:'100',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланПроизводстваПоСменам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Период',
					},
					{
						name:'Смена',
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
						name:'Спецификация',
					},
					{
						name:'КонечнаяПродукция',
					},
					{
						name:'КоличествоИзвне',
					},
					{
						name:'КоличествоВнутри',
					},
					{
						name:'Заказ',
					},
					{
						name:'Проект',
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
						var грид = Ext.getCmp('ПотребностиПроизводства');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПланПроизводстваПоСменам.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПланПроизводстваПоСменам.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:24px;',
			width: 640,
			height: 24,
			items:
			[
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтветсвенный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:234px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Ответственный.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:426px;top:234px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланПроизводстваПоСменам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланПроизводстваПоСменам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланПроизводстваПоСменам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланПроизводстваПоСменам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:234px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПодразделениеКомпании.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:234px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланПроизводстваПоСменам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланПроизводстваПоСменам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланПроизводстваПоСменам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланПроизводстваПоСменам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Рамка',
			style: 'position:absolute;left:6px;top:213px;width:640px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Доступные склады:',
			style: 'position:absolute;left:6px;top:54px;width:640px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'ДоступныеСклады',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:99px;width:640px;height:108px;',
			height: 108,width: 640,
			columns:
			[
				{
					text:'№',
					width:'30',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Склад',
					width:'100',
					dataIndex:'Склад',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланПроизводстваПоСменам/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Склад',
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
						var грид = Ext.getCmp('ДоступныеСклады');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПланПроизводстваПоСменам.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПланПроизводстваПоСменам.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьМоментЗапасов',
			text: 'Момент определения запасов:',
			style: 'position:absolute;left:6px;top:30px;width:205px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'МоментЗапасов',
			width: 80,
			height: 19,
			style: 'position:absolute;left:211px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНачальнаяГраница',
			text: 'Начальная граница перепланирования:',
			style: 'position:absolute;left:6px;top:6px;width:205px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'НачальнаяГраница',
			width: 80,
			height: 19,
			style: 'position:absolute;left:211px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:75px;width:640px;height:24px;',
			width: 640,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:6px;top:258px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Проект.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:96px;top:258px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.ПланПроизводстваПоСменам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланПроизводстваПоСменам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.ПланПроизводстваПоСменам.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.ПланПроизводстваПоСменам.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
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
			style: 'position:absolute;left:0px;top:395px;width:670px;height:25px;',
			width: 670,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'OK',
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