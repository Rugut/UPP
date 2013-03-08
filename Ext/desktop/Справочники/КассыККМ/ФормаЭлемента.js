Ext.define('Справочники.КассыККМ.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 216,width: 452,
	iconCls: 'bogus',
	title: 'Кассы ККМ',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:384px;top:57px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:89px;top:57px;width:263px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:89px;top:33px;width:355px;height:19px;',
		},
	]
});