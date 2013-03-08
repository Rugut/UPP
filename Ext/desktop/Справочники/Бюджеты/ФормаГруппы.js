Ext.define('Справочники.Бюджеты.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 113,width: 406,
	iconCls: 'bogus',
	title: 'Группа Бюджеты',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:61px;width:304px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:33px;width:304px;height:19px;',
		},
	]
});