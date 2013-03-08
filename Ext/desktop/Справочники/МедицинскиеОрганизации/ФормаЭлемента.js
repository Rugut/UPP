Ext.define('Справочники.МедицинскиеОрганизации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 136,width: 565,
	iconCls: 'bogus',
	title: 'Медицинские организации',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОГРН',
			style: 'position:absolute;left:55px;top:84px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Адрес',
			style: 'position:absolute;left:55px;top:59px;width:326px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресКодПоКЛАДР',
			style: 'position:absolute;left:477px;top:59px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:477px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:33px;width:342px;height:19px;',
		},
	]
});