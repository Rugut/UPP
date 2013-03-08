Ext.define('Справочники.НомераГТД.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 113,width: 403,
	iconCls: 'bogus',
	title: 'Номер ГТД',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:90px;top:33px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:61px;width:305px;height:19px;',
		},
	]
});