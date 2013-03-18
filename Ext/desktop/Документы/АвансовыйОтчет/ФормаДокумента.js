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
			name: 'Номер',
			style: 'position:absolute;left:110px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
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
			name: 'Организация',
			style: 'position:absolute;left:110px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
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
				},
				{
					text:'Документ аванса',
					width:'220',
				},
				{
					text:'Сумма документа',
					width:'100',
				},
				{
					text:'Валюта',
					width:'60',
				},
				{
					text:'Выдано',
					width:'100',
				},
				{
					text:'Израсходовано',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:662px;height:24px;',
			items:
			[
				'-',
			]
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
					width:'45',
				},
				{
					text:'Мест',
					width:'58',
				},
				{
					text:'Количество',
					width:'65',
				},
				{
					text:'Ед.',
					width:'54',
				},
				{
					text:'К.',
					width:'41',
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
					text:'% НДС',
					width:'40',
				},
				{
					text:'НДС сумма',
					width:'80',
				},
				{
					text:'Заказ',
					width:'280',
				},
				{
					text:'Вид входящего документа',
					width:'125',
				},
				{
					text:'Дата вход. документа',
					width:'80',
				},
				{
					text:'Номер документа сторонней организации',
					width:'186',
				},
				{
					text:'СФ предъявлен',
					width:'23',
				},
				{
					text:'Поставщик',
					width:'120',
				},
				{
					text:'Дата СФ',
					width:'100',
				},
				{
					text:'Номер СФ',
					width:'186',
				},
				{
					text:'Счет-фактура',
					width:'155',
				},
				{
					text:'Номер ГТД',
					width:'118',
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
					text:'Расходы в НУ',
					width:'100',
				},
				{
					text:'Счет учета НДС',
					width:'100',
				},
				{
					text:'Счет учета (НУ)',
					width:'100',
				},
				{
					text:'Приходный ордер',
					width:'100',
				},
				{
					text:'Склад',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:662px;height:24px;',
			items:
			[
				{
					text:'Штрихкоды',
				},
			]
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьТоварыИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:6px;top:161px;width:468px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:564px;top:161px;width:80px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
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
					text:'Количество',
					width:'65',
				},
				{
					text:'Цена',
					width:'80',
				},
				{
					text:'Ед. хранения',
					width:'52',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Контрагент',
					width:'150',
				},
				{
					text:'Договор контрагента',
					width:'150',
				},
				{
					text:'Сделка',
					width:'250',
				},
				{
					text:'Заказ',
					width:'250',
				},
				{
					text:'Вид входящего документа',
					width:'112',
				},
				{
					text:'Дата вход. документа',
					width:'89',
				},
				{
					text:'Номер документа сторонней организации',
					width:'186',
				},
				{
					text:'Счет учета (БУ)',
					width:'100',
				},
				{
					text:'Счет учета (НУ)',
					width:'100',
				},
				{
					text:'Счет расчетов по таре',
					width:'100',
				},
				{
					text:'Приходный ордер',
					width:'95',
				},
				{
					text:'Склад',
					width:'105',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:656px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
			]
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
				},
				{
					text:'Контрагент',
					width:'150',
				},
				{
					text:'Договор контрагента',
					width:'153',
				},
				{
					text:'Заказ',
					width:'198',
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'149',
				},
				{
					text:'Проект',
					width:'100',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Курс взаиморасчетов',
					width:'100',
				},
				{
					text:'Кратность взаиморасчетов',
					width:'68',
				},
				{
					text:'Сумма взаиморасчетов',
					width:'112',
				},
				{
					text:'Вид входящего документа',
					width:'124',
				},
				{
					text:'Дата вход. документа',
					width:'119',
				},
				{
					text:'Номер вход. документа',
					width:'150',
				},
				{
					text:'Содержание',
					width:'120',
				},
				{
					text:'Счет расчетов',
					width:'100',
				},
				{
					text:'Счет авансов',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:662px;height:24px;',
			items:
			[
			]
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
				},
				{
					text:'Вид входящего документа',
					width:'143',
				},
				{
					text:'Дата вход. документа',
					width:'79',
				},
				{
					text:'Номер документа сторонней организации',
					width:'186',
				},
				{
					text:'СФ предъявлен ',
					width:'30',
				},
				{
					text:'Бланк строгой отчетности',
					width:'100',
				},
				{
					text:'Поставщик',
					width:'104',
				},
				{
					text:'Дата СФ',
					width:'80',
				},
				{
					text:'Номер СФ',
					width:'186',
				},
				{
					text:'Счет-фактура',
					width:'117',
				},
				{
					text:'Номенклатура',
					width:'82',
				},
				{
					text:'Содержание',
					width:'105',
				},
				{
					text:'Количество',
					width:'64',
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
					text:'% НДС',
					width:'48',
				},
				{
					text:'Сумма НДС',
					width:'80',
				},
				{
					text:'Счет учета НДС',
					width:'100',
				},
				{
					text:'Подразделение',
					width:'105',
				},
				{
					text:'Подразделение организации',
					width:'100',
				},
				{
					text:'Статья затрат',
					width:'120',
				},
				{
					text:'Заказ покупателя',
					width:'120',
				},
				{
					text:'Счет затрат (БУ)',
					width:'100',
				},
				{
					text:'Счет затрат (НУ)',
					width:'100',
				},
				{
					text:'Хар-р затрат',
					width:'103',
				},
				{
					text:'Вид аналитики',
					width:'300',
				},
				{
					text:'Вид аналитики (доп)',
					width:'300',
				},
				{
					text:'Вид субконто 1',
					width:'100',
				},
				{
					text:'Вид субконто 2',
					width:'93',
				},
				{
					text:'Вид субконто 3',
					width:'106',
				},
				{
					text:'Вид субконто 1 (НУ1)',
					width:'100',
				},
				{
					text:'Вид субконто 2 (НУ)',
					width:'93',
				},
				{
					text:'Вид субконто 3 (НУ)',
					width:'107',
				},
				{
					text:'Аналитика',
					width:'276',
				},
				{
					text:'Номенклатурная группа',
					width:'276',
				},
				{
					text:'Номенклатурная группа (доп)',
					width:'118',
				},
				{
					text:'Способ распределения затрат',
					width:'117',
				},
				{
					text:'Субконто 1',
					width:'92',
				},
				{
					text:'Субконто 2',
					width:'92',
				},
				{
					text:'Субконто 3',
					width:'92',
				},
				{
					text:'Субконто 1 (НУ)',
					width:'92',
				},
				{
					text:'Субконто 2 (НУ)',
					width:'92',
				},
				{
					text:'Субконто 3 (НУ)',
					width:'92',
				},
				{
					text:'Продукция',
					width:'92',
				},
				{
					text:'Характеристика продукции',
					width:'91',
				},
				{
					text:'Серия продукции',
					width:'93',
				},
				{
					text:'Объект строительства',
					width:'185',
				},
				{
					text:'Способ строительства',
					width:'191',
				},
				{
					text:'Расходы в НУ',
					width:'100',
				},
				{
					text:'Проект',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:662px;height:24px;',
			items:
			[
				{
					text:'Зарегистрировать предъявленные счета-фактуры',
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
			name: 'Ответственный',
			style: 'position:absolute;left:435px;top:6px;width:228px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
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
			xtype: 'textfield',
			hideLabel: true,
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
			xtype: 'textfield',
			hideLabel: true,
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
			name: 'КоличествоДокументов',
			style: 'position:absolute;left:96px;top:339px;width:50px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЛистов',
			style: 'position:absolute;left:231px;top:339px;width:40px;height:19px;',
		},
	]
});