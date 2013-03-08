Ext.define('Справочники.ТиповыеАнализыНоменклатуры.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 309,width: 480,
	iconCls: 'bogus',
	title: 'Типовые анализы номенклатуры',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:417px;top:57px;width:55px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:88px;top:57px;width:296px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:88px;top:33px;width:384px;height:19px;',
		},
	]
});