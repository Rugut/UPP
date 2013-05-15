Ext.define('Документы.АвансовыйОтчет.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:692px;height:434px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Авансовый отчет',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:190px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:110px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:210px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:692px;height:25px;',
			items:
			[
				{
					text:'Цены и валюта...',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Показать/скрыть счета учета',
				},
				'-',
				{
					text:'Файлы',
				},
				'-',
				{
					text:'Ведомость по взаиморасчетам',
				},
				'-',
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:443px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:521px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:110px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СкладОрдер',
			style: 'position:absolute;left:443px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:355px;top:33px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:109px;width:676px;height:224px;',
			height: 224,width: 676,
			items:
			[
				{
					title:'Авансы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:662px;height:174px;',
			height: 174,width: 662,
			columns:
			[
				{
					text:'№',
					width:'32',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Документ аванса',
					width:'220',
					dataIndex:'ДокументАванса',
					flex:1,
				},
				{
					text:'Сумма документа',
					width:'100',
					dataIndex:'СуммаДокументаАванса',
					flex:1,
				},
				{
					text:'Валюта',
					width:'60',
					dataIndex:'ВалютаДокументаАванса',
					flex:1,
				},
				{
					text:'Выдано',
					width:'100',
					dataIndex:'Выдано',
					flex:1,
				},
				{
					text:'Израсходовано',
					width:'100',
					dataIndex:'Сумма',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АвансовыйОтчет/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДокументАванса',
					},
					{
						name:'СуммаДокументаАванса',
					},
					{
						name:'ВалютаДокументаАванса',
					},
					{
						name:'Выдано',
					},
					{
						name:'Сумма',
					},
				]
			},
		},
					]
				},
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:662px;height:132px;',
			height: 132,width: 662,
			columns:
			[
				{
					text:'№',
					width:'32',
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
					width:'220',
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
					width:'120',
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
					width:'58',
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
					width:'54',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'К.',
					width:'41',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Цена',
					width:'80',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'% НДС',
					width:'40',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'НДС сумма',
					width:'80',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'Заказ',
					width:'280',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Вид входящего документа',
					width:'125',
					dataIndex:'ВидДокВходящий',
					flex:1,
				},
				{
					text:'Дата вход. документа',
					width:'80',
					dataIndex:'ДатаВходящегоДокумента',
					flex:1,
				},
				{
					text:'Номер документа сторонней организации',
					width:'186',
					dataIndex:'НомерВходящегоДокумента',
					flex:1,
				},
				{
					text:'СФ предъявлен',
					width:'23',
					dataIndex:'ПредъявленСФ',
					flex:1,
				},
				{
					text:'Поставщик',
					width:'120',
					dataIndex:'Поставщик',
					flex:1,
				},
				{
					text:'Дата СФ',
					width:'100',
					dataIndex:'ДатаСФ',
					flex:1,
				},
				{
					text:'Номер СФ',
					width:'186',
					dataIndex:'НомерСФ',
					flex:1,
				},
				{
					text:'Счет-фактура',
					width:'155',
					dataIndex:'СчетФактура',
					flex:1,
				},
				{
					text:'Номер ГТД',
					width:'118',
					dataIndex:'НомерГТД',
					flex:1,
				},
				{
					text:'Страна происхождения',
					width:'100',
					dataIndex:'СтранаПроисхождения',
					flex:1,
				},
				{
					text:'Счет учета (БУ)',
					width:'100',
					dataIndex:'СчетУчетаБУ',
					flex:1,
				},
				{
					text:'Расходы в НУ',
					width:'100',
					dataIndex:'ОтражениеВУСН',
					flex:1,
				},
				{
					text:'Счет учета НДС',
					width:'100',
					dataIndex:'СчетУчетаНДС',
					flex:1,
				},
				{
					text:'Счет учета (НУ)',
					width:'100',
					dataIndex:'СчетУчетаНУ',
					flex:1,
				},
				{
					text:'Приходный ордер',
					width:'100',
					dataIndex:'ПриходныйОрдер',
					flex:1,
				},
				{
					text:'Склад',
					width:'100',
					dataIndex:'Склад',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АвансовыйОтчет/ВыбратьПоСсылке/100'},
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
						name:'Цена',
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
					{
						name:'Заказ',
					},
					{
						name:'ВидДокВходящий',
					},
					{
						name:'ДатаВходящегоДокумента',
					},
					{
						name:'НомерВходящегоДокумента',
					},
					{
						name:'ПредъявленСФ',
					},
					{
						name:'Поставщик',
					},
					{
						name:'ДатаСФ',
					},
					{
						name:'НомерСФ',
					},
					{
						name:'СчетФактура',
					},
					{
						name:'НомерГТД',
					},
					{
						name:'СтранаПроисхождения',
					},
					{
						name:'СчетУчетаБУ',
					},
					{
						name:'ОтражениеВУСН',
					},
					{
						name:'СчетУчетаНДС',
					},
					{
						name:'СчетУчетаНУ',
					},
					{
						name:'ПриходныйОрдер',
					},
					{
						name:'Склад',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьТоварыИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:6px;top:161px;width:468px;height:17px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Всего',
			style: 'position:absolute;left:564px;top:161px;width:80px;height:17px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:564px;top:181px;width:80px;height:17px;',
		},
					]
				},
				{
					title:'Возвратная тара',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:662px;height:174px;',
			height: 174,width: 662,
			columns:
			[
				{
					text:'№',
					width:'32',
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
					width:'220',
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
					text:'Цена',
					width:'80',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Ед. хранения',
					width:'52',
					dataIndex:'ЕдиницаХранения',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'150',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'150',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Сделка',
					width:'250',
					dataIndex:'Сделка',
					flex:1,
				},
				{
					text:'Заказ',
					width:'250',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Вид входящего документа',
					width:'112',
					dataIndex:'ВидДокВходящий',
					flex:1,
				},
				{
					text:'Дата вход. документа',
					width:'89',
					dataIndex:'ДатаВходящегоДокумента',
					flex:1,
				},
				{
					text:'Номер документа сторонней организации',
					width:'186',
					dataIndex:'НомерВходящегоДокумента',
					flex:1,
				},
				{
					text:'Счет учета (БУ)',
					width:'100',
					dataIndex:'СчетУчетаБУ',
					flex:1,
				},
				{
					text:'Счет учета (НУ)',
					width:'100',
					dataIndex:'СчетУчетаНУ',
					flex:1,
				},
				{
					text:'Счет расчетов по таре',
					width:'100',
					dataIndex:'СчетУчетаТары',
					flex:1,
				},
				{
					text:'Приходный ордер',
					width:'95',
					dataIndex:'ПриходныйОрдер',
					flex:1,
				},
				{
					text:'Склад',
					width:'105',
					dataIndex:'Склад',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АвансовыйОтчет/ВыбратьПоСсылке/100'},
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
						name:'Цена',
					},
					{
						name:'ЕдиницаХранения',
					},
					{
						name:'Сумма',
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
						name:'Заказ',
					},
					{
						name:'ВидДокВходящий',
					},
					{
						name:'ДатаВходящегоДокумента',
					},
					{
						name:'НомерВходящегоДокумента',
					},
					{
						name:'СчетУчетаБУ',
					},
					{
						name:'СчетУчетаНУ',
					},
					{
						name:'СчетУчетаТары',
					},
					{
						name:'ПриходныйОрдер',
					},
					{
						name:'Склад',
					},
				]
			},
		},
					]
				},
				{
					title:'Оплата',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:662px;height:174px;',
			height: 174,width: 662,
			columns:
			[
				{
					text:'№',
					width:'32',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'150',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Договор контрагента',
					width:'153',
					dataIndex:'ДоговорКонтрагента',
					flex:1,
				},
				{
					text:'Заказ',
					width:'198',
					dataIndex:'Сделка',
					flex:1,
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'149',
					dataIndex:'ДокументРасчетовСКонтрагентом',
					flex:1,
				},
				{
					text:'Проект',
					width:'100',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Курс взаиморасчетов',
					width:'100',
					dataIndex:'КурсВзаиморасчетов',
					flex:1,
				},
				{
					text:'Кратность взаиморасчетов',
					width:'68',
					dataIndex:'КратностьВзаиморасчетов',
					flex:1,
				},
				{
					text:'Сумма взаиморасчетов',
					width:'112',
					dataIndex:'СуммаВзаиморасчетов',
					flex:1,
				},
				{
					text:'Вид входящего документа',
					width:'124',
					dataIndex:'ВидДокВходящий',
					flex:1,
				},
				{
					text:'Дата вход. документа',
					width:'119',
					dataIndex:'ДатаВходящегоДокумента',
					flex:1,
				},
				{
					text:'Номер вход. документа',
					width:'150',
					dataIndex:'НомерВходящегоДокумента',
					flex:1,
				},
				{
					text:'Содержание',
					width:'120',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'Счет расчетов',
					width:'100',
					dataIndex:'СчетУчетаРасчетовСКонтрагентом',
					flex:1,
				},
				{
					text:'Счет авансов',
					width:'100',
					dataIndex:'СчетУчетаРасчетовПоАвансам',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АвансовыйОтчет/ВыбратьПоСсылке/100'},
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
						name:'ДокументРасчетовСКонтрагентом',
					},
					{
						name:'Проект',
					},
					{
						name:'Сумма',
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
						name:'ВидДокВходящий',
					},
					{
						name:'ДатаВходящегоДокумента',
					},
					{
						name:'НомерВходящегоДокумента',
					},
					{
						name:'Содержание',
					},
					{
						name:'СчетУчетаРасчетовСКонтрагентом',
					},
					{
						name:'СчетУчетаРасчетовПоАвансам',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:487px;top:161px;width:72px;height:17px;text-align:left;',
		},
					]
				},
				{
					title:'Прочее',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:662px;height:174px;',
			height: 174,width: 662,
			columns:
			[
				{
					text:'№',
					width:'32',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вид входящего документа',
					width:'143',
					dataIndex:'ВидДокВходящий',
					flex:1,
				},
				{
					text:'Дата вход. документа',
					width:'79',
					dataIndex:'ДатаВходящегоДокумента',
					flex:1,
				},
				{
					text:'Номер документа сторонней организации',
					width:'186',
					dataIndex:'НомерВходящегоДокумента',
					flex:1,
				},
				{
					text:'СФ предъявлен ',
					width:'30',
					dataIndex:'ПредъявленСФ',
					flex:1,
				},
				{
					text:'Бланк строгой отчетности',
					width:'100',
					dataIndex:'БланкСтрогойОтчетности',
					flex:1,
				},
				{
					text:'Поставщик',
					width:'104',
					dataIndex:'Поставщик',
					flex:1,
				},
				{
					text:'Дата СФ',
					width:'80',
					dataIndex:'ДатаСФ',
					flex:1,
				},
				{
					text:'Номер СФ',
					width:'186',
					dataIndex:'НомерСФ',
					flex:1,
				},
				{
					text:'Счет-фактура',
					width:'117',
					dataIndex:'СчетФактура',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'82',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Содержание',
					width:'105',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'Количество',
					width:'64',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Цена',
					width:'80',
					dataIndex:'Цена',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'% НДС',
					width:'48',
					dataIndex:'СтавкаНДС',
					flex:1,
				},
				{
					text:'Сумма НДС',
					width:'80',
					dataIndex:'СуммаНДС',
					flex:1,
				},
				{
					text:'Счет учета НДС',
					width:'100',
					dataIndex:'СчетУчетаНДС',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'105',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Подразделение организации',
					width:'100',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'120',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Заказ покупателя',
					width:'120',
					dataIndex:'Заказ',
					flex:1,
				},
				{
					text:'Счет затрат (БУ)',
					width:'100',
					dataIndex:'СчетЗатрат',
					flex:1,
				},
				{
					text:'Счет затрат (НУ)',
					width:'100',
					dataIndex:'СчетЗатратНУ',
					flex:1,
				},
				{
					text:'Хар-р затрат',
					width:'103',
					dataIndex:'ХарактерЗатрат',
					flex:1,
				},
				{
					text:'Вид аналитики',
					width:'300',
					dataIndex:'ВидАналитики',
					flex:1,
				},
				{
					text:'Вид аналитики (доп)',
					width:'300',
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
					width:'93',
					dataIndex:'ВидСубконто2',
					flex:1,
				},
				{
					text:'Вид субконто 3',
					width:'106',
					dataIndex:'ВидСубконто3',
					flex:1,
				},
				{
					text:'Вид субконто 1 (НУ1)',
					width:'100',
					dataIndex:'ВидСубконтоНУ1',
					flex:1,
				},
				{
					text:'Вид субконто 2 (НУ)',
					width:'93',
					dataIndex:'ВидСубконтоНУ2',
					flex:1,
				},
				{
					text:'Вид субконто 3 (НУ)',
					width:'107',
					dataIndex:'ВидСубконтоНУ3',
					flex:1,
				},
				{
					text:'Аналитика',
					width:'276',
					dataIndex:'Аналитика',
					flex:1,
				},
				{
					text:'Номенклатурная группа',
					width:'276',
					dataIndex:'НоменклатурнаяГруппа',
					flex:1,
				},
				{
					text:'Номенклатурная группа (доп)',
					width:'118',
					dataIndex:'НоменклатурнаяГруппаДоп',
					flex:1,
				},
				{
					text:'Способ распределения затрат',
					width:'117',
					dataIndex:'СпособРаспределенияЗатратНаВыпуск',
					flex:1,
				},
				{
					text:'Субконто 1',
					width:'92',
					dataIndex:'Субконто1',
					flex:1,
				},
				{
					text:'Субконто 2',
					width:'92',
					dataIndex:'Субконто2',
					flex:1,
				},
				{
					text:'Субконто 3',
					width:'92',
					dataIndex:'Субконто3',
					flex:1,
				},
				{
					text:'Субконто 1 (НУ)',
					width:'92',
					dataIndex:'СубконтоНУ1',
					flex:1,
				},
				{
					text:'Субконто 2 (НУ)',
					width:'92',
					dataIndex:'СубконтоНУ2',
					flex:1,
				},
				{
					text:'Субконто 3 (НУ)',
					width:'92',
					dataIndex:'СубконтоНУ3',
					flex:1,
				},
				{
					text:'Продукция',
					width:'92',
					dataIndex:'Продукция',
					flex:1,
				},
				{
					text:'Характеристика продукции',
					width:'91',
					dataIndex:'ХарактеристикаПродукции',
					flex:1,
				},
				{
					text:'Серия продукции',
					width:'93',
					dataIndex:'СерияПродукции',
					flex:1,
				},
				{
					text:'Объект строительства',
					width:'185',
					dataIndex:'ОбъектСтроительства',
					flex:1,
				},
				{
					text:'Способ строительства',
					width:'191',
					dataIndex:'СпособСтроительства',
					flex:1,
				},
				{
					text:'Расходы в НУ',
					width:'100',
					dataIndex:'ОтражениеВУСН',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АвансовыйОтчет/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ВидДокВходящий',
					},
					{
						name:'ДатаВходящегоДокумента',
					},
					{
						name:'НомерВходящегоДокумента',
					},
					{
						name:'ПредъявленСФ',
					},
					{
						name:'БланкСтрогойОтчетности',
					},
					{
						name:'Поставщик',
					},
					{
						name:'ДатаСФ',
					},
					{
						name:'НомерСФ',
					},
					{
						name:'СчетФактура',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Содержание',
					},
					{
						name:'Количество',
					},
					{
						name:'Цена',
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
					{
						name:'СчетУчетаНДС',
					},
					{
						name:'Подразделение',
					},
					{
						name:'ПодразделениеОрганизации',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'Заказ',
					},
					{
						name:'СчетЗатрат',
					},
					{
						name:'СчетЗатратНУ',
					},
					{
						name:'ХарактерЗатрат',
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
						name:'ОтражениеВУСН',
					},
					{
						name:'Проект',
					},
				]
			},
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:487px;top:181px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:339px;top:6px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:435px;top:6px;width:228px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Проект',
			style: 'position:absolute;left:101px;top:31px;width:218px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект (ТМЦ):',
			style: 'position:absolute;left:6px;top:30px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение1',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:6px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:102px;top:6px;width:218px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьФизЛицо',
			text: 'Подотчетное лицо:',
			style: 'position:absolute;left:8px;top:81px;width:98px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ФизЛицо',
			style: 'position:absolute;left:110px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:382px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:382px;width:588px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоПоОтчету',
			text: 'По отчету, USD:',
			style: 'position:absolute;left:490px;top:359px;width:84px;height:17px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВсегоПоОтчету',
			style: 'position:absolute;left:575px;top:359px;width:103px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоАвансов',
			text: 'Израсходовано авансов, USD:',
			style: 'position:absolute;left:414px;top:339px;width:160px;height:17px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВсегоАвансов',
			style: 'position:absolute;left:575px;top:339px;width:104px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:407px;width:692px;height:27px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Записать',
				},
				'-',
				{
					text:'ОК',
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
			disabled: false,
			name: 'ВидПоступления',
			style: 'position:absolute;left:354px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:599px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НазначениеАванса',
			style: 'position:absolute;left:443px;top:81px;width:236px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНазначениеАванса',
			text: 'Назначение:',
			style: 'position:absolute;left:355px;top:81px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПриложение',
			text: 'Приложение:',
			style: 'position:absolute;left:18px;top:339px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументы',
			text: 'документов на',
			style: 'position:absolute;left:150px;top:339px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЛисты',
			text: 'листах',
			style: 'position:absolute;left:276px;top:339px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КоличествоДокументов',
			style: 'position:absolute;left:96px;top:339px;width:50px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КоличествоЛистов',
			style: 'position:absolute;left:231px;top:339px;width:40px;height:19px;',
		},
	],
	dockedItems:
	[
	]
});