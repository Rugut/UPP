Ext.define('Справочники.Смены.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 353,width: 446,
	iconCls: 'bogus',
	title: 'Смена',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:358px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:220px;height:19px;',
		},
	]
});