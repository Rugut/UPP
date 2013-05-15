Ext.define('Документы.ПеремещениеТоваров.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:416px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Перемещение товаров',
	
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
			style: 'position:absolute;left:8px;top:365px;width:79px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:87px;top:365px;width:557px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:406px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:485px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:636px;height:233px;',
			height: 233,width: 636,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:177px;',
			height: 177,width: 622,
			columns:
			[
				{
					text:'№',
					width:'30',
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
					width:'252',
					dataIndex:'Номенклатура',
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
					width:'64',
					dataIndex:'КоличествоМест',
					flex:1,
				},
				{
					text:'Количество',
					width:'65',
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
					text:'Розн. цена (руб.)',
					width:'90',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Документ резерва',
					width:'250',
					dataIndex:'ДокументРезерва',
					flex:1,
				},
				{
					text:'Внутренний заказ',
					width:'153',
					dataIndex:'ВнутреннийЗаказ',
					flex:1,
				},
				{
					text:'Счет учета отпр. (БУ)',
					width:'87',
					dataIndex:'СчетУчетаБУ',
					flex:1,
				},
				{
					text:'Счет учета получ. (БУ)',
					width:'100',
					dataIndex:'НовыйСчетУчетаБУ',
					flex:1,
				},
				{
					text:'Счет учета отпр. (НУ)',
					width:'100',
					dataIndex:'СчетУчетаНУ',
					flex:1,
				},
				{
					text:'Счет учета получ. (НУ)',
					width:'100',
					dataIndex:'НовыйСчетУчетаНУ',
					flex:1,
				},
				{
					text:'Принятые, счет учета (БУ)',
					width:'100',
					dataIndex:'ПринятыеСчетУчетаБУ',
					flex:1,
				},
				{
					text:'Принятые счет учета (НУ)',
					width:'100',
					dataIndex:'ПринятыеСчетУчетаНУ',
					flex:1,
				},
				{
					text:'Новый счет учета принятых (БУ)',
					width:'100',
					dataIndex:'НовыйПринятыеСчетУчетаБУ',
					flex:1,
				},
				{
					text:'Новый счет учета принятых (НУ)',
					width:'100',
					dataIndex:'НовыйПринятыеСчетУчетаНУ',
					flex:1,
				},
				{
					text:'Качество',
					width:'100',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Принадлежность номенклатуры',
					width:'100',
					dataIndex:'ПринадлежностьНоменклатуры',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПеремещениеТоваров/ВыбратьПоСсылке/100'},
				fields:
				[
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
						name:'Количество',
					},
					{
						name:'Единица',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'Цена',
					},
					{
						name:'ДокументРезерва',
					},
					{
						name:'ВнутреннийЗаказ',
					},
					{
						name:'СчетУчетаБУ',
					},
					{
						name:'НовыйСчетУчетаБУ',
					},
					{
						name:'СчетУчетаНУ',
					},
					{
						name:'НовыйСчетУчетаНУ',
					},
					{
						name:'ПринятыеСчетУчетаБУ',
					},
					{
						name:'ПринятыеСчетУчетаНУ',
					},
					{
						name:'НовыйПринятыеСчетУчетаБУ',
					},
					{
						name:'НовыйПринятыеСчетУчетаНУ',
					},
					{
						name:'Качество',
					},
					{
						name:'ПринадлежностьНоменклатуры',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				{
					text:'Поиск по штрихкоду',
				},
				'-',
				'-',
				'-',
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Изменить',
				},
				'-',
				{
					text:'Переоценка',
				},
			]
		},
					]
				},
				{
					title:'Возвратная тара',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				{
					text:'Заполнить по внутреннему заказу',
				},
				{
					text:'Добавить по внутреннему заказу',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:177px;',
			height: 177,width: 622,
			columns:
			[
				{
					text:'№',
					width:'30',
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
					width:'250',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Количество',
					width:'65',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Документ резерва',
					width:'250',
					dataIndex:'ДокументРезерва',
					flex:1,
				},
				{
					text:'Внутренний заказ',
					width:'153',
					dataIndex:'ВнутреннийЗаказ',
					flex:1,
				},
				{
					text:'Счет учета отпр. (БУ)',
					width:'100',
					dataIndex:'СчетУчетаБУ',
					flex:1,
				},
				{
					text:'Счет учета получ. (БУ)',
					width:'100',
					dataIndex:'НовыйСчетУчетаБУ',
					flex:1,
				},
				{
					text:'Счет учета отпр. (НУ)',
					width:'100',
					dataIndex:'СчетУчетаНУ',
					flex:1,
				},
				{
					text:'Счет учета получ. (НУ)',
					width:'100',
					dataIndex:'НовыйСчетУчетаНУ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПеремещениеТоваров/ВыбратьПоСсылке/100'},
				fields:
				[
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
						name:'Количество',
					},
					{
						name:'ДокументРезерва',
					},
					{
						name:'ВнутреннийЗаказ',
					},
					{
						name:'СчетУчетаБУ',
					},
					{
						name:'НовыйСчетУчетаБУ',
					},
					{
						name:'СчетУчетаНУ',
					},
					{
						name:'НовыйСчетУчетаНУ',
					},
				]
			},
		},
					]
				},
				{
					title:'НДС',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:327px;top:50px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНДСвСтоимостиТоваров',
			text: 'НДС в стоим. товаров:',
			style: 'position:absolute;left:6px;top:6px;width:94px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НДСвСтоимостиТоваров',
			style: 'position:absolute;left:100px;top:6px;width:209px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:107px;width:304px;height:100px;',
			height: 100,width: 304,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Счет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДС',
			text: 'Счет:',
			style: 'position:absolute;left:0px;top:0px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СчетСписанияНДС',
			style: 'position:absolute;left:94px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:0px;top:24px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:0px;top:48px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:0px;top:71px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоСписанияНДС1',
			style: 'position:absolute;left:94px;top:24px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоСписанияНДС2',
			style: 'position:absolute;left:94px;top:48px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоСписанияНДС3',
			style: 'position:absolute;left:94px;top:71px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДСНеТребуется',
			text: 'В соответствии с настройкой учетной политики по налоговому учету указание счета списания НДС в бухгалтерском учете не требуется - НДС включается в стоимость, а не списывается на затраты',
			style: 'position:absolute;left:0px;top:0px;width:304px;height:54px;',
		},
					]
				},
				{
					title:'Надпись',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Счет и аналитика списания НДС',
			style: 'position:absolute;left:6px;top:36px;width:622px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:324px;top:107px;width:304px;height:100px;',
			height: 100,width: 304,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Счет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДСНУ',
			text: 'Счет (НУ):',
			style: 'position:absolute;left:0px;top:0px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СчетСписанияНДСНУ',
			style: 'position:absolute;left:93px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ1',
			text: 'Субконто 1 (НУ):',
			style: 'position:absolute;left:0px;top:24px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоСписанияНДСНУ1',
			style: 'position:absolute;left:93px;top:24px;width:211px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ2',
			text: 'Субконто 2 (НУ):',
			style: 'position:absolute;left:0px;top:48px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоСписанияНДСНУ2',
			style: 'position:absolute;left:93px;top:48px;width:211px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ3',
			text: 'Субконто 3 (НУ):',
			style: 'position:absolute;left:0px;top:71px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СубконтоСписанияНДСНУ3',
			style: 'position:absolute;left:93px;top:71px;width:211px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДСНУНеТребуется',
			text: 'Указание счета списания НДС в налоговом учете не требуется - НДС включается в стоимость, а не списывается на затраты',
			style: 'position:absolute;left:0px;top:0px;width:304px;height:51px;',
		},
					]
				},
				{
					title:'Надпись',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗатратСписанияНДС',
			text: 'Статья затрат:',
			style: 'position:absolute;left:6px;top:82px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СтатьяЗатратСписанияНДС',
			style: 'position:absolute;left:100px;top:82px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатурнаяГруппа',
			text: 'Ном. группа:',
			style: 'position:absolute;left:324px;top:82px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НоменклатурнаяГруппа',
			style: 'position:absolute;left:416px;top:82px;width:212px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:6px;top:55px;width:94px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:100px;top:57px;width:210px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:10px;top:50px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:98px;top:50px;width:209px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:415px;top:50px;width:213px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Распределение остатков товаров организаций по складам',
			style: 'position:absolute;left:6px;top:6px;width:321px;height:15px;',
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
			name: 'НадписьСкладОтправитель',
			text: 'Отправитель:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СкладОтправитель',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:33px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСкладПолучатель',
			text: 'Получатель:',
			style: 'position:absolute;left:336px;top:81px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СкладПолучатель',
			style: 'position:absolute;left:406px;top:81px;width:238px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:391px;width:652px;height:25px;',
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
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:558px;top:33px;width:74px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВнутреннийЗаказ',
			text: 'Внутр. заказ:',
			style: 'position:absolute;left:336px;top:57px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВнутреннийЗаказ',
			style: 'position:absolute;left:406px;top:57px;width:238px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Розничная сумма (руб.):',
			style: 'position:absolute;left:441px;top:343px;width:123px;height:17px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Всего',
			style: 'position:absolute;left:564px;top:342px;width:80px;height:17px;',
		},
	],
	dockedItems:
	[
	]
});