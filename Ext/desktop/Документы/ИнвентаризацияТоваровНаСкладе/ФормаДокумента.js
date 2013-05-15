Ext.define('Документы.ИнвентаризацияТоваровНаСкладе.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:603px;height:472px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Инвентаризация товаров на складе',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:174px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:420px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:420px;width:502px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:2px;top:0px;width:601px;height:25px;',
			items:
			[
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:214px;width:588px;height:130px;',
			height: 130,width: 588,
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
					width:'202',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'120',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Серия номенклатуры',
					width:'127',
					dataIndex:'СерияНоменклатуры',
					flex:1,
				},
				{
					text:'Ед. мест',
					width:'74',
					dataIndex:'ЕдиницаМест',
					flex:1,
				},
				{
					text:'К. мест',
					width:'112',
					dataIndex:'КоэффициентМест',
					flex:1,
				},
				{
					text:'Мест',
					width:'52',
					dataIndex:'КоличествоМест',
					flex:1,
				},
				{
					text:'Отклонение',
					width:'65',
					dataIndex:'Отклонение',
					flex:1,
				},
				{
					text:'Количество',
					width:'69',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Ед.',
					width:'57',
					dataIndex:'Единица',
					flex:1,
				},
				{
					text:'К.',
					width:'57',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Учет. количество ',
					width:'54',
					dataIndex:'КоличествоУчет',
					flex:1,
				},
				{
					text:'Цена',
					width:'93',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Цена в рознице',
					width:'95',
					dataIndex:'ЦенаВРознице',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Учет. сумма',
					width:'94',
					dataIndex:'СуммаУчет',
					flex:1,
				},
				{
					text:'Качество',
					width:'85',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Сумма (регл.)',
					width:'125',
					dataIndex:'СуммаРегл',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИнвентаризацияТоваровНаСкладе/ВыбратьПоСсылке/100'},
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
						name:'Отклонение',
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
						name:'КоличествоУчет',
					},
					{
						name:'Цена',
					},
					{
						name:'ЦенаВРознице',
					},
					{
						name:'Сумма',
					},
					{
						name:'СуммаУчет',
					},
					{
						name:'Качество',
					},
					{
						name:'СуммаРегл',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:190px;width:588px;height:24px;',
			items:
			[
				{
					text:'Поиск по штрихкоду',
				},
				'-',
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:397px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:397px;width:502px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСклад',
			text: 'Склад:',
			style: 'position:absolute;left:334px;top:57px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Склад',
			style: 'position:absolute;left:376px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Сумма:',
			style: 'position:absolute;left:360px;top:349px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаПоФакту',
			style: 'position:absolute;left:474px;top:349px;width:122px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоПоУчету',
			text: 'Сумма по учету:',
			style: 'position:absolute;left:360px;top:373px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаПоУчету',
			style: 'position:absolute;left:474px;top:373px;width:122px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:447px;width:603px;height:25px;',
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
			xtype: 'fieldset',
			title: 'Товары',
			style: 'position:absolute;left:8px;top:174px;width:588px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:102px;width:588px;height:48px;',
			height: 48,width: 588,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиНоменклатура',
			style: 'position:absolute;left:317px;top:0px;width:271px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура:',
			style: 'position:absolute;left:0px;top:0px;width:96px;height:18px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:151px;top:0px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиНоменклатурнаяГруппа',
			style: 'position:absolute;left:317px;top:24px;width:271px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатурная группа:',
			style: 'position:absolute;left:0px;top:24px;width:149px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:151px;top:24px;width:160px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Условия проведения инвентаризации',
			style: 'position:absolute;left:8px;top:80px;width:588px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать серии',
			style: 'position:absolute;left:8px;top:154px;width:109px;height:15px;',
		},
	],
	dockedItems:
	[
	]
});