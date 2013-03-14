Ext.define('Документы.РаспределениеМатериаловНаВыпуск.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:408px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Распределение материалов на выпуск',
	
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
					text:'Показать/скрыть счета учета',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:383px;width:652px;height:25px;',
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
			style: 'position:absolute;left:178px;top:33px;width:16px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:424px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:497px;top:33px;width:69px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
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
			style: 'position:absolute;left:8px;top:105px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказ',
			text: 'Заказ:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Заказ',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:356px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:356px;width:548px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:137px;width:636px;height:187px;',
			height: 187,width: 636,
			items:
			[
				{
					title:'Продукция',
					items:
					[
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
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:131px;',
			height: 131,width: 622,
			columns:
			[
				{
					text:'N',
					width:'21',
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
					width:'164',
				},
				{
					text:'Характеристика продукции',
					width:'167',
				},
				{
					text:'Серия продукции',
					width:'167',
				},
				{
					text:'Вид выпуска',
					width:'100',
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
					width:'80',
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
					text:'Номенклатурная группа',
					width:'159',
				},
				{
					text:'Спецификация',
					width:'159',
				},
				{
					text:'Заказ',
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
					title:'Материалы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				{
					text:'Заполнить по спецификации',
				},
				{
					text:'Заполнить по остаткам',
				},
				{
					text:'Заполнить по инвентаризации',
				},
				'-',
				{
					text:'Добавить из требование - накладная...',
				},
				{
					text:'Добавить из документа выпуска...',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:131px;',
			height: 131,width: 622,
			columns:
			[
				{
					text:'N',
					width:'21',
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
					width:'118',
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
					width:'66',
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
					text:'Статья затрат',
					width:'80',
				},
				{
					text:'Вид выпуска',
					width:'100',
				},
				{
					text:'Заказ',
					width:'122',
				},
				{
					text:'Номенклатурная группа',
					width:'122',
				},
				{
					text:'Счет затрат (БУ)',
					width:'91',
				},
				{
					text:'Счет затрат (НУ)',
					width:'91',
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
					]
				},
				{
					title:'Распределение материалов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:131px;',
			height: 131,width: 622,
			columns:
			[
				{
					text:'N',
					width:'21',
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
					width:'119',
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
					text:'Количество',
					width:'53',
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
					text:'Статья затрат',
					width:'141',
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
					width:'125',
				},
				{
					text:'Характеристика продукции',
					width:'131',
				},
				{
					text:'Серия продукции',
					width:'131',
				},
				{
					text:'Вид выпуска',
					width:'100',
				},
				{
					text:'Номенклатурная группа',
					width:'141',
				},
				{
					text:'Спецификация',
					width:'141',
				},
				{
					text:'Заказ',
					width:'141',
				},
				{
					text:'Счет затрат (БУ)',
					width:'89',
				},
				{
					text:'Счет затрат (НУ)',
					width:'89',
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
					title:'Возвратные отходы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:131px;',
			height: 131,width: 622,
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
					text:'Вид выпуска',
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
					width:'72',
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
					text:'Заказ',
					width:'100',
				},
				{
					text:'Номенклатурная группа',
					width:'112',
				},
				{
					text:'Статья затрат',
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
					text:'Заполнить по спецификации',
				},
				{
					text:'Заполнить по остаткам',
				},
			]
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
				'-',
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:131px;',
			height: 131,width: 622,
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
					text:'Номенклатурная группа',
					width:'100',
				},
				{
					text:'Спецификация',
					width:'100',
				},
				{
					text:'Заказ',
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
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:336px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаПериода',
			style: 'position:absolute;left:96px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодПо',
			text: 'по:',
			style: 'position:absolute;left:178px;top:57px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:336px;top:103px;width:88px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:424px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал учете',
			style: 'position:absolute;left:569px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:332px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:332px;width:548px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокИнвентаризация',
			text: 'Инвентаризация:',
			style: 'position:absolute;left:336px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокИнвентаризация',
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПериода',
			style: 'position:absolute;left:196px;top:57px;width:120px;height:19px;',
		},
	]
});