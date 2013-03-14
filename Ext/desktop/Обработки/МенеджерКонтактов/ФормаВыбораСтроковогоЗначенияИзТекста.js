Ext.define('Обработки.МенеджерКонтактов.ФормаВыбораСтроковогоЗначенияИзТекста',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:323px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Форма выбора строковых значений из текста',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:30px;width:428px;height:24px;',
			items:
			[
				{
					text:'Выбрать выделенный текст',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:442px;top:30px;width:190px;height:24px;',
			items:
			[
				{
					text:'Выбрать',
				},
			]
		},
	]
});