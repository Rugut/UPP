Ext.define('Документы.НачислениеДивидендовОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 469,width: 651,
	iconCls: 'bogus',
	title: 'Начисление дивидендов организации',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:423px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:523px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:33px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:417px;width:547px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:423px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДивидендыОбщаяСумма',
			style: 'position:absolute;left:111px;top:107px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДивидендыПолученные',
			style: 'position:absolute;left:464px;top:107px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:57px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДивидендыНаОднуАкцию',
			style: 'position:absolute;left:111px;top:131px;width:100px;height:19px;',
		},
	]
});