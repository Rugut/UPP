Ext.require(['Данные.Документы.КорректировкаПоступления'], function () 
{
	Ext.define('Документы.КорректировкаПоступления.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:671px;height:478px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Корректировка поступления',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:32px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:174px;top:32px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:426px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:94px;top:32px;width:80px;height:19px;',
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
			style: 'position:absolute;left:194px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 569,
			height: 19,
			style: 'position:absolute;left:94px;top:426px;width:569px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:671px;height:25px;',
			width: 671,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:420px;top:32px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:498px;top:32px;width:72px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:105px;width:655px;height:250px;',
			height: 250,width: 655,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомерВходящегоДокумента',
			text: 'Вх. номер:',
			style: 'position:absolute;left:12px;top:112px;width:103px;height:19px;',
		},
		{
			id: 'Товары',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:641px;height:200px;',
			height: 200,width: 641,
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
					text:'Номенклатура',
					width:'220',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'120',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия ',
					width:'120',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Ед. мест',
					width:'50',
					dataIndex:'ЕдиницаМест',
					flex:1,
				},
				{
					text:'К. мест',
					width:'45',
					dataIndex:'КоэффициентМест',
					flex:1,
				},
				{
					text:'Мест',
					width:'60',
					dataIndex:'КоличествоМест',
					flex:1,
				},
				{
					text:'Количество до корректировки',
					width:'100',
					dataIndex:'КоличествоДоКорректировки',
					flex:1,
				},
				{
					text:'Количество до изменения',
					width:'100',
					dataIndex:'КоличествоДоИзменения',
					flex:1,
				},
				{
					text:'Количество',
					width:'64',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед.',
					width:'50',
					dataIndex:'Единица',
					flex:1,
				},
				{
					text:'К.',
					width:'45',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Цена до корректировки',
					width:'100',
					dataIndex:'ЦенаДоКорректировки',
					flex:1,
				},
				{
					text:'Цена до изменения',
					width:'100',
					dataIndex:'ЦенаДоИзменения',
					flex:1,
				},
				{
					text:'Цена',
					width:'80',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Сумма до корректировки',
					width:'100',
					dataIndex:'СуммаДоКорректировки',
					flex:1,
				},
				{
					text:'Сумма до изменения',
					width:'100',
					dataIndex:'СуммаДоИзменения',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Ставка НДС до изменения',
					width:'100',
					dataIndex:'СтавкаНДСДоИзменения',
					flex:1,
				},
				{
					text:'% НДС',
					width:'48',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС до корректировки',
					width:'99',
					dataIndex:'СуммаНДСДоКорректировки',
					flex:1,
				},
				{
					text:'Сумма НДС до изменения',
					width:'99',
					dataIndex:'СуммаНДСДоИзменения',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'79',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'Всего до корректировки',
					width:'81',
					dataIndex:'ВсегоДоКорректировки',
					flex:1,
				},
				{
					text:'Всего до изменения',
					width:'81',
					dataIndex:'ВсегоДоИзменения',
					flex:1,
				},
				{
					text:'Всего',
					width:'81',
					dataIndex:'Всего',
					flex:1,
				},
				{
					text:'Заказ поставщику',
					width:'100',
					dataIndex:'ЗаказПоставщику',
					flex:1,
				},
				{
					text:'Заказ',
					width:'120',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Страна происхождения',
					width:'120',
					dataIndex:'СтранаПроисхождения',
					flex:1,
				},
				{
					text:'Номер ГТД',
					width:'120',
					dataIndex:'НомерГТД',
					flex:1,
				},
				{
					text:'Склад',
					width:'100',
					dataIndex:'Склад',
					flex:1,
				},
				{
					text:'Реализовано в прошлые месяцы',
					width:'100',
					dataIndex:'РеализованоВПрошлыеМесяцы',
					flex:1,
				},
				{
					text:'Реализовано в прошлые годы',
					width:'100',
					dataIndex:'РеализованоВПрошлыеГоды',
					flex:1,
				},
				{
					text:'Документ партии',
					width:'100',
					dataIndex:'ДокументПартии',
					flex:1,
				},
				{
					text:'Счет учета (БУ)',
					width:'80',
					dataIndex:'СчетУчетаБУ',
					flex:1,
				},
				{
					text:'Расходы в НУ',
					width:'100',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
				{
					text:'Счет НДС',
					width:'80',
					dataIndex:'СчетУчетаНДС',
					flex:1,
				},
				{
					text:'Счет учета (НУ)',
					width:'80',
					dataIndex:'СчетУчетаНУ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаПоступления/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'СерияНоменклатуры',
					},
					{
						name:'ЕдиницаМест',
					},
					{
						name:'КоэффициентМест',
					},
					{
						name:'КоличествоМест',
					},
					{
						name:'КоличествоДоКорректировки',
					},
					{
						name:'КоличествоДоИзменения',
					},
					{
						name:'Количество',
					},
					{
						name:'Единица',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'ЦенаДоКорректировки',
					},
					{
						name:'ЦенаДоИзменения',
					},
					{
						name:'Цена',
					},
					{
						name:'СуммаДоКорректировки',
					},
					{
						name:'СуммаДоИзменения',
					},
					{
						name:'Сумма',
					},
					{
						name:'СтавкаНДСДоИзменения',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаНДСДоКорректировки',
					},
					{
						name:'СуммаНДСДоИзменения',
					},
					{
						name:'СуммаНДС',
					},
					{
						name:'ВсегоДоКорректировки',
					},
					{
						name:'ВсегоДоИзменения',
					},
					{
						name:'Всего',
					},
					{
						name:'ЗаказПоставщику',
					},
					{
						name:'Заказ',
					},
					{
						name:'СтранаПроисхождения',
					},
					{
						name:'НомерГТД',
					},
					{
						name:'Склад',
					},
					{
						name:'РеализованоВПрошлыеМесяцы',
					},
					{
						name:'РеализованоВПрошлыеГоды',
					},
					{
						name:'ДокументПартии',
					},
					{
						name:'СчетУчетаБУ',
					},
					{
						name:'ОтражениеВУСН',
					},
					{
						name:'СчетУчетаНДС',
					},
					{
						name:'СчетУчетаНУ',
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
						Ext.require(['Справочники.КорректировкаПоступления.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КорректировкаПоступления.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:641px;height:24px;',
			width: 641,
			height: 24,
			items:
			[
				'-',
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Серийные номера',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяПрочихДоходовИРасходов',
			text: 'Статья прочих доходов и расходов:',
			style: 'position:absolute;left:12px;top:7px;width:103px;height:28px;text-align:left;',
		},
					]
				},
				{
					items:
					[
		{
			id: 'Услуги',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:641px;height:200px;',
			height: 200,width: 641,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'121',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Содержание услуги, доп. сведения до изменения',
					width:'99',
					dataIndex:'СодержаниеДоИзменения',
					flex:1,
				},
				{
					text:'Содержание услуги, доп. сведения',
					width:'220',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'Количество до корректировки',
					width:'100',
					dataIndex:'КоличествоДоКорректировки',
					flex:1,
				},
				{
					text:'Количество до изменения',
					width:'100',
					dataIndex:'КоличествоДоИзменения',
					flex:1,
				},
				{
					text:'Количество',
					width:'64',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Цена до корректировки',
					width:'100',
					dataIndex:'ЦенаДоКорректировки',
					flex:1,
				},
				{
					text:'Цена до изменения',
					width:'100',
					dataIndex:'ЦенаДоИзменения',
					flex:1,
				},
				{
					text:'Цена',
					width:'80',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Сумма до корректировки',
					width:'100',
					dataIndex:'СуммаДоКорректировки',
					flex:1,
				},
				{
					text:'Сумма до изменения',
					width:'100',
					dataIndex:'СуммаДоИзменения',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'% НДС до изменения',
					width:'100',
					dataIndex:'СтавкаНДСДоИзменения',
					flex:1,
				},
				{
					text:'% НДС',
					width:'48',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС до корректировки',
					width:'100',
					dataIndex:'СуммаНДСДоКорректировки',
					flex:1,
				},
				{
					text:'Сумма НДС до изменения',
					width:'100',
					dataIndex:'СуммаНДСДоИзменения',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'80',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'Всего до корректировки',
					width:'80',
					dataIndex:'ВсегоДоКорректировки',
					flex:1,
				},
				{
					text:'Всего до изменения',
					width:'80',
					dataIndex:'ВсегоДоИзменения',
					flex:1,
				},
				{
					text:'Всего',
					width:'80',
					dataIndex:'Всего',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'120',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Подразделение организации',
					width:'120',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Заказ поставщику',
					width:'100',
					dataIndex:'ЗаказПоставщику',
					flex:1,
				},
				{
					text:'Заказ',
					width:'120',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'120',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Счет затрат (БУ)',
					width:'88',
					dataIndex:'СчетЗатрат',
					flex:1,
				},
				{
					text:'Счет затрат (НУ)',
					width:'88',
					dataIndex:'СчетЗатратНУ',
					flex:1,
				},
				{
					text:'Характер затрат',
					width:'120',
					dataIndex:'ХарактерЗатрат',
					flex:1,
				},
				{
					text:'Вид аналитики',
					width:'220',
					dataIndex:'ВидАналитики',
					flex:1,
				},
				{
					text:'Вид аналитики (доп)',
					width:'220',
					dataIndex:'ВидАналитикиДоп',
					flex:1,
				},
				{
					text:'Вид субконто 1',
					width:'73',
					dataIndex:'ВидСубконто1',
					flex:1,
				},
				{
					text:'Вид субконто 2',
					width:'73',
					dataIndex:'ВидСубконто2',
					flex:1,
				},
				{
					text:'Вид субконто 3',
					width:'73',
					dataIndex:'ВидСубконто3',
					flex:1,
				},
				{
					text:'Вид субконто 1 (НУ )',
					width:'91',
					dataIndex:'ВидСубконтоНУ1',
					flex:1,
				},
				{
					text:'Вид субконто 2 (НУ)',
					width:'91',
					dataIndex:'ВидСубконтоНУ2',
					flex:1,
				},
				{
					text:'Вид субконто 3 (НУ)',
					width:'91',
					dataIndex:'ВидСубконтоНУ3',
					flex:1,
				},
				{
					text:'Аналитика',
					width:'70',
					dataIndex:'Аналитика',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'77',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Номенклатурная группа (доп)',
					width:'73',
					dataIndex:'НоменклатурнаяГруппаДоп',
					flex:1,
				},
				{
					text:'Способ распределения затрат',
					width:'73',
					dataIndex:'СпособРаспределенияЗатратНаВыпуск',
					flex:1,
				},
				{
					text:'Субконто 1',
					width:'93',
					dataIndex:'Субконто1',
					flex:1,
				},
				{
					text:'Субконто 2',
					width:'93',
					dataIndex:'Субконто2',
					flex:1,
				},
				{
					text:'Субконто 3',
					width:'93',
					dataIndex:'Субконто3',
					flex:1,
				},
				{
					text:'Субконто 1 (НУ)',
					width:'93',
					dataIndex:'СубконтоНУ1',
					flex:1,
				},
				{
					text:'Субконто 2 (НУ)',
					width:'93',
					dataIndex:'СубконтоНУ2',
					flex:1,
				},
				{
					text:'Субконто 3 (НУ)',
					width:'93',
					dataIndex:'СубконтоНУ3',
					flex:1,
				},
				{
					text:'Продукция',
					width:'93',
					dataIndex:'Продукция',
					flex:1,
				},
				{
					text:'Характеристика продукции',
					width:'93',
					dataIndex:'ХарактеристикаПродукции',
					flex:1,
				},
				{
					text:'Серия продукции',
					width:'93',
					dataIndex:'СерияПродукции',
					flex:1,
				},
				{
					text:'Объект строительства',
					width:'179',
					dataIndex:'ОбъектСтроительства',
					flex:1,
				},
				{
					text:'Способ строительства',
					width:'177',
					dataIndex:'СпособСтроительства',
					flex:1,
				},
				{
					text:'Расходы в НУ',
					width:'100',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
				{
					text:'Счет учета НДС',
					width:'88',
					dataIndex:'СчетУчетаНДС',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаПоступления/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'СодержаниеДоИзменения',
					},
					{
						name:'Содержание',
					},
					{
						name:'КоличествоДоКорректировки',
					},
					{
						name:'КоличествоДоИзменения',
					},
					{
						name:'Количество',
					},
					{
						name:'ЦенаДоКорректировки',
					},
					{
						name:'ЦенаДоИзменения',
					},
					{
						name:'Цена',
					},
					{
						name:'СуммаДоКорректировки',
					},
					{
						name:'СуммаДоИзменения',
					},
					{
						name:'Сумма',
					},
					{
						name:'СтавкаНДСДоИзменения',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаНДСДоКорректировки',
					},
					{
						name:'СуммаНДСДоИзменения',
					},
					{
						name:'СуммаНДС',
					},
					{
						name:'ВсегоДоКорректировки',
					},
					{
						name:'ВсегоДоИзменения',
					},
					{
						name:'Всего',
					},
					{
						name:'Подразделение',
					},
					{
						name:'ПодразделениеОрганизации',
					},
					{
						name:'ЗаказПоставщику',
					},
					{
						name:'Заказ',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'СчетЗатрат',
					},
					{
						name:'СчетЗатратНУ',
					},
					{
						name:'ХарактерЗатрат',
					},
					{
						name:'ВидАналитики',
					},
					{
						name:'ВидАналитикиДоп',
					},
					{
						name:'ВидСубконто1',
					},
					{
						name:'ВидСубконто2',
					},
					{
						name:'ВидСубконто3',
					},
					{
						name:'ВидСубконтоНУ1',
					},
					{
						name:'ВидСубконтоНУ2',
					},
					{
						name:'ВидСубконтоНУ3',
					},
					{
						name:'Аналитика',
					},
					{
						name:'НоменклатурнаяГруппа',
					},
					{
						name:'НоменклатурнаяГруппаДоп',
					},
					{
						name:'СпособРаспределенияЗатратНаВыпуск',
					},
					{
						name:'Субконто1',
					},
					{
						name:'Субконто2',
					},
					{
						name:'Субконто3',
					},
					{
						name:'СубконтоНУ1',
					},
					{
						name:'СубконтоНУ2',
					},
					{
						name:'СубконтоНУ3',
					},
					{
						name:'Продукция',
					},
					{
						name:'ХарактеристикаПродукции',
					},
					{
						name:'СерияПродукции',
					},
					{
						name:'ОбъектСтроительства',
					},
					{
						name:'СпособСтроительства',
					},
					{
						name:'ОтражениеВУСН',
					},
					{
						name:'СчетУчетаНДС',
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
						var грид = Ext.getCmp('Услуги');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КорректировкаПоступления.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КорректировкаПоступления.ФормаДокументаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:641px;height:24px;',
			width: 641,
			height: 24,
			items:
			[
				'-',
				{
					text:'Подбор',
				},
				'-',
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаВходящегоДокумента',
			text: 'Вх. дата:',
			style: 'position:absolute;left:336px;top:112px;width:110px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:12px;top:184px;width:103px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный.Представление',
			width: 210,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:119px;top:184px;width:210px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КорректировкаПоступления.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаПоступления.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КорректировкаПоступления.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаПоступления.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерВходящегоДокумента',
			width: 210,
			height: 19,
			style: 'position:absolute;left:119px;top:112px;width:210px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаВходящегоДокумента',
			width: 94,
			height: 19,
			style: 'position:absolute;left:450px;top:112px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Рамка',
			style: 'position:absolute;left:12px;top:91px;width:634px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьГрузоотправитель',
			text: 'Грузоотправитель:',
			style: 'position:absolute;left:12px;top:136px;width:103px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Грузоотправитель.Представление',
			width: 210,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:119px;top:136px;width:210px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КорректировкаПоступления.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаПоступления.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КорректировкаПоступления.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаПоступления.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьГрузополучатель',
			text: 'Грузополучатель:',
			style: 'position:absolute;left:12px;top:160px;width:103px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Грузополучатель.Представление',
			width: 210,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:119px;top:160px;width:210px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КорректировкаПоступления.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаПоступления.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КорректировкаПоступления.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаПоступления.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СтатьяПрочихДоходовИРасходов.Представление',
			width: 528,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:119px;top:7px;width:528px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КорректировкаПоступления.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаПоступления.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КорректировкаПоступления.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаПоступления.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетов',
			text: 'Сумма <нет валюты>:',
			style: 'position:absolute;left:12px;top:63px;width:103px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СуммаВзаиморасчетов',
			width: 86,
			height: 19,
			style: 'position:absolute;left:119px;top:63px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:215px;top:63px;width:432px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			text: 'Рамка',
			style: 'position:absolute;left:12px;top:41px;width:634px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьБанковскийСчетКонтрагента',
			text: 'Б/счет контрагента:',
			style: 'position:absolute;left:336px;top:136px;width:110px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'БанковскийСчетКонтрагента.Представление',
			width: 197,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:450px;top:136px;width:197px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КорректировкаПоступления.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаПоступления.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КорректировкаПоступления.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаПоступления.ФормаДокументаСобытия");
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
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:84px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:94px;top:56px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Документы.КорректировкаПоступления.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаПоступления.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Документы.КорректировкаПоступления.ФормаДокументаСобытия'], function ()
					{
						var объект = Ext.create("Документы.КорректировкаПоступления.ФормаДокументаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОтражатьВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:328px;top:32px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактура',
			text: 'Счет-фактура:',
			style: 'position:absolute;left:8px;top:381px;width:84px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаСчетФактура',
			text: 'Ввести счет-фактуру',
			style: 'position:absolute;left:94px;top:381px;width:366px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:467px;top:359px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Всего',
			width: 116,
			height: 17,
			style: 'position:absolute;left:540px;top:359px;width:116px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:467px;top:380px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВсегоНДС',
			width: 116,
			height: 17,
			style: 'position:absolute;left:540px;top:380px;width:116px;height:17px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:576px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументПоступления',
			text: 'Основание:',
			style: 'position:absolute;left:8px;top:80px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументПоступления',
			width: 220,
			height: 19,
			style: 'position:absolute;left:94px;top:80px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Восстановить НДС в книге продаж',
			style: 'position:absolute;left:8px;top:359px;width:452px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаИсправляемыйДокументПоступления',
			text: 'Не указан',
			style: 'position:absolute;left:146px;top:402px;width:517px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИсправляемыйДокументПоступленияНадпись',
			text: 'Исправляемый документ:',
			style: 'position:absolute;left:8px;top:402px;width:133px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Корректировать',
			text: 'Корректировать:',
			style: 'position:absolute;left:328px;top:56px;width:90px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Упр. и регл. учет',
			style: 'position:absolute;left:420px;top:56px;width:232px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Только НДС',
			style: 'position:absolute;left:420px;top:80px;width:232px;height:19px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:453px;width:671px;height:25px;',
			width: 671,
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