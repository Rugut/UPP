Ext.define('Справочники.ПодразделенияОрганизаций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 380,width: 512,
	iconCls: 'bogus',
	title: 'Подразделения организации',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:233px;top:33px;width:271px;height:19px;',
		},
	]
});