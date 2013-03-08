Ext.define('Документы.ПравоНаДополнительныеДниОтпуска.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 422,width: 410,
	iconCls: 'bogus',
	title: 'Право на дополнительные дни отпуска',
	
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
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:345px;width:306px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:370px;width:306px;height:19px;',
		},
	]
});