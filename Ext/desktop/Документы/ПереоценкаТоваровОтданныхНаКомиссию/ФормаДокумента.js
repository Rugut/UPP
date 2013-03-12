Ext.define('Документы.ПереоценкаТоваровОтданныхНаКомиссию.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:648px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Переоценка товаров отданных на комиссию',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:174px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:369px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:369px;width:546px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:648px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'В файл',
				},
				'-',
				{
					text:'Цены и валюта...',
				},
				{
					text:'Отправить по эл. почте',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Выгрузить в файл',
				},
				'-',
				'-',
				{
					text:'Отправить по эл. почте',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:132px;width:632px;height:210px;',
			height: 210,width: 632,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:618px;height:160px;',
			height: 160,width: 618,
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
					width:'250',
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
					width:'64',
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
					text:'Сумма старая',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:618px;height:24px;',
			items:
			[
				'-',
				'-',
				{
					text:'Заполнить по реализации',
				},
				{
					text:'Заполнить по договору',
				},
				{
					text:'Поиск по штрихкоду',
				},
				{
					text:'Подбор',
				},
				{
					text:'Добавить из реализации',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:96px;top:75px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:415px;top:75px;width:209px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:93px;top:27px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:334px;top:81px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:420px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьТоварыИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:8px;top:347px;width:450px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего:',
			style: 'position:absolute;left:470px;top:347px;width:60px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:535px;top:347px;width:105px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:396px;width:648px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Печать',
				},
				{
					text:'Записать',
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:94px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Сделка:
',
			style: 'position:absolute;left:8px;top:101px;width:84px;height:28px;',
		},
	]
});