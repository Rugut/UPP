Ext.define('Справочники.ТиповыеАнкеты.ФормаРассылки',
	{
	extend: 'Ext.window.Window',
	height: 392,width: 473,
	iconCls: 'bogus',
	title: 'Рассылка анкеты',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Анкета',
			style: 'position:absolute;left:90px;top:33px;width:375px;height:19px;',
		},
	]
});