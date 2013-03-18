Ext.define('Документы.ВводНачальныхОстатковОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:654px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод начальных остатков ОС',
	
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
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:178px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:368px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:368px;width:556px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:426px;top:33px;width:68px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:497px;top:33px;width:69px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
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
			style: 'position:absolute;left:0px;top:395px;width:654px;height:25px;',
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
			xtype: 'label',
			name: 'НадписьОтражать',
			text: 'Отражать:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:566px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:336px;top:53px;width:88px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:426px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:338px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:426px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:108px;width:638px;height:252px;',
			height: 252,width: 638,
			items:
			[
				{
					title:'Основные средства',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:624px;height:24px;',
			items:
			[
				{
					text:'По группе ОС',
				},
				{
					text:'По наименованию',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:624px;height:195px;',
			height: 195,width: 624,
			columns:
			[
				{
					text:'N',
					width:'43',
				},
				{
					text:'Инв. номер',
					width:'54',
				},
				{
					text:'Основное средство',
					width:'122',
				},
				{
					text:'Инв. номер (Регл)',
					width:'85',
				},
				{
					text:'Дата принятия к учету',
					width:'35',
				},
				{
					text:'Событие принятия к учету',
					width:'56',
				},
				{
					text:'Название документа принятия к учету',
					width:'56',
				},
				{
					text:'Номер документа принятия к учету',
					width:'56',
				},
				{
					text:'Дата принятия к учету (Регл)',
					width:'61',
				},
				{
					text:'Событие принятия к учету (Регл)',
					width:'61',
				},
				{
					text:'Название документа принятия к учету (Регл)',
					width:'61',
				},
				{
					text:'Номер документа принятия к учету (Регл)',
					width:'61',
				},
				{
					text:'Способ поступления (БУ)',
					width:'100',
				},
				{
					text:'Дата ввода в эксплуатацию',
					width:'56',
				},
				{
					text:'Событие ввода в эксплуатацию',
					width:'56',
				},
				{
					text:'Название документа ввода в эксплуатацию',
					width:'56',
				},
				{
					text:'Номер документа ввода в эксплуатацию',
					width:'56',
				},
				{
					text:'Дата ввода в эксплуатацию (Регл)',
					width:'56',
				},
				{
					text:'Событие ввода в эксплуатацию (Регл)',
					width:'56',
				},
				{
					text:'Название документа ввода в эксплуатацию (Регл)',
					width:'56',
				},
				{
					text:'Номер документа ввода в эксплуатацию (Регл)',
					width:'56',
				},
				{
					text:'Списать на затраты при вводе',
					width:'100',
				},
				{
					text:'Списать на затраты при вводе (БУ)',
					width:'100',
				},
				{
					text:'Первоначальная стоимость',
					width:'100',
				},
				{
					text:'Текущая стоимость',
					width:'100',
				},
				{
					text:'Накопленная амортизация',
					width:'100',
				},
				{
					text:'Первоначальная стоимость (БУ)',
					width:'100',
				},
				{
					text:'Текущая стоимость (БУ)',
					width:'100',
				},
				{
					text:'Накопленная амортизация (БУ)',
					width:'100',
				},
				{
					text:'Первоначальная стоимость (НУ)',
					width:'100',
				},
				{
					text:'Текущая стоимость (НУ)',
					width:'100',
				},
				{
					text:'Накопленная амортизация (НУ)',
					width:'100',
				},
				{
					text:'Счет учета (БУ)',
					width:'100',
				},
				{
					text:'Счет амортизации (БУ)',
					width:'100',
				},
				{
					text:'Счет учета (НУ)',
					width:'100',
				},
				{
					text:'Счет амортизации (НУ)',
					width:'100',
				},
				{
					text:'МОЛ',
					width:'100',
				},
				{
					text:'МОЛ (Регл)',
					width:'100',
				},
				{
					text:'Срок полезного использования, мес.',
					width:'100',
				},
				{
					text:'Срок полезного использования (БУ), мес.',
					width:'100',
				},
				{
					text:'Дата приобретения (УСН)',
					width:'100',
				},
				{
					text:'Срок полезного использования, мес. (УСН)',
					width:'100',
				},
				{
					text:'Срок полезного использования (НУ), мес.',
					width:'100',
				},
				{
					text:'Первоначальная стоимость (УСН)',
					width:'100',
				},
				{
					text:'Сумма начисленной амортизации (до перехода на УСН)',
					width:'100',
				},
				{
					text:'Порядок включения стоимости в состав расходов (УСН)',
					width:'100',
				},
				{
					text:'Стоимость до 2002 года (НУ)',
					width:'100',
				},
				{
					text:'Амортизация до 2002 года (НУ)',
					width:'100',
				},
				{
					text:'Начислять амортизацию',
					width:'100',
				},
				{
					text:'Способ начисления амортизации',
					width:'100',
				},
				{
					text:'Способ отражения расходов по амортизации',
					width:'100',
				},
				{
					text:'Начислять амортизацию (БУ)',
					width:'100',
				},
				{
					text:'Способ начисления амортизации (БУ)',
					width:'100',
				},
				{
					text:'Способ отражения расходов по амортизации (БУ)',
					width:'100',
				},
				{
					text:'Начислять амортизацию (НУ)',
					width:'100',
				},
				{
					text:'Метод начисления амортизации (НУ)',
					width:'100',
				},
				{
					text:'Способ отражения расходов по амортизации (НУ)',
					width:'100',
				},
				{
					text:'Стоимость для вычисления амортизации',
					width:'100',
				},
				{
					text:'Стоимость для вычисления амортизации (БУ)',
					width:'100',
				},
				{
					text:'Параметр выработки',
					width:'54',
				},
				{
					text:'Предполагаемый объем продукции (работ) в натуральных ед.',
					width:'54',
				},
				{
					text:'Объем продукции (работ) для исчисления амортизации в натуральных ед.',
					width:'54',
				},
				{
					text:'Выработка количество',
					width:'54',
				},
				{
					text:'Параметр выработки (БУ)',
					width:'106',
				},
				{
					text:'Предполагаемый объем продукции (работ) в натуральных ед. (БУ)',
					width:'53',
				},
				{
					text:'Объем продукции (работ) для исчисления амортизации в натуральных ед. (БУ)',
					width:'53',
				},
				{
					text:'Выработка количество (БУ)',
					width:'106',
				},
				{
					text:'Процент годовой амортизации',
					width:'100',
				},
				{
					text:'График амортизации',
					width:'100',
				},
				{
					text:'Процент годовой амортизации (БУ)',
					width:'100',
				},
				{
					text:'График амортизации (БУ)',
					width:'100',
				},
				{
					text:'Коэффициент ускорения',
					width:'100',
				},
				{
					text:'Коэффициент ускорения (БУ)',
					width:'100',
				},
				{
					text:'Специальный коэффициент (НУ)',
					width:'100',
				},
				{
					text:'Порядок включения стоимости в состав расходов (НУ)',
					width:'100',
				},
				{
					text:'Текущая стоимость(ПР)',
					width:'106',
				},
				{
					text:'Накопленная амортизация (ПР)',
					width:'106',
				},
				{
					text:'Стоимость для вычисления амортизации (ПР)',
					width:'100',
				},
				{
					text:'Срок использования для вычисления амортизации, мес.',
					width:'94',
				},
				{
					text:'Срок использования для вычисления амортизации, мес. (БУ)',
					width:'100',
				},
				{
					text:'Начислять по базовой стоимости (НУ)',
					width:'54',
				},
				{
					text:'Дата перехода к расчету по базовой стоимости (НУ)',
					width:'54',
				},
				{
					text:'Фактический срок использования (НУ)',
					width:'54',
				},
				{
					text:'Сумма накопленной амортизации (НУ) (при переходе к начислению по базовой стоимости)',
					width:'54',
				},
				{
					text:'Родительское ОС',
					width:'100',
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
					text:'Дата последней модернизации',
					width:'52',
				},
				{
					text:'Сумма последней модернизации',
					width:'52',
				},
				{
					text:'Событие модернизации',
					width:'52',
				},
				{
					text:'Название документа модернизации',
					width:'52',
				},
				{
					text:'Номер документа модернизации',
					width:'52',
				},
				{
					text:'Дата последней модернизации (Регл)',
					width:'56',
				},
				{
					text:'Сумма последней модернизации (БУ)',
					width:'56',
				},
				{
					text:'Сумма последней модернизации (НУ)',
					width:'56',
				},
				{
					text:'Событие модернизации (Регл)',
					width:'56',
				},
				{
					text:'Название документа модернизации (Регл)',
					width:'56',
				},
				{
					text:'Номер документа модернизации (Регл)',
					width:'56',
				},
			]
		},
					]
				},
				{
					title:'Итоги',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:624px;height:220px;',
			height: 220,width: 624,
			columns:
			[
				{
					text:'Имя',
					width:'100',
				},
				{
					text:'Название колонки',
					width:'225',
				},
				{
					text:'Итог по колонке',
					width:'100',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
	]
});