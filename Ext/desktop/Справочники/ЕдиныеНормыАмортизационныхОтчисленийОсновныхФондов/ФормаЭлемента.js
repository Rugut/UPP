Ext.define('Справочники.ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:522px;height:238px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Единые нормы амортизационных отчислений на полное восстановление основных фондов',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:8px;top:33px;width:31px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:121px;top:33px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:58px;width:91px;height:84px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:121px;top:58px;width:393px;height:84px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Норма амортизационных отчислений:',
			style: 'position:absolute;left:8px;top:154px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НормаАмортизационныхОтчислений',
			style: 'position:absolute;left:302px;top:154px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Процент от стоимости машины на 1000 км пробега:',
			style: 'position:absolute;left:8px;top:179px;width:288px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОтСтоимостиМашины',
			style: 'position:absolute;left:302px;top:179px;width:90px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:522px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:213px;width:522px;height:25px;',
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