Ext.define('Документы.ОперацияБух.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 470,width: 780,
	iconCls: 'bogus',
	title: 'Операции (бухгалтерский и налоговый учет)',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаОрганизация',
			style: 'position:absolute;left:102px;top:33px;width:220px;height:19px;',
		},
	]
});