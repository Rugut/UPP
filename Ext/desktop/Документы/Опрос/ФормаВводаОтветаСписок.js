Ext.define('Документы.Опрос.ФормаВводаОтветаСписок',
	{
	extend: 'Ext.window.Window',
	height: 626,width: 392,
	iconCls: 'bogus',
	title: 'Ответ',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:601px;width:392px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});