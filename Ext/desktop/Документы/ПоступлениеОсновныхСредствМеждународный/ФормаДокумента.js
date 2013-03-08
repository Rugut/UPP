Ext.define('Документы.ПоступлениеОсновныхСредствМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 385,width: 650,
	iconCls: 'bogus',
	title: '',
	
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
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:87px;top:333px;width:555px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:422px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачало',
			style: 'position:absolute;left:422px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодКонец',
			style: 'position:absolute;left:530px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:622px;top:33px;width:19px;height:19px;',
		},
	]
});