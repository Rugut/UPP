Ext.define('Справочники.ФизическиеЛица.ФормаЗаписиГражданство',
	{
	extend: 'Ext.window.Window',
	height: 417,width: 418,
	iconCls: 'bogus',
	title: 'Гражданство физического лица',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:203px;top:365px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГражданинСтраны',
			style: 'position:absolute;left:145px;top:8px;width:220px;height:19px;',
		},
	]
});