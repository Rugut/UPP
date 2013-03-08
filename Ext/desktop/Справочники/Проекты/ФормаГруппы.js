Ext.define('Справочники.Проекты.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 109,width: 406,
	iconCls: 'bogus',
	title: 'Группа Проекты',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:317px;top:57px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:57px;width:183px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:93px;top:33px;width:305px;height:19px;',
		},
	]
});