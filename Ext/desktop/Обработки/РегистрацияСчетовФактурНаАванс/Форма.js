Ext.define('Обработки.РегистрацияСчетовФактурНаАванс.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:736px;height:435px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистрация счетов-фактур на аванс',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:736px;height:25px;',
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
			style: 'position:absolute;left:0px;top:410px;width:736px;height:25px;',
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
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоПериода',
			style: 'position:absolute;left:70px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:152px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонецПериода',
			style: 'position:absolute;left:171px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:253px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:98px;width:720px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:293px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:373px;top:33px;width:355px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:122px;width:720px;height:280px;',
			height: 280,width: 720,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Контрагент',
					width:'100',
				},
				{
					text:'Договор',
					width:'100',
				},
				{
					text:'Сумма аванса',
					width:'100',
				},
				{
					text:'Ставка НДС',
					width:'100',
				},
				{
					text:'Сумма НДС',
					width:'100',
				},
				{
					text:'Документ основание',
					width:'100',
				},
				{
					text:'Счет на оплату',
					width:'120',
				},
				{
					text:'Дата',
					width:'100',
				},
				{
					text:'Валюта документа',
					width:'100',
				},
				{
					text:'Валютная сумма',
					width:'100',
				},
				{
					text:'Счет-фактура',
					width:'120',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокРегистрацииСчетовФактурНаАванс',
			text: 'Регистрировать счета-фактуры всегда при получении аванса',
			style: 'position:absolute;left:8px;top:58px;width:720px;height:19px;',
		},
	]
});