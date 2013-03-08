Ext.define('Справочники.Вакансии.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 729,
	iconCls: 'bogus',
	title: 'Вакансии',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:268px;top:33px;width:453px;height:19px;',
		},
	]
});