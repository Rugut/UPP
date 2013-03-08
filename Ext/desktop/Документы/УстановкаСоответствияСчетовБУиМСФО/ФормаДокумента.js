Ext.define('Документы.УстановкаСоответствияСчетовБУиМСФО.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 422,width: 740,
	iconCls: 'bogus',
	title: 'Установка соответствия счетов БУ и МСФО',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:51px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:151px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:345px;width:636px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:370px;width:636px;height:19px;',
		},
	]
});