Ext.define('Справочники.Должности.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 424,width: 446,
	iconCls: 'bogus',
	title: 'Должность',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:358px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:102px;top:33px;width:212px;height:19px;',
		},
	]
});