Ext.define('Документы.ПриемНаРаботу.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 377,width: 624,
	iconCls: 'bogus',
	title: 'Прием на работу',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:326px;width:518px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:424px;top:33px;width:192px;height:19px;',
		},
	]
});