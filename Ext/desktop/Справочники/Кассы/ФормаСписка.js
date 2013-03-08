Ext.define('Справочники.Кассы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 345,width: 554,
	iconCls: 'bogus',
	title: 'Кассы',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:33px;width:448px;height:19px;',
		},
	]
});