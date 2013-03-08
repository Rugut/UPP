Ext.define('Документы.ВыбытиеОсновныхСредствМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 401,width: 706,
	iconCls: 'bogus',
	title: '',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:349px;width:608px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:416px;top:57px;width:282px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачало',
			style: 'position:absolute;left:416px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодКонец',
			style: 'position:absolute;left:556px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:678px;top:33px;width:20px;height:19px;',
		},
	]
});