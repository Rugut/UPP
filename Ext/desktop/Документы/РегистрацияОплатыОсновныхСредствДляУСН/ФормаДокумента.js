Ext.define('Документы.РегистрацияОплатыОсновныхСредствДляУСН.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 359,width: 540,
	iconCls: 'bogus',
	title: 'Регистрация оплаты ОС и НМА для УСН',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:84px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:185px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:57px;width:221px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:282px;width:436px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:307px;width:436px;height:19px;',
		},
	]
});