Ext.define('Справочники.ТочкиМаршрута.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 109,width: 429,
	iconCls: 'bogus',
	title: 'Группа Точки маршрута',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:357px;top:57px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:93px;top:33px;width:328px;height:19px;',
		},
	]
});