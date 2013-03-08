Ext.define('Документы.АттестацияРаботника.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 328,width: 424,
	iconCls: 'bogus',
	title: 'Аттестация сотрудника',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтветственныйЗаАттестацию',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:276px;width:322px;height:19px;',
		},
	]
});