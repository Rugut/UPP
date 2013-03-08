Ext.define('Справочники.ТранспортныеУпаковки.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 133,width: 400,
	iconCls: 'bogus',
	title: 'Транспортные упаковки',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:101px;top:57px;width:291px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:101px;top:81px;width:291px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Коэффициент',
			style: 'position:absolute;left:220px;top:33px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерУпаковки',
			style: 'position:absolute;left:101px;top:33px;width:35px;height:19px;',
		},
	]
});