Ext.define('Документы.КорректировкаПрочихЗатрат.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:505px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировка прочих затрат',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:19px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:453px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:453px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
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
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:424px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:501px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:110px;width:636px;height:313px;',
			height: 313,width: 636,
			items:
			[
				{
					title:'Затраты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:255px;',
			height: 255,width: 622,
			columns:
			[
				{
					text:'№',
					width:'26',
					dataIndex:'НомерCтроки',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'198',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Хар-р затрат',
					width:'104',
					dataIndex:'ХарактерЗатрат',
					flex:1,
				},
				{
					text:'Сумма',
					width:'77',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Сумма (БУ)',
					width:'81',
					dataIndex:'СуммаРегл',
					flex:1,
				},
				{
					text:'Сумма (НУ)',
					width:'73',
					dataIndex:'СуммаНал',
					flex:1,
				},
				{
					text:'Заказ',
					width:'100',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Счет затрат (БУ)',
					width:'90',
					dataIndex:'СчетЗатрат',
					flex:1,
				},
				{
					text:'Счет затрат (НУ)',
					width:'90',
					dataIndex:'СчетЗатратНУ',
					flex:1,
				},
				{
					text:'Вид аналитики',
					width:'70',
					dataIndex:'ВидАналитики',
					flex:1,
				},
				{
					text:'Вид аналитики (доп)',
					width:'70',
					dataIndex:'ВидАналитикиДоп',
					flex:1,
				},
				{
					text:'Вид субконто 1',
					width:'36',
					dataIndex:'ВидСубконто1',
					flex:1,
				},
				{
					text:'Вид субконто 2',
					width:'42',
					dataIndex:'ВидСубконто2',
					flex:1,
				},
				{
					text:'Вид субконто 3',
					width:'40',
					dataIndex:'ВидСубконто3',
					flex:1,
				},
				{
					text:'Вид субконто 1 (НУ)',
					width:'61',
					dataIndex:'ВидСубконтоНУ1',
					flex:1,
				},
				{
					text:'Вид субконто 2 (НУ)',
					width:'79',
					dataIndex:'ВидСубконтоНУ2',
					flex:1,
				},
				{
					text:'Вид субконто 3 (НУ)',
					width:'70',
					dataIndex:'ВидСубконтоНУ3',
					flex:1,
				},
				{
					text:'Аналитика',
					width:'108',
					dataIndex:'Аналитика',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'107',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Номенклатурная группа (доп',
					width:'108',
					dataIndex:'НоменклатурнаяГруппаДоп',
					flex:1,
				},
				{
					text:'Способ распределения затрат на выпуск',
					width:'109',
					dataIndex:'СпособРаспределенияЗатратНаВыпуск',
					flex:1,
				},
				{
					text:'Субконто 1',
					width:'130',
					dataIndex:'Субконто1',
					flex:1,
				},
				{
					text:'Субконто 2',
					width:'132',
					dataIndex:'Субконто2',
					flex:1,
				},
				{
					text:'Субконто 3',
					width:'127',
					dataIndex:'Субконто3',
					flex:1,
				},
				{
					text:'Субконто 1 (НУ)',
					width:'130',
					dataIndex:'СубконтоНУ1',
					flex:1,
				},
				{
					text:'Субконто 2 (НУ)',
					width:'132',
					dataIndex:'СубконтоНУ2',
					flex:1,
				},
				{
					text:'Субконто 3 (НУ)',
					width:'128',
					dataIndex:'СубконтоНУ3',
					flex:1,
				},
				{
					text:'Продукция',
					width:'105',
					dataIndex:'Продукция',
					flex:1,
				},
				{
					text:'Характеристика продукции',
					width:'107',
					dataIndex:'ХарактеристикаПродукции',
					flex:1,
				},
				{
					text:'Серия продукции',
					width:'103',
					dataIndex:'СерияПродукции',
					flex:1,
				},
				{
					text:'Объект строительства',
					width:'100',
					dataIndex:'ОбъектСтроительства',
					flex:1,
				},
				{
					text:'Способ строительства',
					width:'100',
					dataIndex:'СпособСтроительства',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаПрочихЗатрат/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерCтроки',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'ХарактерЗатрат',
					},
					{
						name:'Сумма',
					},
					{
						name:'СуммаРегл',
					},
					{
						name:'СуммаНал',
					},
					{
						name:'Заказ',
					},
					{
						name:'СчетЗатрат',
					},
					{
						name:'СчетЗатратНУ',
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
						name:'Проект',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				'-',
				'-',
				{
					text:'Подбор',
				},
			]
		},
					]
				},
				{
					title:'Получатели',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:255px;',
			height: 255,width: 622,
			columns:
			[
				{
					text:'№',
					width:'26',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'190',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Сумма',
					width:'87',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Сумма (БУ)',
					width:'82',
					dataIndex:'СуммаРегл',
					flex:1,
				},
				{
					text:'Сумма (НУ)',
					width:'82',
					dataIndex:'СуммаНал',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'100',
					dataIndex:'ПодразделениеПолучатель',
					flex:1,
				},
				{
					text:'Подразделение организации',
					width:'100',
					dataIndex:'ПодразделениеОрганизацииПолучатель',
					flex:1,
				},
				{
					text:'Заказ',
					width:'100',
					dataIndex:'ЗаказПолучатель',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'100',
					dataIndex:'СтатьяЗатратПолучатель',
					flex:1,
				},
				{
					text:'Хар-р затрат',
					width:'100',
					dataIndex:'ХарактерЗатрат',
					flex:1,
				},
				{
					text:'Счет затрат (БУ)',
					width:'100',
					dataIndex:'СчетЗатратПолучатель',
					flex:1,
				},
				{
					text:'Счет затрат (НУ)',
					width:'100',
					dataIndex:'СчетЗатратПолучательНУ',
					flex:1,
				},
				{
					text:'Вид аналитики',
					width:'70',
					dataIndex:'ВидАналитики',
					flex:1,
				},
				{
					text:'Вид аналитики (доп)',
					width:'70',
					dataIndex:'ВидАналитикиДоп',
					flex:1,
				},
				{
					text:'Вид субконто 1',
					width:'35',
					dataIndex:'ВидСубконто1',
					flex:1,
				},
				{
					text:'Вид субконто 2',
					width:'43',
					dataIndex:'ВидСубконто2',
					flex:1,
				},
				{
					text:'Вид субконто 3',
					width:'40',
					dataIndex:'ВидСубконто3',
					flex:1,
				},
				{
					text:'Вид субконто 1 (НУ)',
					width:'63',
					dataIndex:'ВидСубконтоНУ1',
					flex:1,
				},
				{
					text:'Вид субконто 2 (НУ)',
					width:'77',
					dataIndex:'ВидСубконтоНУ2',
					flex:1,
				},
				{
					text:'Вид субконто 3 (НУ)',
					width:'70',
					dataIndex:'ВидСубконтоНУ3',
					flex:1,
				},
				{
					text:'Аналитика',
					width:'137',
					dataIndex:'Аналитика',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'136',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Номенклатурная группа (доп)',
					width:'100',
					dataIndex:'НоменклатурнаяГруппаДоп',
					flex:1,
				},
				{
					text:'Способ распределения затрат на выпуск',
					width:'127',
					dataIndex:'СпособРаспределенияЗатратНаВыпуск',
					flex:1,
				},
				{
					text:'Субконто 1',
					width:'164',
					dataIndex:'Субконто1',
					flex:1,
				},
				{
					text:'Субконто 2',
					width:'168',
					dataIndex:'Субконто2',
					flex:1,
				},
				{
					text:'Субконто 3',
					width:'161',
					dataIndex:'Субконто3',
					flex:1,
				},
				{
					text:'Субконто 1 (НУ)',
					width:'164',
					dataIndex:'СубконтоНУ1',
					flex:1,
				},
				{
					text:'Субконто 2 (НУ)',
					width:'168',
					dataIndex:'СубконтоНУ2',
					flex:1,
				},
				{
					text:'Субконто 3 (НУ)',
					width:'160',
					dataIndex:'СубконтоНУ3',
					flex:1,
				},
				{
					text:'Продукция получатель',
					width:'133',
					dataIndex:'Продукция',
					flex:1,
				},
				{
					text:'Характеристика продукции',
					width:'136',
					dataIndex:'ХарактеристикаПродукции',
					flex:1,
				},
				{
					text:'Серия продукции',
					width:'131',
					dataIndex:'СерияПродукции',
					flex:1,
				},
				{
					text:'Объект строительства получатель',
					width:'100',
					dataIndex:'ОбъектСтроительства',
					flex:1,
				},
				{
					text:'Способ строительства получатель',
					width:'100',
					dataIndex:'СпособСтроительства',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаПрочихЗатрат/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'Сумма',
					},
					{
						name:'СуммаРегл',
					},
					{
						name:'СуммаНал',
					},
					{
						name:'ПодразделениеПолучатель',
					},
					{
						name:'ПодразделениеОрганизацииПолучатель',
					},
					{
						name:'ЗаказПолучатель',
					},
					{
						name:'СтатьяЗатратПолучатель',
					},
					{
						name:'ХарактерЗатрат',
					},
					{
						name:'СчетЗатратПолучатель',
					},
					{
						name:'СчетЗатратПолучательНУ',
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
						name:'Проект',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				'-',
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:429px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:429px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:480px;width:652px;height:25px;',
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
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:336px;top:53px;width:88px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:573px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:336px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
	]
});