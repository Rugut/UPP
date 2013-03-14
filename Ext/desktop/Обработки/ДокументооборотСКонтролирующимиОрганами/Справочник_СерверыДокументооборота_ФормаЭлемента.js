Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_СерверыДокументооборота_ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:554px;height:266px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Серверы документооборота',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:8px;top:33px;width:194px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:208px;top:33px;width:63px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:58px;width:194px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:208px;top:58px;width:338px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресЭлектроннойПочты',
			text: 'Для документооборота с ФНС:',
			style: 'position:absolute;left:8px;top:164px;width:194px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочты',
			style: 'position:absolute;left:208px;top:164px;width:338px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДлительностьОжиданияСервера',
			text: 'Таймаут сервера (сек.):',
			style: 'position:absolute;left:8px;top:109px;width:194px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДлительностьОжиданияСервера',
			style: 'position:absolute;left:208px;top:109px;width:63px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:554px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:241px;width:554px;height:25px;',
			items:
			[
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
			name: 'НадписьСертификат',
			text: 'Сертификат:',
			style: 'position:absolute;left:8px;top:83px;width:194px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сертификат',
			style: 'position:absolute;left:208px;top:83px;width:338px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресЭлектроннойПочты1',
			text: 'Для документооборота с ПФР:',
			style: 'position:absolute;left:8px;top:189px;width:194px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочтыПФР',
			style: 'position:absolute;left:208px;top:189px;width:338px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресЭлектроннойПочты2',
			text: 'Для документооборота с Росстатом:',
			style: 'position:absolute;left:8px;top:214px;width:194px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочтыФСГС',
			style: 'position:absolute;left:208px;top:214px;width:338px;height:19px;',
		},
	]
});