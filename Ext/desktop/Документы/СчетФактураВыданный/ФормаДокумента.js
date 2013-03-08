Ext.define('Документы.СчетФактураВыданный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 582,width: 804,
	iconCls: 'bogus',
	title: 'Счет-фактура выданный',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:115px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:215px;top:32px;width:120px;height:19px;',
		},
	]
});