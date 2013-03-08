Ext.define('Справочники.Контрагенты.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 137,width: 546,
	iconCls: 'bogus',
	title: 'Группа Контрагенты',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:498px;top:61px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:61px;width:357px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:33px;width:444px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:85px;width:444px;height:19px;',
		},
	]
});