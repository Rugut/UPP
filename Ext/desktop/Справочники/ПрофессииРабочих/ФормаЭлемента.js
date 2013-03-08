Ext.define('Справочники.ПрофессииРабочих.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 110,width: 325,
	iconCls: 'bogus',
	title: 'Профессии рабочих',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:97px;top:58px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:97px;top:33px;width:220px;height:19px;',
		},
	]
});