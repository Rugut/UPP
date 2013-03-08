Ext.define('Справочники.ТиповыеАнкеты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 470,width: 445,
	iconCls: 'bogus',
	title: 'Типовая анкета',
	
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
			style: 'position:absolute;left:95px;top:33px;width:217px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеАнкеты',
			style: 'position:absolute;left:95px;top:57px;width:343px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Вступление',
			style: 'position:absolute;left:95px;top:82px;width:343px;height:80px;',
		},
	]
});