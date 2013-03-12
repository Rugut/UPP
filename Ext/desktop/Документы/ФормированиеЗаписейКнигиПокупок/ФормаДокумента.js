Ext.define('Документы.ФормированиеЗаписейКнигиПокупок.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:709px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:709px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Заполнить документ',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Дт/кт',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:396px;width:709px;height:25px;',
			items:
			[
				'-',
				{
					text:'OK',
				},
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:369px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:369px;width:611px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Предъявлен к вычету НДС 0%',
			style: 'position:absolute;left:8px;top:81px;width:176px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;',
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
			style: 'position:absolute;left:172px;top:33px;width:16px;height:19px;',
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
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:329px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:419px;top:57px;width:282px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:99px;width:693px;height:267px;',
			height: 267,width: 693,
			items:
			[
				{
					title:'Вычет НДС по приобретенным ценностям',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:211px;',
			height: 211,width: 679,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Документ отгрузки',
					width:'120',
				},
				{
					text:'Состояние',
					width:'120',
				},
				{
					text:'Вид ценности',
					width:'120',
				},
				{
					text:'Поставщик',
					width:'120',
				},
				{
					text:'Счет-фактура',
					width:'120',
				},
				{
					text:'Сумма без НДС',
					width:'120',
				},
				{
					text:'% НДС',
					width:'90',
				},
				{
					text:'НДС',
					width:'120',
				},
				{
					text:'Документ оплаты',
					width:'120',
				},
				{
					text:'Дата оплаты',
					width:'80',
				},
				{
					text:'Счет учета НДС',
					width:'80',
				},
				{
					text:'Запись доп. листа',
					width:'60',
				},
				{
					text:'Корректируемый период',
					width:'80',
				},
				{
					text:'Исправленный счет-фактура',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:679px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить',
				},
			]
		},
					]
				},
				{
					title:'Вычет НДС с полученных авансов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:211px;',
			height: 211,width: 679,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Покупатель',
					width:'120',
				},
				{
					text:'Договор контрагента',
					width:'120',
				},
				{
					text:'Документ отгрузки',
					width:'120',
				},
				{
					text:'Состояние',
					width:'120',
				},
				{
					text:'Счет-фактура',
					width:'120',
				},
				{
					text:'Дата зачета аванса',
					width:'80',
				},
				{
					text:'Сумма без НДС',
					width:'120',
				},
				{
					text:'% НДС',
					width:'90',
				},
				{
					text:'НДС',
					width:'120',
				},
				{
					text:'Валюта документа',
					width:'60',
				},
				{
					text:'Сумма по документу-основанию',
					width:'120',
				},
				{
					text:'Запись доп. листа',
					width:'80',
				},
				{
					text:'Корректируемый период',
					width:'80',
				},
				{
					text:'Исправленный счет-фактура',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:679px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить по авансам полученным',
				},
			]
		},
					]
				},
				{
					title:'Вычет НДС с выданных авансов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:211px;',
			height: 211,width: 679,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Поставщик',
					width:'120',
				},
				{
					text:'Договор контрагента',
					width:'120',
				},
				{
					text:'Счет-фактура',
					width:'120',
				},
				{
					text:'Сумма без НДС',
					width:'120',
				},
				{
					text:'% НДС',
					width:'96',
				},
				{
					text:'НДС',
					width:'120',
				},
				{
					text:'Запись доп. листа',
					width:'80',
				},
				{
					text:'Корректируемый период',
					width:'80',
				},
				{
					text:'Исправленный счет-фактура',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:679px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить',
				},
			]
		},
					]
				},
				{
					title:'Вычет НДС по налоговому агенту',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:211px;',
			height: 211,width: 679,
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
					text:'Поставщик',
					width:'120',
				},
				{
					text:'Договор контрагента',
					width:'120',
				},
				{
					text:'Документ поступления',
					width:'120',
				},
				{
					text:'Сумма без НДС',
					width:'120',
				},
				{
					text:'% НДС',
					width:'80',
				},
				{
					text:'НДС',
					width:'120',
				},
				{
					text:'Документ оплаты',
					width:'120',
				},
				{
					text:'Дата оплаты',
					width:'80',
				},
				{
					text:'Документ отгрузки',
					width:'120',
				},
				{
					text:'Состояние',
					width:'120',
				},
				{
					text:'Запись доп. листа',
					width:'80',
				},
				{
					text:'Корректируемый период',
					width:'100',
				},
				{
					text:'Счет учета НДС',
					width:'96',
				},
				{
					text:'Исправленный счет-фактура',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:679px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить',
				},
			]
		},
					]
				},
				{
					title:'Вычет НДС по уменьшению стоимости реализации',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:211px;',
			height: 211,width: 679,
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
					text:'Покупатель',
					width:'100',
				},
				{
					text:'Счет-фактура',
					width:'100',
				},
				{
					text:'% НДС',
					width:'100',
				},
				{
					text:'Сумма без НДС',
					width:'100',
				},
				{
					text:'НДС',
					width:'100',
				},
				{
					text:'Счет учета НДС',
					width:'100',
				},
				{
					text:'Исправленный счет-фактура',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:679px;height:24px;',
			items:
			[
				{
					text:'Заполнить',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Имеется решение о возмещении НДС',
			style: 'position:absolute;left:190px;top:81px;width:215px;height:15px;',
		},
	]
});