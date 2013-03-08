Ext.define('Справочники.МаршрутыСогласования.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 319,width: 428,
	iconCls: 'bogus',
	title: 'Этап согласования',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:108px;top:33px;width:312px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:108px;top:57px;width:312px;height:19px;',
		},
	]
});