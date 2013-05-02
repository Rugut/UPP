Ext.define('Документы.ПланируемоеПоступлениеДенежныхСредств.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:657px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Планируемое поступление денежных средств',
	
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
			style: 'position:absolute;left:8px;top:81px;width:641px;height:127px;',
			height: 127,width: 641,
			tabBar:{hidden:true},
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
			style: 'position:absolute;left:88px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:24px;width:641px;height:103px;',
			height: 103,width: 641,
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
			style: 'position:absolute;left:0px;top:24px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Сделка:
',
			style: 'position:absolute;left:326px;top:0px;width:90px;height:27px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:189px;top:48px;width:119px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:416px;top:0px;width:225px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:88px;top:24px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетов',
			style: 'position:absolute;left:88px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПодбор',
			text: 'Подбор',
			style: 'position:absolute;left:261px;top:0px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:88px;top:0px;width:167px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись30',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:326px;top:72px;width:88px;height:31px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств',
			style: 'position:absolute;left:416px;top:72px;width:225px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПлатежа',
			style: 'position:absolute;left:416px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сумма платежа:',
			style: 'position:absolute;left:326px;top:48px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:88px;top:72px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:0px;top:72px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись33',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:326px;top:0px;width:82px;height:31px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумент',
			text: 'USD',
			style: 'position:absolute;left:520px;top:48px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументРасчетовСКонтрагентом',
			style: 'position:absolute;left:416px;top:24px;width:225px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументРасчетовСКонтрагентом',
			text: 'Док. расчетов:',
			style: 'position:absolute;left:326px;top:27px;width:88px;height:15px;',
		},
					]
				},
				{
					title:'ПлатежПоНесколькимСделкам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:641px;height:79px;',
			height: 79,width: 641,
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
					width:'100',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'100',
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
					width:'100',
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
					width:'100',
					dataIndex:'СуммаПлатежа',
					flex:1,
				},
				{
					text:'Статья движения денежных средств',
					width:'164',
					dataIndex:'СтатьяДвиженияДенежныхСредств',
					flex:1,
				},
				{
					text:'Проект',
					width:'138',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПланируемоеПоступлениеДенежныхСредств/ВыбратьПоСсылке/100'},
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
			style: 'position:absolute;left:327px;top:0px;width:301px;height:19px;',
		},
					]
				},
				{
					title:'ПлатежПрочие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств3',
			style: 'position:absolute;left:416px;top:0px;width:218px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетовПодотчетник2',
			text: 'Сумма:',
			style: 'position:absolute;left:0px;top:0px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетовПрочие',
			style: 'position:absolute;left:88px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект1',
			style: 'position:absolute;left:88px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумент1',
			text: 'USD',
			style: 'position:absolute;left:192px;top:0px;width:40px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'radio',
			boxLabel: 'Без разбиения',
			style: 'position:absolute;left:417px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Списком',
			style: 'position:absolute;left:522px;top:0px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРедактировать',
			text: 'Редактировать:',
			style: 'position:absolute;left:326px;top:0px;width:89px;height:19px;',
		},
					]
				},
				{
					title:'Получение из кассы ККМ',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КассаККМ',
			style: 'position:absolute;left:417px;top:6px;width:218px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись32',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:328px;top:30px;width:88px;height:31px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств2',
			style: 'position:absolute;left:417px;top:30px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПриемаРозничнойВыручки',
			style: 'position:absolute;left:329px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетовПодотчетник3',
			text: 'Сумма:',
			style: 'position:absolute;left:0px;top:6px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетовККМ',
			style: 'position:absolute;left:88px;top:6px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумент2',
			text: 'USD',
			style: 'position:absolute;left:192px;top:6px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектККМ',
			style: 'position:absolute;left:88px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроектККМ',
			text: 'Проект:',
			style: 'position:absolute;left:0px;top:30px;width:81px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДокумента',
			style: 'position:absolute;left:96px;top:57px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумента',
			text: 'Валюта:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:336px;width:657px;height:25px;',
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
			style: 'position:absolute;left:334px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Дата прихода:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПоступления',
			style: 'position:absolute;left:424px;top:33px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:285px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:285px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Состояние:',
			style: 'position:absolute;left:334px;top:285px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:424px;top:285px;width:225px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: 'Курс:',
			style: 'position:absolute;left:200px;top:57px;width:33px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсДокумента',
			style: 'position:absolute;left:233px;top:57px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:309px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:309px;width:553px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЦФО',
			style: 'position:absolute;left:96px;top:261px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:261px;width:88px;height:19px;',
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
			xtype: 'label',
			name: 'НадписьСчетКасса1',
			text: 'Счет / Касса:',
			style: 'position:absolute;left:8px;top:213px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БанковскийСчетКасса',
			style: 'position:absolute;left:96px;top:213px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация1',
			text: 'Организация:',
			style: 'position:absolute;left:334px;top:213px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:424px;top:213px;width:225px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Включать в платежный календарь',
			style: 'position:absolute;left:334px;top:237px;width:198px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаДокумента',
			text: 'Итого по заявке: 150 000 USD',
			style: 'position:absolute;left:8px;top:237px;width:308px;height:19px;',
		},
	]
});