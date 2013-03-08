Ext.define('Справочники.ФизическиеЛица.ФормаВводаДанныхТруд',
	{
	extend: 'Ext.window.Window',
	height: 371,width: 400,
	iconCls: 'bogus',
	title: 'Физические лица',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СеверныйСтаж',
			style: 'position:absolute;left:8px;top:319px;width:384px;height:19px;',
		},
	]
});