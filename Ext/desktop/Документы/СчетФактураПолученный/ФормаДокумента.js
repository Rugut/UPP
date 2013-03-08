Ext.define('Документы.СчетФактураПолученный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 489,width: 792,
	iconCls: 'bogus',
	title: 'Счет-фактура полученный',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:116px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:216px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:437px;width:686px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:98px;top:413px;width:686px;height:19px;',
		},
	]
});