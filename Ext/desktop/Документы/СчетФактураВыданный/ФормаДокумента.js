Ext.define('Документы.СчетФактураВыданный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:804px;height:582px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Счет-фактура выданный',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:32px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:197px;top:32px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:115px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:804px;height:25px;',
			items:
			[
				{
					text:'В файл',
				},
				{
					text:'Отправить по эл. почте',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:557px;width:804px;height:25px;',
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
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:215px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:461px;top:55px;width:337px;height:85px;',
			height: 85,width: 337,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница корректировочный исправленный',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомерИсходногоДокумента',
			text: 'К счету-фактуре номер:',
			style: 'position:absolute;left:0px;top:44px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерИсходногоДокумента',
			width: 91,
			height: 19,
			style: 'position:absolute;left:133px;top:44px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИсходногоДокумента',
			text: 'от',
			style: 'position:absolute;left:227px;top:44px;width:14px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаИсходногоДокумента',
			width: 91,
			height: 19,
			style: 'position:absolute;left:246px;top:44px;width:91px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерИсправленияИсходногоДокумента',
			style: 'position:absolute;left:133px;top:66px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИсправленияИсходногоДокумента',
			text: 'от',
			style: 'position:absolute;left:227px;top:66px;width:14px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаИсправленияИсходногоДокумента',
			width: 91,
			height: 19,
			style: 'position:absolute;left:246px;top:66px;width:91px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'с учетом исправления:',
			style: 'position:absolute;left:0px;top:66px;width:133px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерИсправляемогоКорректировочногоДокумента',
			width: 91,
			height: 19,
			style: 'position:absolute;left:133px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИсправляемогоКорректировочногоДокумента',
			text: 'от',
			style: 'position:absolute;left:227px;top:0px;width:14px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаИсправляемогоКорректировочногоДокумента',
			width: 91,
			height: 19,
			style: 'position:absolute;left:246px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Корректировочного счета-фактуры номер:',
			style: 'position:absolute;left:0px;top:0px;width:124px;height:29px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерИсходногоДокумента2',
			text: 'К счету-фактуре номер:',
			style: 'position:absolute;left:0px;top:0px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерИсходногоДокумента3',
			text: 'К счету-фактуре номер:',
			style: 'position:absolute;left:0px;top:0px;width:124px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Страница корректировочный',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерИсходногоДокумента3',
			width: 91,
			height: 19,
			style: 'position:absolute;left:132px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИсходногоДокумента3',
			text: 'от',
			style: 'position:absolute;left:226px;top:0px;width:20px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаИсходногоДокумента3',
			width: 91,
			height: 19,
			style: 'position:absolute;left:246px;top:0px;width:91px;height:19px;',
		},
					]
				},
				{
					title:'Страница обычный',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПолеВводаКомитент',
			text: 'Комитент:',
			style: 'position:absolute;left:0px;top:66px;width:69px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПолеКомитент',
			width: 263,
			height: 19,
			style: 'position:absolute;left:74px;top:66px;width:263px;height:19px;',
		},
					]
				},
				{
					title:'Страница исправленный',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерИсходногоДокументаИсправление',
			width: 91,
			height: 19,
			style: 'position:absolute;left:132px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИсходногоДокумента2',
			text: 'от',
			style: 'position:absolute;left:226px;top:0px;width:20px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаИсходногоДокументаИсправление',
			width: 91,
			height: 19,
			style: 'position:absolute;left:246px;top:0px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомитент',
			text: 'Комитент:',
			style: 'position:absolute;left:0px;top:66px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Комитент',
			width: 263,
			height: 19,
			style: 'position:absolute;left:74px;top:66px;width:263px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:461px;top:32px;width:337px;height:19px;',
			height: 19,width: 337,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Исправление номер:',
			style: 'position:absolute;left:0px;top:0px;width:125px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерИсправления',
			style: 'position:absolute;left:132px;top:0px;width:91px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:55px;width:433px;height:85px;',
			height: 85,width: 433,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:\r\n',
			style: 'position:absolute;left:0px;top:22px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорКонтрагента',
			text: 'Договор:\r\n',
			style: 'position:absolute;left:0px;top:44px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 327,
			height: 19,
			style: 'position:absolute;left:106px;top:0px;width:327px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Контрагент',
			width: 327,
			height: 19,
			style: 'position:absolute;left:106px;top:22px;width:327px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ДоговорКонтрагента',
			width: 327,
			height: 19,
			style: 'position:absolute;left:106px;top:44px;width:327px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидСчетаФактуры',
			text: 'Вид счета-фактуры:',
			style: 'position:absolute;left:0px;top:66px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидСчетаФактуры',
			width: 327,
			height: 19,
			style: 'position:absolute;left:106px;top:66px;width:327px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:149px;width:790px;height:401px;',
			height: 401,width: 790,
			items:
			[
				{
					title:'Основное',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:776px;height:241px;',
			height: 241,width: 776,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'На реализацию',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Документ-основание счета-фактуры',
			style: 'position:absolute;left:0px;top:0px;width:776px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:44px;width:776px;height:64px;',
			height: 64,width: 776,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Документ - основание для выписки счета-фактуры',
					width:'120',
					dataIndex:'ДокументОснование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СчетФактураВыданный/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДокументОснование',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:173px;width:776px;height:62px;',
			height: 62,width: 776,
			columns:
			[
				{
					text:'Дата платежно-расчетного документа',
					width:'80',
					dataIndex:'ДатаПлатежноРасчетногоДокумента',
					flex:1,
				},
				{
					text:'Номер платежно расчетного документа',
					width:'120',
					dataIndex:'НомерПлатежноРасчетногоДокумента',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СчетФактураВыданный/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ДатаПлатежноРасчетногоДокумента',
					},
					{
						name:'НомерПлатежноРасчетногоДокумента',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Платежно-расчетный документ',
			style: 'position:absolute;left:0px;top:129px;width:776px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:149px;width:776px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Реализация не подлежит налогообложению (освобождается от налогообложения) ',
			style: 'position:absolute;left:0px;top:111px;width:478px;height:15px;',
		},
					]
				},
				{
					title:'На аванс',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Документ-основание счета-фактуры',
			style: 'position:absolute;left:0px;top:0px;width:776px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументОснованиеНаАванс',
			width: 494,
			height: 19,
			style: 'position:absolute;left:0px;top:20px;width:494px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Реквизиты счета-фактуры на аванс',
			style: 'position:absolute;left:0px;top:44px;width:776px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:89px;width:776px;height:98px;',
			height: 98,width: 776,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатура (обобщенное наименование)',
					width:'120',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Содержание услуги, доп. сведения',
					width:'120',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'Сумма с НДС',
					width:'120',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'% НДС',
					width:'80',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'120',
					dataIndex:'СуммаНДС',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СчетФактураВыданный/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Содержание',
					},
					{
						name:'Сумма',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаНДС',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Платежно-расчетный документ',
			style: 'position:absolute;left:0px;top:192px;width:776px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПРДокументаНаАванс',
			width: 269,
			height: 19,
			style: 'position:absolute;left:167px;top:215px;width:269px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПРДокументаНаАванс',
			width: 80,
			height: 19,
			style: 'position:absolute;left:40px;top:215px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерНаАванс',
			text: 'Номер:',
			style: 'position:absolute;left:123px;top:215px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНаАванс',
			text: 'Дата:',
			style: 'position:absolute;left:0px;top:215px;width:36px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'На суммовую разницу',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Документ-основание счета-фактуры',
			style: 'position:absolute;left:0px;top:0px;width:776px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументОснованиеНаСуммовуюРазницу',
			width: 494,
			height: 19,
			style: 'position:absolute;left:0px;top:20px;width:494px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Платежно-расчетный документ',
			style: 'position:absolute;left:0px;top:98px;width:776px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПРДокументаНаСуммовуюРазницу',
			width: 269,
			height: 19,
			style: 'position:absolute;left:167px;top:118px;width:269px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПРДокументаНаСуммовуюРазницу',
			width: 80,
			height: 19,
			style: 'position:absolute;left:40px;top:118px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерНаСуммовуюРазницу',
			text: 'Номер:',
			style: 'position:absolute;left:123px;top:118px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНаСуммовуюРазницу',
			text: 'Дата:',
			style: 'position:absolute;left:0px;top:118px;width:36px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкаНДС',
			text: 'Ставка НДС:',
			style: 'position:absolute;left:206px;top:44px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СтавкаНДС',
			width: 96,
			height: 19,
			style: 'position:absolute;left:282px;top:44px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСумма',
			text: 'Сумма с НДС:',
			style: 'position:absolute;left:0px;top:44px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Сумма',
			style: 'position:absolute;left:79px;top:44px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДС',
			text: 'Сумма НДС:',
			style: 'position:absolute;left:0px;top:74px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаНДС',
			style: 'position:absolute;left:79px;top:74px;width:120px;height:19px;',
		},
					]
				},
				{
					title:'Налоговый агент',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Документ-основание счета-фактуры',
			style: 'position:absolute;left:0px;top:0px;width:776px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументОснованиеНалоговыйАгент',
			width: 494,
			height: 19,
			style: 'position:absolute;left:0px;top:20px;width:494px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Реквизиты счета-фактуры налогового агента',
			style: 'position:absolute;left:0px;top:44px;width:776px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:89px;width:776px;height:98px;',
			height: 98,width: 776,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатура (обобщенное наименование)',
					width:'120',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Содержание услуги, доп. сведения',
					width:'120',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'Сумма с НДС',
					width:'120',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'% НДС',
					width:'80',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'120',
					dataIndex:'СуммаНДС',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СчетФактураВыданный/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Содержание',
					},
					{
						name:'Сумма',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СуммаНДС',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Платежно-расчетный документ',
			style: 'position:absolute;left:0px;top:194px;width:776px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПРДокументаНалоговыйАгент',
			width: 269,
			height: 19,
			style: 'position:absolute;left:167px;top:218px;width:269px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПРДокументаНалоговыйАгент',
			width: 80,
			height: 19,
			style: 'position:absolute;left:40px;top:218px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерНалоговыйАгент',
			text: 'Номер:',
			style: 'position:absolute;left:123px;top:218px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНалоговыйАгент',
			text: 'Дата:',
			style: 'position:absolute;left:0px;top:218px;width:36px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Корректировочный',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Документ-основание счета-фактуры',
			style: 'position:absolute;left:0px;top:0px;width:776px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:44px;width:776px;height:177px;',
			height: 177,width: 776,
			columns:
			[
				{
					text:'№',
					width:'25',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Документ - основание для выписки счета-фактуры',
					width:'327',
					dataIndex:'ДокументОснование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СчетФактураВыданный/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДокументОснование',
					},
				]
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Реализация не подлежит налогообложению (освобождается от налогообложения) ',
			style: 'position:absolute;left:0px;top:226px;width:478px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:351px;width:776px;height:24px;',
			height: 24,width: 776,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница всего',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСуммаДокумента',
			text: 'Всего:\r\n',
			style: 'position:absolute;left:0px;top:0px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ВалютаДокумента',
			text: '',
			style: 'position:absolute;left:154px;top:0px;width:47px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаДокумента',
			style: 'position:absolute;left:40px;top:0px;width:108px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДСДокумента',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:255px;top:0px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаНДСДокумента',
			style: 'position:absolute;left:328px;top:0px;width:108px;height:19px;',
		},
					]
				},
				{
					title:'Страница увеличение/уменьшение',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСуммаУвеличение',
			text: 'Увеличение:',
			style: 'position:absolute;left:0px;top:0px;width:69px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаУвеличение',
			style: 'position:absolute;left:72px;top:0px;width:95px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаУменьшение',
			text: 'Уменьшение:',
			style: 'position:absolute;left:389px;top:0px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаУменьшение',
			style: 'position:absolute;left:475px;top:0px;width:95px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ВалютаДокумента1',
			text: '',
			style: 'position:absolute;left:173px;top:0px;width:47px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ВалютаДокумента2',
			text: '',
			style: 'position:absolute;left:576px;top:0px;width:47px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДСУменьшение',
			text: 'НДС (в т.ч.):',
			style: 'position:absolute;left:628px;top:0px;width:62px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаНДСУменьшение',
			style: 'position:absolute;left:694px;top:0px;width:69px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДСУвеличение',
			text: 'НДС (в т.ч.):',
			style: 'position:absolute;left:225px;top:0px;width:62px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаНДСУвеличение',
			style: 'position:absolute;left:291px;top:0px;width:69px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:252px;width:776px;height:92px;',
			height: 92,width: 776,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКодВидаОперации',
			text: 'Код вида операции:',
			style: 'position:absolute;left:0px;top:20px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодВидаОперации',
			width: 50,
			height: 19,
			style: 'position:absolute;left:113px;top:20px;width:50px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаВыставления',
			width: 91,
			height: 19,
			style: 'position:absolute;left:314px;top:47px;width:91px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выставлен:',
			style: 'position:absolute;left:201px;top:47px;width:108px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не выставляется',
			style: 'position:absolute;left:201px;top:21px;width:108px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Выставление счета-фактуры',
			style: 'position:absolute;left:0px;top:0px;width:775px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеЭД',
			text: 'Состояние ЭД:',
			style: 'position:absolute;left:2px;top:72px;width:106px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'На бумажном носителе',
			style: 'position:absolute;left:416px;top:47px;width:139px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'В электронном виде',
			style: 'position:absolute;left:565px;top:47px;width:124px;height:19px;',
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
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 685,
			height: 37,
			style: 'position:absolute;left:97px;top:338px;width:685px;height:37px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Ответственный:',
			style: 'position:absolute;left:6px;top:6px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 668,
			height: 19,
			style: 'position:absolute;left:114px;top:6px;width:668px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:6px;top:30px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Руководитель',
			width: 668,
			height: 19,
			style: 'position:absolute;left:114px;top:30px;width:668px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГлавныйБухгалтер',
			text: 'Главный бухгалтер:',
			style: 'position:absolute;left:6px;top:54px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ГлавныйБухгалтер',
			width: 668,
			height: 19,
			style: 'position:absolute;left:114px;top:54px;width:668px;height:19px;',
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