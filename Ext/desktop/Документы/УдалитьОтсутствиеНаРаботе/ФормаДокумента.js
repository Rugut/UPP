Ext.define('Документы.УдалитьОтсутствиеНаРаботе.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 298,width: 447,
	iconCls: 'bogus',
	title: 'Отсутствие на работе',
	
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
			style: 'position:absolute;left:96px;top:246px;width:343px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:222px;width:343px;height:19px;',
		},
	]
});