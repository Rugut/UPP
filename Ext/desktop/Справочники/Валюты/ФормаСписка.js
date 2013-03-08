Ext.define('Справочники.Валюты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 285,width: 608,
	iconCls: 'bogus',
	title: 'Валюты',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКурса',
			style: 'position:absolute;left:74px;top:33px;width:80px;height:19px;',
		},
	]
});