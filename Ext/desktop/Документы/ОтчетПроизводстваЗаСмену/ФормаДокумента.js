Ext.define('Документы.ОтчетПроизводстваЗаСмену.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет производства за смену',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
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
					text:'Подбор',
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
					text:'Настройка',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:396px;width:652px;height:25px;',
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
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
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
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:424px;top:33px;width:69px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:500px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСклад',
			text: 'Склад:',
			style: 'position:absolute;left:336px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаданиеНаПроизводство',
			text: 'Задание на производство:',
			style: 'position:absolute;left:8px;top:102px;width:88px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаданиеНаПроизводство',
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:369px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:369px;width:548px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:131px;width:636px;height:208px;',
			height: 208,width: 636,
			items:
			[
				{
					title:'Продукция и услуги',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:152px;',
			height: 152,width: 622,
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
					text:'Продукция / услуга',
					width:'144',
				},
				{
					text:'Характеристика продукции',
					width:'107',
				},
				{
					text:'Серия продукции',
					width:'117',
				},
				{
					text:'Вид выпуска',
					width:'80',
				},
				{
					text:'Направление выпуска',
					width:'119',
				},
				{
					text:'Качество',
					width:'96',
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
					width:'70',
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
					text:'В т.ч. доделка',
					width:'70',
				},
				{
					text:'Доля стоимости',
					width:'75',
				},
				{
					text:'Номенклатурная группа',
					width:'71',
				},
				{
					text:'Заказы',
					width:'100',
				},
				{
					text:'Затраты',
					width:'125',
				},
				{
					text:'Выпуск',
					width:'125',
				},
				{
					text:'Резерв / Размещение',
					width:'100',
				},
				{
					text:'Спецификация',
					width:'158',
				},
				{
					text:'Конечная продукция',
					width:'100',
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
					text:'Счет затрат (БУ)',
					width:'100',
				},
				{
					text:'Счет затрат (НУ)',
					width:'100',
				},
				{
					text:'Статус партии',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				{
					text:'Заполнить по заданию на производство',
				},
				{
					text:'Добавить из заказа покупателя',
				},
				'-',
				{
					text:'Заполнить по заказу на производство',
				},
				{
					text:'Добавить по заказу на производство',
				},
			]
		},
					]
				},
				{
					title:'Получатели',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:25px;',
			items:
			[
				{
					text:'Заполнить из шаблона',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:622px;height:147px;',
			height: 147,width: 622,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Продукция / услуга',
					width:'100',
				},
				{
					text:'Характеристика продукции',
					width:'100',
				},
				{
					text:'Серия продукции',
					width:'100',
				},
				{
					text:'Количество',
					width:'100',
				},
				{
					text:'Подразделение',
					width:'100',
				},
				{
					text:'Подразделение организации',
					width:'100',
				},
				{
					text:'Заказ',
					width:'100',
				},
				{
					text:'Статья затрат',
					width:'100',
				},
				{
					text:'Счет затрат',
					width:'97',
				},
				{
					text:'Счет затрат (НУ)',
					width:'103',
				},
				{
					text:'Хар-р затрат',
					width:'100',
				},
				{
					text:'Вид аналитики',
					width:'100',
				},
				{
					text:'Вид аналитики (доп)',
					width:'100',
				},
				{
					text:'Вид субконто 1',
					width:'100',
				},
				{
					text:'Вид субконто 2',
					width:'100',
				},
				{
					text:'Вид субконто 3',
					width:'100',
				},
				{
					text:'Вид субконто 1 (НУ)',
					width:'100',
				},
				{
					text:'Вид субконто 2 (НУ)',
					width:'100',
				},
				{
					text:'Вид субконто 3 (НУ)',
					width:'100',
				},
				{
					text:'Аналитика',
					width:'100',
				},
				{
					text:'Номенклатурная группа',
					width:'100',
				},
				{
					text:'Субконто 1',
					width:'100',
				},
				{
					text:'Субконто 2',
					width:'100',
				},
				{
					text:'Субконто 3',
					width:'100',
				},
				{
					text:'Субконто 1 (НУ)',
					width:'100',
				},
				{
					text:'Субконто 2 (НУ)',
					width:'100',
				},
				{
					text:'Субконто 3 (НУ)',
					width:'100',
				},
				{
					text:'Продукция',
					width:'100',
				},
				{
					text:'Характеристика продукции',
					width:'100',
				},
				{
					text:'Серия продукции',
					width:'100',
				},
				{
					text:'Объект строительства',
					width:'100',
				},
				{
					text:'Способ строительства',
					width:'100',
				},
				{
					text:'Проект',
					width:'100',
				},
				{
					text:'В т.ч. отпущено сверх лимита',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Материалы',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяЗатрат',
			style: 'position:absolute;left:353px;top:6px;width:275px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗатрат',
			text: 'Статья затрат:',
			style: 'position:absolute;left:270px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:25px;width:622px;height:24px;',
			items:
			[
				{
					text:'Заполнить по спецификации',
				},
				{
					text:'Заполнить с подбором аналогов',
				},
				{
					text:'Заполнить по остаткам',
				},
				{
					text:'Заполнить по потребностям',
				},
				'-',
				{
					text:'Добавить из требование - накладная...',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:49px;width:622px;height:133px;',
			height: 133,width: 622,
			columns:
			[
				{
					text:'N',
					width:'32',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'100',
				},
				{
					text:'Материал',
					width:'138',
				},
				{
					text:'Характеристика материала',
					width:'107',
				},
				{
					text:'Серия материала',
					width:'118',
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
					width:'70',
				},
				{
					text:'Количество',
					width:'67',
				},
				{
					text:'Ед.',
					width:'46',
				},
				{
					text:'К.',
					width:'43',
				},
				{
					text:'Статья затрат',
					width:'100',
				},
				{
					text:'Вид выпуска',
					width:'100',
				},
				{
					text:'Номенклатурная группа НЗП',
					width:'100',
				},
				{
					text:'Заказы',
					width:'100',
				},
				{
					text:'Затраты',
					width:'125',
				},
				{
					text:'Выпуск',
					width:'125',
				},
				{
					text:'Спецификация',
					width:'150',
				},
				{
					text:'Подразделение НЗП',
					width:'130',
				},
				{
					text:'Подразделение организации НЗП',
					width:'130',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вводить статьи затрат по строкам',
			style: 'position:absolute;left:6px;top:6px;width:220px;height:19px;',
		},
					]
				},
				{
					title:'Распределение материалов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:152px;',
			height: 152,width: 622,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Материал',
					width:'100',
				},
				{
					text:'Характеристика материала',
					width:'100',
				},
				{
					text:'Серия материала',
					width:'100',
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
					text:'Количество',
					width:'53',
				},
				{
					text:'Статья затрат',
					width:'120',
				},
				{
					text:'Номенклатурная группа НЗП',
					width:'100',
				},
				{
					text:'Заказ НЗП',
					width:'100',
				},
				{
					text:'Продукция',
					width:'82',
				},
				{
					text:'Характеристика продукции',
					width:'110',
				},
				{
					text:'Серия продукции',
					width:'103',
				},
				{
					text:'Вид выпуска',
					width:'100',
				},
				{
					text:'Номенклатурная группа',
					width:'125',
				},
				{
					text:'Заказы',
					width:'100',
				},
				{
					text:'Затраты',
					width:'125',
				},
				{
					text:'Выпуск',
					width:'125',
				},
				{
					text:'Спецификация',
					width:'100',
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
					text:'Подразделение НЗП',
					width:'130',
				},
				{
					text:'Подразделение организации НЗП',
					width:'130',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				'-',
				'-',
				{
					text:'Подбор',
				},
			]
		},
					]
				},
				{
					title:'Выполненные работы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:152px;',
			height: 152,width: 622,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Технологическая операция',
					width:'100',
				},
				{
					text:'Вид выпуска',
					width:'100',
				},
				{
					text:'Статья затрат',
					width:'100',
				},
				{
					text:'Расценка',
					width:'100',
				},
				{
					text:'Валюта',
					width:'61',
				},
				{
					text:'Количество',
					width:'100',
				},
				{
					text:'Сумма в валюте расценки',
					width:'100',
				},
				{
					text:'Сумма',
					width:'100',
				},
				{
					text:'Сумма (регл)',
					width:'100',
				},
				{
					text:'Заказ',
					width:'100',
				},
				{
					text:'Вид аналитики',
					width:'100',
				},
				{
					text:'Вид аналитики (доп)',
					width:'100',
				},
				{
					text:'Аналитика',
					width:'99',
				},
				{
					text:'Номенклатурная группа',
					width:'99',
				},
				{
					text:'Номенклатурная группа (доп)',
					width:'99',
				},
				{
					text:'Продукция',
					width:'99',
				},
				{
					text:'Характеристика продукции',
					width:'99',
				},
				{
					text:'Серия продукции',
					width:'99',
				},
				{
					text:'Объект строительства',
					width:'99',
				},
				{
					text:'Способ строительства',
					width:'100',
				},
				{
					text:'Счет затрат (БУ)',
					width:'104',
				},
				{
					text:'Счет затрат (НУ)',
					width:'100',
				},
				{
					text:'Проект',
					width:'100',
				},
				{
					text:'Подразделение НЗП',
					width:'130',
				},
				{
					text:'Подразделение организации НЗП',
					width:'130',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				{
					text:'Заполнить по тех. карте',
				},
			]
		},
					]
				},
				{
					title:'Исполнители',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:67px;width:622px;height:115px;',
			height: 115,width: 622,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'68',
				},
				{
					text:'Работник',
					width:'149',
				},
				{
					text:'КТУ',
					width:'34',
				},
				{
					text:'Сумма к начислению',
					width:'136',
				},
				{
					text:'Сумма к начислению (регл)',
					width:'151',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:42px;width:622px;height:24px;',
			items:
			[
				'-',
				{
					text:'Рассчитать',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать тариф',
			style: 'position:absolute;left:6px;top:24px;width:120px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать КТУ',
			style: 'position:absolute;left:130px;top:24px;width:109px;height:15px;',
		},
					]
				},
				{
					title:'Распределение тех. операций',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:150px;',
			height: 150,width: 622,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Технологическая операция',
					width:'100',
				},
				{
					text:'Сумма',
					width:'100',
				},
				{
					text:'Сумма (регл.)',
					width:'100',
				},
				{
					text:'Статья затрат',
					width:'100',
				},
				{
					text:'Номенклатурная группа',
					width:'100',
				},
				{
					text:'Заказ',
					width:'125',
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
					text:'Серия номенклатуры',
					width:'100',
				},
				{
					text:'Вид выпуска',
					width:'100',
				},
				{
					text:'Спецификация',
					width:'100',
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
					text:'Подразделение НЗП',
					width:'130',
				},
				{
					text:'Подразделение организации НЗП',
					width:'130',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				{
					text:'Заполнить',
				},
			]
		},
					]
				},
				{
					title:'Прочие затраты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:152px;',
			height: 152,width: 622,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Статья затрат',
					width:'100',
				},
				{
					text:'Способ распределения затрат',
					width:'130',
				},
				{
					text:'Номенклатурная группа',
					width:'100',
				},
				{
					text:'Вид выпуска',
					width:'100',
				},
				{
					text:'Заказ',
					width:'125',
				},
				{
					text:'Сумма',
					width:'100',
				},
				{
					text:'Сумма (регл.)',
					width:'100',
				},
				{
					text:'Подразделение НЗП',
					width:'130',
				},
				{
					text:'Подразделение организации НЗП',
					width:'130',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				{
					text:'Заполнить по остаткам',
				},
			]
		},
					]
				},
				{
					title:'Распределение прочих затрат',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:152px;',
			height: 152,width: 622,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Статья затрат',
					width:'118',
				},
				{
					text:'Способ распределения затрат',
					width:'130',
				},
				{
					text:'Номенклатурная группа НЗП',
					width:'100',
				},
				{
					text:'Заказ НЗП',
					width:'100',
				},
				{
					text:'Продукция',
					width:'100',
				},
				{
					text:'Характеристика продукции',
					width:'100',
				},
				{
					text:'Серия продукции',
					width:'100',
				},
				{
					text:'Вид выпуска',
					width:'100',
				},
				{
					text:'Номенклатурная группа',
					width:'100',
				},
				{
					text:'Заказ',
					width:'125',
				},
				{
					text:'Спецификация',
					width:'100',
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
					text:'Счет затрат (БУ)',
					width:'100',
				},
				{
					text:'Счет затрат (НУ)',
					width:'100',
				},
				{
					text:'Подразделение НЗП',
					width:'130',
				},
				{
					text:'Подразделение организации НЗП',
					width:'130',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				'-',
			]
		},
					]
				},
				{
					title:'Возвратные отходы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:152px;',
			height: 152,width: 622,
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
					width:'100',
				},
				{
					text:'Характеристика номенклатуры',
					width:'100',
				},
				{
					text:'Серия номенклатуры',
					width:'100',
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
					width:'70',
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
					text:'Сумма (регл.)',
					width:'80',
				},
				{
					text:'Спецификация',
					width:'100',
				},
				{
					text:'Вид выпуска',
					width:'100',
				},
				{
					text:'Заказы',
					width:'100',
				},
				{
					text:'Затраты',
					width:'125',
				},
				{
					text:'Резерв',
					width:'125',
				},
				{
					text:'Номенклатурная группа',
					width:'100',
				},
				{
					text:'Статья затрат',
					width:'100',
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
					text:'Счет затрат (БУ)',
					width:'100',
				},
				{
					text:'Счет затрат (НУ)',
					width:'100',
				},
				{
					text:'Статус партии',
					width:'100',
				},
				{
					text:'Отражение в НУ',
					width:'100',
				},
				{
					text:'Подразделение НЗП',
					width:'130',
				},
				{
					text:'Подразделение организации НЗП',
					width:'130',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:337px;height:24px;',
			items:
			[
				{
					text:'Заполнить по спецификации',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСкладОтходов',
			text: 'Склад:',
			style: 'position:absolute;left:348px;top:8px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СкладОтходов',
			style: 'position:absolute;left:386px;top:8px;width:242px;height:19px;',
		},
					]
				},
				{
					title:'Распределение возвратных отходов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:152px;',
			height: 152,width: 622,
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
					text:'Серия номенклатуры',
					width:'100',
				},
				{
					text:'Количество',
					width:'70',
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
					text:'Продукция',
					width:'100',
				},
				{
					text:'Характеристика продукции',
					width:'100',
				},
				{
					text:'Серия продукции',
					width:'100',
				},
				{
					text:'Вид выпуска',
					width:'100',
				},
				{
					text:'Номенклатурная группа НЗП',
					width:'100',
				},
				{
					text:'Заказ НЗП',
					width:'100',
				},
				{
					text:'Заказ',
					width:'125',
				},
				{
					text:'Номенклатурная группа',
					width:'100',
				},
				{
					text:'Спецификация',
					width:'100',
				},
				{
					text:'Статья затрат',
					width:'100',
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
					text:'Подразделение НЗП',
					width:'130',
				},
				{
					text:'Подразделение организации НЗП',
					width:'130',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				{
					text:'Заполнить распределение возвратных отходов',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:336px;top:76px;width:88px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:574px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:345px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:345px;width:548px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Разрешить превышение лимита',
			style: 'position:absolute;left:424px;top:105px;width:220px;height:19px;',
		},
	]
});