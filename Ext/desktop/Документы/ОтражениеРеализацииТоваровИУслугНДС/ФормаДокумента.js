Ext.define('Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:672px;height:473px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отражение начисления НДС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:172px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:81px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:90px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:8px;top:105px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:90px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетныйДокумент',
			text: 'Документ расчетов:',
			style: 'position:absolute;left:8px;top:129px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасчетныйДокумент',
			style: 'position:absolute;left:118px;top:129px;width:192px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:421px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:421px;width:574px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:672px;height:25px;',
			items:
			[
				{
					text:'Цены и валюта...',
				},
				'-',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:448px;width:672px;height:25px;',
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
			name: 'НадписьСчетФактура',
			text: 'Счет-фактура:',
			style: 'position:absolute;left:8px;top:399px;width:80px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаСчетФактура',
			text: 'Ввести счет-фактуру',
			style: 'position:absolute;left:90px;top:399px;width:376px;height:17px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать как запись книги продаж',
			style: 'position:absolute;left:316px;top:33px;width:287px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:153px;width:656px;height:220px;',
			height: 220,width: 656,
			items:
			[
				{
					title:'Товары и услуги',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:642px;height:24px;',
			items:
			[
				{
					text:'Заполнить по расчетному документу',
				},
				{
					text:'Добавить из расчетного документа',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:642px;height:161px;',
			height: 161,width: 642,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Вид ценности',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'120',
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
					text:'Единица',
					width:'64',
				},
				{
					text:'К.',
					width:'53',
				},
				{
					text:'Количество',
					width:'120',
				},
				{
					text:'Цена',
					width:'120',
				},
				{
					text:'Сумма',
					width:'120',
				},
				{
					text:'% НДС',
					width:'71',
				},
				{
					text:'Сумма НДС',
					width:'120',
				},
				{
					text:'Всего',
					width:'120',
				},
				{
					text:'Счет учета (БУ)',
					width:'80',
				},
				{
					text:'Счет доходов (БУ)',
					width:'80',
				},
				{
					text:'Счет учета НДС по реализации',
					width:'96',
				},
				{
					text:'Субконто (БУ)',
					width:'120',
				},
				{
					text:'Сторнирующая запись доп. листа',
					width:'80',
				},
				{
					text:'Страна происхождения',
					width:'103',
				},
				{
					text:'Номер ГТД',
					width:'82',
				},
				{
					text:'Событие',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Документы оплаты',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:642px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:642px;height:164px;',
			height: 164,width: 642,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Дата оплаты',
					width:'80',
				},
				{
					text:'Документ оплаты',
					width:'120',
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
			name: 'НадписьГрузоотправитель',
			text: 'Грузоотправитель:',
			style: 'position:absolute;left:6px;top:6px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Грузоотправитель',
			style: 'position:absolute;left:108px;top:6px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрузополучатель',
			text: 'Грузополучатель:',
			style: 'position:absolute;left:6px;top:31px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Грузополучатель',
			style: 'position:absolute;left:108px;top:31px;width:209px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьТоварыИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:8px;top:377px;width:458px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:470px;top:377px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:542px;top:377px;width:122px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:470px;top:399px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:542px;top:399px;width:122px;height:17px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Запись доп. листа за период:',
			style: 'position:absolute;left:317px;top:57px;width:169px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КорректируемыйПериод',
			style: 'position:absolute;left:490px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать сторнирующие записи доп. листов вручную',
			style: 'position:absolute;left:317px;top:81px;width:347px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать проводки',
			style: 'position:absolute;left:317px;top:105px;width:141px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать документ расчетов как счет-фактуру',
			style: 'position:absolute;left:317px;top:129px;width:347px;height:19px;',
		},
	]
});