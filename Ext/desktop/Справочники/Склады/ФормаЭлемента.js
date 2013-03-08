Ext.define('Справочники.Склады.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 320,width: 529,
	iconCls: 'bogus',
	title: 'Склады (места хранения)',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:481px;top:58px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:103px;top:58px;width:338px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:103px;top:267px;width:418px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:103px;top:33px;width:418px;height:19px;',
		},
	]
});