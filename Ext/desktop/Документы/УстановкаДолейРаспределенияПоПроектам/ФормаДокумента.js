Ext.define('Документы.УстановкаДолейРаспределенияПоПроектам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 402,width: 669,
	iconCls: 'bogus',
	title: 'Установка долей распределения по проектам',
	
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
			style: 'position:absolute;left:96px;top:350px;width:564px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:326px;width:564px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРаспределенияПоПроектам',
			style: 'position:absolute;left:440px;top:57px;width:220px;height:19px;',
		},
	]
});