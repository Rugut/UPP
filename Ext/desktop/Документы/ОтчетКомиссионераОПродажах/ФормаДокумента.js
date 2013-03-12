Ext.define('Документы.ОтчетКомиссионераОПродажах.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:664px;height:547px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет комиссионера',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:174px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:495px;width:84px;height:19px;',
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
			style: 'position:absolute;left:94px;top:495px;width:562px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'XML-обмен',
				},
				'-',
				{
					text:'Заполнить и провести',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'',
				},
				{
					text:'Дт/кт',
				},
				'-',
				'-',
				{
					text:'Цены и валюта...',
				},
				{
					text:'Показать/скрыть счета учета',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'',
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
			style: 'position:absolute;left:8px;top:150px;width:648px;height:280px;',
			height: 280,width: 648,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВходящийНомер',
			text: 'Вх. номер:',
			style: 'position:absolute;left:12px;top:27px;width:84px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:128px;width:634px;height:126px;',
			height: 126,width: 634,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'220',
				},
				{
					text:'Характеристика номенклатуры',
					width:'120',
				},
				{
					text:'Серия номенклатуры',
					width:'120',
				},
				{
					text:'Ед. мест',
					width:'50',
				},
				{
					text:'К. мест',
					width:'49',
				},
				{
					text:'Мест',
					width:'59',
				},
				{
					text:'Количество',
					width:'65',
				},
				{
					text:'Ед.',
					width:'50',
				},
				{
					text:'К.',
					width:'45',
				},
				{
					text:'Цена',
					width:'80',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Цена передачи',
					width:'80',
				},
				{
					text:'Сумма передачи',
					width:'90',
				},
				{
					text:'Сумма НДС передачи',
					width:'100',
				},
				{
					text:'% НДС',
					width:'38',
				},
				{
					text:'Сумма НДС',
					width:'82',
				},
				{
					text:'Вознаграждение',
					width:'90',
				},
				{
					text:'Сумма НДС вознаграждения',
					width:'100',
				},
				{
					text:'Номер ГТД',
					width:'200',
				},
				{
					text:'Страна происхождения',
					width:'100',
				},
				{
					text:'Счет учета (БУ)',
					width:'100',
				},
				{
					text:'Переданные принятые (БУ)',
					width:'100',
				},
				{
					text:'Счет учета (НУ)',
					width:'100',
				},
				{
					text:'Переданные принятые (НУ)',
					width:'100',
				},
				{
					text:'Счет доходов (БУ)',
					width:'100',
				},
				{
					text:'Субконто (БУ)',
					width:'100',
				},
				{
					text:'Счет расходов (БУ)',
					width:'100',
				},
				{
					text:'Счет доходов (НУ)',
					width:'100',
				},
				{
					text:'Субконто (НУ)',
					width:'100',
				},
				{
					text:'Счет расходов (НУ)',
					width:'100',
				},
				{
					text:'Принадлежность номенклатуры',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:104px;width:634px;height:24px;',
			items:
			[
				{
					text:'Добавить из реализации',
				},
				'-',
				{
					text:'Заполнить по инвентаризации',
				},
				{
					text:'Серийные номера',
				},
				'-',
				{
					text:'Подбор',
				},
				'-',
				'-',
				{
					text:'Поиск по штрихкоду',
				},
				{
					text:'Изменить',
				},
				{
					text:'Заполнить по реализации',
				},
				{
					text:'Заполнить по договору',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:634px;height:74px;',
			height: 74,width: 634,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Покупатель',
					width:'133',
				},
				{
					text:'Всего',
					width:'87',
				},
				{
					text:'Выставлен счет-фактура',
					width:'110',
				},
				{
					text:'Дата счета-фактуры',
					width:'106',
				},
				{
					text:'Счет фактура',
					width:'161',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:634px;height:24px;',
			items:
			[
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
			name: 'Надпись1',
			text: 'Счет учета расчетов за товары:',
			style: 'position:absolute;left:6px;top:6px;width:244px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Ном-ная группа:',
			style: 'position:absolute;left:6px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:634px;height:230px;',
			height: 230,width: 634,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Вид отчета по платежам',
					width:'220',
				},
				{
					text:'Покупатель',
					width:'100',
				},
				{
					text:'Дата события',
					width:'100',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'% НДС',
					width:'54',
				},
				{
					text:'Сумма НДС',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:634px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Учет затрат',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:30px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:416px;top:30px;width:224px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатурнаяГруппа',
			style: 'position:absolute;left:96px;top:6px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяЗатрат',
			style: 'position:absolute;left:416px;top:6px;width:224px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто1',
			style: 'position:absolute;left:96px;top:83px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто2',
			style: 'position:absolute;left:96px;top:107px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто3',
			style: 'position:absolute;left:96px;top:131px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаЗатрат',
			style: 'position:absolute;left:96px;top:59px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаЗатратНУ',
			style: 'position:absolute;left:416px;top:59px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУ1',
			style: 'position:absolute;left:416px;top:83px;width:224px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУ2',
			style: 'position:absolute;left:416px;top:107px;width:224px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУ3',
			style: 'position:absolute;left:416px;top:131px;width:224px;height:19px;',
		},
					]
				},
				{
					title:'Счета учета расчетов',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:12px;top:99px;width:99px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентом',
			style: 'position:absolute;left:252px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Счет учета расчетов по авансам полученным:',
			style: 'position:absolute;left:6px;top:29px;width:244px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоАвансамПолученным',
			style: 'position:absolute;left:252px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовЗаПосредническиеУслуги',
			style: 'position:absolute;left:252px;top:52px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоАвансамВыданным',
			style: 'position:absolute;left:252px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаНДС',
			style: 'position:absolute;left:252px;top:98px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Статья затрат:',
			style: 'position:absolute;left:326px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоДокументу',
			text: 'Всего по документу:',
			style: 'position:absolute;left:6px;top:190px;width:105px;height:18px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВходящаяДата',
			text: 'Вх. дата:',
			style: 'position:absolute;left:328px;top:27px;width:77px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:115px;top:99px;width:189px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерВходящегоДокумента',
			style: 'position:absolute;left:98px;top:27px;width:206px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВходящегоДокумента',
			style: 'position:absolute;left:411px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:98px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:421px;top:99px;width:219px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:328px;top:99px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Грузоотправитель',
			style: 'position:absolute;left:115px;top:128px;width:189px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрузополучатель',
			text: 'Грузополучатель:',
			style: 'position:absolute;left:328px;top:128px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Грузополучатель',
			style: 'position:absolute;left:421px;top:128px;width:219px;height:19px;',
		},
					]
				},
				{
					title:'Предоплата',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Счет учета расчетов за посреднические услуги:',
			style: 'position:absolute;left:6px;top:52px;width:244px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:30px;width:88px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:634px;height:152px;',
			height: 152,width: 634,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'221',
				},
				{
					text:'Дата оплаты',
					width:'116',
				},
				{
					text:'Сумма взаиморасчетов',
					width:'100',
				},
				{
					text:'Сумма регл',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:634px;height:24px;',
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
			style: 'position:absolute;left:161px;top:190px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоДокументуРегл',
			style: 'position:absolute;left:323px;top:190px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредоплатаВал',
			style: 'position:absolute;left:161px;top:211px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредоплатаРегл',
			style: 'position:absolute;left:323px;top:211px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокРегл',
			style: 'position:absolute;left:323px;top:237px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокВал',
			style: 'position:absolute;left:161px;top:237px;width:134px;height:17px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:334px;top:81px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:19px;',
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
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;',
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
			style: 'position:absolute;left:8px;top:100px;width:84px;height:29px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкаНДСВознаграждения',
			text: 'НДС возн.:',
			style: 'position:absolute;left:162px;top:128px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДСВознаграждения',
			style: 'position:absolute;left:250px;top:128px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьТоварыИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:8px;top:434px;width:235px;height:37px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:334px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьДолга',
			text: 'По договору 250 USD, 1 USD = 30 руб.',
			style: 'position:absolute;left:334px;top:57px;width:303px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:641px;top:57px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:251px;top:434px;width:72px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:326px;top:434px;width:92px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:251px;top:454px;width:72px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:326px;top:454px;width:92px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРасчетаКомиссионногоВознаграждения',
			text: 'Способ расчета:',
			style: 'position:absolute;left:334px;top:105px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРасчетаКомиссионногоВознаграждения',
			style: 'position:absolute;left:420px;top:105px;width:236px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВознаграждения',
			text: 'Сумма вознаграждения:',
			style: 'position:absolute;left:435px;top:434px;width:128px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоВознаграждения',
			style: 'position:absolute;left:564px;top:434px;width:92px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДСВознаграждения',
			text: 'Сумма НДС возн.:',
			style: 'position:absolute;left:435px;top:454px;width:128px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДСВознаграждения',
			style: 'position:absolute;left:564px;top:454px;width:92px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентКомиссионногоВознаграждения',
			text: 'Процент возн.:',
			style: 'position:absolute;left:8px;top:128px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентКомиссионногоВознаграждения',
			style: 'position:absolute;left:94px;top:128px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаСчетФактураПолученный',
			text: 'Ввести счет-фактуру',
			style: 'position:absolute;left:226px;top:475px;width:430px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактура1',
			text: 'Счет-фактура на сумму вознаграждения:',
			style: 'position:absolute;left:8px;top:475px;width:216px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:522px;width:664px;height:25px;',
			items:
			[
				'-',
				{
					text:'Печать',
				},
				{
					text:'Записать',
				},
				'-',
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				'-',
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
			style: 'position:absolute;left:334px;top:132px;width:240px;height:15px;',
		},
	]
});