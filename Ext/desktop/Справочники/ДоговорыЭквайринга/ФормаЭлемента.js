Ext.define('Справочники.ДоговорыЭквайринга.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 292,width: 439,
	iconCls: 'bogus',
	title: 'Договор эквайринга',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:369px;top:33px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:148px;top:33px;width:184px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Эквайрер',
			style: 'position:absolute;left:148px;top:56px;width:281px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Договор',
			style: 'position:absolute;left:148px;top:79px;width:281px;height:19px;',
		},
	]
});