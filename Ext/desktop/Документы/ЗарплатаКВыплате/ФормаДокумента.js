Ext.define('Документы.ЗарплатаКВыплате.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 524,width: 537,
	iconCls: 'bogus',
	title: 'Зарплата к выплате',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:118px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:218px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:118px;top:59px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:472px;width:433px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:8px;top:159px;width:116px;height:35px;',
		},
	]
});