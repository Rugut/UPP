Ext.define('Справочники.ПрожиточныеМинимумы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 294,width: 462,
	iconCls: 'bogus',
	title: 'Прожиточный минимум субъекта РФ, в целом по РФ',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:374px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:240px;height:19px;',
		},
	]
});