Ext.define('Справочники.РабочиеЦентры.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 318,width: 439,
	iconCls: 'bogus',
	title: 'Рабочие центры',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:367px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:33px;width:225px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:98px;top:57px;width:333px;height:19px;',
		},
	]
});