Ext.define('Справочники.Вакансии.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 769,
	iconCls: 'bogus',
	title: 'Вакансии',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:269px;top:33px;width:492px;height:19px;',
		},
	]
});