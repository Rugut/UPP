Ext.define('Обработки.РасчетЛимитовОтпускаМатериалов.ФормаОбработкаРезультата',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:362px;height:89px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка результата',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:64px;width:362px;height:25px;',
			items:
			[
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Действие:',
			style: 'position:absolute;left:8px;top:6px;width:81px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:29px;width:346px;height:28px;',
			height: 28,width: 346,
			items:
			[
				{
					title:'Периодичность',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Периодичность:',
			style: 'position:absolute;left:0px;top:4px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Периодичность',
			style: 'position:absolute;left:81px;top:4px;width:265px;height:19px;',
		},
					]
				},
				{
					title:'Контролировать лимит',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Контролировать лимит',
			style: 'position:absolute;left:81px;top:4px;width:265px;height:15px;',
		},
					]
				},
			]
		},
	]
});