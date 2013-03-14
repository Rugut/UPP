Ext.define('Документы.ДоговорНаВыполнениеРаботСФизЛицом.ФормаОтраженияВУчете',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:514px;height:173px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отражение в учете договора',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:148px;width:514px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСпособОтраженияВБухучете',
			text: 'Способ отражения в бухучете:',
			style: 'position:absolute;left:8px;top:8px;width:157px;height:15px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособОтраженияВБухучете',
			style: 'position:absolute;left:8px;top:27px;width:498px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтнесениеРасходовКДеятельностиЕНВД',
			text: 'Отнесение расходов к деятельности ЕНВД:',
			style: 'position:absolute;left:8px;top:106px;width:224px;height:15px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтнесениеРасходовКДеятельностиЕНВД',
			style: 'position:absolute;left:8px;top:121px;width:498px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасшифровкаОтражениеВБухучете',
			text: '',
			style: 'position:absolute;left:8px;top:46px;width:498px;height:56px;text-align:left;',
		},
	]
});