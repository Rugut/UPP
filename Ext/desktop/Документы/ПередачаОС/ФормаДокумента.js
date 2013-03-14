Ext.define('Документы.ПередачаОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:664px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Передача ОС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
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
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:428px;width:562px;height:19px;',
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
			xtype: 'label',
			name: 'НадписьСобытие',
			text: 'Событие:',
			style: 'position:absolute;left:8px;top:105px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Событие',
			style: 'position:absolute;left:94px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:420px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:498px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
			items:
			[
				{
					text:'Цены и валюта...',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
				},
				{
					text:'',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:664px;height:25px;',
			items:
			[
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
			xtype: 'label',
			name: 'НадписьОтражать',
			text: 'Отразить в:',
			style: 'position:absolute;left:334px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:576px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:175px;width:648px;height:205px;',
			height: 205,width: 648,
			items:
			[
				{
					title:'Основные средства',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:634px;height:24px;',
			items:
			[
				{
					text:'Для списка ОС',
				},
				{
					text:'По наименованию',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:634px;height:141px;',
			height: 141,width: 634,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Основное средство',
					width:'198',
				},
				{
					text:'Инв. №',
					width:'64',
				},
				{
					text:'Стоимость',
					width:'34',
				},
				{
					text:'Ост. стоимость',
					width:'92',
				},
				{
					text:'Амортизация',
					width:'98',
				},
				{
					text:'Аморт. за месяц',
					width:'98',
				},
				{
					text:'Стоимость (БУ)',
					width:'110',
				},
				{
					text:'Ост. стоимость (БУ)',
					width:'110',
				},
				{
					text:'Амортизация (БУ)',
					width:'116',
				},
				{
					text:'Аморт. за месяц (БУ)',
					width:'116',
				},
				{
					text:'Стоимость (НУ)',
					width:'109',
				},
				{
					text:'Ост. стоимость (НУ)',
					width:'109',
				},
				{
					text:'Амортизация (НУ)',
					width:'116',
				},
				{
					text:'Аморт. за месяц (НУ)',
					width:'116',
				},
				{
					text:'Сумма аморт. премии, вкл. в расходы (НУ)',
					width:'120',
				},
				{
					text:'Сумма',
					width:'124',
				},
				{
					text:'% НДС',
					width:'42',
				},
				{
					text:'Сумма НДС',
					width:'83',
				},
				{
					text:'Всего',
					width:'111',
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
					text:'Счет доходов (НУ)',
					width:'100',
				},
				{
					text:'Субконто (НУ)',
					width:'100',
				},
				{
					text:'Счет расходов БУ',
					width:'100',
				},
				{
					text:'Счет расходов НУ',
					width:'100',
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
			name: 'НадписьСуммаВзаиморасчетов',
			text: 'Сумма <нет валюты>:',
			style: 'position:absolute;left:6px;top:6px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:86px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:100px;top:86px;width:206px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:326px;top:86px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:412px;top:86px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:182px;top:6px;width:458px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресДоставки',
			text: 'Адрес доставки:',
			style: 'position:absolute;left:6px;top:54px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресДоставки',
			style: 'position:absolute;left:100px;top:54px;width:540px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Грузополучатель',
			style: 'position:absolute;left:100px;top:30px;width:206px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрузополучатель',
			text: 'Грузополучатель:',
			style: 'position:absolute;left:6px;top:30px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:100px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрузоотправитель',
			text: 'Грузоотправитель:',
			style: 'position:absolute;left:326px;top:30px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Грузоотправитель',
			style: 'position:absolute;left:424px;top:30px;width:216px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Право собственности переходит после государственной регистрации',
			style: 'position:absolute;left:6px;top:114px;width:404px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьНедвижимость',
			text: 'Переход права собственности отражается документом «Реализация отгруженных товаров»',
			style: 'position:absolute;left:6px;top:134px;width:634px;height:17px;text-align:left;',
		},
					]
				},
				{
					title:'Счета учета расчетов',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетов',
			text: 'Счет учета расчетов с контрагентом:',
			style: 'position:absolute;left:6px;top:6px;width:196px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентом',
			style: 'position:absolute;left:204px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаАвансов',
			text: 'Счет учета расчетов по авансам:',
			style: 'position:absolute;left:6px;top:29px;width:196px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоАвансам',
			style: 'position:absolute;left:204px;top:29px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Предоплата',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:634px;height:89px;',
			height: 89,width: 634,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Сделка',
					width:'154',
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'164',
				},
				{
					text:'Дата оплаты',
					width:'81',
				},
				{
					text:'Сумма взаиморасчетов',
					width:'79',
				},
				{
					text:'Сумма регл',
					width:'73',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:615px;height:24px;',
			items:
			[
				{
					text:'Заполнить по заказам документа',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПоДокументу',
			text: 'Всего по документу:',
			style: 'position:absolute;left:6px;top:119px;width:105px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредоплата',
			text: 'Всего предоплата:',
			style: 'position:absolute;left:6px;top:139px;width:105px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОсталось',
			text: 'Осталось оплатить:',
			style: 'position:absolute;left:6px;top:159px;width:105px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоДокументуВал',
			style: 'position:absolute;left:161px;top:118px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоДокументуРегл',
			style: 'position:absolute;left:323px;top:118px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредоплатаВал',
			style: 'position:absolute;left:161px;top:139px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредоплатаРегл',
			style: 'position:absolute;left:323px;top:139px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокРегл',
			style: 'position:absolute;left:323px;top:161px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокВал',
			style: 'position:absolute;left:161px;top:161px;width:134px;height:17px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактура',
			text: 'Счет-фактура:',
			style: 'position:absolute;left:8px;top:406px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаСчетФактура',
			text: 'Ввести счет-фактуру',
			style: 'position:absolute;left:94px;top:406px;width:378px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:480px;top:406px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:480px;top:384px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:554px;top:384px;width:102px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:555px;top:406px;width:101px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:334px;top:57px;width:84px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:420px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьДолга',
			text: 'По договору 250 USD, 1 USD = 30 руб.',
			style: 'position:absolute;left:334px;top:81px;width:305px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьТоварыИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:8px;top:384px;width:464px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокПодготовкаКПередачеОС',
			style: 'position:absolute;left:420px;top:105px;width:236px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокПодготовкаКПередачеОС',
			text: 'Документ подготовки:',
			style: 'position:absolute;left:334px;top:102px;width:84px;height:27px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:641px;top:81px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСобытиеРегл',
			text: 'Событие (регл.):',
			style: 'position:absolute;left:8px;top:129px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СобытиеРегл',
			style: 'position:absolute;left:94px;top:129px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Восстановить амортизационную премию',
			style: 'position:absolute;left:336px;top:134px;width:300px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяДоходов',
			text: 'Статья доходов:',
			style: 'position:absolute;left:334px;top:154px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДляВосстановленияАмортизационнойПремии',
			style: 'position:absolute;left:420px;top:154px;width:236px;height:19px;',
		},
	]
});