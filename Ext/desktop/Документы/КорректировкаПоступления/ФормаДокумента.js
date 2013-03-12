Ext.define('Документы.КорректировкаПоступления.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:671px;height:478px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировка поступления',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:32px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:174px;top:32px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:426px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:426px;width:569px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:671px;height:25px;',
			items:
			[
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				'-',
				'-',
				'-',
				{
					text:'Провести',
				},
				{
					text:'',
				},
				{
					text:'Перечитать',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Перечитать',
				},
				'-',
				{
					text:'Отмена проведения',
				},
				'-',
				{
					text:'Записать и закрыть',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Скопировать',
				},
				{
					text:'Найти в списке',
				},
				{
					text:'Провести',
				},
				'-',
				'-',
				'-',
				{
					text:'Справка',
				},
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Отмена проведения',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:420px;top:32px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:498px;top:32px;width:72px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:655px;height:250px;',
			height: 250,width: 655,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомерВходящегоДокумента',
			text: 'Вх. номер:',
			style: 'position:absolute;left:12px;top:112px;width:103px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:641px;height:200px;',
			height: 200,width: 641,
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
					text:'Серия ',
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
					text:'Количество до корректировки',
					width:'100',
				},
				{
					text:'Количество до изменения',
					width:'100',
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
					text:'Цена до корректировки',
					width:'100',
				},
				{
					text:'Цена до изменения',
					width:'100',
				},
				{
					text:'Цена',
					width:'80',
				},
				{
					text:'Сумма до корректировки',
					width:'100',
				},
				{
					text:'Сумма до изменения',
					width:'100',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Ставка НДС до изменения',
					width:'100',
				},
				{
					text:'% НДС',
					width:'48',
				},
				{
					text:'Сумма НДС до корректировки',
					width:'99',
				},
				{
					text:'Сумма НДС до изменения',
					width:'99',
				},
				{
					text:'Сумма НДС',
					width:'79',
				},
				{
					text:'Всего до корректировки',
					width:'81',
				},
				{
					text:'Всего до изменения',
					width:'81',
				},
				{
					text:'Всего',
					width:'81',
				},
				{
					text:'Заказ поставщику',
					width:'100',
				},
				{
					text:'Заказ',
					width:'120',
				},
				{
					text:'Страна происхождения',
					width:'120',
				},
				{
					text:'Номер ГТД',
					width:'120',
				},
				{
					text:'Склад',
					width:'100',
				},
				{
					text:'Реализовано в прошлые месяцы',
					width:'100',
				},
				{
					text:'Реализовано в прошлые годы',
					width:'100',
				},
				{
					text:'Документ партии',
					width:'100',
				},
				{
					text:'Счет учета (БУ)',
					width:'80',
				},
				{
					text:'Расходы в НУ',
					width:'100',
				},
				{
					text:'Счет НДС',
					width:'80',
				},
				{
					text:'Счет учета (НУ)',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:641px;height:24px;',
			items:
			[
				'-',
				'-',
				'-',
				{
					text:'Подбор',
				},
				{
					text:'Серийные номера',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяПрочихДоходовИРасходов',
			text: 'Статья прочих доходов и расходов:',
			style: 'position:absolute;left:12px;top:7px;width:103px;height:28px;',
		},
					]
				},
				{
					title:'Услуги',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:641px;height:200px;',
			height: 200,width: 641,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Номенклатура',
					width:'121',
				},
				{
					text:'Содержание услуги, доп. сведения до изменения',
					width:'100',
				},
				{
					text:'Содержание услуги, доп. сведения',
					width:'220',
				},
				{
					text:'Количество до корректировки',
					width:'100',
				},
				{
					text:'Количество до изменения',
					width:'100',
				},
				{
					text:'Количество',
					width:'64',
				},
				{
					text:'Цена до корректировки',
					width:'100',
				},
				{
					text:'Цена до изменения',
					width:'100',
				},
				{
					text:'Цена',
					width:'80',
				},
				{
					text:'Сумма до корректировки',
					width:'100',
				},
				{
					text:'Сумма до изменения',
					width:'100',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'% НДС до изменения',
					width:'100',
				},
				{
					text:'% НДС',
					width:'48',
				},
				{
					text:'Сумма НДС до корректировки',
					width:'100',
				},
				{
					text:'Сумма НДС до изменения',
					width:'100',
				},
				{
					text:'Сумма НДС',
					width:'80',
				},
				{
					text:'Всего до корректировки',
					width:'80',
				},
				{
					text:'Всего до изменения',
					width:'80',
				},
				{
					text:'Всего',
					width:'80',
				},
				{
					text:'Подразделение',
					width:'120',
				},
				{
					text:'Подразделение организации',
					width:'120',
				},
				{
					text:'Заказ поставщику',
					width:'100',
				},
				{
					text:'Заказ',
					width:'120',
				},
				{
					text:'Статья затрат',
					width:'120',
				},
				{
					text:'Счет затрат (БУ)',
					width:'88',
				},
				{
					text:'Счет затрат (НУ)',
					width:'88',
				},
				{
					text:'Характер затрат',
					width:'120',
				},
				{
					text:'Вид аналитики',
					width:'221',
				},
				{
					text:'Вид аналитики (доп)',
					width:'221',
				},
				{
					text:'Вид субконто 1',
					width:'74',
				},
				{
					text:'Вид субконто 2',
					width:'74',
				},
				{
					text:'Вид субконто 3',
					width:'74',
				},
				{
					text:'Вид субконто 1 (НУ )',
					width:'92',
				},
				{
					text:'Вид субконто 2 (НУ)',
					width:'92',
				},
				{
					text:'Вид субконто 3 (НУ)',
					width:'92',
				},
				{
					text:'Аналитика',
					width:'70',
				},
				{
					text:'Номенклатурная группа',
					width:'77',
				},
				{
					text:'Номенклатурная группа (доп)',
					width:'73',
				},
				{
					text:'Способ распределения затрат',
					width:'74',
				},
				{
					text:'Субконто 1',
					width:'93',
				},
				{
					text:'Субконто 2',
					width:'93',
				},
				{
					text:'Субконто 3',
					width:'93',
				},
				{
					text:'Субконто 1 (НУ)',
					width:'93',
				},
				{
					text:'Субконто 2 (НУ)',
					width:'93',
				},
				{
					text:'Субконто 3 (НУ)',
					width:'93',
				},
				{
					text:'Продукция',
					width:'93',
				},
				{
					text:'Характеристика продукции',
					width:'93',
				},
				{
					text:'Серия продукции',
					width:'93',
				},
				{
					text:'Объект строительства',
					width:'180',
				},
				{
					text:'Способ строительства',
					width:'178',
				},
				{
					text:'Расходы в НУ',
					width:'100',
				},
				{
					text:'Счет учета НДС',
					width:'88',
				},
				{
					text:'Проект',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:641px;height:24px;',
			items:
			[
				'-',
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
			xtype: 'label',
			name: 'НадписьДатаВходящегоДокумента',
			text: 'Вх. дата:',
			style: 'position:absolute;left:336px;top:112px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:12px;top:184px;width:103px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:119px;top:184px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерВходящегоДокумента',
			style: 'position:absolute;left:119px;top:112px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВходящегоДокумента',
			style: 'position:absolute;left:450px;top:112px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрузоотправитель',
			text: 'Грузоотправитель:',
			style: 'position:absolute;left:12px;top:136px;width:103px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Грузоотправитель',
			style: 'position:absolute;left:119px;top:136px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрузополучатель',
			text: 'Грузополучатель:',
			style: 'position:absolute;left:12px;top:160px;width:103px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Грузополучатель',
			style: 'position:absolute;left:119px;top:160px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяПрочихДоходовИРасходов',
			style: 'position:absolute;left:119px;top:7px;width:528px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетов',
			text: 'Сумма <нет валюты>:',
			style: 'position:absolute;left:12px;top:63px;width:103px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:119px;top:63px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:215px;top:63px;width:432px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБанковскийСчетКонтрагента',
			text: 'Б/счет контрагента:',
			style: 'position:absolute;left:336px;top:136px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БанковскийСчетКонтрагента',
			style: 'position:absolute;left:450px;top:136px;width:197px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражатьВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:328px;top:32px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактура',
			text: 'Счет-фактура:',
			style: 'position:absolute;left:8px;top:381px;width:84px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаСчетФактура',
			text: 'Ввести счет-фактуру',
			style: 'position:absolute;left:94px;top:381px;width:366px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:467px;top:359px;width:72px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:540px;top:359px;width:116px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:467px;top:380px;width:72px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:540px;top:380px;width:116px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:453px;width:671px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'ОК',
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
			style: 'position:absolute;left:576px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументПоступления',
			text: 'Основание:',
			style: 'position:absolute;left:8px;top:80px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПоступления',
			style: 'position:absolute;left:94px;top:80px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Восстановить НДС в книге продаж',
			style: 'position:absolute;left:8px;top:359px;width:452px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаИсправляемыйДокументПоступления',
			text: 'Не указан',
			style: 'position:absolute;left:146px;top:402px;width:517px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИсправляемыйДокументПоступленияНадпись',
			text: 'Исправляемый документ:',
			style: 'position:absolute;left:8px;top:402px;width:133px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Корректировать',
			text: 'Корректировать:',
			style: 'position:absolute;left:328px;top:56px;width:90px;height:19px;',
		},
	]
});