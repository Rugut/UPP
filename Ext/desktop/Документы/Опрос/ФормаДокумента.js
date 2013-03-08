Ext.define('Документы.Опрос.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 524,width: 426,
	iconCls: 'bogus',
	title: 'Опрос',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:312px;top:399px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:122px;top:399px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:122px;top:424px;width:296px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:122px;top:472px;width:296px;height:19px;',
		},
	]
});