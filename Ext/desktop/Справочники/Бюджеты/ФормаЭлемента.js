Ext.define('Справочники.Бюджеты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 210,width: 322,
	iconCls: 'bogus',
	title: 'Бюджеты',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Заголовок',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипБюджета',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:105px;width:220px;height:72px;',
		},
	]
});