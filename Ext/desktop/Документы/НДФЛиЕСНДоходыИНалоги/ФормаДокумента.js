Ext.define('Документы.НДФЛиЕСНДоходыИНалоги.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 495,width: 813,
	iconCls: 'bogus',
	title: 'Корректировка учета по НДФЛ, страховым взносам и ЕСН',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:424px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:524px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:169px;top:443px;width:636px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:182px;top:57px;width:80px;height:19px;',
		},
	]
});