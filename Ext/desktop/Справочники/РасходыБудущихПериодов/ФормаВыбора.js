Ext.define('Справочники.РасходыБудущихПериодов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:716px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Расходы будущих периодов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:142px;height:284px;',
			height: 284,width: 142,
			columns:
			[
				{
					text:'Код',
					width:'79',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'371',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасходыБудущихПериодов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:157px;top:33px;width:551px;height:284px;',
			height: 284,width: 551,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'72',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Вид РБП',
					width:'220',
					dataIndex:'ВидРБП',
					flex:1,
				},
				{
					text:'Способ признания расходов',
					width:'100',
					dataIndex:'СпособПризнанияРасходов',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Начало списания',
					width:'80',
					dataIndex:'ДатаНачалаСписания',
					flex:1,
				},
				{
					text:'Окончание списания',
					width:'80',
					dataIndex:'ДатаОкончанияСписания',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'120',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Подразделение (орг.)',
					width:'120',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'120',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Счет',
					width:'80',
					dataIndex:'СчетБУ',
					flex:1,
				},
				{
					text:'Счет (НУ)',
					width:'80',
					dataIndex:'СчетНУ',
					flex:1,
				},
				{
					text:'Хар-р затрат',
					width:'120',
					dataIndex:'ХарактерЗатрат',
					flex:1,
				},
				{
					text:'Вид аналитики',
					width:'284',
					dataIndex:'ВидАналитики',
					flex:1,
				},
				{
					text:'Вид аналитики (доп.)',
					width:'284',
					dataIndex:'ВидАналитикиДоп',
					flex:1,
				},
				{
					text:'Вид субконто 1',
					width:'95',
					dataIndex:'ВидСубконто1',
					flex:1,
				},
				{
					text:'Вид субконто 2',
					width:'95',
					dataIndex:'ВидСубконто2',
					flex:1,
				},
				{
					text:'Вид субконто 3',
					width:'95',
					dataIndex:'ВидСубконто3',
					flex:1,
				},
				{
					text:'Вид субконто 1 (НУ)',
					width:'79',
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
					width:'79',
					dataIndex:'ВидСубконтоНУ3',
					flex:1,
				},
				{
					text:'Аналитика',
					width:'117',
					dataIndex:'Аналитика',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'183',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Номенклатурная группа (доп)',
					width:'154',
					dataIndex:'НоменклатурнаяГруппаДоп',
					flex:1,
				},
				{
					text:'Способ распределения затрат на выпуск',
					width:'154',
					dataIndex:'СпособРаспределенияЗатратНаВыпуск',
					flex:1,
				},
				{
					text:'Субконто 1',
					width:'101',
					dataIndex:'Субконто1',
					flex:1,
				},
				{
					text:'Субконто 2',
					width:'101',
					dataIndex:'Субконто2',
					flex:1,
				},
				{
					text:'Субконто 3',
					width:'101',
					dataIndex:'Субконто3',
					flex:1,
				},
				{
					text:'Субконто 1 (НУ)',
					width:'101',
					dataIndex:'СубконтоНУ1',
					flex:1,
				},
				{
					text:'Субконто 2 (НУ)',
					width:'101',
					dataIndex:'СубконтоНУ2',
					flex:1,
				},
				{
					text:'Субконто 3 (НУ)',
					width:'101',
					dataIndex:'СубконтоНУ3',
					flex:1,
				},
				{
					text:'Продукция',
					width:'101',
					dataIndex:'Продукция',
					flex:1,
				},
				{
					text:'Характеристика продукции',
					width:'101',
					dataIndex:'ХарактеристикаПродукции',
					flex:1,
				},
				{
					text:'Серия продукции',
					width:'101',
					dataIndex:'СерияПродукции',
					flex:1,
				},
				{
					text:'Объект строительства',
					width:'117',
					dataIndex:'ОбъектСтроительства',
					flex:1,
				},
				{
					text:'Способ строительства',
					width:'110',
					dataIndex:'СпособСтроительства',
					flex:1,
				},
				{
					text:'Вид актива',
					width:'100',
					dataIndex:'ВидАктива',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасходыБудущихПериодов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'ВидРБП',
					},
					{
						name:'СпособПризнанияРасходов',
					},
					{
						name:'Сумма',
					},
					{
						name:'ДатаНачалаСписания',
					},
					{
						name:'ДатаОкончанияСписания',
					},
					{
						name:'Подразделение',
					},
					{
						name:'ПодразделениеОрганизации',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'СчетБУ',
					},
					{
						name:'СчетНУ',
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
						name:'ВидАктива',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:716px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});