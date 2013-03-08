Ext.define('Документы.ПереносПроводокМеждународный.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 470,width: 776,
	iconCls: 'bogus',
	title: 'Перенос проводок (международный)',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаОрганизация',
			style: 'position:absolute;left:102px;top:33px;width:220px;height:19px;',
		},
	]
});