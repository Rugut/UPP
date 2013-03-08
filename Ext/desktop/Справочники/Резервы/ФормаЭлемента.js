Ext.define('Справочники.Резервы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 105,width: 438,
	iconCls: 'bogus',
	title: 'Оценочные обязательства и резервы',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:350px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:89px;top:33px;width:220px;height:19px;',
		},
	]
});