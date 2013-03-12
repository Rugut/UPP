Ext.define('Документы.РеализацияУслугПоПереработке.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:666px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Реализация услуг по переработке',
	
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
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:428px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:428px;width:562px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:666px;height:25px;',
			items:
			[
				{
					text:'Дт/кт',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'',
				},
				{
					text:'Показать/скрыть счета учета',
				},
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Цены и валюта...',
				},
				'-',
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:425px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:499px;top:33px;width:69px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:130px;width:650px;height:244px;',
			height: 244,width: 650,
			items:
			[
				{
					title:'Продукция',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:636px;height:188px;',
			height: 188,width: 636,
			columns:
			[
				{
					text:'№',
					width:'30',
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
					text:'Характеристика',
					width:'120',
				},
				{
					text:'Серия',
					width:'120',
				},
				{
					text:'Ед. мест',
					width:'50',
				},
				{
					text:'К.мест',
					width:'45',
				},
				{
					text:'Мест',
					width:'67',
				},
				{
					text:'Количество',
					width:'67',
				},
				{
					text:'Ед.',
					width:'53',
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
					text:'% Руч. ск.',
					width:'71',
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
					text:'Спецификация',
					width:'166',
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
					text:'Счет расходов (БУ)',
					width:'100',
				},
				{
					text:'Счет расходов (НУ)',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:636px;height:24px;',
			items:
			[
				{
					text:'Подбор',
				},
				'-',
				{
					text:'Из терминала сбора данных',
				},
				{
					text:'Заполнить по заказу покупателя',
				},
				'-',
				{
					text:'Изменить',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:328px;top:54px;width:87px;height:19px;',
		},
					]
				},
				{
					title:'Услуги',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Счет учета расчетов с контрагентом:',
			style: 'position:absolute;left:4px;top:7px;width:188px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:636px;height:188px;',
			height: 188,width: 636,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Номенклатура',
					width:'220',
				},
				{
					text:'Содержание услуги, доп. сведения',
					width:'102',
				},
				{
					text:'Количество',
					width:'80',
				},
				{
					text:'Цена',
					width:'74',
				},
				{
					text:'Сумма',
					width:'82',
				},
				{
					text:'% НДС',
					width:'61',
				},
				{
					text:'Сумма НДС',
					width:'81',
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
					text:'Счет расходов (БУ)',
					width:'100',
				},
				{
					text:'Счет расходов (НУ)',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:636px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
				{
					text:'Заполнить по заказу покупателя',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Использованные материалы',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетов',
			text: 'Сумма <нет валюты>:',
			style: 'position:absolute;left:12px;top:30px;width:84px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:637px;height:188px;',
			height: 188,width: 637,
			columns:
			[
				{
					text:'N',
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
					text:'Характеристика',
					width:'120',
				},
				{
					text:'Ед. мест',
					width:'50',
				},
				{
					text:'К.мест',
					width:'45',
				},
				{
					text:'Мест',
					width:'67',
				},
				{
					text:'Количество',
					width:'67',
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
					width:'100',
				},
				{
					text:'Сумма',
					width:'100',
				},
				{
					text:'Серия номенклатуры',
					width:'153',
				},
				{
					text:'Счет учета (БУ)',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить',
				},
				{
					text:'Заполнить по расходу на выпуск',
				},
				{
					text:'Подбор',
				},
				'-',
			]
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
			style: 'position:absolute;left:97px;top:54px;width:214px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:415px;top:54px;width:227px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:97px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Счет учета расчетов по авансам:',
			style: 'position:absolute;left:4px;top:31px;width:188px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:97px;top:79px;width:214px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоДокументу',
			text: 'Всего по документу:',
			style: 'position:absolute;left:6px;top:158px;width:105px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель',
			style: 'position:absolute;left:415px;top:79px;width:227px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИсполнительПоПриказу',
			text: '   по приказу:',
			style: 'position:absolute;left:328px;top:103px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИсполнительПоПриказу',
			style: 'position:absolute;left:415px;top:103px;width:227px;height:19px;',
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
			style: 'position:absolute;left:178px;top:30px;width:133px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентом',
			style: 'position:absolute;left:194px;top:7px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоАвансам',
			style: 'position:absolute;left:194px;top:31px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Предоплата',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:54px;width:90px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:636px;height:122px;',
			height: 122,width: 636,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'228',
				},
				{
					text:'Дата оплаты',
					width:'115',
				},
				{
					text:'Сумма взаиморасчетов',
					width:'72',
				},
				{
					text:'Сумма регл',
					width:'77',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:636px;height:24px;',
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
			style: 'position:absolute;left:161px;top:158px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоДокументуРегл',
			style: 'position:absolute;left:318px;top:158px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредоплатаВал',
			style: 'position:absolute;left:161px;top:179px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредоплатаРегл',
			style: 'position:absolute;left:318px;top:179px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокРегл',
			style: 'position:absolute;left:318px;top:201px;width:134px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокВал',
			style: 'position:absolute;left:161px;top:201px;width:134px;height:17px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:336px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:105px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:426px;top:81px;width:232px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
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
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказ',
			text: 'Заказ:
',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьПродукцияИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:8px;top:380px;width:454px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактура',
			text: 'Счет-фактура:',
			style: 'position:absolute;left:8px;top:404px;width:88px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьДолга',
			text: 'По договору 250 USD, 1 USD = 30 руб.',
			style: 'position:absolute;left:336px;top:105px;width:304px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаСчетФактура',
			text: 'Ввести счет-фактуру',
			style: 'position:absolute;left:96px;top:404px;width:366px;height:17px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:643px;top:105px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:471px;top:380px;width:72px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:545px;top:380px;width:113px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:471px;top:404px;width:72px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:545px;top:404px;width:113px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:666px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Печать',
				},
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:573px;top:33px;width:80px;height:19px;',
		},
	]
});