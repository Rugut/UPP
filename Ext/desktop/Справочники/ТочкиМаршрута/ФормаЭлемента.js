Ext.define('Справочники.ТочкиМаршрута.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 157,width: 433,
	iconCls: 'bogus',
	title: 'Точки маршрута',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:361px;top:57px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:97px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:97px;top:33px;width:328px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:97px;top:81px;width:328px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РабочийЦентр',
			style: 'position:absolute;left:97px;top:105px;width:328px;height:19px;',
		},
	]
});