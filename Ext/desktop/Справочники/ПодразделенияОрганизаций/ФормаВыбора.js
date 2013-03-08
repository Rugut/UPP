Ext.define('Справочники.ПодразделенияОрганизаций.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 380,width: 441,
	iconCls: 'bogus',
	title: 'Подразделения организации',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:233px;top:33px;width:200px;height:19px;',
		},
	]
});