Ext.define('Обработки.МенеджерКонтактов.ФормаВыбораСтроковогоЗначенияИзТекста',
	{
	extend: 'Ext.window.Window',
	height: 323,width: 640,
	iconCls: 'bogus',
	title: 'Форма выбора строковых значений из текста',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:30px;width:428px;height:24px;',
			items:
			[
				{
					text:'Обновить',
				},
				{
					text:'Выбрать',
				},
				{
					text:'Разделитель',
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