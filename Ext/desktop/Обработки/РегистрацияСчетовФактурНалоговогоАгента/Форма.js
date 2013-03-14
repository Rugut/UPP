Ext.define('Обработки.РегистрацияСчетовФактурНалоговогоАгента.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:741px;height:425px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистрация счетов-фактур налогового агента',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:349px;top:33px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:440px;top:33px;width:293px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНачалоПериода',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:53px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоПериода',
			style: 'position:absolute;left:64px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонецПериода',
			text: 'по:',
			style: 'position:absolute;left:148px;top:33px;width:15px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонецПериода',
			style: 'position:absolute;left:165px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:57px;width:725px;height:24px;',
			items:
			[
				{
					text:'Заполнить по данным учета',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:81px;width:725px;height:263px;',
			height: 263,width: 725,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Договор контрагента',
					width:'120',
				},
				{
					text:'Документ основание',
					width:'120',
				},
				{
					text:'Сумма',
					width:'120',
				},
				{
					text:'% НДС',
					width:'96',
				},
				{
					text:'Сумма НДС',
					width:'120',
				},
				{
					text:'Дата',
					width:'80',
				},
				{
					text:'Счет-фактура',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:741px;height:25px;',
			items:
			[
				'-',
				{
					text:'Список счетов-фактур (выд.)',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:400px;width:741px;height:25px;',
			items:
			[
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСумма',
			text: 'Сумма, руб:',
			style: 'position:absolute;left:529px;top:349px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Сумма',
			text: '1180,00',
			style: 'position:absolute;left:613px;top:349px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНДС',
			text: 'Сумма НДС:',
			style: 'position:absolute;left:529px;top:373px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НДС',
			text: '180,00',
			style: 'position:absolute;left:613px;top:373px;width:120px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:248px;top:33px;width:20px;height:19px;',
		},
	]
});