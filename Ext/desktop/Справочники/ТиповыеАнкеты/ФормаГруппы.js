Ext.define('Справочники.ТиповыеАнкеты.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 110,width: 446,
	iconCls: 'bogus',
	title: 'Группа типовых анкет',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:358px;top:58px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:33px;width:344px;height:19px;',
		},
	]
});