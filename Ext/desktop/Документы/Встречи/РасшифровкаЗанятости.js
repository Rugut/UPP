Ext.define('Документы.Встречи.РасшифровкаЗанятости',
	{
	extend: 'Ext.window.Window',
	height: 130,width: 641,
	iconCls: 'bogus',
	title: '<ФИО|Помещение>',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:641px;height:25px;',
			items:
			[
				{
					text:'ОткрытьДокумент',
				},
			]
		},
	]
});