Ext.define('Документы.ЗаявкаНаРасходованиеСредств.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:657px;height:372px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документ Заявка на расходование средств',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:85px;width:641px;height:159px;',
			height: 159,width: 641,
			items:
			[
				{
					title:'Расчеты с контрагентами',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:87px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетовПодотчетник',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:30px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетовПодотчетник',
			text: 'Курс:',
			style: 'position:absolute;left:6px;top:54px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:633px;height:103px;',
			height: 103,width: 633,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'ПлатежПоОднойСделке',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетов',
			text: 'Сумма <нет валюты>:',
			style: 'position:absolute;left:0px;top:24px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетов',
			text: 'Курс:',
			style: 'position:absolute;left:0px;top:48px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:0px;top:0px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Сделка:
',
			style: 'position:absolute;left:319px;top:0px;width:90px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:81px;top:0px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:409px;top:0px;width:216px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:81px;top:24px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетов',
			style: 'position:absolute;left:81px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПодбор',
			text: 'Подбор',
			style: 'position:absolute;left:255px;top:0px;width:48px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись30',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:319px;top:72px;width:87px;height:31px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств',
			style: 'position:absolute;left:409px;top:72px;width:216px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПлатежа',
			style: 'position:absolute;left:409px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сумма платежа:',
			style: 'position:absolute;left:319px;top:48px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:81px;top:72px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:0px;top:72px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумент',
			text: 'USD',
			style: 'position:absolute;left:513px;top:48px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументРасчетовСКонтрагентом',
			style: 'position:absolute;left:409px;top:24px;width:216px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументРасчетовСКонтрагентом',
			text: 'Док. расчетов:',
			style: 'position:absolute;left:319px;top:27px;width:88px;height:15px;',
		},
					]
				},
				{
					title:'ПлатежПоНесколькимСделкам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:633px;height:79px;',
			height: 79,width: 633,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'141',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'151',
					dataIndex:'Сделка',
					flex:1,
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'100',
					dataIndex:'ДокументРасчетовСКонтрагентом',
					flex:1,
				},
				{
					text:'Сумма взаиморасчетов',
					width:'89',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Курс взаиморасчетов',
					width:'100',
					dataIndex:'КурсВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма платежа',
					width:'102',
					dataIndex:'СуммаПлатежа',
					flex:1,
				},
				{
					text:'Статья движения денежных средств',
					width:'201',
					dataIndex:'СтатьяДвиженияДенежныхСредств',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаявкаНаРасходованиеСредств/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'Сделка',
					},
					{
						name:'ДокументРасчетовСКонтрагентом',
					},
					{
						name:'СуммаВзаиморасчетов',
					},
					{
						name:'КурсВзаиморасчетов',
					},
					{
						name:'СуммаПлатежа',
					},
					{
						name:'СтатьяДвиженияДенежныхСредств',
					},
					{
						name:'Проект',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:294px;height:24px;',
			items:
			[
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИтогоСписок',
			text: 'Итого платежей по списку:',
			style: 'position:absolute;left:322px;top:0px;width:301px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:325px;top:78px;width:88px;height:31px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись32',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:325px;top:30px;width:82px;height:31px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись33',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:325px;top:30px;width:82px;height:31px;text-align:left;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Без разбиения',
			style: 'position:absolute;left:415px;top:6px;width:100px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Списком',
			style: 'position:absolute;left:520px;top:6px;width:108px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРедактировать',
			text: 'Редактировать:',
			style: 'position:absolute;left:326px;top:6px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Сумма платежа:',
			style: 'position:absolute;left:327px;top:54px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент2',
			text: 'Контрагент:',
			style: 'position:absolute;left:325px;top:6px;width:82px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Выдача подотчетнику',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:6px;top:6px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаВзаиморасчетовПодотчетника',
			style: 'position:absolute;left:415px;top:6px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаВзаиморасчетовПодотчетника',
			text: 'Валюта:',
			style: 'position:absolute;left:325px;top:6px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФизЛицо',
			style: 'position:absolute;left:87px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФизЛицо',
			text: 'Подотчетник:',
			style: 'position:absolute;left:6px;top:6px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасчетныйДокумент',
			style: 'position:absolute;left:415px;top:30px;width:218px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокумент',
			text: 'Документ:',
			style: 'position:absolute;left:325px;top:30px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПогашенияАванса',
			style: 'position:absolute;left:87px;top:102px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПогашенияАванса',
			text: 'Погасить до:',
			style: 'position:absolute;left:6px;top:102px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетовПодотчетника',
			style: 'position:absolute;left:87px;top:54px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетовПодотчетника',
			style: 'position:absolute;left:87px;top:30px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств1',
			style: 'position:absolute;left:415px;top:78px;width:218px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса1',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:188px;top:54px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПлатежаПодотчет',
			style: 'position:absolute;left:415px;top:54px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект1',
			style: 'position:absolute;left:87px;top:78px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект1',
			text: 'Проект:',
			style: 'position:absolute;left:6px;top:78px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумент1',
			text: 'USD',
			style: 'position:absolute;left:519px;top:54px;width:40px;height:19px;',
		},
					]
				},
				{
					title:'Выдача кассе ККМ',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КассаККМ',
			style: 'position:absolute;left:415px;top:6px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств2',
			style: 'position:absolute;left:415px;top:30px;width:218px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетовПодотчетник1',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:6px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетовККМ',
			style: 'position:absolute;left:87px;top:6px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект2',
			style: 'position:absolute;left:87px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект2',
			text: 'Проект:',
			style: 'position:absolute;left:6px;top:30px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумент2',
			text: 'USD',
			style: 'position:absolute;left:191px;top:6px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидВыдачиДенежныхСредств',
			style: 'position:absolute;left:325px;top:6px;width:82px;height:19px;',
		},
					]
				},
				{
					title:'Прочие расходы',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств3',
			style: 'position:absolute;left:415px;top:30px;width:218px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетовПодотчетник2',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:6px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетовПрочие',
			style: 'position:absolute;left:87px;top:6px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрагентПрочие',
			style: 'position:absolute;left:415px;top:6px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект3',
			style: 'position:absolute;left:87px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект3',
			text: 'Проект:',
			style: 'position:absolute;left:6px;top:30px;width:81px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумент3',
			text: 'USD',
			style: 'position:absolute;left:191px;top:6px;width:40px;height:19px;',
		},
					]
				},
				{
					title:'Описание',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Описание',
			style: 'position:absolute;left:6px;top:6px;width:628px;height:127px;',
		},
					]
				},
				{
					title:'Размещение',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:96px;top:6px;width:104px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:205px;top:6px;width:87px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАвтоматическое',
			text: 'Автоматическое:',
			style: 'position:absolute;left:6px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:30px;width:358px;height:24px;',
			items:
			[
				{
					text:'Заполнить и провести',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:54px;width:627px;height:79px;',
			height: 79,width: 627,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Место размещения',
					width:'459',
					dataIndex:'МестоРазмещения',
					flex:1,
				},
				{
					text:'Сумма',
					width:'137',
					dataIndex:'СуммаПлатежа',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаявкаНаРасходованиеСредств/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'МестоРазмещения',
					},
					{
						name:'СуммаПлатежа',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьИтогоРазмещено',
			text: 'Итого размещено:',
			style: 'position:absolute;left:371px;top:30px;width:262px;height:19px;',
		},
					]
				},
				{
					title:'Бюджетирование',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Сценарий:',
			style: 'position:absolute;left:6px;top:6px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:87px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Статья оборотов:',
			style: 'position:absolute;left:326px;top:6px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотов',
			style: 'position:absolute;left:415px;top:6px;width:218px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Номенклатура:',
			style: 'position:absolute;left:326px;top:30px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:415px;top:30px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрагентОперации',
			style: 'position:absolute;left:87px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент1',
			text: 'Контрагент:',
			style: 'position:absolute;left:6px;top:30px;width:81px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСчетКасса',
			text: 'Счет / Касса:',
			style: 'position:absolute;left:334px;top:249px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БанковскийСчетКасса',
			style: 'position:absolute;left:424px;top:249px;width:225px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДокумента',
			style: 'position:absolute;left:96px;top:56px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумента',
			text: 'Валюта:',
			style: 'position:absolute;left:8px;top:56px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:347px;width:657px;height:25px;',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФормаОплаты',
			style: 'position:absolute;left:424px;top:57px;width:225px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФормаОплаты',
			text: 'Форма оплаты:',
			style: 'position:absolute;left:334px;top:57px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРасхода',
			text: 'Дата расхода:',
			style: 'position:absolute;left:334px;top:33px;width:90px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРасхода',
			style: 'position:absolute;left:424px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Ответственный:',
			style: 'position:absolute;left:334px;top:296px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:424px;top:296px;width:225px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Состояние:',
			style: 'position:absolute;left:8px;top:320px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:96px;top:320px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:249px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:249px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: 'Курс:',
			style: 'position:absolute;left:200px;top:56px;width:33px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсДокумента',
			style: 'position:absolute;left:233px;top:57px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от',
			style: 'position:absolute;left:177px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Включать в платежный календарь',
			style: 'position:absolute;left:334px;top:273px;width:198px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаДокумента',
			text: 'Итого по заявке: 150 000 USD',
			style: 'position:absolute;left:8px;top:273px;width:308px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЦФО',
			style: 'position:absolute;left:96px;top:296px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:296px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:424px;top:320px;width:225px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись41',
			text: 'Комментарий:',
			style: 'position:absolute;left:334px;top:320px;width:90px;height:19px;',
		},
	]
});