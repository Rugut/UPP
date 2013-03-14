﻿Ext.define('Документы.ОтражениеПоступленияТоваровИУслугНДС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:661px;height:473px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отражение НДС к вычету',
	
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
			style: 'position:absolute;left:8px;top:81px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:105px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:90px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:8px;top:129px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:90px;top:129px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетныйДокумент',
			text: 'Документ расчетов:',
			style: 'position:absolute;left:319px;top:105px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасчетныйДокумент',
			style: 'position:absolute;left:429px;top:105px;width:224px;height:19px;',
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
			style: 'position:absolute;left:90px;top:421px;width:563px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:661px;height:25px;',
			items:
			[
				{
					text:'Цены и валюта...',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'На основании',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:448px;width:661px;height:25px;',
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
			style: 'position:absolute;left:90px;top:399px;width:369px;height:17px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать как запись книги покупок',
			style: 'position:absolute;left:319px;top:33px;width:288px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВходящегоДокумента',
			style: 'position:absolute;left:190px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВходящийНомер',
			text: 'Вх. номер:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерВходящегоДокумента',
			style: 'position:absolute;left:90px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата1',
			text: 'от:',
			style: 'position:absolute;left:172px;top:57px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать проводки',
			style: 'position:absolute;left:319px;top:81px;width:288px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:153px;width:645px;height:219px;',
			height: 219,width: 645,
			items:
			[
				{
					title:'Товары и услуги',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:631px;height:24px;',
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
			style: 'position:absolute;left:6px;top:30px;width:631px;height:163px;',
			height: 163,width: 631,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Вид ценности',
					width:'100',
				},
				{
					text:'Номенклатура',
					width:'120',
				},
				{
					text:'Единица',
					width:'100',
				},
				{
					text:'Количество',
					width:'100',
				},
				{
					text:'Цена',
					width:'100',
				},
				{
					text:'Сумма',
					width:'120',
				},
				{
					text:'% НДС',
					width:'73',
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
					text:'Счет затрат',
					width:'80',
				},
				{
					text:'Субконто 1',
					width:'120',
				},
				{
					text:'Субконто 2',
					width:'120',
				},
				{
					text:'Субконто 3',
					width:'120',
				},
				{
					text:'Счет учета НДС',
					width:'80',
				},
				{
					text:'Страна происхождения',
					width:'100',
				},
				{
					text:'Номер ГТД',
					width:'100',
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
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:631px;height:163px;',
			height: 163,width: 631,
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:631px;height:24px;',
			items:
			[
				'-',
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьТоварыИтоги',
			text: 'Оптовые цены, Скидка 20%',
			style: 'position:absolute;left:8px;top:377px;width:451px;height:17px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего, USD:',
			style: 'position:absolute;left:464px;top:377px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:537px;top:377px;width:116px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоНДС',
			text: 'НДС ( в т. ч.):',
			style: 'position:absolute;left:464px;top:399px;width:72px;height:17px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:537px;top:399px;width:116px;height:17px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Запись доп. листа за период:',
			style: 'position:absolute;left:319px;top:57px;width:169px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КорректируемыйПериод',
			style: 'position:absolute;left:491px;top:57px;width:96px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать документ расчетов как счет-фактуру',
			style: 'position:absolute;left:319px;top:129px;width:284px;height:19px;',
		},
	]
});