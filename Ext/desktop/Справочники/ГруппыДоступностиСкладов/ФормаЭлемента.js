Ext.define('Справочники.ГруппыДоступностиСкладов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 273,width: 467,
	iconCls: 'bogus',
	title: 'Группы доступности складов',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:411px;top:33px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:283px;height:19px;',
		},
	]
});