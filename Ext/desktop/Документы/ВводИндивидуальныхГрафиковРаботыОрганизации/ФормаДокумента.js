Ext.define('Документы.ВводИндивидуальныхГрафиковРаботыОрганизации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 486,width: 1000,
	iconCls: 'bogus',
	title: 'Ввод индивидуальных графиков работы организации',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:48px;top:33px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:159px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:379px;top:33px;width:169px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:379px;top:57px;width:169px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:57px;width:183px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:85px;top:434px;width:907px;height:19px;',
		},
	]
});