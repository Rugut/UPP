Ext.define('Документы.ВыбытиеНМАМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 401,width: 705,
	iconCls: 'bogus',
	title: 'Выбытие НМА (международный)',
	
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
			style: 'position:absolute;left:477px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:349px;width:607px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:477px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачало',
			style: 'position:absolute;left:90px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодКонец',
			style: 'position:absolute;left:229px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:351px;top:57px;width:20px;height:19px;',
		},
	]
});