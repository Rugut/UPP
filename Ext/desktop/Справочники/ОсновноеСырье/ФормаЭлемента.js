Ext.define('Справочники.ОсновноеСырье.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 353,width: 406,
	iconCls: 'bogus',
	title: 'Основное сырье',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:334px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:196px;height:19px;',
		},
	]
});