Ext.define('Документы.КорректировкаПрочихЗатрат.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:505px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировка прочих затрат',
	
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
			style: 'position:absolute;left:176px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:453px;width:88px;height:19px;',
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
			style: 'position:absolute;left:96px;top:453px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'Структура подчиненности документа',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:424px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:501px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:110px;width:636px;height:313px;',
			height: 313,width: 636,
			items:
			[
				{
					title:'Затраты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:255px;',
			height: 255,width: 622,
			columns:
			[
				{
					text:'№',
					width:'26',
				},
				{
					text:'Статья затрат',
					width:'198',
				},
				{
					text:'Хар-р затрат',
					width:'104',
				},
				{
					text:'Сумма',
					width:'77',
				},
				{
					text:'Сумма (БУ)',
					width:'81',
				},
				{
					text:'Сумма (НУ)',
					width:'73',
				},
				{
					text:'Заказ',
					width:'100',
				},
				{
					text:'Счет затрат (БУ)',
					width:'90',
				},
				{
					text:'Счет затрат (НУ)',
					width:'90',
				},
				{
					text:'Вид аналитики',
					width:'70',
				},
				{
					text:'Вид аналитики (доп)',
					width:'70',
				},
				{
					text:'Вид субконто 1',
					width:'36',
				},
				{
					text:'Вид субконто 2',
					width:'42',
				},
				{
					text:'Вид субконто 3',
					width:'40',
				},
				{
					text:'Вид субконто 1 (НУ)',
					width:'61',
				},
				{
					text:'Вид субконто 2 (НУ)',
					width:'79',
				},
				{
					text:'Вид субконто 3 (НУ)',
					width:'70',
				},
				{
					text:'Аналитика',
					width:'108',
				},
				{
					text:'Номенклатурная группа',
					width:'107',
				},
				{
					text:'Номенклатурная группа (доп',
					width:'108',
				},
				{
					text:'Способ распределения затрат на выпуск',
					width:'109',
				},
				{
					text:'Субконто 1',
					width:'130',
				},
				{
					text:'Субконто 2',
					width:'132',
				},
				{
					text:'Субконто 3',
					width:'127',
				},
				{
					text:'Субконто 1 (НУ)',
					width:'130',
				},
				{
					text:'Субконто 2 (НУ)',
					width:'132',
				},
				{
					text:'Субконто 3 (НУ)',
					width:'128',
				},
				{
					text:'Продукция',
					width:'105',
				},
				{
					text:'Характеристика продукции',
					width:'107',
				},
				{
					text:'Серия продукции',
					width:'103',
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
				{
					text:'Подбор',
				},
				'-',
				'-',
			]
		},
					]
				},
				{
					title:'Получатели',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:255px;',
			height: 255,width: 622,
			columns:
			[
				{
					text:'№',
					width:'26',
				},
				{
					text:'Статья затрат',
					width:'190',
				},
				{
					text:'Сумма',
					width:'87',
				},
				{
					text:'Сумма (БУ)',
					width:'82',
				},
				{
					text:'Сумма (НУ)',
					width:'82',
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
					text:'Хар-р затрат',
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
					text:'Вид аналитики',
					width:'70',
				},
				{
					text:'Вид аналитики (доп)',
					width:'70',
				},
				{
					text:'Вид субконто 1',
					width:'35',
				},
				{
					text:'Вид субконто 2',
					width:'43',
				},
				{
					text:'Вид субконто 3',
					width:'40',
				},
				{
					text:'Вид субконто 1 (НУ)',
					width:'63',
				},
				{
					text:'Вид субконто 2 (НУ)',
					width:'77',
				},
				{
					text:'Вид субконто 3 (НУ)',
					width:'70',
				},
				{
					text:'Аналитика',
					width:'137',
				},
				{
					text:'Номенклатурная группа',
					width:'136',
				},
				{
					text:'Номенклатурная группа (доп)',
					width:'100',
				},
				{
					text:'Способ распределения затрат на выпуск',
					width:'127',
				},
				{
					text:'Субконто 1',
					width:'164',
				},
				{
					text:'Субконто 2',
					width:'168',
				},
				{
					text:'Субконто 3',
					width:'161',
				},
				{
					text:'Субконто 1 (НУ)',
					width:'164',
				},
				{
					text:'Субконто 2 (НУ)',
					width:'168',
				},
				{
					text:'Субконто 3 (НУ)',
					width:'160',
				},
				{
					text:'Продукция получатель',
					width:'133',
				},
				{
					text:'Характеристика продукции',
					width:'136',
				},
				{
					text:'Серия продукции',
					width:'131',
				},
				{
					text:'Объект строительства получатель',
					width:'100',
				},
				{
					text:'Способ строительства получатель',
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
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить по данным о затратах',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
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
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:429px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:429px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:480px;width:652px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:336px;top:53px;width:88px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:573px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:336px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
	]
});