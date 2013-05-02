Ext.define('Документы.ОтчетКомитентуОПродажах.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:664px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет комитенту',
	
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
			style: 'position:absolute;left:8px;top:428px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:428px;width:562px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
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
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:420px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:498px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:152px;width:648px;height:229px;',
			height: 229,width: 648,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:634px;height:174px;',
			height: 174,width: 634,
			columns:
			[
				{
					text:'№',
					width:'28',
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
					width:'66',
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
					text:'Ед',
					width:'50',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'К.',
					width:'45',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Цена поступления',
					width:'97',
					dataIndex:'ЦенаПоступления',
					flex:1,
				},
				{
					text:'Сумма поступления',
					width:'106',
					dataIndex:'СуммаПоступления',
					flex:1,
				},
				{
					text:'Цена',
					width:'80',
					dataIndex:'ЦенаРеализации',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'СуммаРеализации',
					flex:1,
				},
				{
					text:'Вознаграждение',
					width:'90',
					dataIndex:'СуммаВознаграждения',
					flex:1,
				},
				{
					text:'Сумма НДС вознаграждения',
					width:'100',
					dataIndex:'СуммаНДСВознаграждения',
					flex:1,
				},
				{
					text:'Документ поступления',
					width:'100',
					dataIndex:'ДокументПоступления',
					flex:1,
				},
				{
					text:'Покупатель',
					width:'100',
					dataIndex:'Покупатель',
					flex:1,
				},
				{
					text:'Дата реализации',
					width:'100',
					dataIndex:'ДатаРеализации',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетКомитентуОПродажах/ВыбратьПоСсылке/100'},
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
						name:'ЕдиницаИзмерения',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'ЦенаПоступления',
					},
					{
						name:'СуммаПоступления',
					},
					{
						name:'ЦенаРеализации',
					},
					{
						name:'СуммаРеализации',
					},
					{
						name:'СуммаВознаграждения',
					},
					{
						name:'СуммаНДСВознаграждения',
					},
					{
						name:'ДокументПоступления',
					},
					{
						name:'Покупатель',
					},
					{
						name:'ДатаРеализации',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:634px;height:24px;',
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
				'-',
				{
					text:'Изменить',
				},
			]
		},
					]
				},
				{
					title:'Денежные средства',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетРасчетовСКонтрагентом',
			text: 'Счет учета расчетов с контрагентом:',
			style: 'position:absolute;left:6px;top:11px;width:192px;height:19px;text-align:left;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:634px;height:174px;',
			height: 174,width: 634,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид отчета по платежам',
					width:'100',
					dataIndex:'ВидОтчетаПоПлатежам',
					flex:1,
				},
				{
					text:'Покупатель',
					width:'100',
					dataIndex:'Покупатель',
					flex:1,
				},
				{
					text:'Дата события',
					width:'100',
					dataIndex:'ДатаСобытия',
					flex:1,
				},
				{
					text:'Сумма',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'% НДС',
					width:'56',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'100',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетКомитентуОПродажах/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидОтчетаПоПлатежам',
					},
					{
						name:'Покупатель',
					},
					{
						name:'ДатаСобытия',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:634px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Услуга по вознаграждению:',
			style: 'position:absolute;left:6px;top:6px;width:164px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Счет учета расчетов',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетов',
			text: 'Сумма <нет валюты>:',
			style: 'position:absolute;left:12px;top:27px;width:128px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентом',
			style: 'position:absolute;left:201px;top:11px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоАвансам',
			style: 'position:absolute;left:201px;top:34px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Счета учета доходов',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:328px;top:97px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетРасчетовПоАвансам',
			text: 'Счет учета расчетов по авансам:',
			style: 'position:absolute;left:6px;top:34px;width:192px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Счет учета НДС по реализации:',
			style: 'position:absolute;left:6px;top:30px;width:164px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаНДСПоРеализации',
			style: 'position:absolute;left:172px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетДоходовБУ',
			style: 'position:absolute;left:172px;top:54px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетДоходовНУ',
			style: 'position:absolute;left:172px;top:78px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоБУ',
			style: 'position:absolute;left:420px;top:54px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУ',
			style: 'position:absolute;left:420px;top:78px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УслугаПоВознаграждению',
			style: 'position:absolute;left:172px;top:6px;width:468px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоДокументу',
			text: 'Всего по документу:',
			style: 'position:absolute;left:6px;top:134px;width:105px;height:18px;',
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
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:142px;top:97px;width:166px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:414px;top:97px;width:226px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:142px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:228px;top:27px;width:412px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:142px;top:121px;width:166px;height:19px;',
		},
					]
				},
				{
					title:'Предоплата',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Счет учета доходов (БУ):',
			style: 'position:absolute;left:6px;top:54px;width:164px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:637px;height:106px;',
			height: 106,width: 637,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'234',
					dataIndex:'ДокументРасчетовСКонтрагентом',
					flex:1,
				},
				{
					text:'Дата оплаты',
					width:'100',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
				{
					text:'Сумма взаиморасчетов',
					width:'100',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма регл',
					width:'100',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетКомитентуОПродажах/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДокументРасчетовСКонтрагентом',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'СуммаВзаиморасчетов',
					},
					{
						name:'СуммаРегл',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:637px;height:24px;',
			items:
			[
				{
					text:'Заполнить по заказам документа',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоДокументуВал',
			style: 'position:absolute;left:161px;top:134px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоДокументуРегл',
			style: 'position:absolute;left:323px;top:134px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредоплатаВал',
			style: 'position:absolute;left:161px;top:155px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредоплатаРегл',
			style: 'position:absolute;left:323px;top:155px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокРегл',
			style: 'position:absolute;left:323px;top:181px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокВал',
			style: 'position:absolute;left:161px;top:181px;width:134px;height:17px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:334px;top:81px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:420px;top:81px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
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
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:94px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Сделка:
',
			style: 'position:absolute;left:8px;top:100px;width:84px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:334px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьДолга',
			text: 'По договору 250 USD, 1 USD = 30 руб.',
			style: 'position:absolute;left:334px;top:57px;width:301px;height:19px;text-align:right;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:641px;top:57px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкаНДСВознаграждения',
			text: 'НДС возн.:',
			style: 'position:absolute;left:162px;top:129px;width:72px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДСВознаграждения',
			style: 'position:absolute;left:234px;top:129px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРасчетаКомиссионногоВознаграждения',
			text: 'Способ расчета:',
			style: 'position:absolute;left:334px;top:105px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРасчетаКомиссионногоВознаграждения',
			style: 'position:absolute;left:420px;top:105px;width:236px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего реализовано:',
			style: 'position:absolute;left:382px;top:384px;width:188px;height:17px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:576px;top:384px;width:80px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентКомиссионногоВознаграждения',
			text: 'Процент возн.:',
			style: 'position:absolute;left:8px;top:129px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентКомиссионногоВознаграждения',
			style: 'position:absolute;left:94px;top:129px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьСуммаНДС',
			text: 'Сумма НДС  вознаграждения = 1234.56 руб.',
			style: 'position:absolute;left:94px;top:406px;width:296px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВознаграждения',
			text: 'Сумма вознаграждения:',
			style: 'position:absolute;left:382px;top:406px;width:188px;height:17px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВознаграждения',
			style: 'position:absolute;left:576px;top:406px;width:80px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаСчетФактура',
			text: 'Ввести счет-фактуру',
			style: 'position:absolute;left:94px;top:384px;width:296px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактура',
			text: 'Счет-фактура:',
			style: 'position:absolute;left:8px;top:384px;width:84px;height:17px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:664px;height:25px;',
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
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:576px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Удержать комиссионное вознаграждение',
			style: 'position:absolute;left:334px;top:129px;width:236px;height:19px;',
		},
	]
});