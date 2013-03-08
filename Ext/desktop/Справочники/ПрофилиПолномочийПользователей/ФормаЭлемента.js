Ext.define('Справочники.ПрофилиПолномочийПользователей.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 401,width: 631,
	iconCls: 'bogus',
	title: 'Профиль полномочий пользователей',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:93px;top:57px;width:186px;height:19px;',
		},
	]
});