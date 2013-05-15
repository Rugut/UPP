Ext.define('Документы.ВводНачальныхОстатковНДС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:520px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод начальных остатков НДС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:180px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:468px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:468px;width:676px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:362px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:455px;top:33px;width:317px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:495px;width:780px;height:25px;',
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
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:59px;width:764px;height:382px;',
			height: 382,width: 764,
			items:
			[
				{
					title:'Данные по НДС',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:748px;height:124px;',
			height: 124,width: 748,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'115',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор',
					width:'115',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Счет-фактура',
					width:'25',
					dataIndex:'ПредъявленСФ',
					flex:1,
				},
				{
					text:'Дата счета-фактуры',
					width:'80',
					dataIndex:'ДатаСФ',
					flex:1,
				},
				{
					text:'Номер счета-фактуры',
					width:'186',
					dataIndex:'НомерСФ',
					flex:1,
				},
				{
					text:'Дата расчетного документа',
					width:'80',
					dataIndex:'ДатаПлатежноРасчетногоДокумента',
					flex:1,
				},
				{
					text:'Номер расчетного документа',
					width:'186',
					dataIndex:'НомерПлатежноРасчетногоДокумента',
					flex:1,
				},
				{
					text:'Исправление',
					width:'100',
					dataIndex:'Исправление',
					flex:1,
				},
				{
					text:'Номер исправления',
					width:'100',
					dataIndex:'НомерИсправления',
					flex:1,
				},
				{
					text:'Дата исправления',
					width:'100',
					dataIndex:'ДатаИсправления',
					flex:1,
				},
				{
					text:'Корректировочный счет-фактура',
					width:'100',
					dataIndex:'КорректировочныйСчетФактура',
					flex:1,
				},
				{
					text:'Номер корректируемого счета-фактуры',
					width:'100',
					dataIndex:'НомерИсходногоДокумента',
					flex:1,
				},
				{
					text:'Дата корректируемого счета-фактуры',
					width:'100',
					dataIndex:'ДатаИсходногоДокумента',
					flex:1,
				},
				{
					text:'Учитывать исправление исходного документа',
					width:'100',
					dataIndex:'УчитыватьИсправлениеИсходногоДокумента',
					flex:1,
				},
				{
					text:'Номер исправления исходного документа',
					width:'100',
					dataIndex:'НомерИсправленияИсходногоДокумента',
					flex:1,
				},
				{
					text:'Дата исправления исходного документа',
					width:'100',
					dataIndex:'ДатаИсправленияИсходногоДокумента',
					flex:1,
				},
				{
					text:'Документ-основание (поступление и др.)',
					width:'124',
					dataIndex:'СчетФактура',
					flex:1,
				},
				{
					text:'Сумма без НДС',
					width:'116',
					dataIndex:'СуммаБезНДС',
					flex:1,
				},
				{
					text:'НДС',
					width:'116',
					dataIndex:'НДС',
					flex:1,
				},
				{
					text:'Валюта аванса',
					width:'60',
					dataIndex:'ВалютаАванса',
					flex:1,
				},
				{
					text:'Валютная сумма аванса с НДС',
					width:'60',
					dataIndex:'ВалютнаяСуммаСНДС',
					flex:1,
				},
				{
					text:'Сумма без НДС оплачено',
					width:'120',
					dataIndex:'СуммаБезНДСОплата',
					flex:1,
				},
				{
					text:'НДС оплачено',
					width:'120',
					dataIndex:'НДСОплата',
					flex:1,
				},
				{
					text:'Сумма без НДС по строительству',
					width:'120',
					dataIndex:'СуммаБезНДССтроительство',
					flex:1,
				},
				{
					text:'НДС по строительству',
					width:'120',
					dataIndex:'НДССтроительство',
					flex:1,
				},
				{
					text:'Сумма без НДС по ОС, введенному в эксплуатацию',
					width:'120',
					dataIndex:'СуммаБезНДСВведеноВЭксплуатацию',
					flex:1,
				},
				{
					text:'НДС по ОС, введенному в эксплуатацию',
					width:'120',
					dataIndex:'НДСВведеноВЭксплуатацию',
					flex:1,
				},
				{
					text:'Сумма без НДС включено в стоимость',
					width:'120',
					dataIndex:'СуммаБезНДСВключеноВСтоимость',
					flex:1,
				},
				{
					text:'НДС включено в стоимость',
					width:'120',
					dataIndex:'НДСВключеноВСтоимость',
					flex:1,
				},
				{
					text:'Сумма без НДС предъявлено к вычету',
					width:'120',
					dataIndex:'СуммаБезНДСПредъявлено',
					flex:1,
				},
				{
					text:'НДС предъявлено к вычету',
					width:'120',
					dataIndex:'НДСПредъявлено',
					flex:1,
				},
				{
					text:'Сумма без НДС по ставке 0%',
					width:'120',
					dataIndex:'СуммаБезНДССтавка0',
					flex:1,
				},
				{
					text:'НДС по ставке 0%',
					width:'120',
					dataIndex:'НДССтавка0',
					flex:1,
				},
				{
					text:'Сумма без НДС подтверждена ставка 0%',
					width:'120',
					dataIndex:'СуммаБезНДСПодтверждено0',
					flex:1,
				},
				{
					text:'НДС подтверждена ставка 0%',
					width:'120',
					dataIndex:'НДСПодтверждено0',
					flex:1,
				},
				{
					text:'Сумма без НДС не подтверждена ставка 0%',
					width:'120',
					dataIndex:'СуммаБезНДСНеПодтверждено0',
					flex:1,
				},
				{
					text:'НДС не подтверждена ставка 0%',
					width:'120',
					dataIndex:'НДСНеПодтверждено0',
					flex:1,
				},
				{
					text:'Сумма без НДС предъявлено к вычету по ставке 0%',
					width:'120',
					dataIndex:'СуммаБезНДСПредъявлено0',
					flex:1,
				},
				{
					text:'НДС предъявлено к вычету по ставке 0%',
					width:'120',
					dataIndex:'НДСПредъявлено0',
					flex:1,
				},
				{
					text:'Сумма без НДС предъявлено к вычету (не подтверждена ставка 0%)',
					width:'120',
					dataIndex:'СуммаБезНДСПредъявленоНеПодтверждено0',
					flex:1,
				},
				{
					text:'НДС предъявлено к вычету (не подтверждена ставка 0%)',
					width:'120',
					dataIndex:'НДСПредъявленоНеПодтверждено0',
					flex:1,
				},
				{
					text:'Валюта расчетов',
					width:'60',
					dataIndex:'ВалютаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Курс',
					width:'80',
					dataIndex:'КурсВзаиморасчетов',
					flex:1,
				},
				{
					text:'Счет расчетов',
					width:'80',
					dataIndex:'СчетУчетаРасчетовСКонтрагентом',
					flex:1,
				},
				{
					text:'Кратность',
					width:'80',
					dataIndex:'КратностьВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма, руб.',
					width:'120',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Сумма, вал.',
					width:'120',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковНДС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'ПредъявленСФ',
					},
					{
						name:'ДатаСФ',
					},
					{
						name:'НомерСФ',
					},
					{
						name:'ДатаПлатежноРасчетногоДокумента',
					},
					{
						name:'НомерПлатежноРасчетногоДокумента',
					},
					{
						name:'Исправление',
					},
					{
						name:'НомерИсправления',
					},
					{
						name:'ДатаИсправления',
					},
					{
						name:'КорректировочныйСчетФактура',
					},
					{
						name:'НомерИсходногоДокумента',
					},
					{
						name:'ДатаИсходногоДокумента',
					},
					{
						name:'УчитыватьИсправлениеИсходногоДокумента',
					},
					{
						name:'НомерИсправленияИсходногоДокумента',
					},
					{
						name:'ДатаИсправленияИсходногоДокумента',
					},
					{
						name:'СчетФактура',
					},
					{
						name:'СуммаБезНДС',
					},
					{
						name:'НДС',
					},
					{
						name:'ВалютаАванса',
					},
					{
						name:'ВалютнаяСуммаСНДС',
					},
					{
						name:'СуммаБезНДСОплата',
					},
					{
						name:'НДСОплата',
					},
					{
						name:'СуммаБезНДССтроительство',
					},
					{
						name:'НДССтроительство',
					},
					{
						name:'СуммаБезНДСВведеноВЭксплуатацию',
					},
					{
						name:'НДСВведеноВЭксплуатацию',
					},
					{
						name:'СуммаБезНДСВключеноВСтоимость',
					},
					{
						name:'НДСВключеноВСтоимость',
					},
					{
						name:'СуммаБезНДСПредъявлено',
					},
					{
						name:'НДСПредъявлено',
					},
					{
						name:'СуммаБезНДССтавка0',
					},
					{
						name:'НДССтавка0',
					},
					{
						name:'СуммаБезНДСПодтверждено0',
					},
					{
						name:'НДСПодтверждено0',
					},
					{
						name:'СуммаБезНДСНеПодтверждено0',
					},
					{
						name:'НДСНеПодтверждено0',
					},
					{
						name:'СуммаБезНДСПредъявлено0',
					},
					{
						name:'НДСПредъявлено0',
					},
					{
						name:'СуммаБезНДСПредъявленоНеПодтверждено0',
					},
					{
						name:'НДСПредъявленоНеПодтверждено0',
					},
					{
						name:'ВалютаВзаиморасчетов',
					},
					{
						name:'КурсВзаиморасчетов',
					},
					{
						name:'СчетУчетаРасчетовСКонтрагентом',
					},
					{
						name:'КратностьВзаиморасчетов',
					},
					{
						name:'Сумма',
					},
					{
						name:'СуммаВзаиморасчетов',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:216px;width:748px;height:139px;',
			height: 139,width: 748,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид ценности',
					width:'120',
					dataIndex:'ВидЦенности',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'120',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'% НДС',
					width:'100',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Счет НДС',
					width:'80',
					dataIndex:'СчетУчетаНДС',
					flex:1,
				},
				{
					text:'Счет учета',
					width:'80',
					dataIndex:'СчетЗатрат',
					flex:1,
				},
				{
					text:'Сумма без НДС',
					width:'120',
					dataIndex:'СуммаБезНДС',
					flex:1,
				},
				{
					text:'НДС',
					width:'120',
					dataIndex:'НДС',
					flex:1,
				},
				{
					text:'Валютная сумма аванса с НДС',
					width:'120',
					dataIndex:'ВалютнаяСуммаСНДС',
					flex:1,
				},
				{
					text:'Субконто 1',
					width:'120',
					dataIndex:'Субконто1',
					flex:1,
				},
				{
					text:'Субконто 2',
					width:'120',
					dataIndex:'Субконто2',
					flex:1,
				},
				{
					text:'Субконто 3',
					width:'120',
					dataIndex:'Субконто3',
					flex:1,
				},
				{
					text:'Страна происхождения',
					width:'100',
					dataIndex:'СтранаПроисхождения',
					flex:1,
				},
				{
					text:'Номер ГТД',
					width:'100',
					dataIndex:'НомерГТД',
					flex:1,
				},
				{
					text:'Документ оплаты',
					width:'120',
					dataIndex:'ДокументОплаты',
					flex:1,
				},
				{
					text:'Документ отгрузки',
					width:'120',
					dataIndex:'ДокументОтгрузки',
					flex:1,
				},
				{
					text:'Сумма без НДС оплачено',
					width:'120',
					dataIndex:'СуммаБезНДСОплата',
					flex:1,
				},
				{
					text:'НДС оплачено',
					width:'120',
					dataIndex:'НДСОплата',
					flex:1,
				},
				{
					text:'Не влияет на вычет',
					width:'50',
					dataIndex:'НеВлияетНаВычет',
					flex:1,
				},
				{
					text:'Вид внеобротного актива',
					width:'120',
					dataIndex:'ВидВнеоборотногоАктива',
					flex:1,
				},
				{
					text:'Объект Вн.А.',
					width:'120',
					dataIndex:'ОбъектСтроительства',
					flex:1,
				},
				{
					text:'Сумма без НДС передано на Вн.А.',
					width:'120',
					dataIndex:'СуммаБезНДССтроительство',
					flex:1,
				},
				{
					text:'Сумма без НДС по Вн.А., принятому к учету',
					width:'120',
					dataIndex:'СуммаБезНДСВведеноВЭксплуатацию',
					flex:1,
				},
				{
					text:'НДС передан на Вн.А.',
					width:'120',
					dataIndex:'НДССтроительство',
					flex:1,
				},
				{
					text:'НДС по Вн.А. принятому к учету',
					width:'120',
					dataIndex:'НДСВведеноВЭксплуатацию',
					flex:1,
				},
				{
					text:'Сумма без НДС включено в стоимость',
					width:'120',
					dataIndex:'СуммаБезНДСВключеноВСтоимость',
					flex:1,
				},
				{
					text:'НДС включено в стоимость',
					width:'120',
					dataIndex:'НДСВключеноВСтоимость',
					flex:1,
				},
				{
					text:'Сумма без НДС предъявлено к вычету',
					width:'120',
					dataIndex:'СуммаБезНДСПредъявлено',
					flex:1,
				},
				{
					text:'НДС предъявлено к вычету',
					width:'120',
					dataIndex:'НДСПредъявлено',
					flex:1,
				},
				{
					text:'Сумма без НДС по ставке 0%',
					width:'120',
					dataIndex:'СуммаБезНДССтавка0',
					flex:1,
				},
				{
					text:'НДС по ставке 0%',
					width:'120',
					dataIndex:'НДССтавка0',
					flex:1,
				},
				{
					text:'Сумма без НДС подтверждена ставка 0%',
					width:'120',
					dataIndex:'СуммаБезНДСПодтверждено0',
					flex:1,
				},
				{
					text:'НДС подтверждена ставка 0%',
					width:'120',
					dataIndex:'НДСПодтверждено0',
					flex:1,
				},
				{
					text:'Сумма без НДС не подтверждена ставка 0%',
					width:'120',
					dataIndex:'СуммаБезНДСНеПодтверждено0',
					flex:1,
				},
				{
					text:'НДС не подтверждена ставка 0%',
					width:'120',
					dataIndex:'НДСНеПодтверждено0',
					flex:1,
				},
				{
					text:'Сумма без НДС предъявлено к вычету по ставке 0%',
					width:'120',
					dataIndex:'СуммаБезНДСПредъявлено0',
					flex:1,
				},
				{
					text:'НДС предъявлено к вычету по ставке 0%',
					width:'120',
					dataIndex:'НДСПредъявлено0',
					flex:1,
				},
				{
					text:'Сумма без НДС предъявлено к вычету (не подтверждена ставка 0%)',
					width:'120',
					dataIndex:'СуммаБезНДСПредъявленоНеПодтверждено0',
					flex:1,
				},
				{
					text:'НДС предъявлено к вычету (не подтверждена ставка 0%)',
					width:'120',
					dataIndex:'НДСПредъявленоНеПодтверждено0',
					flex:1,
				},
				{
					text:'% НДС (не подтверждена ставка 0%)',
					width:'100',
					dataIndex:'СтавкаНДСНеПодтверждена0',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковНДС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидЦенности',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'СтавкаНДС',
					},
					{
						name:'СчетУчетаНДС',
					},
					{
						name:'СчетЗатрат',
					},
					{
						name:'СуммаБезНДС',
					},
					{
						name:'НДС',
					},
					{
						name:'ВалютнаяСуммаСНДС',
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
						name:'СтранаПроисхождения',
					},
					{
						name:'НомерГТД',
					},
					{
						name:'ДокументОплаты',
					},
					{
						name:'ДокументОтгрузки',
					},
					{
						name:'СуммаБезНДСОплата',
					},
					{
						name:'НДСОплата',
					},
					{
						name:'НеВлияетНаВычет',
					},
					{
						name:'ВидВнеоборотногоАктива',
					},
					{
						name:'ОбъектСтроительства',
					},
					{
						name:'СуммаБезНДССтроительство',
					},
					{
						name:'СуммаБезНДСВведеноВЭксплуатацию',
					},
					{
						name:'НДССтроительство',
					},
					{
						name:'НДСВведеноВЭксплуатацию',
					},
					{
						name:'СуммаБезНДСВключеноВСтоимость',
					},
					{
						name:'НДСВключеноВСтоимость',
					},
					{
						name:'СуммаБезНДСПредъявлено',
					},
					{
						name:'НДСПредъявлено',
					},
					{
						name:'СуммаБезНДССтавка0',
					},
					{
						name:'НДССтавка0',
					},
					{
						name:'СуммаБезНДСПодтверждено0',
					},
					{
						name:'НДСПодтверждено0',
					},
					{
						name:'СуммаБезНДСНеПодтверждено0',
					},
					{
						name:'НДСНеПодтверждено0',
					},
					{
						name:'СуммаБезНДСПредъявлено0',
					},
					{
						name:'НДСПредъявлено0',
					},
					{
						name:'СуммаБезНДСПредъявленоНеПодтверждено0',
					},
					{
						name:'НДСПредъявленоНеПодтверждено0',
					},
					{
						name:'СтавкаНДСНеПодтверждена0',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:192px;width:748px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'fieldset',
			title: 'Данные по остаткам',
			style: 'position:absolute;left:6px;top:6px;width:748px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Дополнительные сведения',
			style: 'position:absolute;left:6px;top:176px;width:748px;height:16px;',
		},
					]
				},
				{
					title:'Расчеты с контрагентами',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:746px;height:325px;',
			height: 325,width: 746,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'120',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'120',
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
					text:'Счет-фактура',
					width:'120',
					dataIndex:'СчетФактура',
					flex:1,
				},
				{
					text:'Валюта',
					width:'60',
					dataIndex:'ВалютаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Курс взаиморасчетов',
					width:'120',
					dataIndex:'КурсВзаиморасчетов',
					flex:1,
				},
				{
					text:'Кратность взаиморасчетов',
					width:'120',
					dataIndex:'КратностьВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма расчетов, руб.',
					width:'120',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма расчетов, вал.',
					width:'120',
					dataIndex:'ВалютнаяСуммаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Счет учета расчетов с контрагентом',
					width:'80',
					dataIndex:'СчетУчетаРасчетовСКонтрагентом',
					flex:1,
				},
				{
					text:'Расчеты с бюджетом',
					width:'60',
					dataIndex:'РасчетыСБюджетом',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковНДС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'Сделка',
					},
					{
						name:'СчетФактура',
					},
					{
						name:'ВалютаВзаиморасчетов',
					},
					{
						name:'КурсВзаиморасчетов',
					},
					{
						name:'КратностьВзаиморасчетов',
					},
					{
						name:'СуммаВзаиморасчетов',
					},
					{
						name:'ВалютнаяСуммаВзаиморасчетов',
					},
					{
						name:'СчетУчетаРасчетовСКонтрагентом',
					},
					{
						name:'РасчетыСБюджетом',
					},
				]
			},
		},
					]
				},
				{
					title:'Авансы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:746px;height:325px;',
			height: 325,width: 746,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'120',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'120',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'119',
					dataIndex:'Сделка',
					flex:1,
				},
				{
					text:'Документ оплаты',
					width:'120',
					dataIndex:'ДокументОплаты',
					flex:1,
				},
				{
					text:'Валюта',
					width:'60',
					dataIndex:'ВалютаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Курс взаиморасчетов',
					width:'120',
					dataIndex:'КурсВзаиморасчетов',
					flex:1,
				},
				{
					text:'Кратность взаиморасчетов',
					width:'120',
					dataIndex:'КратностьВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма расчетов, руб.',
					width:'120',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма расчетов, вал.',
					width:'120',
					dataIndex:'ВалютнаяСуммаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Счет учета расчетов с контрагентом',
					width:'80',
					dataIndex:'СчетУчетаРасчетовСКонтрагентом',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводНачальныхОстатковНДС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Контрагент',
					},
					{
						name:'ДоговорКонтрагента',
					},
					{
						name:'Сделка',
					},
					{
						name:'ДокументОплаты',
					},
					{
						name:'ВалютаВзаиморасчетов',
					},
					{
						name:'КурсВзаиморасчетов',
					},
					{
						name:'КратностьВзаиморасчетов',
					},
					{
						name:'СуммаВзаиморасчетов',
					},
					{
						name:'ВалютнаяСуммаВзаиморасчетов',
					},
					{
						name:'СчетУчетаРасчетовСКонтрагентом',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отразить расчеты с контрагентами',
			style: 'position:absolute;left:455px;top:58px;width:200px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:444px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:444px;width:676px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});