Ext.define('Отчеты.ОтчетПоНаличиюСчетовФактур.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:367px;height:375px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет по наличию счетов-фактур',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:367px;height:25px;',
			items:
			[
				{
					text:'Заголовок',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				'-',
				'-',
				{
					text:'Сформировать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоПериода',
			style: 'position:absolute;left:139px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонецПериода',
			style: 'position:absolute;left:251px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:124px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:139px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаличиеСчетаФактуры',
			text: 'Наличие счета-фактуры:',
			style: 'position:absolute;left:8px;top:81px;width:124px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:147px;width:351px;height:54px;',
			height: 54,width: 351,
			columns:
			[
				{
					text:'Документ',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:123px;width:215px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетФактура',
			style: 'position:absolute;left:139px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсеКромеСпискаДокументов',
			style: 'position:absolute;left:271px;top:126px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтбор',
			text: 'Отбор:',
			style: 'position:absolute;left:230px;top:126px;width:37px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:33px;width:50px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'по:',
			style: 'position:absolute;left:228px;top:33px;width:15px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:340px;top:33px;width:19px;height:19px;',
		},
	]
});