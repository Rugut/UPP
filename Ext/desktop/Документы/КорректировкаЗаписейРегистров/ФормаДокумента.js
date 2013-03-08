Ext.define('Документы.КорректировкаЗаписейРегистров.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 363,width: 650,
	iconCls: 'bogus',
	title: 'Корректировка записей регистров',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:57px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:157px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:311px;width:548px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:287px;width:548px;height:19px;',
		},
	]
});