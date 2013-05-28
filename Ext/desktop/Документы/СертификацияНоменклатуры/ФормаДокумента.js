Ext.define('Документы.СертификацияНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:666px;height:398px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сертификация номенклатуры',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНоменклатура',
			text: 'Номенклатура:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Номенклатура',
			width: 218,
			height: 19,
			style: 'position:absolute;left:96px;top:81px;width:218px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияНоменклатуры',
			text: 'Серия:',
			style: 'position:absolute;left:336px;top:81px;width:109px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СерияНоменклатуры',
			width: 213,
			height: 19,
			style: 'position:absolute;left:445px;top:81px;width:213px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 218,
			height: 19,
			style: 'position:absolute;left:96px;top:57px;width:218px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:322px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 562,
			height: 19,
			style: 'position:absolute;left:96px;top:322px;width:562px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 76,
			height: 19,
			style: 'position:absolute;left:96px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'от:',
			style: 'position:absolute;left:175px;top:33px;width:16px;height:19px;text-align:left;',
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
			name: 'Надпись12',
			text: 'Подразделение:',
			style: 'position:absolute;left:336px;top:57px;width:109px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Подразделение',
			width: 213,
			height: 19,
			style: 'position:absolute;left:445px;top:57px;width:213px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:346px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 562,
			height: 19,
			style: 'position:absolute;left:96px;top:346px;width:562px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРезультатСертификации',
			text: 'Результат сертификации:',
			style: 'position:absolute;left:8px;top:101px;width:88px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'РезультатСертификации',
			width: 218,
			height: 19,
			style: 'position:absolute;left:96px;top:105px;width:218px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНормативныйДокумент',
			text: 'Нормативный документ:',
			style: 'position:absolute;left:336px;top:101px;width:109px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'НормативныйДокумент',
			width: 213,
			height: 19,
			style: 'position:absolute;left:445px;top:105px;width:213px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСертификата',
			text: 'Сертификат №:',
			style: 'position:absolute;left:8px;top:129px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерСертификата',
			width: 218,
			height: 19,
			style: 'position:absolute;left:96px;top:129px;width:218px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСертификата',
			text: 'Срок действия с:',
			style: 'position:absolute;left:336px;top:129px;width:109px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСертификата',
			width: 95,
			height: 19,
			style: 'position:absolute;left:445px;top:129px;width:95px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'по:',
			style: 'position:absolute;left:544px;top:129px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'СрокГодностиСертификата',
			width: 95,
			height: 19,
			style: 'position:absolute;left:563px;top:129px;width:95px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:156px;width:650px;height:158px;',
			height: 158,width: 650,
			items:
			[
				{
					title:'Анализы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:636px;height:108px;',
			height: 108,width: 636,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Показатель анализа',
					width:'232',
					dataIndex:'ПоказательАнализа',
					flex:1,
				},
				{
					text:'Значение',
					width:'230',
					dataIndex:'ЗначениеПоказателя',
					flex:1,
				},
				{
					text:'Значение (начало диапазона)',
					width:'121',
					dataIndex:'МинЗначениеПоказателя',
					flex:1,
				},
				{
					text:'Конец диапазона',
					width:'103',
					dataIndex:'МаксЗначениеПоказателя',
					flex:1,
				},
				{
					text:'Единица измерения',
					width:'76',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Соответствует нормативу',
					width:'53',
					dataIndex:'СоответствуетНормативу',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СертификацияНоменклатуры/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ПоказательАнализа',
					},
					{
						name:'ЗначениеПоказателя',
					},
					{
						name:'МинЗначениеПоказателя',
					},
					{
						name:'МаксЗначениеПоказателя',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'СоответствуетНормативу',
					},
				]
			},
		},
					]
				},
				{
					title:'Сертификат',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДокументОснование',
			text: 'Документ - основание:',
			style: 'position:absolute;left:6px;top:31px;width:79px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументОснование',
			width: 557,
			height: 19,
			style: 'position:absolute;left:85px;top:35px;width:557px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Заключение:',
			style: 'position:absolute;left:6px;top:59px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Заключение',
			style: 'position:absolute;left:85px;top:59px;width:557px;height:73px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаИспытаний',
			width: 92,
			height: 19,
			style: 'position:absolute;left:438px;top:10px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОкончанияИспытаний',
			text: 'по:',
			style: 'position:absolute;left:536px;top:10px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончанияИспытаний',
			width: 89,
			height: 19,
			style: 'position:absolute;left:553px;top:10px;width:89px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ОрганПоСертификации',
			width: 221,
			height: 19,
			style: 'position:absolute;left:85px;top:10px;width:221px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганСертификации',
			text: 'Орган по сертификации:',
			style: 'position:absolute;left:6px;top:6px;width:79px;height:27px;text-align:left;',
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:666px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:373px;width:666px;height:25px;',
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
				},
			]
		},
	]
});