Ext.define('Справочники.НазначенияИспользования.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:421px;height:205px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Назначения использования',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:343px;top:57px;width:25px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:373px;top:57px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:57px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:90px;top:57px;width:246px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Номенклатура:',
			style: 'position:absolute;left:8px;top:33px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:90px;top:33px;width:323px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Способ погашения стоимости:',
			style: 'position:absolute;left:8px;top:105px;width:177px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособПогашенияСтоимости',
			style: 'position:absolute;left:186px;top:105px;width:227px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Срок полезного использования:',
			style: 'position:absolute;left:8px;top:129px;width:177px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокПолезногоИспользования',
			style: 'position:absolute;left:186px;top:129px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Количество по нормативу выдачи:',
			style: 'position:absolute;left:8px;top:81px;width:177px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Количество',
			style: 'position:absolute;left:186px;top:81px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Единица:',
			style: 'position:absolute;left:286px;top:81px;width:50px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмерения',
			style: 'position:absolute;left:343px;top:81px;width:70px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Способ отражения расходов:',
			style: 'position:absolute;left:8px;top:153px;width:177px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособОтраженияРасходов',
			style: 'position:absolute;left:186px;top:153px;width:227px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:421px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:180px;width:421px;height:25px;',
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
	]
});