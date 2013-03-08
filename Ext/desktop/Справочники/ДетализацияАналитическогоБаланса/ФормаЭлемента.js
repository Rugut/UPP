Ext.define('Справочники.ДетализацияАналитическогоБаланса.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 338,width: 406,
	iconCls: 'bogus',
	title: 'Детализация аналитического баланса',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:179px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:317px;top:33px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеДляОтчета',
			style: 'position:absolute;left:94px;top:57px;width:304px;height:40px;',
		},
	]
});