Ext.define('Документы.НДФЛПодтверждениеПраваНаИмущественныйВычет.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 392,width: 621,
	iconCls: 'bogus',
	title: 'Подтверждение права на имущественный вычет',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:113px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:113px;top:340px;width:500px;height:19px;',
		},
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
			name: 'Организация',
			style: 'position:absolute;left:113px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:113px;top:107px;width:80px;height:19px;',
		},
	]
});