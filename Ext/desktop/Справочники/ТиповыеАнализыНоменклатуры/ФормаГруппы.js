Ext.define('Справочники.ТиповыеАнализыНоменклатуры.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 85,width: 400,
	iconCls: 'bogus',
	title: 'Группа Типовые анализы номенклатуры',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:306px;top:33px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:181px;height:19px;',
		},
	]
});