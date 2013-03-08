Ext.define('Документы.УстановкаПороговНакопительныхСкидок.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 292,width: 400,
	iconCls: 'bogus',
	title: 'Установка порогов накопительных скидок',
	
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
			style: 'position:absolute;left:201px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:217px;width:296px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:240px;width:296px;height:19px;',
		},
	]
});