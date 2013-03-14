Ext.define('Документы.ВозвратТоваровПоставщику.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:662px;height:442px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Возврат товаров поставщику',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:172px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:390px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:390px;width:564px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:662px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:418px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:497px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:131px;width:646px;height:210px;',
			height: 210,width: 646,
			items:
			[
				{
					title:'Оборудование',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:632px;height:154px;',
			height: 154,width: 632,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Номенклатура',
					width:'172',
				},
				{
					text:'Характеристика номенклатуры',
					width:'181',
				},
				{
					text:'Серия номенклатуры',
					width:'100',
				},
				{
					text:'Мест',
					width:'54',
				},
				{
					text:'Количество',
					width:'69',
				},
				{
					text:'Ед.',
					width:'49',
				},
				{
					text:'К.',
					width:'44',
				},
				{
					text:'Цена',
					width:'78',
				},
				{
					text:'Сумма',
					width:'79',
				},
				{
					text:'% НДС',
					width:'53',
				},
				{
					text:'Сумма НДС',
					width:'73',
				},
				{
					text:'Всего',
					width:'81',
				},
				{
					text:'Документ поступления оборудования',
					width:'224',
				},
				{
					text:'Счет учета (БУ)',
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
					text:'Склад',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:632px;height:24px;',
			items:
			[
				{
					text:'Заполнить  по поступлению',
				},
				{
					text:'Добавить из поступления',
				},
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
			style: 'position:absolute;left:6px;top:30px;width:632px;height:154px;',
			height: 154,width: 632,
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
					width:'60',
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
					width:'46',
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
					text:'Сумма НДС',
					width:'80',
				},
				{
					text:'Всего',
					width:'80',
				},
				{
					text:'Документ поступления Товаров',
					width:'230',
				},
				{
					text:'Заказ ',
					width:'250',
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
					text:'Счет учета НДС',
					width:'100',
				},
				{
					text:'Счет учета (НУ)',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:632px;height:24px;',
			items:
			[
				'-',
				'-',
				'-',
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Изменить',
				},
				'-',
				{
					text:'Серийные номера',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:10px;top:70px;width:97px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Возвратная тара',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетов',
			text: 'Сумма <нет валюты>:',
			style: 'position:absolute;left:10px;top:27px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:632px;height:24px;',
			items:
			[
				{
					text:'Заполнить по заказу поставщику',
				},
				{
					text:'Заполнить по поступлению',
				},
				{
					text:'Добавить из поступления',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:632px;height:154px;',
			height: 154,width: 632,
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
					text:'Количество',
					width:'65',
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
					text:'Заказ',
					width:'250',
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
					text:'Склад',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСчетРасчетов',
			text: 'Счет учета расчетов:',
			style: 'position:absolute;left:6px;top:25px;width:191px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнформацияОСчетеФактуре',
			text: 'При снятом флаге возврат отражается по счету-фактуре поступления. Если во всех или отдельных строках табличной части ценностей не указан документ поступления, на основании возврата может быть введен счет-фактура для указания реквизитов входящего документа.
При установленном флаге выписывается отдельный счет-фактура на возвращаемые ценности. Один экземпляр счета-фактуры передается поставщику.',
			style: 'position:absolute;left:6px;top:30px;width:632px;height:154px;',
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
			style: 'position:absolute;left:110px;top:70px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:330px;top:70px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:418px;top:70px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:90px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Грузополучатель',
			style: 'position:absolute;left:110px;top:124px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрузополучатель',
			text: 'Грузополучатель:',
			style: 'position:absolute;left:10px;top:124px;width:97px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БанковскийСчетОрганизации',
			style: 'position:absolute;left:418px;top:97px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Грузоотправитель',
			style: 'position:absolute;left:110px;top:97px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрузоотправитель',
			text: 'Грузоотправитель:',
			style: 'position:absolute;left:10px;top:97px;width:97px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:418px;top:124px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:330px;top:124px;width:86px;height:19px;',
		},
					]
				},
				{
					title:'Счета учета расчетов',
					items:
					[
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:183px;top:27px;width:455px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентом',
			style: 'position:absolute;left:201px;top:25px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоАвансам',
			style: 'position:absolute;left:201px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоТаре',
			style: 'position:absolute;left:538px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетовПоПретензиям',
			text: 'Счет учета расчетов по претензиям:',
			style: 'position:absolute;left:343px;top:25px;width:191px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоПретензиям',
			style: 'position:absolute;left:538px;top:25px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаДоходовБУ',
			text: 'Счет учета доходов (БУ):',
			style: 'position:absolute;left:6px;top:111px;width:189px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаДоходовБУ',
			style: 'position:absolute;left:201px;top:111px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасходовБУ',
			text: 'Счет учета расходов (БУ):',
			style: 'position:absolute;left:6px;top:134px;width:189px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасходовБУ',
			style: 'position:absolute;left:201px;top:134px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаДоходовНУ',
			text: 'Счет учета доходов (НУ):',
			style: 'position:absolute;left:343px;top:111px;width:191px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаДоходовНУ',
			style: 'position:absolute;left:538px;top:111px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасходовНУ',
			text: 'Счет учета расходов (НУ):',
			style: 'position:absolute;left:343px;top:134px;width:191px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасходовНУ',
			style: 'position:absolute;left:538px;top:134px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяДоходовИРасходов',
			text: 'Статья доходов и расходов:',
			style: 'position:absolute;left:6px;top:157px;width:191px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДоходовИРасходов',
			style: 'position:absolute;left:201px;top:157px;width:437px;height:19px;',
		},
					]
				},
				{
					title:'Документы поступления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:632px;height:154px;',
			height: 154,width: 632,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'227',
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
			style: 'position:absolute;left:6px;top:6px;width:632px;height:24px;',
			items:
			[
				{
					text:'Заполнить документы расчетов с контрагентом',
				},
			]
		},
					]
				},
				{
					title:'НДС',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетАвансов',
			text: 'Счет учета авансов:',
			style: 'position:absolute;left:6px;top:48px;width:191px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Поставщику выставляется счет-фактура на возврат',
			style: 'position:absolute;left:6px;top:6px;width:286px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:330px;top:81px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:81px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:418px;top:81px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:90px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:90px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Сделка:
',
			style: 'position:absolute;left:8px;top:101px;width:80px;height:28px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:418px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьТоварыИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:8px;top:346px;width:480px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:330px;top:33px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьДолга',
			text: 'По договору 250 USD, 1 USD = 30 руб.',
			style: 'position:absolute;left:330px;top:105px;width:303px;height:19px;text-align:right;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:639px;top:105px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:500px;top:346px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:574px;top:346px;width:80px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:500px;top:366px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:574px;top:366px;width:80px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:417px;width:662px;height:25px;',
			items:
			[
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
			style: 'position:absolute;left:574px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПередачи',
			style: 'position:absolute;left:330px;top:57px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактура',
			text: 'Счет-фактура (полученный):',
			style: 'position:absolute;left:8px;top:366px;width:141px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаСчетФактура',
			text: 'Ввести счет-фактуру',
			style: 'position:absolute;left:152px;top:366px;width:336px;height:17px;',
		},
	]
});