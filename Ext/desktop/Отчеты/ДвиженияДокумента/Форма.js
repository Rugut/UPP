Ext.define('Отчеты.ДвиженияДокумента.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:712px;height:514px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет по движениям документа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:712px;height:25px;',
			items:
			[
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Восстановить значения...',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Документ',
			style: 'position:absolute;left:102px;top:33px;width:340px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Документ отчета:',
			style: 'position:absolute;left:8px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ВыводитьДетализациюПо_',
			text: 'Выводить детализацию по:',
			style: 'position:absolute;left:456px;top:33px;width:147px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:612px;top:33px;width:92px;height:19px;',
		},
	]
});