Ext.define('Справочники.ДоверенностиНалогоплательщика.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 608,width: 499,
	iconCls: 'bogus',
	title: 'Доверенность налогоплательщика',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДовер',
			style: 'position:absolute;left:107px;top:58px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачи',
			style: 'position:absolute;left:220px;top:58px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:407px;top:58px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПризнакДоверителя',
			style: 'position:absolute;left:137px;top:85px;width:195px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:107px;top:33px;width:384px;height:19px;',
		},
	]
});