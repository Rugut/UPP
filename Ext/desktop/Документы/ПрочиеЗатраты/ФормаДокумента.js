Ext.define('Документы.ПрочиеЗатраты.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:491px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Затраты прочие',
	
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
			style: 'position:absolute;left:178px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:439px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:439px;width:566px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:424px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:503px;top:33px;width:74px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:108px;width:654px;height:301px;',
			height: 301,width: 654,
			items:
			[
				{
					title:'Затраты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:640px;height:245px;',
			height: 245,width: 640,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'143',
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
					text:'Счет затрат',
					width:'80',
					dataIndex:'СчетЗатрат',
					flex:1,
				},
				{
					text:'Счет затрат (НУ)',
					width:'80',
					dataIndex:'СчетЗатратНУ',
					flex:1,
				},
				{
					text:'Вид аналитики',
					width:'100',
					dataIndex:'ВидАналитики',
					flex:1,
				},
				{
					text:'Вид аналитики (доп)',
					width:'100',
					dataIndex:'ВидАналитикиДоп',
					flex:1,
				},
				{
					text:'Вид субконто 1',
					width:'100',
					dataIndex:'ВидСубконто1',
					flex:1,
				},
				{
					text:'Вид субконто 2',
					width:'100',
					dataIndex:'ВидСубконто2',
					flex:1,
				},
				{
					text:'Вид субконто 3',
					width:'100',
					dataIndex:'ВидСубконто3',
					flex:1,
				},
				{
					text:'Вид субконто 1 (НУ)',
					width:'100',
					dataIndex:'ВидСубконтоНУ1',
					flex:1,
				},
				{
					text:'Вид субконто 2 (НУ)',
					width:'100',
					dataIndex:'ВидСубконтоНУ2',
					flex:1,
				},
				{
					text:'Вид субконто 3 (НУ)',
					width:'100',
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
					width:'144',
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
					text:'Способ распределения затрат',
					width:'100',
					dataIndex:'СпособРаспределенияЗатратНаВыпуск',
					flex:1,
				},
				{
					text:'Субконто 1',
					width:'100',
					dataIndex:'Субконто1',
					flex:1,
				},
				{
					text:'Субконто 2',
					width:'100',
					dataIndex:'Субконто2',
					flex:1,
				},
				{
					text:'Субконто 3',
					width:'100',
					dataIndex:'Субконто3',
					flex:1,
				},
				{
					text:'Субконто НУ 1',
					width:'100',
					dataIndex:'СубконтоНУ1',
					flex:1,
				},
				{
					text:'Субконто НУ 2',
					width:'100',
					dataIndex:'СубконтоНУ2',
					flex:1,
				},
				{
					text:'Субконто НУ 3',
					width:'100',
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
					width:'105',
					dataIndex:'ХарактеристикаПродукции',
					flex:1,
				},
				{
					text:'Серия продукции',
					width:'105',
					dataIndex:'СерияПродукции',
					flex:1,
				},
				{
					text:'Объект строительства',
					width:'92',
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
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Сумма (БУ)',
					width:'80',
					dataIndex:'СуммаРегл',
					flex:1,
				},
				{
					text:'Сумма (НУ)',
					width:'80',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПрочиеЗатраты/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'ХарактерЗатрат',
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
						name:'Проект',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:24px;',
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
					title:'Бухгалтерский учет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Счет',
			style: 'position:absolute;left:90px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Субконто1',
			style: 'position:absolute;left:90px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Субконто2',
			style: 'position:absolute;left:90px;top:54px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Субконто3',
			style: 'position:absolute;left:90px;top:78px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконто2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:6px;top:54px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконто3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:6px;top:78px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконто1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:6px;top:30px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчет',
			text: 'Счет:',
			style: 'position:absolute;left:6px;top:6px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСРасшифровкойСчета',
			text: '',
			style: 'position:absolute;left:191px;top:6px;width:455px;height:19px;',
		},
					]
				},
				{
					title:'Налоговый учет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетНУ',
			text: 'Счет:',
			style: 'position:absolute;left:6px;top:6px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СчетНУ',
			style: 'position:absolute;left:90px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУ1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:6px;top:30px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоНУ1',
			style: 'position:absolute;left:90px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУ2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:6px;top:54px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоНУ2',
			style: 'position:absolute;left:90px;top:54px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУ3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:6px;top:78px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоНУ3',
			style: 'position:absolute;left:90px;top:78px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСРасшифровкойСчетаНУ',
			text: '',
			style: 'position:absolute;left:191px;top:6px;width:455px;height:19px;',
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
			disabled: false,
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
			disabled: false,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:415px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:415px;width:566px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:466px;width:670px;height:25px;',
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
			style: 'position:absolute;left:336px;top:54px;width:88px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:424px;top:57px;width:238px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:580px;top:33px;width:82px;height:19px;',
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
			disabled: false,
			name: 'Проект',
			style: 'position:absolute;left:424px;top:81px;width:238px;height:19px;',
		},
	],
	dockedItems:
	[
	]
});