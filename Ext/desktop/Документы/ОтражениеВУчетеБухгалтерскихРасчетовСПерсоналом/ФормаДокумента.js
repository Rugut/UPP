Ext.define('Документы.ОтражениеВУчетеБухгалтерскихРасчетовСПерсоналом.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 157,width: 341,
	iconCls: 'bogus',
	title: 'Отражение в учете бухгалтерских расчетов с персоналом',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:113px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:213px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:113px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:113px;top:105px;width:220px;height:19px;',
		},
	]
});