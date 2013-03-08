Ext.define('Документы.ОтчетМастераСмены.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 446,width: 750,
	iconCls: 'bogus',
	title: 'Отчет мастера смены',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:148px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:522px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Смена',
			style: 'position:absolute;left:48px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:522px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:84px;top:394px;width:658px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:48px;top:33px;width:80px;height:19px;',
		},
	]
});