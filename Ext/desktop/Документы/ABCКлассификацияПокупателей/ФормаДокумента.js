Ext.define('Документы.ABCКлассификацияПокупателей.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 434,width: 630,
	iconCls: 'bogus',
	title: 'ABC-классификация покупателей',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:86px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:186px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:382px;width:526px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:358px;width:526px;height:19px;',
		},
	]
});