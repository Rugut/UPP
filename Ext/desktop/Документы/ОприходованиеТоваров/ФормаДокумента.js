Ext.define('Документы.ОприходованиеТоваров.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:668px;height:435px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Оприходование товаров',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:178px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:383px;width:88px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:98px;top:383px;width:562px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:668px;height:25px;',
			items:
			[
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
			style: 'position:absolute;left:502px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:335px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:98px;top:335px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:338px;top:335px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:428px;top:335px;width:232px;height:19px;',
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
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Основание',
			style: 'position:absolute;left:98px;top:359px;width:562px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОснование',
			text: 'Основание:
',
			style: 'position:absolute;left:8px;top:359px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСклад',
			text: 'Склад:',
			style: 'position:absolute;left:338px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:428px;top:57px;width:232px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьТоварыИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:8px;top:313px;width:476px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:338px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:490px;top:313px;width:68px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:561px;top:313px;width:99px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнвентаризацияТоваровНаСкладе',
			text: 'Инвентаризация:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнвентаризацияТоваровНаСкладе',
			style: 'position:absolute;left:98px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:410px;width:668px;height:25px;',
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
			style: 'position:absolute;left:580px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:652px;height:204px;',
			height: 204,width: 652,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:638px;height:148px;',
			height: 148,width: 638,
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
					text:'Характеристика',
					width:'120',
				},
				{
					text:'Серия',
					width:'120',
				},
				{
					text:'Статус партии',
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
					width:'60',
				},
				{
					text:'Количество',
					width:'64',
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
					text:'% наценки',
					width:'60',
				},
				{
					text:'Розн. цена (руб.)',
					width:'80',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Сумма (регл.)',
					width:'80',
				},
				{
					text:'Сумма НУ',
					width:'74',
				},
				{
					text:'Сумма ВР',
					width:'74',
				},
				{
					text:'Сумма ПР',
					width:'72',
				},
				{
					text:'Номер ГТД',
					width:'120',
				},
				{
					text:'Страна происхождения',
					width:'120',
				},
				{
					text:'Счет учета (БУ)',
					width:'80',
				},
				{
					text:'Счет учета (НУ)',
					width:'80',
				},
				{
					text:'Качество',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:638px;height:24px;',
			items:
			[
				{
					text:'Поиск по штрихкоду',
				},
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
			name: 'НадписьКоррСчетНУ',
			text: 'Корр. счет (НУ):',
			style: 'position:absolute;left:333px;top:6px;width:142px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Корреспондирующий счет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКоррСчет',
			text: 'Корр. счет:',
			style: 'position:absolute;left:6px;top:6px;width:142px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоррСчет',
			style: 'position:absolute;left:152px;top:6px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконто1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:6px;top:29px;width:142px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто1',
			style: 'position:absolute;left:152px;top:29px;width:165px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконто2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:6px;top:52px;width:142px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто2',
			style: 'position:absolute;left:152px;top:52px;width:165px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконто3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:6px;top:75px;width:142px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто3',
			style: 'position:absolute;left:152px;top:75px;width:165px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоррСчетНУ',
			style: 'position:absolute;left:479px;top:6px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУ1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:333px;top:29px;width:142px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУ1',
			style: 'position:absolute;left:479px;top:29px;width:165px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУ2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:333px;top:52px;width:142px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУ2',
			style: 'position:absolute;left:479px;top:52px;width:165px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУ3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:333px;top:75px;width:142px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУ3',
			style: 'position:absolute;left:479px;top:75px;width:165px;height:19px;',
		},
					]
				},
			]
		},
	]
});