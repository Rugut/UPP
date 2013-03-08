Ext.define('Справочники.СоставМероприятия.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 288,width: 485,
	iconCls: 'bogus',
	title: 'Состав мероприятия',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Мероприятие',
			style: 'position:absolute;left:88px;top:32px;width:389px;height:20px;',
		},
	]
});