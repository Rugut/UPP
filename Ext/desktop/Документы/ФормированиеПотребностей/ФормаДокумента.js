Ext.define('Документы.ФормированиеПотребностей.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 650,
	iconCls: 'bogus',
	title: 'Формирование потребностей',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:88px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:188px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:95px;top:398px;width:547px;height:19px;',
		},
	]
});