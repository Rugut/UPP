Ext.define('Справочники.ГруппыПользователей.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 417,width: 500,
	iconCls: 'bogus',
	title: 'Группа пользователей',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:412px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:92px;top:33px;width:284px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:92px;top:57px;width:400px;height:19px;',
		},
	]
});