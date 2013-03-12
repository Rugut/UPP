Ext.define('Обработки.ПодборПараметровРасшифровкиПлатежа.ФормаПодбораПланируемыхДвижений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:281px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подбор документов планирования движения денежных средств',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:29px;width:306px;height:24px;',
			items:
			[
				{
					text:'Выбрать',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:53px;width:764px;height:220px;',
			height: 220,width: 764,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Документ планирования',
					width:'153',
				},
				{
					text:'Сумма документа',
					width:'100',
				},
				{
					text:'Договор контрагента',
					width:'126',
				},
				{
					text:'Сделка',
					width:'172',
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'100',
				},
				{
					text:'Дата движения',
					width:'102',
				},
				{
					text:'Сумма платежа',
					width:'113',
				},
				{
					text:'Валюта счета',
					width:'100',
				},
				{
					text:'Курс счета',
					width:'125',
				},
				{
					text:'Сумма счета',
					width:'108',
				},
				{
					text:'Проект',
					width:'80',
				},
				{
					text:'Статья движения денежных средств',
					width:'172',
				},
				{
					text:'План. курс счета',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВыбрано',
			text: 'Всего выбрано:',
			style: 'position:absolute;left:491px;top:30px;width:281px;height:19px;',
		},
	]
});