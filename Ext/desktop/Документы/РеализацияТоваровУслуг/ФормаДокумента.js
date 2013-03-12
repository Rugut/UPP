Ext.define('Документы.РеализацияТоваровУслуг.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:676px;height:488px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Реализация товаров и услуг',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:178px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:436px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:436px;width:574px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:676px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Открыть форму настройки бланка товарного наполнения',
				},
				'-',
				{
					text:'Список электронных документов',
				},
				{
					text:'Отправить по эл. почте',
				},
				'-',
				{
					text:'Заполнить и провести',
				},
				{
					text:'В файл',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Отправить по эл. почте',
				},
				{
					text:'Открыть актуальный электронный документ',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Показать/скрыть счета учета',
				},
				{
					text:'Цены и валюта...',
				},
				'-',
				'-',
				'-',
				{
					text:'Сформировать новый электронный документ',
				},
				{
					text:'Открыть форму настройки оформления пакета документов',
				},
				{
					text:'Сформировать, подписать и отправить',
				},
				'-',
				'-',
				'-',
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Выгрузить в файл',
				},
				{
					text:'',
				},
				{
					text:'Оформить документы',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:428px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:506px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:128px;width:660px;height:262px;',
			height: 262,width: 660,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:646px;height:212px;',
			height: 212,width: 646,
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
					width:'250',
				},
				{
					text:'Характеристика номенклатуры',
					width:'250',
				},
				{
					text:'Серия номенклатуры',
					width:'250',
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
					width:'67',
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
					text:'Сумма без скидок',
					width:'87',
				},
				{
					text:'Цена',
					width:'80',
				},
				{
					text:'% Руч.ск.',
					width:'68',
				},
				{
					text:'% Авт.ск.',
					width:'69',
				},
				{
					text:'Сумма',
					width:'91',
				},
				{
					text:'% НДС',
					width:'40',
				},
				{
					text:'Сумма НДС',
					width:'80',
				},
				{
					text:'Всего',
					width:'80',
				},
				{
					text:'Способ списания',
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
					text:'Собственные, счет учета (БУ)',
					width:'90',
				},
				{
					text:'Принятые, счет учета (БУ)',
					width:'100',
				},
				{
					text:'Переданные, собственные (БУ)',
					width:'100',
				},
				{
					text:'Переданные, принятые (БУ)',
					width:'100',
				},
				{
					text:'Счет учета (НУ)',
					width:'90',
				},
				{
					text:'Принятые счет учета (НУ)',
					width:'100',
				},
				{
					text:'Переданные, собственные (НУ)',
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
					text:'Качество',
					width:'100',
				},
				{
					text:'Склад',
					width:'100',
				},
				{
					text:'Заказ покупателя',
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
			style: 'position:absolute;left:6px;top:0px;width:646px;height:24px;',
			items:
			[
				'-',
				{
					text:'Добавить из поступления',
				},
				{
					text:'Изменить',
				},
				'-',
				{
					text:'Заполнить по заказу покупателя (счету на оплату)',
				},
				'-',
				{
					text:'Серийные номера',
				},
				{
					text:'Штрихкоды',
				},
				'-',
				{
					text:'Состав набора',
				},
				{
					text:'Отобрать заказы, заполнить по заказам',
				},
				'-',
				{
					text:'Подбор',
				},
				{
					text:'Заполнить из терминала сбора данных',
				},
				{
					text:'Поиск по штрихкоду',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Возв. тара',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:646px;height:24px;',
			items:
			[
				'-',
				{
					text:'Отобрать заказы, заполнить по заказам',
				},
				{
					text:'Подбор',
				},
				{
					text:'Добавить из поступления',
				},
				'-',
				{
					text:'Заполнить по заказу покупателя (счету на оплату)',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:646px;height:212px;',
			height: 212,width: 646,
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
					width:'251',
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
					text:'Способ списания',
					width:'100',
				},
				{
					text:'Счет учета (БУ)',
					width:'90',
				},
				{
					text:'Счет учета (НУ)',
					width:'90',
				},
				{
					text:'Склад',
					width:'100',
				},
				{
					text:'Заказ покупателя',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетовСКонтрагентом',
			text: 'Счет учета расчетов с контрагентом:',
			style: 'position:absolute;left:5px;top:7px;width:188px;height:19px;',
		},
					]
				},
				{
					title:'Услуги',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетов',
			text: 'Сумма <нет валюты>:',
			style: 'position:absolute;left:7px;top:25px;width:110px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:646px;height:212px;',
			height: 212,width: 646,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Номенклатура',
					width:'100',
				},
				{
					text:'Содержание услуги, доп. сведения',
					width:'100',
				},
				{
					text:'Количество',
					width:'100',
				},
				{
					text:'Цена',
					width:'100',
				},
				{
					text:'% Руч.ск.',
					width:'51',
				},
				{
					text:'% Авт.ск.',
					width:'51',
				},
				{
					text:'Сумма',
					width:'100',
				},
				{
					text:'% НДС',
					width:'56',
				},
				{
					text:'Сумма НДС',
					width:'100',
				},
				{
					text:'Всего',
					width:'80',
				},
				{
					text:'Счет доходов (БУ)',
					width:'94',
				},
				{
					text:'Субконто (БУ)',
					width:'95',
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
					text:'Заказ покупателя',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:646px;height:24px;',
			items:
			[
				{
					text:'Заполнить по заказу покупателя (счету на оплату)',
				},
				{
					text:'Отобрать заказы, заполнить по заказам',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтпускРазрешил',
			text: 'Отпуск разрешил:',
			style: 'position:absolute;left:6px;top:26px;width:99px;height:19px;',
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
			name: 'Подразделение',
			style: 'position:absolute;left:121px;top:48px;width:194px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:325px;top:48px;width:103px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:433px;top:48px;width:215px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:99px;top:26px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:194px;top:25px;width:121px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетовПоАвансам',
			text: 'Счет учета расчетов по авансам:',
			style: 'position:absolute;left:356px;top:7px;width:188px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БанковскийСчетОрганизации',
			style: 'position:absolute;left:121px;top:71px;width:194px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДисконтнаяКарта',
			style: 'position:absolute;left:433px;top:25px;width:215px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:433px;top:71px;width:215px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отключить контроль взаиморасчетов при проведении документа',
			style: 'position:absolute;left:6px;top:179px;width:354px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГрузоотправительДополнительно',
			style: 'position:absolute;left:121px;top:94px;width:194px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГрузополучательДополнительно',
			style: 'position:absolute;left:433px;top:94px;width:215px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоДокументу',
			text: 'Всего по документу:',
			style: 'position:absolute;left:6px;top:173px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресДоставки',
			style: 'position:absolute;left:121px;top:117px;width:527px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнениеКАдресуДоставки',
			style: 'position:absolute;left:121px;top:140px;width:527px;height:19px;',
		},
					]
				},
				{
					title:'Счета учета',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентом',
			style: 'position:absolute;left:194px;top:7px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоАвансам',
			style: 'position:absolute;left:546px;top:7px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоТаре',
			style: 'position:absolute;left:194px;top:104px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаДоходовПоТареБУ',
			style: 'position:absolute;left:194px;top:57px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасходовПоТареБУ',
			style: 'position:absolute;left:194px;top:81px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаДоходовПоТареНУ',
			style: 'position:absolute;left:546px;top:57px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасходовПоТареНУ',
			style: 'position:absolute;left:546px;top:81px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяПрочихДоходовРасходовПоТаре',
			style: 'position:absolute;left:546px;top:105px;width:100px;height:19px;',
		},
					]
				},
				{
					title:'Авто. скидки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:646px;height:230px;',
			height: 230,width: 646,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Номенклатура',
					width:'100',
				},
				{
					text:'Характеристика номенклатуры',
					width:'100',
				},
				{
					text:'Качество',
					width:'100',
				},
				{
					text:'Процент автоматических скидок',
					width:'100',
				},
				{
					text:'Условие автоматической скидки',
					width:'100',
				},
				{
					text:'Значение условия автоматической скидки',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Печать',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаДоходовПоТареБУ',
			text: 'Счет учета доходов по таре (БУ):',
			style: 'position:absolute;left:6px;top:57px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтпускРазрешил',
			style: 'position:absolute;left:107px;top:26px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтпускПроизвел',
			style: 'position:absolute;left:107px;top:74px;width:199px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоверенностьДата',
			text: 'от:',
			style: 'position:absolute;left:224px;top:145px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверенностьВыдана',
			style: 'position:absolute;left:107px;top:145px;width:541px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверенностьЧерезКого',
			style: 'position:absolute;left:107px;top:169px;width:541px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверенностьНомер',
			style: 'position:absolute;left:107px;top:121px;width:115px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоверенностьДата',
			style: 'position:absolute;left:246px;top:121px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредоплата',
			text: 'Всего предоплата:',
			style: 'position:absolute;left:6px;top:196px;width:105px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаРуководителяПоПриказу',
			text: 'на основании:',
			style: 'position:absolute;left:21px;top:50px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаРуководителяПоПриказу',
			style: 'position:absolute;left:107px;top:50px;width:199px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГлавныйБухгалтер',
			text: 'Главный бухгалтер:',
			style: 'position:absolute;left:331px;top:26px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГлавныйБухгалтер',
			style: 'position:absolute;left:437px;top:26px;width:215px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаГлавногоБухгалтераПоПриказу',
			text: 'на основании:',
			style: 'position:absolute;left:343px;top:50px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаГлавногоБухгалтераПоПриказу',
			style: 'position:absolute;left:437px;top:50px;width:215px;height:19px;',
		},
					]
				},
				{
					title:'Предоплата',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:646px;height:143px;',
			height: 143,width: 646,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Заказ покупателя',
					width:'139',
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'161',
				},
				{
					text:'Дата оплаты',
					width:'100',
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
			style: 'position:absolute;left:6px;top:0px;width:646px;height:24px;',
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
			style: 'position:absolute;left:120px;top:173px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоДокументуРегл',
			style: 'position:absolute;left:277px;top:173px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредоплатаВал',
			style: 'position:absolute;left:121px;top:196px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредоплатаРегл',
			style: 'position:absolute;left:278px;top:196px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокРегл',
			style: 'position:absolute;left:278px;top:219px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокВал',
			style: 'position:absolute;left:121px;top:219px;width:134px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:338px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:428px;top:81px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:98px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:98px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Сделка:
',
			style: 'position:absolute;left:8px;top:102px;width:88px;height:22px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:428px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьТоварыИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:8px;top:392px;width:456px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:338px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактура',
			text: 'Счет-фактура:',
			style: 'position:absolute;left:8px;top:414px;width:80px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьДолга',
			text: 'По договору 250 USD, 1 USD = 30 руб.',
			style: 'position:absolute;left:338px;top:105px;width:309px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаСчетФактура',
			text: 'Ввести счет-фактуру',
			style: 'position:absolute;left:90px;top:414px;width:373px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:649px;top:105px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:470px;top:392px;width:72px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:542px;top:392px;width:122px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:470px;top:414px;width:72px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:542px;top:414px;width:122px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:463px;width:676px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
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
				'-',
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПередачи',
			style: 'position:absolute;left:338px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:584px;top:33px;width:80px;height:19px;',
		},
	]
});