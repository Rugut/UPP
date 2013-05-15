Ext.define('Документы.ВыпускПродукции.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:672px;height:406px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выпуск продукции',
	
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
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:354px;width:88px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:96px;top:354px;width:568px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:672px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:424px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:499px;top:33px;width:69px;height:19px;',
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
			name: 'НадписьСклад',
			text: 'Склад:',
			style: 'position:absolute;left:336px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Склад',
			style: 'position:absolute;left:424px;top:57px;width:240px;height:19px;',
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
			style: 'position:absolute;left:8px;top:329px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:329px;width:568px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:381px;width:672px;height:25px;',
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
			style: 'position:absolute;left:336px;top:77px;width:88px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:424px;top:81px;width:240px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:572px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:108px;width:656px;height:213px;',
			height: 213,width: 656,
			items:
			[
				{
					title:'Продукция',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:642px;height:154px;',
			height: 154,width: 642,
			columns:
			[
				{
					text:'№',
					width:'30',
					dataIndex:'НомерCтроки',
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
					text:'Продукция',
					width:'200',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика продукции',
					width:'200',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия продукции',
					width:'200',
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
					text:'К.мест',
					width:'45',
					dataIndex:'КоэффициентМест',
					flex:1,
				},
				{
					text:'Мест',
					width:'67',
					dataIndex:'КоличествоМест',
					flex:1,
				},
				{
					text:'Количество',
					width:'67',
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
					text:'Счет учета (БУ)',
					width:'80',
					dataIndex:'СчетУчетаБУ',
					flex:1,
				},
				{
					text:'Счет учета (НУ)',
					width:'80',
					dataIndex:'СчетУчетаНУ',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'223',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'100',
					dataIndex:'Спецификация',
					flex:1,
				},
				{
					text:'Заказы',
					width:'225',
					dataIndex:'Заказы',
					flex:1,
				},
				{
					text:'Затраты',
					width:'113',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Резерв',
					width:'112',
					dataIndex:'ЗаказРезерв',
					flex:1,
				},
				{
					text:'Качество',
					width:'100',
					dataIndex:'Качество',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВыпускПродукции/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерCтроки',
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
						name:'Количество',
					},
					{
						name:'Единица',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'СчетУчетаБУ',
					},
					{
						name:'СчетУчетаНУ',
					},
					{
						name:'НоменклатурнаяГруппа',
					},
					{
						name:'Спецификация',
					},
					{
						name:'Заказы',
					},
					{
						name:'Заказ',
					},
					{
						name:'ЗаказРезерв',
					},
					{
						name:'Качество',
					},
				]
			},
		},
					]
				},
				{
					title:'Счета затрат',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СчетЗатрат',
			style: 'position:absolute;left:86px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетЗатрат',
			text: 'Счет (БУ):',
			style: 'position:absolute;left:6px;top:6px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СчетЗатратНУ',
			style: 'position:absolute;left:86px;top:30px;width:88px;height:19px;',
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
	]
});