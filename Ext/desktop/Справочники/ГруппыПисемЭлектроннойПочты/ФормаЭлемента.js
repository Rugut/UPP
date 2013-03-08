Ext.define('Справочники.ГруппыПисемЭлектроннойПочты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 129,width: 420,
	iconCls: 'bogus',
	title: 'Группы писем электронной почты',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:358px;top:57px;width:54px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:93px;top:33px;width:319px;height:19px;',
		},
	]
});