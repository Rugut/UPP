Ext.define('Документы.УстановкаСоответствияСчетовБУиНУ.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 594,
	iconCls: 'bogus',
	title: 'Установка соответствия счетов БУ и НУ',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:245px;width:490px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:269px;width:490px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:52px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:152px;top:33px;width:120px;height:19px;',
		},
	]
});