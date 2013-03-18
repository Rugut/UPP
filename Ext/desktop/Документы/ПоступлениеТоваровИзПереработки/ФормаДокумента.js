Ext.define('Документы.ПоступлениеТоваровИзПереработки.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:422px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Поступление товаров из переработки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'Цены и валюта...',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
					]
				},
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
					text:'Подбор',
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
			style: 'position:absolute;left:0px;top:397px;width:652px;height:25px;',
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
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'СкладОрдер',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказ',
			text: 'Заказ:',
			style: 'position:absolute;left:8px;top:105px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Заказ',
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:370px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:370px;width:548px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:157px;width:636px;height:180px;',
			height: 180,width: 636,
			items:
			[
				{
					title:'Продукция',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:124px;',
			height: 124,width: 622,
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
					text:'Продукция',
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
					width:'118',
				},
				{
					text:'Резерв',
					width:'115',
				},
				{
					text:'Спецификация',
					width:'173',
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
					text:'Проект',
					width:'100',
				},
				{
					text:'Качество',
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
					text:'Заполнить по заказу поставщику',
				},
			]
		},
					]
				},
				{
					title:'Тара',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:124px;',
			height: 124,width: 622,
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
					width:'100',
				},
				{
					text:'Номенклатура',
					width:'200',
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
					text:'Заказ резерв',
					width:'200',
				},
				{
					text:'Счет учета (БУ)',
					width:'100',
				},
				{
					text:'Счет учета (НУ)',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
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
					title:'Материалы',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяЗатрат',
			style: 'position:absolute;left:290px;top:6px;width:338px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗатрат',
			text: 'Статья затрат:',
			style: 'position:absolute;left:210px;top:6px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:25px;width:622px;height:24px;',
			items:
			[
				{
					text:'Заполнить по заказу',
				},
				{
					text:'Заполнить по спецификации',
				},
				{
					text:'Заполнить с подбором аналогов',
				},
				{
					text:'Заполнить по остаткам',
				},
				'-',
				{
					text:'Добавить из требование - накладная...',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:49px;width:622px;height:105px;',
			height: 105,width: 622,
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
					text:'Материал',
					width:'142',
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
					width:'43',
				},
				{
					text:'Статья затрат',
					width:'100',
				},
				{
					text:'Заказ',
					width:'125',
				},
				{
					text:'Спецификация',
					width:'150',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вводить статьи затрат по строкам',
			style: 'position:absolute;left:6px;top:6px;width:200px;height:19px;',
		},
					]
				},
				{
					title:'Распределение материалов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:124px;',
			height: 124,width: 622,
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
					text:'Номенклатурная группа',
					width:'125',
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
					text:'Заказ',
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
					title:'Прочие затраты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:124px;',
			height: 124,width: 622,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Статья затрат',
					width:'141',
				},
				{
					text:'Способ распределения затрат на выпуск',
					width:'130',
				},
				{
					text:'Номенклатурная группа',
					width:'161',
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
					text:'Сумма (Регл)',
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
			style: 'position:absolute;left:6px;top:30px;width:622px;height:124px;',
			height: 124,width: 622,
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
					text:'Способ распределения затрат на выпуск',
					width:'130',
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
					width:'68',
				},
				{
					text:'Сумма (Регл)',
					width:'78',
				},
				{
					text:'Счет затрат (БУ)',
					width:'100',
				},
				{
					text:'Счет затрат (НУ)',
					width:'100',
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
			style: 'position:absolute;left:6px;top:30px;width:622px;height:124px;',
			height: 124,width: 622,
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
					text:'Заказы',
					width:'100',
				},
				{
					text:'Затраты',
					width:'111',
				},
				{
					text:'Резерв',
					width:'114',
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
					width:'97',
				},
				{
					text:'Счет учета (НУ)',
					width:'103',
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
			style: 'position:absolute;left:350px;top:9px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СкладОтходов',
			style: 'position:absolute;left:386px;top:9px;width:242px;height:19px;',
		},
					]
				},
				{
					title:'Распределение возвратных отходов',
					items:
					[
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
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:124px;',
			height: 124,width: 622,
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
			]
		},
					]
				},
				{
					title:'Счета учета расчетов',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Счет учета расчетов по таре:',
			style: 'position:absolute;left:6px;top:6px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоТаре',
			style: 'position:absolute;left:155px;top:6px;width:80px;height:19px;',
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
			style: 'position:absolute;left:336px;top:77px;width:88px;height:27px;text-align:left;',
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
			style: 'position:absolute;left:8px;top:346px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:346px;width:548px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:129px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:336px;top:129px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:424px;top:129px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:96px;top:129px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПоступления',
			style: 'position:absolute;left:336px;top:57px;width:84px;height:19px;',
		},
	]
});