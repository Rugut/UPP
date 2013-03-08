Ext.define('Справочники.РабочиеЦентры.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 113,width: 430,
	iconCls: 'bogus',
	title: 'Группа Рабочие центры',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:358px;top:61px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:61px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:33px;width:328px;height:19px;',
		},
	]
});