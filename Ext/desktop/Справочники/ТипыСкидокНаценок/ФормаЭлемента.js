Ext.define('Справочники.ТипыСкидокНаценок.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 320,width: 483,
	iconCls: 'bogus',
	title: 'Типы скидок и наценок',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:435px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:307px;height:19px;',
		},
	]
});