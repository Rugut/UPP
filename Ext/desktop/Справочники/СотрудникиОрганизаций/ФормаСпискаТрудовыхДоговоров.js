Ext.define('Справочники.СотрудникиОрганизаций.ФормаСпискаТрудовыхДоговоров',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 707,
	iconCls: 'bogus',
	title: 'Трудовые договоры',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:97px;top:33px;width:220px;height:19px;',
		},
	]
});