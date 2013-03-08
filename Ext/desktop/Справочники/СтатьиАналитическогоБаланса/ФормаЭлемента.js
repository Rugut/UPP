Ext.define('Справочники.СтатьиАналитическогоБаланса.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 336,width: 454,
	iconCls: 'bogus',
	title: 'Статьи аналитического баланса',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодДляОтчета',
			style: 'position:absolute;left:365px;top:33px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеДляОтчета',
			style: 'position:absolute;left:94px;top:57px;width:352px;height:38px;',
		},
	]
});